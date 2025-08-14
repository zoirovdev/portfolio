import { Sun, Moon } from "lucide-react"
import { Link, useLocation } from "react-router"
import { useTheme } from "../contexts/ThemeContext.jsx"




const Header = () => {
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  const { isDark, toggleTheme } = useTheme()

  
  console.log('Current theme:', isDark ? 'dark' : 'light') 


  return (
    <div className="flex flex-row justify-between bg-[#08CB00] h-[70px] p-[10px]">
      <div className="flex flex-row gap-[20px] justify-center items-center ml-[20px]">
        <img src="profile_pic.jpg" alt="prof" className="object-cover h-[50px] w-[50px] rounded-[50%] bg-[#DBE4C9]"/>
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
	  <p className="text-[#FFFFF0] dark:text-[#000000] font-bold px-2 py-1 
			hover:rounded-[5px] hover:bg-[#FFFFF0] dark:hover:bg-[#000000] 
			hover:text-[#000000] dark:hover:text-[#FFFFF0]">eng</p>
	  {isDark  
	    ? <Moon className="text-[#000000] h-[30px] w-[30px] p-1 cursor-pointer
			  hover:rounded-[5px] hover:bg-[#000000] hover:text-[#FFFFF0]" 
		onClick={toggleTheme}/>
	    : <Sun className="text-[#FFFFF0] h-[30px] w-[30px] p-1 cursor-pointer
			  hover:rounded-[5px] hover:bg-[#FFFFF0] hover:text-black"
		onClick={toggleTheme}/>
	  }
	</div>
     </div>
    </div>
  )
}


export default Header
