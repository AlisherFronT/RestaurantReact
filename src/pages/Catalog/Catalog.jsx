import React, {useEffect, useState} from 'react';
import Card from "../../components/Card/Card";
import axios from "../../utils/axios";
import {Link, useParams} from 'react-router-dom'
import {menuData} from "../../utils/menuData";


const Catalog = () => {

    const [products, setProducts] = useState([])

    const {category} = useParams()


    useEffect(() => {
        axios(`/products?category=${category}`)
            .then(({data}) => setProducts(data))
            .catch((err) => console.log('данные не получены') )
    },[])

    return (
        <section className='catalog'>
            <div className="container">
                <div className="catalog__content">
                    <aside className='catalog__aside'>

                    </aside>
                    <div className='catalog__right'>
                        <h2 className='catalog__crumbs'>
                            <Link to='/'>Главная</Link> / {menuData.find(item => item.en === category).ru}
                        </h2>
                        <div className='catalog__row'>
                            {
                                products.map((item) => (
                                    <Card key={item.id} item={item}/>
                                ))
                            }
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Catalog;