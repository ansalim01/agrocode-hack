import React, { useState } from 'react';
import 'antd/dist/reset.css';
import ModalComponent from '../Components/ModalComponent';
import FishList from '../Components/FishList';
import { Button, Card, Typography, Menu, Form, Dropdown } from 'antd';
import { products } from '../constants';
import dayjs from 'dayjs';
import { FilterOutlined, DownOutlined, UpOutlined, MenuOutlined } from '@ant-design/icons';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import FilterComponent from '../Components/FilterComponent';

const { Title, Text } = Typography;

function Home({ loggedInUser, handleLogout }) {
    const [sortedProducts, setSortedProducts] = useState(products);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isFilterVisible, setIsFilterVisible] = useState(false);
    const [form] = Form.useForm();
    const [selectedSection, setSelectedSection] = useState('Племенное ядро'); // Default section
    const navigate = useNavigate();

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        form.resetFields();
    };

    const onFinish = (values) => {
        values.birthDate = dayjs(values.birthDate).locale('ru').format('DD.MM.YYYY');
        console.log('Submitted:', values);
        setSortedProducts([...sortedProducts, values]);
        setIsModalVisible(false);
        form.resetFields();
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

    const handleMenuClick = ({ key }) => {
        let sectionName = 'Племенное ядро';
        switch (key) {
            case '2-1':
                sectionName = 'Племенное ядро';
                break;
            case '2-2':
                sectionName = 'Резерв';
                break;
            case '2-3':
                sectionName = 'Товарное';
                break;
            default:
                sectionName = 'Племенное ядро';
        }
        setSelectedSection(sectionName);
        navigate('/home'); // Navigate to the corresponding section
    };

    const menuItems = [
        {
            key: '2',
            label: 'Маточное стадо',
            children: [
                {
                    key: '2-1',
                    label: <div onClick={() => handleMenuClick({ key: '2-1' })}>Племенное ядро</div>,
                },
                {
                    key: '2-2',
                    label: <div onClick={() => handleMenuClick({ key: '2-2' })}>Резерв</div>,
                },
                {
                    key: '2-3',
                    label: <div onClick={() => handleMenuClick({ key: '2-3' })}>Товарное</div>,
                },
            ],
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
                    <Title level={3}>{loggedInUser.username}</Title>
                    <Button type="primary" onClick={handleLogout}>
                        Выйти
                    </Button>
                </div>
            </div>

            <div className="main-top" id='main-top'>
                <div className="main-top__left">
                    <h2>{selectedSection}</h2> {/* Заголовок, который меняется в зависимости от выбранного раздела */}
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

            <ModalComponent form={form} isModalVisible={isModalVisible} handleCancel={handleCancel} onFinish={onFinish} />
        </div>
    );
}

export default Home;
