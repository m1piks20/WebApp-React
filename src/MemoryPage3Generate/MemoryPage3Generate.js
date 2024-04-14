import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './MemoryPage3Generate.css';
import {useTranslation} from "react-i18next";


function MemoryPage3Generate() {
    const {t, i18n} = useTranslation();

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        gen1: localStorage.getItem("additionalData"),
        gen2: '',
        gen3: '',
        gen4: '',
        gen5: ''

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
        navigate('/MemoryBio');
    };

    return (
        <div className="container">
            <div className="header">
                <h1 className="greeting">{t("header.create_page")}</h1>
            </div>
            <hr style={{ border: '1px solid #3d4754', width: '390px', height: '0px' }} />

            <br/>

            <form onSubmit={handleSubmit} id="dateForm">

                <label htmlFor="gen1" className="gen">IDK</label>
                <br/>
                <input className="gen" type="text" id="gen1" name="gen1" placeholder={t("gpt.answer")} autoComplete="off"
                       required onChange={handleChange}
                       value={formData.gen1}/>

                <br/>

                <label htmlFor="gen2" className="gen">IDK</label>
                <br/>
                <input className="gen" type="text" id="gen2" name="gen2" placeholder={t("gpt.answer")} autoComplete="off"
                       required onChange={handleChange}
                       value={formData.gen2}/>

                <br/>

                <label htmlFor="gen3" className="gen">IDK</label>
                <br/>
                <input className="gen" type="text" id="gen3" name="gen3" placeholder={t("gpt.answer")} autoComplete="off"
                       required onChange={handleChange}
                       value={formData.gen3}/>

                <br/>

                <label htmlFor="gen4" className="gen">IDK</label>
                <br/>
                <input className="gen" type="text" id="gen4" name="gen4" placeholder={t("gpt.answer")} autoComplete="off"
                       required onChange={handleChange}
                       value={formData.gen4}/>

                <br/>

                <label htmlFor="gen5" className="gen">IDK</label>
                <br/>
                <input className="gen" type="text" id="gen5" name="gen5" placeholder={t("gpt.answer")} autoComplete="off"
                       required onChange={handleChange}
                       value={formData.gen5}/>


                <br/>
                <br/>

                <div className="upload-submit-container">

                    <button type="submit">Далее</button>
                </div>

            </form>
        </div>
    );
}

export default MemoryPage3Generate;
