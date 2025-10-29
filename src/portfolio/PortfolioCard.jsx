import { useState } from "react";
import { Sun, ExternalLink, FolderOpen, Code } from 'lucide-react';


const PortfolioCard = ({ portfolio, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <a
            href={portfolio.url}
            target="_blank"
            className="group relative"
            style={{ animationDelay: `${index * 100}ms` }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={`absolute -inset-0.5 bg-gradient-to-r ${portfolio.gradient} rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-500 animate-pulse`}></div>

            <div className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer border border-gray-200 dark:border-gray-700">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                    <img
                        src={portfolio.image}
                        alt={portfolio.title}
                        className={`w-full h-full object-cover transition-all duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-70'}`}></div>
                    <div className="absolute top-3 right-3 flex items-center gap-2">
                        <Code className="w-5 h-5 text-white drop-shadow-lg" />
                        <ExternalLink className={`w-5 h-5 text-white drop-shadow-lg transition-all duration-300 ${isHovered ? 'translate-x-1 -translate-y-1' : ''}`} />
                    </div>
                </div>

                {/* Content */}
                <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
                        {portfolio.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                        {portfolio.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                        {portfolio.tech.map((tech, idx) => (
                            <span
                                key={idx}
                                className={`px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${portfolio.gradient} text-white shadow-md transform transition-all duration-300 hover:scale-110`}
                                style={{ animationDelay: `${idx * 50}ms` }}
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <a
                    href={portfolio.url}
                    className={`inline-flex items-center justify-center w-full gap-2 px-4 py-3 rounded-xl bg-gradient-to-r ${portfolio.gradient} text-white font-semibold shadow-lg transition-all duration-300 hover:shadow-xl transform ${isHovered ? 'scale-105' : ''}`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <FolderOpen className="w-5 h-5" />
                    Explore Collection
                    <span className={`transition-transform duration-300 ${isHovered ? 'translate-x-2' : ''}`}>→</span>
                </a>
                </div>
            </div>
        </a>
    );
};
export default PortfolioCard;