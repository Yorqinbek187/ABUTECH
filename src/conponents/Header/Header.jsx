import React, { useState, useEffect } from 'react';
import logo from "/asosiy logo.svg"
import os from "/src/assets/osmondagi-bolalar-poster.png"
import os1 from "/src/assets/1.png"
import os2 from "/src/assets/2.png"
import os3 from "/src/assets/3.png"
import os4 from "/src/assets/4.png"
import bo from "/src/assets/bo'yoq.svg"
import a32 from "/src/assets/32000.png"
import html from "/src/assets/html.svg"
import css from "/src/assets/css.svg"
import js from "/src/assets/javascript.svg"
import react from "/src/assets/react.svg"
import ql from "/src/assets/ql.svg"
import node from "/src/assets/nodejs.svg"
import click from "/src/assets/click.png"
import s from "/src/assets/socket.svg"
import bot from "/src/assets/bot.png"
import fig from "/src/assets/figma.svg"
import ph from "/src/assets/pshop.svg"
import xd from "/src/assets/xd.svg"
import bu from "/src/assets/butilka.png"
import "./Header.css"

const Header = () => {
    const targets = [40, 10, 30, 1];
    const [counts, setCounts] = useState([0, 0, 0, 0]);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        if (!isComplete) {
            const steps = targets.map(target => target / 100);

            const timer = setInterval(() => {
                setCounts(prevCounts => {
                    const newCounts = prevCounts.map((count, index) => {
                        if (count < targets[index]) {
                            return Math.min(count + steps[index], targets[index]);
                        }
                        return count;
                    });

                    const allComplete = newCounts.every((count, index) =>
                        count >= targets[index]
                    );

                    if (allComplete) {
                        setIsComplete(true);
                    }

                    return newCounts;
                });
            }, 10);

            return () => clearInterval(timer);
        }
    }, [isComplete]);

    const displayCounts = counts.map(count => Math.round(count));

    const texts = [
        "amalga oshirilgan loyihalar",
        "jamoadagi mutaxassislar",
        "ilgari surilgan korxonalar",
        "Yillik tajribamiz"
    ];
    const [isFlipping, setIsFlipping] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsFlipping(true);

            setTimeout(() => {
                setIsFlipping(false);
            }, 6000);

        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className='header'>
                <div className='container'>
                    <div className='header__container'>
                        <ul className='header__list'>
                            <li className='header__item'>

                                <a href="#">
                                    <img
                                        src={logo}
                                        alt="Logo"
                                        className={`logo-image ${isFlipping ? 'flipping' : ''}`}
                                    />
                                </a>
                            </li>
                            <li className='header__item1'>
                                <a className='header__link' href="tel:+998958871509"><i className="fa-solid fa-phone"></i> +998 95 887 1509</a>
                                <hr className='vertical-hr1' />
                                <select className='sel'>
                                    <option>Uz</option>
                                    <option>Ru</option>
                                </select>
                                <hr className='vertical-hr' />
                                <a href="#contact" className="button1">
                                    <span className="span-mother">
                                        <span>C</span>
                                        <span>o</span>
                                        <span>n</span>
                                        <span>t</span>
                                        <span>a</span>
                                        <span>c</span>
                                        <span>t</span>
                                    </span>

                                    <span className="span-mother2">
                                        <span>C</span>
                                        <span>o</span>
                                        <span>n</span>
                                        <span>t</span>
                                        <span>a</span>
                                        <span>c</span>
                                        <span>t</span>
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='hero'>
                <div className='container'>
                    <div className='hero__container'>
                        <li data-aos="fade-up" className='hero__item'>
                            <h1 className='hero__titlea'>HAR QANDAY SAYTNI <br /> TAYYORLAYMIZ</h1>
                            <p className='hero__text'>
                                Biz shu qadar ideal ishlaymizki, bizni oldimizda <br /> katta-katta kompaniyalar xijolat
                            </p>
                            <button class="custom-btn btn-12"><span>BOSING</span><span>KO'RISH ⫸</span></button>
                        </li>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='counters__section'>
                    <div className='counters__grid'>
                        {displayCounts.map((count, index) => (
                            <div key={index} className='counter__card'>
                                <div className='counter__content'>
                                    <span className='counter__number'>
                                        {count}
                                    </span>
                                    <span className='counter__plus'>
                                        +
                                    </span>
                                </div>
                                <p className='counter__text'>
                                    {texts[index]}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='cards__container'>
                    <p className='cards__text'>Bizning</p>
                    <h1 className='casrds__title'>LOYIHALARIMIZ</h1>
                    <ul className='cards__list'>
                        <img data-aos="fade-up" width={500} src={os} alt="web_sayt" />
                        <li className='cards__item'>
                            <span className='cards__span'>
                                <h1 className='cards__title1'>Osmondagi bolalar</h1>
                                <img className='img1' src={bo} alt="yashil bo'yoq rasmi" />
                                <p className='cards__text'> Biz ko`plab saytlarni dasturlash jarayonida shu va shu kabi ajoyib saytlarni tuzamiz, siz bizning saytlardan foydalanayotganinigizda o`zgacha qulaylikni va yengillikni xis etasiz, o`z biznesingizni internet orqali ham rivojlantiring</p>
                                <span data-aos="fade-up" className='aaas'>
                                    <span className='cards__span_1'>
                                        <p className='cards__text1'>01</p>
                                        <h1 className='cards__title_1'>Web site</h1>
                                    </span>
                                    <span className='cards__span_1'>
                                        <p className='cards__text1'>02</p>
                                        <h1 className='cards__title_1'>Admin panel</h1>
                                    </span>
                                    <span className='cards__span_1'>
                                        <p className='cards__text1'>03</p>
                                        <h1 className='cards__title_1'>Telegram bot </h1>
                                    </span>
                                </span>
                            </span>
                            <button data-aos="fade-up" className='cards__btn'>KO'RISH</button>
                        </li>
                    </ul>
                    <ul className='cards__list'>
                        <li className='cards__item'>
                            <span className='cards__span'>
                                <h1 className='cards__title1'>Rocketman</h1>
                                <img className='img1' src={bo} alt="yashil bo'yoq rasmi" />
                                <p className='cards__text'> Biz ko`plab saytlarni dasturlash jarayonida shu va shu kabi ajoyib saytlarni tuzamiz, siz bizning saytlardan foydalanayotganinigizda o`zgacha qulaylikni va yengillikni xis etasiz, o`z biznesingizni internet orqali ham rivojlantiring</p>
                                <span data-aos="fade-up" className='aaas'>
                                    <span className='cards__span_1'>
                                        <p className='cards__text1'>01</p>
                                        <h1 className='cards__title_1'>Web site</h1>
                                    </span>
                                    <span className='cards__span_1'>
                                        <p className='cards__text1'>02</p>
                                        <h1 className='cards__title_1'>Admin panel</h1>
                                    </span>
                                    <span className='cards__span_1'>
                                        <p className='cards__text1'>03</p>
                                        <h1 className='cards__title_1'>Telegram bot </h1>
                                    </span>
                                </span>
                            </span>
                            <button data-aos="fade-up" className='cards__btn'>KO'RISH</button>
                        </li>
                        <img data-aos="fade-up" width={500} src={os1} alt="web_sayt" />
                    </ul>
                    <ul className='cards__list'>
                        <img data-aos="fade-up" width={500} src={os2} alt="web_sayt" />
                        <li className='cards__item'>
                            <span className='cards__span'>
                                <h1 className='cards__title1'>Matras</h1>
                                <img className='img1' src={bo} alt="yashil bo'yoq rasmi" />
                                <p className='cards__text'> Biz ko`plab saytlarni dasturlash jarayonida shu va shu kabi ajoyib saytlarni tuzamiz, siz bizning saytlardan foydalanayotganinigizda o`zgacha qulaylikni va yengillikni xis etasiz, o`z biznesingizni internet orqali ham rivojlantiring</p>
                                <span data-aos="fade-up" className='aaas'>
                                    <span className='cards__span_1'>
                                        <p className='cards__text1'>01</p>
                                        <h1 className='cards__title_1'>Web site</h1>
                                    </span>
                                    <span className='cards__span_1'>
                                        <p className='cards__text1'>02</p>
                                        <h1 className='cards__title_1'>Admin panel</h1>
                                    </span>
                                    <span className='cards__span_1'>
                                        <p className='cards__text1'>03</p>
                                        <h1 className='cards__title_1'>Telegram bot </h1>
                                    </span>
                                </span>
                            </span>
                            <button data-aos="fade-up" className='cards__btn'>KO'RISH</button>
                        </li>
                    </ul>
                    <ul className='cards__list'>
                        <li className='cards__item'>
                            <span className='cards__span'>
                                <h1 className='cards__title1'>Digital Star</h1>
                                <img className='img1' src={bo} alt="yashil bo'yoq rasmi" />
                                <p className='cards__text'> Biz ko`plab saytlarni dasturlash jarayonida shu va shu kabi ajoyib saytlarni tuzamiz, siz bizning saytlardan foydalanayotganinigizda o`zgacha qulaylikni va yengillikni xis etasiz, o`z biznesingizni internet orqali ham rivojlantiring</p>
                                <span data-aos="fade-up" className='aaas'>
                                    <span className='cards__span_1'>
                                        <p className='cards__text1'>01</p>
                                        <h1 className='cards__title_1'>Web site</h1>
                                    </span>
                                    <span className='cards__span_1'>
                                        <p className='cards__text1'>02</p>
                                        <h1 className='cards__title_1'>Admin panel</h1>
                                    </span>
                                    <span className='cards__span_1'>
                                        <p className='cards__text1'>03</p>
                                        <h1 className='cards__title_1'>Telegram bot </h1>
                                    </span>
                                </span>
                            </span>
                            <button data-aos="fade-up" className='cards__btn'>KO'RISH</button>
                        </li>
                        <img data-aos="fade-up" width={500} src={os3} alt="web_sayt" />
                    </ul>
                    <ul className='cards__list'>
                        <img data-aos="fade-up" width={500} src={os4} alt="web_sayt" />
                        <li className='cards__item'>
                            <span className='cards__span'>
                                <h1 className='cards__title1'>Najot Ta'lim CRM</h1>
                                <img className='img1' src={bo} alt="yashil bo'yoq rasmi" />
                                <p className='cards__text'> Biz ko`plab saytlarni dasturlash jarayonida shu va shu kabi ajoyib saytlarni tuzamiz, siz bizning saytlardan foydalanayotganinigizda o`zgacha qulaylikni va yengillikni xis etasiz, o`z biznesingizni internet orqali ham rivojlantiring</p>
                                <span data-aos="fade-up" className='aaas'>
                                    <span className='cards__span_1'>
                                        <p className='cards__text1'>01</p>
                                        <h1 className='cards__title_1'>Web site</h1>
                                    </span>
                                    <span className='cards__span_1'>
                                        <p className='cards__text1'>02</p>
                                        <h1 className='cards__title_1'>Admin panel</h1>
                                    </span>
                                    <span className='cards__span_1'>
                                        <p className='cards__text1'>03</p>
                                        <h1 className='cards__title_1'>Telegram bot </h1>
                                    </span>
                                </span>
                            </span>
                            <button data-aos="fade-up" className='cards__btn'>KO'RISH</button>
                        </li>
                    </ul>

                </div>
            </div>
            <div className='about'>
                <div className='container'>
                    <div className='about__container'>
                        <ul className='about__list'>
                            <li className='about__item'>
                                <img data-aos="fade-right" className='about__img' src={a32} alt="32 000" />
                            </li>
                            <li className='about__item1'>
                                <h1 className='about__title01'>Veb sayt</h1>
                                <p className='cards__text'>Biz jamoamiz bilan birgalikda veb dasturlash va veb <br /> dizaynerlik xizmatlarini sizga taklif
                                    qilamiz.
                                    Tezkor va sifatli <br /> saytlar, onlayn do`konlar, telegram botlar, kreativ veb sayt <br /> dizaynlari
                                </p>
                                <span data-aos="fade-up" className='aaas'>
                                    <span className='cards__span_1'>
                                        <p className='cards__text1'>01</p>
                                        <h1 className='cards__title_1'>Frontend</h1>
                                    </span>
                                    <span className='cards__span_1'>
                                        <p className='cards__text1'>02</p>
                                        <h1 className='cards__title_1'>Backend</h1>
                                    </span>
                                    <span className='cards__span_1'>
                                        <p className='cards__text1'>03</p>
                                        <h1 className='cards__title_1'>QA Testing</h1>
                                    </span>
                                </span>
                                <h1 data-aos="fade-zoom-in"
                                    data-aos-easing="ease-in-back"
                                    data-aos-delay="300"
                                    data-aos-offset="0" className='about__title'>Texnologiyalar</h1>
                                <span data-aos="fade-up" className='aaas'>
                                    <span className='cards__span_2'>
                                        <img src={html} alt="" />
                                        <h1 className='cards__text'>HTML</h1>
                                    </span>
                                    <span className='cards__span_2'>
                                        <img src={css} alt="" />
                                        <h1 className='cards__text'>CSS</h1>
                                    </span>
                                    <span className='cards__span_2'>
                                        <img src={js} alt="" />
                                        <h1 className='cards__text'>JavaScript</h1>
                                    </span>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='about'>
                <div className='container'>
                    <div className='about__container'>
                        <ul className='about__list'>

                            <li className='about__item1'>
                                <h1 className='about__title01'>Veb dastur</h1>
                                <p className='cards__text'>Biz jamoamiz bilan birgalikda veb dasturlash va veb <br /> dizaynerlik xizmatlarini sizga taklif
                                    qilamiz.
                                    Tezkor va sifatli <br /> saytlar, onlayn do`konlar, telegram botlar, kreativ veb sayt <br /> dizaynlari
                                </p>
                                <span data-aos="fade-up" className='aaas'>
                                    <span className='cards__span_1'>
                                        <p className='cards__text1'>01</p>
                                        <h1 className='cards__title_1'>Frontend</h1>
                                    </span>
                                    <span className='cards__span_1'>
                                        <p className='cards__text1'>02</p>
                                        <h1 className='cards__title_1'>Backend</h1>
                                    </span>
                                    <span className='cards__span_1'>
                                        <p className='cards__text1'>03</p>
                                        <h1 className='cards__title_1'>QA Testing</h1>
                                    </span>
                                </span>
                                <h1 data-aos="fade-zoom-in"
                                    data-aos-easing="ease-in-back"
                                    data-aos-delay="300"
                                    data-aos-offset="0" className='about__title'>Texnologiyalar</h1>
                                <span data-aos="fade-up" className='aaas'>
                                    <span className='cards__span_2'>
                                        <img src={react} alt="" />
                                        <h1 className='cards__text'>React JS</h1>
                                    </span>
                                    <span className='cards__span_2'>
                                        <img src={ql} alt="" />
                                        <h1 className='cards__text'>GraphQL</h1>
                                    </span>
                                    <span className='cards__span_2'>
                                        <img src={node} alt="" />
                                        <h1 className='cards__text'>NodeJS</h1>
                                    </span>
                                </span>
                            </li>
                            <li className='about__item'>
                                <img data-aos="fade-left" className='about__img' src={click} alt="click" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='about'>
                <div className='container'>
                    <div className='about__container'>
                        <ul className='about__list'>
                            <li className='about__item'>
                                <img data-aos="fade-right" className='about__img' src={bot} alt="BOT" />
                            </li>
                            <li className='about__item1'>
                                <h1 className='about__title01'>Telegram BOT</h1>
                                <p className='cards__text'>Biz jamoamiz bilan birgalikda veb dasturlash va veb <br /> dizaynerlik xizmatlarini sizga taklif
                                    qilamiz.
                                    Tezkor va sifatli <br /> saytlar, onlayn do`konlar, telegram botlar, kreativ veb sayt <br /> dizaynlari
                                </p>
                                <span data-aos="fade-up" className='aaas'>
                                    <span className='cards__span_1'>
                                        <p className='cards__text1'>01</p>
                                        <h1 className='cards__title_1'>Frontend</h1>
                                    </span>
                                    <span className='cards__span_1'>
                                        <p className='cards__text1'>02</p>
                                        <h1 className='cards__title_1'>Backend</h1>
                                    </span>
                                    <span className='cards__span_1'>
                                        <p className='cards__text1'>03</p>
                                        <h1 className='cards__title_1'>QA Testing</h1>
                                    </span>
                                </span>
                                <h1 data-aos="fade-zoom-in"
                                    data-aos-easing="ease-in-back"
                                    data-aos-delay="300"
                                    data-aos-offset="0" className='about__title'>Texnologiyalar</h1>
                                <span data-aos="fade-up" className='aaas'>
                                    <span className='cards__span_2'>
                                        <img src={s} alt="" />
                                        <h1 className='cards__text'>socket IO</h1>
                                    </span>
                                    <span className='cards__span_2'>
                                        <img src={ql} alt="" />
                                        <h1 className='cards__text'>GraphQL</h1>
                                    </span>
                                    <span className='cards__span_2'>
                                        <img src={node} alt="" />
                                        <h1 className='cards__text'>Node JS</h1>
                                    </span>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='about'>
                <div className='container'>
                    <div className='about__container'>
                        <ul className='about__list'>

                            <li className='about__item1'>
                                <h1 className='about__title01'>UX/UI dizayn</h1>
                                <p className='cards__text'>Biz jamoamiz bilan birgalikda veb dasturlash va veb <br /> dizaynerlik xizmatlarini sizga taklif
                                    qilamiz.
                                    Tezkor va sifatli <br /> saytlar, onlayn do`konlar, telegram botlar, kreativ veb sayt <br /> dizaynlari
                                </p>
                                <span data-aos="fade-up" className='aaas'>
                                    <span className='cards__span_1'>
                                        <p className='cards__text1'>01</p>
                                        <h1 className='cards__title_1'>Frontend</h1>
                                    </span>
                                    <span className='cards__span_1'>
                                        <p className='cards__text1'>02</p>
                                        <h1 className='cards__title_1'>Backend</h1>
                                    </span>
                                    <span className='cards__span_1'>
                                        <p className='cards__text1'>03</p>
                                        <h1 className='cards__title_1'>QA Testing</h1>
                                    </span>
                                </span>
                                <h1 data-aos="fade-zoom-in"
                                    data-aos-easing="ease-in-back"
                                    data-aos-delay="300"
                                    data-aos-offset="0" className='about__title'>Texnologiyalar</h1>
                                <span data-aos="fade-up" className='aaas'>
                                    <span className='cards__span_2'>
                                        <img src={fig} alt="" />
                                        <h1 className='cards__text'>Figma</h1>
                                    </span>
                                    <span className='cards__span_2'>
                                        <img src={ph} alt="" />
                                        <h1 className='cards__text'>Photoshop</h1>
                                    </span>
                                    <span className='cards__span_2'>
                                        <img src={xd} alt="" />
                                        <h1 className='cards__text'>Adobe XD</h1>
                                    </span>
                                </span>
                            </li>
                            <li className='about__item'>
                                <img data-aos="fade-left" className='about__img' src={bu} alt="but" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header