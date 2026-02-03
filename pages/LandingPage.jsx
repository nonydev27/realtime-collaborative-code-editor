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
                    onClick={() => setIsOpen(true)}
                    className="mt-8 px-8 py-3 m-2 bg-sky-600 font-bold transition-transform hover:scale-105 capitalize"
                >
                    open editor
                </button>

                     <button 
                     onClick={() => setIsOpen(true)}
                    className="mt-8 px-8 py-3 m-2 bg-sky-600 font-bold transition-transform hover:scale-105 hover:opacity-100 capitalize"

                >
                   create document
                </button>


                {/* 2. HEADLESS UI DIALOG */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setIsOpen(false)}>
          
          {/* Backdrop: Automatically handles the dimmed background */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-1 bg-[#323643]/50 backdrop-blur-xs" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-sm bg-[#323643] border border-white/20 p-8 rounded-2xl shadow-2xl">
                  
                  <Dialog.Title as="h2" className="text-2xl font-bold mb-2 text-[#93deff]">
                    Sign Up
                  </Dialog.Title>
                  <p className="text-gray-400 text-sm mb-6">
                    Join WordFlow to sync your ideas in real-time.
                  </p>
                  
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input 
                      type="text" 
                      placeholder="Fullname" 
                      className="p-3 rounded bg-[#1a1528] border border-white/10 outline-none focus:ring-2 focus:ring-[#6366f1] text-white"
                      required 
                    />

                    <input 
                      type="email" 
                      placeholder="Email" 
                      className="p-3 rounded bg-[#1a1528] border border-white/10 outline-none focus:ring-2 focus:ring-[#6366f1] text-white"
                      required 
                    />
                    <input 
                      type="password" 
                      placeholder="Password" 
                      className="p-3 rounded bg-[#1a1528] border border-white/10 outline-none focus:ring-2 focus:ring-[#6366f1] text-white"
                      required 
                    />
                    
                    <div className="flex gap-2 mt-4">
                      <button 
                        type="button"
                        onClick={() => setIsOpen(false)}
                        className="flex-1 p-3 text-gray-400 hover:text-white transition-colors"
                      >
                        Cancel
                      </button>
                      <button 
                        type="submit"
                        className="flex-[2] bg-sky-600 p-3 rounded font-bold hover:bg-[#4f46e5] transition-all"
                      >
                        Register
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

            </div>


         
        </motion.div>
    );
}