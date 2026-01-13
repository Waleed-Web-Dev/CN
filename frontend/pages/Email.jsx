import react from 'react';
import logo from "/CNLogo.svg?url"
import r1 from "/Result1.svg?url"
import r2 from "/Result2.svg?url"
import r3 from "/Result3.svg?url"
import r4 from "/Result4.svg?url"
import r5 from "/Result5.svg?url"
import r6 from "/Result6.svg?url"
import r7 from "/Result7.svg?url"
import r8 from "/Result8.svg?url"
import r9 from "/Result9.svg?url"
import r10 from "/Result10.svg?url"
import r11 from "/Result11.svg?url"
import r12 from "/Result12.svg?url"
import r13 from "/Result13.svg?url"
import r14 from "/Result14.svg?url"
import r15 from "/Result15.svg?url"
import r16 from "/Result16.svg?url"
import r17 from "/Result17.svg?url"
import r18 from "/Result18.svg?url"
import Form from "./components/Form"
const Email = () => {
    return (
        <>
          <div className="bg-[#010101] text-white w-full min-h-screen">
           <div className="navDiv flex flex-row items-center gap-193">
               <div className="flex felx-row items-center gap-2">
                   <i className="fa-solid fa-phone"></i>
                   <h4>+1 646 8143098</h4>
               </div>
               <img src={logo} className="logo w-auto h-20" alt="logo" />

           </div>
            <div className={"Container grid grid-cols-[69%_30%] gap-1"}>
           <div className="formDiv w-full h-110">
                    <div className= "flex items-center my-4">
                        <div className="flex-1 border-t border-gray-300"></div>
                        <span className="text-gray-500 px-4">Assessment</span>
                        <div className="flex-1 border-t border-gray-300"></div>
                    </div>

               <Form />

           </div>
           <div className="reviewDiv w-full h-[76vh] text-white">
                  <div className="flex items-center my-4">
                      <div className="flex-1 border-t border-gray-300"></div>
                      <span className="px-4 text-gray-500">Small Achievements</span>
                      <div className="flex-1 border-t border-gray-300"></div>
                  </div>

                  <div className="carousel relative h-125 overflow-hidden mx-auto">
                      <div className="group flex flex-col">
                          <div className="card"><img src={r1} alt="Result 1"/></div>
                          <div className="card"><img src={r2} alt="Result 2"/></div>
                          <div className="card"><img src={r3} alt="Result 3"/></div>
                          <div className="card"><img src={r4} alt="Result 4"/></div>
                          <div className="card"><img src={r5} alt="Result 5"/></div>
                          <div className="card"><img src={r6} alt="Result 6"/></div>
                          <div className="card"><img src={r7} alt="Result 7"/></div>
                          <div className="card"><img src={r8} alt="Result 8"/></div>
                          <div className="card"><img src={r9} alt="Result 9"/></div>
                          <div className="card"><img src={r10} alt="Result 10"/></div>
                          <div className="card"><img src={r11} alt="Result 11"/></div>
                          <div className="card"><img src={r12} alt="Result 12"/></div>
                          <div className="card"><img src={r13} alt="Result 13"/></div>
                          <div className="card"><img src={r14} alt="Result 14"/></div>
                          <div className="card"><img src={r15} alt="Result 15"/></div>
                          <div className="card"><img src={r16} alt="Result 16"/></div>
                          <div className="card"><img src={r17} alt="Result 17"/></div>
                          <div className="card"><img src={r18} alt="Result 18"/></div>

                          <div className="card"><img src={r1} alt="Result 1"/></div>
                          <div className="card"><img src={r12} alt="Result 12"/></div>
                          <div className="card"><img src={r3} alt="Result 3"/></div>
                          <div className="card"><img src={r4} alt="Result 4"/></div>
                          <div className="card"><img src={r5} alt="Result 5"/></div>
                          <div className="card"><img src={r18} alt="Result 18"/></div>
                          <div className="card"><img src={r7} alt="Result 7"/></div>
                          <div className="card"><img src={r8} alt="Result 8"/></div>
                          <div className="card"><img src={r9} alt="Result 9"/></div>
                          <div className="card"><img src={r10} alt="Result 10"/></div>
                          <div className="card"><img src={r11} alt="Result 11"/></div>
                          <div className="card"><img src={r2} alt="Result 2"/></div>
                          <div className="card"><img src={r13} alt="Result 13"/></div>
                          <div className="card"><img src={r14} alt="Result 14"/></div>
                          <div className="card"><img src={r15} alt="Result 15"/></div>
                          <div className="card"><img src={r16} alt="Result 16"/></div>
                          <div className="card"><img src={r17} alt="Result 17"/></div>
                          <div className="card"><img src={r6} alt="Result 6"/></div>


                          <div className="card"><img src={r1} alt="Result 1"/></div>
                          <div className="card"><img src={r2} alt="Result 2"/></div>
                          <div className="card"><img src={r3} alt="Result 3"/></div>
                          <div className="card"><img src={r4} alt="Result 4"/></div>
                          <div className="card"><img src={r5} alt="Result 5"/></div>
                          <div className="card"><img src={r6} alt="Result 6"/></div>
                          <div className="card"><img src={r7} alt="Result 7"/></div>
                          <div className="card"><img src={r8} alt="Result 8"/></div>
                          <div className="card"><img src={r9} alt="Result 9"/></div>
                          <div className="card"><img src={r10} alt="Result 10"/></div>
                          <div className="card"><img src={r11} alt="Result 11"/></div>
                          <div className="card"><img src={r12} alt="Result 12"/></div>
                          <div className="card"><img src={r13} alt="Result 13"/></div>
                          <div className="card"><img src={r14} alt="Result 14"/></div>
                          <div className="card"><img src={r15} alt="Result 15"/></div>
                          <div className="card"><img src={r16} alt="Result 16"/></div>
                          <div className="card"><img src={r17} alt="Result 17"/></div>
                          <div className="card"><img src={r18} alt="Result 18"/></div>
                      </div>

                      {/* left fade
                      <div className="absolute top-0 left-0 h-[45vh] w-16 pointer-events-none bg-gradient-to-r from-[#010101]/80 via-[#010101]/20 to-trn
               ansparent"></div>

                       right fade
                      <div className="absolute top-0 right-0 h-[45vh] w-16 pointer-events-none bg-gradient-to-l from-[#010101]/80 via-[#010101]/20 to-transparent"></div>*/}
                  </div>


              </div>
          </div>
          </div>
        </>
    )
}


export default Email;