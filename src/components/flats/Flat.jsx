import "./flat.css"
import ApartmentImg from "../../assets/img/apartment.jpg"

export default function Flat() {
  return (
    <div className="flat-div">
        <img src={ApartmentImg} alt="" className="flat-img"/>
        <span className="flat-title">TITTLE</span>
        <span className="flat-address">Address</span>
        <span className="flat-price">PRICE:100$ per night</span>
    </div>
  )
}
