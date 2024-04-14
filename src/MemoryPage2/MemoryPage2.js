import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import './PageStyle2.css';
import {useTranslation} from "react-i18next";
import axios from "axios";

function MemoryPage2() {
    const {t, i18n} = useTranslation();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        placeBirth: '',
        placeDeath: '',
        typeOfActivity: '',
        awards: '',
        hobbies: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let additionalData = {
            placeBirth: formData.placeBirth,
            placeDeath: formData.placeDeath,
            typeOfActivity: formData.typeOfActivity,
            awards: formData.awards,
            hobbies: formData.hobbies
        }
        localStorage.setItem('additionalData', JSON.stringify(additionalData));
    };

    useEffect(() => {
        let main_data = JSON.parse(localStorage.getItem('main_data'));
        let additionalData = JSON.parse(localStorage.getItem('additionalData'));

        if (main_data && main_data.fio && main_data.birthDate && main_data.deathDate && additionalData.placeBirth && additionalData.placeDeath && additionalData.typeOfActivity && additionalData.awards && additionalData.hobbies) {
            axios.post('http://176.123.162.216:8101/question', {
                langCode: i18n.language,
                fio: main_data.fio,
                dateOfBirth: main_data.birthDate.toISOString().split('T')[0],
                dateOfdied: main_data.deathDate.toISOString().split('T')[0],
                placeOfBirth: additionalData.placeBirth,
                placeOfDied: additionalData.placeDeath,
                work: additionalData.typeOfActivity,
                award: additionalData.awards,
                hobby: additionalData.hobbies
            })
                .then(response => {
                    console.log(response.data);
                    navigate('/MemoryPage3Generate');
                })
                .catch(error => {
                    console.error('Error:', error);
                })
                .finally(() => {
                    console.log('Request sent.');
                });
        } else {
            console.log('Not all data is set');
        }
    }, [formData]);


    return (
        <div className="container">
            <div className="header">
                <h1 className="greeting">{t("header.create_page")}</h1>
            </div>
            <hr style={{border: '1px solid #3d4754', width: '390px', height: '0px'}}/>

            <br/>

            <form onSubmit={handleSubmit} id="dateForm">

                <label htmlFor="placeBirth" className="placeBirth">{t("req_info.placeBirth")}</label>
                <br/>
                <input className="placeBirth" type="text" id="placeBirth" name="placeBirth"
                       placeholder={t("req_info.additional.placeBirth")} autoComplete="off"
                       required onChange={handleChange}
                       value={formData.placeBirth}/>

                <br/>

                <label htmlFor="placeDeath" className="placeDeath">{t("req_info.placeDeath")}</label>
                <br/>
                <input className="placeDeath" type="text" id="placeDeath" name="placeDeath"
                       placeholder={t("req_info.additional.placeDeath")} autoComplete="off"
                       required onChange={handleChange}
                       value={formData.placeDeath}/>

                <br/>

                <label htmlFor="typeOfActivity" className="typeOfActivity">{t("req_info.work")}</label>
                <br/>
                <input className="typeOfActivity" type="text" id="typeOfActivity" name="typeOfActivity"
                       placeholder={t("req_info.additional.work")} autoComplete="off"
                       required
                       onChange={handleChange}
                       value={formData.typeOfActivity}/>
                <br/>
                <label htmlFor="awards" className="awards">{t("req_info.awards")}</label>
                <br/>
                <input className="awards" type="text" id="awards" name="awards"
                       placeholder={t("req_info.additional.awards")}
                       autoComplete="off"
                       required
                       onChange={handleChange}
                       value={formData.awards}/>

                <br/>

                <label htmlFor="hobbies" className="hobbies">{t("req_info.hobbies")}</label>
                <br/>
                <input className="hobbies" type="text" id="hobbies" name="hobbies"
                       placeholder={t("req_info.additional.hobbies")} autoComplete="off"
                       required
                       onChange={handleChange}
                       value={formData.hobbies}/>

                <br/>
                <br/>

                <div className="upload-submit-container">

                    <button type="submit">{t("main.next")}</button>
                </div>

            </form>
        </div>
    );
}

export default MemoryPage2;
