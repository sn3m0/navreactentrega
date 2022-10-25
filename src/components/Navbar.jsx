import React from 'react'
import styled from 'styled-components'
import BurguerButton from './BurguerButton'
import CartWidget from './CartWidget'

function Navbar() {
    return (
        <>
            <NavContainer>
                <h2>Charla <span>Geek</span></h2>
                <div className='links active'>
                    <a href="/">Home</a>
                    <a href="/">El Podcast</a>
                    <a href="/">Shop</a>
                    <a href="/">Nosotros</a>
                    <a href="/">Contacto</a>
                </div>
                <CartWidget/>
                <div className='burguer'>
                    <BurguerButton/>
                </div>
                
            </NavContainer>
        </>
    )
}

export default Navbar
const NavContainer = styled.nav`
    h2{
        color: white;
        font-weight: 400;
        span{
            font-weight: bold;
        }
    }
    padding: .3rem;
    background-color: #8f078a;
    display: flex;
    align-items: center;
    justify-content: space-between;
    a{
        color: white;
        text-decoration: none;
        margin-right: 1rem;
    }
    a:hover{
        font-weight: bolder;
    }

    
`
