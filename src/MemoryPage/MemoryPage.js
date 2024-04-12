import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import './PagesStyle.css';

function fillOptions(fillFunction) {
    return fillFunction();
}

function fillDays() {
    let options = '<option value="" disabled selected>День</option>';
    for (let i = 1; i <= 31; i++) {
        options += `<option class="white" value="${i}">${i}</option>`;
    }
    return options;
}

function fillMonths() {
    let options = '<option value="" disabled selected>Месяц</option>';
    const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    months.forEach((month, index) => {
        options += `<option class="white" value="${index + 1}">${month}</option>`;
    });
    return options;
}

function fillYears() {
    let date = new Date().getFullYear()
    let options = '<option value="" disabled selected>Год</option>';
    for (let i = date; i >= 1900; i--) {
        options += `<option class="white" value="${i}">${i}</option>`;
    }
    return options;
}

function MemoryPage() {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true); // начинаем загрузку
        try {
            let data = {
                "model": "gpt-3.5-turbo",
                "messages": [
                    {"role": "system", "content": "Вы писатель и пишете эпитафию об умершем человеке. Я даю вам исходные данные. Проанализируйте их и напишите текст"},
                    {"role": "user", "content": `Имя человека - ${formData.fio}. Он родился ${formData.birthDayOptions} и умер ${formData.deathDayOptions}. Ему нравились такие хобби, как ${formData.hobbies}. По характеру был ${formData.character}. Он работал ${formData.work}.`},
                    {"role": "system", "content": "Напишите эпитафию о человеке, используя полученные данные"}
                ],
                "max_tokens": 4096,
                "temperature": 0.7,
                "top_p": 0.9,
                "top_k": 0,
                "repetition_penalty": 1,
                "presence_penalty": 0,
                "frequency_penalty": 0,

            }

            const response = await fetch('https://api.visioncraft.top/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer 54bdfe91-eb76-47c0-a156-6fc9dd2f7db2'
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();
            localStorage.setItem('epitaffioText', result.choices[0].message.content);
            setIsLoading(false); // заканчиваем загрузку
            navigate('/AddedEpitaphs', { state: { apiResponse: result.choices[0].message.content } }); // переходим на страницу AddedEpitaphs
        } catch (error) {
            setIsLoading(false); // в случае ошибки также заканчиваем загрузку
            console.error('Ошибка:', error);
        }
    };

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
            birthDayOptions: fillDays(),
            birthMonthOptions: fillMonths(),
            birthYearOptions: fillYears(),
            deathDayOptions: fillDays(),
            deathMonthOptions: fillMonths(),
            deathYearOptions: fillYears(),
        }));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };



    return (
        <div className="container">
            <div className="header">
                <h1 className="greeting">Добавление новой страницы памяти</h1>
            </div>
            <hr style={{ border: '1px solid #3d4754', width: '390px', height: '0px' }} />
            <form onSubmit={handleSubmit} id="dateForm">
                <label htmlFor="fio" className="fio">ФИО</label>
                <br/>
                <input type="text" id="fio" name="fio" placeholder="Иванов Иван Иванович" autoComplete="off" required
                       onChange={handleChange} value={formData.fio}/>
                <br/>
                <label htmlFor="birthDay" className="birthDay">Дата рождения</label>
                <br/>
                <select id="birthDay" name="birthDay" required className="days" autoComplete="off"
                        dangerouslySetInnerHTML={{__html: formData.birthDayOptions}} onChange={handleChange}>
                </select>
                <select id="birthMonth" name="birthMonth" required className="month" autoComplete="off"
                        dangerouslySetInnerHTML={{__html: formData.birthMonthOptions}} onChange={handleChange}>
                </select>
                <select id="birthYear" name="birthYear" required className="year" autoComplete="off"
                        dangerouslySetInnerHTML={{__html: formData.birthYearOptions}} onChange={handleChange}>
                </select>
                <br/>
                <br/>
                <label htmlFor="deathDay" className="deathDay">Дата смерти</label>
                <br/>
                <select id="deathDay" name="deathDay" required className="days" autoComplete="off"
                        dangerouslySetInnerHTML={{__html: formData.deathDayOptions}} onChange={handleChange}>
                </select>
                <select id="deathMonth" name="deathMonth" required className="month" autoComplete="off"
                        dangerouslySetInnerHTML={{__html: formData.deathMonthOptions}} onChange={handleChange}>
                </select>
                <select id="deathYear" name="deathYear" required className="year" autoComplete="off"
                        dangerouslySetInnerHTML={{__html: formData.deathYearOptions}} onChange={handleChange}>
                </select>
                <br/>
                <br/>
                <label htmlFor="hobbies" className="hobbies">Увлечения</label>
                <br/>
                <input type="text" id="hobbies" name="hobbies" placeholder="Плаванье, игра на гитаре" autoComplete="off"
                       required onChange={handleChange} value={formData.hobbies}/>
                <br/>
                <label htmlFor="character" className="character">Характер</label>
                <br/>
                <input type="text" id="character" name="character" placeholder="Флегматик, холерик" autoComplete="off"
                       required onChange={handleChange} value={formData.character}/>
                <br/>
                <label htmlFor="work" className="work">Место работы</label>
                <br/>
                <input type="text" id="work" name="work" placeholder="Завод, офис, зал" autoComplete="off" required
                       onChange={handleChange} value={formData.work}/>
                <br/>
                <button type="submit">Далее</button>
            </form>
            <div id="loadingBox" style={{display: isLoading ? 'block' : 'none'}}></div>
            <div id="loadingScreen" style={{display: isLoading ? 'block' : 'none'}}></div>
        </div>
    );
}

export default MemoryPage;