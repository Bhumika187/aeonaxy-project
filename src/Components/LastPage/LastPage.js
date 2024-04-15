import React from "react";

function LastPage(){
return (
<>
  <div> 
  <div>
  
    <div className="flex justify-start gap-4 text-xs ml-10 mt-4">
    <h1 className="text-pink-700 font-semibold text-xl">dribbble</h1>
        <h6>Inspiration</h6>
        <h6>Find Work</h6>
        <h6>Learn Designs</h6>
        <h6>Go Pro</h6>
        <h6>Hire Designers</h6>
    </div>
    <div className="flex flex-row justify-end mr-10 gap-2">
        <img src="https://cdn-icons-png.flaticon.com/128/5676/5676205.png" alt="searchh-bar" height="5px" width="50px"/>
    <img src="https://cdn-icons-png.flaticon.com/128/2662/2662503.png" height="5px" width="40px" alt="bag"/>
     <button class="btn">Upload</button>
    </div>
  </div>
   <h1 className="flex flex-col justify-center items-center gap-10 mt-5 font-semibold text-xl">Please verify your email...</h1>
   <div className="flex justify-center items-center ml-50">
   <img src="https://cdn-icons-png.flaticon.com/128/15047/15047587.png" alt="email-img"/>
   </div>
   <div className="text-gray-500 text-xs flex flex-col justify-center items-center flex-wrap">
   <p>Please verify your email address. We've sent a confirmation email to:</p>
   <p className="text-black font-bold text-xs mt-2">account@refero.design</p>
   <p className="mt-2">Click the confirmation link in that email to begin using Dribbble.</p>
   <p className="mt-2">Didn't recieve the email? Check your Spam folder,it may have been caught by a filter.If</p>
   <p>you still don't see it, you can <a href="#" className="text-pink-500 hover:text-pink-700">resend the confirmation email</a>.</p>
   <p className="mt-2 mb-10">Wrong email address?  <a href="#" className="text-pink-500 hover:text-pink-700">Change it</a>.</p>
   </div>
   </div>
   <div  className="bg-[#F5F5F5] flex flex-row ">
      <div className="flex flex-col ml-10 mr-40 text-sm flex-wrap">
        <h1 className="text-pink-700 font-semibold ml-5 mt-5 text-xl">dribbble</h1>
      <p className="ml-5 mb-5 mr-5 mt-5">Dribbble is the world's leading<br/> community for creatives to share,grow,<br/>and get hired.</p>
      <div className="flex flex-row justify-center items-centers h-5 w-5 ml-20 gap-3">
       <img src="https://cdn-icons-png.flaticon.com/128/1667/1667182.png" alt="internet"/>
       <img src="https://cdn-icons-png.flaticon.com/128/3128/3128212.png" alt="twitter"/>
       <img src="https://cdn-icons-png.flaticon.com/128/1051/1051309.png" alt="fb"/>
       <img src="https://cdn-icons-png.flaticon.com/128/1384/1384031.png" alt="insta"/>
       <img src="https://cdn-icons-png.flaticon.com/128/2175/2175205.png" alt="pinterest"/>
       </div>
       </div>
       <div className="flex flex-row gap-10 text-sm mt-4 mb-20">
        <p><p className="font-semibold">Go pro! </p><br/> Explore design work<br/> Design blog<br/>Overtime podcat<br/> Playoffs <br/> Weekly Warm-Up<br/>  Refer a Friend <br/> Code of conduct</p>
        <p><p className="font-semibold">Hire designers</p> <br/> Post a job opening<br/>  Post a freelance project<br/>  search for designers<br/>  Brands<br/>  Advertise with us</p>
        <p><p className="font-semibold">Company</p><br/>  About <br/> Careers<br/>  Support <br/> Media Kit<br/>  Testimonials<br/>  API <br/> Terms of service<br/>  Privacy Policy <br/> Cookie Policy</p>
        <div  className="flex flex-col justify-center items-centers">
        <p><p className="font-semibold">Directories</p><br/>  Design jobs<br/>  Designers for hire<br/>  Freelance designers for hire<br/>  Tags<br/>  Places <br/></p>
        <p><p className="font-semibold mb-2"><br/>Design assets</p>  Dribbble Marketplace<br/>  Creative Market <br/> Fontspring <br/> Font Squirrel</p>
        </div>
        <p className="mr-20"><p className="font-semibold">Design Resources</p><br/> Freelancing<br/>  Design Hiring<br/>  Design Portfolio <br/> Design Education<br/>  Creative Process<br/>  Design Industry Trends</p>


       </div>
   </div>
 </>
)
}
export default LastPage;
