import React from 'react';
import './newsletterFooter.scss';
import econverseLogo from '../../assets/images/econverse-logo.png';
import instagramIcon from '../../assets/svgs/instagram-icon.svg';
import facebookIcon from '../../assets/svgs/facebook-icon.svg';
import linkedinIcon from '../../assets/svgs/linkedin-icon.svg';

const NewsletterFooter: React.FC = () => {
  return (
    <footer className="newsletter-footer">
      <div className="newsletter-footer__content">
        <div className="newsletter-footer__column-1">
          <h2>Inscreva-se na nossa newsletter</h2>
          <p>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos <br />
            da Econverse.
          </p>
        </div>

        <div className="newsletter-footer__column-2">
          <div className="newsletter-form">
            <input type="text" placeholder="Digite seu nome" />
            <input type="email" placeholder="Digite seu e-mail" />
            <button>INSCREVER</button>
          </div>
          <label className="terms-checkbox">
            <input type="checkbox" />
            Aceito os termos e condições
          </label>
        </div>
      </div>

      <div className="footer-section">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={econverseLogo} alt="Econverse Logo" />
            <p>Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit.</p>
            <div className="social-icons">
              <img src={instagramIcon} alt="" />
              <img src={facebookIcon} alt="" />
              <img src={linkedinIcon} alt="" />
            </div>
          </div>
          <div className="footer-links">
            <div className="footer-links-column">
              <h3>Institucional</h3>
              <ul>
                <li>Sobre Nós</li>
                <li>Movimento</li>
                <li>Trabalhe conosco</li>
              </ul>
            </div>
            <div className="footer-links-column">
              <h3>Ajuda</h3>
              <ul>
                <li>Suporte</li>
                <li>Fale Conosco</li>
                <li>Perguntas Frequentes</li>
              </ul>
            </div>
            <div className="footer-links-column">
              <h3>Termos</h3>
              <ul>
                <li>Termos e Condições</li>
                <li>Política de Privacidade</li>
                <li>Troca e Devolução</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </footer>
  );
};

export default NewsletterFooter;