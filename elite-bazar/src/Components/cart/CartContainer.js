import { MdDelete } from "react-icons/md";
import {motion} from "framer-motion";

import "../../Assets/css/checkOutContainer.css";
import { CartContainer } from "..";
const CheckOutContainer=()=>{
    return(
        <div className="small-container cart-page">
            <table id="cart-table">
                <tr>
                    <th className="thead">Product</th>
                    <th className="thead">Quantity</th>
                    <th className="thead">SubTotal</th>
                    <th className="thead">Delete</th>
                </tr>

                <tr>
                    <td>
                        <div className="cart-info">
                            <img src="" alt="img" />
                            <div>
                                <p>product Name </p>
                                <small>Price : $50 </small>
                            </div>
                        </div>
                        </td>
                   <td> <input type="Number" value={1}/></td>
                    <td>$25.25</td>
                    <td> <motion.span whileTap={{scale:0.75}} style={{width:"2.5rem",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center", height:"2.5rem", borderRadius:"50%", backgroundColor:"red" }}>
                    <MdDelete style={{color:"black",}} />
                   </motion.span></td>
                </tr>

            </table>
            <div className="total-price">
                <table id="sub-cart-table">
                    <tr className="tr-of-sub-cart-table">
                        <td>SubTotal</td>
                        <td>$200.00</td>
                    </tr>
                    <tr className="tr-of-sub-cart-table">
                        <td>TAx</td>
                        <td>$200.00</td>
                    </tr>
                    <tr className="tr-of-sub-cart-table">
                        <td>Total</td>
                        <td>$200.00</td>
                    </tr>
                </table>
            </div>
        </div>
    );
}
export default CheckOutContainer;