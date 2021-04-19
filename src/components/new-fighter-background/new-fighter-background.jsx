import React from 'react'
import styles from './new-fighter-background.css'

const ASSETS_FOLDER = 'new-fighter-background'

const newFighterData = {
  background: { backgroundImage: `url(${require(`../../assets/${ASSETS_FOLDER}/hero_new18_bg_pc.png`)})` },
  text: { content: require(`../../assets/${ASSETS_FOLDER}/hero_new_txt_pc.png`) },
  name: { content: require(`../../assets/${ASSETS_FOLDER}/hero_new18_txt_pc_en.png`) },
  img: { content: require(`../../assets/${ASSETS_FOLDER}/hero_new18_img_pc.webp`) },
}

const NewFighterBackground = () => {
  return (
    <div className={styles.container} style={newFighterData.background}>
      <div className={styles.title}>
        <img src={newFighterData.text.content} />
        <img src={newFighterData.text.content} />
        <img src={newFighterData.text.content} />
      </div>
      <div className={styles['new-fighter-name']}>
        <img src={newFighterData.name.content} />
        <img src={newFighterData.name.content} />
        <img src={newFighterData.name.content} />
      </div>
      <img className={styles['new-fighter-image']} src={newFighterData.img.content}/>
    </div>
  )
}

export default NewFighterBackground
