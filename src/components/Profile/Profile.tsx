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
    const {user} = useTypedSelector(x=>x.profile);
    const {isLoading}= useTypedSelector(x=>x.auth);
    const [text,setText]=useState('');
    useEffect(() => {
        getProfile();
    }, []);
    const submit=()=>{
        var temp = user.Email;
    }
    
    return (
        <div>
            <Avatar size={64} icon={<UserOutlined />} src={user.ProfilePhoto} />
            <Descriptions title="User Info" layout="vertical">
                <Descriptions.Item label="UserName">{user.UserName}</Descriptions.Item>
                <Descriptions.Item label="Email">{user.Email}</Descriptions.Item>
            </Descriptions>
        </div>
    );
}
export default Profile;