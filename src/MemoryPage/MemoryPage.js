import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import './PagesStyle.css';
import defaultAvatar from './img/avatar.png';


function fillDays() {
    let options = '<option value="" disabled selected>День</option>';
    for (let i = 1; i <= 31; i++) {
        options += `<option className="white" value="${i}">${i}</option>`;
    }
    return options;
}

function fillMonths() {
    let options = '<option value="" disabled selected>Месяц</option>';
    const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    months.forEach((month, index) => {
        options += `<option className="white" value="${index + 1}">${month}</option>`;
    });
    return options;
}

function fillYears() {
    let date = new Date().getFullYear()
    let options = '<option value="" disabled selected>Год</option>';
    for (let i = date; i >= 1900; i--) {
        options += `<option className ="bel" value="${i}">${i}</option>`;
    }
    return options;
}

function MemoryPage() {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });

        // Ваш код обработки формы
        // ...
        // Переход на страницу MemoryPage2
        navigate('/MemoryPage2');
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
        if (name === 'birthYear' && formData.deathYear && value > formData.deathYear) {
            alert('Год рождения не может быть больше года смерти');
        } else if (name === 'deathYear' && formData.birthYear && value < formData.birthYear) {
            alert('Год смерти не может быть меньше года рождения');
        } else {
            setFormData({ ...formData, [name]: value });
            e.target.style.color = value ? '#fff' : '#293038'; // Изменение цвета текста
        }
    };

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0].name);
    };



    const [avatar, setAvatar] = useState(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setAvatar(reader.result);
        };

        reader.readAsDataURL(file);
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
                    <label htmlFor="file-upload" className="custom-file-upload">
                        Загрузить фото
                    </label>
                    {avatar ? (
                        <img src={avatar} alt="avatar" className="avatar"/>
                    ) : (
                        <img src={defaultAvatar} alt="avatar" className="avatar"/>
                    )}
                    <input id="file-upload" type="file" onChange={handleImageUpload}/>
                    {/*<p>{selectedFile}</p>*/}
                </div>


                <label htmlFor="fio" className="fio">ФИО</label>
                <br/>
                <input className="fio" type="text" id="fio" name="fio" placeholder="Иванов Иван Иванович"
                       autoComplete="off" required
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