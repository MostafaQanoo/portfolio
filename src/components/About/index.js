import React, { useEffect, useState } from 'react'
import {RiHtml5Fill,RiCss3Fill,RiReactjsFill} from'react-icons/ri';
import {TbBrandJavascript} from 'react-icons/tb'
import {BsFillBootstrapFill} from 'react-icons/bs'
import {DiNodejs} from 'react-icons/di';
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Loader from 'react-loaders';
const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')


  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])


  return (
    <>
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1>
        <p>
          I am a Full-stack web developer and mostly I am passionate on web
          coding. I am an expert on web programming and the developing world.
        </p>
        <p>
          I can see myself in a top-ranking position in the web developing
          market. True that this market is growing higher day by day. But my
          skills are also growing as I am a very keen learning and technology
          lover person. That’s why I find this sector very interesting and
          always work with my full enthusiasm.
        </p>
        <p>
          I believe I would be the best person in this project, and I am waiting
          for a positive response from you very soon. I am active on the
          internet
        </p>
      </div>

      <div className='stage-cube-cont'>
          <div className='cubespinner'>
              <div className='face1'>
                  <RiHtml5Fill color='#f06529'/>
              </div>
              <div className='face2'>
                  <RiCss3Fill color='#28a4d9'/>
              </div>
              <div className='face3'>
                  <TbBrandJavascript color='#efd81d'/>
              </div>
              <div className='face4'>
                  <RiReactjsFill color='#5ed4f4'/>
              </div>
              <div className='face5'>
                  <BsFillBootstrapFill color='#7952B3'/>
              </div>
              <div className='face6'>
                  <DiNodejs color='#333333'/>
              </div>

          </div>

      </div>
    </div>
    <Loader type='pacman'/>
    </>
  )
}

export default About
