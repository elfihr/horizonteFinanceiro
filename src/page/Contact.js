import React from 'react'
import '../style/Contact.css'

const Contact = () => {
    return (
        <div className='contact' id='contato'>
            <h3>Entre em Contato</h3>
            <div>
                <div className='contactInfo'><i class="fa-solid fa-envelope"></i>&nbsp;horizontefinanceiro@hfcontato.com</div>
                <div className='contactInfo'><i class="fa-solid fa-phone"></i>&nbsp;+55 21 2653-XXXX</div>
            </div>
            <div className='whatsapp'><i class="fa-brands fa-whatsapp"></i>&nbsp;Fale conosco Agora</div>

        </div>
    )
}

export default Contact