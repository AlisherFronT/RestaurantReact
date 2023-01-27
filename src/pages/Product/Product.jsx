import React, {useEffect, useState} from 'react';
import axios from "../../utils/axios";
import {useNavigate, useParams} from "react-router-dom";
import {IoIosArrowBack} from 'react-icons/io'
import {BsCart3} from "react-icons/bs";

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
                <button className='product__btn' type='button' onClick={() => navigate(-1)}>
                    <span className="product__btn-icon">
                        <IoIosArrowBack/>
                    </span>
                    Вернуться назад
                </button>

                <div className="product__content">
                    <img className='product__content-img' src={`${product.image}`} alt=""/>
                    <div className="product__info">
                        <h2 className='product__info-title'>{product.title}</h2>
                        <p className="product__info-desc">
                            {product.description}
                        </p>
                        <ul className="product__info-list">
                            <li className='product__info-item'>Белки {product.protein}</li>
                            <li className='product__info-item'>Жиры {product.fats}</li>
                            <li className='product__info-item'>Углеводы {product.carbohydrates}</li>
                            <li className='product__info-item'>Ккал {product.calories}</li>
                            <li className='product__info-item'>Вес {product.weight}г</li>
                        </ul>
                        <div className="product__info-buy">
                                <button className="products__card-btn header__btn">
                                    В корзину
                                    <BsCart3 size={20}/>
                                </button>
                            <p className="product__info-price">
                                {product.price} ₽
                            </p>
                        </div>

                    </div>
                </div>


            </div>
        </section>
    );



};

export default Product;