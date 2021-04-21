import React, { useState, useEffect } from 'react'
import styles from './bottom-bar.css'

const ASSETS_FOLDER = 'bottom-bar'

const SHOP_ICON = [
  { type: 'path', d: 'M75.82 19.68a.67.67 0 0 0-.49-.21H20.88l-1.45-7.55a2.84 2.84 0 0 0-2.75-2.14H4.84a2.84 2.84 0 0 0 0 5.67h9.65l1.21 5.68 6.22 32.22a.67.67 0 0 0 .65.52h48.51a.67.67 0 0 0 .67-.62L76 20.19a.67.67 0 0 0-.18-.51zM35.07 41.91a2.14 2.14 0 0 1-4.28 0v-14.1a2.14 2.14 0 0 1 4.28 0zm9.25 0a2.14 2.14 0 0 1-4.28 0v-14.1a2.14 2.14 0 0 1 4.28 0zm9.25 0a2.14 2.14 0 0 1-4.28 0v-14.1a2.14 2.14 0 0 1 4.28 0zm9.25 0a2.14 2.14 0 0 1-4.28 0v-14.1a2.14 2.14 0 0 1 4.28 0z' },
  { type: 'circle', cx: '59.8', cy: '62.68', r: '5.54' },
  { type: 'circle', cx: '32.92', cy: '62.68', r: '5.54' },
]

const BottomBar = () => {
  const [isSticked, setIsSticked] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver((records, observer) => {
      setIsSticked(records[0].isIntersecting)
    }, {
      root: null,
      rootMargin: `${document.getElementsByTagName('footer')[0].clientHeight}px`,
      threshold: 1.0,
    })
    observer.observe(document.getElementsByTagName('footer')[0])
  }, [])

  return (
    <div className={styles.container} >
      <div className={`${styles.logo} ${(isSticked) ? styles['logo-cover'] : ''}`}>
        <img src={require(`../../assets/${ASSETS_FOLDER}/bottom_logo_en.webp`)} />
      </div>
      <div className={styles.center} />
      <div className={styles.menus}>
        <div className={`${styles.buy} ${(isSticked) ? styles.cover : ''}`}>
          <svg>
            {
              SHOP_ICON.map((figure, index) => (figure.type === 'path') ? <path key={index} d={figure.d} /> : <circle key={index} cx={figure.cx} cy={figure.cy} r={figure.r} />)
            }
          </svg>
          <p>Buy Now</p>
        </div>
        <div className={`${styles.menu} ${(isSticked) ? styles.cover : ''}`}>
          <div className={styles['menu-icon']} />
          <p>MENU</p>
        </div>
      </div>
    </div>
  )
}

export default BottomBar
