import { useState } from 'react'
import WebToonStory from './components/WebToonStory'
import InquiryForm from './components/InquiryForm'
import './App.css'

function App() {
  const [showInquiryForm, setShowInquiryForm] = useState(false)

  const handleInquiryClick = () => {
    setShowInquiryForm(true)
    // 부드럽게 스크롤
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 100)
  }

  const handleBackToStory = () => {
    setShowInquiryForm(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen">
      {!showInquiryForm ? (
        // 웹툰 스토리 페이지
        <WebToonStory onInquiryClick={handleInquiryClick} />
      ) : (
        // 문의 폼 페이지
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <div className="container mx-auto px-4 py-8">
            {/* 뒤로가기 버튼 */}
            <div className="mb-6">
              <button
                onClick={handleBackToStory}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span>스토리로 돌아가기</span>
              </button>
            </div>

            <header className="text-center mb-12 animate-fade-in">
              <div className="mb-6">
                <div className="inline-block bg-gradient-to-r from-primary-600 to-blue-600 text-white px-8 py-3 rounded-full font-bold text-xl mb-4">
                  러닝소프트
                </div>
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-4">
                AI 자동화 솔루션
              </h1>
              <p className="text-xl text-gray-600 mb-2">
                맞춤형 AI 자동화 툴 개발 전문 기업
              </p>
              <p className="text-lg text-gray-500">
                비즈니스 프로세스를 혁신하는 AI 기술
              </p>
            </header>

            <InquiryForm />

            <footer className="mt-16 text-center text-gray-500 text-sm">
              <p>&copy; 2026 러닝소프트. All rights reserved.</p>
            </footer>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
