import {MdClose} from "react-icons/md"
import prod from "../../../assets/products/earbuds-prod-1.webp"
import "./CartItem.scss";
const CartItem = () => {
    return <div className="cart-products">
        <div className="cart-product">
            <div className="img-container">
                <img src={prod} alt="product image"/>
            </div>
            <div className="prod-details">
                <span className="name">Product Name</span>
                <MdClose className="close-btn"/>
                <div className="quantity-buttons">
                    <span>-</span>
                    <span>5</span>
                    <span>+</span>
                 </div>
                 <div className="text">
                    <span>3</span>
                    <span>*</span>
                    <span>&#8377; 123</span>
                 </div>
            </div>
        </div>
    </div>;
};

export default CartItem;
