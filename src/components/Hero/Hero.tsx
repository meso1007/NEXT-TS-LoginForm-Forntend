"use client";

import React, { useState } from "react";
import styles from "./Hero.module.scss";
import Image from "next/image";
import Link from "next/link";
import RegisterForm from "../Register/RegisterForm";
import { AnimatePresence, motion } from "framer-motion";
import LoginForm from "../Login/LoginForm";

const Hero: React.FC = () => {
  const [mode, setMode] = useState<"hero" | "login" | "register">("hero");

  return (
    <section className={styles.body}>
      <div className={styles.textContainer}>
        <Link href="/" className={styles.header}>
          <Image alt="logo" src="/images/logo.png" width={40} height={40} />
          <p className={styles.logoName}>Progressify</p>
        </Link>

        <AnimatePresence mode="wait">
          {mode === "hero" && (
            <motion.div
              key="hero"
              className={styles.heroContainer}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            >
              <div className={styles.titleContainer}>
                <h1 className={styles.heading}>
                  Stay on top of your lessons and progress
                </h1>
                <p className={styles.text}>簡単に記録、すぐに共有。</p>
              </div>
              <motion.div
                className={styles.buttonContainer}
                transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
              >
                <button
                  className={styles.btn}
                  type="button"
                  onClick={() => setMode("login")}
                >
                  <TextHoverAnimation textLabel="Login" />
                </button>
                <button
                  className={styles.btn}
                  type="button"
                  onClick={() => setMode("register")}
                >
                  <TextHoverAnimation textLabel="Sign Up" />
                </button>
              </motion.div>
            </motion.div>
          )}

          {mode === "login" && (
            <motion.div
              key="login"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            >
              <LoginForm setMode={setMode} />
            </motion.div>
          )}

          {mode === "register" && (
            <motion.div
              key="register"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            >
              <RegisterForm setMode={setMode} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className={styles.imageContainer}>
        <Image
          src="/images/topImage.jpeg"
          alt="Hero"
          layout="fill"
          objectFit="cover"
          className={styles.heroImage}
        />
      </div>
    </section>
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

export default Hero;
