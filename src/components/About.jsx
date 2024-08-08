import React from 'react'
import Container from '../Container/Container.jsx'
import Navbar from './Navbar.jsx'
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const About = () => {
  return (
   <>

    <Container>

    <div className='max-w-md max-h-15 mx-auto p-4'>

    <p className='items-center'>
    Welcome to this website, our reliable online 
    tool for symptom analysis and medical prognosis. 
    You can input your symptoms and receive an instant,
     <span className='text-teal-700'> ML-driven </span>prognosis tailored to your specific condition.
     Our user-friendly interface ensures a seamless experience, making health self-assessment accessible to everyone. <br /> 
    <span className='text-red-700 font-semibold'> Always Remember, this is not a substitute for consulting with a healthcare professional. It should be used as an additional resource, not as a sole source of medical guidance. </span>
    </p>
    <p></p>
    </div>

    <div className=' flex items-center justify-center text-teal-500 text-lg font-semibold'>
    "Stay strong, live long"
    </div>
 


    </Container>


    <footer className="">
        <div className="container mx-auto text-center pb-2">
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
      
   
   
   
   
   </>
  )
}

export default About
