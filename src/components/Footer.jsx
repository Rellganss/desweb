// Footer.js
import React from "react";
import akses_icon from '../../public/img/accessibility.png';
import coin_icon from '../../public/img/coin.png';
import facebook_icon from '../../public/img/facebook.png';
import instagram_icon from '../../public/img/instagram.png';
import bahasa_icon from '../../public/img/language.png';
import linkedin_icon from '../../public/img/linkedin.png';
import pinterest_icon from '../../public/img/pinterest.png';
import twitter_icon from '../../public/img/twitter.png';


function Footer() {
  return (
    <div className="footer bg-teal-700 text-gray-200 py-10 absolute-bottom w-full  ">
      <div className="container sm:w-full md:w-full lg:w-full xl:w-full sm:mx-[20px] md:mx-[20px] lg:mx-auto xs:mx-[20px] mx-[20px]">
        <div className="top flex flex-wrap justify-between">
          <div className="item mb-6">
            <h2 className="text-lg font-semibold mb-3">Categories</h2>
            <section className="flex-col">
              <ul>
                <li><span>Graphics & Design</span></li>
                <li><span>Digital Marketing</span></li>
                <li><span>Writing & Translation</span></li>
                <li><span>Video & Animation</span></li>
                <li><span>Music & Audio</span></li>
                <li><span>Programming & Tech</span></li>
                <li><span>Data</span></li>
                <li><span>Business</span></li>
                <li><span>Lifestyle</span></li>
                <li><span>Photography</span></li>
                <li><span>Sitemap</span></li>
              </ul>
            </section>
          </div>
          <p className="md:ml-auto  max-w-lg text-justify ">
          "FreeDers adalah platform lowongan freelance yang menghubungkan pekerja freelance dengan proyek-proyek menarik dari berbagai bidang"
          </p>
        </div>
        <div className="border-t my-8  sm:mr-0 md:mr-0 lg:mr-0 xl:mr-0 "/></div>
        <div className=" w-full mx-auto">
  <div className="bottom flex flex-col md:flex-row  justify-between items-center">
    <div className="left flex items-center gap-4 ml-[20px] w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 sm:ml-[20px] md:ml-[40px] lg:ml-[60px] xl:ml-[100px]  ">
      <h2 className="text-xl font-bold">FreeDers</h2>
      <span>© FreeDers International Ltd. 2023</span>
    </div>
    <div className="right flex flex-col sm:flex-row items-center xl:justify-end sm:justify-center gap-3  mt-[5px] w-full sm:w-full xl:mr-[100px] lg:ml-[75px] md:ml-[50px] ">
      <div className="social flex gap-3">
        <img src={twitter_icon} alt="Twitter" />
        <img src={facebook_icon} alt="Facebook" />
        <img src={linkedin_icon} alt="LinkedIn" />
        <img src={pinterest_icon} alt="Pinterest" />
        <img src={instagram_icon} alt="Instagram" />
      </div>
      <div className="link flex items-center gap-3">
        <img src={bahasa_icon} alt="Language" />
        <span>English</span>
      </div>
      <div className="link flex items-center gap-3">
        <img src={coin_icon} alt="Currency" />
        <span>USD</span>
      </div>
      <img src={akses_icon} alt="Accessibility" />
    </div>
  </div>
</div>

        </div>
  );
}

export default Footer;
