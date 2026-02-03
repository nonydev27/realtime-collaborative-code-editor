export default function Footer(){
    return(

       <footer className="py-8 text-center opacity-60 text-sm">

  <p>© {new Date().getFullYear()} WordFlow. Built with React & WebSockets.</p>

  <p className="mt-1">
    Developed by <span className="font-bold text-[--tertiary]">Karl Djansi</span> 
    • Mentored by <a href="https://github.com/KelvCodes" target="_blank" className="hover:underline">KelvCodes</a>
  </p>

</footer>
    )
}