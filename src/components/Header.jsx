import { Sun, Moon, X } from "lucide-react"
import { Link, useLocation } from "react-router"
import { useTheme } from "../contexts/ThemeContext.jsx"
import { useState } from "react"



const Header = () => {
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  const { isDark, toggleTheme } = useTheme()

  const [showModal, setShowModal] = useState(false)
  
  console.log('Current theme:', isDark ? 'dark' : 'light') 


  return (
    <div>
    <div className="flex flex-row justify-between bg-[#08CB00] h-[70px] p-[10px]">
      <div className="flex flex-row gap-[20px] justify-center items-center ml-[20px]">
        <img src="profile_pic.jpg" alt="prof" onClick={() => setShowModal(true)}
	  className="object-cover h-[50px] w-[50px] rounded-[50%] bg-[#DBE4C9] cursor-pointer"/>
	<h4 className="text-[#FFFFF0] dark:text-[#000000] font-bold">Abbos Zoirov</h4>
      </div>
      <div className="flex flex-row justify-center items-center">
	<Link to={"/"}>
	  <h3 className={`text-[#FFFFF0] dark:text-[#000000] font-semibold py-2 px-4
		         hover:rounded-[20px] hover:bg-[#FFFFF0] dark:hover:bg-[#000000] 
			 hover:text-[#000000] dark:hover:text-[#FFFFF0] 
			 ${isActive("/") ? "underline decoration-solid" : ""}`}>
	    About
	  </h3>
	</Link>
	<Link to={"/projects"}>
	  <h3 className={`text-[#FFFFF0] dark:text-[#000000] font-semibold py-2 px-4
			 hover:rounded-[20px] hover:bg-[#FFFFF0] dark:hover:bg-[#000000]
			 hover:text-[#000000] dark:hover:text-[#FFFFF0] 
			 ${isActive("/projects") ? "underline decoration-solid" : ""}`}>
	    Projects
	  </h3>
	</Link>
	<Link to={"/contact"}>
	  <h3 className={`text-[#FFFFF0] dark:text-[#000000] font-semibold py-2 px-4
			 hover:rounded-[20px] hover:bg-[#FFFFF0] dark:hover:bg-[#000000]
			 hover:text-[#000000] dark:hover:text-[#FFFFF0] 
			 ${isActive("/contact") ? "underline decoration-solid" : ""}`}>
	    Contact
	  </h3>
	</Link>
	<div className="flex flex-row justify-center items-center mr-[20px]">
	  {isDark  
	    ? <Moon className="text-[#000000] h-[30px] w-[30px] p-1 cursor-pointer
			  hover:rounded-[50%] hover:bg-[#000000] hover:text-[#FFFFF0]" 
		onClick={toggleTheme}/>
	    : <Sun className="text-[#FFFFF0] h-[30px] w-[30px] p-1 cursor-pointer
			  hover:rounded-[50%] hover:bg-[#FFFFF0] hover:text-black"
		onClick={toggleTheme}/>
	  }
	</div>
     </div>
    </div>
    {showModal && 
    <div className="fixed top-[100px] left-[400px] w-[500px] h-[400px] 
      bg-[#3F4F44] dark:bg-[#000000] rounded-[15px]">
      <div className="flex flex-row justify-between p-4">
        <img src="profile_pic.jpg" alt="prof" 
	  className="object-cover w-[300px] h-[300px] rounded-[50%]
	    ml-[85px] mt-[30px]"/>	
	<X className="text-white rounded-[50%] cursor-pointer"
	  onClick={() => setShowModal(false)}/>
      </div>	
    </div>}
    </div>
  )
}


export default Header
