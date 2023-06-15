
import { useRef, useState } from "react";
import "../../Assets/css/createContainer.css"
import { motion } from "framer-motion";

import { MdFastfood, MdCloudUpload, MdDelete, MdAttachMoney } from "react-icons/md";
import { categories } from "../../utils/data";
import Loader from "../Home/Loader";
import Header from "../Home/Header";
import vidBackground from "../../Assets/img/createItems.mp4";
import { useStateValue } from "../../context/StateProvider";
import axios from "axios";



const DBNewItem = () => {
    const [fields, setFields] = useState(false);
    const [alertStatus, setAlertStatus] = useState("anger");
    const [msg, setMsg] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [product, setProduct] = useState({
        name: "",
        qty: 1,
        popular: false,
        category: "",
        price: 0,
        stock: 0
        //  image
    });
   
    //   const { addProduct, setNewAddProduct, dispatch } = useStateValue();

    const dangerClass = alertStatus === 'danger' ? 'danger danger-bg' : 'danger safe-bg';

    
   
    const handleChange = (e) => {

        setProduct({ ...product, [e.target.name]: e.target.value });

        // console.log(product);
        // const { name, value } = e.target;


        // if (name == "uploadimage") {
        //     setIsLoading(true);
        //     const imagefile = e.target.files[0];
        //     console.log(imagefile)
        // }

    }

    const saveDetails= async (e) => {
        e.preventDefault();
        console.log("after saving : ", product);

        await axios.post("http://localhost:5000/product",product);

    };




    return (


        <div className="main-div">

            <form  className="sub-main">
                {
                    fields && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className={dangerClass}>
                            {msg}
                        </ motion.p>
                    )
                }
                <div className="sub-main2">
                    <MdFastfood id="fastFood" />
                    <input name="name" id="titleField" type="text" required value={product.name} placeholder="Give me a title" onChange={handleChange} />

                </div>

                <div style={{ width: "100%" }}>
                    <select value={product.category} onChange={(e) => {setProduct({...product,category:e.currentTarget.value})}}
                         id="selectTag">

                        <option value="other" style={{ backgroundColor: "white" }}>Select Category</option>
                        <option className="options" value="Fruit">Fruit</option>
                        <option className="options" value="Vegatible">Vegatible</option>
                    </select>


             
                </div>
              
                {/* <div id="img-upload-div">
                    {isLoading ? <Loader /> : <>
                        {
                            !product.imageAsset ? <>
                                <label className="img-upoader1">
                                    <div className="sub1">
                                        <MdCloudUpload className="upload-icon" />
                                        <p className="upload-icon">Click here to upload</p>
                                    </div>
                                    <input style={{ width: '0', height: '0' }} type="file" name="uploadimage" accept="image/*"  />
                                </label>
                            </> : <>
                                <div style={{ position: "relative", height: "100%" }}>
                                    <img src={inputData.imageAsset} alt="uploaded image" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                    <button type="button" id="del-btn" ><MdDelete style={{ color: "white" }} /></button>
                                </div>
                            </>
                        }
                    </>}
                </div> */}

                <div className="price-cnt1">
                    <MdAttachMoney style={{ fontSize: "1.75rem", color: "#4a5568" }} />
                    <input  type="number" name="price" onChange={handleChange} required value={product.price} placeholder="Price" id="price" />


                </div>
                <div className="price-cnt1">
                    <MdAttachMoney style={{ fontSize: "1.75rem", color: "#4a5568" }} />
                    <input name="stock" type="number" onChange={handleChange} required value={product.stock} placeholder="Stock" id="price" />


                </div>

                <div>
                    <button type="submit" id="save" onClick={saveDetails} >Save</button>
                </div>
            </form>
        </div>)

}
export default DBNewItem;