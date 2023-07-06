import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import NavBar from "../components/navBar"

export default function Investigacion() {
  return (
    <NavBar
      tituloNav="Investigación"
      pagina="investigacion"
    >
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
    </Layout>
    </NavBar>
  )
}