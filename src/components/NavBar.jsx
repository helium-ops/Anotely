import React, { useState } from 'react'

const NavBar = () => {
    const [user, setUser] = useState(JSON.stringify(localStorage.getItem('user')));
  return (
    <h1>{user.email}</h1>
  )
}

export default NavBar
