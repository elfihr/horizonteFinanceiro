import React from 'react'
import '../style/Hero.css'
import heroImg from '../assets/hero01.png'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='imgContainer'>
                <img className='heroimg' src={heroImg} alt='imagem hero' />
                <p>Soluções inteligentes<br/> para o seu futuro financeiro.</p>
            </div>
            <p className='heroIntro'>Horizonte Financeiro oferece<br/> serviços de suporte personalizado<br/>  para pessoas que enfrentam<br/> desafios financeiros.</p>

        </div>
    )
}

export default Hero