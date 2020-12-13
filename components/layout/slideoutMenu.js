import Link from 'next/link'
import styles from './slideoutMenu.module.scss'
import classnames from 'classnames'

const dropdownMenuItems = [
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
]

export default function SlideoutMenu({ menuVisible = false, slideoutAnimate = false, menuItems = dropdownMenuItems }) {
  
  return (
    <div
      className={
        classnames(
          styles.menuWrapper,
          styles[menuVisible ? 'visible' : 'hidden'],
        )
      }
    >
      {menuVisible && (
        <nav
          className={
            classnames(
              styles.menuContainer,
              styles[menuVisible ? 'visible' : 'hidden'],
              styles[slideoutAnimate ? 'animateVisible' : 'hidden'],
            )
          }
        >
          {menuItems.map((item, index) => (
            <Link href={item.target}>
              <a className={styles.menuItem}>
                <span className={styles.menuItemLabel}>
                  {item.label}
                </span>
              </a>
            </Link>
          ))}  
        </nav>
      )}
    </div>
  )
}