import { useState } from 'react'
import styles from './siteWrapper.module.scss'
import Header from 'components/layout/header'
import Footer from 'components/layout/footer'
import SlideoutMenu from 'components/layout/slideoutMenu'

export default function SiteWrapper({ children }) {

  const [slideMenuOpen, setSlideMenuOpen] = useState(false);
  const [slideMenuTriggerAnimate, setSlideMenuTriggerAnimate] = useState(false);
  
  const handleTriggerChange = (value) => {

    setSlideMenuOpen(value);
    setTimeout(setSlideMenuTriggerAnimate, 300, value);

  }

  return (
    <div className={styles.siteWrapper}>
      <Header slideoutActive={slideMenuOpen} slideoutAnimate={slideMenuTriggerAnimate} triggerSlideoutMenu={() => handleTriggerChange(!slideMenuOpen)} />
      <SlideoutMenu menuVisible={slideMenuOpen} slideoutAnimate={slideMenuTriggerAnimate} closeSlideoutMenu={() => handleTriggerChange(false)} />
      {children}
      <Footer />
    </div>
  )
}