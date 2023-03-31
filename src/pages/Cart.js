import React from "react"
import {Context} from '../Context';
import CartItem from "../components/CartItem"



function Cart() {

    const{cartItems,setCartItems,removeFromCart} = React.useContext(Context)

    const totalCost = 5.99 * cartItems.length
    const totalCostDisplay = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"})

    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} removeFromCart={()=>{removeFromCart(item.id)}} item={item} />
    ))

    function placeOrder(){
        document.getElementsByClassName('order-button-btn')[0].innerHTML= 'Ordering...'
        setTimeout(()=>{
            alert('Order placed')
            setCartItems([])
            document.getElementsByClassName('order-button-btn')[0].innerHTML= 'Place Order'
        }
        ,3000)
    }

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {totalCostDisplay}</p>

            <div className="order-button">
            {cartItems.length > 0 ?
            
                <button 
                className="order-button-btn"
                onClick={placeOrder}
                >Place Order</button>
                :
                <p>You have no items in your cart.</p>
            }

            </div>
        </main>
    )
}

export default Cart