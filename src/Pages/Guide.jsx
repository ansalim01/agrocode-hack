import React, { useState,useEffect } from 'react';
import 'antd/dist/reset.css';
import ModalComponent from '../Components/ModalComponent';
import FishList from '../Components/FishList';
import { Button, Card, Typography, Menu, Dropdown, Input, Collapse } from 'antd';
import { products } from '../constants';
import dayjs from 'dayjs';
import { FilterOutlined, DownOutlined, UpOutlined, MenuOutlined, SearchOutlined } from '@ant-design/icons';
import FilterComponent from '../Components/FilterComponent';
import { Link, Route, Routes } from 'react-router-dom';
import MainMenu from '../Components/MainMenu';
const { Title, Text } = Typography;
const { Panel } = Collapse;

function Guide({ loggedInUser, handleLogout }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [filterHeight, setFilterHeight] = useState(0);
    const [selectedSection, setSelectedSection] = useState('Справочник пород радужной форели'); // Добавляем выбранный раздел
    const handleSearch = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    const breeds = [
        {
            name: "Адлер",
            description: "Порода Адлер была выведена с целью создания устойчивой к болезням и быстро растущей рыбы. Селекционеры на протяжении десятилетий работали над улучшением этой породы, добиваясь высокой продуктивности и отличной выживаемости. Адлер является одной из самых популярных пород среди рыбоводов благодаря своим высоким показателям роста и устойчивости."
        },
        {
            name: "Адлерская янтарная",
            description: "Адлерская янтарная - уникальная порода, которая характеризуется своим ярким янтарным окрасом и высокой устойчивостью к изменению окружающей среды. Эта порода была специально выведена для повышения визуальной привлекательности рыбы, а также для улучшения показателей роста и качества мяса."
        },
        {
            name: "Джампер",
            description: "Порода Джампер получила свое название благодаря уникальной способности рыбы делать резкие прыжки из воды. Селекционеры разработали эту породу с целью улучшения физической активности и здоровья рыбы, что способствует ее быстрому росту и высокой продуктивности."
        },
        {
            name: "Дональдсона",
            description: "Эта порода была выведена на базе Колледжа рыбного хозяйства Вашингтонского университета селекционерами Дональдсоном и Ольсоном в результате почти 40-летней работы. Исходной формой для селекции послужили особи гибридного происхождения от скрещивания радужной форели и стельноголового лосося. Цель состояла в получении рано созревающих, быстро растущих, устойчивых к болезням рыб с высокой продукцией икры. Благодаря успешной селекции порода получила широкое распространение в рыбоводных хозяйствах всего мира."
        },
        {
            name: "Золотистая",
            description: "Золотистая порода была выведена с целью создания рыбы с улучшенными показателями роста и устойчивости к болезням. Она отличается характерным золотистым окрасом, что делает её востребованной как для промыслового рыболовства, так и для декоративного разведения."
        },
        {
            name: "Камлоопс",
            description: "Порода Камлоопс была выведена в Канаде и названа в честь одноименного региона. Она характеризуется высокой продуктивностью, устойчивостью к холодным температурам и отличной выживаемостью в условиях интенсивного рыбоводства."
        },
        {
            name: "Росталь",
            description: "Росталь - это порода, которая была разработана для повышения качества мяса и продуктивности рыбы. Селекционеры уделили особое внимание улучшению вкусовых характеристик и уменьшению содержания жира, что делает эту породу популярной среди производителей высококачественной рыбы."
        },
        {
            name: "Рофор",
            description: "Порода Рофор была создана для получения рыбы, способной адаптироваться к различным условиям окружающей среды. Её гибкость и высокая адаптивность делают эту породу одной из самых универсальных для разведения в различных условиях."
        },
        {
            name: "Стальноголовый лосось",
            description: "Стальноголовый лосось - это порода, получившая своё название благодаря характерному металлическому оттенку чешуи. Она отличается высоким уровнем выживаемости и устойчивости к болезням, что делает её особенно ценной для промышленного разведения и повышения объёмов производства."
        }
    ];
    const filteredBreeds = breeds.filter(breed => breed.name.toLowerCase().includes(searchTerm));

    const menuItems = [
        {
            key: '2',
            label: <Link to="/home">Маточное стадо</Link>,
        },
        {
            key: '1',
            label: <Link to="/guide">Справочник</Link>,
        },
        {
            key: '3',
            label: <Link to="/data-entry">Ввод данных</Link>,
        },
    ];

    const menu = (
        <Menu items={menuItems} />
    );

    useEffect(()=>{
        const header = document.getElementById('header');
        // const mainTop = document.getElementById('main-top');
        // // isFilterVisible?'calc(100vh - 190px)':'calc(100vh - 150px)' ,
        setFilterHeight( 40 + header.clientHeight )

    },[])

    const getHTable =()=>{
        // isFilterVisible?'calc(100vh - 190px)':'calc(100vh - 150px)' ,
        return `calc(100vh - ${filterHeight}px)`
    }

    return (
        <div className="wrapper">
            <div className="header" id='header'>
                
            <MainMenu setSelectedSection={setSelectedSection} />
                <div className="header__right">
                    <Title level={3}> {loggedInUser.username}</Title>
                    <Button type="primary" onClick={handleLogout}>
                    Выйти
                    </Button>
                </div>
            </div>

            <div className="content" style={{ overflowY: 'auto', maxHeight: getHTable() }}>
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
                    <Collapse accordion>
                        {filteredBreeds.map((breed, index) => (
                            <Panel header={breed.name} key={index}>
                                <p>{breed.description}</p>
                            </Panel>
                        ))}
                    </Collapse>
                </div>
                <div>
                    <h3>Инструкция</h3>
                    <p>
                        Порода радужной форели это группа особей одомашенной формы радужной форели, искусственно созданная человеком и характеризующаяся: определёнными наследственными особенностями; наследственно закреплённой продуктивностью; внешним видом. Представлена и утверждена официальным стандартом компетентной организации.
                    </p>
                </div>
            </div>
        </div>
    );
}
export default Guide;
