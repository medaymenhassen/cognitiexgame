import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [menuActive, setMenuActive] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    const handleScroll = () => {
        setIsSticky(window.scrollY > 50);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const getTotalItemCount = () => {
        return 3; // Remplace ceci par la logique réelle
    };

    return (
        <header className={isSticky ? "sticky" : ""}>
            <nav className="navbar">
                <div className="logo">
                    <img src="logo.jpg" alt="Logo" />
                </div>
                <div className="menu-icon" onClick={toggleMenu} aria-label="Menu">
                    &#9776;
                </div>
                <div className={`nav-items ${menuActive ? "active" : ""}`}>
                    <Link to="/" onClick={toggleMenu}>
                        Home
                    </Link>
                    <Link to="/liste" onClick={toggleMenu}>
                        List
                    </Link>
                    <Link to="/register" onClick={toggleMenu}>
                        Register
                    </Link>
                    <Link to="/cart" onClick={toggleMenu}>
                        <i className="fa fa-shopping-cart"></i> Cart (
                        <span className="cart-list">{getTotalItemCount()}</span>)
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
