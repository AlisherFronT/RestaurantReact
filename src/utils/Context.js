import {createContext, useEffect, useState} from "react";
import axios from "axios";


export const CustomContext = createContext()

export const Context = (props) => {

    const [products, setProducts] = useState([])

    const [user, setUser] = useState({
        email : ''
    })

    const [basket, setBasket] = useState([])

    useEffect(() => {
        if (localStorage.getItem('user') !== null){
            setUser(JSON.parse(localStorage.getItem('user')))
        }

        if(localStorage.getItem('basket') !== null ) {
            setBasket(JSON.parse(localStorage.getItem('basket')))
        }

    }, [])

    useEffect(() => {
        localStorage.setItem('basket', JSON.stringify(basket))
    }, [basket])


    const getAllProducts = () => {
        axios('http://localhost:8080/products')
            .then(({data}) => setProducts(data))
            .catch((err) => console.log(err))
    }

    const addBasket = (product) => {
        setBasket(prev => [...prev, {
            ...product,
            count: 1
        }])


    }

    const delBasket = (id) => {
        setBasket(prev => prev.filter(item => item.id !== id))

    }

    const plusOneBasket =  (id) => {
        setBasket(prev => prev.map(item => {
            if (item.id === id) {
                return {...item, count: item.count + 1}
            } else {
                return item
            }
        }))

    }

    const minusOneBasket = (id) => {

        let count = basket.find(item => item.id === id).count

        if (count === 1) {
            setBasket(prev => prev.filter(item => item.id !== id))
        } else{
            setBasket(prev => prev.map(item => {
                if (item.id === id) {
                    return {...item, count: item.count - 1}
                } else {
                    return item
                }
            }))
        }

    }


    const value = {
        user,
        setUser,
        products,
        setProducts,
        getAllProducts,
        basket,
        addBasket,
        plusOneBasket,
        minusOneBasket,
        delBasket
    }

    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>

}