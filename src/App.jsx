import { useState } from 'react'
import WebToonStory from './components/WebToonStory'
import InquiryForm from './components/InquiryForm'
import Navbar from './components/Navbar'
import FAQ from './components/FAQ'
import Process from './components/Process'
import Footer from './components/Footer'
import FloatingAction from './components/FloatingAction'
import WebsiteCreation from './components/WebsiteCreation'
import './App.css'

function App() {
  const [currentView, setCurrentView] = useState('website') // 'home', 'inquiry', 'faq'

  const handleInquiryClick = () => {
    setCurrentView('inquiry')
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 100)
  }

  const handleBackToStory = () => {
    setCurrentView('home')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleFaqClick = () => {
    setCurrentView('faq')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleProcessClick = () => {
    setCurrentView('process')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleWebsiteClick = () => {
    setCurrentView('website')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleAiAutomationClick = () => {
    setCurrentView('home')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const renderContent = () => {
    switch (currentView) {
      case 'inquiry':
        return (
          <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
            <div className="container mx-auto px-4 pt-24 pb-12">
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
            </div>
          </div>
        )
      case 'process':
        return <Process onBackToHome={handleBackToStory} onInquiryClick={handleInquiryClick} />
      case 'faq':
        return <FAQ onBackToHome={handleBackToStory} onInquiryClick={handleInquiryClick} />
      case 'website':
        return <WebsiteCreation onBackToHome={handleBackToStory} onInquiryClick={handleInquiryClick} />
      case 'home':
      default:
        return <WebToonStory onInquiryClick={handleInquiryClick} />
    }
  }

  return (
    <div className="min-h-screen">
      <Navbar
        onInquiryClick={handleInquiryClick}
        onBackToStory={handleBackToStory}
        onFaqClick={handleFaqClick}
        onProcessClick={handleProcessClick}
        onWebsiteClick={handleWebsiteClick}
        onAiAutomationClick={handleAiAutomationClick}
        currentView={currentView}
      />
      {renderContent()}
      <FloatingAction onInquiryClick={handleInquiryClick} showInquiryButton={currentView !== 'inquiry'} />
      <Footer />
    </div>
  )
}

export default App
