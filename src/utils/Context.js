import {createContext, useEffect, useState} from "react";
import axios from "axios";


export const CustomContext = createContext()

export const Context = (props) => {

    const [products, setProducts] = useState([])
    const [user, setUser] = useState({
        email : ''
    })

    useEffect(() => {
        if (localStorage.getItem('user') !== null){
            setUser(JSON.parse(localStorage.getItem('user')))
        }
    }, [])


    const getAllProducts = () => {
        axios('http://localhost:8080/products')
            .then(({data}) => setProducts(data))
            .catch((err) => console.log(err))
    }




    const value = {
        user,
        setUser,
        products,
        setProducts,
        getAllProducts
    }

    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>

}