import React from 'react';
import {BsCart3} from "react-icons/bs";
import {useNavigate} from "react-router-dom";

const Card = ({item}) => {

    const navigate = useNavigate()
    return (
        <div className="products__card">
            <img onClick={() => navigate(`/product/${item.id}`)} src={`${item.image[0] === '.' ? '../' : ''}${item.image}`} alt={item.title} className="products__card-img"/>
            <div className="products__card-info">
                <div className="products__card-name">
                    <h3 className="products__card-title">
                        {item.title}
                    </h3>
                    <p className="products__card-weight">
                        Вес: {item.weight} г
                    </p>
                </div>
                <p className="products__card-desc">
                    {item.description}
                </p>
                <div className="products__card-buy">
                    <p className="products__card-price">
                        {item.price} ₽
                    </p>
                    <button className="products__card-btn header__btn">
                        В корзину
                        <BsCart3 size={20}/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;