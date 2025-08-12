import { Github, Linkedin, Send } from "lucide-react"
import emailjs from 'emailjs-com'
import { useState } from 'react'



const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus('')

    emailjs.send(
      'service_a2ybvba',
      'template_0kflxub',
      {
        from_name: formData.name,
	from_email: formData.email,
	message: formData.message
      },
      'bxFL4JXFg4XRqZJSV'
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setStatus('Message sent successfully! Thank you for contacting me.');
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((error) => {
      console.log('FAILED...', error);
      setStatus('Failed to send message. Please try again.');
    })
    .finally(() => {
      setIsLoading(false);
    });
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  return (
    <div className="flex flex-col justify-center items-center mb-[50px]">
      <div className="w-[700px] space-y-8">
        <div className="border-b mt-[20px] font-mono py-8 flex flex-row items-center justify-between gap-4 w-full">
	  <p className="font-semibold">Reach me on</p>
	  <div className="flex flex-row justify-center items-center border border-[#08CB00] rounded-[10px]">
	    <a href="https://web.telegram.org/k/#@abboszoirov" 
	     className="flex flex-row hover:bg-sky-500 py-2 px-4 rounded-l-[10px] hover:text-white gap-2">
	      <Send />
	      <p className="">abboszoirov</p>
	    </a>
	    <a href="https://www.linkedin.com/in/dotnetbuilt/" 
	      className="flex flex-row hover:bg-blue-500 py-2 px-4 hover:text-white gap-2">
	      <Linkedin />
	      <p>dotnetbuilt</p>
	    </a>
	    <a href="https://github.com/zoirovdev" 
	      className="flex flex-row hover:bg-gray-700 py-2 px-4 rounded-r-[10px] hover:text-white gap-2">
	      <Github />
	      <p>zoirovdev</p>
	    </a>
	  </div>
        </div>
      
        <div className="flex flex-col gap-4 font-mono font-medium w-full">
	  <p className="text-lg font-semibold">Send me email</p>
	  
	  <form onSubmit={handleSubmit} className="space-y-6">
	    <div className="flex flex-col gap-2">
              <label htmlFor="name">Name</label>
	      <input type="text" id="name" name="name" className="border border-[#08CB00] 
		rounded-[10px] px-4 py-2 outline-none" value={formData.name} 
		onChange={handleChange} required/>
	    </div>
	    <div className="flex flex-col gap-2">
              <label htmlFor="email">Email</label>
	      <input type="email" id="email" name="email" className="border border-[#08CB00] 
		rounded-[10px] px-4 py-2 outline-none" value={formData.email} 
		onChange={handleChange} required/>
	    </div>
	    <div className="flex flex-col gap-2">
              <label htmlFor="message">Message</label>
	      <textarea id="message" name="message" className="h-[100px] border border-[#08CB00] 
		rounded-[10px] px-4 py-2 outline-none" value={formData.message} 
		onChange={handleChange} required/>
	    </div>
	    <div className="flex flex-row justify-end">
	      <button className="border border-gray-500 rounded-[10px] bg-[#08CB00] text-white px-6 py-1 
		cursor-pointer" type="submit" disabled={isLoading}>
		{isLoading ? 'Sending...' : 'Send'}
	      </button>
	    </div>
	  </form>

        </div>
      </div>
    </div>
  )
}



export default Contact
