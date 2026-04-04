import { Terminal, Shield, Lock, Cpu } from "lucide-react"

const distros = ["Kali Linux", "Arch Linux", "Ubuntu Mono", "Fedora", "Debian", "Parrot OS"]

export function Footer() {
    return (
        <footer className="relative border-t border-gray-900 bg-black/80 py-12 overflow-hidden">
            {/* Background noise/scanlines effect */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
            
            <div className="container px-6 md:px-12 max-w-6xl mx-auto space-y-12 relative z-10">
                
                {/* Linux Distros List */}
                <div className="flex flex-col items-center justify-center space-y-6">
                    <p className="font-mono text-[10px] uppercase tracking-[0.5em] text-gray-500">Supported_Environments</p>
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
                        {distros.map((distro) => (
                            <span key={distro} className="font-mono text-xs text-gray-400 hover:text-[#ff0000] transition-colors cursor-default">
                                {distro}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-8 border-t border-gray-900">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                          <span className="font-black text-white tracking-widest text-lg uppercase">JAIRO GAEL</span>
                          <span className="text-[#ff0000] text-xs font-mono font-bold px-2 py-0.5 border border-[#ff0000]/30 bg-[#ff0000]/5 rounded">
                            v2.0.26
                          </span>
                        </div>
                        <p className="text-gray-500 text-[10px] font-mono tracking-widest uppercase">
                            © 2026 Todos los registros reservados // root@gaeldev
                        </p>
                    </div>

                    <div className="flex items-center gap-12">
                        <div className="hidden lg:flex items-center gap-6 opacity-30 group cursor-help">
                           <Shield className="w-5 h-5 text-gray-400 group-hover:text-[#ff0000] transition-colors" />
                           <Lock className="w-5 h-5 text-gray-400 group-hover:text-[#ff0000] transition-colors" />
                           <Cpu className="w-5 h-5 text-gray-400 group-hover:text-[#00f3ff] transition-colors" />
                        </div>
                        
                        <div className="flex items-center gap-6">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <span className="font-mono text-xs uppercase tracking-widest">LinkedIn</span>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <span className="font-mono text-xs uppercase tracking-widest">GitHub</span>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <span className="font-mono text-xs uppercase tracking-widest">Twitter</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom line decorative */}
                <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#ff0000]/20 to-transparent" />
            </div>
        </footer>
    )
}


