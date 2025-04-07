import React, { useState } from "react";
import styles from "./RegisterForm.module.scss"; // SCSS ファイルのスタイルをインポート
import { IoIosArrowBack } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";

interface RegisterFormProps {
  setMode: React.Dispatch<React.SetStateAction<"hero" | "login" | "register">>;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ setMode }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // バリデーション等を追加することができます
    console.log("Registering with", email, password, confirmPassword);
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
    } else {
      alert("Registration Successful!");
    }
  };

  return (
    <div className={styles.regContainer}>
      <button className={styles.goBack} onClick={() => setMode("hero")}>
        <IoIosArrowBack />
        <p>BACK</p>
      </button>
      <div className={styles.formContainer}>
        <h1 className="text-7xl">Create Account</h1>
        <p className="text-2xl mb-10 text-gray-500">
          Please fill out the form to create an account.
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
          <div className={styles.inputGroup}>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className={styles.submitButton}>
            <TextHoverAnimation textLabel="Sign Up" />
          </button>
        </form>
        <div className={styles.footer}>
          <p>Already have an account?</p>
          <button className={styles.toReg} onClick={() => setMode("login")}>
            <p>Sign In</p>
            <MdArrowOutward />
          </button>
        </div>
      </div>
    </div>
  );
};

interface TextHoverAnimationProps {
  textLabel: string;
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

export default RegisterForm;
