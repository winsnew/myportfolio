import { Heading , Grid, GridItem, Container, Input, Box, Button} from "@chakra-ui/react";
import { Component } from "react";
import Section from '../components/layouts/section'

const stringExpression = RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)

const validate = ({error, ...rest}) => {
    let checkValidate = false

    Object.values(error).forEach(val => {
        if(val.lenght > 0) {
            checkValidate = false
        } else {
            checkValidate = true
        }
    });

    Object.values(rest).forEach(val => {
        if(val === null) {
            checkValidate = false
        } else {
            checkValidate = true
        }
    });

    return checkValidate;
}


export default class contact extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            error: {
                name: '',
                email: '',
                
            }
        }
    }

    onFormSubmit = event => {
        event.preventDefault();

        if(validate(this.state)) {
            console.log(this.state)
        }else{
            console.log("Error")
        }
    };

    formObject = event => {
        event.preventDefault();

        const {name, value} = event.target;
        let error = {...this.state.error};

        switch (name) {
            case "name":
            error.name = value.length < 5 ? "Name should be 5 characaters long" : " "
            break;
            case "email":
            error.email = stringExpression.test(value)
            ? ""
            : "Email is not valid";
            default:
            break;

        }
        this.setState({
            error,
            [name]: value
        })
    }
    render() {
        const {error} = this.state

    return (
        <Container maxW="container.md">
            <Section>
            <Grid 
            templateRows='repeat(3, 1fr)'
            >
                <GridItem> 
                    <Heading align="center">Contact Me</Heading>
                <Box mt={10}
                w="500px"
                pl="6rem"
                ml="3rem"
                >
                    <label>Name</label>
                    <Input name="name" placeholder="username" onChange={this.formObject} className={error.name.length > 0 ? 'is-invalid form-control' : 'form-control'} required/>
                </Box>
                
                <Box mt={10}
                w="500px"
                pl="6rem"
                ml="3rem"
                >
                    <label>Email</label>
                    <Input name="email" placeholder="email" className={error.email.length > 0 ? "is-invalid form-control" : "form-control"} onChange={this.formObject} required/>
                    {error.email.length > 0 && (
                    <span className="invalid-feedback">{error.email}</span>
                    )}
                </Box>
                <Box mt={10}
                w="500px"
                pl="6rem"
                ml="3rem"
                >
                    <label>Message</label>
                    <Input name="message" placeholder="message" required/>
                </Box>
                <Box
                mt={10}
                mb={10}
                align='center'>
                    <Button colorScheme='teal' variant='ghost'>Send</Button>
                </Box>
                </GridItem>
            </Grid>
            </Section>
        </Container>
    )
}
}
