import "./flat.css"
import ApartmentImg from "../../assets/img/apartment.jpg"
import Glush from "../../assets/img/glush.png"

export default function Flat(props) {
  return (
    <div className="flat-div">
        <img src={props.item.image_urls} alt="" className="flat-img"/>
        <span className="flat-title">{props.item.name}</span>
        <span className="flat-address">{props.item.address}</span>
        <span className="flat-price">PRICE:{props.item.price}$ per night</span>
    </div>
  )
}
