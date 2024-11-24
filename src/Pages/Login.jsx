import React, { useState } from 'react';
import { Form, Input, Button, Typography, Card } from 'antd';
import 'antd/dist/reset.css';

const { Title, Text } = Typography;

const Login = ({ handleLogin, handleRegister, isRegistered, setIsRegistered, username, setUsername, password, setPassword }) => {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f2f5' }}>
        <Card style={{ width: 400, padding: 20 }}>
          <Title level={3} style={{ textAlign: 'center' }}>{isRegistered ? 'Вход' : 'Регистрация'}</Title>
          <Form
            layout="vertical"
            onFinish={isRegistered ? handleLogin : handleRegister}
          >
            <Form.Item
              label="Имя пользователя"
              rules={[{ required: true, message: 'Пожалуйста, введите ваше имя пользователя!' }]}
            >
              <Input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              label="Пароль"
              rules={[{ required: true, message: 'Пожалуйста, введите ваш пароль!' }]}
            >
              <Input.Password
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                {isRegistered ? 'Войти' : 'Зарегистрироваться'}
              </Button>
            </Form.Item>
          </Form>
          <div style={{ textAlign: 'center' }}>
            {isRegistered ? (
              <Text>
                Нет аккаунта?{' '}
                <span
                  style={{ color: '#1890ff', cursor: 'pointer' }}
                  onClick={() => setIsRegistered(false)}
                >
                  Зарегистрироваться
                </span>
              </Text>
            ) : (
              <Text>
                Уже есть аккаунт?{' '}
                <span
                  style={{ color: '#1890ff', cursor: 'pointer' }}
                  onClick={() => setIsRegistered(true)}
                >
                  Войти
                </span>
              </Text>
            )}
          </div>
        </Card>
      </div>
    );
  };
export default Login ;