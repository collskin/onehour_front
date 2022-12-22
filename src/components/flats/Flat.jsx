import "./flat.css"
import ApartmentImg from "../../assets/img/apartment.jpg"
import Glush from "../../assets/img/glush.png"

export default function Flat() {
  return (
    <div className="flat-div">
        <img src={Glush} alt="" className="flat-img"/>
        <span className="flat-title">APARTMENT TITTLE</span>
        <span className="flat-address">Address</span>
        <span className="flat-price">PRICE:100$ per night</span>
    </div>
  )
}
