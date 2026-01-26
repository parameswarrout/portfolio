import React from 'react';

const Skills = ({ className }) => {
  const skillCategories = [
    {
      category: "Programming",
      skills: ["Python", "SQL", "JavaScript", "FastAPI", "React", "Node.js", "HTML", "CSS"],
      color: "primary"
    },
    {
      category: "Data Engineering",
      skills: ["Scrapy", "BeautifulSoup", "Pandas", "NumPy", "ETL Pipelines", "Data Warehousing"],
      color: "info"
    },
    {
      category: "Databases",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Vector Databases (FAISS)"],
      color: "danger"
    },
    {
      category: "Cloud & DevOps",
      skills: ["AWS (EC2, S3)", "Heroku", "Docker", "Git", "GitHub Actions", "CI/CD"],
      color: "secondary"
    },
    {
      category: "AI/ML",
      skills: ["LangChain", "HuggingFace", "TensorFlow", "Scikit-learn", "Semantic Search", "RAG"],
      color: "success"
    },
    {
      category: "Payments",
      skills: ["Razorpay API", "Stripe API", "Subscriptions", "Transaction Processing"],
      color: "dark"
    },
    {
      category: "Visualization",
      skills: ["Power BI", "Tableau", "Matplotlib", "Seaborn", "Plotly", "Grafana"],
      color: "warning"
    }
  ];

  return (
    <section id="skills" className={`section ${className || ''}`}>
      <div className="container">
        <h2 className="section-title text-center">Technical Skills</h2>
        <div className="row">
          {skillCategories.map((category, index) => (
            <div className="col-lg-3 col-md-6 mb-4" key={index}>
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body p-4">
                  <h5 className={`fw-bold text-${category.color} mb-3`}>{category.category}</h5>
                  <div className="d-flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={`badge bg-${category.color} bg-opacity-10 text-${category.color} px-3 py-2 d-inline-block`}
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