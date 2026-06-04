import React from 'react';

const Projects = ({ openModal, className = '' }) => {
  const projects = [
    {
      id: 1,
      title: "AI Business Intelligence Assistant",
      description: "Natural language interface executing SQL queries on SQLite databases, featuring a multi-agent analyst collaboration panel.",
      tech: ["FastAPI", "Next.js", "Ollama", "Amazon Bedrock", "SQLite", "TailwindCSS"],
      icon: "📊"
    },
    {
      id: 2,
      title: "Bangalore House Price ML",
      description: "Full-stack predictive pipeline utilizing Optuna hyperparameter tuning, PyTorch deep learning, and SHAP model explanations.",
      tech: ["Python", "FastAPI", "React", "PyTorch", "XGBoost", "SHAP"],
      icon: "🏠"
    },
    {
      id: 3,
      title: "Enterprise RAG Agent",
      description: "High-precision document QA platform featuring Hybrid Retrieval (FAISS + BM25) and dynamic multi-LLM streaming routing.",
      tech: ["FastAPI", "React 19", "LangChain", "FAISS", "Prometheus"],
      icon: "🤖"
    },
    {
      id: 4,
      title: "Serverless Media Data Pipeline",
      description: "Automated direct link extraction engine running on zero-cost infrastructure via GitHub Actions and Google Sheets API.",
      tech: ["Python", "Scrapy", "GitHub Actions", "Google Sheets API"],
      icon: "⚡"
    },
    {
      id: 5,
      title: "Physics-Informed Neural Nets",
      description: "Multivariate regression model for material joint strength combining data-driven training with physical conservation laws.",
      tech: ["Python", "PyTorch", "NumPy", "Matplotlib"],
      icon: "🔬"
    }
  ];

  return (
    <section id="projects" className={`section ${className}`}>
      <div className="container">
        <h2 className="section-title">Key Projects</h2>
        <div className="row g-4 justify-content-center">
          {projects.map((project) => (
            <div className="col-lg-4 col-md-6" key={project.id}>
              <div className="card h-100 project-card border-0">
                <div className="card-body p-4 d-flex flex-column">
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <span className="project-icon">{project.icon}</span>
                    <h5 className="fw-bold mb-0 text-white" style={{ fontSize: '1.15rem' }}>{project.title}</h5>
                  </div>
                  <p className="card-text text-secondary mb-4 flex-grow-1" style={{ fontSize: '0.9rem' }}>
                    {project.description}
                  </p>
                  <div className="d-flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t, idx) => (
                      <span key={idx} className="tech-tag">{t}</span>
                    ))}
                  </div>
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