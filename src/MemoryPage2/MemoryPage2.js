import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import  './PageStyle2.css';



function MemoryPage2() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        placeBirth: '',
        placeDeath: '',
        typeOfActivity: '',
        awards: '',
        hobbies: ''
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
        navigate('/MemoryPage3Generate');
    };

    return (
        <div className="container">
            <div className="header">
                <h1 className="greeting">Добавление новой страницы памяти</h1>
            </div>
            <hr style={{ border: '1px solid #3d4754', width: '390px', height: '0px' }} />

            <br/>

            <form onSubmit={handleSubmit} id="dateForm">

                <label htmlFor="placeBirth" className="placeBirth">Место рождения</label>
                <br/>
                <input className="placeBirth" type="text" id="placeBirth" name="placeBirth"
                       placeholder="Санкт-Петербург, Россия" autoComplete="off"
                       required onChange={handleChange}
                       value={formData.placeBirth}/>

                <br/>

                <label htmlFor="placeDeath" className="placeDeath">Место смерти</label>
                <br/>
                <input className="placeDeath" type="text" id="placeDeath" name="placeDeath"
                       placeholder="Балашиха, Россия" autoComplete="off"
                       required onChange={handleChange}
                       value={formData.placeDeath}/>

                <br/>

                <label htmlFor="typeOfActivity" className="typeOfActivity">Род деятельности</label>
                <br/>
                <input className="typeOfActivity" type="text" id="typeOfActivity" name="typeOfActivity"
                       placeholder="Актёр,  танцор, хореограф" autoComplete="off"
                       required
                       onChange={handleChange}
                       value={formData.typeOfActivity}/>
                <br/>
                <label htmlFor="awards" className="awards">Награды, премии и достижения</label>
                <br/>
                <input className="awards" type="text" id="awards" name="awards"
                       placeholder="Заслуженный артист деревни Терелесово"
                       autoComplete="off"
                       required
                       onChange={handleChange}
                       value={formData.awards}/>

                <br/>

                <label htmlFor="hobbies" className="hobbies">Хобби и увлечения</label>
                <br/>
                <input className="hobbies" type="text" id="hobbies" name="hobbies"
                       placeholder="Плавание, игра на гитаре" autoComplete="off"
                       required
                       onChange={handleChange}
                       value={formData.hobbies}/>

                <br/>
                <br/>

                <div className="upload-submit-container">

                    <button type="submit">Далее</button>
                </div>

            </form>
        </div>
    );
}

export default MemoryPage2;
