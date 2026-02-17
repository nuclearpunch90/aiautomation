const SecuritySection = () => {
    return (
        <section className="py-6 bg-gray-50 border-t border-gray-100">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-xs md:text-sm text-gray-500">
                    <span className="font-bold text-gray-400 uppercase tracking-widest mr-2">SECURITY</span>
                    <div className="flex items-center gap-2">
                        <span>📝</span>
                        <span>모든 프로젝트 <strong>NDA(비밀유지계약)</strong> 체결</span>
                    </div>
                    <div className="hidden md:block w-px h-3 bg-gray-300"></div>
                    <div className="flex items-center gap-2">
                        <span>🔒</span>
                        <span>공식 API 사용으로 <strong>데이터 학습 방지</strong></span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SecuritySection
