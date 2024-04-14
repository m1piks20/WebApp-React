import React, { useEffect, useState } from 'react';
import './Main.css'; // Подключаем CSS стили
import { Link } from 'react-router-dom';
import {useTranslation} from "react-i18next";
import axios from 'axios';

function Main() {
    const {t, i18n} = useTranslation();


    const [username, setUsername] = useState('');
    const [user_id, setUserID] = useState('');

    useEffect(() => {
        updateUsername(); // Вызываем функцию обновления имени пользователя при загрузке компонента
    }, []);

    const getGreeting = () => {
        const hour = new Date().getHours();
        if (hour >= 4 && hour < 12) {
            return t("greetings.morn");
        } else if (hour >= 12 && hour < 18) {
            return t("greetings.day");
        } else if (hour >= 18 && hour < 22) {
            return t("greetings.even");
        } else {
            return t("greetings.night");
        }
    };

    // useEffect(() => {
    //     let user = window.Telegram?.WebApp?.initDataUnsafe?.user;
    //     if (user) {
    //         setUserID(user.id);
    //     }
    //
    //     const fetchUserId = async () => {
    //         try {
    //             const response = await axios.get(`https://7c82-178-162-3-38.ngrok-free.app/user/get/${user_id}`);
    //                 i18n.changeLanguage(response.data.lang_code);
    //         } catch (error) {
    //             console.error('Ошибка при получении информации о пользователе:', error);
    //         }
    //     };

    const updateUsername = () => {
        const user = window.Telegram?.WebApp?.initDataUnsafe?.user;
        if (user) {
            setUsername(`${user.first_name} ${user.last_name}`);

            i18n.changeLanguage('en');
        }
    };



    return (
            <div className="container">
                <div className="header">
                    <div className="logo">
                        {/* Вот здесь вставляем SVG логотип */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="157"
                            height="40"
                            viewBox="0 0 124 32"
                            fill=""
                        >
                            <path
                                d="M38.589 16.996H36.691V21H35.417V11.9H36.691V15.852H38.615L41.475 11.9H42.866L39.616 16.307L43.022 21H41.54L38.589 16.996ZM47.1741 21.104C46.2554 21.104 45.4278 20.9047 44.6911 20.506C43.9544 20.0987 43.3738 19.5397 42.9491 18.829C42.5331 18.1183 42.3251 17.3253 42.3251 16.45C42.3251 15.5747 42.5331 14.7817 42.9491 14.071C43.3738 13.3603 43.9544 12.8057 44.6911 12.407C45.4278 11.9997 46.2554 11.796 47.1741 11.796C48.0841 11.796 48.9074 11.9997 49.6441 12.407C50.3808 12.8057 50.9571 13.3603 51.3731 14.071C51.7891 14.773 51.9971 15.566 51.9971 16.45C51.9971 17.334 51.7891 18.1313 51.3731 18.842C50.9571 19.544 50.3808 20.0987 49.6441 20.506C48.9074 20.9047 48.0841 21.104 47.1741 21.104ZM47.1741 19.947C47.8414 19.947 48.4394 19.7953 48.9681 19.492C49.5054 19.1887 49.9258 18.7727 50.2291 18.244C50.5411 17.7067 50.6971 17.1087 50.6971 16.45C50.6971 15.7913 50.5411 15.1977 50.2291 14.669C49.9258 14.1317 49.5054 13.7113 48.9681 13.408C48.4394 13.1047 47.8414 12.953 47.1741 12.953C46.5068 12.953 45.9001 13.1047 45.3541 13.408C44.8168 13.7113 44.3921 14.1317 44.0801 14.669C43.7768 15.1977 43.6251 15.7913 43.6251 16.45C43.6251 17.1087 43.7768 17.7067 44.0801 18.244C44.3921 18.7727 44.8168 19.1887 45.3541 19.492C45.9001 19.7953 46.5068 19.947 47.1741 19.947ZM61.2657 19.869V22.989H60.0567V21H52.5687L52.5557 22.989H51.3467L51.3597 19.869H51.8017C52.3737 19.8343 52.7767 19.3837 53.0107 18.517C53.2447 17.6417 53.3877 16.411 53.4397 14.825L53.5307 11.9H59.9267V19.869H61.2657ZM54.5837 14.942C54.5404 16.2247 54.4364 17.2863 54.2717 18.127C54.1157 18.9677 53.8601 19.5483 53.5047 19.869H58.6397V13.031H54.6487L54.5837 14.942ZM71.8732 11.9V21H70.5992V13.031H65.3212V21H64.0342V11.9H71.8732ZM79.3759 18.725H74.5399L73.5389 21H72.1999L76.3209 11.9H77.6079L81.7419 21H80.3769L79.3759 18.725ZM78.9209 17.685L76.9579 13.226L74.9949 17.685H78.9209ZM90.4995 21L90.4865 14.37L87.1975 19.895H86.5995L83.3105 14.409V21H82.0625V11.9H83.1285L86.9245 18.296L90.6685 11.9H91.7345L91.7475 21H90.4995ZM99.9991 11.9V21H98.7251V18.348H96.2161C96.0601 18.348 95.9431 18.3437 95.8651 18.335L94.0451 21H92.6671L94.6821 18.114C94.0321 17.8973 93.5338 17.5377 93.1871 17.035C92.8404 16.5237 92.6671 15.904 92.6671 15.176C92.6671 14.1447 92.9964 13.343 93.6551 12.771C94.3224 12.1903 95.2194 11.9 96.3461 11.9H99.9991ZM93.9801 15.163C93.9801 15.839 94.1751 16.359 94.5651 16.723C94.9638 17.0783 95.5488 17.256 96.3201 17.256H98.7251V13.031H96.3981C95.6181 13.031 95.0201 13.213 94.6041 13.577C94.1881 13.941 93.9801 14.4697 93.9801 15.163ZM107.842 13.031H104.722V21H103.448V13.031H100.341V11.9H107.842V13.031ZM108.172 11.9H109.459V18.92L114.841 11.9H116.037V21H114.763V13.993L109.368 21H108.172V11.9Z"
                                fill="#ffffff"/>
                            <path
                                d="M19.7557 5.49123H23.004V2.24282H19.7557V0H16.5077H13.2595H12.0067H10.0115L9.61259 0.00849471V0.0226567C5.10085 0.297168 3.89984 3.03985 3.30348 5.07431C-0.397058 17.7099 0.0285667 17.2086 0.00408928 17.3086H2.08022V21.3277C2.08022 21.9603 2.26046 25.116 5.81838 25.116C9.46289 25.116 9.60773 30.7143 9.61259 31.3507V31.4427H10.0115H11.6355H11.9466H13.2597H16.5079V28.1945H13.2597V24.9801H16.5079V28.1945H19.7559V24.9801H23.0041V21.7319H19.7559V24.9463H16.5079V22.1915V21.7321H19.7559V18.4839H16.5079V15.2355H13.2597V11.987H16.5079V15.2355H19.7559V11.987H23.0041V8.73904H19.7559V5.49123H19.7557Z"
                                fill="#ffffff"/>
                            <path d="M26.2521 5.49121H23.0039V8.73942H26.2521V5.49121Z" fill="#ffffff"/>
                        </svg>
                    </div>
                    <p id='username' className="username">{`${getGreeting()}, ${username}`}</p>
                </div>

                <hr className="hr-style"/>

                <div className="main">
                    <p className="text">{t("main.no_pages")}</p>
                    <Link to="/MemoryPage" className="btn-create">{t("main.create_page")}</Link>
                </div>

                <div className="footer">
                    with ❤️ from @m1piks, @belyashik2k and @Alex1234129
                </div>
            </div>

    );
}

export default Main;
