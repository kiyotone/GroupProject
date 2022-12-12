import React from 'react'
import logo from '../assets/logo.png'
import Image from 'next/image'
import {RxDashboard} from 'react-icons/rx'
import NavContents from './NavContents'
import  Link  from 'next/link'

const Navbar=()=> {
  const buttons = [
    {
      name:"Dashboard",
      icon:<RxDashboard/>,
      link:"/Dashboard"
    }
    ,
    {
      name:"NetWork",
      icon:<RxDashboard/>,
      link:"/Register"
    }
    ,{
      name:"Register",
      icon:<RxDashboard/>,
      link:"/Login"
    }
    ,{
      name:"E-wallet",
      icon:<RxDashboard/>,
      link:"/e-wallet"
    }
    ,
    {
      name:"ProfileManagement",
      icon:<RxDashboard/>,
      link:"/profile"
    }
    ,
    {
      name:"Logout",
      icon:<RxDashboard/>,
      link:"/logout"
    },
    {
      name:"SignIn",
      icon:<RxDashboard/>,
      link:"/SignIn"
    }
    
  ]
  return (
    <div className="bg-[#E4E8F0] h-screen w-[300px] flex flex-col">

            <div className="flex flex-col items-center">
              <div className="flex items-center mt-3">
                <Image src={logo} className="w-[60px] h-[60px]"/>
                <div className="text-black font-bold text-xl">Company</div>
              </div>
         
            <div className=" flex flex-col mt-20 w-full">
              
              { 
              
              buttons.map((element)=>
              (
                <Link key={element.name} href={element.link}>
              <NavContents name={element.name} icon ={element.icon} />
              </Link>
              )
              )
            
            }
            
            </div>
            </div>



    </div>
  )
}

export default Navbar