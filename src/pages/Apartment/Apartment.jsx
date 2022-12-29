import "./apartment.css"
import Topbar from '../../components/topbar/Topbar'
import ApartmentImg from "../../assets/img/apartment.jpg"
import SimpleImageSlider from "react-simple-image-slider";
import { DatePicker, Select } from 'antd';
import {useDispatch} from "react-redux"
import { useEffect, useState } from "react";
import { getSpacesById } from "../../features/backendRoutes/spaceSlice";
import { useParams } from "react-router-dom";

// const images = [
//   { url: ApartmentImg },
//   { url: ApartmentImg },
//   { url: ApartmentImg }
  
// ];


export default function Apartment() {

  const [apartmentData, setApartmentData] = useState(null);

  const dispatch = useDispatch();
  const {id} = useParams();

  useEffect(()=>{
    dispatch(getSpacesById(id))
    .then(response => {
     setApartmentData(response.payload);
    })
    .catch(error => {
      console.error(error);
    });
  }, []);
  
  console.log(apartmentData);

  
  return (
    <div className="apartment-div">
        <Topbar status={"show"}/>
        <div className="apartment-container">
          <div className="apartment-left">

          {apartmentData ?  ( < SimpleImageSlider
        width={794}
        height={503}
        images={apartmentData.image_urls}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        /> ) : null }
        </div>
          <div className="apartment-right">
           {apartmentData ? (
            <div key={apartmentData.id}>
            <h3 className="apratment-h3">{apartmentData.name}</h3>
          <p className="apartment-desc">City:{apartmentData.city}</p>
          <p className="apartment-desc">Country:{apartmentData.country}</p>
          <p className="apartment-desc">{apartmentData.address}</p>
          <p className="apartment-desc">{apartmentData.detailed_description} </p>
          <p className="apartment-desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
          <p className="apartment-desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
          <p className="apartment-desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
             <span className="apartment-specification">{apartmentData.detailed_description}</span> 
            </div>
          ) : null}
         
             
             <div className="apartment-rightbot">
             {apartmentData ?(
             <span className="apartment-price">{apartmentData.price}$</span>
             ) : null}
             <span className="perNight-span">per night</span>
             <div className="date-wrapper">
             <DatePicker style={{border:"2px solid #AB3B61"}} className="apartment-date" />
             <Select style={{border:"2px solid #AB3B61", borderRadius:"5px", inline:"none"}} className="select-people" placeholder="Number or people"/>
             <button className="book-now-btn">Book right now !</button> 
              </div> 
             </div>
          </div>
        </div>
      
    </div>
  )
}
