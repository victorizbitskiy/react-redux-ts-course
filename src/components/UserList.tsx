import { configureStore } from "@reduxjs/toolkit";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../hooks/useTypeSelector";
import { fetchUsers } from "../store/action-creator/user";
import { UserAction } from "../types/user";

const UserList: React.FC = () => {

  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [fetchUsers]);

  const { users, error, loading } = useTypedSelector((state) => state.user);
  
  if (loading) {
    return <h1>Идет загрузка...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};

export default UserList;
