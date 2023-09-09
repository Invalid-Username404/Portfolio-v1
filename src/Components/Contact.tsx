import { useState, useRef } from "react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"
import { styles } from "../styles"
import { EarthCanvas } from "./Canvas/Earth"

import { slideIn } from "../utils/motion"

// TemplateId:template_dy2ullk
// ServiceId:service_2hrshcp
// PublicKey:ej5na1lQGqES8sgEM

 export const Contact = () => {
 const formRef = useRef<HTMLFormElement>(null);
 
 const [form, setForm] = useState({
  name:"",
  email:"",
  message:""

 })

  const [loading, setLoading] = useState(false)

  const inputHandleChange = (event: React.ChangeEvent<HTMLInputElement>)=> {
         const { name, value} =event.target
         setForm({...form, [name]:value})
  }


  const textAreaHandleChange = (event: React.ChangeEvent<HTMLTextAreaElement>)=> {
    const {name,value} = event.target
      setForm({...form, [name]:value})
  }


  const handleSubmit =(event: React.FormEvent<HTMLFormElement>) => {
     event.preventDefault();
     setLoading(true);
     emailjs.send("service_2hrshcp","template_dy2ullk",
       {
        from_name:form.name,
        to_name:"Mohamed",
        from_email:form.email,
        to_email:'mohamedibrahim208209@gmail.com',
        message:form.message },
        "ej5na1lQGqES8sgEM"

          ).then(() => {
            setLoading(false)
            alert(`Thanks for the message. I'll reply to you as soon as I see your message`)
            
            setForm({name:'',email:'',message:''})

          }).catch((error) => {
             setLoading(false)
             console.log(error)
             alert('something went wrong. Message was not sent')
          })


   }

 return (

   <div id="contact" className="bg-image md:mt-[-64px] xl:mt-12 md:flex-row flex flex-col-reverse gap-5 overflow-hidden
     bg-new-image bg-hLarge 
    ">
      <div className=" w-[100vw] z-[-1]">
     
      </div>
      <motion.div
       variants={slideIn('left', 'tween',0.2,1)}
       className="flex-[0.75] bg-[#1d1836] p-7 mt-8 rounded-2xl"
      >
       <p className={styles.heroSubText}>
       Reach Out to Me
       </p>
       <h3 className={styles.sectionHeadText}>Contact...</h3>
       <form
       ref={formRef}
        onSubmit={handleSubmit}
        className="mt-11 flex flex-col md:w-[42vw] gap-7"
       >
        {/* Name Input */}
         <label className="flex flex-col">
          <span className="text-cyan-100 font-medium mb-4">
            Name:
          </span>
          <input
             type="text"
             name="name"
             required
             value={form.name}
             onChange={inputHandleChange}
             placeholder="Enter your name"
             className="bg-slate-900 py-4 px-6
              placeholder:text-cyan-100
              placeholder:text-[14px]
              text-cyan-200 rounded-lg outline-none border-none font-medium
             "
           />
         </label>
           {/* Email Input */}
         <label className="flex flex-col">
          <span className="text-cyan-100 font-medium mb-4">
            Email:
          </span>
          <input
             required
             type="email"
             name="email"
             value={form.email}
             onChange={inputHandleChange}
             placeholder="Enter your email"
             className="bg-slate-900 py-4 px-6
              placeholder:text-cyan-100
              placeholder:text-[14px]
              text-cyan-200 rounded-lg outline-none border-none font-medium
             "
           />
         </label>
          {/* Message Textarea */}
         <label className="flex flex-col">
          <span className="text-cyan-100 font-medium mb-4">
            Message:
          </span>
          <textarea
            required
             rows={7}
             name="message"
             value={form.message}
             onChange={textAreaHandleChange}
             placeholder="What's your opinion?"
             className="bg-slate-900 py-4 px-6
              placeholder:text-cyan-100
              placeholder:text-[14px]
              text-cyan-200 rounded-lg outline-none border-none font-medium
             "
           />
         </label>
          <button
            type="submit"
            className="bg-slate-900 py-3 px-8 outline-none font-bold
             w-fit text-cyan-100 shadow-md shadow-black rounded-xl
            " 
          >

            {loading? "Sending..." : "Send" }
          </button>
       </form>
      </motion.div>
      <motion.div
       variants={slideIn('right', 'tween',0.2,1)}
       className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
       <EarthCanvas />
      </motion.div>
    </div>
  )
}


