import React, { useState, useEffect } from 'react'
import NewFighterBackground from '../new-fighter-background/new-fighter-background'
import styles from './fighters-background.css'

const ASSETS_FOLDER = 'fighters-background'

const BGS = [
  'hero_a_pc.webp',
  'hero_b_pc.webp',
  'hero_c_pc_en.webp',
  'hero_d_pc.webp',
  'hero_e_pc.webp',
  'hero_f_pc.webp',
  'hero_g_pc.webp',
  'hero_h_pc.webp',
  'hero_i_pc.webp',
  'hero_j_pc.webp',
  'hero_k_pc_en.webp',
  'hero_l_pc.webp',
  'hero_m_pc.webp',
  'hero_n_pc.webp',
  'hero_o_pc.webp',
]

const TITLE = { backgroundImage: `url(${require(`../../assets/${ASSETS_FOLDER}/hero_title01_en_pc.png`)})` }

const IMG_TIME_ON = 5000

const FightersBackground = () => {
  const [actualBg, setActualBg] = useState(-1)
  const [first, setFirst] = useState(true)
  const [scroll, setScroll] = useState(window.scrollY)

  useEffect(() => {
    setTimeout(() => {
      setInterval(() => {
        setActualBg(old => ((old + 1) === BGS.length) ? -1 : old + 1)
      }, IMG_TIME_ON)
    }, IMG_TIME_ON)
    setTimeout(() => {
      setFirst(false)
    }, IMG_TIME_ON * BGS.length)
  }, [])

  window.onscroll = () => {
    setScroll(window.scrollY)
  }

  return (
    <div className={styles.container} style={{ transform: `translateY(${scroll * 0.5}px)` }}>
      <NewFighterBackground />
      <div className={styles.title} style={TITLE} />
      {
        BGS.map((imgName, index) => (
          ((index === actualBg || index === (actualBg - 1) || (!first && (actualBg === -1) && (index === BGS.length - 1))) &&
          <img
            key={index}
            src={require(`../../assets/${ASSETS_FOLDER}/${imgName}`)}
            className={(actualBg === index) ? styles.appear : ((!first && (actualBg === -1) && (index === BGS.length - 1)) ? styles.last : (index === actualBg - 1) ? '' : styles.none)}
          />)
        ))
      }
    </div>
  )
}

export default FightersBackground
