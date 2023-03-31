import React from "react"

function Image({className,img,toogleFav,addToCart,cartItems}) {

    const [hovered, setHovered] = React.useState(false)

    function heartIcon(){

        if(img.isFavorite){
            return <i 
            onClick={()=>{toogleFav(img.id)}}
            className="ri-heart-fill favorite"></i>
            
        }

        if(hovered){
            return <i 
            onClick={()=>{toogleFav(img.id)}}
            className="ri-heart-line favorite"></i>
        }

    }
    function cartIcon(){

        if(cartItems.some(el=> el.id == img.id)){
            return <i 
            onClick={()=>{addToCart(img)}}
            className="ri-shopping-cart-fill cart"></i>

        }
        
        if(hovered){
            return <i 
            onClick={()=>{addToCart(img)}}
            className="ri-add-circle-line cart"></i>
            
        }
    }

    return (
        <div 
            className={`${className} image-container`}
            onMouseEnter={()=>{ setHovered(true)}}
            onMouseLeave={()=>{setHovered(false)}}
            >
            <img src={img.url} className="image-grid"/>
            {heartIcon()}
            {cartIcon()}

        </div>
    )
}

export default Image
