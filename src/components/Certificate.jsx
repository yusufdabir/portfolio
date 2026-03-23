// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import { useTheme } from "../context/ThemeContext";


export const Certificate = ({name,platform,description}) =>{
     const {theme} = useTheme();
        const cardVariants = {
      hidden: { y: 100, opacity: 0 },
      show: { y: 0, opacity: 1 }
    }

    return (
        <motion.div className={`flex flex-col flex-wrap p-4  border rounded-xl shadow-sm hover:shadow-md ${theme.qualification_border} ${theme.Qualification_card} gap-5`}
        variants={cardVariants}
         transition={{ duration: 0.6 }}
        >
        <div className="items-start">
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm text-gray-600 font-semibold">{platform}</p>
        </div>

        <div className="items-start">
        <p className=" text-sm md:text-base leading-relaxed text-justify">{description}</p>
        </div>

        </motion.div>
    )
}