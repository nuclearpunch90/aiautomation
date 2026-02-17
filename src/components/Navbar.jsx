import { useState, useEffect } from 'react'

const Navbar = ({ onInquiryClick, onBackToStory, onFaqClick, onProcessClick, onWebsiteClick, onAiAutomationClick, currentView }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    // Handle scroll effect for navbar background
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const toggleMenu = () => {
        setIsOpen(!isOpen)
        // Prevent scrolling when menu is open
        if (!isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    }

    const handleLinkClick = (action) => {
        setIsOpen(false)
        document.body.style.overflow = 'unset'
        if (action) action()
    }

    return (
        <>
            <nav
                className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white shadow-sm text-gray-900"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Service Selection Buttons */}
                        <div className="flex gap-2">
                            <button
                                onClick={onAiAutomationClick}
                                className={`px-4 py-2 rounded-lg font-bold text-sm transition-all ${currentView === 'home' || currentView === 'inquiry' || currentView === 'faq' || currentView === 'process'
                                    ? 'bg-blue-600 text-white shadow-md'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                            >
                                AI 프로세스 자동화
                            </button>
                            <a
                                href="/website.html"
                                className="px-4 py-2 rounded-lg font-bold text-sm transition-all bg-gray-100 text-gray-600 hover:bg-gray-200"
                            >
                                사이트 제작
                            </a>
                        </div>

                        {/* Hamburger Button */}
                        <div className="flex items-center">
                            <button
                                onClick={toggleMenu}
                                className="p-2 rounded-md focus:outline-none text-gray-900 hover:bg-gray-100"
                                aria-label="Menu"
                            >
                                <div className="w-6 flex flex-col items-end gap-1.5">
                                    <span
                                        className={`block h-0.5 bg-current transition-all duration-300 ${isOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`}
                                    ></span>
                                    <span
                                        className={`block h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : 'w-4'}`}
                                    ></span>
                                    <span
                                        className={`block h-0.5 bg-current transition-all duration-300 ${isOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-5'}`}
                                    ></span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                style={{ top: '0', paddingTop: '80px' }}
            >
                <div className="flex flex-col items-center justify-center h-full space-y-8 pb-20">
                    <button
                        onClick={() => handleLinkClick(onBackToStory)}
                        className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors"
                    >
                        서비스 소개
                    </button>
                    <button
                        onClick={() => handleLinkClick(onProcessClick)}
                        className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors"
                    >
                        진행 절차
                    </button>
                    <button
                        onClick={() => handleLinkClick(onFaqClick)}
                        className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors"
                    >
                        자주 묻는 질문
                    </button>
                    <button
                        onClick={() => handleLinkClick(onInquiryClick)}
                        className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
                    >
                        문의하기
                    </button>
                </div>
            </div>
        </>
    )
}

export default Navbar
