import React from 'react'

export default function Footer({price}) {
  return (
    <div className='row '>
    <div className='footer d-flex justify-content-between mt-4'>
        <h3>total : </h3>
        <h3>${price}</h3>
    </div>        
</div>
  )
}
