import { Avatar, Button, Descriptions, Form } from 'antd';
import React, { useEffect, useState } from 'react';
import { Post } from './Post';
import { UserOutlined } from '@ant-design/icons'
import { useActions } from '../../hooks/useActions';
import moment from 'moment';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import TextArea from 'rc-textarea';
const Profile: React.FC = () => {
    const {getProfile} = useActions();
    const {posts} = useTypedSelector(x=>x.profile)
    const {user} = useTypedSelector(x=>x.profile);
    const {isLoading}= useTypedSelector(x=>x.auth);
    const [text,setText]=useState('');
    useEffect(() => {
        getProfile();
    }, []);
    const submit=()=>{

    }
    return (
        <div>
            <Avatar size={64} icon={<UserOutlined />} />
            <Descriptions title="User Info" layout="vertical">
                <Descriptions.Item label="UserName">{user.username ||'Zhou Maomao'}</Descriptions.Item>
                <Descriptions.Item label="Telephone">{user.phone ||'1810000000'}</Descriptions.Item>
                <Descriptions.Item label="Email">{user.email ||'nove48@yandex.ru'}</Descriptions.Item>
            </Descriptions>
            <Form onFinish={submit}>
                <Form.Item>
                    <TextArea value={text} onChange={x=>setText(x.target.value)}/>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" loading={isLoading}>Добавить</Button>
                </Form.Item>
            </Form>
            <Post text='alax' time={moment().fromNow()}/>
            {posts && posts.map(x=><Post key={x.id} text='alax' time={moment().fromNow()}/>)}
        </div>
    );
}
export default Profile;