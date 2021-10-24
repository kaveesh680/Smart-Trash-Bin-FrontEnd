import React, {useState} from "react";
import {Button, Col, Form, FormControl, Row} from "react-bootstrap";
import LogInHeader from "../common/LogInHeader";
import NeedHelp from "../common/NeedHelp";
import {IUser, IUserLogInDetails} from "../../types/types";
import {useHistory} from "react-router-dom";
import {ApolloError, useMutation} from "@apollo/client";
import {Sign_In} from "../../graphql/Mutation";
import {useDispatch} from "react-redux";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';
import {setUserRole} from "../../store/actions/StatusActions";

toast.configure();
const FormArea: React.FC = () => {

    const [isFormValidated, setIsFormValidated] = useState<boolean>(false);
    const [email, setEmail] = useState<string | null>(null);
    const [password, setPassword] = useState<string | null>(null);
    const [signIn] = useMutation(Sign_In);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleOnEmailChange = (email: string) => {
        setEmail(email);
    }

    const handleOnPasswordChange = (password: string) => {
        setPassword(password);
    }

    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (email === null || email === "" || password === null || password === "") {
            setIsFormValidated(true);
            return
        }
        const user: IUserLogInDetails = {
            email: email,
            password: password
        }
        toast.info('🙄 Loading...');
        signIn({
            variables: user
        }).then((res) => {
            localStorage.setItem('token', `${res.data?.signIn.token}`);
            toast.success('😍 Welcome');
            if (res.data) {
                let userData: IUser;
                if (res.data.signIn.role === 'user') {
                    userData = {
                        id: res.data.signIn._id,
                        name: res.data.signIn.name,
                        role: res.data.signIn.role,
                        area: null
                    }
                } else {
                    console.log("dsdsd")
                    userData = {
                        id: res.data.signIn._id,
                        name: res.data.signIn.name,
                        role: res.data.signIn.role,
                        area: res.data.signIn.area
                    }
                }
                dispatch(setUserRole(userData));
                if (res.data.signIn.role === "garbageCollector") {
                    history.push('/garbage');
                } else {
                    history.push('/user');
                }
            } else {
                dispatch(setUserRole(null));
            }
        }).catch((err: ApolloError) => {
            toast.error('😪 Failed, User name or password error')
        });
    }

    return (
        <Col md={8} xs={12} className='pt-md-3 pt-1'>
            <NeedHelp/>
            <LogInHeader header="Log In" classname="logInHeader mb-md-5 mt-5"/>
            <Row className='mt-md-5 formArea'>
                <Col md={{span: 8, offset: 2}} xs={12}>
                    <Form className='mb-md-2' noValidate validated={isFormValidated} onSubmit={handleOnSubmit}>
                        <Form.Group className="mb-md-5 mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                required
                                value={email ? email : ''}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleOnEmailChange(e.target.value)}
                            />
                            <FormControl.Feedback type="invalid">
                                <p className="font-weight-bold mb-0">Enter Email Address</p>
                            </FormControl.Feedback>
                        </Form.Group>
                        <Form.Group className="" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                required
                                value={password ? password : ''}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleOnPasswordChange(e.target.value)}
                            />
                            <FormControl.Feedback type="invalid">
                                <p className="font-weight-bold mb-0">Enter Password</p>
                            </FormControl.Feedback>
                            <Form.Text className="text-muted float-right">
                                Forgot password?
                            </Form.Text>
                        </Form.Group>
                        <Row className='loginBtn mt-5 text-center'>
                            <Col xs={12} className='mt-5'>
                                <Button type='submit'>Login</Button>
                            </Col>
                        </Row>
                    </Form>
                    <Row className='text-center newUser mt-md-0 mt-2'>
                        <Col xs={12}>
                            <p onClick={() => history.push('/register')}>New User? Create Account</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Col>
    )
}

export default FormArea;