import Head from 'next/head'
import MainContent from 'components/layout/mainContent'
import classnames from 'classnames'
import globalUtils from 'styles/globalUtils.module.scss'
import styles from './kontakt.module.scss'


export default function Contact() {
  return (
    <MainContent>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section
        className={
          classnames(
            globalUtils.containerWide,
            styles.contactHero,
          )
        }
      >
        <span />
        <div className={styles.contactHeroContent}>
          <div>
            <h1 className={styles.heroTitle}>
              Hej, popričajmo!
            </h1>
            <span className={styles.heroSubtitle}>
              Ti trebaš pomoć oko svog branda, mi volimo izazove - win win!
            </span>
            <span className={styles.heroSubtitle}>
              Javi nam se na: <a className={styles.mailCta} href='mailto:bok@365danabranda.com'>bok@365danabranda.com</a>
            </span>
          </div>
        </div>
        <div className={styles.contactHeroDecoration}>
          <img src='/images/365--hero--sample.svg' role='decoration' />
        </div>
      </section>

      <section className={styles.indexYellowIntro}>
        <div
          className={
            classnames(
              globalUtils.container,
              styles.introContainer,
            )
          }
        >
          <div className={styles.accentedContent}>
          <h2 className={styles.introTitle}>
            Mi smo totalno kul ruf mich an
          </h2>
          <span className={styles.introSubtitle}>
            Nemoj brate nakon 17h.
          </span>
          </div>
          <div className={styles.contactsContent}>
            <span className={styles.name}>Katarina Galić</span>
            <ul>
              <li>
                <span className={styles.label}>
                  Email:
                </span>
                <span className={styles.information}>
                <a href='mailto:katarina@365daysofa.brand'>katarina@365daysofa.brand</a>
                </span>
              </li>
              <li>
                <span className={styles.label}>
                  Mobitel:
                </span>
                <span className={styles.information}>
                <a href='tel:+385977159882'>+385 97 715 98 82</a>
                </span>
              </li>
            </ul>
          </div>
          <div className={styles.contactsContent}>
            <span className={styles.name}>Monika Novak</span>
            <ul>
              <li>
                <span className={styles.label}>
                  Email:
                </span>
                <span className={styles.information}>
                  <a href='mailto:monika@365daysofa.brand'>monika@365daysofa.brand</a>
                </span>
              </li>
              <li>
                <span className={styles.label}>
                  Mobitel:
                </span>
                <span className={styles.information}>
                  <a href='tel:+385977159882'>+385 97 715 98 82</a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

    </MainContent>
  )
}
