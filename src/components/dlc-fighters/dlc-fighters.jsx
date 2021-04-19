import React from 'react'
import styles from './dlc-fighters.css'
import FIGHTERS from '../../assets/fighters/fighters.json'
import SERIES from '../../assets/fighters/series.json'
import FighterIdCard from '../fighter-id-card/fighter-id-card'

const QUESTION_MARK = 'M39.93 85h15V71.71h-15zm10.19-72C24.51 13 19.91 28.4 20 41.72h16.8c0-9.44 3.28-14.21 13-14.21 7.41 0 9.86 4 9.86 7.63 0 5.33-5.62 8.28-9.78 11C43.36 50.48 40 56.18 40 65.9h15.09c0-5.54 1.31-8.23 5.45-10.26C67.63 51.3 77 47.93 77 34.32 77 24.73 69.83 13 50.12 13z'
const DLC_TITLE = 'M.31 1.27v53.46h16.54c13.25 0 20.46-10.65 20.46-26.73S30.1 1.27 16.85 1.27zm16.24 11.07c6.07 0 8.39 6 8.39 15.66s-2.32 15.66-8.39 15.66h-4.21V12.34zm54.29 31.28H53.49V1.27h-12v53.46h29.35zM92.45.47c-12.1 0-19.5 9.7-19.5 27.53s7.4 27.53 19.51 27.53c7.93 0 13.59-4.31 16.47-11.88l-10-5.23c-1.48 3.63-3.53 5.35-6.41 5.35-4.14 0-7.14-4.43-7.17-15.77 0-10.92 2.73-15.77 7.17-15.77 2.92 0 4.93 1.72 6.3 5.38l10.36-4.81C106.42 4.86 100.35.47 92.45.47zm58.2 22.22h-15.22v-10.5h16.66V1.27H123.4v53.46h12V33.61h15.22zm17.51-21.42h-12v53.46h12zm24.02-.8C179.8.47 172.33 10 172.33 28c0 18.33 7.7 27.53 20 27.53 9.6 0 18.33-7.48 18.33-24.93 0-2.29-.08-4.43-.23-6h-18.78v10.08h7.48c-.83 7.06-3.3 9.36-7.06 9.36-4.21 0-7.44-4-7.44-16 0-11.49 2.69-15.88 7.25-15.88 2.92 0 4.78 1.45 6.15 4.35l9.53-5.88C204.78 4.1 199.58.47 192.18.47zm34.29.8h-12v53.46h12V33.27h12.18v21.46h12V1.27h-12V22.2h-12.18zm60.43 0h-33.21v11.11h10.63v42.35h12V12.38h10.58zm32.21 42.54H302V33.19h16V22.27h-16V12.19h17.3V1.27H290v53.46h29.15zm21.12-42.54h-16.4v53.46h12V34.91h.34l9 19.82h13.59l-10.83-21.08c6.26-2.37 9.87-7.83 9.87-15.16 0-10.49-6.72-17.22-17.57-17.22zm0 11.07c2.81 0 5.28 1.95 5.28 6.15s-2.47 6.19-5.28 6.19h-4.4V12.34zm55.35-5.26c-5-4.7-10.13-6.61-16.24-6.61-10.48 0-17.15 6.8-17.15 16 0 7.18 3.57 13.86 13.44 17.26l3 1.07c3.15 1.07 4.36 2.79 4.36 5 0 2.6-2 4.35-5 4.35-4.14 0-6.95-2.06-9.15-4.62l-8 8.17c3.91 4.77 9.56 7.9 17.31 7.9 10.06 0 17.53-6.15 17.53-16.72 0-7.33-3.8-12.72-12.52-15.88l-2.77-1c-3.68-1.34-5.73-3.09-5.73-5.65s2-4.31 4.93-4.31a12.06 12.06 0 0 1 8.65 3.74z'
const ARROW = 'M16.854 2.988h-6.159v5.526l3.337.003 4.716 4.845H2.997v6.266l15.752-.001-4.716 4.844-3.337.001-.001 5.527h6.159l13.147-13.505L16.854 2.988z'

const DlcFighters = () => {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <svg>
          <path d={DLC_TITLE} />
        </svg>
        <div className={styles.space} />
        <div className={styles.link}>
          <div>
            <span>About</span>
            <p>DLC</p>
          </div>
          <div>
            <svg>
              <path d={ARROW} />
            </svg>
          </div>
        </div>
      </div>
      <div className={styles.grid}>
        {
          FIGHTERS.fighters.filter(fighter => fighter.dlc === 1).map(fighter => (
            <FighterIdCard
              key={fighter.id}
              displayNum={fighter.displayNum}
              displayName={fighter.displayName.en_US}
              file={fighter.file}
              color={fighter.color}
              series={SERIES[fighter.series]}
              dlc={true}
            />
          ))
        }
        {
          [...Array(2)].map((x, i) =>
            <div key={i} className={styles['free-space']}>
              <svg>
                <path d={QUESTION_MARK} />
              </svg>
            </div>
          )
        }
      </div>
    </section>
  )
}

export default DlcFighters
