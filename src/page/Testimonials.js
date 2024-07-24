import React from 'react'
import '../style/Testimonials.css'
import { testimonials } from '../helper/helper'

const Testimonials = () => {
    return (
        <div className='testimonials' id='testimonials'>
            <h3>Depoimentos</h3>
            <div className='testimonialsWrapper'>
                {testimonials.map((clients, index) => {
                    return (
                        <div key={index} className='testimonialsContainer'>
                            <p className='description'>{clients.description}</p>
                            <h4 className='name'>{clients.name}</h4>
                            <h5>{clients.local}</h5>
                        </div>
                    )
                })}

            </div>
        </div>

    )
}

export default Testimonials