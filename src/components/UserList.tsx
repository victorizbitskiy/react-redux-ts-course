import React from 'react';
import { useSelector } from 'react-redux';
import { useTypeSelector } from '../hooks/useTypeSelector';

const UserList: React.FC= () => {
  const {users, error, loading} = useTypeSelector(state => state.user)  
  return (
    <div>
      
    </div>
  );
};

export default UserList;