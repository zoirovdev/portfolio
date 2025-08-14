import { Sun } from "lucide-react"
import { Link, useLocation } from "react-router"
import { useState } from "react"


const Header = () => {
  const location = useLocation()

  const [about, setAbout] = useState(true)
  const [projects, setProjects] = useState(false)
  const [contact, setContact] = useState(false)




  return (
    <div className="flex flex-row justify-between bg-[#08CB00] h-[70px] p-[10px]">
      <div className="flex flex-row gap-[20px] justify-center items-center ml-[20px]">
        <img src="profile_pic.jpg" className="object-cover h-[50px] w-[50px] rounded-[50%] bg-[#DBE4C9]"/>
	<h4 className="text-[#FFFFF0] font-bold">Abbos Zoirov</h4>
      </div>
      <div className="flex flex-row justify-center items-center">
	<Link to={"/"}>
	  <h3 className={`text-[#FFFFF0] font-semibold py-2 px-4
		         hover:rounded-[20px] hover:bg-[#FFFFF0] 
			 hover:text-black ${about ? "underline decoration-solid" : ""}`}
	       onClick={() => {setAbout(true);setProjects(false);setContact(false)}}>
	    About
	  </h3>
	</Link>
	<Link to={"/projects"}>
	  <h3 className={`text-[#FFFFF0] font-semibold py-2 px-4
			 hover:rounded-[20px] hover:bg-[#FFFFF0]
			 hover:text-black ${projects ? "underline decoration-solid" : ""}`}
	      onClick={() => {setAbout(false);setProjects(true);setContact(false)}}>
	    Projects
	  </h3>
	</Link>
	<Link to={"/contact"}>
	  <h3 className={`text-[#FFFFF0] font-semibold py-2 px-4
			 hover:rounded-[20px] hover:bg-[#FFFFF0]
			 hover:text-black ${contact ? "underline decoration-solid" : ""}`}
		onClick={() => {setAbout(false);setProjects(false);setContact(true)}}>
	    Contact
	  </h3>
	</Link>
	<div className="flex flex-row justify-center items-center mr-[20px]">
	  <p className="text-[#FFFFF0] font-bold px-2 py-1 
			hover:rounded-[5px] hover:bg-[#FFFFF0] 
			hover:text-black">eng</p>
	  <Sun className="text-[#FFFFF0] h-[30px] w-[30px] p-1
			  hover:rounded-[5px] hover:bg-[#FFFFF0]
			  hover:text-black"/>
	</div>
     </div>
    </div>
  )
}


export default Header
