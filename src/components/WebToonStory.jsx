import { useState, useEffect, useRef } from 'react'
import DashboardPreview from './DashboardPreview'
import UseCases from './UseCases'
import SecuritySection from './SecuritySection'

const WebToonStory = ({ onInquiryClick }) => {
  // Simple intersection observer hook for fade-in animations
  const useIntersectionObserver = (options) => {
    const containerRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      }, options)

      if (containerRef.current) {
        observer.observe(containerRef.current)
      }

      return () => {
        if (containerRef.current) observer.unobserve(containerRef.current)
      }
    }, [options])

    return [containerRef, isVisible]
  }

  const FadeInSection = ({ children, delay = 0 }) => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 })
    return (
      <div
        ref={ref}
        className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {children}
      </div>
    )
  }


  return (
    <div className="w-full overflow-hidden pt-16">
      {/* 
        =============================================
        SECTION 1: THE CRISIS (BEFORE)
        Dark, stressful, chaotic atmosphere
        =============================================
      */}
      <div className="bg-gray-900 text-white py-8 md:py-10 relative">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          {/* Chaotic background pattern */}
          <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48ZyBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDQwaDQwVjBIMHY0MHptMjAtMjB2MjBoMjBWMjBhMjAgMjAgMCAwIDEtMjAgMjB6IiBmaWxsPSIjZmYwMDAwIiBmaWxsLWb3cGFjaXR5PSIwLjEiLz48L2c+PC9zdmc+')]"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <FadeInSection>
            <div className="text-center mb-6 md:mb-8">
              <span className="inline-block bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold tracking-widest mb-2 animate-pulse">
                경고: 업무 과부하
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold leading-tight mb-2 font-sans">
                "사장님, 저 더 이상은<br />
                <span className="text-red-500">못 버티겠습니다...</span>"
              </h2>
              <p className="text-gray-400 text-xs md:text-sm">매일 반복되는 야근, 인건비 부담, 늘어가는 실수...</p>
            </div>
          </FadeInSection>

          {/* GRID LAYOUT: 3 PANELS FOR BEFORE */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
            {/* PANEL 1: Overworked Employee */}
            <FadeInSection delay={200}>
              <div className="relative group h-full">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-600 rounded-sm blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-white p-2 rounded-sm transform rotate-1 transition-transform group-hover:rotate-0 duration-500 h-full flex flex-col">
                  <div className="relative flex-grow">
                    <img src="/webtoon/before-1.png" alt="Overworked employee" className="w-full h-auto object-cover filter contrast-125 aspect-square" />
                    <div className="absolute top-4 left-4 bg-white text-black p-3 rounded-2xl rounded-tr-none shadow-xl border-2 border-black max-w-[80%] transform -rotate-2">
                      <p className="font-bold text-xs md:text-sm leading-snug">"일이 너무 많아서<br />미치겠어요... 😭"</p>
                    </div>
                  </div>
                  <p className="text-center mt-2 pb-1 text-red-400 font-bold text-base">1. 고통받는 직원</p>
                </div>
              </div>
            </FadeInSection>

            {/* PANEL 2: Labor Cost Stress */}
            <FadeInSection delay={400}>
              <div className="relative group h-full">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-600 rounded-sm blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-white p-2 rounded-sm transform -rotate-1 transition-transform group-hover:rotate-0 duration-500 h-full flex flex-col">
                  <div className="relative flex-grow">
                    <img src="/webtoon/before-2.png" alt="Labor cost stress" className="w-full h-auto object-cover filter contrast-125 grayscale aspect-square"
                      onError={(e) => { e.target.src = "/webtoon/before-1.png" }} />
                    <div className="absolute bottom-12 right-4 bg-white text-black p-3 rounded-2xl rounded-tl-none shadow-xl border-2 border-black max-w-[80%] transform rotate-2">
                      <p className="font-bold text-xs md:text-sm leading-snug">"인건비는 오르는데<br />효율은 왜 이럴까..."</p>
                    </div>
                  </div>
                  <p className="text-center mt-2 pb-1 text-red-400 font-bold text-base">2. 인건비 부담</p>
                </div>
              </div>
            </FadeInSection>

            {/* PANEL 3: Human Error */}
            <FadeInSection delay={600}>
              <div className="relative group h-full">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-600 rounded-sm blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-white p-2 rounded-sm transform rotate-1 transition-transform group-hover:rotate-0 duration-500 h-full flex flex-col">
                  <div className="relative flex-grow">
                    <img src="/webtoon/before-3.png" alt="Human error" className="w-full h-auto object-cover filter contrast-125 sepia aspect-square"
                      onError={(e) => { e.target.src = "/webtoon/before-1.png" }} />
                    <div className="absolute top-8 right-8 bg-red-100 text-red-900 p-3 rounded-2xl rounded-bl-none shadow-xl border-2 border-red-500 max-w-[80%] transform -rotate-1">
                      <p className="font-bold text-xs md:text-sm leading-snug">"헉! 또 실수했다...<br />손해가 얼마야?!"</p>
                    </div>
                  </div>
                  <p className="text-center mt-2 pb-1 text-red-400 font-bold text-base">3. 잦은 업무 실수</p>
                </div>
              </div>
            </FadeInSection>
          </div>

          <FadeInSection delay={800}>
            <div className="mt-8 p-3 bg-red-900/50 border border-red-700 rounded-lg text-center backdrop-blur-sm mx-auto max-w-lg">
              <p className="font-bold text-sm text-red-200 mb-1">비효율의 악순환</p>
              <div className="flex justify-center space-x-2 text-xs text-red-300">
                <span>📉 인건비 상승</span>
                <span>•</span>
                <span>😫 직원 이탈</span>
                <span>•</span>
                <span>🐢 성장 정체</span>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>

      {/* 
        =============================================
        TRANSITION SECTION
        Dramatic Turnaround
        =============================================
      */}
      <div className="bg-gradient-to-b from-gray-900 to-blue-900 py-6 text-center">
        <FadeInSection>
          <div className="inline-block p-2 border-y-2 border-white/20">
            <h3 className="text-lg md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200 italic">
              "AI 자동화를 도입 할 때가 됐습니다"
            </h3>
          </div>
          <div className="mt-4 flex justify-center">
            <div className="w-0.5 h-10 bg-gradient-to-b from-gray-500 to-blue-500 rounded-full"></div>
          </div>
        </FadeInSection>

        {/* DASHBOARD PREVIEW */}
        <FadeInSection delay={200}>
          <DashboardPreview />
        </FadeInSection>
      </div>

      {/* 
        =============================================
        SECTION 2: THE RESOLUTION (AFTER)
        Bright, clean, futuristic atmosphere
        =============================================
      */}
      <div className="bg-blue-50 py-8 md:py-10 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <FadeInSection>
            <div className="text-center mb-6 md:mb-8">
              <div className="flex justify-center gap-2 mb-2">
                <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold tracking-widest">
                  솔루션: AI 자동화
                </span>
                <span className="inline-block bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold tracking-widest animate-pulse">
                  100% 무료 방문 진단
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold leading-tight mb-2 font-sans text-gray-900">
                100명이 할 일을<br />
                <span className="text-blue-600">AI 혼자 끝냈습니다!</span>
              </h2>
              <p className="text-gray-600 text-xs md:text-sm">압도적인 속도, 0%의 실수, 24시간 풀가동</p>
            </div>
          </FadeInSection>

          {/* GRID LAYOUT: 3 PANELS FOR AFTER */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto mb-16">
            {/* PANEL 1: Liberated Employees */}
            <FadeInSection delay={200}>
              <div className="relative group h-full">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative bg-white p-2 rounded-lg shadow-2xl transform -rotate-1 transition-transform group-hover:rotate-0 duration-500 h-full flex flex-col">
                  <div className="relative flex-grow">
                    <img src="/webtoon/after-1.png" alt="Liberated employees" className="w-full h-auto object-cover aspect-square" />
                    <div className="absolute top-4 left-4 bg-sky-50 text-sky-900 p-3 rounded-2xl rounded-tr-none shadow-lg border border-sky-200 max-w-[80%] transform rotate-2">
                      <p className="font-bold text-xs md:text-sm leading-snug">"단순 업무 해방!<br />창의적인 일만 해요 ✨"</p>
                    </div>
                  </div>
                  <p className="text-center mt-2 pb-1 text-blue-600 font-bold text-base">1. 직원들의 해방</p>
                </div>
              </div>
            </FadeInSection>

            {/* PANEL 2: Cost Savings */}
            <FadeInSection delay={400}>
              <div className="relative group h-full">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative bg-white p-2 rounded-lg shadow-2xl transform rotate-1 transition-transform group-hover:rotate-0 duration-500 h-full flex flex-col">
                  <div className="relative flex-grow">
                    <img src="/webtoon/after-2.png" alt="Cost savings" className="w-full h-auto object-cover aspect-square"
                      onError={(e) => { e.target.src = "/webtoon/after-1.png" }} />
                    <div className="absolute bottom-12 right-4 bg-yellow-50 text-yellow-900 p-3 rounded-2xl rounded-tl-none shadow-lg border border-yellow-200 max-w-[80%] transform -rotate-2">
                      <p className="font-bold text-xs md:text-sm leading-snug">"인건비 70% 절감!<br />순이익이 폭발한다 💰"</p>
                    </div>
                  </div>
                  <p className="text-center mt-2 pb-1 text-blue-600 font-bold text-base">2. 엄청난 비용 절감</p>
                </div>
              </div>
            </FadeInSection>

            {/* PANEL 3: Trust & Reliability */}
            <FadeInSection delay={600}>
              <div className="relative group h-full">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative bg-white p-2 rounded-lg shadow-2xl transform -rotate-1 transition-transform group-hover:rotate-0 duration-500 h-full flex flex-col">
                  <div className="relative flex-grow">
                    <img src="/webtoon/after-3.png" alt="Trust and reliability" className="w-full h-auto object-cover sepia-0 aspect-square"
                      onError={(e) => { e.target.src = "/webtoon/after-1.png" }} />
                    <div className="absolute top-8 right-8 bg-green-50 text-green-900 p-3 rounded-2xl rounded-bl-none shadow-lg border border-green-200 max-w-[80%] transform rotate-1">
                      <p className="font-bold text-xs md:text-sm leading-snug">"실수 제로! 거래처<br />신뢰도가 급상승 🤝"</p>
                    </div>
                  </div>
                  <p className="text-center mt-2 pb-1 text-blue-600 font-bold text-base">3. 신뢰와 성장</p>
                </div>
              </div>
            </FadeInSection>
          </div>

          {/* USE CASES SECTION */}
          <FadeInSection delay={700}>
            <UseCases />
          </FadeInSection>

          {/* SECURITY SECTION REMOVED FROM HERE */}


          <FadeInSection delay={900}>
            <div className="mt-10 text-center">
              <p className="text-lg font-bold text-gray-800 mb-4">
                당신의 비즈니스도<br />
                이렇게 변할 수 있습니다
              </p>

              <button
                onClick={onInquiryClick}
                className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-4 px-10 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group text-base mx-auto"
              >
                <span>🚀 무료 방문 진단 신청하기</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <div className="mt-4 space-y-1">
                <p className="text-sm font-bold text-blue-600">
                  "부담 갖지 마세요! 진단 비용은 0원입니다."
                </p>
                <p className="text-xs text-gray-500">
                  * 전문가가 직접 방문하여 정밀 분석 후, 제안 드립니다. 마음에 안 들면 안 하셔도 됩니다.
                </p>
              </div>
            </div>
          </FadeInSection>

        </div>
      </div>

      {/* SECURITY SECTION - At bottom, above footer */}
      <SecuritySection />

      {/* Custom Styles for Animations */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animate-bounce-slow {
           animation: bounce 3s infinite;
        }
      `}</style>
    </div>
  )
}

export default WebToonStory
