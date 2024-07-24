import React from 'react'
import '../style/Footer.css'
import ico from '../assets/iconhf.PNG'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='wrapperFooter'>

                <div className='socialMedias'>
                    <h5 className='bold'>Mídias Sociais</h5>
                    <div>
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-x-twitter"></i>
                        <i class="fa-brands fa-instagram"></i>
                    </div>
                </div>

                <div className='separator'></div>
                <div className='address'>

                    <p className='bold'>Endereço</p>
                    <p>Avenida 9 de Julho - nº134</p>
                    <p>Cep, 12345-123</p>
                    <p>São Paulo - SP</p>
                </div>

                <div className='separator'></div>
                
                <div className='slogan'>
                    <img className='sloganImg' src={ico} alt='logo icon'/>
                    <p>Orientação financeira<br /> personalizada para<br/> suas metas.</p>
                </div>
            </div>



        </div>
    )
}

export default Footer