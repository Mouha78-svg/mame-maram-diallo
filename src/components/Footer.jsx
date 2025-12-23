const Footer = () => {
  return (
    <div>
      <footer className="section footer">
        <ul className="footer-links">
          <li>
            <a href="#home" className="footer-link">
              home
            </a>
          </li>
          <li>
            <a href="#about" className="footer-link">
              about
            </a>
          </li>
          <li>
            <a href="#services" className="footer-link">
              services
            </a>
          </li>
          <li>
            <a href="#featured" className="footer-link">
              actualités
            </a>
          </li>
        </ul>
        <ul className="footer-icons">
          <li>
            <a
              href="https://www.twitter.com"
              target="_blank"
              className="footer-icon"
              rel="noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com"
              target="_blank"
              className="footer-icon"
              rel="noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com"
              target="_blank"
              className="footer-icon"
              rel="noreferrer"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
          </li>
        </ul>
        <p className="copyright">
          copyright &copy; Famille Mame Maram Diallo
          <span>{new Date().getFullYear()}</span> Tous droits réservés.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
