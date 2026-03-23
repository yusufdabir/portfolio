// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"

export const Sidebar = ({ toggleSidebar }) =>{

  const scrollToSection = (id) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
      toggleSidebar() // 🔥 auto close
    }
  }
    return(
        < motion.div  className="fixed top-0 left-0 w-64 h-screen items-center justify-center bg-blue-500 shadow p-6 z-40 pt-20"
         initial={{ x: -250 }}
        animate={{ x: 0 }}
         exit={{ x: -250 }}
         transition={{  type: "spring", stiffness: 120 ,duration: 0.4 }}
        >
         <ul className="space-y-4 items-center justify-center pt-5">
        <li className="text-white cursor-pointer hover:underline hover:text-black"  onClick={() => scrollToSection("aboutme")}>About Me</li>
        <li className="text-white cursor-pointer hover:underline hover:text-black"  onClick={() => scrollToSection("Skills")}>Skills</li>
        <li className="text-white cursor-pointer hover:underline hover:text-black"  onClick={() => scrollToSection("Projects")}>Projects</li>
        <li className="text-white cursor-pointer hover:underline hover:text-black"  onClick={() => scrollToSection("experience")}>Work Experience</li>
        <li className="text-white cursor-pointer hover:underline hover:text-black"  onClick={() => scrollToSection("qualification")}>Qualifications</li>
        <li className="text-white cursor-pointer hover:underline hover:text-black"  onClick={() => scrollToSection("Certificates")}>Certifications</li>
        <li className="text-white cursor-pointer hover:underline hover:text-black"  onClick={() => scrollToSection("Contact")}>Contact Me</li>
      </ul>
        </motion.div>
    )
}