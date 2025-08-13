import React from "react";
import Header from '../../components/header/header.component';

const AboutPage = () => {
    return(
        <>
        <Header />
        <section className="my-56 md:my-40 flex-col flex md:flex-row items-center">
            <img src='/images/Buns&Burgers.webp' className="ml-4 w-80 mt-10 md:mt-0 h-48 md:w-screen md:h-56 rounded-md" alt="Buns and Burgers" />
            <div id="aboutUs" className="text-base justify-center items-center text-center text-[#a71515] ml-8 mr-8 mt-10 md:mt-0">
                Welcome to Buns and Burgers: Where Every Bite is a Delight! 
                <br />
                At Buns and Burgers, we believe that a great burger starts with the freshest ingredients and a passion for perfection. 
                Our buns are baked fresh daily, and our burgers are crafted with care, using only the highest quality meats and vegetables. 
                Whether you're in the mood for a classic cheeseburger or something a little more adventurous, we've got something to satisfy every craving.    
            </div>
        </section>
        </>
    )
}

export default AboutPage;