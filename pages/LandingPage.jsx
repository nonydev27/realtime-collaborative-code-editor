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

        <>

      {/* --- IMMERSIVE BACKGROUND ANIMATION LAYER --- */}
      <div className="absolute inset-0 pointer-events-none select-none">
        
        {/* Subtle Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />

        {/* Floating Particles/Stars */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        {/* Content Skeleton / Notion-style lines */}
        <div className="max-w-6xl mx-auto pt-10 px-10 opacity-10">
          <div className="space-y-8">
            {/* Header Section */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-[#6366f1]/20" />
              <div className="h-6 bg-[#6366f1] rounded w-1/4" />
            </div>

            <div className="space-y-4">
              <div className="h-4 bg-white/10 rounded w-full" />
              <div className="h-4 bg-white/10 rounded w-11/12" />
              <div className="h-4 bg-white/10 rounded w-10/12" />
            </div>

            {/* Active Typing Block 1 */}
            <div className="flex items-center space-x-2 py-4">
              <div className="h-5 bg-[#a3e635]/40 rounded animate-[typing_5s_steps(40)_infinite] overflow-hidden whitespace-nowrap border-r-2 border-[#a5f3fc]">
                <span className="invisible">Initiating real-time socket connection for collaborative document engineering...</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="h-4 bg-white/10 rounded w-full" />
              <div className="h-4 bg-white/10 rounded w-full" />
            </div>

            {/* Active Typing Block 2 */}
            <div className="flex items-center space-x-2 py-4 ml-10">
              <div className="h-5 bg-[#6366f1]/40 rounded animate-[typing_4s_steps(35)_infinite_1s] overflow-hidden whitespace-nowrap border-r-2 border-[#a5f3fc]">
                <span className="invisible">Syncing document state with distributed edge clusters...</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="h-4 bg-white/10 rounded w-3/4" />
              <div className="h-4 bg-white/10 rounded w-1/2" />
            </div>
            
            {/* More lines for full-page coverage */}
            {[...Array(10)].map((_, i) => (
              <div key={i} className={`h-4 bg-white/5 rounded w-${Math.floor(Math.random() * 4 + 8)}/12 animate-pulse`} style={{ animationDelay: `${i * 0.2}s` }} />
            ))}
          </div>
        </div>

        {/* Large Floating Gradient Blobs */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#6366f1]/15 rounded-full blur-[120px] animate-blob" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#a3e635]/10 rounded-full blur-[120px] animate-blob animation-delay-2000" />
        <div className="absolute top-[40%] right-[20%] w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[100px] animate-blob animation-delay-4000" />
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

                     {/* <button 
                     onClick={() => setIsOpen(true)}
                    className="mt-8 px-8 py-3 m-2 bg-sky-600 font-bold transition-transform hover:scale-105 hover:opacity-100 capitalize"

                >
                   create document
                </button> */}


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