import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import Title from "../../components/Title/Title";
import {CustomContext} from "../../utils/Context";

const Basket = () => {

    const  {basket, plusOneBasket, minusOneBasket, delBasket} = useContext(CustomContext)

    return (
        <section className='basket'>
            <div className="container">
                <Link to='/catalog'>К выбору блюда</Link>
                <div className="basket__top">
                    <Title title={'КОРЗИНА'}/>
                    <p className="basket__count">(в корзине {basket.length})</p>
                </div>

                <ul className="basket__list">
                    {basket.map((item) => (
                        <li key={item.id} className="basket__item">
                            {item.title}
                            <div className='basket__item-right'>
                                <div className='basket__item-count'>
                                    <button type='button' onClick={() => minusOneBasket(item.id)} className='basket__item-minus'>-</button>
                                    <span className='basket__item-count-num'>
                                    {item.count}
                                </span>
                                    <button type='button' onClick={() => plusOneBasket(item.id)} className='basket__item-plus'>+</button>
                                </div>

                                <p className='basket__item-price'>{item.price * item.count}</p>


                                <button type='button' onClick={() => delBasket(item.id)} className='basket__item-del'>X</button>
                            </div>
                        </li>
                    ))}
                </ul>

                <h2>{}</h2>
            </div>
        </section>
    );
};

export default Basket;