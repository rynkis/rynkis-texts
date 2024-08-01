"use client"

import { useEffect, useState } from 'react'
import styles from './the-editor.module.scss'

const SAVE_KEY = 'texts'
const template = `hello`

const TheEditor = ({ value, onChange }) => {
  const [rendered, setRendered] = useState(false)
  const [texts, setTexts] = useState('')

  const handleInputChange = evt => {
    setTexts(evt.target.value)
  }

  const saveTexts = () => {
    window.localStorage.setItem(SAVE_KEY, texts)
    console.log('saved')
  }

  window.addEventListener('keydown', e => {
    if (e.ctrlKey && e.keyCode === 83) {
      saveTexts()
      e.preventDefault()
      return false
    }
  })

  window.addEventListener('unload', saveTexts)

  useEffect(() => {
    if (rendered) return
    setRendered(true)
    const data = window.localStorage.getItem(SAVE_KEY)
    setTexts(data || template)
  }, [rendered])

  return (
    <textarea
      className={styles.editor}
      value={texts}
      onChange={handleInputChange}
    />
  )
}

export default TheEditor
