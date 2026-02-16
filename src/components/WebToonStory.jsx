import { useState, useEffect, useRef } from 'react'

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
    <div className="w-full overflow-hidden">
      {/* 
        =============================================
        SECTION 1: THE CRISIS (BEFORE)
        Dark, stressful, chaotic atmosphere
        =============================================
      */}
      <div className="bg-gray-900 text-white py-20 relative">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          {/* Chaotic background pattern */}
          <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48ZyBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDQwaDQwVjBIMHY0MHptMjAtMjB2MjBoMjBWMjBhMjAgMjAgMCAwIDEtMjAgMjB6IiBmaWxsPSIjZmYwMDAwIiBmaWxsLWb3cGFjaXR5PSIwLjEiLz48L2c+PC9zdmc+')]"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <FadeInSection>
            <div className="text-center mb-16">
              <span className="inline-block bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold tracking-widest mb-4 animate-pulse">
                WARNING: OVERLOAD
              </span>
              <h2 className="text-4xl font-extrabold leading-tight mb-2 font-sans">
                "사장님, 저 더 이상은<br />
                <span className="text-red-500">못 버티겠습니다...</span>"
              </h2>
              <p className="text-gray-400">매일 반복되는 야근, 인건비 부담, 늘어가는 실수...</p>
            </div>
          </FadeInSection>

          {/* VERTICAL STACK: 2 PANELS FOR BEFORE */}
          <div className="flex flex-col gap-16 max-w-2xl mx-auto">
            {/* PANEL 1: Overworked Employee */}
            <FadeInSection delay={200}>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-600 rounded-sm blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-white p-2 rounded-sm transform rotate-1 transition-transform group-hover:rotate-0 duration-500">
                  <img src="/webtoon/before-1.png" alt="Overworked employee" className="w-full h-auto object-cover filter contrast-125" />
                  <div className="absolute top-4 left-4 bg-white text-black p-4 rounded-2xl rounded-tr-none shadow-xl border-2 border-black max-w-[240px] transform -rotate-2">
                    <p className="font-bold text-lg leading-snug">"일이 너무 많아서<br />미치겠어요... 😭"</p>
                  </div>
                </div>
                <p className="text-center mt-6 text-red-400 font-bold text-xl">1. 고통받는 직원</p>
              </div>
            </FadeInSection>

            {/* PANEL 2: Labor Cost Stress */}
            <FadeInSection delay={400}>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-600 rounded-sm blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-white p-2 rounded-sm transform -rotate-1 transition-transform group-hover:rotate-0 duration-500">
                  <img src="/webtoon/before-2.png" alt="Labor cost stress" className="w-full h-auto object-cover filter contrast-125 grayscale"
                    onError={(e) => { e.target.src = "/webtoon/before-1.png" }} />
                  <div className="absolute bottom-12 right-4 bg-white text-black p-4 rounded-2xl rounded-tl-none shadow-xl border-2 border-black max-w-[240px] transform rotate-2">
                    <p className="font-bold text-lg leading-snug">"인건비는 계속 오르는데<br />효율은 왜 이럴까..."</p>
                  </div>
                </div>
                <p className="text-center mt-6 text-red-400 font-bold text-xl">2. 인건비 부담</p>
              </div>
            </FadeInSection>

            {/* PANEL 3: Human Error */}
            <FadeInSection delay={600}>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-600 rounded-sm blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-white p-2 rounded-sm transform rotate-1 transition-transform group-hover:rotate-0 duration-500">
                  <img src="/webtoon/before-3.png" alt="Human error" className="w-full h-auto object-cover filter contrast-125 sepia"
                    onError={(e) => { e.target.src = "/webtoon/before-1.png" }} />
                  <div className="absolute top-8 right-8 bg-red-100 text-red-900 p-4 rounded-2xl rounded-bl-none shadow-xl border-2 border-red-500 max-w-[240px] transform -rotate-1">
                    <p className="font-bold text-lg leading-snug">"헉! 또 실수했다...<br />손해가 얼마야?!"</p>
                  </div>
                </div>
                <p className="text-center mt-6 text-red-400 font-bold text-xl">3. 잦은 업무 실수</p>
              </div>
            </FadeInSection>
          </div>

          <FadeInSection delay={800}>
            <div className="mt-16 p-6 bg-red-900/50 border border-red-700 rounded-lg text-center backdrop-blur-sm mx-auto max-w-2xl">
              <p className="font-bold text-lg text-red-200 mb-2">비효율의 악순환</p>
              <div className="flex justify-center space-x-2 text-sm text-red-300">
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
      <div className="bg-gradient-to-b from-gray-900 to-blue-900 py-16 text-center">
        <FadeInSection>
          <div className="inline-block p-4 border-y-4 border-white/20">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200 italic">
              "그때, 러닝소프트를 만났습니다"
            </h3>
          </div>
          <div className="mt-8 flex justify-center">
            <div className="w-1 h-24 bg-gradient-to-b from-gray-500 to-blue-500 rounded-full"></div>
          </div>
        </FadeInSection>
      </div>

      {/* 
        =============================================
        SECTION 2: THE RESOLUTION (AFTER)
        Bright, clean, futuristic atmosphere
        =============================================
      */}
      <div className="bg-blue-50 py-20 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <FadeInSection>
            <div className="text-center mb-16">
              <span className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold tracking-widest mb-4">
                SOLUTION: AI AUTOMATION
              </span>
              <h2 className="text-4xl font-extrabold leading-tight mb-2 font-sans text-gray-900">
                100명이 할 일을<br />
                <span className="text-blue-600">AI 혼자 끝냈습니다!</span>
              </h2>
              <p className="text-gray-600">압도적인 속도, 0%의 실수, 24시간 풀가동</p>
            </div>
          </FadeInSection>

          {/* VERTICAL STACK: 2 PANELS FOR AFTER */}
          <div className="flex flex-col gap-16 max-w-2xl mx-auto">
            {/* PANEL 1: Liberated Employees */}
            <FadeInSection delay={200}>
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative bg-white p-2 rounded-lg shadow-2xl transform -rotate-1 transition-transform group-hover:rotate-0 duration-500">
                  <img src="/webtoon/after-1.png" alt="Liberated employees" className="w-full h-auto object-cover" />
                  <div className="absolute top-4 left-4 bg-sky-50 text-sky-900 p-4 rounded-2xl rounded-tr-none shadow-lg border border-sky-200 max-w-[240px] transform rotate-2">
                    <p className="font-bold text-lg leading-snug">"단순 업무 해방!<br />창의적인 일만 해요 ✨"</p>
                  </div>
                </div>
                <p className="text-center mt-6 text-blue-600 font-bold text-xl">1. 직원들의 해방</p>
              </div>
            </FadeInSection>

            {/* PANEL 2: Cost Savings */}
            <FadeInSection delay={400}>
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative bg-white p-2 rounded-lg shadow-2xl transform rotate-1 transition-transform group-hover:rotate-0 duration-500">
                  <img src="/webtoon/after-2.svg" alt="Cost savings" className="w-full h-auto object-cover"
                    onError={(e) => { e.target.src = "/webtoon/after-1.png" }} />
                  <div className="absolute bottom-12 right-4 bg-yellow-50 text-yellow-900 p-4 rounded-2xl rounded-tl-none shadow-lg border border-yellow-200 max-w-[240px] transform -rotate-2">
                    <p className="font-bold text-lg leading-snug">"인건비 70% 절감!<br />순이익이 폭발한다 💰"</p>
                  </div>
                </div>
                <p className="text-center mt-6 text-blue-600 font-bold text-xl">2. 엄청난 비용 절감</p>
              </div>
            </FadeInSection>

            {/* PANEL 3: Trust & Reliability */}
            <FadeInSection delay={600}>
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative bg-white p-2 rounded-lg shadow-2xl transform -rotate-1 transition-transform group-hover:rotate-0 duration-500">
                  <img src="/webtoon/after-3.png" alt="Trust and reliability" className="w-full h-auto object-cover sepia-0"
                    onError={(e) => { e.target.src = "/webtoon/after-1.png" }} />
                  <div className="absolute top-8 right-8 bg-green-50 text-green-900 p-4 rounded-2xl rounded-bl-none shadow-lg border border-green-200 max-w-[240px] transform rotate-1">
                    <p className="font-bold text-lg leading-snug">"실수 제로! 거래처<br />신뢰도가 급상승 🤝"</p>
                  </div>
                </div>
                <p className="text-center mt-6 text-blue-600 font-bold text-xl">3. 신뢰와 성장</p>
              </div>
            </FadeInSection>
          </div>

          <FadeInSection delay={800}>
            <div className="mt-20 text-center">
              <p className="text-xl font-bold text-gray-800 mb-6">
                당신의 비즈니스도<br />
                이렇게 변할 수 있습니다
              </p>

              <button
                onClick={onInquiryClick}
                className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-5 px-12 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group text-lg mx-auto"
              >
                <span>🚀 무료 자동화 진단 받기</span>
                <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <p className="mt-4 text-sm text-gray-500">
                * 선착순 10팀 한정 무료 컨설팅 진행 중
              </p>
            </div>
          </FadeInSection>

        </div>
      </div>

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
