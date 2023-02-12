import React, { useState, useEffect } from "react";

import { PageLayout, Input, PasswordInput, Button, Spinner } from "components/common";

import { Form } from "./style";

let timeout

export const Login = () => {

    const [formFields, setFormFields] = useState({ username: '', password: '' })
    const [loading, setLoading] = useState(false)

    const handleInputChange = (e) => {
        e.persist()
        setFormFields(original => ({
            ...original,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        timeout = setTimeout(() => {
            setLoading(false)
        }, 2000)
    }

    useEffect(() => {
        return() => {
            if(timeout) {
                clearTimeout(timeout)
            }
        }
    }, [])

    return(
        <PageLayout>
            <h1>Login</h1>
            <Form onSubmit={handleSubmit}>
                {loading ? <Spinner/> :
                    <>
                        <Input 
                            name="username"
                            placeholder="Username" 
                            onChange={handleInputChange} 
                            value={formFields.username} 
                            type='text'
                        />
                        <PasswordInput 
                            name="password" 
                            onChange={handleInputChange} 
                            value={formFields.password} 
                        />
                    
                    </>
                }
                <Button large type="submit" disabled={loading}>{loading ? "Loading..." : 'Login'}</Button>

                { !loading && 
                    <>
                        <div className="alt-text">or</div>
                        <Button secondary type="button">Register</Button>
                    </>
                }
            </Form>
        </PageLayout>
    )
}