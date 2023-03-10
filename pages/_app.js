import Layout from '../components/layouts/main'
import Fonts from '../components/layouts/fonts';
import { AnimatePresence } from 'framer-motion';
import Chakra from '../components/chakra';

if (typeof window !== 'undefined') {
    window.history.scrollRestoration = 'manual'
}

const Soojoweb = ({Component, pageProps, router}) => {
    return (
        <Chakra cookies={pageProps.cookies}>
            <Fonts/>
            <Layout router={router}>
                <AnimatePresence 
                mode='wait' 
                initial={true}
                onExitComplete={() => {
                    if(typeof window !== 'undefined'){
                        window.scrollTo({top: 0})
                    }
                }}
                >
                <Component {...pageProps} key={router.route}/>
                </AnimatePresence>
            </Layout>
        </Chakra>
    )
}

export default Soojoweb