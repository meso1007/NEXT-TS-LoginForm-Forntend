"use client";

import React, { useState } from "react";
import styles from "./LoginForm.module.scss";
import { IoIosArrowBack } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";

interface LoginFormProps {
  setMode: React.Dispatch<React.SetStateAction<"hero" | "login" | "register">>;
}

const LoginForm: React.FC<LoginFormProps> = ({ setMode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Logging in with", email, password);
  };

  return (
    <>
      <button className={styles.goBack} onClick={() => setMode("hero")}>
        <IoIosArrowBack />
        <p>BACK</p>
      </button>
      <div className={styles.formContainer}>
        <h1 className="text-7xl">Welcome Back</h1>
        <p className="text-2xl mb-10 text-gray-500">
          Welcome Back! Please enter your details.
        </p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className={styles.submitButton} type="submit">
            {" "}
            <TextHoverAnimation textLabel="Sign In" />
          </button>
        </form>
        <div>
          <div className={styles.footer}>
            <p>Don’t have an account?</p>
            <button
              className={styles.toReg}
              onClick={() => setMode("register")}
            >
              <p>Sign up</p>
              <MdArrowOutward />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

interface TextHoverAnimationProps {
  textLabel: string;
  className?: string;
  link?: string;
}

const TextHoverAnimation: React.FC<TextHoverAnimationProps> = ({
  textLabel,
  link,
}) => {
  return (
    <a href={link} className={styles.el}>
      <div className={styles.textHover}>
        <p>{textLabel}</p>
        <p>{textLabel}</p>
      </div>
    </a>
  );
};

export default LoginForm;
