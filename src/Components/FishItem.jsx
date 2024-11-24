import React, { useState } from 'react';
import { Card, Button } from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';

const { Meta } = Card;
const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const FishItem = ({item}) => {

        const [expanded, setExpanded] = useState(false);

        // Пример данных, представляющих ключ-значение
        const data = {
            "ID": item.ID,
            "Пол": item.gender,
            "Дата рождения": item.birthDate,
            "Порода": item.breed,
            "Статус": item.status,
            "Линия": item.line,
            "Вес": item.weight,
            "Длина тела": item.bodyLength,
            "Высота тела": item.bodyHeight,
            "Толщина тела": item.bodyThickness,
            "Высота хвостового стебля": item.heightOfTheCaudalStem,
            "Коэффициент упитанности по Фультону": item.fultonFatnessСoefficient,
            "Индекс толщины": item.thicknessIndex,
            "Индекс высоты или прогонистости": item.theHeightOrLengthIndex,
          };
        
        const statusClolor = (gender) => {
            if (gender === 'самец') {
                return 'green'
            }
            if (gender === 'самка') {
                return 'red'
            }
            if (gender === 'не определён') {
                return 'gray'
            }
        }

        // Преобразуем объект в массив для отображения только первых трех пар
        const dataEntries = Object.entries(data);

        if (isMobile) {
            return (
                <Card
                  hoverable
                  style={{ width: '100%' }}
                  actions={[
                    <Button type="link" onClick={() => setExpanded(!expanded)}>
                      {expanded ? <UpOutlined /> : <DownOutlined />} {expanded ? 'Скрыть' : 'Подробнее'}
                    </Button>,
                  ]}
                >
                  <Meta title={item.ID} description={`Порода: ${item.breed}`} />
                  <div style={{ marginTop: 16 }}>
                    {expanded
                      ? dataEntries.map(([key, value], index) => (
                          <div key={index} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                            <strong>{key}:</strong> <span>{value}</span>
                          </div>
                        ))
                      : dataEntries.slice(0, 3).map(([key, value], index) => (
                          <div key={index} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                            <strong>{key}:</strong> <span>{value}</span>
                          </div>
                        ))}
                  </div>
                </Card>
              );
        }

        
        return (
            <div className="fish-item" >
                <div className="fish-item__name"> {item.ID} </div>
                <div className="fish-item__name1"
                style={
                    {color: statusClolor(item.gender)}
                }
                >{item.gender}</div>
                <div className="fish-item__name2">{item.birthDate}</div>
                <div className="fish-item__name3">{item.breed}</div>
                <div className="fish-item__name4">{item.status}</div>
                <div className="fish-item__name5">{item.father}</div>
                <div className="fish-item__name6">{item.mother}</div>
                <div className="fish-item__name7">{item.fatherFather}</div>
                <div className="fish-item__name8">{item.motherFather}</div>
                <div className="fish-item__name9">{item.fatherMother}</div>
                <div className="fish-item__name10">{item.motherMother}</div>

            <div className="fish-item__name11">{item.line}</div>

                <div className="fish-item__name12">{item.weight}</div>
                <div className="fish-item__name13">{item.bodyLength}</div>
                <div className="fish-item__name14">{item.bodyHeight}</div>
                <div className="fish-item__name15">{item.bodyThickness}</div>
                <div className="fish-item__name16">{item.heightOfTheCaudalStem}</div>
                <div className="fish-item__name17">{item.fultonFatnessСoefficient}</div>
                <div className="fish-item__name18">{item.thicknessIndex}</div>
                <div className="fish-item__name19">{item.theHeightOrLengthIndex}</div>
            </div>
        );
        
    }

    export default FishItem;
