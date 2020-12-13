import Link from 'next/link'
import styles from './footer.module.scss'

const footerMenuItems = [
  {
    label: 'Naslovna',
    target: '/'
  },
  {
    label: 'O nama',
    target: '/o-nama'
  },
  {
    label: 'Kontakt',
    target: '/kontakt'
  },
  {
    label: 'Zaštita privatnosti',
    target: '/zastita-privatnosti',
  },
  {
    label: 'Uvjeti korištenja',
    target: '/uvjeti-koristenja',
  }
]

export default function Footer({ menuItems = footerMenuItems }) {
  
  const currentTime = new Date()

  return (
    <footer className={styles.footerWrapper}>
      <Link href='/'>
        <a className={styles.logoLink}>
          <img src='/brand_assets/365-dana-brenda--logo--negative.svg' alt='365 Dana Branda' />
        </a>
      </Link>
      <span className={styles.subsidiaryIndicator}>
        <img src='/brand_assets/modulos--subsidiary-marker--negative.svg' role='decoration' />
      </span>
      <nav className={styles.footerMenu}>
        {menuItems.map((item, index) => (
          <Link
            href={item.target}
            key={`footerLink-${index}`}
          >
            <a className={styles.footerMenuItem}>
              {item.label}
            </a>
          </Link>
        ))}
      </nav>
      <span className={styles.copyright}>
        ©{currentTime.getFullYear()} 365 dana branda
      </span>
    </footer>
  )
}