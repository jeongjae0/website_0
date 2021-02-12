import React, { useState, useEffect } from "react";

const Contact = () => {
  const [nickname, setNickname] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [bankName, setBankName] = useState("");

  const [loader, setLoader] = useState(false);

  const conversionClick = (Number) => {
    if (Number) {
      return 0.7 * Number;
    } else {
      res.send("숫자를 입력해주세요");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    setNickname("");
    setName("");
    setPhoneNumber("");
    setEmail("");
    setBankName("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>환전신청</h1>

      <label>닉네임</label>
      <input
        placeholder="nickname"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
      />

      <label>이름</label>
      <input
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>전화번호</label>
      <input
        placeholder="phoneNumber"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />

      <label>이메일</label>
      <input
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>은행</label>
      <input
        placeholder="bankName"
        value={bankName}
        onChange={(e) => setBankName(e.target.value)}
      />
      <form>
        <label>환전할 금액</label>
        <button
          type="submit"
          onClick={conversionClick}
          style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
        >
          제출하기
        </button>

        <label>환전될 금액</label>
      </form>
    </form>
  );
};

export default Contact;
