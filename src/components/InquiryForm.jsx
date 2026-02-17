import { useState, useEffect, useRef } from 'react'

const FUNCTION_URL = 'https://asia-northeast3-htmlprojects-58993.cloudfunctions.net/sendInquiryEmail'

const QUESTIONS = [
  {
    id: 'name',
    message: '안녕하세요! 😊 상담 신청해 주셔서 감사합니다.\n담당자 성함을 알려주세요.',
    type: 'text',
    placeholder: '예: 홍길동',
    required: true,
  },
  {
    id: 'company',
    message: '반갑습니다, {name}님! 🙌\n회사명 또는 상호명을 알려주세요.',
    type: 'text',
    placeholder: '예: (주)회사명',
    required: true,
  },
  {
    id: 'companySize',
    message: '회사 규모는 어떻게 되시나요?',
    type: 'choice',
    choices: ['1~10명 (스타트업)', '11~50명 (중소기업)', '51~200명 (중견기업)', '201명 이상 (대기업)'],
    required: false,
  },
  {
    id: 'problem',
    message: '어떤 업무를 자동화하거나 해결하고 싶으신가요? 🤔\n간단히 말씀해 주세요!',
    type: 'textarea',
    placeholder: '예: 반복적인 엑셀 입력 작업을 자동화하고 싶습니다.',
    required: true,
  },
  {
    id: 'contactMethod',
    message: '선호하시는 연락 방법을 선택해 주세요.',
    type: 'choice',
    choices: ['이메일', '전화'],
    required: true,
  },
  {
    id: 'email',
    message: '연락받으실 이메일 주소를 알려주세요. 📧',
    type: 'email',
    placeholder: '예: example@company.com',
    required: true,
  },
  {
    id: 'phone',
    message: '마지막으로 연락처를 남겨주세요. 📱',
    type: 'tel',
    placeholder: '예: 010-1234-5678',
    required: true,
  },
]

const ChatBubbleBot = ({ text }) => (
  <div className="flex items-start gap-3 animate-fade-in">
    <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow">
      AI
    </div>
    <div className="bg-white border border-gray-200 rounded-2xl rounded-tl-none px-4 py-3 max-w-xs md:max-w-md shadow-sm">
      <p className="text-gray-800 text-sm whitespace-pre-line">{text}</p>
    </div>
  </div>
)

const ChatBubbleUser = ({ text }) => (
  <div className="flex justify-end animate-fade-in">
    <div className="bg-blue-600 text-white rounded-2xl rounded-tr-none px-4 py-3 max-w-xs md:max-w-md shadow-sm">
      <p className="text-sm">{text}</p>
    </div>
  </div>
)

const InquiryForm = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState({})
  const [inputValue, setInputValue] = useState('')
  const [chatHistory, setChatHistory] = useState([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [isTyping, setIsTyping] = useState(true)
  const bottomRef = useRef(null)
  const inputRef = useRef(null)

  const currentQuestion = QUESTIONS[currentStep]

  const resolveMessage = (msg, ans) => {
    return msg.replace('{name}', ans.name || '')
  }

  // 첫 메시지 표시
  useEffect(() => {
    setIsTyping(true)
    const timer = setTimeout(() => {
      setIsTyping(false)
      setChatHistory([{ role: 'bot', text: resolveMessage(QUESTIONS[0].message, {}) }])
    }, 600)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
    if (!isTyping && currentQuestion?.type !== 'choice') {
      inputRef.current?.focus()
    }
  }, [chatHistory, isTyping])

  const handleSubmitAnswer = (value) => {
    if (!value.trim() && currentQuestion.required) return

    const displayValue = value.trim() || '건너뜀'
    const newAnswers = { ...answers, [currentQuestion.id]: value.trim() }
    setAnswers(newAnswers)
    setInputValue('')

    setChatHistory(prev => [...prev, { role: 'user', text: displayValue }])

    const nextStep = currentStep + 1

    if (nextStep >= QUESTIONS.length) {
      // 완료 - 제출
      setIsTyping(true)
      setTimeout(() => {
        setIsTyping(false)
        setChatHistory(prev => [
          ...prev,
          { role: 'bot', text: '감사합니다! 🎉 입력하신 내용을 확인하고 빠르게 연락드리겠습니다.' }
        ])
        handleFinalSubmit(newAnswers)
      }, 800)
    } else {
      setIsTyping(true)
      setTimeout(() => {
        setIsTyping(false)
        const nextQ = QUESTIONS[nextStep]
        setChatHistory(prev => [
          ...prev,
          { role: 'bot', text: resolveMessage(nextQ.message, newAnswers) }
        ])
        setCurrentStep(nextStep)
      }, 700)
    }
  }

  const handleFinalSubmit = async (finalAnswers) => {
    setIsSubmitting(true)
    try {
      const message = `[AI 자동화 문의]

담당자: ${finalAnswers.name || '-'}
회사명: ${finalAnswers.company || '-'}
회사 규모: ${finalAnswers.companySize || '-'}
자동화 요청 내용: ${finalAnswers.problem || '-'}
선호 연락 방법: ${finalAnswers.contactMethod || '-'}
이메일: ${finalAnswers.email || '-'}
연락처: ${finalAnswers.phone || '-'}`

      const res = await fetch(FUNCTION_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from_name: finalAnswers.name,
          from_email: finalAnswers.email,
          subject: `[AI 자동화 문의] ${finalAnswers.company} - ${finalAnswers.name}`,
          message,
        }),
      })

      if (!res.ok) throw new Error('전송 실패')

      setIsSubmitting(false)
      setSubmitSuccess(true)
    } catch (error) {
      console.error('전송 실패:', error)
      alert('문의 전송에 실패했습니다. 다시 시도해주세요.')
      setIsSubmitting(false)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmitAnswer(inputValue)
    }
  }

  if (submitSuccess) {
    return (
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 text-center animate-fade-in">
        <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">문의가 접수되었습니다!</h2>
        <p className="text-lg text-gray-600 mb-8">빠른 시일 내에 담당자가 연락드리겠습니다.</p>
        <button
          onClick={() => {
            setSubmitSuccess(false)
            setAnswers({})
            setInputValue('')
            setCurrentStep(0)
            setIsTyping(true)
            setChatHistory([])
            setTimeout(() => {
              setIsTyping(false)
              setChatHistory([{ role: 'bot', text: resolveMessage(QUESTIONS[0].message, {}) }])
            }, 600)
          }}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          새로운 문의하기
        </button>
      </div>
    )
  }

  const isDone = currentStep >= QUESTIONS.length

  return (
    <div className="max-w-2xl mx-auto">
      {/* 상단 이메일 */}
      <div className="bg-blue-50 border-2 border-blue-100 rounded-xl p-4 mb-4 text-center">
        <p className="text-gray-600 text-sm mb-1">이메일로 빠른 상담 가능합니다</p>
        <a href="mailto:learningsoft90@gmail.com" className="text-blue-700 font-bold hover:text-blue-800 transition-colors">
          📧 learningsoft90@gmail.com
        </a>
      </div>

      {/* 채팅 창 */}
      <div className="bg-gray-50 rounded-2xl shadow-xl overflow-hidden">
        {/* 헤더 */}
        <div className="bg-blue-600 px-5 py-4 flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-sm">
            AI
          </div>
          <div>
            <p className="text-white font-bold text-sm">러닝소프트 AI 상담</p>
            <p className="text-blue-200 text-xs">상담 및 진단 전액 무료</p>
          </div>
          <div className="ml-auto flex gap-1">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-blue-200 text-xs">온라인</span>
          </div>
        </div>

        {/* 진행 바 */}
        <div className="h-1 bg-gray-200">
          <div
            className="h-1 bg-blue-500 transition-all duration-500"
            style={{ width: `${(currentStep / QUESTIONS.length) * 100}%` }}
          />
        </div>

        {/* 메시지 영역 */}
        <div className="px-4 py-5 space-y-4 overflow-y-auto" style={{ minHeight: '340px', maxHeight: '400px' }}>
          {chatHistory.map((msg, i) =>
            msg.role === 'bot'
              ? <ChatBubbleBot key={i} text={msg.text} />
              : <ChatBubbleUser key={i} text={msg.text} />
          )}

          {/* 타이핑 인디케이터 */}
          {isTyping && (
            <div className="flex items-start gap-3 animate-fade-in">
              <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow">
                AI
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl rounded-tl-none px-4 py-3 shadow-sm">
                <div className="flex gap-1 items-center h-4">
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                </div>
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* 입력 영역 */}
        {!isDone && !isTyping && (
          <div className="border-t border-gray-200 bg-white px-4 py-3">
            {currentQuestion.type === 'choice' ? (
              <div className="flex flex-wrap gap-2">
                {currentQuestion.choices.map((choice) => (
                  <button
                    key={choice}
                    onClick={() => handleSubmitAnswer(choice)}
                    className="px-4 py-2 bg-blue-50 border-2 border-blue-200 text-blue-700 font-medium rounded-full text-sm hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all"
                  >
                    {choice}
                  </button>
                ))}
                {!currentQuestion.required && (
                  <button
                    onClick={() => handleSubmitAnswer('')}
                    className="px-4 py-2 bg-gray-100 border-2 border-gray-200 text-gray-500 font-medium rounded-full text-sm hover:bg-gray-200 transition-all"
                  >
                    건너뜀
                  </button>
                )}
              </div>
            ) : currentQuestion.type === 'textarea' ? (
              <div className="flex gap-2">
                <textarea
                  ref={inputRef}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  rows={2}
                  placeholder={currentQuestion.placeholder}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none text-sm"
                />
                <button
                  onClick={() => handleSubmitAnswer(inputValue)}
                  disabled={currentQuestion.required && !inputValue.trim()}
                  className="px-4 py-2 bg-blue-600 text-white rounded-xl font-medium text-sm hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all flex-shrink-0"
                >
                  전송
                </button>
              </div>
            ) : (
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type={currentQuestion.type}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder={currentQuestion.placeholder}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-sm"
                />
                <button
                  onClick={() => handleSubmitAnswer(inputValue)}
                  disabled={currentQuestion.required && !inputValue.trim()}
                  className="px-4 py-2 bg-blue-600 text-white rounded-xl font-medium text-sm hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all flex-shrink-0"
                >
                  전송
                </button>
              </div>
            )}
          </div>
        )}

        {isSubmitting && (
          <div className="border-t border-gray-200 bg-white px-4 py-4 text-center text-sm text-gray-500">
            문의를 전송하는 중입니다...
          </div>
        )}
      </div>

      <p className="text-xs text-gray-400 text-center mt-3">
        제출하신 정보는 문의 응답 목적으로만 사용되며, 안전하게 보호됩니다.
      </p>
    </div>
  )
}

export default InquiryForm
