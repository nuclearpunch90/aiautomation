const FloatingAction = ({ onInquiryClick, showInquiryButton = true }) => {
    return (
        <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
            {/* 카카오톡 상담 버튼 */}
            <a
                href="http://pf.kakao.com/_UBAIX/chat"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                style={{ backgroundColor: '#FEE500', color: '#3A1D1D' }}
            >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 3C6.477 3 2 6.477 2 10.8c0 2.7 1.52 5.08 3.84 6.56l-.98 3.64 4.23-2.8c.91.2 1.88.3 2.91.3 5.523 0 10-3.477 10-7.8S17.523 3 12 3z" />
                </svg>
                <span className="hidden sm:inline">카카오톡 상담하기</span>
                <span className="sm:hidden">카카오 상담</span>
            </a>

            {/* 무료 진단 신청 버튼 */}
            {showInquiryButton && (
                <a
                    href="/website-inquiry.html"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 transform hover:-translate-y-1"
                >
                    <span className="text-xl">💼</span>
                    <span className="hidden sm:inline">사이트 제작 문의하기</span>
                    <span className="sm:hidden">제작 문의</span>
                </a>
            )}
        </div>
    )
}

export default FloatingAction
