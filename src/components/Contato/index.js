import "./styles.css";

export default function Contato() {
    return (
        <>
            <div className="container">
                <h1>Contato da Equipe</h1>

                <p>Somos uma equipe de acadêmicos da FIAP em busca de solucionar problemas que contribuam com a sociedade. Estamos comprometidos em oferecer a melhor experiência e suporte aos nossos usuários. Entre em contato conosco se tiver alguma dúvida, sugestão ou solicitação.</p>

                <div className="section-title">Equipe</div>
                <div className="team-members">
                    <div className="team-member">
                        <h3>Leonardo Duarte</h3>
                        <p>rm85238@fiap.com.br</p>
                    </div>
                    <div className="team-member">
                        <h3>Gustavo Gomes Ferreira</h3>
                        <p>rm84979@fiap.com.br</p>
                    </div>
                    <div className="team-member">
                        <h3>Isadora Pavani</h3>
                        <p>rm93571@fiap.com.br</p>
                    </div>
                    <div className="team-member">
                        <h3>Rafael Hideak Uezato</h3>
                        <p>rm85773@fiap.com.br</p>
                    </div>
                    <div className="team-member">
                        <h3>Marcio Caldas Vieira</h3>
                        <p>rm85161@fiap.com.br</p>
                    </div>
                </div>

                <div className="section-title">Entre em Contato</div>
                <p>Se você tiver alguma dúvida, sugestão ou solicitação, entre em contato conosco através dos endereços de e-mail fornecidos acima.</p>
            </div>
        </>
    )
}