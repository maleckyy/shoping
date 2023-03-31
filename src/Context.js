import React  from 'react';

const Context = React.createContext()

function ContextProvider(props){

    const[allPhotos, setAllPhotos] = React.useState([])

    const[cartItems, setCartItems] = React.useState([])

    const url = 'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'
    React.useEffect(()=>{
        fetch(url)
        .then(response=>response.json())
        .then(data=>setAllPhotos(data))

    },[])

    function addToCart(newItem){

        if(cartItems.some(element=> element.id == newItem.id)){
            const updatedCart = cartItems.filter(item=> item.id !== newItem.id)
            setCartItems(updatedCart)
        }else{
            setCartItems(prevItems => [...prevItems, newItem])
        }    
    }

    function toogleFav(id){
        const newArr = allPhotos.map(
            photo=>{
                if(photo.id == id){
                    return{
                        ...photo,
                        isFavorite: !photo.isFavorite
                    }
                }
                else{
                    return photo
                }
            }
            )
            setAllPhotos(newArr)
    }
    function removeFromCart(id) {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id))
    }

    return(
            <Context.Provider value={{allPhotos,toogleFav,addToCart,setCartItems,cartItems,removeFromCart}}>
                {props.children}
            </Context.Provider>

    )

}
export {ContextProvider, Context}