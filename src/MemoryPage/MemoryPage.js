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
            navigate('/MemoryPage2'); // переходим на страницу AddedEpitaphs
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

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0].name);
    };

    return (
        <div className="container">
            <div className="header">
                <h1 className="greeting">Добавление новой страницы памяти</h1>
            </div>
            <hr style={{ border: '1px solid #3d4754', width: '390px', height: '0px' }} />
            <form onSubmit={handleSubmit} id="dateForm">

                <div className="upload-submit-container">
                    <p className="PhotoPage">Главная фотография страницы</p>

                    {/*<svg  width="99" height="100" viewBox="0 0 99 100" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
                    {/*    <g clip-path="url(#clip0_127_15)">*/}
                    {/*        <path*/}
                    {/*            d="M49.5 98.8889C76.2306 98.8889 97.9 77.0006 97.9 50C97.9 22.9994 76.2306 1.11108 49.5 1.11108C22.7694 1.11108 1.09998 22.9994 1.09998 50C1.09998 77.0006 22.7694 98.8889 49.5 98.8889Z"*/}
                    {/*            fill="#EDEFF4" stroke="#A9B1C2" stroke-width="5"/>*/}
                    {/*        <path*/}
                    {/*            d="M49.5 55.1111C59.5847 55.1111 67.76 46.8533 67.76 36.6667C67.76 26.4801 59.5847 18.2222 49.5 18.2222C39.4153 18.2222 31.24 26.4801 31.24 36.6667C31.24 46.8533 39.4153 55.1111 49.5 55.1111Z"*/}
                    {/*            fill="#A9B1C2"/>*/}
                    {/*        <mask id="mask0_127_15" maskUnits="userSpaceOnUse" x="0" y="0" width="99" height="100">*/}
                    {/*            <path*/}
                    {/*                d="M49.5 100C76.8381 100 99 77.6142 99 50C99 22.3858 76.8381 0 49.5 0C22.1619 0 0 22.3858 0 50C0 77.6142 22.1619 100 49.5 100Z"*/}
                    {/*                fill="#EDEFF4"/>*/}
                    {/*        </mask>*/}
                    {/*        <g mask="url(#mask0_127_15)">*/}
                    {/*        <path*/}
                    {/*                d="M49.5 143.111C71.978 143.111 90.2 124.705 90.2 102C90.2 79.295 71.978 60.8889 49.5 60.8889C27.022 60.8889 8.79999 79.295 8.79999 102C8.79999 124.705 27.022 143.111 49.5 143.111Z"*/}
                    {/*                fill="#A9B1C2"/>*/}
                    {/*        </g>*/}
                    {/*    </g>*/}
                    {/*    <defs>*/}
                    {/*        <clipPath id="clip0_127_15">*/}
                    {/*            <rect width="99" height="100" fill="white"/>*/}
                    {/*        </clipPath>*/}
                    {/*    </defs>*/}
                    {/*</svg>*/}

                </div>

                <label htmlFor="file-upload" className="custom-file-upload">
                    Загрузить фото
                </label>
                <input id="file-upload" type="file" accept="image/*" onChange={handleFileChange}/>
                {/*<p>{selectedFile}</p>*/}
                <br/>
                <br/>
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

                <div className="upload-submit-container">

                    <button type="submit">Далее</button>
                </div>
            </form>
            <div id="loadingBox" style={{display: isLoading ? 'block' : 'none'}}></div>
            <div id="loadingScreen" style={{display: isLoading ? 'block' : 'none'}}></div>
        </div>
    );
}

export default MemoryPage;