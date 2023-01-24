import React, {useEffect, useContext} from 'react';
import ProductsFilter from "../../../components/ProductsFilter/ProductsFilter";
import {useNavigate} from "react-router-dom";
import {menuData} from "../../../utils/menuData";

import {CustomContext} from "../../../utils/Context";


const AllProducts = () => {

    const navigate = useNavigate()
    const { getAllProducts} = useContext(CustomContext);

    useEffect(() => {
        getAllProducts()
    },[])


    return (
        <section className="products">
            <ul className="products__list">
                {
                    menuData.map(item => (
                        <li key={item.en} className="products__item" onClick={() => navigate(`/catalog/${item.en}`)}>
                            {item.ru}
                        </li>
                    ))
                }
            </ul>
            <ProductsFilter title='ХОЛОДНЫЕ ЗАКУСКИ'/>
            <ProductsFilter title='ГОРЯЧИЕ ЗАКУСКИ'/>
            <ProductsFilter title='Мясные блюда'/>
        </section>
    );
};

export default AllProducts;