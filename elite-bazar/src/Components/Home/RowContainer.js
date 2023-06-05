import { MdOutlineStarBorder, MdShoppingBasket, MdStarRate } from "react-icons/md";
import "../../Assets/css/rowContainer.css"

import {motion} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../../context/StateProvider";
import { actionType } from "../../context/reducer";




const RowContainer=({flag,data,scrollValue})=>{
const rowConstiner = useRef()
useEffect(()=>{
    
    rowConstiner.current.scrollLeft += scrollValue;
    
},[scrollValue])


const [{cartItems}, dispatch]= useStateValue();

const handleCartItems=(fruit)=>{
    
    const updatedCartItems = [...cartItems, fruit];
  dispatch({
    type: actionType.SET_CART_ITEMS,
    cartItems: updatedCartItems,
  });
    
    
    
      
}
    

    return(
    <div  ref={rowConstiner} style={{width:"100%", height:"auto",scrollBehavior: 'smooth',margin:"1.7rem 1rem",gap:"2rem",display:"flex", alignItems:"center",overflowX :  flag?"scroll":"hidden", flexWrap:  flag?"":"wrap", justifyContent: flag? "":"center"}}>
        {
            data.map(fruit=>(
                <div key={fruit?.id} className="inner-div" >
                <div style={{width:"100%",display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                    
                   <motion.img whileHover={{ scale : 1.2}} style={{width:"10rem", height:"7rem",marginTop:"1.5rem"}} src={fruit?.imageSrc} alt="img" />
                   
                   <motion.div whileTap={{scale:0.75}}  style={{width:"2.5rem",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center", height:"2.5rem", borderRadius:"50%", backgroundColor:"red" }} onClick={()=>handleCartItems(fruit)}>
                    <MdShoppingBasket style={{color:"white",}} />
                   </motion.div>
                </div>
               
                <div style={{width:"100%", display:"flex", alignItems:"end",justifyContent:"end", flexDirection:"column"}}>
                    <p style={{color:"#515151", fontWeight:"600",fontSize:"1.5rem" }}>
                        {fruit?.decp}</p>
                    <div style={{display:"flex", alignItems:"center", gap:"2rem"}}>
                        <p style={{fontSize:"large", color:"#515151", fontWeight:"700"}}>
                            <span style={{fontSize:"small", color:"#EF4444"}}>$</span>
                            {fruit?.price}
                            </p>
                    </div>
                </div>
                <div className="review-stars">
                    <MdStarRate style={{color:"#ff9933"}}/>
                    <MdStarRate style={{color:"#ff9933"}}/>
                    <MdStarRate style={{color:"#ff9933"}}/>
                    <MdStarRate style={{color:"#ff9933"}}/>
                    <MdOutlineStarBorder style={{color:"balck"}} />
                </div>

               
            </div>
            ))
        }
       
    </div>)
}
export default RowContainer;
