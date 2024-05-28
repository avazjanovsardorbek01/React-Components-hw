import "./blog.css";
import { Link } from "react-router-dom";
const Blog = () => {
  return (
    <>
      <body>
        <header className="header">
          <div className="header__container">
            <nav className="menu">
              <ul className="menu__lists">
                <li>
                  <Link className="menu__item menu__item__active" to="/blog">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link className="menu__item" to="/work">
                    Work
                  </Link>
                </li>
                <li>
                  <Link className="menu__item" to="#">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="main">
          <section className="blog">
            <div className="container">
              <div className="blog__title__block">
                <h1 className="blog__title">Blog</h1>
              </div>
              <ul className="blog__lists">
                <div className="blog__list__items">
                  <Link href="#" className="blog__item">
                    <li>
                      <h3 className="blog__items__title">Post Title</h3>
                    </li>
                    <li>
                      <p className="blog__info">
                        <span className="post__date date__post">12 Feb 21</span>
                        Design System
                      </p>
                    </li>
                    <li>
                      <p className="blog__text">
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim
                        velit mollit. Exercitation veniam consequat sunt nostrud
                        amet.
                      </p>
                    </li>
                  </Link>
                </div>
                <div className="blog__list__items">
                  <Link href="#" className="blog__item">
                    <li>
                      <h3 className="blog__items__title">Post Title</h3>
                    </li>
                    <li>
                      <p className="blog__info">
                        <span className="post__date date__post">12 Feb 21</span>
                        Design System
                      </p>
                    </li>
                    <li>
                      <p className="blog__text">
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim
                        velit mollit. Exercitation veniam consequat sunt nostrud
                        amet.
                      </p>
                    </li>
                  </Link>
                </div>
                <div className="blog__list__items">
                  <Link href="#" className="blog__item">
                    <li>
                      <h3 className="blog__items__title">Post Title</h3>
                    </li>
                    <li>
                      <p className="blog__info">
                        <span className="post__date date__post">12 Feb 21</span>
                        Design System
                      </p>
                    </li>
                    <li>
                      <p className="blog__text">
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim
                        velit mollit. Exercitation veniam consequat sunt nostrud
                        amet.
                      </p>
                    </li>
                  </Link>
                </div>
                <div className="blog__list__items">
                  <Link href="#" className="blog__item">
                    <li>
                      <h3 className="blog__items__title">Post Title</h3>
                    </li>
                    <li>
                      <p className="blog__info">
                        <span className="post__date date__post">12 Feb 21</span>
                        Design System
                      </p>
                    </li>
                    <li>
                      <p className="blog__text">
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim
                        velit mollit. Exercitation veniam consequat sunt nostrud
                        amet.
                      </p>
                    </li>
                  </Link>
                </div>
              </ul>
            </div>
          </section>
        </main>
      </body>
    </>
  );
};

export default Blog;
