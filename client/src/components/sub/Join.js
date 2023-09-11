import React from 'react'
import Layout from '../common/Layout'
import { useState, useEffect } from 'react';

function Join() {
    const initVal = {
        userid: '',
        pwd1: '',
        pwd2: '',
        email: '',
    };

    const [Val, setVal] = useState(initVal);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setVal({ ...Val, [name]: value });
    };
    const check = (value) => {
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('현재 스테이트값', Val);
        console.log(check(Val));
    };


    useEffect(() => {
        console.log(Val);
    }, [Val]);

    return <Layout name={'Join'}>
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend className='h'>회원가입 폼 양식</legend>
                <table border='1'>
                    <tr>
                        <th scope='row'>
                            <label htmlFor='userid'>USER ID</label>
                        </th>
                        <td>
                            <input
                                type='text'
                                name='userid'
                                id='userid'
                                placeholder='아이디를 입력하세요'
                                onChange={handleChange}
                            />
                        </td>
                    </tr>

                    <tr>
                        <th>
                            <label htmlFor='pwd1'>PASSWORD</label>
                        </th>
                        <td>
                            <input
                                type='password'
                                name='pwd1'
                                id='pwd1'
                                placeholder='비밀번호를 입력하세요'
                                onChange={handleChange}
                            />
                        </td>

                    </tr>

                    <tr>
                        <th>
                            <label htmlFor='pwd2'>RE-PASSWORD</label>
                        </th>
                        <td>
                            <input
                                type='password'
                                name='pwd2'
                                id='pwd2'
                                placeholder='비밀번호를 재입력하세요'
                                onChange={handleChange}
                            />
                        </td>
                    </tr>

                    <tr>
                        <th>
                            <label htmlFor='email'>E-MAIL</label>
                        </th>
                        <td>
                            <input
                                type='text'
                                name='email'
                                id='email'
                                placeholder='이메일주소를 입력하세요'
                                onChange={handleChange}
                            />
                        </td>
                    </tr>

                    <tr>
                        <th colspan='2'>
                            <input type='reset' value='CANCEL' />
                            <input type='submit' value='SEND' />
                        </th>
                    </tr>
                </table>
            </fieldset>
        </form>
    </Layout>
}

export default Join