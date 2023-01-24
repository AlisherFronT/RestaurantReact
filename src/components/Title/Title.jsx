import React from 'react';

const Title = ({title}) => {
    return (
        <h2 className="products__filter-title">
            <span>{title}</span>
        </h2>
    );
};

export default Title;