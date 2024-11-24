import React, { useState } from 'react';
import 'antd/dist/reset.css';
import ModalComponent from '../Components/ModalComponent';
import FishList from '../Components/FishList';
import { Button, Card, Typography, Menu, Dropdown, Input } from 'antd';
import { products } from '../constants';
import dayjs from 'dayjs';
import { FilterOutlined, DownOutlined, UpOutlined, MenuOutlined, SearchOutlined } from '@ant-design/icons';
import FilterComponent from '../Components/FilterComponent';
import { Link, Route, Routes } from 'react-router-dom';
const { Title, Text } = Typography;

function Guide({ loggedInUser, handleLogout }) {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    const breeds = [
        "Адлер",
        "Адлерская янтарная",
        "Джампер",
        "Дональдсона",
        "Золотистая",
        "Камлоопс",
        "Росталь",
        "Рофор",
        "Стальноголовый лосось"
    ];

    const filteredBreeds = breeds.filter(breed => breed.toLowerCase().includes(searchTerm));
    const menuItems = [
        {
            key: '1',
            label: <Link to="/guide">Справочник</Link>,
        },
        {
            key: '2',
            label: <Link to="/home">HOME</Link>,
        },
    ];

    const menu = (
        <Menu items={menuItems} />
    );

    return (
        <div className="wrapper">
            <div className="header" id='header'>
                <div className="">
                    <Dropdown overlay={menu} trigger={['click']}>
                        <Button type="text" icon={<MenuOutlined />}>
                            Меню
                        </Button>
                    </Dropdown>
                </div>
                <div className="header__right">
                    <Title level={3}> {loggedInUser.username}</Title>
                    <Button type="primary" onClick={handleLogout}>
                    Выйти
                    </Button>
                </div>
            </div>

            <div className="content">
            <div className="content">
                <h2>Справочник</h2>
                <Input
                    placeholder="Поиск слова (например, 'Порода')"
                    prefix={<SearchOutlined />}
                    value={searchTerm}
                    onChange={handleSearch}
                    style={{ marginBottom: 20, width: '50%' }}
                />
                <div>
                    <h3>Справочник пород радужной форели:</h3>
                    <ul>
                        {filteredBreeds.map((breed, index) => (
                            <li key={index}>{breed}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3>Порода Дональдсона</h3>
                    <p>
                        Эта порода была выведена на базе Колледжа рыбного хозяйства Вашингтонского университета селекционерами Дональдсоном и Ольсоном в результате почти 40-летней работы. Исходной формой для селекции послужили особи гибридного происхождения от скрещивания радужной форели и стельноголового лосося. Цель состояла в получении рано созревающих, быстро растущих, устойчивых к болезням рыб с высокой продукцией икры. Благодаря успешной селекции порода получила широкое распространение в рыбоводных хозяйствах всего мира.
                    </p>
                    <h3>Инструкция</h3>
                    <p>
                        Порода радужной форели это группа особей одомашенной формы радужной форели, искусственно созданная человеком и характеризующаяся: определёнными наследственными особенностями; наследственно закреплённой продуктивностью; внешним видом. Представлена и утверждена официальным стандартом компетентной организации.
                    </p>
                </div>
            </div>
            </div>

        </div>
    );
}
export default Guide;
