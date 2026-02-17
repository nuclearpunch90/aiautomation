import { useState } from 'react'

const FAQ = ({ onBackToHome, onInquiryClick }) => {
    const faqs = [
        {
            question: "AI 자동화 도입 비용은 어느 정도인가요?",
            answer: "비용은 고객사의 니즈와 프로젝트 범위에 따라 달라질 수 있습니다. 무료 상담을 통해 귀사의 현재 상황을 분석하고, 가장 효율적인 맞춤형 견적을 제안해 드립니다."
        },
        {
            question: "구축 기간은 얼마나 걸리나요?",
            answer: "프로젝트의 규모에 따라 최소 1개월에서 최대 6개월까지 소요될 수 있습니다. 간단한 자동화는 빠르게 도입 가능하며, 복잡한 시스템 구축은 단계별로 진행됩니다."
        },
        {
            question: "기존에 사용하던 프로그램과 연동이 되나요?",
            answer: "네, 가능합니다. 엑셀, 구글 시트, 슬랙, 카카오톡, 노션, ERP 등 다양한 업무 툴과의 API 연동을 통해 기존 업무 환경을 그대로 유지하면서 효율을 극대화할 수 있습니다."
        },
        {
            question: "개발 이후 유지보수는 어떻게 되나요?",
            answer: "시스템 안정화를 위한 모니터링과 유지보수 서비스를 제공합니다. AI 모델의 업데이트나 업무 프로세스 변경에 따른 수정 사항도 지속적으로 지원해 드립니다."
        },
        {
            question: "제가 코딩을 전혀 모르는데 사용 가능한가요?",
            answer: "물론입니다. 저희는 사용자가 코딩 지식 없이도 쉽게 사용할 수 있는 직관적인 인터페이스(UI)를 제공하며, 사용 매뉴얼과 교육도 함께 진행해 드립니다."
        },
        {
            question: "보안 문제는 없나요?",
            answer: "고객사의 데이터 보안을 최우선으로 생각합니다. 모든 데이터는 암호화되어 처리되며, 고객사의 승인 없는 데이터 활용은 절대 발생하지 않습니다. 필요시 비밀유지계약(NDA)을 체결합니다."
        },
        {
            question: "상담이나 진단을 받으면 무조건 계약해야 하나요?",
            answer: "절대 아닙니다. 저희가 직접 방문하여 분석해 드리는 것까지 모두 100% 무료이며, 제안 내용을 검토하시고 마음에 드실 때 진행하시면 됩니다. 부담 갖지 마시고 신청해 주세요."
        }
    ]

    const [openIndex, setOpenIndex] = useState(null)

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        자주 묻는 질문
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
                        AI 자동화 도입에 대해 궁금한 점을 해결해 드립니다.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden transition-all duration-200 hover:shadow-md"
                        >
                            <button
                                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                                onClick={() => toggleFAQ(index)}
                            >
                                <span className="text-lg font-medium text-gray-900">
                                    {faq.question}
                                </span>
                                <span className={`transform transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}>
                                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </span>
                            </button>
                            <div
                                className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div className="px-6 pb-4 text-gray-600 border-t border-gray-100 pt-4 bg-gray-50/50">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center space-x-4">
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

export default FAQ
