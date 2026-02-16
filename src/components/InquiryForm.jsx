import { useState } from 'react'
import emailjs from '@emailjs/browser'

const InquiryForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    companySize: '',
    problem: '',
    contactMethod: '',
    email: '',
    phone: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // EmailJS 설정
      const serviceId = 'YOUR_SERVICE_ID'
      const templateId = 'YOUR_TEMPLATE_ID'
      const publicKey = 'YOUR_PUBLIC_KEY'

      const emailData = {
        to_email: 'your-email@example.com',
        from_name: formData.name,
        from_company: formData.company,
        company_size: formData.companySize,
        problem: formData.problem,
        contact_method: formData.contactMethod,
        from_email: formData.email,
        from_phone: formData.phone,
      }

      // EmailJS로 이메일 전송
      // await emailjs.send(serviceId, templateId, emailData, publicKey)

      // 테스트를 위해 콘솔에 출력
      console.log('문의 내용:', emailData)

      setSubmitSuccess(true)
      setIsSubmitting(false)
    } catch (error) {
      console.error('전송 실패:', error)
      alert('문의 전송에 실패했습니다. 다시 시도해주세요.')
      setIsSubmitting(false)
    }
  }

  if (submitSuccess) {
    return (
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 text-center animate-fade-in">
        <div className="mb-6">
          <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
            <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          문의가 성공적으로 전송되었습니다!
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          빠른 시일 내에 담당자가 연락드리겠습니다.
        </p>
        <button
          onClick={() => {
            setSubmitSuccess(false)
            setFormData({
              name: '',
              company: '',
              companySize: '',
              problem: '',
              contactMethod: '',
              email: '',
              phone: '',
            })
          }}
          className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
        >
          새로운 문의하기
        </button>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 animate-slide-up">
        <div className="mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg animate-pulse">
              ⚡ 자동화 안되는 프로세스는 없습니다
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            문의하기
          </h2>
          <p className="text-gray-600">
            AI 자동화가 필요하신가요? 간단히 정보를 남겨주시면 빠르게 연락드리겠습니다.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* 담당자 이름 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              담당자 이름 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
              placeholder="홍길동"
            />
          </div>

          {/* 회사 이름 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              회사 이름 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
              placeholder="(주)회사명"
            />
          </div>

          {/* 회사 규모 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              회사 규모 <span className="text-red-500">*</span>
            </label>
            <select
              name="companySize"
              value={formData.companySize}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
            >
              <option value="">선택해주세요</option>
              <option value="1-10명">1-10명 (스타트업)</option>
              <option value="11-50명">11-50명 (중소기업)</option>
              <option value="51-200명">51-200명 (중견기업)</option>
              <option value="201-500명">201-500명 (대기업)</option>
              <option value="500명 이상">500명 이상 (대기업)</option>
            </select>
          </div>

          {/* 문제 설명 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              어떤 문제를 해결하고 싶으신가요? <span className="text-red-500">*</span>
            </label>
            <textarea
              name="problem"
              value={formData.problem}
              onChange={handleInputChange}
              required
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition resize-none"
              placeholder="예시:
- 고객 문의 응답에 시간이 너무 많이 소요됩니다
- 반복적인 데이터 입력 작업을 자동화하고 싶습니다
- 대량의 문서를 분류하고 정리하는 과정이 필요합니다
- 기타 자동화가 필요한 업무를 자유롭게 작성해주세요"
            />
          </div>

          {/* 선호하는 연락 방법 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              선호하는 연락 방법 <span className="text-red-500">*</span>
            </label>
            <div className="space-y-3">
              <label className="flex items-center space-x-3 p-4 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer transition">
                <input
                  type="radio"
                  name="contactMethod"
                  value="이메일"
                  checked={formData.contactMethod === '이메일'}
                  onChange={handleInputChange}
                  required
                  className="w-5 h-5 text-primary-600 focus:ring-primary-500"
                />
                <div>
                  <div className="font-medium text-gray-900">이메일</div>
                  <div className="text-sm text-gray-500">이메일로 답변을 받고 싶습니다</div>
                </div>
              </label>

              <label className="flex items-center space-x-3 p-4 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer transition">
                <input
                  type="radio"
                  name="contactMethod"
                  value="전화"
                  checked={formData.contactMethod === '전화'}
                  onChange={handleInputChange}
                  required
                  className="w-5 h-5 text-primary-600 focus:ring-primary-500"
                />
                <div>
                  <div className="font-medium text-gray-900">전화</div>
                  <div className="text-sm text-gray-500">전화 상담을 원합니다</div>
                </div>
              </label>

              <label className="flex items-center space-x-3 p-4 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer transition">
                <input
                  type="radio"
                  name="contactMethod"
                  value="카카오톡"
                  checked={formData.contactMethod === '카카오톡'}
                  onChange={handleInputChange}
                  required
                  className="w-5 h-5 text-primary-600 focus:ring-primary-500"
                />
                <div>
                  <div className="font-medium text-gray-900">카카오톡</div>
                  <div className="text-sm text-gray-500">카카오톡으로 연락 주세요</div>
                </div>
              </label>
            </div>
          </div>

          {/* 연락처 정보 */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                이메일 <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                placeholder="example@company.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                연락처 <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                placeholder="010-1234-5678"
              />
            </div>
          </div>

          {/* 제출 버튼 */}
          <div className="pt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 rounded-lg font-semibold text-lg transition-all ${
                isSubmitting
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
              }`}
            >
              {isSubmitting ? '전송 중...' : '문의 제출하기'}
            </button>
          </div>
        </form>

        {/* 개인정보 처리방침 */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-xs text-gray-500 text-center">
            제출하신 정보는 문의 응답 목적으로만 사용되며, 안전하게 보호됩니다.
          </p>
        </div>
      </div>

      {/* 추가 연락 정보 */}
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-600 mb-2">
          급하신가요? 바로 연락주세요!
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
          <a href="mailto:contact@runningsoft.co.kr" className="text-primary-600 hover:text-primary-700 font-medium">
            📧 contact@runningsoft.co.kr
          </a>
          <span className="hidden sm:inline text-gray-400">|</span>
          <a href="tel:02-1234-5678" className="text-primary-600 hover:text-primary-700 font-medium">
            📞 02-1234-5678
          </a>
        </div>
      </div>
    </div>
  )
}

export default InquiryForm
