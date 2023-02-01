import { motion } from "framer-motion";
import Head from "next/head";
import { GridItemStyle } from "./item";

const variants = {
    hidden: {opacity: 0,x: 0, y: 20},
    enter: {opacity: 1, x: 0, y: 0},
    exit: {opacity: 0, x: 0, y: 20}
}

const Layout = ({children, title}) => (
    <motion.article
    initial="hidden" animate="enter" exit="exit" variant={variants} transition={{duration: 0.4, type: 'easeInOut'}} style={{position: 'relative'}}>
        <>
        {title && (<Head>
            <title>{title} - Chairil Prasojo</title>
        </Head>)}
        {children}
        <GridItemStyle/>
        </>
    </motion.article>
)

export default Layout