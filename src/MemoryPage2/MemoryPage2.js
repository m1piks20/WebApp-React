import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import  './PageStyle2.css';



function MemoryPage2() {

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

                <label htmlFor="hobbies" className="hobbies">Место рождения</label>
                <br/>
                <input type="text" id="hobbies" name="hobbies" placeholder="Санкт-Петербург, Россия" autoComplete="off"
                       required onChange={handleChange}
                       value={formData.hobbies}/>

                <br/>

                <label htmlFor="character" className="character">Место смерти</label>
                <br/>
                <input type="text" id="character" name="character" placeholder="Балашиха, Россия" autoComplete="off"
                       required onChange={handleChange}
                       value={formData.character}/>

                <br/>

                <label htmlFor="work" className="work">Род деятельности</label>
                <br/>
                <input type="text" id="work" name="work" placeholder="Актёр,  танцор, хореограф" autoComplete="off"
                       required
                    onChange={handleChange}
                       value={formData.work}/>
                <br/>
                <label htmlFor="work" className="work">Награды, премии и достижения</label>
                <br/>
                <input type="text" id="work" name="work" placeholder="Заслуженный артист деревни Терелесово"
                       autoComplete="off"
                       required
                    onChange={handleChange}
                       value={formData.work}/>

                <br/>

                <label htmlFor="work" className="work">Хобби и увлечения</label>
                <br/>
                <input type="text" id="work" name="work" placeholder="Плавание, игра на гитаре" autoComplete="off"
                       required
                    onChange={handleChange}
                       value={formData.work}/>

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
