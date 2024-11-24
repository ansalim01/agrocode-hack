import React, { useState,useEffect } from 'react';
import { DownOutlined, UpOutlined, ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import FishItem from "./FishItem";
// import { products } from '../constants';

const isMobile = window.matchMedia("(max-width: 768px)").matches;

function FishList ({sortedProducts,setSortedProducts, isFilterVisible}) {
    const [sortKey, setSortKey] = useState(null);
    const [sortOrder, setSortOrder] = useState(true);
    // const [sortedProducts, setSortedProducts] = useState(products);
    const [filterHeight, setFilterHeight] = useState(0);

    const handleSort = (key) => {
        const sorted = [...sortedProducts].sort((a, b) => {
            if (typeof a[key] === 'string' || typeof a[key] === 'number') {
                if (sortOrder) {
                    return a[key] > b[key] ? 1 : -1;
                } else {
                    return a[key] < b[key] ? 1 : -1;
                }
            }
            return 0;
        });
        setSortOrder(!sortOrder);
        setSortKey(key);
        setSortedProducts(sorted);
    };

    useEffect(()=>{
        const filterElement = document.getElementById('filter-component');
        const header = document.getElementById('header');
        const mainTop = document.getElementById('main-top');
        // isFilterVisible?'calc(100vh - 190px)':'calc(100vh - 150px)' ,
        setFilterHeight(60+(filterElement?.clientHeight ?? 0) + header.clientHeight + mainTop.clientHeight )

    },[isFilterVisible])

    const getHTable =()=>{
        const filterElement = document.getElementById('filter-component');
        // isFilterVisible?'calc(100vh - 190px)':'calc(100vh - 150px)' ,
        return `calc(100vh - ${filterHeight}px)`
    }

    return ( 
        <div className="fish-list"
            style={{
                height: getHTable(),
            }} 
        >
             {isMobile ? (
                sortedProducts.map((item, index) => (
                    <FishItem key={index} item={item} />
                ))
            ) : <>
                <div className="fish-item fish-item__title">
                    <div className="fish-item__name" onClick={() => handleSort('ID')}>
                            ID {sortKey === 'ID' && (sortOrder ? <ArrowDownOutlined /> : < ArrowUpOutlined />)}
                        </div>
                    <div className="fish-item__name1" onClick={() => handleSort('gender')}>
                        Пол
                        {sortKey === 'gender' && (sortOrder ? <ArrowDownOutlined /> : <ArrowUpOutlined />)}
                    </div>
                    <div className="fish-item__name2" onClick={() => handleSort('birthDate')}>
                        Дата рождения
                        {sortKey === 'birthDate' && (sortOrder ? <ArrowDownOutlined /> : <ArrowUpOutlined />)}
                    </div>
                    <div className="fish-item__name3" onClick={() => handleSort('breed')}>
                        Порода
                        {sortKey === 'breed' && (sortOrder ? <ArrowDownOutlined /> : <ArrowUpOutlined />)}
                    </div>
                    <div className="fish-item__name4" onClick={() => handleSort('status')}>
                        Статус
                        {sortKey === 'status' && (sortOrder ? <ArrowDownOutlined /> : <ArrowUpOutlined />)}
                    </div>
                    <div className="fish-item__name5" onClick={() => handleSort('father')}>
                        Отец
                        {sortKey === 'father' && (sortOrder ? <ArrowDownOutlined /> : <ArrowUpOutlined />)}
                    </div>
                    <div className="fish-item__name6" onClick={() => handleSort('mother')}>
                        Мать
                        {sortKey === 'mother' && (sortOrder ? <ArrowDownOutlined /> : <ArrowUpOutlined />)}
                    </div>
                    <div className="fish-item__name7" onClick={() => handleSort('fatherFather')}>
                        OO
                        {sortKey === 'fatherFather' && (sortOrder ? <ArrowDownOutlined /> : <ArrowUpOutlined />)}
                    </div>
                    <div className="fish-item__name8" onClick={() => handleSort('motherFather')}>
                        МО
                        {sortKey === 'motherFather' && (sortOrder ? <ArrowDownOutlined /> : <ArrowUpOutlined />)}
                    </div>
                    <div className="fish-item__name9" onClick={() => handleSort('fatherMother')}>
                        ОМ
                        {sortKey === 'fatherMother' && (sortOrder ? <ArrowDownOutlined /> : <ArrowUpOutlined />)}
                    </div>
                    <div className="fish-item__name10" onClick={() => handleSort('motherMother')}>
                        ММ
                        {sortKey === 'motherMother' && (sortOrder ? <ArrowDownOutlined /> : <ArrowUpOutlined />)}
                    </div>
                    <div className="fish-item__name11" onClick={() => handleSort('line')}>
                        Линия
                        {sortKey === 'line' && (sortOrder ? <ArrowDownOutlined /> : <ArrowUpOutlined />)}
                    </div>
                    <div className="fish-item__name12" onClick={() => handleSort('weight')}>
                        Вес в кг
                        {sortKey === 'weight' && (sortOrder ? <ArrowDownOutlined /> : <ArrowUpOutlined />)}
                    </div>
                    <div className="fish-item__name13" onClick={() => handleSort('bodyLength')}>
                        Длина тела
                        {sortKey === 'bodyLength' && (sortOrder ? <ArrowDownOutlined /> : <ArrowUpOutlined />)}
                    </div>
                    <div className="fish-item__name14" onClick={() => handleSort('bodyHeight')}>
                        Высота тела
                        {sortKey === 'bodyHeight' && (sortOrder ? <ArrowDownOutlined /> : <ArrowUpOutlined />)}
                    </div>
                    <div className="fish-item__name15" onClick={() => handleSort('bodyThickness')}>
                        Толщина тела
                        {sortKey === 'bodyThickness' && (sortOrder ? <ArrowDownOutlined /> : <ArrowUpOutlined />)}
                    </div>
                    <div className="fish-item__name16" onClick={() => handleSort('heightOfTheCaudalStem')}>
                        Высота хвостового стебля
                        {sortKey === 'heightOfTheCaudalStem' && (sortOrder ? <ArrowDownOutlined /> : <ArrowUpOutlined />)}
                    </div>
                    <div className="fish-item__name17" onClick={() => handleSort('fultonFatnessСoefficient')}>
                        Коэфициент упитанности по Фультону
                        {sortKey === 'fultonFatnessСoefficient' && (sortOrder ? <ArrowDownOutlined /> : <ArrowUpOutlined />)}
                    </div>
                    <div className="fish-item__name18" onClick={() => handleSort('thicknessIndex')}>
                        Индекс толщины
                        {sortKey === 'thicknessIndex' && (sortOrder ? <ArrowDownOutlined /> : <ArrowUpOutlined />)}
                    </div>
                    <div className="fish-item__name19" onClick={() => handleSort('theHeightOrLengthIndex')}>
                        Индекс высоты или прогонистости
                        {sortKey === 'theHeightOrLengthIndex' && (sortOrder ? <ArrowDownOutlined /> : <ArrowUpOutlined />)}
                    </div>
                </div>
                {sortedProducts.map((item, index) => (
                    <FishItem key={index} item={item} />
                ))}
            </>}
        </div>
     );
}

export default FishList;
