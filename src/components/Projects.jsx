// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import { useTheme } from "../context/ThemeContext";
import { ExternalLink, Github } from "lucide-react";


export const Projects = ({name,tech,description,live, github}) =>{
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
          <p className="text-sm text-gray-600 font-semibold">{tech}</p>
        </div>

        <div className="items-start">
       <ul className="list-disc pl-5 space-y-1 text-sm md:text-base">
  {description.map((point, index) => (
    <li key={index}>{point}</li>
  ))}
</ul>
        </div>

         <div className="flex gap-5 mt-4 text-sm">

        {live !== "N/A" ? (
  <a href={live} target="_blank" className="flex items-center gap-1 hover:text-blue-500">
    <ExternalLink size={16} />
    Live
  </a>
) : (
  <span className="flex items-center gap-1 text-gray-400 italic">
    <ExternalLink size={16} />
    Live (Coming Soon)
  </span>
)}

      {github !== "N/A" ? (
  <a
    href={github}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-1 hover:text-gray-400 transition"
  >
    <Github size={16} />
    GitHub
  </a>
) : (
  <span className="flex items-center gap-1 text-gray-400 italic">
    <Github size={16} />
    GitHub (Coming Soon)
  </span>
)}

      </div>

        </motion.div>
    )
}