import "./apartment.css"
import Topbar from '../../components/topbar/Topbar'
import ApartmentImg from "../../assets/img/apartment.jpg"
import SimpleImageSlider from "react-simple-image-slider";
import { DatePicker, Select } from 'antd';
import moment from "moment";


export default function Apartment() {
  const images = [
    { url: ApartmentImg },
    { url: ApartmentImg },
    { url: ApartmentImg }
  ];

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
    <div className="apartment-div">
        <Topbar status={"show"}/>
        <div className="apartment-container">
          <div className="apartment-left">

         < SimpleImageSlider
        width={794}
        height={503}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        />
        </div>
          <div className="apartment-right">

          <h3 className="apratment-h3">Name of the flat</h3>
          <p className="apartment-desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />
            Nihil nisi est pariatur quidem distinctio similique laboriosam beatae, <br />
            voluptate sint enim repudiandae? Placeat omnis eveniet voluptatem vitae <br />
             quaerat voluptate quae asperiores.<br />
             Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />
            Nihil nisi est pariatur quidem distinctio similique laboriosam beatae, <br />
            voluptate sint enim repudiandae? Placeat omnis eveniet voluptatem vitae <br />
             quaerat voluptate quae asperiores.<br />
            
             quaerat voluptate quae asperiores.</p>
             <span className="apartment-specification">70 kvadrata - 3 sobe - 4 kreveta - 1 kupatilo - terasa</span> 
             <div className="apartment-rightbot">

             <span className="apartment-price">$50</span>
             <span className="perNight-span">per night</span>
             <div className="date-wrapper">
             <RangePicker
                style={{border:"2px solid #AB3B61"}} 
                className="apartment-date"
                format="DD/MM/YYYY HH:00" 
                showTime={{ format: "HH"}} 
                onChange={onChangeRange} />
             <Select style={{border:"2px solid #AB3B61", borderRadius:"5px", inline:"none"}} className="select-people" placeholder="Number or people"/>
             <button className="book-now-btn">Book right now !</button> 
              </div> 
             </div>
          </div>
        </div>
      
    </div>
  )
}
