import React from 'react'
import styled from 'styled-components'

function CartWidget () {
    return (
        <Cart>
            <div className='icon cart-icon'>
                <span><a href='#'>🛒</a></span>
            </div>
        </Cart>
    )
}

export default CartWidget

const Cart = styled.div`
.cart-icon {
    font-size: 40px;
    margin: 10px 10px;
    position: relative;
    left: 350px;
    cursor: pointer;
    display: inline-block;
`