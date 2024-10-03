import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './Home_page.css'
import house from './assets/house.png'
import house2 from './assets/home.png'
import truck from './assets/truck3.png'
import truck2 from './assets/truck2.png'
import icon1 from './assets/icon1.png'
import icon2 from './assets/icon2.png'
import icon3 from './assets/icon3.png'
import icon4 from './assets/icon4.png'
import icon5 from './assets/icon5.png'
import icon6 from './assets/icon6.png'
function Home_page() { 
  useEffect(()=>{
    Aos.init();
  },[] )
  return (
    <>
     {/* <div className='relative top-5 bg-slate-600 header flex items-center p-5 pl-[8%] justify-between '>
    <div className='innerheader text-rose-50 bold'>RAM</div>  
     <div className='flex'>
   <img src={house2} alt='didnt show' height={40} width={40}/>
   <img src={truck} alt='didnt show' height={40} width={40} className=' truck'/></div>
   <ul className='flex-1 text-right m-0 mr-6'>
     <li  className='inline-block list-none pr-8'> <img src={house} alt='didnt show' height={40} width={40}/></li>
   
   <li className='inline-block list-none pr-8'></li>
       <li className='inline-block list-none pr-8'>contact us</li>
       <li className='inline-block list-none'>service</li>
     </ul>
  
   </div> */}
   
   
   <div className='header '>
    <ul className='header_right  flex flex-row-reverse  text-sm justify-evenly items-center   h-12 bg-[#ed1d24] invisible sm:visible '>
    
       <li>WorldWild presense</li>
    <li>Our USPs</li>
    <li>BeAware of Fake</li>
    <li>FAQ's</li>
    <li>CSR</li>
    <li>Trucking cube</li>
    <li>shifting process</li>
    <li>customer care</li>
    <li><i className="fa-solid fa-house"></i> online Payment</li>

    </ul>
    <div>
      <ul className=' grid grid-cols-6 gap-2 items-center'>
        <li className='grid col-span-2 justify-items-start'> <img src={truck} alt='didnt show' height={150} width={150} className=' truck'/></li>
        <li>
          <ul className='flex  justify-end invisible sm:visible'>
          <li><img src="	https://www.agarwalpackers.com/images/call.png" alt='dont show' width={30} height={30}/></li>
            <li className='text-sm'>09 300 300 300<br/>
            Shifting Domestic<br/>
            & International
            </li>
            
          </ul>
        </li>
        <ul className='flex text-sm  justify-end invisible sm:visible'>
        <li className='w-10 h-10'><i class="fa-solid fa-location-dot"></i></li>
        <li>Track Your<br/>
        Consignment</li>
        </ul>
        <ul className='flex  justify-end invisible sm:visible'>
        <li><img src='https://www.agarwalpackers.com/images/indian_flag_icon.png'/></li>
        <li>India</li>
        </ul>
        <li className='text-center'><i class="fa-solid fa-bars"></i></li>
      </ul>
    </div>
   </div>
   <div className='secondary_header'>
        <ul className='text-sm flex  justify-evenly underline invisible sm:visible'>
          <li>Profile</li>
          <li>Why Agarwal Packers & Movers Ltd.</li>
          <li>Services  </li>
          <li>Shifting Process</li>
          <li>
          International Moving</li>
          <li>Storage</li>
          <li>Contact Us</li>
        </ul>
   </div>
   <div className='animation_page w-[100%] h-[76vh] bg-teal-600'>
     <ul className='grid grid-cols-2 grid-rows-2'> 
      <li> <img src={house} alt='didnt show' height={80} width={80}/>
      </li>
      <li className= 'transport grid grid-rows-subgrid col-span-1'> <img src={truck2} alt='didnt show' height={80} width={80}/>
      </li>
      <li className='grid row-span-4 items-end justify-end'>  <img src={house2} alt='didnt show' height={80} width={80}/></li>
     </ul>
     <div className='w-[100%] h-64'>
     <div className='w-[80%] h-[17rem] shadow-2xl  rounded-md   relative top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 '>
     <div className='center-box w-[100%] h-28 bg-[#ed1d24] rounded-sm flex '> 
      <ul className=' white-box  flex gap-1 justify-end items-end w-[78%] h-28 '>
        <li className='box w-28 h-20 rounded-xl bg-white flex flex-col justify-center items-center text-sm'><i class="fa-solid fa-truck"></i>Domestic Moving</li>
         <li className='box w-28 h-20 rounded-xl bg-white flex flex-col justify-center items-center text-sm'><i class="fa-solid fa-truck-pickup"></i>Car Moving</li>
         <li className='box w-28 h-20 rounded-xl bg-white flex flex-col justify-center items-center text-sm'><i class="fa-solid fa-building-columns"></i>Secure Storage</li>
         <li className='box w-28 h-20 rounded-xl bg-white flex flex-col justify-center items-center text-sm'><i class="fa-solid fa-jet-fighter-up"></i>Flight booking</li>
         <li className='box w-28 h-20 rounded-xl bg-white flex flex-col justify-center items-center text-[12px]'><i class="fa-solid fa-jet-fighter"></i>international Moving</li>
         <li className='box w-28 h-20 rounded-xl bg-white flex flex-col justify-center items-center text-sm'><i class="fa-solid fa-truck-moving"></i>Office Moving</li>
         <li className='box w-28 h-20 rounded-xl bg-white flex flex-col justify-center items-center text-[12px]'><i class="fa-solid fa-truck-fast"></i>Commercial Moving</li>
        
        
      </ul>
      <ul className='flex flex-col justify-start items-center text-yellow-50'>
        <li><i class="fa-solid fa-phone">              </i>09 300 300 300</li>
        <li className='text-sm font-bold'>Shifting Domestic & International</li>
      </ul>
     </div>
     <div className='w-[100%] h-[45.7%] '>
      <div>Get a free<span className='text-red-600 font-bold'> Domestic Moving</span> quote</div>
          <div className=' head_inputs'>
                <div className='flex flex-row flex-grow   inputs'>
                  <input className='input1 w-[300px] h-10 m-1 sm:m-3 border  rounded-md border-gray-400 ' placeholder='Full Name*' type='text' name='search'/>
                  <input className='input1 w-[300px] h-10 m-1 sm:m-3 border rounded-md border-gray-400 ' placeholder='Mobile No^' type='text' name='search'/>
                  <input className='input1 w-[300px] h-10 m-1 sm:m-3 border rounded-md border-gray-400 ' placeholder='Email Id^' type='text' name='search'/>

                </div>
                <div className='flex flex-row flex-grow inputs2 '>
                <input className='input w-[200px] h-10 m-1 sm:m-3 border  rounded-md border-gray-400 ' placeholder='Full Name*' type='text' name='search'/>
                  <input className='input w-[200px] h-10 m-1 sm:m-3 border rounded-md border-gray-400 ' placeholder='Mobile No^' type='text' name='search'/>
                  <input className='input w-[150px] h-10 m-1 sm:m-3 border rounded-md border-gray-400 ' placeholder='Email Id^' type='text' name='search'/>
                    <img className='h-10 input rounded-md m-1 sm:m-3' src='https://www.agarwalpackers.com/captcha.php'width={60}></img>
                    <button className='w-20 input h-9 m-1 sm:m-3 rounded-md hover:bg-yellow-400 bg-red-500'>Submit</button>
                </div>
          </div>
     </div>
    
     </div></div>
   </div>
 
   <div className='page-2 flex flex-row justify-between  pt-2 pb-2'>
    <div className='page_2_main_border pl-3  w-[600px]'>
      <p data-aos="fade-up" className=' page2_header text-2xl font-bold uppercase tracking-tighter'>Agarwal Packers and Movers Ltd.</p>
      <p data-aos="fade-up" className='page2_header2 text-xl tracking-tighter'>An ISO 9001:2015 & ISO 39001:2012 Certified Company</p>
      <p data-aos="fade-up" className='page2_header3 text-2xl tracking-tighter text-red-700'>India’s Largest and Most Awarded Movers</p>
      <p className='paragraph w-[98%] tracking-wider leading-5 text-sm h-28'>Agarwal Packers and Movers Ltd is a globally recognized logistics company operating since 1987 and is recognized for imparting excellent services in packing and moving segments. We have designed our services proficiently to meet the maximum customer satisfaction and rendered them in such a way that comes out high on the expectations of our clients.</p>
      <p className='page_2_read_more text-md text-red-700 pt-2'>Read More</p>
      <p data-aos="flip-right"  className='page2_photos_header text-xl uppercase tracking-tighter font-semibold pb-1 text-gray-700'>A MOVING SOLUTION THAT ASSURES</p>
    <div data-aos="fade-up-left " className='page2_photos grid gap-2 grid-cols-2   w-[75%] '> 
      <img className='page2_photo1' src='https://www.agarwalpackers.com/images/packing-moving.jpg' width={198} height={178}/>
      <img className='page2_photo1' src='https://www.agarwalpackers.com/images/agarwal-movers-crockery.jpg' width={198} height={178}/>
      <img className='page2_photo1' src='https://www.agarwalpackers.com/images/customized-packing.jpg' width={198} height={178}/>
      <img className='page2_photo1' src='https://www.agarwalpackers.com/images/zero-damage.jpg' width={198} height={178}/>
    </div></div>
    <div className='border-r-[1px] border-slate-400 w-1'></div>
    <div className='table'> 
      <table className='page_2_table divide-y divide-slate-200 h-[590px] shadow-xl   w-[300px]  flex flex-col font-normal text-slate-700'>
        <th className='' >Why APML?</th>
        <tr>37+ Years of Trust</tr>
        <tr><i class="fa-solid fa-location-dot"></i>1264+ Service Locations</tr>
        <tr>182 Worldwide Coverage</tr>
        <tr>125+ Branches PAN India</tr>
        <tr>132060+ Moves Annually</tr>
        <tr>Trained Manpower</tr>
        <tr>3000+ Trucking Cube (Container)</tr>
        <tr>1200+ GPS Enabled Vehicles</tr>
        <tr>Innovative Technology</tr>
        <tr>20 Lac sq. ft warehouse space</tr>
        <tr>Online Consignment Tracking</tr>
        <tr>Free Pre-Move Survey</tr>
        <tr className=''>7600+ Home Storage Lockers</tr>
        

      </table>
    
    </div>
    <div className=''>
      <ul className='logos flex flex-col gap-2 pr-20'>
        <li className='text-2xl text-neutral-700 font-extrabold'>AWARDS</li>
        <li><img src="	https://www.agarwalpackers.com/images/indiacargo.jpg"/></li>
        <li><img src="https://www.agarwalpackers.com/images/manindra-awards.jpg"/></li>
        <li><img src="https://www.agarwalpackers.com/images/jk-award.jpg"/></li>
        <li><img src="https://www.agarwalpackers.com/images/zee-awards.jpg"/></li>
        <li><img src="https://www.agarwalpackers.com/images/abp-awards.jpg"/></li>
        <li><img src="	https://www.agarwalpackers.com/images/ceat-award.jpg"/></li>
        <li className='flex w-[110px] h-[30px]'>View More<img src='https://www.agarwalpackers.com/images/arrow-right.svg'width={20}/></li>
    
      </ul>
    </div>
   </div>
   <div className='page-3 bg-[#fbf8f5] w-[100%] h-[140.5vh]'>
    <div className='page-3-header text-center'>
     <div className='text-3xl font-bold text-neutral-700'>What We Cater To</div>
     <div className=' flex  justify-center '>
     <ul className='flex pt-6 pb-6'>
      <li className='bg-red-500 p-3 pl-8 pr-8 text-md font-semibold text-white'>Domestic</li>
      <li className='border border-red-500 p-3 pl-8 pr-8 text-md font-semibold '>Commercial</li>
     </ul></div>
     <div className='text-2xl font-bold text-neutral-700 pb-4'>Domestic Moving</div>
     <div className='break-all font-[300] pb-6 '>Agarwal Packers and Movers Ltd. offers unrivaled domestic relocation services as per your specific<br/>
       requirements. We make sure that your household shifting to and from any corner of India remains<br/>
        hassle-free by deploying our distinctive and brilliant moving techniques.</div>
    </div>
    <div className='page-3-part-2 flex justify-between mt-8'>
      <div className='page-3-part-2-left grid grid-cols-3 gap-x-2 ml-24 mt-16 max-h-[450px] '>
        <ul className='box border border-neutral-300 text-sm font-semibold w-[130px] h-[200px] bg-white flex flex-col gap-y-10 transition-colors justify-center text-neutral-600 hover:text-red-500 items-center hover:border-red-500'>
          <li><img className='box-image  transition-all' src={icon1} width={40}  height={40}/></li>
          <li className='text-center'>
          Household Shifting</li>
        </ul>
        <ul className='box border border-neutral-300 text-sm font-semibold w-[130px] h-[200px] bg-white flex flex-col gap-y-10 transition-colors justify-center text-neutral-600 hover:text-red-500 items-center hover:border-red-500'>
          <li><img className='box-image  transition-all' src={icon2} width={40} height={40}/></li>
          <li className='text-center'>International Moving</li>
        </ul>
        <ul className='box border border-neutral-300 text-sm font-semibold w-[130px] h-[200px] bg-white flex flex-col gap-y-10 transition-colors justify-center text-neutral-600 hover:text-red-500 items-center hover:border-red-500'>
          <li><img className='box-image  transition-all' src={icon3} width={40} height={40}/></li>
          <li className='text-center'>Warehouse & Storage Service</li>
        </ul>
        <ul className='box border border-neutral-300 text-sm font-semibold w-[130px] h-[200px] bg-white flex flex-col gap-y-10 transition-colors justify-center text-neutral-600 hover:text-red-500 items-center hover:border-red-500'>
          <li><img className='box-image  transition-all' src={icon4} width={40} height={40}/></li>
          <li className='text-center'>Car Carrier Service</li>
        </ul>
        <ul className='box border border-neutral-300 text-sm font-semibold w-[130px] h-[200px] bg-white flex flex-col gap-y-10 transition-colors justify-center text-neutral-600 hover:text-red-500 items-center hover:border-red-500'>
          <li><img className='box-image  transition-all' src={icon5} width={40} height={40}/></li>
          <li className='text-center'>Office/Corporate Shifting</li>
        </ul>
        <ul className='box border border-neutral-300 text-sm font-semibold w-[130px] h-[200px] bg-white flex flex-col gap-y-10 transition-colors justify-center text-neutral-600 hover:text-red-500 items-center hover:border-red-500'>
          <li><img className='box-image  transition-all'  src={icon6} width={40} height={40}/></li>
          <li className='text-center'>Fine Arts & Sculptures Relocation</li>
        </ul>
      </div>
      <div className='page-3-part-2-right relative  ' >
        <img className='page-3-part-2-right-img pl-10' src='https://www.agarwalpackers.com/images/agarwal-packers-and-movers-packing-process.webp' width={715} height={630} />
        <div className='page-3-part-2-right-red-box absolute top-16 w-[490px] h-[397.7px] bg-red-600 items-start gap-8 text-white  pt-5 pl-5' >
          
          <ul>
            <li className='text-xl pb-4 font-semibold'>Household Shifting</li>
            <li className='text-sm mr-2 pb-4'>We are the fore-runners in the packing and moving business offering
               matchless and effective relocation services in the household sector.</li>
          </ul>
          <ul className='flex flex-col gap-6 pt-4 text-sm'>
            <li>Uptime Delivery.</li>
            <li>Comprehensive support</li>
            <li>Wide Coverage</li>
            <li>Risk Coverage</li>
          </ul>
          <ul className='pt-8'>
            <li className='border-4 border-red-50 w-24 h-10 pt-1 font-semibold pl-2'>View More</li>
           
          </ul>
        </div>
      </div>

    </div>
   </div>
   <div className='page-4 pb-16'>
    <div className='page-4-part-1 pt-20 flex flex-col justify-center items-center gap-6 '>
      <ul className='text-center '>
        <li className='text-2xl font-bold pb-4'>What Makes Agarwal Packers Unique?</li>
        <li className='text-neutral-600'>We Always Deliver More Than Expected</li>
      </ul>
      <ul className=' page-4-part-1-options flex border-b h-7 text-neutral-500 border-neutral-500 font-semibold gap-x-6 transition-colors'>
        <li className='hover:text-red-500 hover:border-b-2 hover:border-red-500 cursor-pointer transition-all'>Our USP</li>
        <li className='hover:text-red-500 hover:border-b-2 hover:border-red-500 cursor-pointer transition-all'>Case Study</li>
        <li className='hover:text-red-500 hover:border-b-2 hover:border-red-500 cursor-pointer transition-all'>Advantages</li>
        <li className='hover:text-red-500 hover:border-b-2 hover:border-red-500 cursor-pointer transition-all'>Safety Features</li>
        <li className='hover:text-red-500 hover:border-b-2 hover:border-red-500 cursor-pointer transition-all'>Storage Capacity</li>
        
      </ul>

    </div>
    <div className='page-4-part-2  flex justify-around pt-24 '>
      <div className='page-4-part-2-left flex flex-col gap-y-36 border-l border-red-500 pl-4'>
        <ul>
          <li className=' text-2xl text-red-600 font-bold'>APML SMART VEHICLES</li>
          <li className='page-4-part-2-left-p'>APML Smart Vehicle is a groundbreaking innovation in the relocation industry,<br/>
             specifically designed for the safe and efficient movement of Household Goods<br/>
              (HHG). As part of our pioneering journey, these Smart Vehicles boast next-level<br/>
               features that ensure your moving experience is smoother, safer, and more<br/>
                reliable than ever before. </li>
          <li className='text-md font-semibold text-red-600 '>LEARN MORE<i class="fa-solid fa-arrow-right"></i></li>
        </ul>
        <ul className='flex flex-col gap-y-9 text-xl text-neutral-500 font-bold'>
          <li>TRUCKING CUBE</li>
          <li>LED BOX</li>
         
        </ul>
      </div>
      <div className='relative'><img className='w-[469.5px] h-[332.6px]' src='	https://www.agarwalpackers.com/images/vachile.jpg'/>
      <div className= 'img-red-box absolute bottom-14 right-6 bg-red-600 w-[120px] text-white font-semibold h-[120px] flex flex-col text-md text-center justify-center items-center'>Story<br/> Behind it <span className='font-extrabold text-2xl'>+</span></div>
      </div>
    </div>
   </div>
   <div className='page-5 bg-[#fbf8f5] w-[100%] h-[80vh] flex justify-around pt-14 '>
    <div className='page-5-part-1 '>
      <ul className='page-5-part-1-ul-1 grid grid-cols-2 gap-9 '>
        {/* box-1 */}
        <li   className="page-5-box max-w-[270px] max-h-[184px] bg-[url('https://www.agarwalpackers.com/images/apml-moving-employees.webp')]     bg-no-repeat bg-cover ">
                    <ul className='pl-4 h-[184px] flex flex-col justify-center '>
                      <li className='page-5-box-li-1'>Moving<br/>
                      your Employees?</li>
                      <li className='page-5-box-li-2'>
                        Choose our<br/>
                        Corporate moving solutions</li>
                      <li className='mt-8' ><button className='bg-red-500 text-white text-center align-middle font-normal rounded-md h-7  w-28'>Learn More</button></li>
                    </ul>
        </li>
        {/* box-2 */}
        <li   className="page-5-box max-w-[270px] max-h-[184px] bg-[url('https://www.agarwalpackers.com/images/agarwal-packers-home-storage.webp')]     bg-no-repeat bg-cover ">
                    <ul className='pl-4 h-[184px] flex flex-col justify-center '>
                      <li className='page-5-box-li-1'>Home Removals and Storage?</li>
                      <li className='page-5-box-li-2'>
                      Opt for<br/>
                      APML Warehousing and Storage</li>
                      <li className='mt-8' ><button className='bg-red-500 text-white text-center align-middle font-normal rounded-md h-7  w-28'>Learn More</button></li>
                    </ul>
        </li>
        {/* box-3 */}
        <li   className="page-5-box max-w-[270px] max-h-[184px] bg-[url('https://www.agarwalpackers.com/images/apml-moving-insurance.webp')]     bg-no-repeat bg-cover ">
                    <ul className='pl-4 h-[184px] flex flex-col justify-center '>
                      <li  className='page-5-box-li-1'>Need to file<br/>
                      a claim?</li>
                      <li  className='page-5-box-li-2'>
                      Get Prompt Settlement</li>
                      <li className='mt-8' ><button className='bg-red-500 text-white text-center align-middle font-normal rounded-md h-7  w-28'>Learn More</button></li>
                    </ul>
        </li>
        {/* box-4 */}
        <li   className="page-5-box max-w-[270px] max-h-[184px] bg-[url('https://www.agarwalpackers.com/images/apml-moving-coordinator.webp')]     bg-no-repeat bg-cover ">
                    <ul className='pl-4 h-[184px] flex flex-col justify-center '>
                      <li className='page-5-box-li-1'>Require personal<br/> 
                      Moving Coordinator?</li>
                      <li  className='page-5-box-li-2'>
                      Get in touch with us!</li>
                      <li className='mt-8' ><button className='bg-red-500 text-white text-center align-middle font-normal rounded-md h-7  w-28'>Learn More</button></li>
                    </ul>
        </li>
        
      </ul>
    </div>
    <div className='page-5-part-2 '>
      <div className=''><img className='page-5-part-2-img  w-[495px] h-[250px]' src='https://www.agarwalpackers.com/images/agarwal-packers-nitin-gadkari-goi.webp'/></div>
      <div className='bg-white rounded-md'>
      <ul >
        <li className='text-xl font-semibold'>Awards & Events</li>
        <li className='text-sm text-neutral-600 '>New Delhi, Shri Nitin Gadkari (Hon’ble, Minister of Road Transport and Highways <br/>
          of India) in discussion with Mr. Ramesh Agarwal (Mentor, APML) on major<br/>
          issues for the betterment of truck drivers of India.</li>
      </ul>
      <ul className='flex flex-row justify-around '>
        <li className='text-blue-500 text-xl'>Read More</li>
        <li className='w-[35px] h-[35px] flex gap-x-2' ><img src='https://www.agarwalpackers.com/images/arrow-left.svg'/> <img src='	https://www.agarwalpackers.com/images/arrow-right.svg'/></li>
      </ul>
      </div>

    </div>
   </div>
  
    <h1 className='text-3xl font-bold text-center tracking-wider p-9'>Our Testimonials</h1>
    <div className='page-6 pb-16 flex justify-around'>
    <div className='page-6-part-1 w-[58.2%] h-[60vh] rounded-sm shadow-2xl '>
      <ul>
        <li className='flex gap-x-8'><img className=' max-w-[80px]' src='https://www.agarwalpackers.com/images/hash_img.png'/><span className='uppercase text-4xl text-neutral-200 font-bold'>
        Direct from client</span></li>
        <li className='text-center pb-8'>Your team very carefully and meticulously packed all items and got them transported<br/>
         safely to two destinations. This is to acknowledge the superb service rendered by your<br/>
          company.</li>
      </ul>
      <ul className='flex justify-center gap-x-10'>
        <li><img className='w-[80px] h-[80px]' src='https://www.agarwalpackers.com/images/E_Sreedharan.jpg'/></li>
        <li className='flex flex-col'><span className='text-lg text-red-500 font-semibold'>Mr. E. Sreedharan</span><span>Principal Advisor<br/>
        Delhi Metro Rail Corporation Ltd<br/>
        Relocated From New Delhi to Kerala</span></li>
      </ul>
    </div>
    <div className='page-6-part-2 border-l border-neutral-600 text-neutral-600'>
      <ul className='pl-6 flex flex-col gap-y-4'>
        <li className='page-6-part-2-li-1 text-neutral-500 text-lg font-semibold'>SEGMENTS </li>
        <li className='page-6-part-2-li flex flex-row gap-x-4'>Corporate <span><i class="fa-solid fa-plus"></i></span></li>
        <li className='page-6-part-2-li flex flex-row gap-x-4'>Banking & Finance <span><i class="fa-solid fa-plus"></i></span></li>
        <li className='page-6-part-2-li flex flex-row gap-x-4'>Defence Officers <span><i class="fa-solid fa-plus"></i></span></li>
        <li className='page-6-part-2-li flex flex-row gap-x-4'>IITs/Education <span><i class="fa-solid fa-plus"></i></span></li>
        <li className='page-6-part-2-li flex flex-row gap-x-4'>Judicial Services <span><i class="fa-solid fa-plus"></i></span></li>
        <li className='page-6-part-2-li flex flex-row gap-x-4'>Govt. of India / Ministries <span><i class="fa-solid fa-plus"></i></span></li>
        <li className='page-6-part-2-li flex flex-row gap-x-4'>IAS / IPS / IRS <span><i class="fa-solid fa-plus"></i></span></li>
        <li className='page-6-part-2-li flex flex-row gap-x-4'>Media & Prominent People <span><i class="fa-solid fa-plus"></i></span></li>
      </ul>
    </div>
   </div>
   <div className='page-7 pb-8 border-t border-b border-neutral-300 '>
    <h1  data-aos="fade-up" className='pt-8 text-4xl tracking-wide text-center  font-bold'>Featured On</h1>
    <div className='page-7-part-1 pt-10'>
      <ul className=' flex justify-around'>
        <li><img className='w-[130px] h-[80px] hover:w-[134px] hover:h-[83px] transition-all' src='https://www.agarwalpackers.com/images/forbes-india-logo.jpg'/></li>
        <li><img className='w-[130px] h-[80px] hover:w-[134px] hover:h-[83px] transition-all' src='https://www.agarwalpackers.com/images/bw-business-logo.jpg'/></li>
        <li><img className='w-[130px] h-[80px] hover:w-[134px] hover:h-[83px] transition-all' src='https://www.agarwalpackers.com/images/business-standard-logo.jpg'/></li>
        <li><img className='w-[130px] h-[80px] hover:w-[134px] hover:h-[83px] transition-all' src='https://www.agarwalpackers.com/images/the-hundu-logo.jpg'/></li>
        <li><img className='w-[130px] h-[80px] hover:w-[134px] hover:h-[83px] transition-all' src='https://www.agarwalpackers.com/images/ndtv-profit-logo.jpg'/></li>
      </ul>
    </div>
    <div className='page-7-part-2'>
      <ul className='flex flex-col gap-y-4 pt-6 text-center'>
        <li className='text-xl font-semibold '>Agarwal Packers and Movers launches mobile apps for its customers and potential partners</li>
        <li className='text-sm text-neutral-500'>Agarwal Packers and Movers Limited launched two mobile applications last week- APML Suvidha and APML Sathi to equip its customers and onboard new partners, respectively.The two mobile <br/>
        apps were launched in New Delhi by Minister of Road Transport & Highways Nitin Gadkari, in the presence of other dignitaries, including Y.S. Malik (Secretary of Ministry of Road Transport &<br/>
         Highways) and Additional Secretary, NITI Aayog, Jagdish Mittal, Major General Deepak Sapra (SM), Lt.General V.K. Chaturvedi (AVSM), Commodore Gangesh Kumar and Pradeep Singhal</li>
      </ul>
    </div>
   </div>
   <div className='page-8-part-1  flex flex-col gap-y-10 pt-11'>
    <div className='flex flex-col gap-y-6 items-center'>
      <h1 className='text-3xl font-semibold'>Now Book Your Flights at Discounted Rates with APML Trips and Travel Ltd.</h1>
      <img className='page-8-part-1-img w-[1170px] h-[265px]' src='https://www.agarwalpackers.com/images/apml-flight-booking.png'/>
    </div>
    <div className='page-8-part-2 pb-6'>
      <ul className='page-8-part-2-ul flex justify-evenly'>
        <li className='page-8-part-2-ul-li flex flex-row gap-2  border-b border-neutral-300  text-center h-8 hover:border-b-2 hover:border-red-600 hover:text-red-600 transition-all'><i class="fa-solid fa-plane"></i>Post Feedback</li>
        <li className='page-8-part-2-ul-li flex flex-row gap-2  border-b border-neutral-300 text-center h-8 hover:border-b-2 hover:border-red-600 hover:text-red-600 transition-all'><i class="fa-solid fa-plane"></i>Photo Gallery</li>
        <li className='page-8-part-2-ul-li flex flex-row gap-2  border-b border-neutral-300 text-center h-8 hover:border-b-2 hover:border-red-600 hover:text-red-600 transition-all'><i class="fa-solid fa-plane"></i>Award Gallery</li>
        <li className='page-8-part-2-ul-li flex flex-row gap-2  border-b border-neutral-300 text-center h-8 hover:border-b-2 hover:border-red-600 hover:text-red-600 transition-all'><i class="fa-solid fa-plane"></i>Media Space</li>
        <li className='page-8-part-2-ul-li flex flex-row gap-2  border-b border-neutral-300 text-center h-8 hover:border-b-2 hover:border-red-600 hover:text-red-600 transition-all'><i class="fa-solid fa-plane"></i>FAQ's</li>
        <li className='page-8-part-2-ul-li flex flex-row gap-2 border-b border-neutral-300  text-center h-8 hover:border-b-2 hover:border-red-600 hover:text-red-600 transition-all'><i class="fa-solid fa-plane"></i>Testimonials</li>
        <li className='page-8-part-2-ul-li flex flex-row gap-2  border-b border-neutral-300 text-center h-8 hover:border-b-2 hover:border-red-600 hover:text-red-600 transition-all'><i class="fa-solid fa-plane"></i>Customer Care</li>
      </ul>
    </div>
   </div>
   <div className='page-9'>
    <h1 className='text-2xl text-red-600 border-b-2 border-red-600 font-semibold w-[15%] m-10'>Search By Location</h1>
    <div className='page-9'>
      
        <ul  className='page-9-part-1'> 
        <li><a href="packersmoversagra.html">Packers &amp; Movers Agra</a></li>
        <li><a href="packersmoversahmedabad.html">Packers &amp; Movers ahmedabad</a></li>
        <li><a href="packersmoversallahabad.html">Packers &amp; Movers allahabad</a></li>
        <li><a href="packersmoversalwar.html">Packers &amp; Movers alwar</a></li>
        
        <li><a href="packersmoversambala.html">Packers &amp; Movers ambala</a></li>
        <li><a href="packersmoversankleshwar.html">Packers &amp; Movers ankleshwar</a></li>
        <li><a href="packersmoversaurangabad.html">Packers &amp; Movers aurangabad</a></li>
        <li><a href="packersmoversbanaras.html">Packers &amp; Movers banaras</a></li>
        <li><a href="packersmoversbangalore.html">Packers &amp; Movers bangalore</a></li>
        <li><a href="packersmoversbaroda.html">Packers &amp; Movers Baroda</a></li>
        <li><a href="packersmoversbhiwandi.html">Packers &amp; Movers Bhiwandi</a></li>
        <li><a href="packersmoversbhopal.html">Packers &amp; Movers bhopal</a></li>
        <li><a href="packersmoversbhubaneswar.html">Packers &amp; Movers Bhubaneswar</a></li>
        <li><a href="packersmoversbhuj.html">Packers &amp; Movers Bhuj</a></li>
        <li><a href="packersmoversbikaner.html">Packers &amp; Movers Bikaner</a></li>
        <li><a href="packersmoverscalicut.html">Packers &amp; Movers Calicut</a></li>
        <li><a href="packersmoverschandigarh.html">Packers &amp; Movers Chandigarh</a></li>
        <li><a href="packersmoverschennai.html">Packers &amp; Movers Chennai</a></li>
        <li><a href="packersmoverscochin.html">Packers &amp; Movers cochin</a></li>
        <li><a href="packersmoverscoimbatore.html">Packers &amp; Movers coimbatore</a></li>
        <li><a href="packersmoverscuttack.html">Packers &amp; Movers Cuttack</a></li>
        <li><a href="packersmoversdehradun.html">Packers &amp; Movers Dehradun</a></li>
        <li><a href="packersmoversdelhi.html">Packers &amp; Movers Delhi</a></li>
        <li><a href="packersmoversdwarka.html">Packers &amp; Movers Dwarka</a></li>
        <li><a href="packersmoversfaridabad.html">Packers &amp; Movers Faridabad</a></li>
        <li><a href="packersmoversgandhidham.html">Packers &amp; Movers Gandhidham</a></li>
        <li><a href="packersmoversghaziabad.html">Packers &amp; Movers Ghaziabad</a></li>
        <li><a href="packersmoversgoa.html">Packers &amp; Movers Goa</a></li>
        <li><a href="packersmoversgreaternoida.html">Packers &amp; Movers greaternoida</a></li>
        <li><a href="packersmoversgurgaon.html">Packers &amp; Movers Gurgaon</a></li>
        <li><a href="packersmoversguwahati.html">Packers &amp; Movers Guwahati</a></li>
        <li><a href="packersmoversgwalior.html">Packers &amp; Movers Gwalior</a></li>
        <li><a href="packersmoversharidwar.html">Packers &amp; Movers Haridwar</a></li>
        <li><a href="packersmovershisar.html">Packers &amp; Movers Hisar</a></li>
        <li><a href="packersmovershubli.html">Packers &amp; Movers Hubli</a></li>
        <li><a href="packersmovershyderabad.html">Packers &amp; Movers Hyderabad</a></li>
        <li><a href="packersmoversindore.html">Packers &amp; Movers Indore</a></li>
        <li><a href="packersmoversjabalpur.html">Packers &amp; Movers Jabalpur</a></li>
        <li><a href="packersmoversjaipur.html">Packers &amp; Movers Jaipur</a></li>
        <li><a href="packersmoversjammu.html">Packers &amp; Movers Jammu</a></li>
        <li><a href="packersmoversjamshedpur.html">Packers &amp; Movers Jamshedpur</a></li>
        <li><a href="packersmoversjamnagar.html">Packers &amp; Movers Jamnagar</a></li>
        <li><a href="packersmoversjodhpur.html">Packers &amp; Movers Jodhpur</a></li>
        <li><a href="packersmoverskalighat.html">Packers &amp; Movers Kalighat</a></li>
        <li><a href="packersmoverskanpur.html">Packers &amp; Movers Kanpur</a></li>
        <li><a href="packersmoverskolhapur.html">Packers &amp; Movers Kolhapur</a></li>
        <li><a href="packersmoverskolkata.html">Packers &amp; Movers Kolkata</a></li>
        <li><a href="packersmoverskorba.html">Packers &amp; Movers korba</a></li>
        <li><a href="packersmoverskota.html">Packers &amp; Movers Kota</a></li>
        <li><a href="packersmoverskottayam.html">Packers &amp; Movers Kottayam</a></li>
        <li><a href="packersmoverslucknow.html">Packers &amp; Movers lucknow</a></li>
        <li><a href="packersmoversludhiana.html">Packers &amp; Movers ludhiana</a></li>
        <li><a href="packersmoversmadurai.html">Packers &amp; Movers Madurai</a></li>
        
        <li><a href="packersmoversmanesar.html">Packers &amp; Movers Manesar</a></li>
        <li><a href="packersmoversmangalore.html">Packers &amp; Movers Mangalore</a></li>
        <li><a href="packersmoversmeerut.html">Packers &amp; Movers meerut</a></li>
        <li><a href="packersmoversmumbai.html">Packers &amp; Movers mumbai</a></li>
        <li><a href="packersmoversmysore.html">Packers &amp; Movers Mysore</a></li>
        <li><a href="packersmoversnagpur.html">Packers &amp; Movers Nagpur</a></li>
        <li><a href="packersmoversnasik.html">Packers &amp; Movers Nasik</a></li>
        <li><a href="packersmoversnavimumbai.html">Packers &amp; Movers navimumbai</a>
        </li><li><a href="packersmoversneemrana.html">Packers &amp; Movers neemrana</a>
        </li><li><a href="packersmoversnoida.html">Packers &amp; Movers Noida</a></li>
        <li><a href="packersmoverspanipat.html">Packers &amp; Movers Panipat</a></li>
        <li><a href="packersmoverspatalganga.html">Packers &amp; Movers Patalganga</a></li>
        <li><a href="packersmoverspatna.html">Packers &amp; Movers Patna</a></li>
        <li><a href="packersmoverspondicherry.html">Packers &amp; Movers Pondicherry</a></li>
        <li><a href="packersmoversportblair.html">Packers &amp; Movers Portblair</a></li>
        <li><a href="packersmoverspune.html">Packers &amp; Movers Pune</a></li>
        <li><a href="packersmoversraigarh.html">Packers &amp; Movers raigarh</a></li>
        <li><a href="packersmoversraipur.html">Packers &amp; Movers Raipur</a></li>
        
        <li><a href="packersmoversrajkot.html">Packers &amp; Movers Rajkot</a></li>
        <li><a href="packersmoversranchi.html">Packers &amp; Movers Ranchi</a></li>
        <li><a href="packersmoversrenukoot.html">Packers &amp; Movers Renukoot</a></li>
        <li><a href="packersmoversrourkela.html">Packers &amp; Movers rourkela</a></li>
        <li><a href="packersmoversrudrapur.html">Packers &amp; Movers Rudrapur</a></li>
        <li><a href="packersmoverssecunderabad.html">Packers &amp; Movers secunderabad</a></li>
        <li><a href="packersmoversshillong.html">Packers &amp; Movers shillong </a></li>
        <li><a href="packersmoverssiliguri.html">Packers &amp; Movers siliguri</a></li>
        <li><a href="packersmoverssurat.html">Packers &amp; Movers surat</a></li>
        <li><a href="packersmoverstinsukia.html">Packers &amp; Movers Tinsukia</a></li>
        <li><a href="packersmoverstirupur.html">Packers &amp; Movers Tirupur</a></li>
        <li><a href="packersmoverstrichy.html">Packers &amp; Movers Trichy</a></li>
        <li><a href="packersmoverstrivandrum.html">Packers &amp; Movers Trivandrum</a></li>
        <li><a href="packersmoversudaipur.html">Packers &amp; Movers Udaipur</a></li>
        <li><a href="packersmoversvapi.html">Packers &amp; Movers Vapi</a></li>
        <li><a href="packersmoversvaranasi.html">Packers &amp; Movers Varanasi</a></li>
        <li><a href="packersmoversvijayawada.html">Packers &amp; Movers Vijayawada</a></li>
        <li><a href="packersmoversvisakhapatnam.html">Packers &amp; Movers Visakhapatnam</a></li>
        </ul>
      

    </div>
   </div>
   <div className='page-10 pt-16 pb-16 bg-red-700 flex justify-around'>
    <div className='page-10-left flex gap-x-5'>
          <div className='page-10-left-part-1 ' >
            <h4 className='text-white text-lg font-semibold'>About Us</h4>
            <ul className='text-white text-sm flex flex-col gap-2  border-l border-[#e02727] pl-7'>
              <li>Why APML</li>
              <li>Our History</li>
              <li>Strength</li>
              <li>Our USP</li>
              <li>Achievements</li>
              <li>Our TVC & Videos</li>
              <li>News & Events</li>
              <li>Our Advantages</li>
              <li>Press Release</li>
            </ul>
          </div>
          {/* page-10-left-part-2 */}
          <div className='page-10-left-part-2 ' >
            <h4 className='text-white text-lg font-semibold'>Need Help ?</h4>
            <ul className='text-white text-sm flex flex-col gap-2  border-l border-[#e02727] pl-7'>
              <li>FAQ's</li>
              <li>Consignment<br/> Tracking</li>
              <li>Career</li>
              <li>Expert Advice</li>
              <li>Do's or Don'ts</li>
              <li>Contact Us</li>
              <li>Customer Care</li>
              <li>Moving Tips</li>
              <li>Site Map</li>
              <li>Site Map</li>
              <li>Moving Checklist</li>
            </ul>
          </div>
           {/* page-10-left-part-3 */}
          <div className='page-10-left-part-3 ' >
            <h4 className='text-white text-lg font-semibold'>Services</h4>
            <ul className='text-white text-sm flex flex-col gap-2  border-l border-[#e02727] pl-7'>
              <li>Domestic Moving</li>
              <li>ODC Transportation</li>
              <li>International Moving</li>
              <li>Car Carriers</li>
              <li>Transportation</li>
              <li>IT Relocation</li>
              <li>Air Terminal<br/> Management</li>
              <li>Supply Chain<br/> Management</li>
              <li>Exim Cargo</li>
              <li>Infrastructure</li>
              <li>Record Management</li>
            </ul>
          </div>
           {/* page-10-left-part-5 */}
           <div className='page-10-left-part-5 ' >
            <h4 className='text-white text-lg font-semibold'>Other Links</h4>
            <ul className='text-white text-sm flex flex-col gap-2  border-l border-[#e02727] pl-7'>
              <li>Video Testimonials</li>
              <li>Shifting Process</li>
              <li>CSR</li>
              <li>Customer Feedback</li>
              <li>Safety Features</li>
              <li>Locations</li>
              <li>Investors</li>
              
            </ul>
          </div>
            {/* page-10-left-part-4 */}
            <div className='page-10-left-part-4 ' >
            <h4 className='text-white text-lg font-semibold'>Secure Storage</h4>
            <ul className='text-white text-sm flex flex-col gap-2  border-l border-[#e02727] pl-7'>
              <li>Warehouse</li>
              <li>Home Storage</li>
                          
            </ul>
          </div>
          
    </div>
    <div className='page-10-right'>
      <ul className='text-white  flex flex-col gap-y-2'>
        <li>Moving & storage?Call Us</li>
        <li>+91 9 300 300 300 </li>
        <li className='flex   w-48 text-sm h-8 justify-center items-center gap-4 rounded-lg bg-[#665959]'>corporate Brochure<img className='w-4 h-4' src='https://www.agarwalpackers.com/images/pdf-icon.svg' alt='nothing'/></li>
       </ul>
       <ul className='text-white'>
        <li>We Accept All</li>
        <li><img className='w-[252.5px] h-[24.5px]' src='https://www.agarwalpackers.com/images/apml-icon.svg' alt='nothing'/></li>
      </ul>
    </div>
   
   </div>
   <div className='part-11  bg-red-900 flex justify-between pl-6 pr-6 h-24 items-center text-white text-sm'>
      <ul>
        <li className='  uppercase '>© AGARWAL PACKERS AND MOVERS LTD. All Rights Reserved</li>
      </ul>
      <div className='part-11-part-2 flex gap-10'>
      <ul className='flex gap-3'>
        <li>Terms & Conditions</li>
        <li>|</li>
        <li>Privacy Policy</li>
      </ul>
      <ul className='flex gap-2'>
        <li><img src='https://www.agarwalpackers.com/images/facebook.svg' width={20} height={20}/></li>
        <li><img src='https://www.agarwalpackers.com/images/twitter.svg'  width={20} height={20}/></li>
        <li><img src='https://www.agarwalpackers.com/images/linkedin.svg' width={20} height={20}/></li>
        <li><img src='https://www.agarwalpackers.com/images/instagram.svg' width={20} height={20}/></li>
        <li><img src='https://www.agarwalpackers.com/images/youtube.svg'  width={20} height={20}/></li>
      </ul>
      </div>
    </div>
   </>
  )
}

export default Home_page
