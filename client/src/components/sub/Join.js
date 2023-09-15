import React from 'react'
import Layout from '../common/Layout'
import { useState, useEffect } from 'react';

function Join() {
    const initVal = {
        userid: '',
        pwd1: '',
        pwd2: '',
        email: '',
        gender: false,
        interests: false,
        edu: '',

    };

    const [Val, setVal] = useState(initVal);
    const [Err, setErr] = useState({});
    const [Submit, setSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setVal({ ...Val, [name]: value });
    };
    const handleRadio = (e) => {
        const { name, checked } = e.target;
        setVal({ ...Val, [name]: checked });
    };
    const handleCheck = (e) => {
        const { name } = e.target;
        let isChecked = false;
        const inputs = e.target.parentElement.querySelectorAll('input');

        inputs.forEach((el) => el.checked && (isChecked = true));
        setVal({ ...Val, [name]: isChecked });
    };

    const check = (value) => {
        const errs = {};
        const eng = /[a-zA-Z]/;
        const num = /[0-9]/;
        const spc = /[~!@#$%^&*()_+]/;

        if (value.userid.length < 5) {
            errs.userid = '아이디를 5글자 이상 입력하세요.';
        }
        if (value.pwd1.length < 5 || !eng.test(value.pwd1) || !num.test(value.pwd1) || !spc.test(value.pwd1)) {
            errs.pwd1 = '비밀번호는 5글자 이상, 영문, 숫자, 특수문자를 모두 포함하세요.';
        }
        if (value.pwd1 !== value.pwd2 || !value.pwd2) {
            errs.pwd2 = '두개의 비밀번호를 동일하게 입력하세요.';
        }
        if (value.email.length < 8 || !/@/.test(value.email)) {
            errs.email = '이메일주소는 8글자 이상 @를 포함하세요.';
        }
        if (!value.gender) {
            errs.gender = '성별을 체크해주세요.';
        }
        if (!value.interests) {
            errs.interests = '관심사를 하나 이상 체크하세요.';
        }
        if (value.edu === '') {
            errs.edu = '최종학력을 선택하세요.';
        }
        return errs;
    };

    const handleSelect = (e) => {
        const { name, value } = e.target;
        setVal({ ...Val, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('현재 스테이트값', Val);
        console.log(check(Val));
        setErr(check(Val));
        setSubmit(true);
    };


    useEffect(() => {
        console.log(Val);
        const len = Object.keys(Err).length;
        if (len === 0 && Submit) {
            alert('모든 인증을 통과했습니다.');
        }
    }, [Err]);

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
                                value={Val.userid}

                            />
                            <br />
                            <p>{Err.userid}</p>
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
                                value={Val.pwd1}

                            />
                            <br />
                            <p>{Err.pwd1}</p>
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
                                value={Val.pwd2}

                            />
                            <br />
                            <p>{Err.pwd2}</p>
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
                                value={Val.email}

                            />
                            <br />
                            <p>{Err.email}</p>
                        </td>
                    </tr>

                    <tr>
                        <th>GENDER</th>
                        <td>
                            <label htmlFor='male'>Male</label>
                            <input type='radio' name='gender' value='male' id='mail' onChange={handleRadio} />

                            <label htmlFor='female'>FeMale</label>
                            <input type='radio' name='gender' value='female' id='female' onChange={handleRadio} />
                            <br />
                            <p>{Err.gender}</p>
                        </td>
                    </tr>
                    <tr>
                        <th>INTERESTS</th>
                        <td>
                            <label htmlFor='music'>Music</label>
                            <input type='checkbox' name='interests' value='music' id='music' onChange={handleCheck} />

                            <label htmlFor='reading'>Reading</label>
                            <input type='checkbox' name='interests' value='reading' id='reading' onChange={handleCheck} />

                            <label htmlFor='game'>Game</label>
                            <input type='checkbox' name='interests' value='game' id='game' onChange={handleCheck} />
                            <br />
                            {Err.interests && <p>{Err.interests}</p>}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <label htmlFor='edu'>EDUCATION</label>
                        </th>
                        <td>
                            <select name='edu' id='edu' onChange={handleSelect}>
                                <option value=''>최종학력을 선택하세요</option>
                                <option value='elementary-school'>초등학교 졸업</option>
                                <option value='middle-school'>중학교 졸업</option>
                                <option value='high-school'>고등학교 졸업</option>
                                <option value='college'>대학교 졸업</option>
                            </select>
                            {Err.edu && <p>{Err.edu}</p>}
                        </td>
                    </tr>


                    <tr>
                        <th colspan='2'>
                            <input type='reset' value='CANCEL' onClick={() => setVal(initVal)} />
                            <input type='submit' value='SEND' />
                        </th>
                    </tr>

                </table>
            </fieldset>
        </form>
    </Layout>
}

export default Join