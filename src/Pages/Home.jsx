import React, { useState } from 'react';
import 'antd/dist/reset.css';
import ModalComponent from '../Components/ModalComponent';
import FishList from '../Components/FishList';
import { Button, Card, Typography, Menu, Dropdown } from 'antd';
import { products } from '../constants';
import dayjs from 'dayjs';
import { FilterOutlined, DownOutlined, UpOutlined, MenuOutlined } from '@ant-design/icons';
import { Link, Route, Routes } from 'react-router-dom';
import FilterComponent from '../Components/FilterComponent';
const { Title, Text } = Typography;

function Home ({ loggedInUser, handleLogout }) {
    const [sortedProducts, setSortedProducts] = useState(products);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isFilterVisible, setIsFilterVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const onFinish = (values) => {
        values.birthDate = dayjs(values.birthDate).locale('ru').format('DD.MM.YYYY');
        console.log('Submitted:', values);
        setSortedProducts([...sortedProducts, values])
        setIsModalVisible(false);
    };

    const handleFilter = (filterValues) => {
        const filteredProducts = products.filter((product) => {
            return (
                (!filterValues.gender || product.gender === filterValues.gender) &&
                (!filterValues.breed || product.breed === filterValues.breed) &&
                (!filterValues.status || product.status === filterValues.status)
            );
        });
        setSortedProducts(filteredProducts);
    };

    const toggleFilterVisibility = () => {
        setIsFilterVisible(!isFilterVisible);
    };
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

            <ModalComponent isModalVisible={isModalVisible} handleCancel={handleCancel} onFinish={onFinish} ></ModalComponent>
            <div className="main-top" id='main-top'>
                <div className="main-top__left">
                    <h2>Таблица</h2>
                    <Button color="primary" variant="solid" onClick={showModal}>
                        Добавить
                    </Button>
                </div>
                <Button color="primary" variant="outlined" onClick={toggleFilterVisibility} icon={<FilterOutlined />}> 
                    Фильтры {isFilterVisible ? <UpOutlined /> : <DownOutlined />}
                </Button>
            </div>
            {isFilterVisible && <FilterComponent onFilter={handleFilter} />}

            <FishList isFilterVisible={isFilterVisible} sortedProducts={sortedProducts} setSortedProducts={setSortedProducts}></FishList>
        </div>
    );
}


export default Home ;