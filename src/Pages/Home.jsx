import React, { useState } from 'react';
import 'antd/dist/reset.css';
import ModalComponent from '../Components/ModalComponent';
import FishList from '../Components/FishList';
import { Button, Typography, Form } from 'antd';
import { products } from '../constants';
import dayjs from 'dayjs';
import { FilterOutlined, DownOutlined, UpOutlined } from '@ant-design/icons';
import FilterComponent from '../Components/FilterComponent';
import MainMenu from '../Components/MainMenu';

const { Title } = Typography;

function Home({ loggedInUser, handleLogout }) {
    const [sortedProducts, setSortedProducts] = useState(products);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isFilterVisible, setIsFilterVisible] = useState(false);
    const [selectedSection, setSelectedSection] = useState('Племенное ядро'); // Default section
    const [form] = Form.useForm();

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

    return (
        <div className="wrapper">
            <div className="header" id='header'>
                <MainMenu setSelectedSection={setSelectedSection} />
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
