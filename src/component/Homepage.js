import React from "react";
import WeatherBox from "./weather/WeatherBox";
import portrait from "../images/myAvatar.png";
import "./Homepage.css";
import "./contactMeForm.css"
import TimeAndDate from "../component/TimeDate.js";
import { Link } from "react-router-dom";
import PastWork from "../component/PastWork/Pastwork.js";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import KiwepCard from "./PastWork/kiwepCard.js";
import Navbar from "./Navbar.js";
import fullStackDevResume from "./full_stack_dev.pdf";
import LandFCard from "./PastWork/landfCard.js";
import VisualeyesCard from "./PastWork/visualeyesCard.js";
import ContactForm from "./contactMeForm.js";

const Homepage = () => {
  const openResume = () => {
    window.open(fullStackDevResume);
  };

  return (
    <>
      {/* <Navbar /> */}
      <div s={8} m={4} lg={3}>
        <TimeAndDate />
        {/* <WeatherBox /> */}
      </div>

      <Container className="mainContainer_homePage" maxWidth="xlg">
        <div className="header_box">
          <div>
            <h3>Hi I'm </h3>
            <h1> Lea Soussan </h1>

            <h3>
              Artist in my Soul, creative in my mind...and a Problem solver
              any where I look
            </h3>
          </div>
          <div className="image_background">
            <img
              id="myImg"
              src={portrait}
              alt="My_avatar"
              width="450"
              height="auto"
            />
          </div>
        </div>
      </Container>

      <div className="about_me_banner" maxWidth="xlg">
        <div className="about_me_description">
          <h2>About Me</h2>
          <h5 className="description_text">
            Hey there, I'm Lea, a Full Stack Developer fueled by a passion for
            coding, creativity, and a taste for adventure! 🚀
            <br></br>Originally from Israel, I grew up in the bustling streets
            of Paris, studied Art in the vibrant cityscape of New York, and
            spent a whirlwind year soaking up the culture in Shanghai.
            <br></br>
            Fluent in Hebrew, French, English, Spanish, and Mandarin, I'm a bit
            of a language enthusiast. 🗣️
            <br></br>
            <br></br> When I'm not crafting code, you'll often find me immersed
            in art galleries, exploring new cuisines, jet-setting to far-flung
            destinations, or simply connecting with fascinating people from all
            walks of life.
            <br></br>
            With a colorful background and a zest for life, I bring a unique
            perspective to problem-solving and optimization. Whether it's
            untangling a tricky coding conundrum or streamlining processes for
            maximum efficiency, I thrive on finding innovative solutions that
            make a real impact. 🎨
            <br></br>
            <br></br> Four years ago, I embarked on a journey into web
            development, and it's been an exhilarating ride ever since! From
            bootcamp beginnings in Tel Aviv to leading groundbreaking projects,
            I'm on a mission to make waves in the digital world.
            <br></br>
            <br></br> 💻 Join me on this adventure, and let's create something
            amazing together! ✨
          </h5>

          <button onClick={openResume}>Go to my resume</button>
        </div>
      </div>

      <div className="past_project_banner" maxWidth="xlg">
        <a href="https://github.com/leasoussan"><h2> Past Work </h2> </a>
        <div className="past_project_display">
          {/* <Link to="/past_work"> */}
          <Link>
            <KiwepCard />
          </Link>

          <Link>
            <LandFCard />
          </Link>

          <Link>
            <VisualeyesCard />
          </Link>
        </div>
      </div>

      <div className="skills_banner" maxWidth="xlg">
        <h2> Technical Skills </h2>
        <ul className="skills_list">
          <li>
            <i class="fab fa-internet-explorer fa-2x"></i>
            <h4>Full-Stack </h4>
          </li>
          <li>
            <i class="fab fa-html5 fa-2x"></i>
            <h4>HTML</h4>
          </li>
          <li>
            <i class="fab fa-css3-alt fa-2x"></i>
            <h4>CSS</h4>
          </li>
          <li>
            <i class="fab fa-js fa-2x"></i>
            <h4>JavaScript</h4>
          </li>
          <li>
            <i class="fab fa-react fa-2x"></i>
            <h4>React</h4>
          </li>
          <li>
            <i class="fab fa-node fa-2x"></i>
            <h4>NodeJS</h4>
          </li>
          <li>
            <i class="fas fa-database fa-2x"></i>
            <h4>Postgres</h4>
          </li>
          <li>
            <i class="fab fa-python fa-2x"></i>
            <h4>Python</h4>
          </li>
          <li>
            <i class="fab fa-python fa-2x"></i>
            <h4>Django</h4>
          </li>
          <li>
            <i class="fab fa-js fa-2x"></i>
            <h4>Flask</h4>
          </li>
          <li>
            <i class="fas fa-code fa-2x"></i>
            <h4>OOP</h4>
          </li>
          <li>
            <i class="fas fa-database fa-2x"></i>
            <h4>MongoDB</h4>
          </li>
          <li>
            <i class="fas fa-network-wired fa-2x"></i>
            <h4>APIs</h4>
          </li>
        </ul>
      </div>


        <ContactForm />
      
    </>
  );
};

export default Homepage;
