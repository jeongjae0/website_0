import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function RegisterScreen(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';

  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, loading, error } = userRegister;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Password and confirm password are not match');
    } else {
      dispatch(register(name, phoneNumber, nickname, email, password));
    }
  };
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>계정 만들기</h1>
        </div>
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        <div>
          <label htmlFor="name">이름</label>
          <input
            type="text"
            id="name"
            placeholder="이름을 입력하세요"
            required
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="phoneNumber">전화번호</label>
          <input
            type="text"
            id="phoneNumber"
            placeholder="전화번호를 입력하세요"
            required
            onChange={(e) => setPhoneNumber(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="nickname">닉네임</label>
          <input
            type="text"
            id="nickname"
            placeholder="닉네임을 입력하세요"
            required
            onChange={(e) => setNickname(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="email">이메일</label>
          <input
            type="email"
            id="email"
            placeholder="이메일을 입력하세요"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            placeholder="비밀번호를 입력하세요"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="confirmPassword">비밀번호 확인</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="비밀번호를 한 번 더 입력하세요"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
            등록하기
          </button>
        </div>
        <div>
          <label />
          <div>
            이미 계정이 있으신가요?{' '}
            <Link to={`/signin?redirect=${redirect}`}>로그인</Link>
          </div>
        </div>
      </form>
    </div>
  );
}
