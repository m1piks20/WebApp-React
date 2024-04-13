import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './MemoryBio2.css';




function MemoryBio2() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        headerBio2: '',

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
        //navigate('/MemoryBio3');
    }


        return (
            <div className="container">
                <div className="header">
                    <h1 className="greeting">Добавление новой страницы памяти</h1>
                </div>
                <hr style={{border: '1px solid #3d4754', width: '390px', height: '0px'}}/>
                <p id="Bio">Биография. Часть 2</p>

                <br/>

                <form onSubmit={handleSubmit} id="dateForm">

                    <label htmlFor="headerBio2" className="headerBio2">Заголовок 2 части</label>
                    <br/>
                    <input className="headerBio2" type="text" id="headerBio2" name="headerBio2" placeholder="Давным-давно на полянке..."
                           value={formData.headerBio2}
                           onChange={handleChange}
                           autoComplete="off"/>

                    <br/>

                    <label htmlFor="introductionText" className="introductionText">Текст 2 часть</label>
                    <br/>
                    <div className="introductionTextContainer">
                    <textarea className="introductionText" type="text" id="introductionText" name="hobbies"
                              placeholder="Не знаю че писать тут..." autoComplete="off"
                              value={formData.introductionText}
                              onChange={handleChange}
                    />

                        <button className="neuro">
                            <img className="ico" src="https://img.icons8.com/ios/452/brain.png" alt="Neuro"/>
                        </button>

                    </div>

                    <br/>
                    <br/>

                    <div className="upload-submit-container">
                        <button type="submit">Далее</button>

                        <button>Перейти к написанию эпитафии</button>
                    </div>

                </form>
            </div>
        );
    }

export default MemoryBio2;
