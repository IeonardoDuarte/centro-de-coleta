import "./styles.css";

export default function HomePage() {
    return (
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>

            <section class="hero hero-box">
                <div class="container">
                    <h1 class="hero-title">Contribua para um futuro melhor</h1>
                    <p class="hero-description">Faça parte do projeto de coleta de alimentos e materiais recicláveis</p>
                    <a href="/login" class="hero-cta">Agende uma Coleta</a>
                </div>
            </section>

            <section class="features">
                <div class="container">
                    <div class="feature">
                        <i class="fas fa-utensils"></i>
                        <h2 class="feature-title">Coleta de Alimentos</h2>
                        <p class="feature-description">Doe alimentos não utilizados e ajude a alimentar pessoas necessitadas.</p>
                    </div>
                    <div class="feature">
                        <i class="fas fa-recycle"></i>
                        <h2 class="feature-title">Coleta de Materiais Recicláveis</h2>
                        <p class="feature-description">Recicle plástico, papel, vidro e metal para preservar o meio ambiente.</p>
                    </div>
                    <div class="feature">
                        <i class="fas fa-calendar-check"></i>
                        <h2 class="feature-title">Agendamento Fácil</h2>
                        <p class="feature-description">Cadastre-se e agende a coleta de acordo com sua disponibilidade.</p>
                    </div>
                </div>
            </section>
        </>
    )
}