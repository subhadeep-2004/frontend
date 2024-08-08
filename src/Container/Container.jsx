import React from 'react'
import Navbar from '../components/Navbar'
import doctors from "../../public/Chat bot.gif"
import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
const Container = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref)
  // const doctors = '/static/Chat bot-amico.svg'

  return (
    <div>
      <Navbar>   </Navbar>
      <div>

        <div className='p-10 flex flex-col lg:flex-row gap-10 justify-evenly'>
          <img src={doctors} className='max-w-96' alt="" />

          <motion.div variants={{
            hidden: { opacity: 0, y: 15 },
            visible: { opacity: 1, y: 0 }
          }}
           className=""

            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.25 }}
          >


          
         
         {children}
         
            {/* {children} */}
            

            
          
          
          </motion.div>


        </div>
      </div>
        {/* Footer */}
        <footer className="">
        <div className="container mx-auto text-center pb-6">
          <div className="flex justify-center gap-6">
            <a href="https://www.instagram.com/ssubh_adeep/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-teal-500 text-2xl hover:text-gray-300" />
            </a>
            <a href="https://www.linkedin.com/in/subhadeep-bhadra-a83b83278" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-teal-500 text-2xl hover:text-gray-300" />
            </a>
            <a href="https://github.com/subhadeep-2004" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-teal-500 text-2xl hover:text-gray-300" />
            </a>
          </div>
        </div>
      </footer>





   </div>
  )
}

export default Container
