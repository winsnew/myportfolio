import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Section from "../components/layouts/section";
import { WorkItem } from "../components/layouts/item";
import thumbShoespick from '../public/images/contents/shospick.png'
import thumbPcwork from '../public/images/contents/3dBlender.png'
import Layout from "../components/layouts/article";

const Works = () => {
    return (
        <Layout>
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Project
            </Heading>

            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section delay={0.3}>
                    <WorkItem id="shoespick" title="Shoes Picker" thumbnail={thumbShoespick}>
                        A Platform and as final coursework from college
                    </WorkItem>
                </Section>
        
                <Section delay={0.3}>
                    <WorkItem id="3dSetuppc" title="My Pcsetup" thumbnail={thumbPcwork}>
                        Blender learning and make a mock 3d pc setup daily used
                    </WorkItem>
                </Section>
            </SimpleGrid>
        </Container>
        </Layout>
    )
}
export {getServerSideProps} from '../components/chakra'
export default Works