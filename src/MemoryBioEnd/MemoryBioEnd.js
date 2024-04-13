import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './MemoryBioEnd.css';




function MemoryBioEnd() {

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
        //navigate('/AddedEpitaphs');
    }


    return (
        <div className="container">
            <div className="header">
                <h1 className="greeting">Добавление новой страницы памяти</h1>
            </div>
            <hr style={{border: '1px solid #3d4754', width: '390px', height: '0px'}}/>
            <p id="Bio">Биография. Заключение</p>

            <br/>

            <form onSubmit={handleSubmit} id="dateForm">

                <label htmlFor="hobbies" className="hobbies">Текст заключения</label>
                <br/>
                <input type="text" id="TextStart" name="hobbies" placeholder="Хз че писать тут..."
                       autoComplete="off"
                       value={formData.hobbies}
                       onChange={handleChange}
                />

                <button className="NeuroEnd">
                    <img className="icoEnd" src="https://img.icons8.com/ios/452/brain.png" alt="Neuro"/>
                </button>

                <br/>


                <div className="upload-submit-container">
                    <button type="submit">Перейти к написанию эпитафии</button>
                </div>

            </form>
        </div>
    );
}

export default MemoryBioEnd;