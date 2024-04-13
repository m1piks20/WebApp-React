import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './MemoryBio3.css';




function MemoryBio3() {

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
        navigate('/MemoryBioEnd');
    }


    return (
        <div className="container">
            <div className="header">
                <h1 className="greeting">Добавление новой страницы памяти</h1>
            </div>
            <hr style={{border: '1px solid #3d4754', width: '390px', height: '0px'}}/>
            <p id="Bio">Биография. Часть 3</p>

            <br/>

            <form onSubmit={handleSubmit} id="dateForm">

                <label htmlFor="headerBio3" className="headerBio3">Заголовок 3 части</label>
                <br/>
                <input className="headerBio3" type="text" id="headerBio3" name="headerBio3" placeholder="Давным-давно на полянке..."
                       value={formData.hobbies}
                       onChange={handleChange}
                       autoComplete="off"/>

                <br/>

                <label htmlFor="hobbies" className="hobbies">Текст 3 части</label>
                <br/>
                <div className="introductionTextContainer">
                    <textarea className="introductionText" type="text" id="introductionText" name="hobbies"
                              placeholder="Хз че писать тут..." autoComplete="off"
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
                    <button type="submit">Далее</button>

                    <button>Перейти к написанию эпитафии</button>
                </div>

            </form>
        </div>
    );
}

export default MemoryBio3;