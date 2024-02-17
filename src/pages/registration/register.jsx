import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import Loader from '../../components/loader/loader';
import { MyContext } from '../../context/data/mycontext';
import { auth } from '../../firebase/firebaseConfig';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { db } from '../../firebase/firebaseConfig';
import { collection, addDoc, Timestamp } from "firebase/firestore"; 
const register = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigat = useNavigate();
  const context = useContext(MyContext);
  const { loading, setLoading } = context;
  const signup = async () => {
    if (name === "" || email === "" || password === "") {
      return toast.error("all filed mendeotery");
    }
    try {
      setLoading(true);
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
      const reg_data = {
        name: name,
        uid: user.user.uid,
        email: user.user.email,
        time:Timestamp.now()
      }
      const user_ref =collection(db,"users");
      await addDoc(user_ref,reg_data); 
       setName("");
       setPassword("");
       setEmail("");
      toast.success("succesfful register");
      //  navigat("/login");
      setLoading(false);
    }
    catch (err) { 
      alert(`error:${err}`);
      setLoading(false);
    }
  }
  

  return (
    <div>
      <div className=' flex justify-center items-center h-screen'>
        {loading && <Loader />}
        <div className=' bg-gray-800 px-10 py-10 rounded-xl '>
          <div className="">
            <h1 className='text-center text-white text-xl mb-4 font-bold'>Signup</h1>
          </div>
          <div>
            <input type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name='name'
              className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
              placeholder='Name'
            />
          </div>

          <div>
            <input type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name='email'
              className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
              placeholder='Email'
            />
          </div>
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
              placeholder='Password'
            />
          </div>
          <div className=' flex justify-center mb-3'>
            <button
              onClick={signup}
              className=' bg-red-500 w-full text-white font-bold  px-2 py-2 rounded-lg'>
              Signup
            </button>
          </div>
          <div>
            <h2 className='text-white'>Have an account <Link className=' text-red-500 font-bold' to={'/login'}>Login</Link></h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default register