import Link from 'next/link'
import Head from 'next/head'
import MainContent from 'components/layout/mainContent'
import classnames from 'classnames'
import globalUtils from 'styles/globalUtils.module.scss'
import styles from './index.module.scss'
import CaseStudyImages from 'components/caseStudyImages'


const caseStudiesObject = [
  {
    title: 'Modulos',
    subtitle: 'Izgradnja potpuno novog branda na tržištu namještaja od temelja',
    content: '<p>Et quidem faciunt, ut aut contra sit, aspernatur aut fugiat aliquid, praeter voluptatem accusantium doloremque laudantium, totam rem voluptas expetenda, fugiendus dolor repellendus temporibus autem quidam e nostris.</p><p>Et quidem rerum hic tenetur a philosophis compluribus permulta dicantur, cur verear, ne ad modum, quaeso, interpretaris? sicine eos et accurate disserendum et iusto odio dignissimos ducimus, qui dolorem eum fugiat.</p>',
    tags: [
      'Community Management',
      'Marketing Strategija',
      'Kreativa za kampanje',
      'Copywriting',
      'Organizacija shootinga promo materijala',
    ],
    brandColor: '#5DA777',
    images: [
      {
        src: '/images/case_study/modulos--web.jpg',
        alt: 'example alt text',
      },
      {
        src: '/images/case_study/modulos--insta.jpg',
        alt: 'example alt text',
      },
      {
        src: '/images/case_study/modulos--face.jpg',
        alt: 'example alt text',
      },
    ],
  },
  {
    title: 'Iverpan',
    subtitle: 'Podizanje etabliranog branda na ovu razinu',
    content: '<p>Et quidem faciunt, ut aut contra sit, aspernatur aut fugiat aliquid, praeter voluptatem accusantium doloremque laudantium, totam rem voluptas expetenda, fugiendus dolor repellendus temporibus autem quidam e nostris.</p><p>Et quidem rerum hic tenetur a philosophis compluribus permulta dicantur, cur verear, ne ad modum, quaeso, interpretaris? sicine eos et accurate disserendum et iusto odio dignissimos ducimus, qui dolorem eum fugiat.</p>',
    tags: [
      'Community Management',
      'Kreativa za kampanje',
      'Copywriting',
      'Nezz nešto još',
    ],
    brandColor: '#10B04A',
    images: [
      {
        src: '/images/case_study/modulos--web.jpg',
        alt: 'example alt text',
      },
      {
        src: '/images/case_study/modulos--insta.jpg',
        alt: 'example alt text',
      },
      {
        src: '/images/case_study/modulos--face.jpg',
        alt: 'example alt text',
      },
    ],
  },
]


export default function Home({ caseStudies = caseStudiesObject }) {
  return (
    <MainContent>
      <Head>
        <title>365 Dana Branda</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section
        className={
          classnames(
            globalUtils.containerWide,
            styles.indexHero,
          )
        }
      >
        <span />
        <div className={styles.indexHeroContent}>
          <div>
            <h1 className={styles.heroTitle}>
              Online brendovi u sigurnim rukama<span className={globalUtils.yellowDot}>.</span>
            </h1>
            <span className={styles.heroSubtitle}>
              <span className={globalUtils.yellowUnderline}>Svaki dan</span> u godini.
            </span>
          </div>
        </div>
        <div className={styles.indexHeroDecoration}>
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
            Digitalna strategija u skladu s tvojom vizijom.
          </h2>
          <span className={styles.introSubtitle}>
            Uspjeh bez kompromisa.
          </span>
          </div>
          <div className={styles.introContent}>
            <strong>365 dana brenda</strong> su dvije posvećene i blabla profesionalke koje će s tobom raditi na prisustnosti tvoga brenda online - kroz društvene mreže poput Facebooka i Instagrama, te kroz online oglašavanje i kampanje i slične stvari. Svaki biznis ima svoje potrebe i ne postoji idealan univerzalni pristup - time se i vodimo. Naš princip je da za tebe stvorimo superduper prilagođenu strategiju, te u suradnji s tobom ili tvojim timom <strong>zajednički radimo</strong> na ostvarenju tvoje vizije.
          </div>
        </div>
      </section>

      <section
        className={
          classnames(
            globalUtils.containerWide,
            styles.indexFocusSection,
          )
        }
      >
        <div
          className={
            classnames(
              globalUtils.container,
              styles.focusContent,
            )
          }
        >
          <h2 className={styles.focusTitle}>
            Fokus je bitan<span className={globalUtils.yellowDot}>.</span>
          </h2>
          <span className={styles.focusSubtitle}>
            Naš fokus i iskustvo su na <span className={globalUtils.yellowUnderline}>home improvement tržištu</span><span className={globalUtils.yellowDot}>.</span>
          </span>
          <p>Iako su nam prva iskustva došla individualno u raznim tvrtkama, core iskustva dolazi iz rada na razvoju potpuno novog branda namještaja, pretvarajući malu stolarsku radionicu i lude ideje nove generacije u prepoznat i poželjan brend koji predstavlja osvježenje tržišta, te je proizvode slao na nekoliko kontinenata.</p>
          <p>Sada sve naučeno, kao i greške na kojima je znanje i stečeno, možemo usmjeriti kako bi pomogli tebi da svog brend digneš na novu razinu.</p>
          <div className={styles.focusCtaWrapper}>
            <Link href='/kontakt'>
              <a className={globalUtils.buttonCtaPositive}>
                Kontaktiraj nas
              </a>
            </Link>
          </div>
        </div>
        <img src='/images/365db--focus-graphic.svg' role='decoration' className={styles.focusGraphic} />
      </section>

      <section className={styles.caseStudiesWrapper}>
        <ul
          className={
            classnames(
              globalUtils.containerWide,
              styles.caseStudies,
            )
          }
        >
          {caseStudiesObject.map((caseStudy, studyIndex) => (
            <li key={`caseStudy-${studyIndex}`} className={styles.caseStudy}>
              <div className={styles.studyContent}>
                <h3 className={styles.studyTitle}>
                  {caseStudy.title}
                </h3>
                <span
                  className = {styles.studySeparatorUnderTitle}
                  style = {{
                    backgroundColor: caseStudy.brandColor,
                  }}
                />
                <span className={styles.studySubtitle}>
                  {caseStudy.subtitle}
                </span>
                <div
                  className = {styles.studyTextContent}
                  dangerouslySetInnerHTML = {{__html: caseStudy.content}}
                />
                <ul className={styles.studyTags}>
                  {caseStudy.tags.map((tag, tagIndex) => (
                    <li
                      className = {styles.studyTag}
                      key = {`caseStudy-${studyIndex}-tag-${tagIndex}`}
                      style = {{
                        color: caseStudy.brandColor,
                        borderColor: caseStudy.brandColor,
                      }}
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.caseImages}>
                <CaseStudyImages images={caseStudy.images} />
              </div>
              <span className={styles.spacer} />
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.indexTestimonial}>
        <div className={styles.indexTestimonialCard}>
          <span
            className={styles.testimonialGraphic}
            style = {{
              backgroundImage: `url('/images/testimonial-graphic.svg')`,
            }}
          />
          <div className={styles.testimonialInner}>
            <p>
              E curke su supač dupač baš je sve jebeno što one rade. Baš ono super su. Toliko su bile nabrijane na to da nam odrade top posao da smo se čak i pobojali da će razderati prostor-vrijeme svojom energijom. Zajebano.
            </p>
            <span className={styles.testimonialAuthor}>
              — Goran iz Iverpana
            </span>
          </div>
        </div>
      </section>

      <section className={styles.contactCall}>
        <div className={styles.contactCallContainer}>
            <h2 className={styles.contactCallTitle}>
              Sve ovo ti zvuči super duper?
            </h2>
            <div className={styles.contactCtaWrapper}>
              <Link href='/kontakt'>
                <a className={globalUtils.buttonCtaPositive}>
                  Kontaktiraj nas
                </a>
              </Link>
            </div>
            <p>
              P.S. Ako želiš saznati nešto više o nama - <Link href='/kontakt'><a>klikni ovdje</a></Link>!
            </p>
        </div>
      </section>

    </MainContent>
  )
}

export async function getStaticProps() {
  return ({
    props: {
      caseStudies: caseStudiesObject
    }
  })
}