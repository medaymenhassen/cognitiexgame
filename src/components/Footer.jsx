const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className="footer-column">
                    <div className="footer-logo">
                        <img src="logo.jpg" alt="Logo" />
                    </div>
                    <ul className="social-links">
                        <li>
                            <a href="#">
                                <img src="Facebook.png" className="fab fa-facebook" alt="Facebook" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="LinkedIn.png" className="fab fa-linkedin" alt="LinkedIn" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="Instagram.png" className="fab fa-instagram" alt="Instagram" />
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h3>Our Services</h3>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/contact">Service</a>
                        </li>
                        <li>
                            <a href="/about">Work</a>
                        </li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h3>Get In Touch</h3>
                    <p>Address: Cité El Menezeh 2, Kalaa Sghira, Maison 216, Sousse, Tunisie</p>
                    <p>Phone: +216 52920993</p>
                    <p>Email: <a href="mailto:mohamedaimenhec@gmail.com">mohamedaimenhec@gmail.com</a></p>
                    <p>Website: <a href="https://tetesss.pythonanywhere.com/">Visit Here</a></p>
                </div>
            </div>
            <div className="footer-line">
                <p>© 2025 All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
