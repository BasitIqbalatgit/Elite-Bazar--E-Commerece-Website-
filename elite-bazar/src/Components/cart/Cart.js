import { MdOutlineKeyboardBackspace, MdRemove } from "react-icons/md";
import "../../Assets/css/cart.css";
import React from "react";
import f1 from "../../Assets/img/f1.png";
import {motion} from "framer-motion";
import {MdRefresh} from 'react-icons/md';
import {FaPlus} from 'react-icons/fa'
import { useStateValue } from "../../context/StateProvider";
import { actionType } from "../../context/reducer";
import { initialState } from "../../context/initialState";
const Cart=()=>{

const[{cartShow,cartItems},dispatch]= useStateValue();



const handleBack=()=>{
    dispatch({
        type:actionType.SET_CART_SHOW,
        cartShow:!cartShow
    })
}

    return(
    <motion.div
        initial={{opacity:0, x:200}}
        animate={{opacity:1, x:0}}
        exit={{opacity:0, x:200}}
        
    className="main-cart-div">
        <div className="back-option-div" >
            <motion.div
            onClick={handleBack}
            whileTap={{scale:0.75}}
            ><MdOutlineKeyboardBackspace style={{color:"#2e2e2e", fontSize:'2rem'}}/>
           </motion.div>

           <p id="cart-cart">Cart</p>
            <motion.p whileTap={{scale:0.75}} id="clear-cart" onClick={()=>dispatch({
                type:actionType.SET_CART_ITEMS, cartItems:initialState.cartItems
            })}>Clear<MdRefresh /></motion.p>         
            
        </div>
{/* bottom section */}
        <div className="bottom-section-cart">
            <div className="sub-bottom-cart">
                
                {/* cart items */}
                <div id="cart-items-cart">
                    <img className="cart-img" src={f1} alt="img" /> 
                    {/* name Section */}
                    <div className="cart-name-div">
                        <p className="cart-name-p">strawberry </p>
                        <p className="cart-name-p2">$8.5</p>
                    </div>

                    {/* button section */}
                    
                    <div className="button-section-div">
                       <motion.div whileTap={{scale: 0.75}}>
                            <MdRemove style={{ color: "rgb(221, 217, 217)",fontSize:"1rem"}}/>
                       </motion.div>
                       <p style={{width:"1.25rem", height:"1.25rem",backgroundColor:"#282a2c" ,borderRadius:"0.125rem", color: "rgb(221, 217, 217)", display:"flex", alignItems:"items-center", justifyContent:"center", marginTop:"1.25rem"}}> 1 </p>
                       <motion.div whileTap={{scale: 0.75}}>
                            <FaPlus style={{ color: "rgb(221, 217, 217)", fontSize:"0.75rem"}}/>
                       </motion.div>
                     </div>
                </div>
            </div>
            {/* cart total section */}
            <div id="cart-total-div">
                    <div style={{width:"100%", display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                            <p style={{color:"rgb(148, 147, 147)", fontSize:"large"}}> Sub Total</p>
                            <p style={{color:"rgb(148, 147, 147)", fontSize:"large"}}>$ 8.5</p>
                    </div>
                    <div style={{width:"100%", display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                            <p style={{color:"rgb(148, 147, 147)", fontSize:"large"}}> Delivery</p>
                            <p style={{color:"rgb(148, 147, 147)", fontSize:"large"}}>$ 8.5</p>
                    </div>
                    <div style={{width:"100%", backgroundColor:"#718096",borderBottomWidth: "4rem", borderColor: "red", marginTop:"0.5rem", marginBottom:"0.5rem", height:"0.25rem"}}></div>

                    <div style={{width:"100%", display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                        <p style={{ color: "#e2e8f0", fontSize:"larger", fontWeight:"600"}}>Total</p>
                        <p style={{ color: "#e2e8f0", fontSize:"larger", fontWeight:"600"}}>$ 11.5</p>
                    </div>
                    <motion.button
                    whileTap={{scale:0.8}}
                    type="button"
                    className="checkOutBtn"
                    >
                            Check Out
                    </motion.button>
            </div>
        </div>
        </motion.div>)
}
export default Cart;