import {animate, motion} from "framer-motion";
import React, { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

export default function LandingPage() {

     const [isOpen, setIsOpen] = useState(false);

      const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registered via Headless UI!");
    setIsOpen(false);
  };
    
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
                    style={{ color: 'var(--white)' }}
                >
                    WordFlow
                </h1>
                <p className="text-xl opacity-90 leading-relaxed foplease the ront-mono">
                    Where ideas synchronize in real-time. A high-performance 
                    collaborative workspace designed for seamless document engineering.
                </p>
                
                <button 
                    className="mt-8 px-8 py-3 m-2 bg-sky-600 font-bold transition-transform hover:scale-105 capitalize"
                >
                    open editor
                </button>

                     <button 
                    className="mt-8 px-8 py-3 m-2 bg-sky-600 font-bold transition-transform hover:scale-105 hover:opacity-100 capitalize"

                >
                   create document
                </button>
            </div>


         
        </motion.div>
    );
}