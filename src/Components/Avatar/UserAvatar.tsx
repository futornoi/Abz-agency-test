import React, { useState } from 'react';
import './Avatar.scss';

const initialSrc = './images/defaultAvatar.svg';

interface Avatar {
  className?: string
  src?: string;
}

const UserAvatar:React.FC<Avatar> = ({src, className}) => {
  const [userAvatar, setUserAvatar] = useState(src || initialSrc);
  const onErrorLoading = () => setUserAvatar(initialSrc)

  return (
    <div className={`avatar ${className ?? ''}`}>
      <img src={userAvatar} onError={onErrorLoading} alt="avatar"/>
    </div>
  );
};

export default UserAvatar;
