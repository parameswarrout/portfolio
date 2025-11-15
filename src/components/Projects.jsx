import React from 'react';

const Projects = ({ openModal }) => {
  const projects = [
    {
      id: 1,
      title: "Prediction of Tensile Strength",
      description: "ML/DL project to predict weld joint strength from input features.",
      icon: "⚙️"
    },
    {
      id: 2,
      title: "Movie Data Management",
      description: "Scraped and analyzed movie streaming trends using Python.",
      icon: "🎬"
    },
    {
      id: 3,
      title: "Food Vision Image Classification",
      description: "Deep Learning model to classify food images using CNNs & EfficientNetB0.",
      icon: "🍎"
    },
    {
      id: 4,
      title: "Customer Churn Prediction",
      description: "Used ML & DL to detect customer churn in banking dataset.",
      icon: "📊"
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title text-center">Academic Projects</h2>
        <div className="row g-5">
          {projects.map((project) => (
            <div className="col-lg-6" key={project.id}>
              <div className="card h-100 shadow-sm border-0 project-card">
                <div className="card-body p-5">
                  <div className="d-flex align-items-center mb-4">
                    <div className="me-3 p-3 rounded-circle bg-primary bg-opacity-10 fs-3">
                      {project.icon}
                    </div>
                    <h5 className="card-title mb-0 fw-bold">{project.title}</h5>
                  </div>
                  <p className="card-text mb-4">{project.description}</p>
                  <button
                    className="btn btn-primary w-100 py-2"
                    onClick={() => openModal(project.id)}
                  >
                    View Project Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;