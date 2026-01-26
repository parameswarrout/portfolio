import React from 'react';

const Projects = ({ openModal }) => {
  const projects = [
    {
      id: 1,
      title: "Enterprise RAG Orchestration Agent",
      description: "High-precision search system with Hybrid Retrieval, Async Streaming, and Multi-LLM Routing.",
      icon: "🤖"
    },
    {
      id: 2,
      title: "Serverless Media Data Pipeline",
      description: "Automated extraction engine with zero-cost infrastructure using GitHub Actions and Google Sheets API.",
      icon: "⚡"
    },
    {
      id: 3,
      title: "Physics-Informed Neural Networks (PINNs)",
      description: "Deep learning model for material properties prediction combining data-driven approach with physical laws.",
      icon: "🔬"
    },
    {
      id: 4,
      title: "Movie Data Management",
      description: "Scraped and analyzed movie streaming trends using Python.",
      icon: "🎬"
    },
    {
      id: 5,
      title: "Food Vision Image Classification",
      description: "Deep Learning model to classify food images using CNNs & EfficientNetB0.",
      icon: "🍎"
    },
    {
      id: 6,
      title: "Customer Churn Prediction",
      description: "Used ML & DL to detect customer churn in banking dataset.",
      icon: "📊"
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title text-center">Key Projects</h2>
        <div className="row g-5 justify-content-center">
          {projects.map((project) => (
            <div className="col-lg-4 col-md-6" key={project.id}>
              <div className="card h-100 shadow-sm border-0 project-card">
                <div className="card-body p-4 d-flex flex-column text-center">
                  <div className="mb-4 d-inline-block mx-auto p-3 rounded-circle bg-primary bg-opacity-10 fs-3">
                    {project.icon}
                  </div>
                  <h5 className="card-title mb-3 fw-bold">{project.title}</h5>
                  <p className="card-text mb-4 text-muted flex-grow-1">{project.description}</p>
                  <button
                    className="btn btn-primary w-100 py-2 mt-auto"
                    onClick={() => openModal(project.id)}
                  >
                    View Details
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