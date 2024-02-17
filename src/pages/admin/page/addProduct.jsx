import React, { useContext, useState, useEffect } from 'react'
import { MyContext } from '../../../context/data/mycontext'
import { Timestamp } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
const initial = {
    title: "",
    price: "",
    imageUrl: "",
    category: "",
    description: "",
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-IN", {
        month: "short",
        day: "2-digit",
        year: "numeric"
    })
}

function AddProduct() {
    const navigat = useNavigate();
    const context = useContext(MyContext);
    const [data, setData] = useState(initial);
    const { AddProduct, GetProductsData } = context;
    console.log(context.allProducts);
    const addProduct = () => {
        AddProduct(data);
        setData(initial);
        navigat("/dashboard");
    }
    return (
        <div>
            <div className=' flex justify-center items-center h-screen'>
                <div className=' bg-gray-800 px-10 py-10 rounded-xl '>
                    <div className="">
                        <h1 className='text-center text-white text-xl mb-4 font-bold'>Add Product</h1>
                    </div>
                    <div>
                        <input type="text"
                            name='title'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product title'
                            value={data.title}
                            onChange={(e) => setData({ ...data, title: e.target.value })}

                        />
                    </div>
                    <div>
                        <input type="text"
                            name='price'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product price'
                            value={data.price}
                            onChange={(e) => setData({ ...data, price: e.target.value })}
                        />
                    </div>
                    <div>
                        <input type="text"
                            name='imageurl'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product imageUrl'
                            value={data.imageUrl}
                            onChange={(e) => setData({ ...data, imageUrl: e.target.value })}
                        />
                    </div>
                    <div>
                        <input type="text"
                            ssname='category'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product category'
                            value={data.category}
                            onChange={(e) => setData({ ...data, category: e.target.value })}
                        />
                    </div>
                    <div>
                        <textarea cols="30" rows="4" name='title'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product description'
                            value={data.description}
                            onChange={(e) => setData({ ...data, description: e.target.value })} />
                    </div>
                    <div className=' flex justify-center mb-3'>
                        <button onClick={addProduct}
                            className=' bg-yellow-500 w-full text-black font-bold  px-2 py-2 rounded-lg'>
                            Add Product
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AddProduct