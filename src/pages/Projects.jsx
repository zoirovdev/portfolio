import { useState } from "react"
import { Globe, Github, ArrowUpRight } from "lucide-react"



const Projects = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Project 1",
      image: "website.jpg",
      description: "This comprehensive e-commerce web application provides users with a seamless online shopping experience, featuring product browsing, secure checkout, and order tracking capabilities. Built with modern React components and integrated payment processing, it offers both customer-facing storefronts and administrative dashboards for inventory management. ",
      demo: "http://localhost:5173",
      repo: "http://localhost:5173"
    },
    {
      id: 2,
      name: "Project 1",
      image: "website.jpg",
      description: "This comprehensive e-commerce web application provides users with a seamless online shopping experience, featuring product browsing, secure checkout, and order tracking capabilities. Built with modern React components and integrated payment processing, it offers both customer-facing storefronts and administrative dashboards for inventory management. ",
      demo: "http://localhost:5173",
      repo: "http://localhost:5173"
    },
    {
      id: 3,
      name: "Project 1",
      image: "website.jpg",
      description: "This comprehensive e-commerce web application provides users with a seamless online shopping experience, featuring product browsing, secure checkout, and order tracking capabilities. Built with modern React components and integrated payment processing, it offers both customer-facing storefronts and administrative dashboards for inventory management.",
      demo: "http://localhost:5173",
      repo: "http://localhost:5173"
    }
  ])

  return (
    <div className="flex flex-col justify-center items-center gap-8 dark:bg-[#3F4F44] 
	pt-[30px] pb-[50px] font-mono dark:text-[#FFFFF0]">
      <h3 className="text-lg font-semibold">My work</h3>
      <div className="w-[900px] space-y-12">
        {
          projects.map(project => (
            <div key={project.id} className="flex flex-row items-center rounded-[10px] pl-6 border border-[#08CB00]">
	      <div className="w-2/5">
	        <img src={`${project.image}`} alt="website"
		  className="w-[400px] h-[250px] object-contain rounded-l-[10px]"/>
	      </div>
	      <div className="w-3/5 flex flex-col gap-2 px-6">
                <p>{project.name}</p>
		<div className="flex flex-row justify-start items-center gap-8">
	          <a href={`${project.demo}`} target="_blank"
		    className="flex flex-row gap p-1 hover:bg-gray-200 dark:hover:text-[#000000] hover:rounded">
                    <Globe />
		    <p className="ml-2 italic underline decoration-solid">Demo</p>
		    <ArrowUpRight />
		  </a>
	          <a href={`${project.repo}`} target="_blank"
		    className="flex flex-row gap p-1 hover:bg-gray-200 dark:hover:text-[#000000] hover:rounded">
                    <Github />
		    <p className="ml-2 italic underline decoration-solid">Repo</p>
		    <ArrowUpRight />
		  </a>
		</div>
                <p className="line-clamp-4">{project.description}</p>
	      </div>
	    </div>
	))
	}
      </div>
    </div>
  )
}


export default Projects
