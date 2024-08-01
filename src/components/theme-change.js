"use client"

import { useEffect } from 'react'
import { themeChange } from 'theme-change'
import styles from './theme-change.module.scss'

const ThemeChange = () => {
  useEffect(() => {
    const theme = window.localStorage.getItem('theme')
    if (!theme) window.localStorage.setItem('theme', 'light')
    themeChange(false)
  }, [])

  return (
    <div className={styles['theme-change']}>
      <button data-set-theme='dark' data-act-class='theme-active'>
        ☽
      </button>
      <button data-set-theme='light' data-act-class='theme-active'>
        ☼
      </button>
    </div>
  )
}

export default ThemeChange
