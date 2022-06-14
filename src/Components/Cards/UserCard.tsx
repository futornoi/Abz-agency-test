import React from 'react';
import UserAvatar from "../Avatar/UserAvatar";
import Tooltip from "../Tooltip/TooltipText";
import './Card.scss';
import { User } from "../../Api/users";
import { formatPhoneNumber } from "../../Utils/convertPhoneNumber";

interface UserCard {user: User;}

const UserCard:React.FC<UserCard> = ({user}) => {
  return (
    <div className="card">
      <div className="card__content user-card__content">
        <UserAvatar className="user-avatar" src={user.photo}/>
        <div className="user-name">
          <Tooltip>{user.name}</Tooltip>
        </div>
        <div className="user-desc">
          <Tooltip>{user.position}</Tooltip>
          <Tooltip>{user.email}</Tooltip>
          <span>{formatPhoneNumber(user.phone)}</span>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
