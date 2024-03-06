import React from 'react'

export default function NavItem({nav}) {
  return (
    <li key={nav._id} onClick={() => {window.location.pathname = nav.path }} className='nav-item'>
    <a className='nav-link collapsed' href='#'>
        <i className={nav.icon}></i>
        <span>{nav.name}</span>
    </a>
    </li>
  )
}
