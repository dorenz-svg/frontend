import { DislikeFilled, DislikeOutlined, LikeFilled, LikeOutlined } from '@ant-design/icons';
import { Comment,Tooltip, Avatar} from 'antd';
import moment from 'moment';
import React, { createElement, useState } from'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
interface MyProps{
  time:string,
  text:string
}
export const Post:React.FC<MyProps>=(props:MyProps)=>{
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [action, setAction] = useState('');
    const {UserName: userName}= useTypedSelector(x=>x.profile.user);
    const like = () => {
      setLikes(1);
      setDislikes(0);
      setAction('liked');
    };
  
    const dislike = () => {
      setLikes(0);
      setDislikes(1);
      setAction('disliked');
    };
  
    const actions = [
      <Tooltip key="comment-basic-like" title="Like">
        <span onClick={like}>
          {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
          <span className="comment-action">{likes}</span>
        </span>
      </Tooltip>,
      <Tooltip key="comment-basic-dislike" title="Dislike">
        <span onClick={dislike}>
          {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
          <span className="comment-action">{dislikes}</span>
        </span>
      </Tooltip>,
    ];
    return (
        <Comment
          actions={actions}
          author={<a>{userName || 'han'}</a>}
          avatar={
            <Avatar
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              alt="Han Solo"
            />
          }
          content={
            <p>
             {props.text}
            </p>
          }
          datetime={
            <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
              <span>{props.time}</span>
            </Tooltip>
          }
        />
      );
}