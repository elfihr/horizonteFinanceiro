import React from 'react'
import '../style/Services.css'
import service from '../assets/service.jpg'

const Services = () => {
    return (
        <div className='service' id='services'>
            
            <div className='wrapper'>
                <h4>Nossos Serviços</h4>
                <div className='servicetips'>
                    <p>Mentoria Financeira</p><p>Aconselhamento</p>
                </div>
                
                <p className='serviceDescription'>Entendemos que cada pessoa tem uma jornada financeira única. É por isso que

                <br/> oferecemos um serviço de mentoria financeira personalizado, projetado

                <br/>  para ajudar você a alcançar seus objetivos financeiros de forma eficaz e segura.

                </p>
            </div>
            <img className='serviceImg' src={service} alt='pessoas no mercado' />

        </div>
    )
}

export default Services