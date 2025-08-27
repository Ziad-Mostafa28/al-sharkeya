import { FaSearch, FaBars, FaChevronDown } from "react-icons/fa";
import styles from "./Header.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState({
    aboutus: false,
    products: false,
    resources: false,
  });

  const toggleDropdown = (key) => {
    setDropdownOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };
  const [searchOpen, setSearchOpen] = useState(false);


  return (
    <>
      {/* Desktop Header - Only visible on screens >= 1200px */}
      <header className={`${styles.header} ${styles.desktopHeader}`}>
        <div className="container-fluid d-flex align-items-center justify-content-between">
          {/* Logo */}
          <div className="d-flex align-items-center">
            <a href="/">
              <img
                src="/img/homepage/logo.png"
                alt="Al Sharkeya Sugar"
                style={{ height: "5rem" }}
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="navbar navbar-expand-xl">
            <div className="navbar-collapse justify-content-center">
              <ul className="navbar-nav gap-2">
                <li className="nav-item">
                  <a className={`nav-link dropdown-toggle ${styles.linkmenu}`} role="button"
                    data-bs-toggle="dropdown" href="#">
                    About us
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="_chevronIcon_4vcs0_385 ms-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>
                  </a>
                  <ul className={`dropdown-menu ${styles.linkmenudesktop}`} >
                    <li className={`${styles.limenu}`}>
                      <Link className="dropdown-item" to="about-us/Who-We-Are">
                        Who we are
                      </Link>
                    </li>
                    <li className={`${styles.limenu}`}>
                      <Link className="dropdown-item" to="about-us/Our-Strategy">
                        Our strategy
                      </Link>
                    </li>
                    <li className={`${styles.limenu}`}>
                      <a className="dropdown-item" href="#">
                        Company history
                      </a>
                    </li>
                    <li className={`${styles.limenu}`}>
                      <a className="dropdown-item" href="#">
                        Our shareholders
                      </a>
                    </li>
                    <li className={`${styles.limenu}`}>
                      <a className="dropdown-item" href="#">
                        Board members
                      </a>
                    </li>
                    <li className={`${styles.limenu}`}>
                      <a className="dropdown-item" href="#">
                        Management team
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className={`nav-link dropdown-toggle ${styles.linkmenu}`}
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    Our products
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="_chevronIcon_4vcs0_385 ms-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>
                  </a>
                  <ul className={`dropdown-menu ${styles.linkmenudesktop}`} >
                    <li className={`${styles.limenu}`}>
                      <Link className="dropdown-item" to="our-products/overview">
                        Overview
                      </Link>
                    </li>
                    <li className={`${styles.limenu}`}>
                      <Link className="dropdown-item" to={'our-products/white-sugar'}>
                        White Sugar
                      </Link>
                    </li>
                    <li className={`${styles.limenu}`}>
                      <Link className="dropdown-item" to={'our-products/molasses'}>
                        Molasses
                      </Link>
                    </li>
                    <li className={`${styles.limenu}`}>
                      <a className="dropdown-item" href="#">
                        Pellets
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${styles.linkmenu}`} href="#">
                    Sustainability & CSR
                  </a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${styles.linkmenu}`} href="#">
                    Careers
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className={`nav-link dropdown-toggle ${styles.linkmenu}`}
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    Resources
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="_chevronIcon_4vcs0_385 ms-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>
                  </a>
                  <ul className={`dropdown-menu ${styles.linkmenudesktop}`}>
                    <li className={`${styles.limenu}`} >
                      <a className="dropdown-item" href="#">
                        Sugar history
                      </a>
                    </li>
                    <li className={`${styles.limenu}`}>
                      <a className="dropdown-item" href="#">
                        Recipes
                      </a>
                    </li>
                    <li className={`${styles.limenu}`}>
                      <a className="dropdown-item" href="#">
                        Facts about sugar
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${styles.linkmenu}`} href="#">
                    News
                  </a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${styles.linkmenu}`} href="#">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          {/* Desktop Right Controls */}
          <div className="d-flex align-items-center gap-3">
            <a href="#" className="text-white">
              AR
            </a>
            <button className="btn btn-link p-0 text-white" onClick={() => setSearchOpen(true)}>
              <FaSearch />
            </button>
            <a
              href="#"
              className="btn rounded-pill px-3 bg-light text-success border-0"
            >
              Contact us
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Header - Only visible on screens < 1200px */}
      <header className={`${styles.header} ${styles.mobileHeader}`}>
        <div className="container-fluid d-flex align-items-center justify-content-between position-relative">
          {/* Logo */}
          <div className="d-flex align-items-center">
            <img
              src="/img/homepage/logo.png"
              alt="Al Sharkeya Sugar"
              style={{ height: "5rem" }}
            />
          </div>

          {/* Mobile Center Controls - AR and Search (hidden when menu is open) */}
          <div
            className={`d-flex align-items-center gap-3 ${styles.mobileCenter}`}
          >
            <a href="#" className="text-white">
              AR
            </a>
            <button className="btn btn-link p-0 text-white" onClick={() => setSearchOpen(true)}>
              <FaSearch />
            </button>

          </div>

          {/* Mobile Burger Menu */}
          <button
            className={`navbar-toggler ${styles.burgerMenu}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mobileNavbar"
            aria-controls="mobileNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FaBars className="text-white" />
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`collapse navbar-collapse ${styles.mobileNav}`}
          id="mobileNavbar"
        >
          <div className="container-fluid">
            <ul className="navbar-nav text-center">
              <li className="nav-item">
                {/* <a className={`nav-link ${styles.linkmenu}`} href="#">
                  About us
                </a> */}
                <button
                  className={`nav-link ${styles.linkmenu} w-100 d-flex justify-content-center align-items-center gap-2`}
                  onClick={() => toggleDropdown('aboutus')}
                >
                  About us
                  <FaChevronDown
                    className={`${styles.chevronIcon} ${dropdownOpen.aboutus ? styles.rotated : ''}`}
                  />
                </button>

                {dropdownOpen.aboutus && (
                  <ul className="list-unstyled">
                    <li><a className={`nav-link text-white ${styles.nav_link2}`} href="#">Who we are</a></li>
                    <li><a className={`nav-link text-white ${styles.nav_link2}`} href="#">Our strategy</a></li>
                    <li><a className={`nav-link text-white ${styles.nav_link2}`} href="#">Company history</a></li>
                    <li><a className={`nav-link text-white ${styles.nav_link2}`} href="#">Our shareholders</a></li>
                    <li><a className={`nav-link text-white ${styles.nav_link2}`} href="#">Board members</a></li>
                    <li><a className={`nav-link text-white ${styles.nav_link2}`} href="#">Management team</a></li>
                  </ul>
                )}
              </li>

              {/* Our products dropdown */}
              <li className="nav-item">
                <button
                  className={`nav-link ${styles.linkmenu} w-100 d-flex justify-content-center align-items-center gap-2`}
                  onClick={() => toggleDropdown('products')}
                >
                  Our products
                  <FaChevronDown
                    className={`${styles.chevronIcon} ${dropdownOpen.products ? styles.rotated : ''}`}
                  />
                </button>

                {dropdownOpen.products && (
                  <ul className="list-unstyled">
                    <li><Link className={`nav-link text-white ${styles.nav_link2}`} to="our-products/overview">Overview</Link></li>
                    <li><Link className={`nav-link text-white ${styles.nav_link2}`} to="our-products/white-sugar">White Sugar</Link></li>
                    <li><Link className={`nav-link text-white ${styles.nav_link2}`} to="our-products/molasses">Molasses</Link></li>
                    <li><Link className={`nav-link text-white ${styles.nav_link2}`} to="#">Pellets</Link></li>
                  </ul>
                )}
              </li>

              <li className="nav-item">
                <a className={`nav-link ${styles.linkmenu}`} href="#">
                  Sustainability & CSR
                </a>
              </li>

              <li className="nav-item">
                <a className={`nav-link ${styles.linkmenu}`} href="#">
                  Careers
                </a>
              </li>

              {/* Resources dropdown */}
              <li className="nav-item">
                <button
                  className={`nav-link ${styles.linkmenu} w-100 d-flex justify-content-center align-items-center gap-2`}
                  onClick={() => toggleDropdown('resources')}
                >
                  Resources
                  <FaChevronDown
                    className={`${styles.chevronIcon} ${dropdownOpen.resources ? styles.rotated : ''}`}
                  />
                </button>

                {dropdownOpen.resources && (
                  <ul className="list-unstyled">
                    <li><a className={`nav-link text-white ${styles.nav_link2}`} href="#">Sugar history</a></li>
                    <li><a className={`nav-link text-white ${styles.nav_link2}`} href="#">Recipes</a></li>
                    <li><a className={`nav-link text-white ${styles.nav_link2}`} href="#">Facts about sugar</a></li>
                  </ul>
                )}
              </li>


              <li className="nav-item">
                <a className={`nav-link ${styles.linkmenu}`} href="#">
                  News
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${styles.linkmenu}`} href="#">
                  FAQs
                </a>
              </li>
              <li className="nav-item mt-3">
                <a
                  href="#"
                  className="btn rounded-pill px-3 bg-light text-success border-0"
                >
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>

      {searchOpen && (
        <div className={styles.searchPopup}>
          <div className={styles.searchBox}>
            <input type="text" placeholder="Search..." className={styles.searchInput} />
            <button className={styles.closeBtn} onClick={() => setSearchOpen(false)}>×</button>
          </div>
        </div>
      )}

    </>
  );
}
