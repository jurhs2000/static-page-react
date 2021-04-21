import React, { useState, useEffect } from 'react'
import styles from './display-fighters.css'
import FIGHTERS from '../../assets/fighters/fighters.json'
import SERIES from '../../assets/fighters/series.json'
import FighterIdCard from '../fighter-id-card/fighter-id-card'

const SPB_LOGO = 'M30.135 75.965V63.59h-9.792a32.416 32.416 0 0 0 9.792 12.375zM17.66 51a30.746 30.746 0 0 0 .651 6.291h11.824V26.034A31.528 31.528 0 0 0 17.66 51zm28.953 31.869a35.772 35.772 0 0 0 4.116.252A33.691 33.691 0 0 0 81.657 63.59H46.613zm4.116-63.99a35.773 35.773 0 0 0-4.116.251v38.161H83.69A30.816 30.816 0 0 0 84.34 51c0-17.738-15.05-32.121-33.611-32.121z'
const SORT_ARROW = 'M100 158.634L23.123 82.619V47.007l31.485.005v19.292L82.21 93.57 82.2 2.5h35.7v91.07l27.6-27.27.015-19.3H177v35.619zm77 38.866H23v-26h154z'
const LINK_ARROW = 'M131.628 0H100.35v20.859l16.947.012 34.5 34.845H1.5V80.3h150.3l-34.5 34.839h-16.948v20.858h31.278L198.4 68z'
const DISPLAY_SERIES = 'M241.2 352h-79.1v-71.6h42.8l60.5-62.8h-202V352H0V2h63.4v134.4h202.1L205 73.6h-42.8V2h79.1L410 177 241.2 352z'

const DisplayFighters = () => {
  const [order, setOrder] = useState(true)
  const [fighters, setFighters] = useState(FIGHTERS.fighters)

  const changeOrder = () => {
    setOrder(old => !old)
  }

  useEffect(() => {
    setFighters(oldData => oldData.reverse())
  }, [order])

  return (
    <section className={styles.container}>
    <div className={styles.header}>
        <svg>
          <path d={SPB_LOGO} />
        </svg>
        <p>Display Fighters by Number</p>
        <div className={styles.order}>
          <div>
            <svg>
              <path d={SORT_ARROW} className={(!order) ? styles.reverse : ''} />
            </svg>
          </div>
          <button onClick={changeOrder}>Change Order</button>
        </div>
        <div className={styles.space} />
        <div className={styles.link}>
          <div>
            <svg>
              <path d={LINK_ARROW} />
            </svg>
            <p>Display by Series</p>
          </div>
        </div>
      </div>
    <div className={styles.grid}>
      {
        fighters.filter(fighter => fighter.dlc !== 1).map(fighter => (
          <FighterIdCard
            key={fighter.id}
            displayNum={fighter.displayNum}
            displayName={fighter.displayName.en_US}
            file={fighter.file}
            color={fighter.color}
            series={SERIES[fighter.series]}
            dlc={false}
          />
        ))
      }
    </div>
    <div className={styles['display-series']}>
      <div>
        <svg>
          <path d={DISPLAY_SERIES} />
        </svg>
        <p>Display by Series</p>
      </div>
    </div>
    </section>
  )
}

export default DisplayFighters
