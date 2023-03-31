import React from "react"
import Image from "../components/Image"
import {getClass} from '../utils/index'
import {Context} from '../Context'

function Photos() {
    
    const {allPhotos,toogleFav,addToCart,cartItems} = React.useContext(Context)

    const imageElements = allPhotos.map(
        photo=> <Image key={photo.id} toogleFav={toogleFav} addToCart={addToCart} cartItems={cartItems} img={photo} className={getClass(photo.id) } />
    )

    return (
        <main className="photos">
            {imageElements}
        </main>
    )
}

export default Photos