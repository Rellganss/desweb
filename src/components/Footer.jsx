// Footer.js
import React from "react";

function Footer() {
  return (
    <div className="footer bg-gray-100 text-gray-600 py-10">
      <div className="container mx-auto">
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
          <p className="md:ml-auto max-w-lg text-justify">
          "Selamat datang di situs kami, tempat yang penuh dengan kreativitas dan inspirasi! Kami adalah platform freebies yang menyediakan beragam konten gratis untuk membantu Anda memajukan proyek kreatif Anda. Mulai dari desain grafis, template, hingga sumber daya digital lainnya, kami berkomitmen untuk memfasilitasi perjalanan kreatif Anda tanpa biaya tambahan. Jelajahi koleksi kami, temukan inspirasi baru, dan tingkatkan kualitas karya Anda dengan sumber daya gratis yang kami sediakan. Bergabunglah dengan komunitas kami dan rasakan kebebasan berekspresi di dunia kreatif!"
          </p>
        </div>
        <hr className="border-t my-8" />
        <div className="bottom flex justify-between items-center">
          <div className="left flex items-center gap-4">
            <h2 className="text-xl font-bold">FreeDers</h2>
            <span>© FreeDers International Ltd. 2023</span>
          </div>
          <div className="right flex items-center gap-6">
            <div className="social flex gap-4">
              <img src="./img/twitter.png" alt="Twitter" />
              <img src="./img/facebook.png" alt="Facebook" />
              <img src="./img/linkedin.png" alt="LinkedIn" />
              <img src="./img/pinterest.png" alt="Pinterest" />
              <img src="./img/instagram.png" alt="Instagram" />
            </div>
            <div className="link flex items-center gap-2">
              <img src="./img/language.png" alt="Language" />
              <span>English</span>
            </div>
            <div className="link flex items-center gap-2">
              <img src="./img/coin.png" alt="Currency" />
              <span>USD</span>
            </div>
            <img src="./img/accessibility.png" alt="Accessibility" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
