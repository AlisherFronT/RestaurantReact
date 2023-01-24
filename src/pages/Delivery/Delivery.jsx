import React, {useEffect, useState} from 'react';
import Title from "../../components/Title/Title";
import axios from "../../utils/axios";
import DeliveryCard from "./DeliveryCard/DeliveryCard";

const Delivery = () => {

    const [delivery, setDelivery] = useState([])


    useEffect(() => {
        axios('/delivery').then(({data}) => {
            setDelivery(data)
        }).catch((err) => console.log(err))
    }, [])

    return (
        <section className='delivery'>
            <div className="container">

                    <Title title='Условия доставки'/>
                <div className="delivery__cards">
                    <div className="delivery__block">
                        {
                            delivery.map(item => (
                                <DeliveryCard item={item}/>
                            ))
                        }
                    </div>
                    <div className="delivery__map"></div>
                </div>



            </div>
        </section>
    );
};

export default Delivery;