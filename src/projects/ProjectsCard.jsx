import { useState } from "react";
import { ExternalLink, Sparkles, FolderOpen, Code } from 'lucide-react';


const ProjectCard = ({ project, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <a  href={project.url}
            target="_blank"
            className="group relative"
            style={{ animationDelay: `${index * 100}ms` }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-500 animate-pulse`}></div>

            <div className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer border border-gray-200 dark:border-gray-700">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                    <img
                        src={project.image}
                        alt={project.title}
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
                        {project.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, idx) => (
                            <span
                                key={idx}
                                className={`px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${project.gradient} text-white shadow-md transform transition-all duration-300 hover:scale-110`}
                                style={{ animationDelay: `${idx * 50}ms` }}
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <a
                        href={project.url}
                        target="_blank"
                        className="inline-flex items-center gap-2 text-sky-500 hover:text-sky-600 dark:text-sky-400 dark:hover:text-sky-300 font-semibold transition-colors duration-300"
                        onClick={(e) => e.stopPropagation()}
                    >
                        View Project
                        <span className={`transition-transform duration-300 ${isHovered ? 'translate-x-2' : ''}`}>→</span>
                    </a>
                </div>
            </div>
        </a>
    );
};
export default ProjectCard;