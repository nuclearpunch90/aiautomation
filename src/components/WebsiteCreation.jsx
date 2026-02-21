import { useState, useEffect, useRef } from 'react'

const WebsiteCreation = ({ onBackToHome, onInquiryClick }) => {
    // Intersection observer for fade-in animations
    const FadeInSection = ({ children, delay = 0 }) => {
        const [isVisible, setVisible] = useState(false)
        const domRef = useRef()

        useEffect(() => {
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setTimeout(() => setVisible(true), delay)
                    }
                })
            })

            const currentRef = domRef.current
            if (currentRef) {
                observer.observe(currentRef)
            }

            return () => {
                if (currentRef) {
                    observer.unobserve(currentRef)
                }
            }
        }, [delay])

        return (
            <div
                ref={domRef}
                className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
                {children}
            </div>
        )
    }

    return (
        <div className="w-full overflow-hidden pt-16">
            {/* 
        =============================================
        SECTION 1: THE PROBLEM (BEFORE)
        =============================================
      */}
            <div className="bg-gray-900 text-white py-8 md:py-10 relative">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
                    <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48ZyBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDQwaDQwVjBIMHY0MHptMjAtMjB2MjBoMjBWMjBhMjAgMjAgMCAwIDEtMjAgMjB6IiBmaWxsPSIjZmYwMDAwIiBmaWxsLWb3cGFjaXR5PSIwLjEiLz48L2c+PC9zdmc+')]"></div>
                </div>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
                    <FadeInSection>
                        <div className="text-center mb-6 md:mb-8">
                            <span className="inline-block bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold tracking-widest mb-2 animate-pulse">
                                위험: 낡은 웹사이트
                            </span>
                            <h2 className="text-2xl md:text-3xl font-extrabold leading-tight mb-2 font-sans">
                                "웹사이트가 이래서는...<br />
                                <span className="text-red-500">고객이 도망갑니다"</span>
                            </h2>
                            <p className="text-gray-400 text-xs md:text-sm">모바일에서 깨지고, 느리고, 복잡한 웹사이트...</p>
                        </div>
                    </FadeInSection>

                    {/* GRID LAYOUT: 3 PANELS FOR BEFORE */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
                        {/* PANEL 1: Broken Mobile */}
                        <FadeInSection delay={200}>
                            <div className="relative group h-full">
                                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-600 rounded-sm blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                                <div className="relative bg-gray-800 rounded-sm overflow-hidden h-full flex flex-col">
                                    <img
                                        src="/website_before_1_1771318007268.png"
                                        alt="Broken mobile website"
                                        className="w-full h-48 md:h-64 object-contain bg-gray-100"
                                    />
                                    <div className="p-3 md:p-4 flex-grow flex flex-col justify-center">
                                        <p className="text-red-400 font-bold text-xs md:text-sm mb-1">1. 고통받는 사장님</p>
                                        <p className="text-gray-300 text-xs md:text-sm leading-tight">모바일에서 레이아웃 완전 깨짐</p>
                                    </div>
                                </div>
                            </div>
                        </FadeInSection>

                        {/* PANEL 2: Frustrated Customer */}
                        <FadeInSection delay={300}>
                            <div className="relative group h-full">
                                <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-sm blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                                <div className="relative bg-gray-800 rounded-sm overflow-hidden h-full flex flex-col">
                                    <img
                                        src="/website_before_2_1771318025617.png"
                                        alt="Frustrated customer"
                                        className="w-full h-48 md:h-64 object-contain bg-gray-100"
                                    />
                                    <div className="p-3 md:p-4 flex-grow flex flex-col justify-center">
                                        <p className="text-orange-400 font-bold text-xs md:text-sm mb-1">2. 떠나는 고객</p>
                                        <p className="text-gray-300 text-xs md:text-sm leading-tight">너무 복잡해서 바로 이탈</p>
                                    </div>
                                </div>
                            </div>
                        </FadeInSection>

                        {/* PANEL 3: Competitor */}
                        <FadeInSection delay={400}>
                            <div className="relative group h-full">
                                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 to-red-600 rounded-sm blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                                <div className="relative bg-gray-800 rounded-sm overflow-hidden h-full flex flex-col">
                                    <img
                                        src="/website_before_3_1771318051985.png"
                                        alt="Competitor advantage"
                                        className="w-full h-48 md:h-64 object-contain bg-gray-100"
                                    />
                                    <div className="p-3 md:p-4 flex-grow flex flex-col justify-center">
                                        <p className="text-yellow-400 font-bold text-xs md:text-sm mb-1">3. 뒤처진 경쟁력</p>
                                        <p className="text-gray-300 text-xs md:text-sm leading-tight">경쟁사는 이미 최신 사이트로...</p>
                                    </div>
                                </div>
                            </div>
                        </FadeInSection>
                    </div>

                    {/* Problems Summary Box */}
                    <FadeInSection delay={500}>
                        <div className="mt-6 md:mt-8 bg-red-900/20 border border-red-500/30 rounded-lg p-4 max-w-2xl mx-auto">
                            <p className="text-center text-sm md:text-base font-bold text-red-300 mb-2">비즈니스의 악순환</p>
                            <div className="flex flex-wrap justify-center gap-2 text-xs md:text-sm">
                                <span className="bg-red-800/30 px-2 py-1 rounded">📱 반응형 안됨</span>
                                <span className="bg-red-800/30 px-2 py-1 rounded">⏱️ 느린 미디어</span>
                                <span className="bg-red-800/30 px-2 py-1 rounded">🚫 낮은 전환</span>
                            </div>
                        </div>
                    </FadeInSection>
                </div>
            </div>

            {/* 
        =============================================
        TRANSITION SECTION
        =============================================
      */}
            <div className="bg-gradient-to-b from-gray-900 to-purple-900 py-6 text-center">
                <FadeInSection>
                    <div className="inline-block p-2 border-y-2 border-white/20">
                        <h3 className="text-lg md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-pink-200 italic">
                            "전문적인 웹사이트가 필요한 시점입니다"
                        </h3>
                    </div>
                    <div className="mt-4 flex justify-center">
                        <div className="w-0.5 h-10 bg-gradient-to-b from-gray-500 to-purple-500 rounded-full"></div>
                    </div>
                </FadeInSection>
            </div>

            {/* 
        =============================================
        SECTION 2: THE SOLUTION (AFTER)
        =============================================
      */}
            <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-8 md:py-12 relative">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
                    <FadeInSection>
                        <div className="text-center mb-6 md:mb-10">
                            <span className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold tracking-widest mb-2">
                                해결책: 전문 웹사이트 제작
                            </span>
                            <h2 className="text-2xl md:text-4xl font-extrabold leading-tight mb-2">
                                이제는<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">완벽한 사이트로 성공하세요</span>
                            </h2>
                            <p className="text-gray-600 text-xs md:text-sm">프로가 만든 웹사이트의 힘</p>
                        </div>
                    </FadeInSection>

                    {/* GRID LAYOUT: 3 PANELS FOR AFTER */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
                        {/* PANEL 1: Modern Design */}
                        <FadeInSection delay={200}>
                            <div className="relative group h-full">
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-sm blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                                <div className="relative bg-white rounded-sm overflow-hidden h-full flex flex-col shadow-xl">
                                    <img
                                        src="/website_after_1_1771318092899.png"
                                        alt="Modern design presentation"
                                        className="w-full h-48 md:h-64 object-contain bg-gray-100"
                                    />
                                    <div className="p-3 md:p-4 flex-grow flex flex-col justify-center">
                                        <p className="text-blue-600 font-bold text-xs md:text-sm mb-1">1. 모던한 디자인</p>
                                        <p className="text-gray-700 text-xs md:text-sm leading-tight">최신 트렌드의 세련된 UI/UX</p>
                                    </div>
                                </div>
                            </div>
                        </FadeInSection>

                        {/* PANEL 2: Happy Customer */}
                        <FadeInSection delay={300}>
                            <div className="relative group h-full">
                                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-sm blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                                <div className="relative bg-white rounded-sm overflow-hidden h-full flex flex-col shadow-xl">
                                    <img
                                        src="/website_after_2_1771318117633.png"
                                        alt="Happy customer browsing"
                                        className="w-full h-48 md:h-64 object-contain bg-gray-100"
                                    />
                                    <div className="p-3 md:p-4 flex-grow flex flex-col justify-center">
                                        <p className="text-purple-600 font-bold text-xs md:text-sm mb-1">2. 만족하는 고객</p>
                                        <p className="text-gray-700 text-xs md:text-sm leading-tight">완벽한 반응형으로 편한 이용</p>
                                    </div>
                                </div>
                            </div>
                        </FadeInSection>

                        {/* PANEL 3: Business Growth */}
                        <FadeInSection delay={400}>
                            <div className="relative group h-full">
                                <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-blue-500 rounded-sm blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                                <div className="relative bg-white rounded-sm overflow-hidden h-full flex flex-col shadow-xl">
                                    <img
                                        src="/website_after_3_1771318151427.png"
                                        alt="Business growth analytics"
                                        className="w-full h-48 md:h-64 object-contain bg-gray-100"
                                    />
                                    <div className="p-3 md:p-4 flex-grow flex flex-col justify-center">
                                        <p className="text-pink-600 font-bold text-xs md:text-sm mb-1">3. 비즈니스 성장</p>
                                        <p className="text-gray-700 text-xs md:text-sm leading-tight">전환율 상승, 매출 증가</p>
                                    </div>
                                </div>
                            </div>
                        </FadeInSection>
                    </div>

                    {/* Benefits Summary Box */}
                    <FadeInSection delay={500}>
                        <div className="mt-6 md:mt-8 bg-gradient-to-r from-blue-50 to-purple-50 border border-purple-200 rounded-lg p-4 max-w-2xl mx-auto">
                            <p className="text-center text-sm md:text-base font-bold text-purple-700 mb-2">프로 웹사이트의 강점</p>
                            <div className="flex flex-wrap justify-center gap-2 text-xs md:text-sm">
                                <span className="bg-white/70 px-2 py-1 rounded shadow-sm">📱 완벽한 반응형</span>
                                <span className="bg-white/70 px-2 py-1 rounded shadow-sm">⚡ 빠른 속도</span>
                                <span className="bg-white/70 px-2 py-1 rounded shadow-sm">🔍 SEO 최적화</span>
                                <span className="bg-white/70 px-2 py-1 rounded shadow-sm">📈 높은 전환율</span>
                            </div>
                        </div>
                    </FadeInSection>
                </div>
            </div>

            {/* Process Section */}
            <div className="bg-white py-12 md:py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <FadeInSection>
                        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">제작 프로세스</h2>
                    </FadeInSection>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { step: "1", title: "상담", desc: "요구사항 분석 및 기획" },
                            { step: "2", title: "디자인", desc: "UI/UX 설계 및 승인" },
                            { step: "3", title: "개발", desc: "코딩 및 기능 구현" },
                            { step: "4", title: "런칭", desc: "배포 및 사후 지원" }
                        ].map((item, index) => (
                            <FadeInSection key={index} delay={200 + index * 100}>
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                                        {item.step}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-gray-600 text-sm">{item.desc}</p>
                                </div>
                            </FadeInSection>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 py-12">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <FadeInSection>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                            당신의 비즈니스도<br />
                            이렇게 변할 수 있습니다
                        </h2>
                        <button
                            onClick={onInquiryClick}
                            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-4 px-10 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 mx-auto text-lg mb-4"
                        >
                            <span>💼 웹사이트 제작 문의하기</span>
                        </button>
                        <p className="text-gray-500 text-sm">무료 상담 및 견적 제공</p>
                    </FadeInSection>
                </div>
            </div>
        </div>
    )
}

export default WebsiteCreation
