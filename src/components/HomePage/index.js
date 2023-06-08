import "./styles.css";

export default function HomePage() {
    return (
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>

            <section className="hero hero-box">
                <div className="container">
                    <h1 className="hero-title">Contribua para um futuro melhor</h1>
                    <p className="hero-description">Faça parte do projeto de coleta de alimentos e materiais recicláveis</p>
                    <a href="/login" className="hero-cta">Agende uma Coleta</a>
                </div>
            </section>

            <section className="features">
                <div className="container">
                    <div className="feature">
                        <i className="fas fa-utensils"></i>
                        <h2 className="feature-title">Coleta de Alimentos</h2>
                        <p className="feature-description">Doe alimentos não utilizados e ajude a alimentar pessoas necessitadas.</p>
                    </div>
                    <div className="feature">
                        <i className="fas fa-recycle"></i>
                        <h2 className="feature-title">Coleta de Materiais Recicláveis</h2>
                        <p className="feature-description">Recicle plástico, papel, vidro e metal para preservar o meio ambiente.</p>
                    </div>
                    <div className="feature">
                        <i className="fas fa-calendar-check"></i>
                        <h2 className="feature-title">Agendamento Fácil</h2>
                        <p className="feature-description">Cadastre-se e agende a coleta de acordo com sua disponibilidade.</p>
                    </div>
                </div>
            </section>
        </>
    )
}