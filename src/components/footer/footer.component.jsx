import React from "react";

const Footer = () => {
    
    return (
        
        <footer id="aboutus" className="mt-10 bg-red-700 text-yellow-200 text-center py-6 justify-items-center">
        <h2 className="text-xl font-bold">Email Us!</h2>
        <div id="mailarea" className="w-max border border-yellow-200 rounded-xl my-5 mx-20 p-4 text-center">
          <div id="mail" className=" text-yellow-200 mr-4 mb-0 hover:underline inline-flex">
          <img className="w-8 h-8 rounded-full mr-8" src='/images/Email-icon.png' alt="Email Icon" />
            <p>
              <a href="mailto:buns&burger@gmail.com">
                buns&burger@gmail.com
              </a>
            </p>
          </div>
        </div>
        <p className="text-sm">&copy; 2024 Dawood Ayaz. All Rights Reserved.</p>
      </footer>
    )
}

export default Footer;