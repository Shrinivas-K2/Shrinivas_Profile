import React, { useState } from 'react';
import { ExternalLink, Github, Calendar, Code, Star, ArrowRight } from 'lucide-react';
import '../components/Projects.css';

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  // Your actual GitHub projects
  const projects = [
    {
      id: 1,
      title: "Birds Classification & Migration Prediction",
      description: "Advanced machine learning project for bird species classification and migration pattern prediction using computer vision and deep learning techniques. Currently in development with real-time prediction capabilities.",
      category: "ml",
      technologies: ["Python", "TensorFlow", "OpenCV", "Keras", "NumPy", "Pandas", "Scikit-learn"],
      image: "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=500&h=300&fit=crop",
      demoUrl: "#",
      githubUrl: "#",
      date: "2025",
      featured: true,
      status: "In Development",
      stats: { stars: 0, forks: 0 }
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "Personal portfolio website showcasing my projects and skills. Built with modern web technologies and responsive design principles.",
      category: "web",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design", "ReactJS" , "NodeJS" , " MongoDB"],
      image: "/assets/Protfolio.png",
      demoUrl: "https://shrinivas-profile-r8k2ekv2j-srinivasa-ks-projects.vercel.app",
      githubUrl: "https://github.com/Shrinivas-K2/Shrinivas_Profile",
      date: "2025",
      featured: true,
      stats: { stars: 1, forks: 0 }
    },
    {
      id: 3,
      title: "Zoo Management System",
      description: "Complete zoo management system with animal tracking, visitor management, and administrative features. Built with modern JavaScript frameworks.",
      category: "web",
      technologies: ["JavaScript", "HTML", "CSS", "Database Management"],
      image: "/assets/Zoo_mngmt.png", // zoo with giraffes and zebra
      githubUrl: "https://github.com/Shrinivas-K2/Zoo_mngmt",
      date: "2025",
      featured: false,
      stats: { stars: 0, forks: 0 }
    },
  
    {
      id: 5,
      title: "KCET College Portal",
      description: "Educational portal for KCET college information and resources. Provides comprehensive information about colleges and courses.",
      category: "web",
      technologies: ["HTML", "CSS", "JavaScript", "Web Development"],
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=500&h=300&fit=crop",
      demoUrl: "#",
      githubUrl: "https://github.com/Shrinivas-K2/KCET-collage",
      date: "2025",
      featured: true,
      stats: { stars: 0, forks: 0 }
    },
    {
      id: 6,
      title: "OASIS InfoByte Internship",
      description: "Collection of Python development projects completed during internship at Oasis InfoByte. Includes various utility applications and learning projects.",
      category: "python",
      technologies: ["Python", "API Integration", "GUI Development", "Data Processing"],
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=500&h=300&fit=crop",
      demoUrl: "#",
      githubUrl: "https://github.com/Shrinivas-K2/OASIS-INFOBYTE-INTERN",
      date: "2024",
      featured: false,
      stats: { stars: 0, forks: 0 }
    },
    {
      id: 7,
      title: "Weather Application",
      description: "Real-time weather application using OpenWeatherMap API. Provides current weather conditions and forecasts for cities worldwide.",
      category: "python",
      technologies: ["Python", "API Integration", "Tkinter", "JSON Processing"],
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
      demoUrl: "#",
      githubUrl: "https://github.com/Shrinivas-K2/WeatherApp",
      date: "2024",
      featured: false,
      stats: { stars: 0, forks: 0 }
    },
    {
      id: 8,
      title: "Voice Assistant",
      description: "Mini voice assistant built with Python featuring speech recognition, text-to-speech, and various voice commands for automation.",
      category: "python",
      technologies: ["Python", "Speech Recognition", "Text-to-Speech", "Automation"],
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=500&h=300&fit=crop",
      demoUrl: "#",
      githubUrl: "https://github.com/Shrinivas-K2/Voice-Assistant",
      date: "2024",
      featured: false,
      stats: { stars: 0, forks: 0 }
    },
    {
      id: 9,
      title: "Password Generator",
      description: "Secure random password generator with customizable length and character sets. Built with Python for enhanced security applications.",
      category: "python",
      technologies: ["Python", "Security", "Random Generation", "GUI"],
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=300&fit=crop",
      demoUrl: "#",
      githubUrl: "https://github.com/Shrinivas-K2/Password-Generator",
      date: "2024",
      featured: false,
      stats: { stars: 0, forks: 0 }
    },
    {
      id: 10,
      title: "BMI Calculator",
      description: "Body Mass Index calculator application with health recommendations. Features user-friendly interface and health category classifications.",
      category: "python",
      technologies: ["Python", "Health Analytics", "GUI Programming", "Data Validation"],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
      demoUrl: "#",
      githubUrl: "https://github.com/Shrinivas-K2/BMI-Calculator",
      date: "2024",
      featured: false,
      stats: { stars: 0, forks: 0 }
    },
    {
      id: 11,
      title: "Online Cloud Storage System",
      description: "Client-Server architecture implementation for cloud storage using C programming. Features file upload, download, and management capabilities.",
      category: "systems",
      technologies: ["C", "Client-Server Architecture", "File Systems", "Network Programming"],
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500&h=300&fit=crop",
      demoUrl: "#",
      githubUrl: "https://github.com/Shrinivas-K2/Online-cloud-storage-system-using-C",
      date: "2024",
      featured: false,
      stats: { stars: 0, forks: 0 }
    },
    {
      id: 12,
      title: "Jenkins CI/CD Pipeline",
      description: "Continuous Integration and Deployment pipeline setup using Jenkins. Demonstrates DevOps practices and automated testing workflows.",
      category: "systems",
      technologies: ["C++", "Jenkins", "CI/CD", "DevOps", "Automation"],
      image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=500&h=300&fit=crop",
      demoUrl: "#",
      githubUrl: "https://github.com/Shrinivas-K2/PES2UG22CS577_Jenkins",
      date: "2025",
      featured: false,
      stats: { stars: 0, forks: 0 }
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'web', label: 'Web Development', count: projects.filter(p => p.category === 'web').length },
    { id: 'python', label: 'Python Projects', count: projects.filter(p => p.category === 'python').length },
    { id: 'ml', label: 'Machine Learning', count: projects.filter(p => p.category === 'ml').length },
    { id: 'systems', label: 'System Programming', count: projects.filter(p => p.category === 'systems').length }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="projects-container">
      {/* Header Section */}
      <div className="header-section">
        <div className="header-overlay"></div>
        <div className="header-content">
          <div className="header-text">
            <h1 className="main-title">
              My <span className="gradient-text">Projects</span>
            </h1>
            <p className="header-description">
              Showcasing my academic journey through innovative projects that demonstrate 
              technical skills, creativity, and problem-solving abilities.
            </p>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="content-wrapper">
        <div className="filter-section">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card ${project.featured ? 'featured' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {project.featured && (
                <div className="featured-badge">
                  <Star className="star-icon" />
                  Featured
                </div>
              )}

              {project.status && (
                <div className="status-badge">
                  {project.status}
                </div>
              )}

              {/* Project Image */}
              <div className="project-image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="image-gradient"></div>
                
                {/* Overlay Links */}
                <div className={`image-overlay ${hoveredProject === project.id ? 'visible' : ''}`}>
                  <a href={project.demoUrl} className="overlay-btn demo-btn">
                    <ExternalLink className="btn-icon" />
                  </a>
                  <a href={project.githubUrl} className="overlay-btn github-btn">
                    <Github className="btn-icon" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="project-content">
                <div className="project-meta">
                  <div className="project-date">
                    <Calendar className="meta-icon" />
                    {project.date}
                  </div>
                  <div className="project-stats">
                    <div className="stat-item">
                      <Star className="meta-icon" />
                      {project.stats.stars}
                    </div>
                    <div className="stat-item">
                      <Code className="meta-icon" />
                      {project.stats.forks}
                    </div>
                  </div>
                </div>

                <h3 className="project-title">{project.title}</h3>

                <p className="project-description">{project.description}</p>

                {/* Technologies */}
                <div className="tech-tags">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <button className="view-project-btn">
                  View Project
                  <ArrowRight className="arrow-icon" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="stats-section">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number blue">{projects.length}</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-card">
              <div className="stat-number purple">
                {projects.reduce((sum, p) => sum + p.technologies.length, 0)}
              </div>
              <div className="stat-label">Technologies Used</div>
            </div>
            <div className="stat-card">
              <div className="stat-number green">
                {projects.reduce((sum, p) => sum + p.stats.stars, 0)}
              </div>
              <div className="stat-label">GitHub Stars</div>
            </div>
            <div className="stat-card">
              <div className="stat-number yellow">
                {projects.filter(p => p.featured).length}
              </div>
              <div className="stat-label">Featured Projects</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
