import React from 'react'
import bg from "../../img/Oji-String-Beans-Farm.jpg"
import {AiFillPlayCircle} from "react-icons/ai"

const ShowProject = () => {
  return (
    <div>
          <div className='py-8'>
                <div className='container mx-auto p-3'>
                   <div className='grid grid-cols-1 md:grid-cols-4 mb-16'>
                         <div >
                              <span className='text-[#cb9833]'>Indonesia</span>
                              <div>
                                   <h1 className='font-semibold text-[44px] leading-[55px]'>Oji String Beans Farm</h1>
                              </div>
                        </div>
                   </div> 
                   <div>
                       <img src={bg.src}/>
                      
                   </div>
               </div>
               <div style={{backgroundColor:"rgba(150, 144, 162, 0.06)"}}> 
                    <div className='my-8 pt-16 p-3 container mx-auto'>
                         <h4 className='text-[22px] font-semibold mb-5'>Leave a replay</h4>
                         <p className='mb-8 text-[15px]'>Your email address will not be published. Required fields are marked *</p>
                         <form>
                               <div className='grid grid-cols-1 md:grid-cols-3 gap-4 items-center'>
                                    <div className='flex flex-col'>
                                          <label className='mb-2 font-medium'>Name *</label>
                                          <input className='px-3 py-3 focus:bg-[#c8c7c970] text-black transition-all' type={"text"} placeholder="Name"/>
                                    </div>
                                    <div className='flex flex-col'>
                                          <label className='mb-2 font-medium'>Email *</label>
                                          <input  className='px-3 py-3 focus:bg-[#c8c7c970] text-black transition-all' type={"text"} placeholder="Email"/>
                                    </div>
                                    <div className='flex flex-col'>
                                          <label className='mb-2 font-medium'>Website *</label>
                                          <input  className='px-3 py-3 focus:bg-[#c8c7c970] text-black transition-all' type={"text"} placeholder="Website"/>
                                    </div>
                               </div>
                               <div className='flex items-center gap-3 my-4'>
                                     <input type={`checkbox`} className="w-4 h-5 accent-black"/>
                                     <p className='text-[15px]'>Save my name, email, and website in this browser for the next time I comment.</p>
                               </div>
                               <div className='flex flex-col'>
                                     <label className='font-medium mb-2'>Comment</label>
                                     <textarea className='p-4'></textarea>
                               </div>
                               <div className='my-6'>
                                    <button className='bg-black font-bold py-3 hover:bg-[#dc2828] transition px-4 rounded text-[#fff] text-[14px]'>Post Comment</button>
                               </div>
                         </form>
                    </div>
               </div> 
          </div>
    </div>
  )
}

export default ShowProject