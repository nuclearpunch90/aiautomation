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
          <p className="text-xl text-gray-600">
            사장님의 하루가 어떻게 달라졌을까요?
          </p>
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

        {/* CTA 버튼 */}
        <div className="mt-16 text-center">
          <div className="mb-6">
            <p className="text-2xl font-bold text-gray-900 mb-2">
              우리 회사도 이렇게 바꿀 수 있을까요? 🤔
            </p>
            <p className="text-xl text-gray-600">
              지금 바로 무료 상담을 받아보세요!
            </p>
          </div>

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
          </button>

          <p className="mt-4 text-gray-500">
            💬 상담은 무료이며, 부담 없이 문의하실 수 있습니다
          </p>
        </div>

        {/* 추가 신뢰 요소 */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
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
  )
}

export default WebToonStory
