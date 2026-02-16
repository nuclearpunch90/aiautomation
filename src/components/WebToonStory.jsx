import { useState } from 'react'

const WebToonStory = ({ onInquiryClick }) => {
  const scenes = [
    {
      title: "AI 자동화 도입 전...",
      type: "before",
      panels: [
        {
          image: "/webtoon/before-1.png",
          bgColor: "bg-red-50"
        },
        {
          image: "/webtoon/before-2.png",
          bgColor: "bg-red-50"
        },
        {
          image: "/webtoon/before-3.png",
          bgColor: "bg-red-50"
        }
      ]
    },
    {
      title: "AI 자동화 도입 후!",
      type: "after",
      panels: [
        {
          image: "/webtoon/after-1.png",
          bgColor: "bg-blue-50"
        },
        {
          image: "/webtoon/after-2.png",
          bgColor: "bg-blue-50"
        },
        {
          image: "/webtoon/after-3.png",
          bgColor: "bg-blue-50"
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* 헤더 */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="mb-6">
            <div className="inline-block bg-gradient-to-r from-primary-600 to-blue-600 text-white px-8 py-3 rounded-full font-bold text-xl mb-4">
              러닝소프트
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            AI 자동화로 바뀐 우리 회사 📈
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            사장님의 하루가 어떻게 달라졌을까요?
          </p>
          {/* 강력한 메시지 */}
          <div className="inline-block animate-pulse">
            <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-2 rounded-full font-bold text-lg shadow-lg">
              ⚡ 자동화 안되는 프로세스는 없습니다
            </div>
          </div>
        </div>

        {/* 웹툰 패널들 */}
        <div className="space-y-16">
          {scenes.map((scene, sceneIdx) => (
            <div key={sceneIdx} className="animate-slide-up">
              {/* 씬 타이틀 */}
              <div className="text-center mb-8">
                <div className={`inline-block px-8 py-3 rounded-full ${
                  scene.type === 'before'
                    ? 'bg-red-100 text-red-700'
                    : 'bg-green-100 text-green-700'
                } font-bold text-2xl mb-2`}>
                  {scene.title}
                </div>
              </div>

              {/* 패널들 */}
              <div className="space-y-6">
                {scene.panels.map((panel, panelIdx) => (
                  <div
                    key={panelIdx}
                    className={`border-4 ${
                      scene.type === 'before' ? 'border-red-300' : 'border-blue-300'
                    } rounded-2xl overflow-hidden shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl bg-white`}
                  >
                    <img
                      src={panel.image}
                      alt={`${scene.type} panel ${panelIdx + 1}`}
                      className="w-full h-auto"
                      onError={(e) => {
                        // 이미지 로드 실패 시 플레이스홀더 표시
                        e.target.style.display = 'none'
                        e.target.nextElementSibling.style.display = 'flex'
                      }}
                    />
                    {/* 이미지 로드 실패 시 플레이스홀더 */}
                    <div className={`hidden ${panel.bgColor} p-16 items-center justify-center`}>
                      <div className="text-center">
                        <div className="text-6xl mb-4">🖼️</div>
                        <p className="text-gray-600 font-medium">
                          이미지를 업로드해주세요
                        </p>
                        <p className="text-sm text-gray-500 mt-2">
                          {panel.image}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 강력한 메시지 섹션 */}
        <div className="mt-16 bg-gradient-to-r from-orange-50 to-red-50 rounded-3xl p-8 border-2 border-orange-200">
          <div className="text-center">
            <div className="inline-block mb-4">
              <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-3 rounded-full font-bold text-2xl shadow-lg animate-pulse">
                ⚡ 자동화 안되는 프로세스는 없습니다
              </div>
            </div>
            <p className="text-lg text-gray-700 font-medium">
              어떤 반복 업무든, 어떤 복잡한 프로세스든<br />
              러닝소프트가 AI로 완벽하게 자동화합니다
            </p>
          </div>
        </div>

        {/* CTA 버튼 */}
        <div className="mt-12 text-center">
          <div className="mb-6">
            <p className="text-2xl font-bold text-gray-900 mb-2">
              우리 회사도 이렇게 바꿀 수 있을까요? 🤔
            </p>
            <p className="text-xl text-gray-600">
              지금 바로 무료 상담을 받아보세요!
            </p>
          </div>

          <div className="relative inline-block">
            <button
              onClick={onInquiryClick}
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-primary-600 to-blue-600 text-white px-12 py-6 rounded-2xl text-2xl font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
            >
              <span>✨ 무료 상담 신청하기</span>
              <svg
                className="w-8 h-8 group-hover:translate-x-2 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>

              {/* 호버 시 나타나는 장점 카드 */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                <div className="bg-white rounded-2xl shadow-2xl p-6 w-80 border-2 border-primary-200">
                  <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full text-xs font-bold text-center mb-4">
                    ⚡ 모든 프로세스 자동화 가능
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">
                    🚀 AI 자동화의 핵심 이점
                  </h3>
                  <div className="space-y-3">
                    {[
                      { icon: "💰", title: "인건비 대폭 절감", desc: "반복 업무 자동화로 인력 비용 70% 감소" },
                      { icon: "⚡", title: "효율성 극대화", desc: "사람의 10배 빠른 처리 속도" },
                      { icon: "🌙", title: "24/7 무중단 운영", desc: "밤낮없이 쉬지 않고 일하는 AI" },
                      { icon: "✅", title: "실수 제로", desc: "휴먼 에러 완벽 차단" },
                      { icon: "📈", title: "무한 확장성", desc: "업무량 증가해도 추가 비용 없음" },
                      { icon: "🚀", title: "모든 프로세스 가능", desc: "자동화 안되는 업무는 없습니다" },
                    ].map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-3 bg-blue-50 p-3 rounded-lg">
                        <span className="text-2xl flex-shrink-0">{benefit.icon}</span>
                        <div className="text-left">
                          <div className="font-bold text-gray-900 text-sm">{benefit.title}</div>
                          <div className="text-xs text-gray-600">{benefit.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* 화살표 */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
                    <div className="w-4 h-4 bg-white border-r-2 border-b-2 border-primary-200 transform rotate-45"></div>
                  </div>
                </div>
              </div>
            </button>
          </div>

          <p className="mt-4 text-gray-500">
            💬 상담은 무료이며, 부담 없이 문의하실 수 있습니다
          </p>
        </div>

        {/* 추가 신뢰 요소 */}
        <div className="mt-12">
          <div className="text-center mb-6">
            <span className="inline-block bg-orange-100 text-orange-800 px-4 py-1 rounded-full text-sm font-semibold">
              모든 산업군, 모든 프로세스 자동화 경험 보유 ✅
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { number: "500+", label: "고객사" },
              { number: "1,000+", label: "프로젝트" },
              { number: "98%", label: "만족도" },
              { number: "24/7", label: "지원" }
            ].map((stat, idx) => (
              <div key={idx} className="p-4">
                <div className="text-3xl font-bold text-primary-600">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default WebToonStory
