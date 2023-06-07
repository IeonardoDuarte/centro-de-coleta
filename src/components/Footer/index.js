import React from 'react';
import './styles.css';

export default function Footer() {
  return (
    <div className="footer">
      <ul>
        <li>
          <a href="/politica-privacidade">Política de Privacidade</a>
        </li>
        <li>
          <a href="/termos-condicoes">Termos e Condições</a>
        </li>
        <li>
          <a href="/politica-cookies">Política de Cookies</a>
        </li>
        <li>
          <a href="/contato">Contato</a>
        </li>
      </ul>
      <p className="footer-message">&copy; 2023 Coleta Sustentável. Todos os direitos reservados.</p>
    </div>
  );
}
