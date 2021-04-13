import React from 'react'
import styles from './fighters-background.css'

const bgs = [
  'hero_a_pc',
  'hero_b_pc',
  'hero_c_pc_en',
  'hero_d_pc',
  'hero_e_pc',
  'hero_f_pc',
  'hero_g_pc',
  'hero_h_pc',
  'hero_i_pc',
  'hero_j_pc',
  'hero_k_pc_en',
  'hero_l_pc',
  'hero_m_pc',
  'hero_n_pc',
  'hero_o_pc',
]

const FightersBackground = () => {
  return (
    <div className={styles.container}>
      {
        bgs.map((imgName, index) => (
          <img key={index} src={require(`../../assets/fighters-background/${imgName}.webp`)} />
        ))
      }
    </div>
  )
}

export default FightersBackground
