import React, { createContext, useEffect, useState } from "react";
import { MyContext } from "./mycontext";
import { addDoc, collection, getDocs, orderBy, doc, deleteDoc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";
const MyState = ({ children }) => {
    const [mode, SetMode] = useState("light");
    const [loading, setLoading] = useState(false);
    const [login, setLogin] = useState(false);
    const[editData,setEditData]=useState({});
     const [updateData,setUpdateData]=useState({});
 
    const [allProducts, setAllPrroducts] = useState([]);
    
    const toggleMode = () => {
        if (mode == "light") {
            SetMode("dark");
            document.body.style = "background-color:rgba(17,24,39";
        }
        else {
            SetMode("light");
            document.body.style = "background-color:light";
        }
    }

    const AddProduct = async (data) => {
        setLoading(true);
        if (data.title === "" || data.price === "" || data.imageUrl === "" || data.description === "") {
            toast.error("Add field mendeotery", {
                position: toast.POSITION.TOP_CENTER,
                hideProgressBar: true
            })
        }
        else {
            try {
                const productRef = collection(db, "products");
                await addDoc(productRef, data);
                GetProductsData();
                toast.success("succefull  product submit", {
                    position: toast.POSITION.TOP_CENTER,
                    hideProgressBar: true
                });

            }
            catch (err) {
                toast.error(`error:${err}`)
            }
        }
        setLoading(false);
    }

    const GetProductsData = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "products"), orderBy("time"));
            setAllPrroducts([]);
            querySnapshot.forEach((doc) => {
                console.log(doc.data())
                setAllPrroducts((pev) => [...pev, { ...doc.data(), id: doc.id }]);
            });
        }
        catch (err) {
            alert(`get data error:${err}`);
        }
        console.log(allProducts);
    }
    const EditableProduct=async(data)=>{
            setEditData(data);
    }

    const UpdateProduct = async () => {
        try {
            const _upadte_ref=doc(db,"products",editData.id);
            await setDoc(_upadte_ref,editData);
            GetProductsData();
            toast.success("update product successfull", {
                position: toast.POSITION.TOP_CENTER,
                hideProgressBar: true
            });
        }
        catch (err) {
            alert(err);
        }
    }

    const DeleteProduct = async (id) => {
        console.log("delete fun start..");
        alert(id);
        try {
            const _delete_ref = doc(db, "products", id);
            await deleteDoc(_delete_ref);
            GetProductsData();
            toast.success("delete product successfull", {
                position: toast.POSITION.TOP_CENTER,
                hideProgressBar: true
            });
        }
        catch (err) {
            alert(err);
        }
    }

    useEffect(() => {
        GetProductsData();
        return () => GetProductsData();
    }, []);

    return (
        <MyContext.Provider value={{ mode, toggleMode, loading, setLoading, AddProduct, GetProductsData, 
            allProducts, DeleteProduct, UpdateProduct,EditableProduct,editData,setEditData}}>
            {children}
        </MyContext.Provider>
    )
}

export default MyState;