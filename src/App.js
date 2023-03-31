import React from "react"
import Header from "./components/Header"
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"
import {Routes, Route} from 'react-router-dom'


function App() {    
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route exact path='/' element={<Photos/>}>
    
                </Route>

                <Route exact path='/cart' element={<Cart/>}>
                    {/* <Cart/> */}
                </Route>



            </Routes>
        </div>
    )
}

export default App