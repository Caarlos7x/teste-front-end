import React from 'react';
import './newsletterFooter.scss';
import econverseLogo from '../../assets/images/econverse-logo.png';
import instagramIcon from '../../assets/svgs/instagram-icon.svg';
import facebookIcon from '../../assets/svgs/facebook-icon.svg';
import linkedinIcon from '../../assets/svgs/linkedin-icon.svg';

const NewsletterFooter: React.FC = () => {
  return (
    <footer className="newsletter-footer">
      <section className="newsletter-footer__content">
        <div className="newsletter-footer__column-1">
          <h2>Inscreva-se na nossa newsletter</h2>
          <p>
            Assine a nossa newsletter e receba as novidades e conteúdos exclusivos <br />
            da Econverse.
          </p>
        </div>

        <div className="newsletter-footer__column-2">
          <form className="newsletter-form">
            <input type="text" placeholder="Digite seu nome" aria-label="Digite seu nome" />
            <input type="email" placeholder="Digite seu e-mail" aria-label="Digite seu e-mail" />
            <button type="submit" aria-label="Inscrever na newsletter">INSCREVER</button>
          </form>
          <label className="terms-checkbox">
            <input type="checkbox" aria-label="Aceito os termos e condições" />
            Aceito os termos e condições
          </label>
        </div>
      </section>

      <section className="footer-section">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={econverseLogo} alt="Logo da Econverse" />
            <p>Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit.</p>
            <div className="social-icons">
              <a href="https://instagram.com" aria-label="Instagram">
                <img src={instagramIcon} alt="Ícone do Instagram" />
              </a>
              <a href="https://facebook.com" aria-label="Facebook">
                <img src={facebookIcon} alt="Ícone do Facebook" />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn">
                <img src={linkedinIcon} alt="Ícone do LinkedIn" />
              </a>
            </div>
          </div>

          <nav className="footer-links">
            <div className="footer-links-column">
              <h3>Institucional</h3>
              <ul>
                <li><a href="/sobre-nos">Sobre Nós</a></li>
                <li><a href="/movimento">Movimento</a></li>
                <li><a href="/trabalhe-conosco">Trabalhe conosco</a></li>
              </ul>
            </div>
            <div className="footer-links-column">
              <h3>Ajuda</h3>
              <ul>
                <li><a href="/suporte">Suporte</a></li>
                <li><a href="/fale-conosco">Fale Conosco</a></li>
                <li><a href="/perguntas-frequentes">Perguntas Frequentes</a></li>
              </ul>
            </div>
            <div className="footer-links-column">
              <h3>Termos</h3>
              <ul>
                <li><a href="/termos-condicoes">Termos e Condições</a></li>
                <li><a href="/politica-privacidade">Política de Privacidade</a></li>
                <li><a href="/troca-devolucao">Troca e Devolução</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </section>

      <section className="footer-bottom">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </section>
    </footer>
  );
};

export default NewsletterFooter;