import React from 'react'
import "./topbar.css"
import Logo from "../../assets/img/logo.png"
import { DatePicker, Select } from 'antd';
import Menu from "../../assets/img/menu.png"
import moment from 'moment/moment';


export default function (props) {

  const { RangePicker } = DatePicker;

  const onChangeRange = (dates, dateStrings) => {
    if (dates) {
        console.log(encodeURIComponent(moment(dateStrings[0], 'DD/MM/YYYY HH').format()));
        console.log(encodeURIComponent(moment(dateStrings[1], 'DD/MM/YYYY HH').format()))
    } else {
        console.log(null);
        console.log(null);
    }
};

  return (
    <div className="topbar-container">
        <div className="logo-container">
        <img src={Logo} alt="" className='logo-img'/>
        </div>
        {props.status === "show" &&  <div className="button-container">
             <RangePicker 
                className='date-selector' 
                size='large' 
                format="DD/MM/YYYY HH:00" 
                showTime={{ format: "HH"}} 
                onChange={onChangeRange} />

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
