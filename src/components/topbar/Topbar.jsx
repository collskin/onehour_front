import React from 'react'
import "./topbar.css"
import Logo from "../../assets/img/logo.png"
import { DatePicker, Select } from 'antd';
import Menu from "../../assets/img/menu.png"


export default function (props) {
  return (
    <div className="topbar-container">
        <div className="logo-container">
        <img src={Logo} alt="" className='logo-img'/>
        </div>
        {props.status === "show" &&  <div className="button-container">
             <DatePicker className='date-selector' size='large'/>
            
              <Select  placeholder="Select City"  className='city-selector'size='large' showSearch
             options={[
                {
                  value: 'Beograd',
                  label: 'Beograd',
                },
                {
                  value: 'Ivanovo',
                  label: 'Ivanovo',
                }
              ]}/>
            <Select    placeholder="Select Type"className='type-selector'size='large'options={[
                {
                  value: 'Type 1',
                  label: 'Type 1',
                },
                {
                  value: 'Type 2',
                  label: 'Type 2',
                }
              ]}/>
        </div>}
        <div className="menu-container">
            <img src={Menu} alt="" className='menu-img'/>
        </div>
    </div>
  )
}
