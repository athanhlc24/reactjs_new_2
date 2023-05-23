import React, { useContext, useEffect, useState } from "react";
import { get } from './../services/cart.service'; 
import UserContext from "../store/context";
function Cart(props){
    const [products,setProduct] = useState([]);
    const {state,dispatch} = useContext(UserContext);
    // const {cart,setCart} = useContext(UserContext);
    // const  getProducts = async()=>{
    //         setProduct(cart);
    // }
    useEffect(()=>{

    });//COMPONENT DID UPDATE
    useEffect( ()=>{
        // getProducts();
    },[]);//COMPONENT DID MOUNT
    useEffect(()=>{

    },[products]);// RUN WHEN PRODUCTS UPDATE
    return(
        <section>
            <div className="container">
                <table className="table">
                    <thead>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>qty</th>
                        <th>total</th>
                    </thead>
                    <tbody>
                        {
                            state.cart.map((e,k)=>{
                                return(
                                    <tr key={k}>
                                        <td><img src={e.thumbnail} className="img-thumbnail" width={120} alt="..." /></td>
                                        <td>{e.title}</td>
                                        <td>{e.price}</td>
                                        <td>{e.buy_qty}</td>
                                        <td>{e.price * e.buy_qty}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </section>
    )
}
export default Cart;