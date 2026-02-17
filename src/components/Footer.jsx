const Footer = () => {
    return (
        <footer className="bg-gray-100 py-12 border-t border-gray-200">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
                <div className="mb-4">
                    <span className="text-xl font-bold text-gray-800">
                        러닝소프트
                    </span>
                </div>
                <div className="text-sm text-gray-500 space-y-2 mb-6">
                    <p className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4">
                        <span>대표: 오태형</span>
                        <span className="hidden sm:inline">|</span>
                        <span>사업자등록번호: 814-22-02165</span>
                    </p>
                    <p>
                        Copyright © 2026 Learning Soft. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
