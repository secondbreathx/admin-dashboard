import React from 'react'
import '../components/pageTitle.css';

function PageTitle({ page, icon }) {
  return (

    <div className='pagetitle'>
        <nav>
            <ol className='breadcrumb'>
                <li className='breadcrumb-item'>
                        <i className={icon}></i>
                </li>
                <li className='breadcrumb-item active'>{page}</li>
            </ol>
        </nav>
    </div>   
  )
}

export default PageTitle