import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './MemoryBio2.css';




function MemoryBio2() {

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
        navigate('/MemoryBio3');
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

                    <label htmlFor="hobbies" className="hobbies">Заголовок 2 части</label>
                    <br/>
                    <input type="text" id="hobbies" name="hobbies" placeholder="Давным-давно на полянке..."
                           value={formData.hobbies}
                           onChange={handleChange}
                           autoComplete="off"/>

                    <br/>

                    <label htmlFor="hobbies" className="hobbies">Текст 2 части</label>
                    <br/>
                    <input type="text" id="TextStart" name="hobbies" placeholder="Хз че писать тут..."
                           autoComplete="off"
                           value={formData.hobbies}
                           onChange={handleChange}
                    />

                    <button className="Neuro">
                        <img className="ico" src="https://img.icons8.com/ios/452/brain.png" alt="Neuro"/>
                    </button>

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