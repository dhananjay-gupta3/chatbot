import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'
const Home = () => {
  const navigated= useNavigate();
  return (
    <div className='text'>
      <div className='meet'>
        Meet the

        Visual Builder
        <div className='small'>The fastest way
          to create AI chatbots on
          your own terms and without
          coding.
          <div>

            <input className='inputed'
              
              placeholder='Enter your business email'
              type='email' />
            <button
            onClick={()=>navigated('/login')}
            className='sign'>Sign up free</button>
          </div>

        </div>
        <div className='free'>✔  Free 14-day trial  free


          <p> ✔ No credit card required</p>
        </div>
        <img className='imgs' src='https://www.chatbot.com/features/visual-builder/hero-dust-left_hu81b47de84fd7f65538f15cd5bd4c2f65_1062_360x0_resize_lanczos_2.png'
          alt='' />
      </div>

      <video className='video' src='https://www.chatbot.com/features/visual-builder/hero.3241e6132361846be5d6e6626faf2e710bce0c946da4964070598de9d62b8641.mp4' />

    </div>
  )
}

export default Home