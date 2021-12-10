import React from 'react'
import { Link, Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

function Admin() {
  const {user} = useAuth();
  return (
    user.role==="admin" ?
    <div>
      <nav>
        <ul className='admin-menu'>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>

    </div>
    :
    <Navigate to="/"/>
  )
}

export default Admin;
