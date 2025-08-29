"use client";
import React from "react";
import { SiTiktok } from "react-icons/si";
import { FaDiscord } from "react-icons/fa";
const Home: React.FC = () => {
  return (
    <>
      <p>Hello, I'm Agha 👋🏼</p>

      <h1 className="hero-title">A newbie web developer</h1>

      <p className="hero-desc">
        I'm trying creating websites that balance beautiful design with powerful
        functionality.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <a className="btn" href="#contact">
          Contact Me
        </a>
        <img src="/AKU_AGAH.jpg" alt="logo" width={240} className="hero-img" />
      </div>

      <div className="social-links">
        <a href="https://www.tiktok.com/@kaitou_yuzuha" target="_blank">
          <SiTiktok />
        </a>
        <a href="https://discord.com/channels/@me" target="_blank">
          <FaDiscord />
        </a>
      </div>

      <h2
        style={{ textAlign: "center", marginTop: "40px", marginBottom: "20px" }}
      >
        My Skills
      </h2>

      <div className="skills-wrapper">
        <div className="skills-slide">
          <div className="skill-item">
            <img src="/react.svg" alt="React" /> React
          </div>
          <div className="skill-item">
            <img src="/react.svg" alt="Git" /> Git
          </div>
          <div className="skill-item">
            <img src="/react.svg" alt="JS" /> JavaScript
          </div>
          <div className="skill-item">
            <img src="/react.svg" alt="React" /> React
          </div>
          <div className="skill-item">
            <img src="/react.svg" alt="GitHub" /> GitHub
          </div>
          <div className="skill-item">
            <img src="/react.svg" alt="HTML" /> HTML
          </div>
        </div>
      </div>
<div className="more-about">
      <h3>
        More About me
        <p>
          ⁕NAME: Agha Ariefiansyah <br />
          ⁕CLASS: XI RPL A / 3 <br />
          ⁕HOBBY: Sleep, Badminton, Playing Video games <br />
          ⁕ADDRESS: Jl Kedawung XV no 91 B Malang <br />
          ⁕WORK INTEREST: Melanjutkan perusahaan ortu <br />
          ⁕SKILL: PLAYER CODM <br />
          ⁕FAV FOOD: pecel, ramen, udon, mie ayam, pizza, burger, raw salmon,
          kebab, milk, coffee, green tea, boba
        </p>
      </h3>
      </div>
    </>
  );
};

export default Home;
