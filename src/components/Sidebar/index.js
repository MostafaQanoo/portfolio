import React from "react";
import { Link, NavLink } from "react-router-dom";
import {RiHome7Fill,RiUser3Fill,RiLinkedinBoxFill,RiGithubFill, RiWhatsappFill} from 'react-icons/ri'
import {MdEmail} from 'react-icons/md'
import './index.scss'
import logo from '../../assets/images/logo.svg'

const Sidebar = () => {
return(
   <div className="sidebar">
     <Link className='logo' to='/'>
     <img src={logo} alt='logo'/>
     <span> MostafaNQ</span>
     </Link>
       <nav>
           <NavLink exact='true' activeclassname='active' to ='/'>
            <RiHome7Fill />
           </NavLink>
           <NavLink exact='true' activeclassname='active' className='about-link' to ='/about'>
           <RiUser3Fill/>
           </NavLink>
           <NavLink exact='true' activeclassname='active' className='content-link' to ='/contact'>
            <MdEmail />
           </NavLink>
       </nav>

       <ul>
           <li>
               <a
               target='_blank'
               rel="noreferrer" 
               href="https://www.linkedin.com/in/mostafa-qanoo-347b84220/"
               >
                 <RiLinkedinBoxFill color="#4d4d4e"/>  
               </a>
           </li>
           <li>
               <a
               target='_blank'
               rel="noreferrer" 
               href="https://github.com/MostafaQanoo"
               >
                   <RiGithubFill color="#4d4d4e"/>
               </a>
           </li>
           <li>
               <a
               target='_blank'
               rel="noreferrer" 
               href="https://wa.me/972598497015"
               >
                   <RiWhatsappFill color="#4d4d4e"/>
               </a>
           </li>
        
     
       </ul>

   </div> 
)
}

export default Sidebar;