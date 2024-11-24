import React, { useState } from 'react';
import 'antd/dist/reset.css';
import ModalComponent from '../Components/ModalComponent';
import FishList from '../Components/FishList';
import { Button, Card, Typography, Menu, Dropdown, Input, Collapse } from 'antd';
import { products } from '../constants';
import dayjs from 'dayjs';
import { FilterOutlined, DownOutlined, UpOutlined, MenuOutlined, SearchOutlined } from '@ant-design/icons';
import FilterComponent from '../Components/FilterComponent';
import { Link, Route, Routes } from 'react-router-dom';
import * as XLSX from 'xlsx';
import MainMenu from '../Components/MainMenu';
const { Title } = Typography;
const { Panel } = Collapse;


function DataEntry({ loggedInUser, handleLogout }) {
    const [uploadedData, setUploadedData] = useState([]);
const [selectedSection, setSelectedSection] = useState('Справочник пород радужной форели'); // Добавляем выбранный раздел
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
    const downloadExcel = () => {
        const worksheet = XLSX.utils.json_to_sheet(products);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Products");
        XLSX.writeFile(workbook, "products.xlsx");
    };
    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const data = new Uint8Array(event.target.result);
                const workbook = XLSX.read(data, { type: 'array' });
                const worksheet = workbook.Sheets[workbook.SheetNames[0]];
                const jsonData = XLSX.utils.sheet_to_json(worksheet);
                setUploadedData(jsonData);
            };
            reader.readAsArrayBuffer(file);
        }
    };
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
            <div className="content" style={{ marginTop: 20 }}>
                <h2>Ввод данных</h2>
                <Button type="primary" style={{ marginRight: 10 }} onClick={() => downloadExcel()}>
                    Получить XL
                </Button>
                <Button type="default" onClick={() => document.getElementById('fileUploadInput').click()}>
                    Загрузить XL
                </Button>

                <input
                    type="file"
                    accept=".xlsx, .xls"
                    onChange={handleFileUpload}
                    style={{ display: 'none' }}
                    id="fileUploadInput"
                />
                <div style={{ marginTop: 20 }}>
                    <h3>Данные из загруженного файла:</h3>
                    {uploadedData.length > 0 && (
                        <table border="1" style={{ width: '100%', marginTop: 10 }}>
                            <thead>
                                <tr>
                                    {Object.keys(uploadedData[0]).map((key, index) => (
                                        <th key={index}>{key}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {uploadedData.map((row, rowIndex) => (
                                    <tr key={rowIndex}>
                                        {Object.values(row).map((value, cellIndex) => (
                                            <td key={cellIndex}>{value}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    );
}

export default DataEntry;
