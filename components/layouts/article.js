import { motion } from "framer-motion";
import Head from "next/head";
import { GridItemStyle } from "./item";

const variants = {
    hidden: {opacity: 0,x: 0, y: 20},
    enter: {opacity: 1, x: 0, y: 0},
    exit: {opacity: 0, x: 0, y: 20}
}

const Layout = ({children, title}) => {
    const t = `${title} - Chairil Prasojo`
    return(
    <motion.article
    initial="hidden" animate="enter" exit="exit" variant={variants} transition={{duration: 0.4, type: 'easeInOut'}} style={{position: 'relative'}}>
        <>
        {title && (
        <Head>
            <title>{t}</title>
            <meta name="twitter:title" content={t}/>
            <meta property="og:title" content={t}/>
        </Head>)}
        {children}
        <GridItemStyle/>
        </>
    </motion.article>
    )
}

export default Layout