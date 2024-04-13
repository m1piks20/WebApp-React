import React, { useState } from 'react';
import './StyleAddedEpitaphs.css';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {useTranslation} from "react-i18next";

function AddedEpitaphs() {
    const {t, i18n} = useTranslation();

    const location = useLocation();
    const navigate = useNavigate();

    const apiResponse = location.state ? location.state.apiResponse : '';
    const [response, setResponse] = useState(apiResponse);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://api.visioncraft.top/v1/chat/completions');
            const result = await response.json();
            setResponse(result.choices[0].message.content);
        } catch (error) {
            console.error('Ошибка:', error);
        }
    };

    return (
        <div className="container">
            <div className="header">
                <h1 className="greeting">{t("header.create_page")}</h1>
            </div>
            <hr style={{ border: "1px solid #3d4754", width: "390px", height: "0px" }} />
            <form id="epitaffioForm" onSubmit={handleSubmit}>
                <label htmlFor="epitaffio" className="epitaffio">{t("main.ep")}</label>
                <br/>
                <div className="introductionTextContainer">
                    <textarea
                        className="epitaffioText"
                        id="epitaffioText"
                        type="text"
                        value={apiResponse}
                        placeholder={t("main.ex_ep")}
                        required
                    />

                    <button className="neuro">
                        <img className="ico" src="https://img.icons8.com/?size=50&id=61864&format=png" alt="Neuro"/>
                    </button>
                </div>
                    <br/>

                    <label htmlFor="fio" className="fio">{t("main.ep_aut")}</label>
                    <br/>
                    <input className="fio" type="text" id="fio" name="fio" placeholder={t("main.ep_aut_txt")}
                           autoComplete="off"
                           required/>

                    <br/>
                    <button type="submit">{t("main.add_page")}</button>
            </form>
        </div>
);
}

export default AddedEpitaphs;