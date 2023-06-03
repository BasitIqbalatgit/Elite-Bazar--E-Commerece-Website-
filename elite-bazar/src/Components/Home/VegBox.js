import { MdOutlineShoppingBasket } from "react-icons/md";
import React from "react";
import "../../Assets/css/vegBox.css";
import { categories } from "../../utils/data";
import { useState } from "react";
import RowContainer from "./RowContainer";
import { foodItems } from "../../utils/data";

import f1 from "../../Assets/img/f1.png";
import f2 from "../../Assets/img/f2.png";
import f3 from "../../Assets/img/f3.png";
import f4 from "../../Assets/img/f4.png";
import f5 from "../../Assets/img/f5.png";
import f6 from "../../Assets/img/f6.png";
import f7 from "../../Assets/img/f7.png";
import f8 from "../../Assets/img/f8.png";
import f9 from "../../Assets/img/f9.png";
import f10 from "../../Assets/img/f10.png";
import v1 from "../../Assets/img/Green Pepper PNG Clipart - Best WEB Clipart.png";
import v2 from "../../Assets/img/Radishes PNG Clipart.png";
import v3 from "../../Assets/img/Red Pepper PNG Clipart - Best WEB Clipart.png";
import v4 from "../../Assets/img/Yellow Pepper PNG Clipart - Best WEB Clipart.png";
import v5 from "../../Assets/img/Sliced Red Onion stock photo_ Image of grow, skin, flavor - 1981656.jfif";
import v6 from "../../Assets/img/tomato.jfif";
import v7 from "../../Assets/img/7 Foods That Burn Fat.jfif";
import v8 from "../../Assets/img/potato.jfif";
import Header from "./Header";




const VegBox=({flag})=>{
    const [items, setitems]=useState([
        {id:1,name:"Fruit", decp:"Fresh Red StrawBerries",price:'10.25', imageSrc:f1},
        {id:2,name:"Fruit", decp:"Fresh Bananas",price:'15.25', imageSrc:f2},
        {id:3,name:"Fruit", decp:"Fresh Bananas",price:'15.25', imageSrc:f3},
        {id:4,name:"Fruit", decp:"Fresh Bananas",price:'15.25', imageSrc:f4},
        {id:5,name:"Fruit", decp:"Fresh Bananas",price:'15.25', imageSrc:f5},
       {id:6,name:"Fruit", decp:"Fresh Bananas",price:'15.25', imageSrc:f6},
        {id:7,name:"Fruit", decp:"Fresh Bananas",price:'15.25', imageSrc:f7},
        {id:8,name:"Fruit", decp:"Fresh Bananas",price:'15.25', imageSrc:f8},
        {id:9,name:"Fruit", decp:"Fresh Bananas",price:'15.25', imageSrc:f9},
       {id:10,name:"Fruit", decp:"Fresh Bananas",price:'15.25', imageSrc:f10},       
       {id:6,name:"vegitable", decp:"Fresh Bananas",price:'15.25', imageSrc:v6},
        {id:5,name:"vegitable", decp:"Fresh Bananas",price:'15.25', imageSrc:v5},
        {id:7,name:"vegitable", decp:"Fresh Bananas",price:'15.25', imageSrc:v7},
        {id:8,name:"vegitable", decp:"Fresh Bananas",price:'15.25', imageSrc:v8},
        {id:1,name:"vegitable", decp:"Fresh Red StrawBerries",price:'10.25', imageSrc:v1},
       {id:2,name:"vegitable", decp:"Fresh Bananas",price:'15.25', imageSrc:v4},        
        {id:3,name:"vegitable", decp:"Fresh Bananas",price:'15.25', imageSrc:v3},      
       {id:4,name:"vegitable", decp:"Fresh Bananas",price:'15.25', imageSrc:v2},
    ]);
const [filter, setFitler] = useState('vegitable');



    return(
        
         <section style={{width:"100vw", marginTop:"1.5rem", marginBottom:"1.5rem"}} id="menu">
             <Header />
            <div style={{width:"100vwd", display:"flex", alignItems:"center", justifyContent:"start", flexDirection:"row"}}>
                <p className="para-tag" style={{ marginRight:"4rem",width:"25rem" }}>Our Menu Items</p>

                <div style={{width:"15rem", display:"flex", alignItems:"center", justifyContent:"center", gap:"2rem", paddingTop:"1.5rem", paddingBottom:"1.5rem", overflowX:"hidden", scrollbar:"none"}}>
                    {categories && categories.map(category=>(
                        <div key={category.id} className="crd" >
                        <div className="cItem" onClick={()=>setFitler(category.urlParamName)}> <MdOutlineShoppingBasket style={{fontSize:"1.3rem"}}/> </div>
                        <p>{category.name} </p>
                    </div>
                    ))}
                </div>
                
            </div>
            <div style={{width:"100vw"}}>
                    <RowContainer flag={false} 
                    data={items.filter((n)=> n.name === filter)}
                    
                    />
                </div>
         </section>
    );
}
export default VegBox;