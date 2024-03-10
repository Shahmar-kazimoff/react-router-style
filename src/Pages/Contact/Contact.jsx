import React from 'react'
import contact from "./Contact.module.css"
function Contact() {
  return (
    <div className={contact.contact}>
      <div className="pr-[10%]">
        <div className="w-96">
          <h1 className="text-[60px] mb-2">
            <strong className="text-[#B49C73]">We Fight</strong> For Your Right
          </h1>
          <div>
            <p className='mb-5'>Another cool free template by the fine folks at <a href="https://colorlib.com/" target="_blank" rel="noreferrer" >Colorlib</a>.</p>
            <p><a href="/" className="p-3 rounded-3xl bg-[#B49C73] px-8 text-[15px] text-white hover:bg-[#c9b695]">Free Consultation</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact