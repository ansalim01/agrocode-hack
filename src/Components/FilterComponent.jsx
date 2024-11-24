import React, { useState } from 'react';
import { Button, Form, Select } from 'antd';
import { gender, breed, statusFish } from '../constants';
import 'dayjs/locale/ru';
import ModalComponent from '../Components/ModalComponent';



const FilterComponent = ({ onFilter }) => {
    const [form] = Form.useForm();

    const handleFinish = (values) => {
        onFilter(values);
    };

    return (
        <Form id="filter-component" className='filter-form' layout="inline" form={form} onFinish={handleFinish}>
            <Form.Item name="gender" label="Пол">
                <Select allowClear placeholder="Выберите пол" style={{ minWidth: '150px' }}>
                    {Object.entries(gender).map(([key, value]) => (
                        <Select.Option key={key} value={value}>{value}</Select.Option>
                    ))}
                </Select>
            </Form.Item>
            <Form.Item name="breed" label="Порода">
                <Select allowClear placeholder="Выберите породу" style={{ minWidth: '150px' }}>
                    {Object.entries(breed).map(([key, value]) => (
                        <Select.Option key={key} value={value}>{value}</Select.Option>
                    ))}
                </Select>
            </Form.Item>
            <Form.Item name="status" label="Статус">
                <Select allowClear placeholder="Выберите статус" style={{ minWidth: '150px' }}>
                    {Object.entries(statusFish).map(([key, value]) => (
                        <Select.Option key={key} value={value}>{value}</Select.Option>
                    ))}
                </Select>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">Применить фильтр</Button>
            </Form.Item>
        </Form>
    );
};

export default FilterComponent;
