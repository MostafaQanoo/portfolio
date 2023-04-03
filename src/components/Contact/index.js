import React, { useEffect, useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  // const sendEmail = (e) => {
  //   e.preventDefault()
  //   emailjs
  //     .sendForm(
  //       'service_17nrh0j',
  //       'template_axq3h3n',
  //       form.current,
  //       'vd_pA3QA5hh_Pp_xH'
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result)
  //         alert('Email sent successfully')
  //         window.location.reload(false)
  //       },
  //       (error) => {
  //         console.log(error)
  //         alert('Email not sent ,Please try again')
  //       }
  //     )
  // }
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance or companies opportunities - especially ambitious or
            large projects. However, if you have other request or question,
            don't hesitate to contact me using below form either.
          </p>

          {/* <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="subject"
                    required
                  />
                </li>

                <li>
                  <textarea
                    name="message"
                    placeholder="Message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div> */}
        </div>

        <div className="info-map">
          Mostafa Qanoo
          <br />
          Palestine,Gaza
          <br />
          <span>mostafaqanoo403@gmail.com</span>
        </div>

        <div className="map-wrap">
          <MapContainer center={[31.515491, 34.448509]} zoom={13}>
            <TileLayer 
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[31.485891, 34.465209]}>
              <Popup>
               My Country<br />
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}
export default Contact
