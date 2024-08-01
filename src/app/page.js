import dynamic from 'next/dynamic'
import styles from './page.module.scss'

const TheEditor = dynamic(() => import('@/components/the-editor'), {
  ssr: false,
})

export default function Home() {
  return (
    <div className={styles['editor-container']}>
      <TheEditor />
    </div>
  )
}
