import { render, screen } from '@testing-library/react';
import App from './App';

// Mock de la imagen para evitar errores en las pruebas
jest.mock('./assets/profile.jpg', () => 'mocked-image.jpg');

describe('Portfolio Personal Tests', () => {
  beforeEach(() => {
    render(<App />);
  });

  describe('Datos Personales', () => {
    test('debe mostrar la fotografía de perfil', () => {
      const profilePhoto = screen.getByTestId('profile-photo');
      expect(profilePhoto).toBeInTheDocument();
      expect(profilePhoto).toHaveAttribute('src');
      expect(profilePhoto).toHaveAttribute('alt', 'Foto de perfil');
    });

    test('debe mostrar el nombre completo', () => {
      const fullName = screen.getByTestId('full-name');
      expect(fullName).toBeInTheDocument();
      expect(fullName.textContent).toBeTruthy();
      expect(fullName.textContent.length).toBeGreaterThan(0);
    });

    test('debe mostrar el número de teléfono', () => {
      const phone = screen.getByTestId('phone');
      expect(phone).toBeInTheDocument();
      expect(phone.textContent).toMatch(/\+?[0-9\s\-\(\)]+/);
    });

    test('debe incluir todos los datos personales requeridos', () => {
      // Verificar que existan los elementos de datos personales
      expect(screen.getByTestId('profile-photo')).toBeInTheDocument();
      expect(screen.getByTestId('full-name')).toBeInTheDocument();
      expect(screen.getByTestId('phone')).toBeInTheDocument();
      expect(screen.getByTestId('email')).toBeInTheDocument();
    });
  });

  describe('Habilidades', () => {
    test('debe mostrar al menos 5 habilidades', () => {
      const skillItems = screen.getAllByTestId('skill-item');
      expect(skillItems.length).toBeGreaterThanOrEqual(5);
    });

    test('cada habilidad debe tener contenido', () => {
      const skillItems = screen.getAllByTestId('skill-item');
      skillItems.forEach(skill => {
        expect(skill.textContent.trim()).toBeTruthy();
        expect(skill.textContent.length).toBeGreaterThan(0);
      });
    });

    test('debe existir la sección de habilidades', () => {
      const skillsSection = screen.getByTestId('skills-section');
      expect(skillsSection).toBeInTheDocument();
      
      const skillsList = screen.getByTestId('skills-list');
      expect(skillsList).toBeInTheDocument();
    });
  });

  describe('Proyectos', () => {
    test('debe mostrar al menos 3 proyectos', () => {
      const projectItems = screen.getAllByTestId('project-item');
      expect(projectItems.length).toBeGreaterThanOrEqual(3);
    });

    test('cada proyecto debe tener título y descripción', () => {
      const projectItems = screen.getAllByTestId('project-item');
      projectItems.forEach(project => {
        // Verificar que el proyecto tenga contenido
        expect(project.textContent.trim()).toBeTruthy();
        
        // Verificar que tenga un título (h3)
        const title = project.querySelector('h3');
        expect(title).toBeTruthy();
        expect(title.textContent.trim()).toBeTruthy();
        
        // Verificar que tenga una descripción (p)
        const description = project.querySelector('p');
        expect(description).toBeTruthy();
        expect(description.textContent.trim()).toBeTruthy();
      });
    });

    test('debe existir la sección de proyectos', () => {
      const projectsSection = screen.getByTestId('projects-section');
      expect(projectsSection).toBeInTheDocument();
      
      const projectsList = screen.getByTestId('projects-list');
      expect(projectsList).toBeInTheDocument();
    });
  });

  describe('Estructura General', () => {
    test('debe renderizar el componente principal sin errores', () => {
      expect(screen.getByText('Mi Portafolio Personal')).toBeInTheDocument();
    });

    test('debe tener todas las secciones principales', () => {
      expect(screen.getByTestId('personal-section')).toBeInTheDocument();
      expect(screen.getByTestId('skills-section')).toBeInTheDocument();
      expect(screen.getByTestId('projects-section')).toBeInTheDocument();
    });

    test('debe mostrar los títulos de las secciones', () => {
      expect(screen.getByText('Sobre Mí')).toBeInTheDocument();
      expect(screen.getByText('Habilidades')).toBeInTheDocument();
      expect(screen.getByText('Proyectos')).toBeInTheDocument();
    });
  });
});