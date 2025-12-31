import { Brain } from "lucide-react";
export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-8 py-6 
bg-[#020617]/80 backdrop-blur-md z-50 border-b border-white/10">
            <div className="flex items-center gap-2 text-white font-bold text-lg">
                <div className="flex items-center gap-2 text-white font-bold text-2xl">
                    <Brain className="text-white bg-linear-to-b from-indigo-600 to-cyan-400 p-2.5 mr-2 rounded-2xl" size={45} />
                    Synaptor
                </div>

            </div>

            <div className="hidden md:flex gap-8 text-slate-300">
                <a className="hover:text-white transition ease-in" href="#features">Features</a>
                <a className="hover:text-white transition ease-in" href="#">Methodology</a>
                <a className="hover:text-white transition ease-in" href="/dashboard">Dashboard</a>
            </div>

            <a href="/quiz" className="px-5 py-2 rounded-xl bg-white/10 border border-white/10 text-white cursor-pointer hover:bg-white/20 transition duration-200 ease-in">Launch Demo</a>
        </nav>
    );
}
