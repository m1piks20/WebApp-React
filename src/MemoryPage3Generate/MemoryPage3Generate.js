import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './MemoryPage3Generate.css';


function MemoryPage3Generate() {

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
        navigate('/MemoryBio');
    };

    return (
        <div className="container">
            <div className="header">
                <h1 className="greeting">Добавление новой страницы памяти</h1>
            </div>
            <hr style={{ border: '1px solid #3d4754', width: '390px', height: '0px' }} />

            <br/>

            <form onSubmit={handleSubmit} id="dateForm">

                <label htmlFor="hobbies" className="hobbies">IDK</label>
                <br/>
                <input type="text" id="hobbies" name="hobbies" placeholder="idk" autoComplete="off"
                       required onChange={handleChange}
                       value={formData.hobbies}/>

                <br/>

                <label htmlFor="hobbies" className="hobbies">IDK</label>
                <br/>
                <input type="text" id="hobbies" name="hobbies" placeholder="idk" autoComplete="off"
                       required onChange={handleChange}
                       value={formData.hobbies}/>

                <br/>

                <label htmlFor="hobbies" className="hobbies">IDK</label>
                <br/>
                <input type="text" id="hobbies" name="hobbies" placeholder="idk" autoComplete="off"
                       required onChange={handleChange}
                       value={formData.hobbies}/>

                <br/>

                <label htmlFor="hobbies" className="hobbies">IDK</label>
                <br/>
                <input type="text" id="hobbies" name="hobbies" placeholder="idk" autoComplete="off"
                       required onChange={handleChange}
                       value={formData.hobbies}/>

                <br/>

                <label htmlFor="hobbies" className="hobbies">IDK</label>
                <br/>
                <input type="text" id="hobbies" name="hobbies" placeholder="idk" autoComplete="off"
                       required onChange={handleChange}
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

export default MemoryPage3Generate;
