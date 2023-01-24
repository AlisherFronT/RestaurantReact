import React,{useState} from 'react';
import {FiChevronDown} from "react-icons/fi";


const DeliveryCard = ({item}) => {
    const [active,setActive] = useState(false)

    return (
        <div className="delivery__card">
            <div className="delivery__card-title" onClick={() => setActive((prev) => !prev)}>
                                <span className="delivery__name">
                                    {item.title}
                                </span>
                <FiChevronDown/>
            </div>

            <div className="delivery__deck">
                <p style={{display: active? "flex": "none"}} className="delivery__text">
                    {item.answer}
                </p>
            </div>
        </div>
    );
};

export default DeliveryCard;