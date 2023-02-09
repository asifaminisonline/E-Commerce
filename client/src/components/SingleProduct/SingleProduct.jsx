import RelatedProducts from "./RelatedProducts/RelatedProducts";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaPinterest,
    FaCartPlus,
} from "react-icons/fa";
import prod from "../../assets/products/earbuds-prod-1.webp"
import "./SingleProduct.scss";
const SingleProduct = () => {
    return <div className="single-product-main-content">
        <div className="layout">
            <div className="single-product-page">
                <div className="left">
                    <img src={prod} alt="Product"/>
                </div>
                <div className="right">
                    <span className="name">Product Name</span>
                    <span className="price">Product Price</span>
                    <span className="desc">Product Description</span>

                    <div className="cart-buttons">
                        <div className="quantity-buttons">
                            <span>-</span>
                            <span>5</span>
                            <span>+</span>
                        </div>
                        <button className="add-to-cart-button"><FaCartPlus />ADD TO CART</button>
                    </div>
                    <span className="dividor"/>
                    <div className="info-item">
                        <span className="text-bold">
                        Category:
                        <span>Headphones</span>
                        </span>
                        <span className="text-bold">
                        Share:
                        <span className="social-icons">
                        <FaFacebookF size={16} />
                            <FaTwitter size={16} />
                            <FaInstagram size={16} />
                            <FaLinkedinIn size={16} />
                            <FaPinterest size={16} />
                        </span>
                        </span>
                    </div>
                </div>
            </div>
            <RelatedProducts/>
        </div>
    </div>;
};

export default SingleProduct;
