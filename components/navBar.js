import Image from 'next/image'
import Link from 'next/link'
import styles from './navBar.module.css'


export default function NavBar (props) {
    console.log('Corriendo')
    console.log(props)


    function determinarBackgroundImg(pagina) {
        switch (pagina){
            case "principal":
                return (styles["headingContainer"]);
                break;
            case "registro":
                return (styles["headingContainer"]+" "+styles["Registro"])
                break;
            case "educacion":
                return (styles["headingContainer"]+" "+styles["Educacion"])
                break;
            case "conocenos":
                return (styles["headingContainer"]+" "+styles["Conocenos"])
                break;
            case "investigacion":
                return (styles["headingContainer"]+" "+styles["Investigacion"]) 
                break;
        }
    }

    return (
        <div className={styles.mainContainer}>
            <div className={determinarBackgroundImg(props.pagina)}>
                <div className={styles.navbarContainer}>
                    <Link href="/">
                        <Image
                            src="/images/logoITESMcompleto.png"
                            className={styles.logoImage}
                            height={20}
                            width={20}
                            alt="imagenLogo"
                            priority
                            unoptimized={true}
                        />
                    </Link>
                    <Link href="/educacion" passHref>
                    <button className={styles.button} onClick={()=> console.log("boton funciona")}>Educacion</button>
                    </Link>
                    <Link href="/investigacion" passHref>
                    <button className={styles.button}>Investigacion</button>
                    </Link>
                    <Link href="/conocenos" passHref>
                    <button className={styles.button}>Conocenos</button>
                    </Link>
                    <Link href="/registro" passHref>
                    <button className={styles.button}>Registro</button>
                    </Link>
                </div>
                <div className={styles.nombre}>{props.tituloNav}</div>
            </div>

        </div>
    )
}