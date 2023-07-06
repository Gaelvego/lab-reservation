import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import NavBar from "../components/navBar"

export default function Home() {
  console.log('corriendo')
  return (
    <NavBar
      tituloNav="Edificio EIAD"
      pagina="principal"
    >
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
    </Layout>
    </NavBar>
  )
}

