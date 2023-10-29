import React from 'react'
import Banner from "./Banner/Banner";
import "./Home.scss";
import Category from "./Category/Category";
import Products from '../Products/Products';
import { useEffect,useContext } from 'react';
import { fetchDataFromApi } from '../../utils/api';
import { Context } from '../../utils/context';


const Home = () => {
  const { products, setProducts, categories, setCategories} = useContext(Context);
  useEffect(() => {
    getCategories();
    getProducts();
  }, [])


  const getProducts = () => {
    fetchDataFromApi("/api/products?populate=*").then((res) => {
        setProducts(res);
    });
};
  const getCategories = () => {
    fetchDataFromApi("/api/categories?populate=*").then((res) => {
    console.log(res);
    setCategories(res);
  });
  }
  return (
    <div className=''>
       <Banner />
       <div className="main-content">
        <div className="layout">
        <Category categories={categories}/>
        <Products products={products} headingText="Popular Products"/>
        </div>
       </div>
     
    </div>
  );
};

export default Home