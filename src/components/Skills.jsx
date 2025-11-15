import React from 'react';

const Skills = ({ className }) => {
  const skillCategories = [
    {
      category: "AI/ML & Deep Learning",
      skills: ["TensorFlow", "Keras", "PyTorch", "Scikit-Learn", "Pandas", "NumPy"],
      color: "primary"
    },
    {
      category: "Gen AI & NLP",
      skills: ["HuggingFace", "LangChain", "OpenAI API", "Transformers", "NLTK", "SpaCy"],
      color: "success"
    },
    {
      category: "Data Engineering",
      skills: ["Apache Spark", "Airflow", "Kafka", "BeautifulSoup", "Scrapy", "FastAPI"],
      color: "info"
    },
    {
      category: "Data Analysis & Visualization",
      skills: ["Matplotlib", "Seaborn", "Plotly", "Power BI", "Tableau", "Pandas"],
      color: "warning"
    },
    {
      category: "Databases",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Elasticsearch"],
      color: "danger"
    },
    {
      category: "Programming Languages",
      skills: ["Python", "SQL", "R", "JavaScript", "HTML/CSS"],
      color: "dark"
    },
    {
      category: "Cloud & DevOps",
      skills: ["AWS (EC2, S3, Lambda)", "Docker", "Kubernetes", "Git", "CI/CD"],
      color: "secondary"
    },
    {
      category: "Tools & Platforms",
      skills: ["Jupyter Notebook", "VS Code", "Colab", "Streamlit", "FAISS"],
      color: "dark"
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