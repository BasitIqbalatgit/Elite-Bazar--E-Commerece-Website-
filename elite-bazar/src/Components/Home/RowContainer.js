import { MdShoppingBasket } from "react-icons/md";
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
    console.log(fruit);
    dispatch({
        type:actionType.SET_CART_ITEMS,
        
    });
      
}
    

    return(
    <div  ref={rowConstiner} style={{width:"100%", height:"auto",scrollBehavior: 'smooth',margin:"1.7rem 0rem",gap:"2rem",display:"flex", alignItems:"center",overflowX :  flag?"scroll":"hidden", flexWrap:  flag?"":"wrap", justifyContent: flag? "":"center"}}>
        {
            data.map(fruit=>(
                <div key={fruit.id} className="inner-div" >
                <div style={{width:"100%",display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                    {/* <Link to="/detail"  state={{from:fruit}} > */}
                   <motion.img whileHover={{ scale : 1.2}} style={{width:"10rem", height:"7rem",marginTop:"1.5rem", boxShadow:" 0 25px 50px -12px rgba(0, 0, 0, 0.25)"}} src={fruit.imageSrc} alt="img" />
                   {/* </Link> */}
                   <motion.div whileTap={{scale:0.75}}  style={{width:"2.5rem",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center", height:"2.5rem", borderRadius:"50%", backgroundColor:"red" }} onClick={()=>handleCartItems(fruit)}>
                    <MdShoppingBasket style={{color:"white",}} />
                   </motion.div>
                </div>
               
                <div style={{width:"100%", display:"flex", alignItems:"end",justifyContent:"end", flexDirection:"column"}}>
                    <p style={{color:"#515151", fontWeight:"600",fontSize:"1.5rem" }}>
                        {fruit.decp}</p>
                    <div style={{display:"flex", alignItems:"center", gap:"2rem"}}>
                        <p style={{fontSize:"large", color:"#515151", fontWeight:"700"}}>
                            <span style={{fontSize:"small", color:"#EF4444"}}>$</span>
                            {fruit.price}
                            </p>
                    </div>
                </div>
               
            </div>
            ))
        }
       
    </div>)
}
export default RowContainer;
