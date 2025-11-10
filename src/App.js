import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll("[id]");
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleToolClick = (tool, prompt) => {
    const urls = {
      chatgpt: "https://chat.openai.com/",
      gemini: "https://gemini.google.com/",
    };

    // En una implementación real, podrías pasar el prompt como parámetro
    window.open(urls[tool], "_blank");
  };

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          <a
            href="#hero"
            className="nav-logo"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("hero");
            }}
          >
            <svg
              className="nav-logo-icon"
              fill="none"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
            <span>Uso de IA en Ingeniería</span>
          </a>
          <ul className="nav-links">
            <li>
              <button
                className="nav-link"
                onClick={() => scrollToSection("resultados")}
              >
                Resultados
              </button>
            </li>
            <li>
              <button
                className="nav-link"
                onClick={() => scrollToSection("desafios")}
              >
                Ámbitos
              </button>
            </li>
            <li>
              <button
                className="nav-link"
                onClick={() => scrollToSection("herramientas")}
              >
                Herramientas
              </button>
            </li>
            <li>
              <button
                className="nav-link"
                onClick={() => scrollToSection("compartir")}
              >
                Conclusiones
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="hero-content">
          <div className="hero-badge">
            📊 Estudio 2025 • Curso Interfaces Humano-Computador • Ingeniería UC
          </div>
          <h1>¿Cómo Usamos la IA en Ingeniería?</h1>
          <p className="hero-subtitle">
            Estudio sobre el uso de herramientas de IA por estudiantes de
            ingeniería en Chile. Análisis de 221 conversaciones reales en
            contextos profesionales, académicos y cotidianos.
          </p>
          <button
            className="hero-cta"
            onClick={() => scrollToSection("resultados")}
          >
            Ver los Hallazgos
            <span className="material-symbols-outlined">arrow_downward</span>
          </button>
        </div>
      </section>

      {/* Resultados Section */}
      <section id="resultados" className="section">
        <div className="section-header">
          <h2 className="section-title">Resultados Clave del Estudio</h2>
          <p className="section-description">
            Analizamos 221 interacciones autorreportadas de estudiantes de
            Ingeniería en el curso de Interfaces Humano Computador. Metodología:
            encuesta sobre la última conversación con una IA.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-label">IA Más Utilizada</div>
            <div className="stat-value">ChatGPT</div>
            <div className="stat-change">81.9% de las interacciones</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Uso Principal</div>
            <div className="stat-value">Programación</div>
            <div className="stat-change">41.2% del total</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Contexto Dominante</div>
            <div className="stat-value">Profesional</div>
            <div className="stat-change">47.1% de conversaciones</div>
          </div>
        </div>

        {/* Charts */}
        <div className="charts-grid">
          <div className="chart-card">
            <div className="chart-header">
              <div className="chart-title">Categorías de Uso de IA</div>
              <div className="chart-main-value">Ayuda Técnica Domina</div>
              <div className="chart-subtitle">Distribución por categoría</div>
            </div>
            <div className="bar-chart">
              {[
                { label: "Technical Help", height: 100 },
                { label: "Writing", height: 38 },
                { label: "Practical", height: 37 },
                { label: "Info", height: 32 },
                { label: "Multimedia", height: 8 },
              ].map((item, index) => (
                <div key={index} className="bar-item">
                  <div className="bar-column" style={{ height: "100%" }}>
                    <div
                      className="bar-fill"
                      style={{
                        height: isVisible.resultados ? `${item.height}%` : "0%",
                      }}
                    />
                  </div>
                  <div className="bar-label">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="chart-card">
            <div className="chart-header">
              <div className="chart-title">Herramientas IA Utilizadas</div>
              <div className="chart-main-value">ChatGPT Domina Ampliamente</div>
              <div className="chart-subtitle">
                Distribución entre encuestados
              </div>
            </div>
            <div className="progress-chart">
              {[
                { label: "ChatGPT", value: 81.9 },
                { label: "Gemini", value: 13.6 },
                { label: "Claude", value: 4.5 },
              ].map((item, index) => (
                <div key={index} className="progress-item">
                  <div className="progress-label">{item.label}</div>
                  <div className="progress-bar-container">
                    <div
                      className="progress-bar-fill"
                      style={{
                        width: isVisible.resultados ? `${item.value}%` : "0%",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Desafíos Section */}
      <section id="desafios" className="section">
        <div className="section-header">
          <h2 className="section-title">¿Para Qué Usamos la IA?</h2>
          <p className="section-description">
            Clasificamos las conversaciones en tres ámbitos principales según su
            contexto de uso. La IA se consolida como herramienta de
            productividad y aprendizaje.
          </p>
        </div>

        <div className="problems-grid">
          <div className="problem-card">
            <div className="problem-icon">
              <span className="material-symbols-outlined">work</span>
            </div>
            <h3 className="problem-title">Ámbito Profesional</h3>
            <p className="problem-description">
              <strong>47.1%</strong> de las conversaciones. Casi la mitad de las
              interacciones son en contextos laborales o técnicos: programación,
              análisis de datos, proyección de vida laboral futura o actual, y
              resolución de tareas productivas.
            </p>
          </div>

          <div className="problem-card">
            <div className="problem-icon">
              <span className="material-symbols-outlined">school</span>
            </div>
            <h3 className="problem-title">Ámbito Académico</h3>
            <p className="problem-description">
              <strong>29.4%</strong> del uso. Confirma un uso importante como
              herramienta de apoyo al estudio y aprendizaje. Especialmente para
              reforzar contenidos o desarrollar tareas y proyectos
              universitarios.
            </p>
          </div>

          <div className="problem-card">
            <div className="problem-icon">
              <span className="material-symbols-outlined">home</span>
            </div>
            <h3 className="problem-title">Vida Cotidiana</h3>
            <p className="problem-description">
              <strong>23.5%</strong> de las interacciones. Casi un cuarto de los
              usos. A pesar de ser el menos popular, existe uso importante en
              temas como recetas, regalos, relaciones, curiosidades y consejos
              prácticos.
            </p>
          </div>
        </div>
      </section>

      {/* Herramientas Section */}
      <section id="herramientas" className="section">
        <div className="section-header">
          <h2 className="section-title">Probá Estas Herramientas</h2>
          <p className="section-description">
            Las plataformas de IA más populares entre estudiantes de ingeniería.
            ChatGPT lidera con 81.9%, seguido por Gemini (13.6%) y Claude
            (4.5%).
          </p>
        </div>

        <div className="ai-tools-grid">
          {/* ChatGPT */}
          <div className="ai-tool-card">
            <div className="ai-tool-header">
              <div className="ai-tool-logo chatgpt-logo">GPT</div>
              <div>
                <h3 className="ai-tool-name">ChatGPT</h3>
                <span
                  style={{ fontSize: "0.75rem", color: "var(--text-light)" }}
                >
                  81.9% de uso
                </span>
              </div>
            </div>
            <p className="ai-tool-description">
              La herramienta más popular entre estudiantes. Ideal para
              programación (41.2% de uso), redacción, tutorías y resolución de
              problemas técnicos complejos.
            </p>
            <div className="use-cases">
              <div className="use-cases-title">
                Los estudiantes lo usan para:
              </div>
              <ul className="use-cases-list">
                <li className="use-case-item">
                  <span className="material-symbols-outlined use-case-icon">
                    check_circle
                  </span>
                  Programación y debugging (41.2%)
                </li>
                <li className="use-case-item">
                  <span className="material-symbols-outlined use-case-icon">
                    check_circle
                  </span>
                  Buscar información específica (11.8%)
                </li>
                <li className="use-case-item">
                  <span className="material-symbols-outlined use-case-icon">
                    check_circle
                  </span>
                  Tutorías y enseñanza (8.6%)
                </li>
                <li className="use-case-item">
                  <span className="material-symbols-outlined use-case-icon">
                    check_circle
                  </span>
                  Edición y crítica de textos (7.2%)
                </li>
              </ul>
            </div>
            <button
              className="ai-tool-button"
              onClick={() => handleToolClick("chatgpt", "backend-help")}
            >
              Probar con ChatGPT
              <span className="material-symbols-outlined">open_in_new</span>
            </button>
          </div>

          {/* Gemini */}
          <div className="ai-tool-card">
            <div className="ai-tool-header">
              <div className="ai-tool-logo gemini-logo">✨</div>
              <div>
                <h3 className="ai-tool-name">Gemini</h3>
                <span
                  style={{ fontSize: "0.75rem", color: "var(--text-light)" }}
                >
                  13.6% de uso
                </span>
              </div>
            </div>
            <p className="ai-tool-description">
              Segunda opción más popular. Usado principalmente para ayuda
              técnica y búsqueda de información. Integra bien con el ecosistema
              de Google.
            </p>
            <div className="use-cases">
              <div className="use-cases-title">
                Los estudiantes lo usan para:
              </div>
              <ul className="use-cases-list">
                <li className="use-case-item">
                  <span className="material-symbols-outlined use-case-icon">
                    check_circle
                  </span>
                  Ayuda técnica y programación
                </li>
                <li className="use-case-item">
                  <span className="material-symbols-outlined use-case-icon">
                    check_circle
                  </span>
                  Búsqueda de información
                </li>
                <li className="use-case-item">
                  <span className="material-symbols-outlined use-case-icon">
                    check_circle
                  </span>
                  Redacción y edición
                </li>
                <li className="use-case-item">
                  <span className="material-symbols-outlined use-case-icon">
                    check_circle
                  </span>
                  Multimedia y contenido visual
                </li>
              </ul>
            </div>
            <button
              className="ai-tool-button"
              onClick={() => handleToolClick("gemini", "backend-help")}
            >
              Probar con Gemini
              <span className="material-symbols-outlined">open_in_new</span>
            </button>
          </div>

          {/* Claude */}
          <div className="ai-tool-card">
            <div className="ai-tool-header">
              <div
                className="ai-tool-logo"
                style={{
                  background:
                    "linear-gradient(135deg, #D97757 0%, #C65D3B 100%)",
                }}
              >
                🤖
              </div>
              <div>
                <h3 className="ai-tool-name">Claude</h3>
                <span
                  style={{ fontSize: "0.75rem", color: "var(--text-light)" }}
                >
                  4.5% de uso
                </span>
              </div>
            </div>
            <p className="ai-tool-description">
              Usado principalmente para tareas técnicas especializadas. Aunque
              menos popular, es preferido por algunos estudiantes para análisis
              de código detallado.
            </p>
            <div className="use-cases">
              <div className="use-cases-title">
                Los estudiantes lo usan para:
              </div>
              <ul className="use-cases-list">
                <li className="use-case-item">
                  <span className="material-symbols-outlined use-case-icon">
                    check_circle
                  </span>
                  Ayuda técnica especializada
                </li>
                <li className="use-case-item">
                  <span className="material-symbols-outlined use-case-icon">
                    check_circle
                  </span>
                  Análisis de código complejo
                </li>
                <li className="use-case-item">
                  <span className="material-symbols-outlined use-case-icon">
                    check_circle
                  </span>
                  Revisión de documentación
                </li>
                <li className="use-case-item">
                  <span className="material-symbols-outlined use-case-icon">
                    check_circle
                  </span>
                  Consultas técnicas avanzadas
                </li>
              </ul>
            </div>
            <a
              className="ai-tool-button"
              href="https://claude.ai"
              target="_blank"
              rel="noopener noreferrer"
            >
              Probar con Claude
              <span className="material-symbols-outlined">open_in_new</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="compartir" className="section">
        <div className="cta-section">
          <div className="cta-icon">
            <span className="material-symbols-outlined">insights</span>
          </div>
          <h2 className="cta-title">Conclusiones del Estudio</h2>

          <div
            style={{
              marginBottom: "2rem",
              textAlign: "left",
              maxWidth: "800px",
              margin: "0 auto 2rem",
            }}
          >
            <h3
              style={{
                fontSize: "1.25rem",
                marginBottom: "1rem",
                color: "var(--primary)",
              }}
            >
              🎯 Hallazgo Clave: El Propósito General
            </h3>
            <p className="cta-description" style={{ marginBottom: "1rem" }}>
              Independiente de qué IA uses (ChatGPT, Gemini o Claude),{" "}
              <strong>el propósito suele ser el mismo</strong>. Los estudiantes
              perciben estos asistentes de IA de propósito general como
              herramientas efectivamente generales. No hay una especialización
              clara por herramienta.
            </p>

            <h3
              style={{
                fontSize: "1.25rem",
                marginBottom: "1rem",
                marginTop: "2rem",
                color: "var(--primary)",
              }}
            >
              💻 Uso Predominantemente Técnico
            </h3>
            <p className="cta-description" style={{ marginBottom: "1rem" }}>
              El uso principal está enfocado en{" "}
              <strong>actividades técnicas y de aprendizaje</strong>. Computer
              Programming representa el <strong>41.18%</strong> del total,
              siendo la categoría dominante. Los usos personales, creativos o
              recreativos son secundarios.
            </p>

            <h3
              style={{
                fontSize: "1.25rem",
                marginBottom: "1rem",
                marginTop: "2rem",
                color: "var(--primary)",
              }}
            >
              📚 Herramienta de Productividad y Aprendizaje
            </h3>
            <p className="cta-description" style={{ marginBottom: "1rem" }}>
              Las herramientas de IA se consolidan como instrumentos de{" "}
              <strong>productividad profesional y apoyo académico</strong>, con
              presencia también en aspectos cotidianos. Reflejan una orientación
              profesional y académica en la mayoría de las interacciones.
            </p>
          </div>

          <div
            style={{
              marginTop: "2rem",
              marginBottom: "2rem",
              padding: "1rem",
              background: "rgba(255,193,7,0.1)",
              borderRadius: "0.5rem",
              border: "1px solid rgba(255,193,7,0.3)",
            }}
          >
            <p
              className="cta-description"
              style={{ fontSize: "0.875rem", marginBottom: "0" }}
            >
              ⚠️ <strong>Limitación metodológica:</strong> Este estudio presenta
              un sesgo de muestreo al recolectar datos mediante muestreo por
              conveniencia en un curso de Interfaces Humano Computador
              (Ingeniería/Computación).
            </p>
          </div>

          <div
            style={{
              marginTop: "2rem",
              padding: "1rem",
              background: "rgba(19, 91, 236, 0.1)",
              borderRadius: "0.5rem",
              border: "1px solid rgba(19, 91, 236, 0.3)",
            }}
          >
            <p
              className="cta-description"
              style={{ fontSize: "0.875rem", marginBottom: "0.5rem" }}
            >
              📖 <strong>Basado en:</strong> How People Use ChatGPT
            </p>
            <a
              href="https://cdn.openai.com/pdf/a253471f-8260-40c6-a2cc-aa93fe9f142e/economic-research-chatgpt-usage-paper.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "0.75rem",
                color: "var(--primary)",
                textDecoration: "underline",
              }}
            >
              Ver paper de referencia →
            </a>
          </div>

          <h3
            style={{
              fontSize: "1.5rem",
              marginBottom: "1rem",
              marginTop: "3rem",
            }}
          >
            Compartí Este Estudio
          </h3>
          <p className="cta-description" style={{ marginBottom: "2rem" }}>
            Si estos datos te sirvieron, compartilo con tus compañeros de
            ingeniería.
          </p>
          <div className="social-buttons">
            <a
              href="https://twitter.com/intent/tweet?text=Mirá%20este%20estudio%20sobre%20IA%20en%20backend"
              target="_blank"
              rel="noopener noreferrer"
              className="social-button"
            >
              <span>🐦 Twitter</span>
            </a>
            <a
              href="https://www.linkedin.com/sharing/share-offsite/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-button"
            >
              <span>💼 LinkedIn</span>
            </a>
            <a
              href="https://wa.me/?text=Mirá%20este%20estudio%20sobre%20IA%20en%20backend"
              target="_blank"
              rel="noopener noreferrer"
              className="social-button"
            >
              <span>💬 WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <ul className="footer-links">
          <li>
            <a href="#hero" className="footer-link">
              Inicio
            </a>
          </li>
          <li>
            <a href="#resultados" className="footer-link">
              Resultados
            </a>
          </li>
          <li>
            <a href="#desafios" className="footer-link">
              Ámbitos
            </a>
          </li>
          <li>
            <a
              href="https://cdn.openai.com/pdf/a253471f-8260-40c6-a2cc-aa93fe9f142e/economic-research-chatgpt-usage-paper.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Metodología
            </a>
          </li>
        </ul>
        <p className="footer-copyright">
          © 2025 Estudio sobre Uso de IA • Curso IHC • Estudiantes de Ingeniería
          Chile
        </p>
      </footer>
    </div>
  );
}

export default App;
