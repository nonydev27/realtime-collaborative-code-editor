import {animate, motion} from "framer-motion";

export default function LandingPage() {
    return (
        /* Using 'style' for the CSS variable, and 'className' for the layout */
        <motion.div 
            className="flex min-h-screen items-center justify-center p-10" 
            style={{ backgroundColor: 'var(--bg-main)', color: 'var(--tertiary)' }}
            initial={{}}
            animate={{}}

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
                    className="mt-8 px-8 py-3 m-2 font-bold transition-transform hover:scale-105 capitalize"
                    style={{ backgroundColor: 'var(--primary)', color: 'white' }}
                >
                    open editor
                </button>

                     <button 
                    className="mt-8 px-8 py-3 m-2 font-bold transition-transform hover:scale-105 capitalize"
                    style={{ backgroundColor: 'var(--primary)', color: 'white' }}
                >
                   create document
                </button>
            </div>


         
        </motion.div>
    );
}