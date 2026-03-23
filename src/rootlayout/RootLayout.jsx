import { useState } from "react"
// eslint-disable-next-line no-unused-vars
import { AnimatePresence , motion } from "framer-motion"
import { Navbar } from "../components/Navbar"
import { Sidebar } from "../components/Sidebar"
import { useTheme } from "../context/ThemeContext"

export const RootLayout = ({children}) =>{
       const {theme} = useTheme();
    const [isOpen,setIsOpen] = useState(false)
    const toggleSidebar = () =>{
        setIsOpen(!isOpen)
    }
return(
    <div className={`min-h-screen ${theme.bg}`}>
        <Navbar toggleSidebar={toggleSidebar}/>
        <div className="flex">
            <AnimatePresence>
            {isOpen &&
              <>
              <motion.div
        className="fixed inset-0 bg-black/50 z-30 md:hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={toggleSidebar}
      />
            <Sidebar  toggleSidebar={toggleSidebar}/>
            </>

            }
            </AnimatePresence>
        <main  className={`flex-1 pt-20  duration-300 ${ isOpen ? "md:ml-64" : "ml-0"}`}>
          {children}
        </main>

        </div>

    </div>
)
}