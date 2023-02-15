import { useEffect } from "react";
import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import { fetchDataFromApi } from "../../utils/api";
const Home = () => {
    useEffect(() => {
        getCategories();
    }, []);
    
    const getCategories = () => {
        fetchDataFromApi("http://localhost:1337/api/categories").then((res) => console.log(res));
    }
    return <div>
        <Banner/>
        <div className="main-content">
        <div className="layout">
        <Category />
        <Products headingText= "Popular Products" />
        </div>
        </div>
        </div>;
};
export default Home;

