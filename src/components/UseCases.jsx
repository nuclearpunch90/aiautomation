const UseCases = () => {
    const cases = [
        {
            icon: "🛍️",
            title: "쇼핑몰 CS 자동화",
            result: "문의 응답 시간 95% 단축",
            desc: "단순 배송/교환 문의는 AI가 즉시 처리하고, 상담원은 복잡한 클레임만 집중하여 고객 만족도 상승."
        },
        {
            icon: "📦",
            title: "주문 수집 및 송장 자동화",
            result: "처리 시간 90% 단축",
            desc: "쇼핑몰, 메신저로 들어오는 주문을 자동으로 수집하여 엑셀 정리 및 택배사 송장 등록까지 원클릭 해결."
        },
        {
            icon: "📢",
            title: "마케팅 콘텐츠 생성",
            result: "노출수 300% 증가",
            desc: "트렌드 키워드를 분석하여 블로그/SNS 포스팅 초안을 자동 생성하고 업로드까지 한 번에."
        }
    ]

    return (
        <div className="py-12 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-10">
                    <h3 className="text-2xl font-bold text-gray-900">
                        이미 다양한 분야에서<br />
                        <span className="text-blue-600">놀라운 성과</span>를 내고 있습니다
                    </h3>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    {cases.map((item, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                            <div className="text-4xl mb-4">{item.icon}</div>
                            <h4 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h4>
                            <div className="text-blue-600 font-extrabold text-lg mb-3">
                                {item.result}
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default UseCases
