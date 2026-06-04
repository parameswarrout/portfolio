import React from 'react';

const Skills = ({ className = '' }) => {
  const skillCategories = [
    {
      category: "AI & Machine Learning",
      icon: "🤖",
      skills: ["RAG Pipelines", "LangChain", "Semantic Search", "Vector DBs (FAISS)", "HuggingFace", "TensorFlow", "Scikit-learn"],
    },
    {
      category: "Data Engineering",
      icon: "⚙️",
      skills: ["Scrapy / Spiders", "BeautifulSoup", "ETL Pipelines", "Data Ingestion", "Pandas", "NumPy"],
    },
    {
      category: "Backend & Systems",
      icon: "⚡",
      skills: ["FastAPI", "Python", "SQL (PostgreSQL / MySQL)", "JavaScript / Node.js", "Docker", "REST APIs"],
    },
    {
      category: "Cloud & Workflow",
      icon: "☁️",
      skills: ["AWS (EC2, S3)", "GitHub Actions", "CI / CD", "Git & Version Control", "Razorpay / Stripe APIs"],
    }
  ];

  return (
    <section id="skills" className={`section ${className}`}>
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="row g-4 justify-content-center">
          {skillCategories.map((cat, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <div className="card h-100">
                <div className="card-body p-4 d-flex flex-column">
                  <div className="d-flex align-items-center gap-2 mb-3">
                    <span className="fs-4">{cat.icon}</span>
                    <h5 className="fw-bold mb-0 text-white" style={{ fontSize: '1.15rem' }}>{cat.category}</h5>
                  </div>
                  <div className="d-flex flex-wrap gap-2 mt-2">
                    {cat.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="tech-tag"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;