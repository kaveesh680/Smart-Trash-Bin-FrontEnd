import React, {useState} from 'react';
import {Button, Col, Form, FormControl, Row} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import {IUser, IUSerRegisterDetails} from "../../types/types";
import {Sign_Up} from "../../graphql/Mutation";
import {ApolloError, useMutation} from "@apollo/client";
import {useDispatch} from "react-redux";
import {toast} from "react-toastify";
import {setUserRole} from "../../store/actions/StatusActions";

const RegisterForm: React.FC = () => {

    const [isFormValidated, setIsFormValidated] = useState<boolean>(false);
    const [firstName, setFirstName] = useState<string | null>(null);
    const [lastName, setLastName] = useState<string | null>(null);
    const [email, setEmail] = useState<string | null>(null);
    const [password, setPassword] = useState<string | null>(null);
    const [confirmPassword, setConfirmPassword] = useState<string | null>(null);
    const [signUp] = useMutation(Sign_Up);
    const dispatch = useDispatch()
    const history = useHistory();

    const handleOnFirstNameChange = (firstName: string) => {
        setFirstName(firstName);
    }

    const handleOnLastNameChange = (lastName: string) => {
        setLastName(lastName);
    }

    const handleOnEmailChange = (email: string) => {
        setEmail(email);
    }

    const handleOnPasswordChange = (password: string) => {
        setPassword(password);
    }

    const handleOnConfirmPasswordChange = (confirmPassword: string) => {
        setConfirmPassword(confirmPassword);
    }

    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (firstName === null || firstName === "" || lastName === null || lastName === "" || email === null || email === ""
            || password === null || password === "" || confirmPassword === null || confirmPassword === "" || password !== confirmPassword) {
            setIsFormValidated(true);
            return
        }
        const userRegisterDetails: IUSerRegisterDetails = {
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName,
        }
        toast.info('🙄 Loading...');
        signUp({
            variables: userRegisterDetails
        }).then((res) => {
            localStorage.setItem('token', `${res.data?.signUp.token}`);
            toast.success('😍 Welcome');
            if (res.data) {
                let userData: IUser;
                if (res.data.signUp.role === 'user') {
                    userData = {
                        id: res.data.signUp._id,
                        name: res.data.signUp.name,
                        role: res.data.signUp.role,
                        area: null
                    }
                } else {
                    userData = {
                        id: res.data.signUp._id,
                        name: res.data.signUp.name,
                        role: res.data.signUp.role,
                        area: res.data.signUp.area
                    }
                }
                dispatch(setUserRole(userData));
                if (res.data.signUp.role === "garbageCollector") {
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
        <Row className='mt-md-2 formArea'>
            <Col md={{span: 8, offset: 2}} xs={12}>
                <Form noValidate validated={isFormValidated} onSubmit={handleOnSubmit}>
                    <Row>
                        <Form.Group as={Col} md="6" xs="12" controlId="formGridEmail">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter First Name"
                                value={firstName ? firstName : ''}
                                required
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleOnFirstNameChange(e.target.value)}
                            />
                            <FormControl.Feedback type="invalid">
                                <p className="font-weight-bold mb-0">Enter First Name</p>
                            </FormControl.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" xs="12" controlId="formGridPassword">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Last Name"
                                value={lastName ? lastName : ""}
                                required
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleOnLastNameChange(e.target.value)}
                            />
                            <FormControl.Feedback type="invalid">
                                <p className="font-weight-bold mb-0">Enter Last Name</p>
                            </FormControl.Feedback>
                        </Form.Group>
                    </Row>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
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
                    </Form.Group>
                    <Form.Group className="mb-0" controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            required
                            value={confirmPassword ? confirmPassword : ''}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleOnConfirmPasswordChange(e.target.value)}
                        />
                        <FormControl.Feedback type="invalid">
                            <p className="font-weight-bold mb-0">Enter Password</p>
                        </FormControl.Feedback>
                    </Form.Group>
                    <Row className='loginBtn text-center'>
                        <Col xs={12} className='mt-3 mb-3'>
                            <Button type='submit'>Sign Up</Button>
                        </Col>
                    </Row>
                </Form>
            </Col>
        </Row>
    )
}

export default RegisterForm;