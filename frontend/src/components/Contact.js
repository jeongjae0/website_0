import React, { useState, useEffect } from "react";
import { db } from "../firebase";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>문제신고 🤳</h1>

      <label>이름</label>
      <input
        placeholder="이름"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>이메일</label>
      <input
        placeholder="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>문제 내용</label>
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <button
        type="submit"
        style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
      >
        제출하기
      </button>
    </form>
  );
};

export default Contact;