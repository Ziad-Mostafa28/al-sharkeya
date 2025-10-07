import { FaSearch, FaBars, FaChevronDown } from "react-icons/fa";
import styles from "./Header.module.css";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../../../store/slices/langSlice";


export default function Header() {

  const dispatch = useDispatch();
  const lang = useSelector((state) => state.lang.lang);
  const navigate = useNavigate();
  const location = useLocation();

  // const toggleLang = (e) => {
  //     // لو استدعيت من عنصر a/button ما نحتاج preventDefault لأن نحن نستخدم button
  //     const newLang = lang === "en" ? "ar" : "en";
  //     localStorage.setItem("lang", newLang);

  //     // suffix = كل الباقي بعد /en أو /ar أو كامل الباث لو مفيهوش prefix
  //     const suffix = location.pathname.replace(/^\/(en|ar)/, "");
  //     const newPath = `/${newLang}${suffix}${location.search || ""}${location.hash || ""}`;

  //     console.log("[toggleLang] from:", location.pathname, "to:", newPath);

  //     dispatch(setLanguage(newLang));
  //     navigate(newPath, { replace: true });
  //   };

  const toggleLang = () => {
    const newLang = lang === "en" ? "ar" : "en";
    const newPath = location.pathname.replace(/^\/(ar|en)/, `/${newLang}`);
    dispatch(setLanguage(newLang));
    navigate(newPath);
  };


  const [dropdownOpen, setDropdownOpen] = useState({
    aboutus: false,
    products: false,
    resources: false,
    sustainability: false,
  });


  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleDropdown = (key) => {
    setDropdownOpen((prev) => {
      const newState = {
        aboutus: false,
        products: false,
        resources: false,
        sustainability: false,
      };
      newState[key] = !prev[key];
      return newState;
    });
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setDropdownOpen({
      aboutus: false,
      products: false,
      resources: false,
      sustainability: false,
    });
  };

  return (
    <>
      {/* Desktop Header - Only visible on screens >= 1200px */}
      <header className={`${styles.header} ${styles.desktopHeader}`}>
        <div className="container-fluid d-flex align-items-center justify-content-between">
          {/* Logo */}
          <div className="d-flex align-items-center">
            <Link to={`/${lang}`}>
              <img
                src="/img/homepage/logo.png"
                alt="Al Sharkeya Sugar"
                style={{ height: "5rem" }}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="navbar navbar-expand-xl">
            <div className="navbar-collapse justify-content-center">
              <ul className="navbar-nav gap-2">
                <li className="nav-item">
                  <a className={`nav-link dropdown-toggle ${styles.linkmenu}`} role="button"
                    data-bs-toggle="dropdown" href="#">
                    About Us
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                      <path d="M7.25816 10.809C6.84848 10.809 6.43881 10.651 6.12863 10.3408L2.31284 6.52499C2.14312 6.35527 2.14312 6.07436 2.31284 5.90463C2.48256 5.73491 2.76348 5.73491 2.9332 5.90463L6.74899 9.72043C7.02991 10.0013 7.4864 10.0013 7.76732 9.72043L11.5831 5.90463C11.7528 5.73491 12.0338 5.73491 12.2035 5.90463C12.3732 6.07436 12.3732 6.35527 12.2035 6.52499L8.38768 10.3408C8.0775 10.651 7.66783 10.809 7.25816 10.809Z" fill="white" stroke="white" stroke-width="0.501638" />
                    </svg>            
                          </a>
                  <ul className={`dropdown-menu ${styles.linkmenudesktop}`} >
                    <li className={`${styles.limenu}`}>
                      <Link className="dropdown-item" to="about-us/who-we-are">
                        Who We Are
                      </Link>
                    </li>
                    <li className={`${styles.limenu}`}>
                      <Link className="dropdown-item" to="about-us/our-strategy">
                        Our Strategy
                      </Link>
                    </li>
                    <li className={`${styles.limenu}`}>
                      <Link className="dropdown-item" to="about-us/company-history">
                        Company History
                      </Link>
                    </li>
                    <li className={`${styles.limenu}`}>
                      <Link className="dropdown-item" to="about-us/our-shareholders">
                        Our Shareholders
                      </Link>
                    </li>
                    <li className={`${styles.limenu}`}>
                      <Link className="dropdown-item" to="about-us/board-members">
                        Board Members
                      </Link>
                    </li>
                    <li className={`${styles.limenu}`}>
                      <Link className="dropdown-item" to="about-us/management-team">
                        Management Team 
                      </Link>
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
                    Our Products
                    {/* <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="_chevronIcon_4vcs0_385 mx-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg> */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                      <path d="M7.25816 10.809C6.84848 10.809 6.43881 10.651 6.12863 10.3408L2.31284 6.52499C2.14312 6.35527 2.14312 6.07436 2.31284 5.90463C2.48256 5.73491 2.76348 5.73491 2.9332 5.90463L6.74899 9.72043C7.02991 10.0013 7.4864 10.0013 7.76732 9.72043L11.5831 5.90463C11.7528 5.73491 12.0338 5.73491 12.2035 5.90463C12.3732 6.07436 12.3732 6.35527 12.2035 6.52499L8.38768 10.3408C8.0775 10.651 7.66783 10.809 7.25816 10.809Z" fill="white" stroke="white" stroke-width="0.501638" />
                    </svg>

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
                      <Link className="dropdown-item" to={'our-products/pellets'}>
                        Pellets
                      </Link>
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
                    Our Responsibilities
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                      <path d="M7.25816 10.809C6.84848 10.809 6.43881 10.651 6.12863 10.3408L2.31284 6.52499C2.14312 6.35527 2.14312 6.07436 2.31284 5.90463C2.48256 5.73491 2.76348 5.73491 2.9332 5.90463L6.74899 9.72043C7.02991 10.0013 7.4864 10.0013 7.76732 9.72043L11.5831 5.90463C11.7528 5.73491 12.0338 5.73491 12.2035 5.90463C12.3732 6.07436 12.3732 6.35527 12.2035 6.52499L8.38768 10.3408C8.0775 10.651 7.66783 10.809 7.25816 10.809Z" fill="white" stroke="white" stroke-width="0.501638" />
                    </svg>

                  </a>
                  <ul className={`dropdown-menu ${styles.linkmenudesktop}`}>
                    <li className={`${styles.limenu}`}>
                      <Link className="dropdown-item" to="our-responsibilities/certifications">
                        Certifications
                      </Link>
                    </li>
                    <li className={`${styles.limenu}`}>
                      <Link className="dropdown-item" to="our-responsibilities/sustainability">
                        Sustainability
                      </Link>
                    </li>
                    {/* <li className={`${styles.limenu}`}>
                      <Link className="dropdown-item" to="our-responsibilities/csr">
                        CSR
                      </Link>
                    </li> */}
                    <li className={`${styles.limenu}`}>
                      <Link className="dropdown-item" to="our-responsibilities/codeconduct">
                        Code of Conduct
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link className={`nav-link ${styles.linkmenu}`} to={"careers"}>
                    Careers
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className={`nav-link dropdown-toggle ${styles.linkmenu}`}
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    Resources
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                      <path d="M7.25816 10.809C6.84848 10.809 6.43881 10.651 6.12863 10.3408L2.31284 6.52499C2.14312 6.35527 2.14312 6.07436 2.31284 5.90463C2.48256 5.73491 2.76348 5.73491 2.9332 5.90463L6.74899 9.72043C7.02991 10.0013 7.4864 10.0013 7.76732 9.72043L11.5831 5.90463C11.7528 5.73491 12.0338 5.73491 12.2035 5.90463C12.3732 6.07436 12.3732 6.35527 12.2035 6.52499L8.38768 10.3408C8.0775 10.651 7.66783 10.809 7.25816 10.809Z" fill="white" stroke="white" stroke-width="0.501638" />
                    </svg>                  </a>
                  <ul className={`dropdown-menu ${styles.linkmenudesktop}`}>
                    <li className={`${styles.limenu}`} >
                      <Link className="dropdown-item" to={'sugar-history'}>
                        Sugar History
                      </Link>
                    </li>
                    <li className={`${styles.limenu}`}>
                      <Link className="dropdown-item" to="recipes">
                        Recipes
                      </Link>
                    </li>
                    <li className={`${styles.limenu}`}>
                      <Link className="dropdown-item" to="facts-about-sugar">
                        Facts About Sugar
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${styles.linkmenu}`} to={"news"}>
                    News
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${styles.linkmenu}`} to={"faqs"}>
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          {/* Desktop Right Controls */}
          <div className="d-flex align-items-center gap-3">
            {/* <button  onClick={toggleLang} className="text-white">
              {lang === 'en' ? 'AR' : 'EN'}
            </button> */}

            {/* search button */}
            {/* <button className="btn btn-link p-0 text-white" onClick={() => setSearchOpen(true)}>
              <FaSearch />
            </button> */}
            <Link to={"contact-us"}

              className="btn rounded-pill px-3 bg-light text-success border-0"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Header - Only visible on screens < 1200px */}
      <header className={`${styles.header} ${styles.mobileHeader}`}>
        <div className="container-fluid d-flex align-items-center justify-content-between position-relative">
          {/* Logo */}
          <div className="d-flex align-items-center">
            <a href="/">
              <img
                src="/img/homepage/logo.png"
                alt="Al Sharkeya Sugar"
                style={{ height: "5rem" }}
              /></a>
          </div>

          {/* Mobile Center Controls - AR and Search (hidden when menu is open) */}
          <div
            className={`d-flex align-items-center gap-3 ${styles.mobileCenter}`}
          >
            {/* <button  onClick={toggleLang} className="text-white">
              {lang === 'en' ? 'AR' : 'EN'}
            </button> */}


            {/* search button in mobile */}
            {/* <button className="btn btn-link p-0 text-white" onClick={() => setSearchOpen(true)}>
              <FaSearch />
            </button> */}

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
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <FaBars className="text-white" />
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`collapse navbar-collapse ${styles.mobileNav}  ${isMenuOpen ? "show" : ""}`}
          id="mobileNavbar"
        >
          <div className="container-fluid">
            <ul className="navbar-nav text-center">
              <li className="nav-item">
                {/* <a className={`nav-link ${styles.linkmenu}`} href="#">
                  About Us
                </a> */}
                <button
                  className={`nav-link ${styles.linkmenu} w-100 d-flex justify-content-center align-items-center gap-2`}
                  onClick={() => toggleDropdown('aboutus')}
                >
                  About Us
                  <FaChevronDown
                    className={`${styles.chevronIcon} ${dropdownOpen.aboutus ? styles.rotated : ''}`}
                  />
                </button>

                {dropdownOpen.aboutus && (
                  <ul className="list-unstyled">
                    <li>
                      <Link className={`nav-link text-white ${styles.nav_link2}`} to="about-us/who-we-are" onClick={closeMenu}>
                        Who We Are
                      </Link>
                    </li>
                    <li>
                      <Link className={`nav-link text-white ${styles.nav_link2}`} onClick={closeMenu} to="about-us/our-strategy">
                        Our Strategy
                      </Link>
                    </li>
                    <li>
                      <Link className={`nav-link text-white ${styles.nav_link2}`} onClick={closeMenu} to="about-us/company-history">
                        Company History
                      </Link>
                    </li>
                    <li>
                      <Link className={`nav-link text-white ${styles.nav_link2}`} onClick={closeMenu} to="about-us/our-shareholders">
                        Our Shareholders
                      </Link>
                    </li>
                    <li>
                      <Link className={`nav-link text-white ${styles.nav_link2}`} onClick={closeMenu} to="about-us/board-members">
                        Board Members
                      </Link>
                    </li>
                    <li>
                      <Link className={`nav-link text-white ${styles.nav_link2}`} onClick={closeMenu} to="about-us/management-team">
                        Management Team
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              {/* Our products dropdown */}
              <li className="nav-item">
                <button
                  className={`nav-link ${styles.linkmenu} w-100 d-flex justify-content-center align-items-center gap-2`}
                  onClick={() => toggleDropdown('products')}
                >
                  Our Products
                  <FaChevronDown
                    className={`${styles.chevronIcon} ${dropdownOpen.products ? styles.rotated : ''}`}
                  />
                </button>

                {dropdownOpen.products && (
                  <ul className="list-unstyled">
                    <li><Link className={`nav-link text-white ${styles.nav_link2}`} onClick={closeMenu} to="our-products/overview">Overview</Link></li>
                    <li><Link className={`nav-link text-white ${styles.nav_link2}`} onClick={closeMenu} to="our-products/white-sugar">White Sugar</Link></li>
                    <li><Link className={`nav-link text-white ${styles.nav_link2}`} onClick={closeMenu} to="our-products/molasses">Molasses</Link></li>
                    <li><Link className={`nav-link text-white ${styles.nav_link2}`} onClick={closeMenu} to={'our-products/pellets'}>Pellets</Link></li>
                  </ul>
                )}
              </li>

              <li className="nav-item">
                <button
                  className={`nav-link ${styles.linkmenu} w-100 d-flex justify-content-center align-items-center gap-2`}
                  onClick={() => toggleDropdown('sustainability')}
                >
                  Our Responsibilities
                  <FaChevronDown
                    className={`${styles.chevronIcon} ${dropdownOpen.sustainability ? styles.rotated : ''}`}
                  />
                </button>

                {dropdownOpen.sustainability && (
                  <ul className="list-unstyled">
                    <li className={`${styles.limenu}`}>
                      <Link className={`nav-link text-white ${styles.nav_link2}`} onClick={closeMenu} to="our-responsibilities/certifications">
                        Certifications
                      </Link>
                    </li>
                    <li className={`${styles.limenu}`}>
                      <Link className={`nav-link text-white ${styles.nav_link2}`} onClick={closeMenu} to="our-responsibilities/sustainability">
                        Sustainability
                      </Link>
                    </li>
                    {/* <li className={`${styles.limenu}`}>
                      <Link className={`nav-link text-white ${styles.nav_link2}`} onClick={closeMenu} to="our-responsibilities/csr">
                        CSR
                      </Link>
                    </li> */}
                    <li className={`${styles.limenu}`}>
                      <Link className={`nav-link text-white ${styles.nav_link2}`} onClick={closeMenu} to="our-responsibilities/codeconduct">
                        Code of Conduct
                      </Link>
                    </li>

                  </ul>
                )}
              </li>


              <li className="nav-item">
                <Link className={`nav-link ${styles.linkmenu}`} onClick={closeMenu} to={"careers"}>
                  Careers
                </Link>
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

                    <li><Link className={`nav-link text-white ${styles.nav_link2}`} onClick={closeMenu} to={'sugar-history'}>Sugar History</Link></li>
                    <li><Link className={`nav-link text-white ${styles.nav_link2}`} onClick={closeMenu} to="recipes">Recipes</Link></li>
                    <li><Link className={`nav-link text-white ${styles.nav_link2}`} onClick={closeMenu} to="facts-about-sugar">Facts About Sugar</Link></li>

                  </ul>
                )}
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${styles.linkmenu}`} onClick={closeMenu} to={"news"}>
                  News
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${styles.linkmenu}`} onClick={closeMenu} to={"faqs"}>
                  FAQs
                </Link>
              </li>
              <li className="nav-item mt-3">
                <Link to={"contact-us"} onClick={closeMenu}
                  className="btn rounded-pill px-3 bg-light text-success border-0"
                >
                  Contact Us
                </Link>
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
