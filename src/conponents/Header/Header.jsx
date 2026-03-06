import React, { useState, useEffect } from 'react';
import logo from "/asosiy logo.svg"
import os from "/src/assets/osmondagi-bolalar-poster.png"
import os1 from "/src/assets/1.png"
import os2 from "/src/assets/2.png"
import os3 from "/src/assets/3.png"
import os4 from "/src/assets/4.png"
import bo from "/src/assets/bo'yoq.svg"
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

    return (
        <>
            <div className='header'>
                <div className='container'>
                    <div className='header__container'>
                        <ul className='header__list'>
                            <li className='header__item'>
                                <img src={logo} alt="" />
                            </li>
                            <li className='header__item1'>
                                <a className='header__link' href="tel:+998901234567"><i className="fa-solid fa-phone"></i> +998 90 123 45 67</a>
                                <hr className='vertical-hr1' />
                                <select className='sel'>
                                    <option>Uz</option>
                                    <option>Ru</option>
                                </select>
                                <hr className='vertical-hr' />
                                <button className='button'>
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
                                </button>
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
                            <button className='cards__btn'>KO'RISH</button>
                        </li>
                    </ul>
                    <ul className='cards__list'>
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
                            <button className='cards__btn'>KO'RISH</button>
                        </li>
                        <img data-aos="fade-up" width={500} src={os1} alt="web_sayt" />
                    </ul>
                    <ul className='cards__list'>
                        <img data-aos="fade-up" width={500} src={os2} alt="web_sayt" />
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
                            <button className='cards__btn'>KO'RISH</button>
                        </li>
                    </ul>
                    <ul className='cards__list'>
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
                            <button className='cards__btn'>KO'RISH</button>
                        </li>
                        <img data-aos="fade-up" width={500} src={os3} alt="web_sayt" />
                    </ul>
                    <ul className='cards__list'>
                        <img data-aos="fade-up" width={500} src={os4} alt="web_sayt" />
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
                            <button className='cards__btn'>KO'RISH</button>
                        </li>
                    </ul>

                </div>
            </div>
        </>
    )
}

export default Header