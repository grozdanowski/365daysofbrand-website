import 'styles/baseStyles.scss'
import SiteWrapper from 'components/layout/siteWrapper'

function MyApp({ Component, pageProps }) {

  return (
    <SiteWrapper >
      <Component {...pageProps} />
    </SiteWrapper>
  )
}

export default MyApp
