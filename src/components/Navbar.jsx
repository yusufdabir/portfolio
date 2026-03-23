import profile from "../assets/images/image-removebg-preview.png"
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import { useTheme } from "../context/ThemeContext";
import { FaCloudMoon } from "react-icons/fa";
import { TbSunset2Filled } from "react-icons/tb";

export const Navbar = ({toggleSidebar}) =>{
    const name = "Mohammad Yusuf Dabir".split("");
    const {mode,toggleTheme , theme} = useTheme()

    return(
        <div className="fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-6 py-4 bg-blue-500 shadow overflow-visible h-16 z-50">
            <div className="flex items-center gap-3">
             <button
             onClick={toggleSidebar}
             className="text-2xl text-white"
             >
              ☰
             </button>

<div className="flex gap-3 items-center absolute left-12 sm:left-16 md:left-20 top-[-20px] md:top-[-25px]">
                <motion.img
             src ={profile}
             alt="Mohammad Yusuf Dabir"
             className= {`w-20 h-20 mt-6 rounded-full object-cover object-[center_-60%] border-2 ${theme.border} shadow-md ${theme.bg} relative z-50`}
              initial={{ x: -100, rotate: -180, opacity: 0 }}
              animate={{ x: 0, rotate: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
             />

             <motion.h1 className="font-semibold text-sm md:text-lg  text-white whitespace-nowrap">
              {name.map((letter,i) => (
                <motion.span
                key={i}
                 initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.05 }}
                >
                    {letter}
                </motion.span>
              ))}
             </motion.h1>

             </div>


            </div>
            <div className="flex items-center gap-3">
               <motion.button
                onClick={toggleTheme}
                whileHover={{ scale: 1.2 }}
                >
               <motion.div
                key={mode}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                >
{mode === "light" ? (
  <TbSunset2Filled size={32} color="#facc15"/>
) : (
  <FaCloudMoon size={32} color="#d1d5db"/>
)}
</motion.div>
</motion.button>

            </div>

        </div>
    )

}