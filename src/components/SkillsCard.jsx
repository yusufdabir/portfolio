import { useTheme } from "../context/ThemeContext";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"


export const SkillsCard = ({name,skills}) =>{
    const {theme} = useTheme();
//     const cardVariants = {
//   hidden: { y: 100, opacity: 0 },
//   show: { y: 0, opacity: 1 }
// }
    return(
        <motion.div
        className={`p-4  border rounded-xl shadow-sm hover:shadow-md ${theme.qualification_border} ${theme.Qualification_card} gap-5`}
          variants={{
        hidden: { y: 50, opacity: 0 },   // 👈 niche se upar
        show: { y: 0, opacity: 1 }
      }}
      transition={{ duration: 0.5 }}
        >
            <div className={` border-b ${theme.qualification_border} ${theme.Qualification_card}`}>
                <h3 className="text-lg font-semibold">{name}</h3>
            </div>
            <div className="flex flex-wrap gap-4 mt-5">
               {skills.map((skill, index) => (
          <div key={index} className="flex items-center gap-2">
            <img src={skill.icon} alt={skill.name} className="w-6 h-6" />
            <span>{skill.name}</span>
          </div>
        ))}

            </div>

        </motion.div>
    )

}