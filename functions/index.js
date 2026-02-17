const { onRequest } = require('firebase-functions/v2/https')
const nodemailer = require('nodemailer')

exports.sendInquiryEmail = onRequest(
  { region: 'asia-northeast3', cors: true },
  async (req, res) => {
    if (req.method !== 'POST') {
      res.status(405).send('Method Not Allowed')
      return
    }

    const { subject, message, from_name, from_email } = req.body

    try {
      console.log('GMAIL_USER:', process.env.GMAIL_USER ? '설정됨' : '없음')
      console.log('GMAIL_PASS:', process.env.GMAIL_PASS ? '설정됨' : '없음')

      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_PASS,
        },
      })

      await transporter.sendMail({
        from: `"러닝소프트 문의" <${process.env.GMAIL_USER}>`,
        to: 'oh.taehyung@gmail.com',
        subject: subject || `[문의] ${from_name}`,
        text: message,
      })

      console.log('메일 전송 성공')
      res.status(200).json({ success: true })
    } catch (error) {
      console.error('메일 전송 실패:', error)
      res.status(500).json({ success: false, error: error.message })
    }
  }
)
