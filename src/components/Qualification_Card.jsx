import { useTheme } from "../context/ThemeContext";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"


export const Qualification_card = ({std,name,marks,passoutyear}) =>{
    const {theme} = useTheme();
return (
    <motion.div
    className={`flex justify-between ${theme.Qualification_card} border ${theme.Qualification_border} rounded-xl p-6 shadow-sm hover:shadow-md my-5`}
    variants={{
        hidden: { y: 50, opacity: 0 },   // 👈 niche se upar
        show: { y: 0, opacity: 1 }
      }}
      transition={{ duration: 0.5 }}
     >
     <div className="flex-col">
        <p className="capitalize font-semibold text-lg">{std}</p>
        <div className="flex flex-col md:flex-row ">
        <p className="capitalize font-semibold text-md">{name} </p>
         <p className="capitalize font-semibold text-md">  - {marks}</p>
        </div>
     </div>
     <div>
        <p className="capitalize font-semibold text-md">{passoutyear}</p>
     </div>
    </motion.div>
)

}