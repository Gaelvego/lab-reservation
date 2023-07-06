import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import NavBar from "../components/navBar"
import Auth from '../components/auth'

export default function Educacion() {
  return (
    <div>
      <NavBar
        tituloNav="Educación"
        pagina="educacion"
      >
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
      </Layout>
      </NavBar>
      <Auth>

      </Auth>
    </div>
  )
}