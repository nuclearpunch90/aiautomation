import { useState, useEffect } from 'react'

const DashboardPreview = () => {
    const [logs, setLogs] = useState([
        "System Initialized...",
        "Connecting to Database...",
    ])
    const [stats, setStats] = useState({
        processed: 1240,
        savedTime: 45,
        errors: 0
    })

    useEffect(() => {
        const interval = setInterval(() => {
            setStats(prev => ({
                processed: prev.processed + Math.floor(Math.random() * 5),
                savedTime: prev.savedTime + 0.1,
                errors: 0
            }))

            const newLogs = [
                `Processing Order #${Math.floor(Math.random() * 9000) + 1000}...`,
                `Extracting Data from Invoice...`,
                `Sending Auto-Reply to Customer...`,
                `Updating Inventory Status...`,
                `Categorizing Support Ticket...`
            ]
            const randomLog = newLogs[Math.floor(Math.random() * newLogs.length)]

            setLogs(prev => {
                const updated = [...prev, `[${new Date().toLocaleTimeString()}] ${randomLog}`]
                if (updated.length > 6) updated.shift()
                return updated
            })
        }, 1500)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="w-full max-w-4xl mx-auto my-12 p-4">
            <div className="bg-gray-900 rounded-lg shadow-2xl overflow-hidden border border-gray-700 font-mono text-sm">
                {/* Window Header */}
                <div className="bg-gray-800 px-4 py-2 flex items-center gap-2 border-b border-gray-700">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="flex-1 text-center text-gray-400 text-xs">AI_Automation_Bot_v2.0.exe</div>
                </div>

                {/* Dashboard Metrics */}
                <div className="grid grid-cols-3 gap-4 p-4 border-b border-gray-800 bg-gray-800/50">
                    <div className="text-center">
                        <div className="text-gray-400 text-xs uppercase tracking-wider">Processed Tasks</div>
                        <div className="text-2xl font-bold text-green-400">{stats.processed.toLocaleString()}</div>
                    </div>
                    <div className="text-center">
                        <div className="text-gray-400 text-xs uppercase tracking-wider">Hours Saved</div>
                        <div className="text-2xl font-bold text-blue-400">{stats.savedTime.toFixed(1)}h</div>
                    </div>
                    <div className="text-center">
                        <div className="text-gray-400 text-xs uppercase tracking-wider">Error Rate</div>
                        <div className="text-2xl font-bold text-gray-100">0%</div>
                    </div>
                </div>

                {/* Terminal Content */}
                <div className="p-4 h-48 overflow-y-auto bg-black/90 text-green-500 space-y-1">
                    {logs.map((log, i) => (
                        <div key={i} className="animate-fade-in opacity-80">
                            <span className="text-blue-400">➜</span> {log}
                        </div>
                    ))}
                    <div className="animate-pulse">_</div>
                </div>
            </div>
            <p className="text-center text-gray-500 text-sm mt-4">
                * 실제 AI 자동화 봇이 실시간으로 업무를 처리하는 모습입니다. (예시 화면)
            </p>
        </div>
    )
}

export default DashboardPreview
