const Process = ({ onBackToHome, onInquiryClick }) => {
    const steps = [
        {
            number: "01",
            title: "상담 및 니즈 분석",
            description: "전문가가 직접 방문하여 업무 프로세스를 정밀 분석합니다. 비용은 0원이며, 부담 없이 상담 받아보실 수 있습니다."
        },
        {
            number: "02",
            title: "솔루션 기획",
            description: "분석된 니즈를 바탕으로 최적의 AI 자동화 솔루션을 기획합니다. 예상되는 도입 효과와 구체적인 로드맵을 제시합니다."
        },
        {
            number: "03",
            title: "계약 및 착수",
            description: "제안된 솔루션과 견적에 대해 합의하고 계약을 체결합니다. 프로젝트 전담 팀이 구성되고 본격적인 개발에 착수합니다."
        },
        {
            number: "04",
            title: "개발 및 테스트",
            description: "기획안에 따라 AI 모델 학습 및 시스템 개발을 진행합니다. 철저한 내부 테스트를 통해 오류를 최소화하고 성능을 검증합니다."
        },
        {
            number: "05",
            title: "최종 전달 및 교육",
            description: "완성된 솔루션을 고객사에 전달하고, 담당자가 원활하게 사용할 수 있도록 매뉴얼 제공 및 사용자 교육을 실시합니다."
        },
        {
            number: "06",
            title: "유지보수",
            description: "시스템 도입 후에도 안정적인 운영을 위해 지속적인 모니터링과 유지보수를 지원합니다. 필요 시 기능 고도화를 진행합니다."
        }
    ]

    return (
        <div className="min-h-screen bg-white pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <span className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-bold mb-4">
                        모든 상담과 진단은 100% 무료입니다
                    </span>
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        진행 절차
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
                        체계적인 프로세스를 통해 성공적인 AI 자동화 도입을 지원합니다.
                    </p>
                </div>

                <div className="relative">
                    {/* Vertical line for desktop */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-100"></div>

                    <div className="space-y-12">
                        {steps.map((step, index) => (
                            <div key={index} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                {/* Number Circle */}
                                <div className="flex-shrink-0 mb-4 md:mb-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10">
                                    <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold shadow-lg border-4 border-white">
                                        {step.number}
                                    </div>
                                </div>

                                {/* Content Card */}
                                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'} text-center md:text-left`}>
                                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                                        <p className="text-gray-600 leading-relaxed">{step.description}</p>
                                    </div>
                                </div>

                                {/* Empty space for the other side */}
                                <div className="hidden md:block w-1/2"></div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-20 text-center space-x-4">
                    <button
                        onClick={onBackToHome}
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-gray-700 bg-white border-gray-300 hover:bg-gray-50 shadow-sm transition-colors"
                    >
                        홈으로 돌아가기
                    </button>
                    <button
                        onClick={onInquiryClick}
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-colors"
                    >
                        문의하기
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Process
