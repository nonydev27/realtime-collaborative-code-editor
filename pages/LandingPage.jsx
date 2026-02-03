import {motion} from "framer-motion";

export default function LandingPage() {
    return (
        /* Use 'style' for the CSS variable, 'className' for the layout */
        <motion.div 
            className="flex min-h-screen items-center justify-center p-10" 
            style={{ backgroundColor: 'var(--bg-main)', color: 'var(--tertiary)' }}
            
        >
            <div className="text-center max-w-2xl">
                <h1 
                    className="text-6xl font-black mb-4" 
                    style={{ color: 'var(--primary)' }}
                >
                    WordFlow
                </h1>
                <p className="text-xl opacity-90 leading-relaxed font-mono">
                    Where ideas synchronize in real-time. A high-performance 
                    collaborative workspace designed for seamless document engineering.
                </p>
                
                <button 
                    className="mt-8 px-8 py-3 rounded-full font-bold transition-transform hover:scale-105"
                    style={{ backgroundColor: 'var(--primary)', color: 'white' }}
                >
                    Start Flowing
                </button>
            </div>
        </motion.div>
    );
}