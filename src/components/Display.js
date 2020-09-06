import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {toggleAvailabilityOf} from '../reducers/productReducer'

const Product = ({product, eventHandler}) => {
    return(
        <li key={product.id}>
            {product.title} -- {product.category} --
            <button onClick = {eventHandler}> 
                {product.available ? 'available' : 'sold out'} 
            </button>
        </li>
    )
}

const Display = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => {
        if (state.filter === 'ALL') {
            return state.products
        } 
        return state.filter === 'AVAILABLE'
            ? state.products.filter(products => products.available)
            : state.products.filter(products => !products.available)
    })
    return(
        <ul>
            {products.map(product=>
            <Product 
                key={product.id} 
                product={product} 
                eventHandler={() => 
                    dispatch(toggleAvailabilityOf(product.id))
                }
            />)}
        </ul>
    )
}

export default Display