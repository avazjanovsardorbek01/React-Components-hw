import { Routes, Route } from "react-router-dom";
import Blog from "./components/blog/Blog";
import About from "./components/about/About";
import Feature from "./components/feature/Feature";
import Resent from "./components/resent/Resent";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <footer>
        <div class="socials">
          <ul>
            <li>
              <a href="#">
                <i class="fa-brands fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa-brands fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </li>
          </ul>
          <small>Copyright ©2020 All rights reserved </small>
        </div>
      </footer>
    </>
  );
}
export default App;
