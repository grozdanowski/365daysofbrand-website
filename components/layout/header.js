import Link from 'next/link'
import { useState, useEffect } from 'react'
import classnames from 'classnames'
import globalUtils from 'styles/globalUtils.module.scss'
import styles from './header.module.scss'

const scrollOffsetTreshold = 100;

export default function Header({ contactIconTarget = '/kontant', slideoutActive = false, slideoutAnimate = false, triggerSlideoutMenu = () => console.log('slideout triggered') }) {

  const [scrolled, setScrolled] = useState(false);
  const [scrollAnimate, setScrollAnimate] = useState(false);
  
  const handleScroll = () => {
    
    const offset = window.scrollY;

    if (offset > scrollOffsetTreshold) {
      setScrolled(true);
      setTimeout(setScrollAnimate, 300, true);
    } else {
      setScrolled(false);
      setScrollAnimate(false);
    }

  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  })

  return (
    <div
      className={
        classnames(
          globalUtils.container,
          styles.headerWrapper,
          styles[(scrolled || slideoutActive) ? 'scrolled' : 'notScrolled'],
          styles[(scrollAnimate || slideoutAnimate) ? 'scrolledAnimate' : 'notScrolled'],
        )
      }
    >
      <div className={styles.leftColumn}>
        <button
          className={
            classnames(
              styles.menuTrigger,
              styles[( slideoutActive) ? 'active' : 'notActive'],
              styles[(scrolled || slideoutActive) ? 'scrolled' : 'notScrolled'],
              styles[(scrollAnimate || slideoutAnimate) ? 'scrolledAnimate' : 'notScrolled'],
            )
          }
          onClick={() => triggerSlideoutMenu()}
        >
          <div className={styles.buttonInnerContainer}>
            <span className={styles.hamburgerLineOne} />
            <span className={styles.hamburgerLineTwo} />
            <span className={styles.hamburgerLineThree} />
          </div>
        </button>
      </div>
      <div className={styles.midColumn}>
        <Link href='/'>
          <a className={styles.logoLink}>
            <img className={styles.headerLogo} src='/brand_assets/365-dana-brenda--logo.svg' alt='365 Dana Branda' />
          </a>
        </Link>
      </div>
      <div className={styles.rightColumn}>
        <Link href="/kontakt">
          <a className={styles.contactLink}>
            <img className={styles.contactIcon} src='/icons/contact-icon.svg' alt='Kontaktiraj nas' />
          </a>
        </Link>
      </div>
    </div>
  )  
}