import React, {useEffect, useState} from 'react';
import axios from "../../utils/axios";
import {useNavigate, useParams} from "react-router-dom";

const Product = () => {

    const [product, setProduct] = useState({})
    const {id} = useParams()

    const navigate = useNavigate()

    useEffect(() => {
        axios(`/products/${id}`)
            .then(({data}) =>  setProduct(data))
            .catch((err) => console.log('Ошибка при получении продукта') )
    }, [])

    if (JSON.stringify(product) === '{}') {
        return (
            <h2>Продукт не найден</h2>
        )
    }
    return (
        <section className='product'>
            <div className="container">
                <button type='button' onClick={() => navigate(-1)}>back</button>
                <h2>{product.title}</h2>
            </div>
        </section>
    );



};

export default Product;