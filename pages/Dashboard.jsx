import React from 'react';

export default function Dashboard() {
  return (
    <div className="flex h-screen w-full bg-[#1a1c23] text-gray-300">
      
      {/* COLUMN 1: Sidebar */}
      <aside className="w-64 flex flex-col p-6 bg-[#24262d] border-r border-gray-800">
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-4 rounded-lg mb-8 font-semibold transition-all">
          Create New Document
        </button>
        
        <nav className="flex flex-col space-y-1">
          <a href="#" className="px-4 py-2 rounded-md bg-gray-800 text-white">Home</a>
          <a href="#" className="px-4 py-2 rounded-md hover:bg-gray-800 hover:text-white transition-colors">Recent</a>
          <a href="#" className="px-4 py-2 rounded-md hover:bg-gray-800 hover:text-white transition-colors">Open Existing</a>
          <a href="#" className="px-4 py-2 rounded-md hover:bg-gray-800 hover:text-white transition-colors">Settings</a>
        </nav>
      </aside>

      {/* COLUMN 2: Main Area */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="flex justify-between items-center p-6 border-b border-gray-800 bg-[#1a1c23]">
          <div className="w-full max-w-xl">
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-full bg-[#2d303a] border border-gray-700 rounded-lg py-2 px-4 outline-none focus:border-blue-500"
            />
          </div>
          <div className="ml-4 font-mono text-sm text-gray-500">
            SUP
          </div>
        </header>

        <section className="p-8 overflow-y-auto bg-[#1a1c23] h-full">
          <h2 className="text-2xl font-bold text-white mb-6">Recent Documents</h2>
          
          {/* Table / List Container */}
          <div className="bg-[#24262d] rounded-xl border border-gray-800 overflow-hidden">
            <div className="p-4 border-b border-gray-800 flex justify-between text-xs font-bold uppercase tracking-wider text-gray-500">
              <span>Title</span>
              <span>Last Opened</span>
            </div>
            <div className="p-8 h-screen text-center text-gray-600">
              No documents found in the database.
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}