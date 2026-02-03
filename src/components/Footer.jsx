export default function Footer(){
    return(

       <footer className="py-8 text-center opacity-60 text-sm">

        {/* The function/method {new Date().getFullYear() displays the current working year, this aids
        especially when the year ends, you dont need to edit the code again by placing the current year in!} */}
  <p>© {new Date().getFullYear()} WordFlow. Built with React & WebSockets.</p>

  <p className="mt-1">
    Developed by <span className="font-bold text-[--tertiary]">Karl Djansi</span> 
    • Mentored by <a href="https://github.com/KelvCodes" target="_blank" className="hover:underline">KelvCodes</a>
  </p>

</footer>
    )
}