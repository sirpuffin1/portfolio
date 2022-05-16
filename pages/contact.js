import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const serviceId = "service_nvvlygb"
    const templateId = "template_z9vi18r"
    const publicKey = "ln_CpM7NQ_UEHa7P4"

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
    return (
       <div className="bg-blue-200 h-screen">
        <div className="relative z-10 w-full max-w-2xl mt-20 lg:mt-0 lg:w-5/12">
        <div className="relative z-10 flex flex-col items-start justify-start p-10 bg-white shadow-2xl rounded-xl">
           <h4 className="w-full text-4xl font-medium leading-snug">Contact me</h4>
           <form ref={form} onSubmit={sendEmail} className="relative w-full mt-6 space-y-8">
              <div className="relative">
                 <label   className="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">Name</label>
                 <input type="text" name="user_name" className="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black" placeholder="John"/>
              </div>

              <div className="relative">
                 <label className="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">Email Address</label>
                 <input type="email" name="user_email" className="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black" placeholder="janedoe@email.com"/>
              </div>

              <div className="relative">
                 <label className="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">Message</label>
                 <textarea name="message" className="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black" placeholder="janedoe@email.com"/>
              </div>

              <div className="relative">
                 <input type="submit" value="Send" className="inline-block w-full px-5 py-4 text-xl font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-500 ease"/>
              </div>
           </form>
        </div>
        </div>
        </div>
    );
}

export default Contact;