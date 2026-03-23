 import { Contact } from "lucide-react"
import { ExperienceData } from "../assets/sampleData/ExperienceData"
import { projectsData } from "../assets/sampleData/ProjectData"
import { skillsData } from "../assets/sampleData/SkillsData"
import { Certificate } from "../components/Certificate"
import { ExperienceCard } from "../components/ExperienceCard"
import { Projects } from "../components/Projects"
import { Qualification_card } from "../components/Qualification_Card"
import { SkillsCard } from "../components/SkillsCard"
import { useTheme } from "../context/ThemeContext"
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import { ContactCard } from "../components/ContactCard";


export const Home = () =>{
     const {theme} = useTheme()
     const SkillsData = skillsData;
     const data = ExperienceData;
const projects = projectsData;

    return (
        <div className={`  min-h-screen `}>
        <motion.div
        id="aboutme"
        className="flex-col items-start p-5 mt-2"
        initial ={{x : -100, opacity: 0}}
        whileInView = {{x :  0, opacity : 1}}
        transition = {{duration : 1}}
        >
             <div className={`${theme.card} p-6 rounded-xl shadow-sm hover:shadow-md border ${theme.card_border}`}>
             <motion.h2 className="capitalize text-xl md:text-2xl font-bold mb-3"
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
             > about me </motion.h2>

            <motion.p className=" text-sm md:text-base leading-relaxed text-justify"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            >
            Frontend Developer specializing in React and React Native with a strong interest in building modern, responsive, and user-friendly web and mobile applications.
            I enjoy transforming ideas into functional digital products using clean code, reusable components, and efficient UI design. My experience includes developing frontend interfaces, integrating REST APIs, and managing application state to create smooth user experiences.
            Along with frontend development, I also have working knowledge of Python and SQL which helps me understand backend logic and data flow while building complete applications.
            </motion.p>
             </div>
        </motion.div>


{/* skills */}
        <motion.div
        id="Skills"
        className="p-5 mt-2"
        initial ={{x : -100, opacity: 0}}
        whileInView = {{x :  0, opacity : 1}}
        transition = {{duration : 1}}>
        <div className={`${theme.card} border ${theme.card_border} p-6 rounded-xl shadow-sm hover:shadow-md`}>
          <motion.h2 className="capitalize text-xl md:text-2xl font-bold mb-3"
             initial={{ opacity: 0, y: 10 }}
          //    animate={{ opacity: 1, y: 0 }}
             whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
             transition={{ delay: 0.2 }}
             > Skills </motion.h2>
             <motion.div className="pt-2 "
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
            transition={{ delay: 0.6 }}
             >
               <motion.div
               className="grid md:grid-cols-2 gap-5 pt-2"
               initial="hidden"
whileInView="show"
viewport={{ once: false, amount: 0.2 }}
variants={{
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
}}
                 >
            <SkillsCard name="Frontend" skills={SkillsData.frontend}/>
            <SkillsCard name="Backend" skills={SkillsData.backend}/>
            <SkillsCard name="Database" skills={SkillsData.database}/>
            <SkillsCard name="Tools" skills={SkillsData.others}/>

               </motion.div>
             </motion.div>


        </div>
        </motion.div>




 {/* Projects */}
      <motion.div
        id="Projects"
        className="p-5 mt-2"
        initial ={{x : -100, opacity: 0}}
        whileInView = {{x :  0, opacity : 1}}
        transition = {{duration : 1}}>
        <div className={`${theme.card} border ${theme.card_border} p-6 rounded-xl shadow-sm hover:shadow-md`}>
          <motion.h2 className="capitalize text-xl md:text-2xl font-bold mb-3"
             initial={{ opacity: 0, y: 10 }}
          //    animate={{ opacity: 1, y: 0 }}
             whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
             transition={{ delay: 0.2 }}
             > Projects </motion.h2>
             <motion.div className="pt-2 "
             initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
             >
               <motion.div
               className="grid md:grid-cols-2 gap-5 pt-2"
               initial="hidden"
whileInView="show"
viewport={{ once: false , amount : 0.2 }}
variants={{
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
}}
                 >

              {projects.map((project, index) => (
            <Projects key = {index} name={project.name} tech={project.tech} description={project.desc} live={project.live} github={project.github}/>
             ))}
               </motion.div>
             </motion.div>


        </div>
        </motion.div>

 {/* exxperience */}
         <div id = "experience" className="p-5">
        <motion.div className={`${theme.card} border ${theme.card_border} p-6 rounded-xl`}
           initial ={{x : -100, opacity: 0}}
        whileInView = {{x :  0, opacity : 1}}
        transition = {{duration : 1}}
        >

         <motion.h2 className="capitalize text-xl md:text-2xl font-bold mb-3"
             initial={{ opacity: 0, y: 10 }}
          //    animate={{ opacity: 1, y: 0 }}
             whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
             transition={{ delay: 0.2 }}
             > work experience </motion.h2>

  <motion.div
    className="relative py-10"
    variants={{
      hidden: {},
      show: {
        transition: {
          staggerChildren: 0.3
        }
      }
    }}
    initial="hidden"
    whileInView="show"
   viewport={{ once: false, amount: 0.2 }}
  >

    {/* Vertical Line */}
    <div className="absolute left-8 top-0 w-1 h-full bg-gray-600"></div>

    {data.map((item, index) => (
      <motion.div
        key={index}
        className="relative pl-20 mb-10"
        variants={{
          hidden: { opacity: 0, y: 50 },
          show: { opacity: 1, y: 0 }
        }}
        transition={{ duration: 0.5 }}
      >
          {/* dotted */}
        <div className="absolute left-[26px] top-3 w-4 h-4 bg-blue-500 rounded-full"></div>

        <ExperienceCard {...item} />
      </motion.div>
    ))}

  </motion.div>
</motion.div>
</div>

        {/* #qualification */}
        <motion.div
        id="qualification"
        className="flex-col items-start p-5 mt-2"
        initial ={{x : -100, opacity: 0}}
        whileInView = {{x :  0, opacity : 1}}
        transition = {{duration : 1}}>
        <div className={`${theme.card} border ${theme.card_border} p-6 rounded-xl shadow-sm hover:shadow-md`}>
          <motion.h2 className="capitalize text-xl md:text-2xl font-bold mb-3"
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
             > qualifications </motion.h2>
             <motion.div className="pt-2 "
             variants={{
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }}
  initial="hidden"
  whileInView="show"
  viewport={{ once: false, amount: 0.2 }}
             >
             {/* <Qualification_card std="SSC" marks="68%" name="New Habib High School" passoutyear="2019"/> */}
             <Qualification_card std="HSC" marks="80%" name="M.H.Saboo Siddik Technical High School and Junior College" passoutyear="2021"/>
             <Qualification_card std="B.E" marks="8.11 CGPA" name="A. C. Patil College of Engineering" passoutyear="2025"/>

             </motion.div>


        </div>
        </motion.div>



          {/* certificates */}
         <motion.div
        id="Certificates"
        className="p-5 mt-2"
        initial ={{x : -100, opacity: 0}}
        whileInView = {{x :  0, opacity : 1}}
        transition = {{duration : 1}}>
        <div className={`${theme.card} border ${theme.card_border} p-6 rounded-xl shadow-sm hover:shadow-md`}>
          <motion.h2 className="capitalize text-xl md:text-2xl font-bold mb-3"
             initial={{ opacity: 0, y: 10 }}
          //    animate={{ opacity: 1, y: 0 }}
             whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
             transition={{ delay: 0.2 }}
             > Certifications </motion.h2>
             <motion.div className="pt-2 "
             initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
             >
               <motion.div
               className="grid md:grid-cols-2 gap-5 pt-2"
               initial="hidden"
whileInView="show"
viewport={{ once: false, amount:0.2 }}
variants={{
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
}}
                 >
            <Certificate name="Frontend Web Development" platform = "Hertzsoft Technologies Pvt Ltd, Mumbai"  description="Successfully completed a 3-month Frontend Web Development
course covering HTML, CSS, JavaScript, Reactjs, Bootstrap, and other modern web technologies."/>
            <Certificate name="Python Backend Development" platform = "Hertzsoft Technologies Pvt Ltd, Mumbai"  description="Successfully completed a 3-month Python programming course
covering advanced frameworks such as Tkinter, Django, and
various useful libraries for application development"/>
             <Certificate name="Data Analytics" platform = "Udemy"  description="Completed a comprehensive data analysis program covering tools and technologies essential for a full-stack Data Analyst role, including Excel, SQL, Python (with Jupyter Notebook),
and Power BI."/>

               </motion.div>
             </motion.div>


        </div>
        </motion.div>





       {/* Contact  */}
         <motion.div
        id="Contact"
        className="p-5 mt-2"
        initial ={{x : -40, opacity: 0}}
        whileInView = {{x :  0, opacity : 1}}
          viewport={{ once: false, amount: 0.2 }}
        transition = {{duration : 1}}>
        <div className={`${theme.card} border ${theme.card_border} p-6 rounded-xl shadow-sm hover:shadow-md`}>
          <motion.h2 className="capitalize text-xl md:text-2xl font-bold mb-3"
             initial={{ opacity: 0, y: 10 }}
          //    animate={{ opacity: 1, y: 0 }}
             whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
             transition={{ delay: 0.2 }}
             > Contact me  </motion.h2>
             <motion.div className="pt-2 "
             initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
             >
               <motion.div
               className="grid md:grid-cols-2 gap-5 pt-2"
               initial="hidden"
whileInView="show"
viewport={{ once: false, amount: 0.2 }}
variants={{
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
}}
                 >


<ContactCard
  type="linkedin"
  value="Mohammad Yusuf Dabir"
  link="https://www.linkedin.com/in/mohammad-yusuf-dabir-82487b269"
/>

<ContactCard
  type="github"
  value="Yusuf dabir"
  link="https://github.com/yusufdabir"
/>

<ContactCard
  type="email"
  value="yusufdabir65@gmail.com"
  link="https://mail.google.com/mail/?view=cm&fs=1&to=yusufdabir65@gmail.com"
/>

<ContactCard
  type="phone"
  value="+91 7506480989"
  link="tel:+917506480989"
/>

               </motion.div>
             </motion.div>


        </div>
        </motion.div>



        </div>
    )
}