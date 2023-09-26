import React,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import {styles} from '../styles'
import {navLinks} from '../constants/constants'
import {logo,menu,close} from '../assets'

const Navbar = () => {
  const [active,setActive] =useState('')
  const [toggle,setToggle]=useState(false)
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-4 fixed top-0 z-20 bg-primary` }>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
         <Link
            to='/'
            className='flex items-center gap-2'
            onClick={()=>{
              setActive("")
              window.scrollTo(0,0)
            }}
            >
              <img src={logo} alt='logo' className='w-9 h-9 object-contain'/>
              <p className='text-white-text-[18px] font-bold cursor-pointer'>Harsh Rathore <span className='sm:block hidden'>| Frontend Developer</span></p>

          </Link>
          <ul className='list-none hidden sm:flex flex-row gap-10'>
            {navLinks.map((link)=>{
              return(
              <li key={link.id}
              className={`${
                active===link.title
                ? 'text-white'
                : 'text-secondary'
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={()=>setActive(link.title)}
              >
                {(link.id )==='resume'? <a href="https://drive.google.com/file/d/19VBIQ0bY5NLZnGSuMd4prB7TvsquV6iU/view?usp=sharing" className='bg-[#915eff] p-2 text-white' rel="noreferrer" target="_blank">{link.title}</a> : <a href={`#${link.id}`}>{link.title}</a>}
              </li>
              )
            })}

            
          </ul>
           
           {/* <a href="" target='_blank' className='list-none hidden sm:flex text-white p-2 bg-[#915eff]'>Download CV</a> */}
          <div className='sm:hidden flex flex-1 justify-end items-center'>
            <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px]
            object-contain cursor-pointer'
            onClick={()=>setToggle(!toggle)}
            />
            <div className={`${!toggle ? 'hidden' :'flex' } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
            {navLinks.map((link)=>{
              return(
              <li key={link.id}
              className={`${
                active===link.title
                ? 'text-white'
                : 'text-secondary'
              } font-poppins font-medium
              cursor-pointer text-[16px]
              `}
              onClick={()=>{
                setToggle(!toggle)
                setActive(link.title)
              }
              }
              >

                <a href={`#${link.id}`}>{link.title}</a>
              </li>
              )
            })}
            
          </ul>
            </div>

          </div>
      </div>
    </nav>
  )
}

export default Navbar