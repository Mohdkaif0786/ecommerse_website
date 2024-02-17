import React, { useContext } from 'react'
import Layout from '../../components/layout/layout'
import { MyContext } from '../../context/data/mycontext';
import HeroSection from '../../components/heroSection/herosection';
import Filter from '../../components/filter/filter';
import ProductCard from '../../components/ProductCard/ProductCard';
import Track from '../../components/track/track';
import Testomonial from '../../components/testomonial/testomonial';
import { useDispatch,useSelector } from 'react-redux';
import { addtoCart,deleteCart } from '../../redux/createSlice';
const Home = () => {

  return (
    <div className='home'>
      <Layout>
        <HeroSection />
        <Filter />
        <ProductCard />
        <Track />
        <Testomonial />
      </Layout>
    </div>
  )
}

export default Home