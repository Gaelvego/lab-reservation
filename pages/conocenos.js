import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import NavBar from "../components/navBar"

export default function Conocenos() {
  return (
    <NavBar
      tituloNav="Cónocenos"
      pagina="conocenos"
    >
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
    </Layout>
    </NavBar>
  )
}
