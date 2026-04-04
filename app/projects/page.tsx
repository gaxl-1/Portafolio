import Link from "next/link"
import { ExternalLink, Github, Terminal, Code2, Activity } from "lucide-react"

const projects = [
    {
        title: "Era Lemons v2",
        description: "Nueva versión del sistema de gestión para la comunidad Era Lemons, con funcionalidades avanzadas y mejor estabilidad.",
        link: "https://github.com/gaxl-1/era-lemons-v2",
        tech: ["Kotlin", "Minecraft API", "Java"],
        color: "#ff0000"
    },
    {
        title: "Gestor de Tareas",
        description: "Aplicación robusta para la gestión de tareas personales, permitiendo organizar el día a día con facilidad.",
        link: "https://github.com/gaxl-1/Gestor_Tareas",
        tech: ["Java", "Next.js", "MySQL"],
        color: "#ff0000"
    },
    {
        title: "Sistema Bancario Web",
        description: "Plataforma web segura para transacciones bancarias, simulando operaciones financieras de la vida real.",
        link: "https://github.com/gaxl-1/sistema-bancario-web",
        tech: ["Next.js", "Java", "PostgreSQL"],
        color: "#00f3ff"
    },
    {
        title: "BT Car Controller",
        description: "Sistema de control remoto para coche robot a través de Bluetooth e integración de hardware.",
        link: "https://github.com/gaxl-1/bt-car-controller",
        tech: ["C++", "Arduino", "IoT"],
        color: "#ffffff"
    },
    {
        title: "Coyotex",
        description: "Framework innovador enfocado en el alto rendimiento y la escalabilidad de aplicaciones.",
        link: "https://github.com/gaxl-1/Coyotex",
        tech: ["Full Stack", "Performance", "Software"],
        color: "#ff0000"
    },
    {
        title: "MindTrack",
        description: "Herramienta avanzada para el seguimiento de la productividad y gestión mental de tareas complejos.",
        link: "https://github.com/gaxl-1/MindTrack",
        tech: ["Productivity", "Management", "App"],
        color: "#ff0000"
    },
]

export const metadata = {
    title: "Archive Node | Jairo Gael",
    description: "Acceso al repositorio central de proyectos de Jairo Gael.",
}

export default function ProjectsPage() {
    return (
        <section className="py-24 relative overflow-hidden">
             <div className="container px-6 md:px-12 max-w-6xl mx-auto relative z-10">
                <div className="flex flex-col items-center text-center mb-16 space-y-4">
                    <div className="flex items-center gap-2 text-[#ff0000] font-mono text-xs uppercase tracking-[0.4em]">
                        <Activity className="w-4 h-4 animate-pulse" />
                        <span>ARCHIVE_NODE --INITIATED</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase italic leading-none">
                        REPOSITORIO DE <br/>
                        <span className="text-[#ff0000]">PROYECTOS</span>
                    </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <div key={index} className="group relative flex flex-col">
                            {/* Hover Glow */}
                            <div 
                                className="absolute -inset-0.5 opacity-0 group-hover:opacity-100 transition duration-500 blur-sm z-0" 
                                style={{ backgroundColor: project.color }}
                            />
                            
                            <div className="relative flex flex-col h-full bg-[#0a0a0a] border border-gray-900 p-6 md:p-8 z-10 group-hover:border-transparent transition-all">
                                <div className="flex items-start justify-between mb-6">
                                    <div className="w-10 h-10 border border-gray-800 flex items-center justify-center bg-black group-hover:border-white/50 transition-colors">
                                        <Code2 className="w-5 h-5 text-gray-500 group-hover:text-white" />
                                    </div>
                                    <Link href={project.link} target="_blank" className="p-2 hover:bg-gray-800 rounded transition-colors text-gray-400 hover:text-white">
                                        <Github className="w-5 h-5" />
                                    </Link>
                                </div>

                                <h2 className="text-xl font-bold text-white tracking-tight mb-3 group-hover:text-[#ff0000] transition-colors">
                                    {project.title}
                                </h2>
                                <p className="text-gray-400 font-mono text-xs leading-relaxed mb-8 flex-grow">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-900 mt-auto">
                                    {project.tech.map((t) => {
                                        const iconMap: { [key: string]: string } = {
                                            "Kotlin": "kotlin",
                                            "Java": "java",
                                            "Next.js": "nextjs",
                                            "MySQL": "mysql",
                                            "PostgreSQL": "postgres",
                                            "Arduino": "arduino",
                                            "C++": "cpp",
                                        };
                                        const icon = iconMap[t] || "code";
                                        return (
                                            <div key={t} className="flex items-center gap-1.5 px-2 py-1 bg-black border border-gray-800 rounded-sm">
                                                <img 
                                                    src={`https://skillicons.dev/icons?i=${icon}&theme=dark`} 
                                                    alt={t} 
                                                    className="w-3 h-3"
                                                />
                                                <span className="text-[8px] font-mono font-bold uppercase tracking-widest text-gray-500">
                                                    {t}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

