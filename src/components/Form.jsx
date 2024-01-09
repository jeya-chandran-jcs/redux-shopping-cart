import React, { useState } from 'react'
import Footer from './Footer'
import axios from 'axios'
import { API } from '../Global'
import { useDispatch, useSelector } from 'react-redux'
import { addtotal,removeItem } from './redux/Slice'

export default function Form({item,getdata,index}) {
  
    const selector=useSelector(state=>state.mycapture)

    const handleDelete=(id)=>{
        // console.log(id)
        dispatch(removeItem(id))
    }
    const dispatch=useDispatch()
    const handleChange=(e)=>{
        dispatch(addtotal({index,value:e.target.value}))
        
    }
    
    const mytotal=item.count*item.price

    // const handleChange=(e)=>{
    //     settotal(e.target.value*item.price)
        
    // }
  return (
    <div className='container my-3  border border-dark'>
        
           <>
        <div className="row border-bottm  mb-3 border-bottom border-dark">
            {/* <div className='col-lg-10 col-md-6 col-sm-4'> */}
            <div className='col-lg-4 p-3'>
                <div className='product-thumbnail'>
                    <img className='image img-fluid' src={item.thumbnail} alt={item.title}/>
                </div>
            </div>
            {/* <div className='col-lg-10 col-md-6 col-sm-4'> */}
            <div className='col-lg-6 border-start border-end border-dark  '>
                <h2 className='title'>{item.title}</h2>
                <h3 className="brand">{item.brand}</h3>
                <p className='description'>{item.description}</p>
                <h4 className='brand'>{item.brand}</h4>
            </div>
            {/* <div className='col-lg-10 col-md-6 col-sm-4'> */}
            <div className='col-lg-2 d-flex flex-column justify-content-between'>
                <div className='item-selection mb-3'>
                    <select className='form-select-sm mb-3' aria-label="select quantity" onChange={handleChange} >
                        
                    {[0,1,2,3,4,5].map((count,index)=>(
                        <option key={index}>{count}</option>
                    ))}
                    </select>
                    <span className='span'><b>${mytotal}</b></span>
                </div>
                <div className='remove'>
                    <button className='btn btn-danger' onClick={()=>handleDelete(item.id)}>Remove</button>
                </div>
            </div>
            
        </div>
        <div className=' d-flex justify-content-between border-bottom border-dark'>
            <div className=''>
                <h4>SubTotal : </h4>
                <h4>shipping :</h4>
            </div>
            <div className=''>
                <h4>${mytotal}</h4>
                <h4>Free</h4>
            </div>
        </div>
        
        <Footer price={mytotal}/>
        </>
       {/* <p>{item.count*item.price}</p> */}
        
    </div>
  )
}
