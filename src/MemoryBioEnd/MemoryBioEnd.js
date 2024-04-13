import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './MemoryBioEnd.css';
import {useTranslation} from "react-i18next";



function MemoryBioEnd() {
    const {t, i18n} = useTranslation();

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fio: '',
        birthDay: '',
        birthMonth: '',
        birthYear: '',
        deathDay: '',
        deathMonth: '',
        deathYear: '',
        hobbies: '',
        character: '',
        work: ''
    });

    useEffect(() => {
        setFormData((prevData) => ({
            ...prevData,

        }));
    }, []);


    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };
    // eslint-disable-next-line no-unused-vars
    const handleSubmit = (event) => {
        event.preventDefault();
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });

        // Ваш код обработки формы
        // ...
        // Переход на страницу MemoryPage3
        navigate('/AddedEpitaphs');
    }


    return (
        <div className="container">
            <div className="header">
                <h1 className="greeting">{t("header.create_page")}</h1>
            </div>
            <hr style={{border: '1px solid #3d4754', width: '390px', height: '0px'}}/>
            <p id="Bio">{t("bio.tom.frt")}</p>

            <br/>

            <form onSubmit={handleSubmit} id="dateForm">

                <label htmlFor="hobbies" className="hobbies">{t("bio.text.frt")}</label>
                <br/>
                <div className="introductionTextContainer">
                    <textarea className="introductionText" type="text" id="introductionText" name="hobbies"
                              placeholder={t("bio.text.placeholder.frt")} autoComplete="off"
                              value={formData.introductionText}
                              onChange={handleChange}
                    />

                    <button className="neuro">
                        <img className="ico" src="https://img.icons8.com/?size=50&id=61864&format=png" alt="Neuro"/>
                    </button>

                </div>

                <br/>


                <div className="upload-submit-container">
                    <button type="submit">{t("main.goto_epitaph")}</button>
                </div>

            </form>
        </div>
    );
}

export default MemoryBioEnd;