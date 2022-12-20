import { useRef } from "react";
import { login } from "../api/auth";
import InputBox from "../components/form/InputBox";
import { InputSubmit } from "../components/styled/elements/form";
import { Card, Section } from "../components/styled/pages/login";

const Login = () => {
    const formRef = useRef(null);

    const formSubmit = async(e) => {
        e.preventDefault();
        const formData = {}
        ;[...formRef.current].forEach(input => {
            if(input.type !== 'submit') {
                formData[input.name] = input.value;
            }
        })
        const response = await login(formData);
        if(response.status){
            console.log(response);
        }
        else {
            console.log(response);
        }
    }
    
    return (
        <>
            <Section className="signInArea">
                <Card className="card">
                    <h3 className="title">Welcome to TMS!</h3>
                    <form ref={formRef} onSubmit={formSubmit}>
                        <InputBox
                            label="Username"
                            type="text"
                            name="username"
                            isRequired={false}
                            placeholder="john@example.com"
                        />
                        <InputBox
                            label="Password"
                            type="password"
                            name="password"
                            isRequired={false}
                            placeholder="**********"
                        />
                        <InputSubmit
                            type="submit"
                            name="submit"
                            value="Sign In"
                        />
                    </form>
                </Card>
            </Section>
        </>
    );
}

export default Login;