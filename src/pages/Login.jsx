import { useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api/auth";
import InputBox from "../components/form/InputBox";
import { InputSubmit } from "../components/styled/elements/form";
import { Card, Section } from "../components/styled/pages/login";
import {Context} from "../store/store.js"

const Login = () => {
    const formRef = useRef(null);
    const navigate = useNavigate();
    const {userAction} = useContext(Context)

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
            userAction.setUser(response)
            navigate("/")
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