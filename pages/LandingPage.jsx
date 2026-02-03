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

        <>/* Using 'style' for the CSS variable, and 'className' for the layout */


            {/* --- NOTION-STYLE BACKGROUND ANIMATION --- */}
      <div className="absolute inset-0 pointer-events-none opacity-20 select-none">
        <div className="max-w-4xl mx-auto pt-20 px-10">
          {/* Simulated Document Lines */}
          <div className="space-y-6">
            <div className="h-8 bg-[#6366f1] rounded w-3/4 animate-pulse opacity-20" />
            <div className="h-4 bg-white/10 rounded w-full" />
            <div className="h-4 bg-white/10 rounded w-5/6" />
            
            {/* The "Active" Typing Line */}
            <div className="flex items-center space-x-2">
              <div className="h-4 bg-[#a3e635] rounded animate-[typing_3s_steps(30)_infinite] overflow-hidden whitespace-nowrap border-r-2 border-[#a5f3fc]">
                <span className="invisible">Engineering the future of collaborative document synchronization...</span>
              </div>
            </div>

            <div className="h-4 bg-white/10 rounded w-4/6" />
            <div className="h-4 bg-white/10 rounded w-full" />
            <div className="h-4 bg-white/10 rounded w-2/3" />
            
            {/* More pulse lines */}
            <div className="h-4 bg-white/5 rounded w-5/6 animate-pulse" />
            <div className="h-4 bg-white/5 rounded w-4/6 animate-pulse delay-75" />
          </div>
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute top-1/4 right-10 w-64 h-64 bg-[#6366f1]/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-1/4 left-10 w-64 h-64 bg-[#a3e635]/5 rounded-full blur-3xl animate-blob animation-delay-2000" />
      </div>
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

       {/* Custom Keyframes for the Typing Animation */}
      <style>{`
        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>

            </div>


         
        </motion.div>


</>
    );
}