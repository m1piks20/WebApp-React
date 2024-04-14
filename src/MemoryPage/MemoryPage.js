import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import './PagesStyle.css';
import defaultAvatar from './img/avatar.png';
import {useTranslation} from "react-i18next";


function MemoryPage() {

    const {t, i18n} = useTranslation();

    function FillDays() {

        var options = `<option value="" disabled selected>${t("placeholders.day")}</option>`;

        for (let i = 1; i <= 31; i++) {
            options += `<option className="white" value="${i}">${i}</option>`;
        }
        return options;
    }

    function FillMonths() {

        let options = `<option value="" disabled selected>${t("placeholders.month")}</option>`;
        const months = [
            t("placeholders.jan"),
            t("placeholders.feb"),
            t("placeholders.mar"),
            t("placeholders.apr"),
            t("placeholders.may"),
            t("placeholders.jun"),
            t("placeholders.jul"),
            t("placeholders.aug"),
            t("placeholders.sep"),
            t("placeholders.oct"),
            t("placeholders.nov"),
            t("placeholders.dec")
        ]
        months.forEach((month, index) => {
            options += `<option className="white" value="${index + 1}">${month}</option>`;
        });
        return options;
    }

    function FillYears() {

        let date = new Date().getFullYear()
        let options = `<option value="" disabled selected>${t("placeholders.year")}</option>`;
        for (let i = date; i >= 1724; i--) {
            options += `<option className ="white" value="${i}">${i}</option>`;
        }
        return options;
    }

    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });


        let main_data = {
            fio: formData.fio,
            birthDay: formData.birthDay,
            birthMonth: formData.birthMonth,
            birthDate: new Date(formData.birthYear, Number(formData.birthMonth) - 1, formData.birthDay),
            deathDate: new Date(formData.deathYear, Number(formData.deathMonth) - 1, formData.deathDay),
        }

        localStorage.setItem('main_data', JSON.stringify(main_data));

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
            birthDayOptions: FillDays(),
            birthMonthOptions: FillMonths(),
            birthYearOptions: FillYears(),
            deathDayOptions: FillDays(),
            deathMonthOptions: FillMonths(),
            deathYearOptions: FillYears(),
        }));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'birthYear' && formData.deathYear && value > formData.deathYear) {
            alert('Год рождения не может быть больше года смерти');
        } else if (name === 'deathYear' && formData.birthYear && value < formData.birthYear) {
            alert('Год смерти не может быть меньше года рождения');
            e.target.value = ''; // Сброс значения поля
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
                <h1 className="greeting">{t("header.create_page")}</h1>
            </div>
            <hr style={{ border: '1px solid #3d4754', width: '390px', height: '0px' }} />
            <form onSubmit={handleSubmit} id="dateForm">

                <div className="upload-submit-container">
                    <p className="PhotoPage">{t("req_info.main_photo")}</p>
                    <label htmlFor="file-upload" className="custom-file-upload">
                        {t("req_info.upload_photo")}
                    </label>
                    {avatar ? (
                        <img src={avatar} alt="avatar" className="avatar"/>
                    ) : (
                        <img src={defaultAvatar} alt="avatar" className="avatar"/>
                    )}
                    <input id="file-upload" type="file" onChange={handleImageUpload}/>
                    {/*<p>{selectedFile}</p>*/}
                </div>


                <label htmlFor="fio" className="fio">{t("req_info.fio")}</label>
                <br/>
                <input className="fio" type="text" id="fio" name="fio" placeholder={t("placeholders.fio")}
                       autoComplete="off" required
                       onChange={handleChange} value={formData.fio}/>
                <br/>
                <label htmlFor="birthDay" className="birthDay">{t("req_info.birthDate")}</label>
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
                <label htmlFor="deathDay" className="deathDay">{t("req_info.diedDate")}</label>
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

                    <button type="submit">{t("main.next")}</button>
                </div>
            </form>
            <div id="loadingBox" style={{display: isLoading ? 'block' : 'none'}}></div>
            <div id="loadingScreen" style={{display: isLoading ? 'block' : 'none'}}></div>
        </div>
    );
}

export default MemoryPage;