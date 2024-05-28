import "./about.css";
import john from "../../assets/man.png";

const About = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="#">Works</a>
          </li>

          <li>
            <a href="/blog">Blog</a>
          </li>

          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <div class="wrapper">
        <div class="head-content">
          <div class="head-left">
            <h1>Hi, I am John, Creative Technologist</h1>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <button>Download Resume</button>
          </div>
          <div class="head-right">
            <img src={john} alt="john photo" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default About;
