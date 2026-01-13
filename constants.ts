
import { Experience, Project, Publication, Certification } from './types';

export const EXPERIENCES: Experience[] = [
  {
    role: "Cloud & Data Science Engineer (Full-time)",
    company: "Stealth Startup",
    duration: "2023 - Present",
    location: "Remote",
    achievements: [
      "Architected highly scalable MLOps pipelines on AWS using Kubernetes (EKS) and Terraform.",
      "Implemented automated CI/CD for model training and deployment reducing lead time by 40%.",
      "Enhanced system security using Zero Trust principles and IAM fine-grained controls."
    ]
  },
  {
    role: "MLOps Intern",
    company: "Tech Giant Corp",
    duration: "Summers 2023",
    location: "Bangalore, India",
    achievements: [
      "Optimized inference latency for LLM models by 25% using quantization techniques.",
      "Collaborated with data scientists to containerize legacy ML workloads.",
      "Developed monitoring dashboards for model drift detection."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "ICICI vs SBI Stock Analysis",
    description: "Quantitative comparison and predictive modeling of top Indian banking stocks.",
    achievements: ["92% accuracy in short-term trend prediction", "Automated data ingestion from Yahoo Finance API"],
    stack: ["Python", "Pandas", "Scikit-learn", "Plotly"],
    domain: "Finance",
    chartData: [
      { name: 'Accuracy', value: 92 },
      { name: 'Precision', value: 89 },
      { name: 'Recall', value: 85 }
    ]
  },
  {
    title: "Uber Ride Analytics Platform",
    description: "End-to-end data engineering pipeline to analyze ride-sharing patterns.",
    achievements: ["Processed 1M+ records with sub-second query time", "Visualized high-density traffic clusters"],
    stack: ["GCP", "Mage AI", "BigQuery", "Looker"],
    domain: "ML",
    chartData: [
      { name: 'Throughput', value: 98 },
      { name: 'Latency', value: 12 },
      { name: 'Coverage', value: 95 }
    ]
  },
  {
    title: "UiPath AWS Automation Suite",
    description: "Enterprise-grade automation for multi-region AWS resource management.",
    achievements: ["Reduced manual infra setup time by 80%", "Implemented cost-optimization alerts"],
    stack: ["AWS", "UiPath", "Terraform", "Python"],
    domain: "Cloud"
  },
  {
    title: "Gene Expression Bioinformatics",
    description: "Statistical analysis of RNA-seq data for early cancer detection markers.",
    achievements: ["Identified 5 novel biomarkers", "Reduced noise in high-dimensional genomic data"],
    stack: ["Python", "BioPython", "Seaborn", "StatModels"],
    domain: "ML"
  }
];

export const SKILLS = {
  cloud: ["AWS", "GCP", "Azure", "Terraform", "Kubernetes", "Docker", "Jenkins", "GitHub Actions", "Ansible", "Bash"],
  ai: ["TensorFlow", "Keras", "Scikit-learn", "OpenCV", "Flask", "Pandas", "NumPy", "XGBoost", "Plotly"],
  programming: ["Python", "C++", "Java", "SQL", "HTML/CSS"]
};

export const CERTIFICATIONS: Certification[] = [
  { provider: "Google Cloud & Terraform", items: ["GCP Professional Cloud Architect", "HashiCorp Certified: Terraform Associate"] },
  { provider: "AWS & Docker", items: ["AWS Certified Solutions Architect", "Docker Certified Associate"] },
  { provider: "IBM & Deep Learning", items: ["Deep Learning Specialization", "AI Enterprise Workflow"] }
];

export const PUBLICATIONS: Publication[] = [
  {
    title: "IoT & Computer Vision for Traffic Management",
    journal: "IJFMR",
    abstract: "Proposed an integrated framework for real-time traffic density estimation using edge-computing and custom YOLOv8 models.",
    type: "publication"
  },
  {
    title: "AI-Powered Smart Agriculture Drone",
    journal: "Intellectual Property India",
    abstract: "A patent for a drone-based system that uses multi-spectral imaging to detect crop diseases and automate pesticide dispersal.",
    type: "patent"
  }
];
