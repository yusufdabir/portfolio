import { Phone, Mail, Linkedin, Github } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import { useTheme } from "../context/ThemeContext";

export const ContactCard = ({ type, value, link }) => {
    const {theme} = useTheme()

  const icons = {
    phone: <Phone size={22} />,
    email: <Mail size={22} />,
    linkedin: <Linkedin size={22} />,
    github: <Github size={22} />
  };

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      variants={{
        hidden: { y: 100, opacity: 0 },   // 👈 upar se
        show: { y: 0, opacity: 1 }
      }}
      transition={{ duration: 0.6 }}
      className={`${theme.card} ${theme.card_border} p-5 border rounded-xl hover:shadow-md transition flex items-center gap-4`}
    >
      {/* Icon */}
      <div className="text-blue-500">
        {icons[type]}
      </div>

      {/* Text */}
      <div>
        <p className="text-sm text-gray-400 capitalize">{type}</p>
        <p className="text-sm break-all">{value}</p>
      </div>
    </motion.a>
  );
};