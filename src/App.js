import React from 'react';
import './App.css';
import profileImage from './assets/profile.jpg';

function App() {
  const personalData = {
    photo: profileImage,
    fullName: "Valeria Anabel Cobos Orbe",
    phone: "+593 99 123 4567",
    email: "vale.cobuss@email.com",
    location: "Quito, Ecuador"
  };

  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "Python",
    "SQL",
    "Git",
    "HTML/CSS",
    "MongoDB"
  ];

  const projects = [
    {
      id: 1,
      title: "Sistema de Gestión de Inventarios",
      description: "Aplicación web para gestionar inventarios con React y Node.js",
      technologies: ["React", "Node.js", "MongoDB"],
    },
    {
      id: 2,
      title: "API REST de Productos",
      description: "API completa para manejo de productos con autenticación",
      technologies: ["Node.js", "Express", "JWT"],
      link: "https://github.com/usuario/productos-api"
    },
    {
      id: 3,
      title: "Dashboard de Análisis",
      description: "Dashboard interactivo para visualización de datos",
      technologies: ["React", "Chart.js", "Python"],
      link: "https://github.com/usuario/dashboard-analytics"
    },
    {
      id: 4,
      title: "E-commerce Mobile App",
      description: "Aplicación móvil de comercio electrónico",
      technologies: ["React Native", "Firebase"],
      link: "https://github.com/usuario/ecommerce-mobile"
    }
  ];

  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <h1>Mi Portafolio Personal</h1>
        </div>
      </header>

      <main className="main">
        {/* Sección de Datos Personales */}
        <section className="personal-section" data-testid="personal-section">
          <div className="container">
            <h2>Sobre Mí</h2>
            <div className="personal-info">
              <div className="photo-container">
                <img 
                  src={personalData.photo} 
                  alt="Foto de perfil" 
                  className="profile-photo"
                  data-testid="profile-photo"
                />
              </div>
              <div className="info-container">
                <h3 data-testid="full-name">{personalData.fullName}</h3>
                <p data-testid="phone">📞 {personalData.phone}</p>
                <p data-testid="email">✉️ {personalData.email}</p>
                <p data-testid="location">📍 {personalData.location}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de Habilidades */}
        <section className="skills-section" data-testid="skills-section">
          <div className="container">
            <h2>Habilidades</h2>
            <div className="skills-grid" data-testid="skills-list">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item" data-testid="skill-item">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sección de Proyectos */}
        <section className="projects-section" data-testid="projects-section">
          <div className="container">
            <h2>Proyectos</h2>
            <div className="projects-grid" data-testid="projects-list">
              {projects.map((project) => (
                <div key={project.id} className="project-card" data-testid="project-item">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    Ver Proyecto
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 {personalData.fullName}. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
