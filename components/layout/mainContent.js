import styles from './mainContent.module.scss'

export default function MainContent({ children }) {
  
  return (
    <main className={styles.mainContent}>
      {children}
    </main>
  )
}