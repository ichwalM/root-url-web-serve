import { Moon, Sun, Sparkles, Code } from 'lucide-react';
import logo from '/logo_iclabs.png'

const HeroHeader = ({setIsDark, isDark}) => {
    const toggleTheme = () => {
        setIsDark(!isDark);
        if (!isDark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };
    return (
        <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-700 shadow-lg">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 group">
                        {/* <Sparkles className="w-8 h-8 text-sky-400 animate-pulse" /> */}
                        <img className='h-14 w-auto mr-2 animate-pulse' src={logo} alt="" srcset="" />
                        <h1 className="text-3xl font-bold bg-gradient-to-r from-sky-300 via-blue-100 to-cyan-100 bg-clip-text text-transparent transform transition-all duration-300 group-hover:scale-105">
                            IC-LAB
                        </h1>
                    </div>

                    <button
                        onClick={toggleTheme}
                        className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-sky-400 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    >
                        {isDark ? (
                            <>
                                <Sun className="w-5 h-5 animate-spin" style={{ animationDuration: '3s' }} />
                                <span className="hidden sm:inline">Light</span>
                            </>
                        ) : (
                            <>
                                <Moon className="w-5 h-5" />
                                <span className="hidden sm:inline">Dark</span>
                            </>
                        )}
                    </button>
                </div>
            </div>
        </header>
    )
}
export default HeroHeader;