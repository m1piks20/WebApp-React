import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './MemoryBio.css';
import {useTranslation} from "react-i18next";


function MemoryBio() {
    const {t, i18n} = useTranslation();

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        introduction: '',
        introductionText: '',
    });

    useEffect(() => {
        setFormData((prevData) => ({
            ...prevData,

        }));
    }, []);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });

        // Ваш код обработки формы
        // ...
        // Переход на страницу MemoryPage3
        navigate('/MemoryBio2');
    };




    return (
        <div className="container">
            <div className="header">
                <h1 className="greeting">{t("header.create_page")}</h1>
            </div>
            <hr style={{ border: '1px solid #3d4754', width: '390px', height: '0px' }} />
            <p id="Bio">{t("bio.tom.fst")}</p>

            <br/>

            <form onSubmit={handleSubmit} id="dateForm">

                <label htmlFor="introduction" className="introduction">{t("bio.header.fst")}</label>
                <br/>
                <input className="introduction" type="text" id="introduction" name="introduction" placeholder={t("bio.header.placeholder.fst")}
                       value={formData.introduction}
                       onChange={handleChange}
                       autoComplete="off"/>

                <br/>

                <label htmlFor="introductionText" className="introductionText">{t("bio.text.fst")}</label>
                <br/>
                <div className="introductionTextContainer">
                    <textarea className="introductionText" type="text" id="introductionText" name="hobbies"
                              placeholder={t("bio.text.placeholder.fst")} autoComplete="off"
                              value={formData.introductionText}
                              onChange={handleChange}
                    />

                    <button className="neuro">
                        <img className="ico" src="https://img.icons8.com/?size=50&id=61864&format=png" alt="Neuro"/>
                    </button>

                </div>


                <br/>
                <br/>

                <div className="upload-submit-container">
                    <button type="submit">{t("main.next")}</button>
                    <button>{t("main.goto_epitaph")}</button>
                </div>

            </form>
        </div>
    );
}

export default MemoryBio;