import React, { useState } from 'react';
import { Modal, Button, Form, Input, Select, DatePicker } from 'antd';
import { products, gender, breed, statusFish } from '../constants';
import locale from 'antd/es/date-picker/locale/ru_RU';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';

const ModalComponent = ({ handleCancel, onFinish, isModalVisible,form  }) => {
    return (
        <div>
            <Modal
                title="Добавление элемента"
                open={isModalVisible}  // обновлено с `visible` на `open`
                onCancel={handleCancel}
                footer={null}
            >
                <Form
                 form={form}
                    layout="vertical"
                    name="addElementForm"
                    onFinish={onFinish}
                >
                    <Form.Item
                        label="ID"
                        name="ID"
                        rules={[{ required: true, message: 'Пожалуйста, введите ID!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Пол"
                        name="gender"
                        rules={[{ required: true, message: 'Пожалуйста, укажите пол!' }]}
                    >
                        <Select>
                            {Object.entries(gender).map(([key, value]) => (
                                <Select.Option key={key} value={value}>{value}</Select.Option>
                            ))}
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="Дата рождения"
                        name="birthDate"
                        rules={[{ required: true, message: 'Пожалуйста, укажите дату рождения!' }]}
                    >
                        <DatePicker style={{ width: '100%' }} locale={{ locale: 'ru' }} format="DD.MM.YYYY" />
                    </Form.Item>
                    <Form.Item
                        label="Порода"
                        name="breed"
                        rules={[{ required: true, message: 'Пожалуйста, укажите породу!' }]}
                    >
                        <Select>
                            {Object.entries(breed).map(([key, value]) => (
                                <Select.Option key={key} value={value}>{value}</Select.Option>
                            ))}
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="Статус"
                        name="status"
                        rules={[{ required: true, message: 'Пожалуйста, укажите статус!' }]}
                    >
                        <Select>
                            {Object.entries(statusFish).map(([key, value]) => (
                                <Select.Option key={key} value={value}>{value}</Select.Option>
                            ))}
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="Отец"
                        name="father"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Мать"
                        name="mother"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Отец Отца"
                        name="fatherFather"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Мать Отца"
                        name="motherFather"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Отец Матери"
                        name="fatherMother"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Мать Матери"
                        name="motherMother"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Линия"
                        name="line"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Вес в кг"
                        name="weight"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Длина тела"
                        name="bodyLength"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Высота тела"
                        name="bodyHeight"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Толщина тела"
                        name="bodyThickness"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Высота хвостового стебля"
                        name="heightOfTheCaudalStem"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Коэфициент упитанности по Фультону"
                        name="fultonFatnessСoefficient"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Индекс толщины"
                        name="thicknessIndex"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Индекс высоты или прогонистости"
                        name="theHeightOrLengthIndex"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Добавить элемент
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};


export default ModalComponent;
