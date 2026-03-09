import { useState } from "react";
import "./Footer.css";
import r1 from "./imgs/1.jpg";
import r2 from "./imgs/2.jpg";
import r3 from "./imgs/3.jpg";
import r4 from "./imgs/4.jpg";
import r5 from "./imgs/5.jpg";
import r6 from "./imgs/6.jpg";
import r7 from "./imgs/7.jpg";
import r8 from "./imgs/8.jpg";
import r9 from "./imgs/9.jpg";
import r11 from "./imgs/11.jpg";
import qi from "./imgs/qid.svg"
import uc from "./imgs/uch.svg"
import la from "./imgs/lam.svg"
import ku from "./imgs/ku.svg"
import pti from "./imgs/pti.svg"
import nas from "./imgs/nas.svg"
import naj from "./imgs/naaaa.svg"
import os from "./imgs/abs.svg"
import aso from "./imgs/abutech.png"

const teamMembers = [
  {
    id: 1,
    img: r1,
    name: "Abdullatifxon Anvarxonov",
    text: "Frontend dasturchi",
    social: {
      instagram: "https://instagram.com/alisher",
      telegram: "https://t.me/alisher",
      twitter: "https://twitter.com/alisher"
    }
  },
  {
    id: 2,
    img: r2,
    name: "Bobur Mavlonov",
    text: "UX/UI dizayner",
    social: {
      instagram: "https://instagram.com/malika",
      telegram: "https://t.me/malika",
      twitter: "https://twitter.com/malika"
    }
  },
  {
    id: 3,
    img: r3,
    name: "Farrukh Abbosov",
    text: "Sotuv menejeri",
    social: {
      instagram: "https://instagram.com/jahongir",
      telegram: "https://t.me/jahongir",
      twitter: "https://twitter.com/jahongir"
    }
  },
  {
    id: 4,
    img: r4,
    name: "Shuhratbek Qobulov",
    text: "Frontend dasturchi",
    social: {
      instagram: "https://instagram.com/zilola",
      telegram: "https://t.me/zilola",
      twitter: "https://twitter.com/zilola"
    }
  },
  {
    id: 5,
    img: r5,
    name: "Muhammadsiddiq Kuvandikov",
    text: "DevOps",
    social: {
      instagram: "https://instagram.com/bobur",
      telegram: "https://t.me/bobur",
      twitter: "https://twitter.com/bobur"
    }
  },
  {
    id: 6,
    img: r6,
    name: "Usmon Ma'sudjonov",
    text: "Backend dasturchi",
    social: {
      instagram: "https://instagram.com/nargiza",
      telegram: "https://t.me/nargiza",
      twitter: "https://twitter.com/nargiza"
    }
  },
  {
    id: 7,
    img: r7,
    name: "Ilhom Shamidinov",
    text: "Frontend dasturchi",
    social: {
      instagram: "https://instagram.com/sherzod",
      telegram: "https://t.me/sherzod",
      twitter: "https://twitter.com/sherzod"
    }
  },
  {
    id: 8,
    img: r8,
    name: "Rosul Ismoiliy",
    text: "Backend dasturchi",
    social: {
      instagram: "https://instagram.com/dildora",
      telegram: "https://t.me/dildora",
      twitter: "https://twitter.com/dildora"
    }
  },
  {
    id: 9,
    img: r9,
    name: "Odil Nizomov",
    text: "Frontend dasturchi",
    social: {
      instagram: "https://instagram.com/rustam",
      telegram: "https://t.me/rustam",
      twitter: "https://twitter.com/rustam"
    }
  },
  {
    id: 10,
    img: r11,
    name: "Akbarjon Tojiyev",
    text: "Jamoa lideri",
    social: {
      instagram: "https://instagram.com/gulnora",
      telegram: "https://t.me/gulnora",
      twitter: "https://twitter.com/gulnora"
    }
  }
];


const Footer = () => {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !phone.trim()) {
      alert("Iltimos barcha majburiy maydonlarni to'ldiring!");
      return;
    }

    alert("Xabaringiz yuborildi! ✅");

    setName("");
    setPhone("");
    setMessage("");
  };

  return (
    <>
      <footer className="footer1">
        <div className="container">
          <h2 className="footer1__title">Bizning Jamoa</h2>
          <div className="footer__grid">
            {teamMembers.map(member => (
              <div key={member.id} className="team__card">
                <div className="team__image">
                  <img src={member.img} alt={member.name} />
                </div>
                <h3 className="team__name">{member.name}</h3>
                <p className="team__text">{member.text}</p>

                <hr className="team__divider" />

                <div className="team__social">
                  <a href={member.social.instagram} target="_blank" rel="noopener noreferrer" className="social__link instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href={member.social.telegram} target="_blank" rel="noopener noreferrer" className="social__link telegram">
                    <i className="fab fa-telegram"></i>
                  </a>
                  <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="social__link twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </footer>
      <div className='king'>
        <div className='footer2'>
          <div className='container'>
            <p className='footer2__text'>ISH</p>
            <h1 className='footer2__title1'>Tartibi</h1>
            <div className='footer2__container'>

              <ul className='footer2__list'>
                <li className='footer2__item'>
                  <span className='footer2__span'>
                    <img className='fff' src={qi} alt="" />
                    <h1 className='footer2__title'>Mijozning ehtiyojlarini <br /> aniqlash</h1>
                  </span>
                  <span className='footer2__span'>
                    <img className='fff' src={uc} alt="" />
                    <h1 className='footer2__title'>Loyiha dizayni</h1>
                  </span>
                  <span className='footer2__span'>
                    <img className='fff' src={la} alt="" />
                    <h1 className='footer2__title'>Jamoani tanlash</h1>
                  </span>
                </li>
              </ul>
              <ul className='footer2__list'>
                <li className='footer2__item'>
                  <span className='footer2__span'>
                    <img className='fff' src={ku} alt="" />
                    <h1 className='footer2__title'>Uzoq muddatlik <br /> hamkorlik</h1>
                  </span>
                  <span className='footer2__span'>
                    <img className='fff' src={pti} alt="" />
                    <h1 className='footer2__title'>Sifatni tahlil <br /> qilish</h1>
                  </span>
                  <span className='footer2__span'>
                    <img className='fff' src={nas} alt="" />
                    <h1 className='footer2__title'>Loyihani amalga <br /> oshirish</h1>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='section'>
        <div className='container'>
          <div className='section__container'>
            <p className='section__text1'>BIZNING</p>
            <h1 className='section__title1'>
              HAMKORLAR
            </h1>
            <ul className='section__list'>
              <a href="https://najottalim.uz/?srsltid=AfmBOoqEiR7bja4_Ok1hZ-EKiyOkuSZISPpR16d3T5ZLoy-sOxPQ1dT4">
                <li className='section__item'>
                  <img className='section__img' src={naj} alt="Hamkor:NAJOT TA'LIM" />
                </li>
              </a>
              <a href="https://open.spotify.com/show/5ru4pk3fQjK65UQE0lw3yP">
                <li className='section__item'>
                  <img className='section__img' src={os} alt="Hamkor:OSMONDAGI BOLALAR" />
                </li>
              </a>
              <a href="https://najottalim.uz/?srsltid=AfmBOoqEiR7bja4_Ok1hZ-EKiyOkuSZISPpR16d3T5ZLoy-sOxPQ1dT4">
                <li className='section__item'>
                  <img className='section__img' src={naj} alt="Hamkor:NAJOT TA'LIM" />
                </li>
              </a>
              <a href="https://open.spotify.com/show/5ru4pk3fQjK65UQE0lw3yP">
                <li className='section__item'>
                  <img className='section__img' src={os} alt="Hamkor:OSMONDAGI BOLALAR" />
                </li>
              </a>
            </ul>
            <ul className='section__list'>
              <a href="https://najottalim.uz/?srsltid=AfmBOoqEiR7bja4_Ok1hZ-EKiyOkuSZISPpR16d3T5ZLoy-sOxPQ1dT4">
                <li className='section__item'>
                  <img className='section__img' src={naj} alt="Hamkor:NAJOT TA'LIM" />
                </li>
              </a>
              <a href="https://open.spotify.com/show/5ru4pk3fQjK65UQE0lw3yP">
                <li className='section__item'>
                  <img className='section__img' src={os} alt="Hamkor:OSMONDAGI BOLALAR" />
                </li>
              </a>
              <a href="https://najottalim.uz/?srsltid=AfmBOoqEiR7bja4_Ok1hZ-EKiyOkuSZISPpR16d3T5ZLoy-sOxPQ1dT4">
                <li className='section__item'>
                  <img className='section__img' src={naj} alt="Hamkor:NAJOT TA'LIM" />
                </li>
              </a>
              <a href="https://open.spotify.com/show/5ru4pk3fQjK65UQE0lw3yP">
                <li className='section__item'>
                  <img className='section__img' src={os} alt="Hamkor:OSMONDAGI BOLALAR" />
                </li>
              </a>
            </ul>
            <button className="buttonnn type1"></button>
          </div>
        </div>
      </div>
      <div id="contact" className="contact">
        <div className="container">
          <div className="contact__wrapper">

            <div className="contact__left">
              <p className="contact__subtitle">
                YANGI YOKI MAVJUD LOYIHANGIZ BORMI?
              </p>

              <h1 className="contact__title">
                G'OYALARINGIZNI <br />
                BIZ BILAN <br />
                <span>AMALGA <br /> OSHIRING!</span>
              </h1>
            </div>

            <div className="contact__right">
              <form className="contact__form" onSubmit={handleSubmit}>

                <div className="contact__row">
                  <input
                    type="text"
                    placeholder="Ismingiz"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />

                  <input
                    type="tel"
                    placeholder="+998 __ ___ __ __"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <textarea
                  placeholder="Loyiha haqida ko'proq ma'lumot bering (ixtiyoriy)"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>

                <button type="submit">YUBORISH</button>

              </form>
            </div>

          </div>
        </div>
      </div>
      <div className="footer">
        <div className="container">

          {/* SOCIAL ICONS */}
          <div className="footer__socials">
            <a href="#" className="footer__social"><i className="fab fa-telegram-plane"></i></a>
            <a href="#" className="footer__social"><i className="fab fa-instagram"></i></a>
            <a href="#" className="footer__social"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" className="footer__social"><i className="fab fa-twitter"></i></a>
            <a href="#" className="footer__social"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="footer__social"><i className="fas fa-globe"></i></a>
          </div>

          {/* FOOTER CONTENT */}
          <div className="footer__container">
            <ul className="footer__list">

              <li className="footer__item footer__brand">
                <div className="footer__logo">
                  <a href="#">
                    <img src={aso} alt="logo" />
                  </a>
                  <p className="footer__subtitle">software development</p>
                </div>

                <p className="footer__copyright">
                  © 2020-2021. Все сервисы защищены
                </p>
              </li>

              <li className="footer__item">
                <h3 className="footer__heading">Our office</h3>

                <a href="https://www.google.com/maps/place//@41.3205326,69.2388149,156m/data=!3m1!1e3!4m6!1m5!3m4!2zNDHCsDE5JzE0LjAiTiA2OcKwMTQnMjEuMCJF!8m2!3d41.320543!4d69.239152?entry=ttu&g_ep=EgoyMDI2MDMwNC4xIKXMDSoASAFQAw%3D%3D">
                  <p className="footer__text">
                    Улица Себзора, <br /> Площадь Хадра <br />
                    Ташкент, Узбекистан
                  </p>
                </a>
              </li>

              <li className="footer__item">
                <h3 className="footer__heading">Телефонный номер</h3>
                <a href="tel:+998958871509">
                  <p className="footer__text">+994 95 887 1509</p>
                </a>
              </li>

              <li className="footer__item">
                <h3 className="footer__heading">E-mail</h3>
                <a href="https://chatgpt.com/">
                  <p className="footer__text">yorqinbek1008@gmail.com</p>
                </a>
              </li>

            </ul>
          </div>

        </div>
      </div>
    </>
  );
};

export default Footer;