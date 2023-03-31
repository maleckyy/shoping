import React from "react"
function CartItem({item,removeFromCart}) {

    const[hovered ,setHovered ] = React.useState()

    const trashcan = hovered ?
    "ri-delete-bin-fill":
    "ri-delete-bin-line"

    return (
        <div className="cart-item">
            <i
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={removeFromCart}
             className={trashcan} ></i>
            <img src={item.url} width="130px" />
            <p>$5.99</p>
        </div>
    )
}

export default CartItem