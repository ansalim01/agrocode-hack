// src/Components/MainMenu.jsx

import React from 'react';
import { Menu, Dropdown, Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { MenuOutlined } from '@ant-design/icons';

const MainMenu = ({ setSelectedSection }) => {
    const navigate = useNavigate();

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
        navigate('/home');
    };

    const menuItems = [
        {
            key: '2',
            label: 'Маточное стадо',
            children: [
                {
                    key: '2-1',
                    label: 'Племенное ядро',
                    onClick: () => handleMenuClick({ key: '2-1' })
                },
                {
                    key: '2-2',
                    label: 'Резерв',
                    onClick: () => handleMenuClick({ key: '2-2' })
                },
                {
                    key: '2-3',
                    label: 'Товарное',
                    onClick: () => handleMenuClick({ key: '2-3' })
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
        <Dropdown overlay={menu} trigger={['click']}>
            <Button type="text" icon={<MenuOutlined />}>
                Меню
            </Button>
        </Dropdown>
    );
};

export default MainMenu;
