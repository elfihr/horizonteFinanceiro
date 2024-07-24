import React from 'react'
import '../style/Number.css'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'
import { contador } from '../helper/helper'
import result from '../assets/results.jpg'

const Number = () => {

  return (
    <div className='number' id='resultado'>
      <h3>Resultados</h3>
      <p>Nos ja ajudamos mais de 10 mil pessoas em situação de instabilidade financeira como nossas estrategias personalizadas</p>
      <div className='counterContainer'>
        {contador.map((count, index) => {
          return (
            <div className='counter' key={index}>
              <div className='count'>
                <CountUp end={count.end} redraw={true}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
                <p>{count.mil}</p>
              </div>
              <p className='countLabel'>{count.label}</p>
            </div>

          )
        })}
      </div>
      <img className='resultImg' src={result} alt='resultados'/>
    </div>
  )
}

export default Number