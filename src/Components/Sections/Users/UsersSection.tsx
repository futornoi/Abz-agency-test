import React, { useEffect, useMemo, useState } from "react";
import CustomTitle from "../../Title/CustomTitle";
import UserCard from "../../Cards/UserCard";
import CustomButton from "../../Button/CustomButton";
import './Users.scss';
import { getUsers, Users } from "../../../Api/users";
import Preloader from "../../Loader/Preloader";

interface UserSections {
  isSuccess: boolean,
}

const UsersSection:React.FC<UserSections> = ({isSuccess}) => {
  const [userList, setUserList] = useState<Users | null>(null);
  const [loading, setLoading] = useState(false);

  const setUsers = (page: number) => async () => {
    const usersData = await getUsers({ count: 6, page: page })
    setUserList(prev => {
      if (!!prev) {
        return {
          ...usersData,
          users: [...prev?.users, ...usersData.users],
        }
      }
      return null
    })
  }

  const initialUsers = async () => {
    setLoading(true)
    try {
      const usersData = await getUsers({ count: 6, page: 1 })
      setUserList(usersData)
    } catch (e) {
      const error = e as Error;
      console.log(error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    initialUsers()
  }, [isSuccess]);

  const userCardElement = useMemo(() => {
    return userList?.users.map(user => <UserCard key={user.id} user={user}/>)
  }, [userList?.page]);

  return (
    <section id="users">
      <div className="container">
        <CustomTitle center variant="h1" children="Working with GET request"/>
          {
            loading
              ? <Preloader/>
              : <div className="users-wrapper">{ userCardElement }</div>
          }
        <CustomButton onClick={setUsers((userList?.page || 1) + 1)} children="Show more"/>
      </div>
    </section>
  );
};

export default UsersSection;
