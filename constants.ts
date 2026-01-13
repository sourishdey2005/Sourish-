
import { Experience, Project, Publication, Certification } from './types';

export const EXPERIENCES: Experience[] = [
  {
    role: "Data Science Intern",
    company: "Uptricks Services Pvt. Ltd.",
    duration: "Oct 2025 – Present",
    location: "Remote",
    achievements: [
      "Developing high-accuracy predictive models using Python for diverse real-world datasets.",
      "Contributing to data-driven decision-making processes by transforming raw data into actionable business intelligence.",
      "Collaborating on advanced analytics projects to optimize client-side operational efficiency."
    ]
  },
  {
    role: "Head of Research And Development",
    company: "KINETEX LAB KIIT CHAPTER",
    duration: "Oct 2025 – Present",
    location: "Bhubaneswar, Odisha",
    achievements: [
      "Leading technical R&D initiatives, overseeing the full lifecycle of emerging technology projects.",
      "Mentoring a team of 20+ student researchers in AI, IoT, and Cloud computing domains.",
      "Architecting experimental prototypes and managing the technical roadmap for the chapter."
    ]
  },
  {
    role: "Data Analyst Intern",
    company: "Overload Ware Labs AI",
    duration: "Sep 2025 – Present",
    location: "Remote",
    achievements: [
      "Extracting actionable insights from complex datasets to support AI-driven product development.",
      "Building automated reporting pipelines to monitor key product performance metrics.",
      "Collaborating with cross-functional teams in a remote agile environment to refine ML models."
    ]
  },
  {
    role: "Data Analyst Intern",
    company: "Coding Samurai",
    duration: "Jul 2025 – Aug 2025",
    location: "Remote",
    achievements: [
      "Engineered data processing scripts to clean and prep large-scale datasets for statistical analysis.",
      "Designed interactive visualization dashboards to simplify complex data findings for stakeholders.",
      "Conducted exploratory data analysis (EDA) to identify trends and anomalies in user behavior."
    ]
  },
  {
    role: "Data Analyst Intern",
    company: "Codec Technologies India",
    duration: "Apr 2025 – Jul 2025",
    location: "Remote",
    achievements: [
      "Utilized Python libraries (Pandas, NumPy) for rigorous data manipulation and quality assurance.",
      "Identified critical bottlenecks in existing data workflows and proposed optimization strategies.",
      "Produced comprehensive analytical reports that met stringent project objectives and deadlines."
    ]
  },
  {
    role: "Research Internship (Cloud Infrastructure)",
    company: "IISER Thiruvananthapuram",
    duration: "Apr 2025 – Present",
    location: "Hybrid · Thiruvananthapuram, Kerala",
    achievements: [
      "Conducting advanced research on Cloud Services and specialized infrastructure scalability.",
      "Evaluating performance benchmarks for hybrid cloud deployments in scientific computing.",
      "Contributing to academic papers focusing on cloud-native resource optimization."
    ]
  },
  {
    role: "Cloud Automation Executive",
    company: "USC.KIIT",
    duration: "Apr 2025 – Present",
    location: "Hybrid · Bhubaneswar, Odisha",
    achievements: [
      "Automating cloud infrastructure using Terraform and Ansible to enhance system reliability.",
      "Managing and scaling cloud resources for university-wide digital services.",
      "Implementing cost-monitoring tools to optimize resource allocation across AWS environments."
    ]
  },
  {
    role: "Zero Trust Cloud Security Intern",
    company: "Zscaler",
    duration: "Jan 2025 – Mar 2025",
    location: "Remote",
    achievements: [
      "Acquired deep technical knowledge of Zscaler's Zero Trust Exchange platform and security protocols.",
      "Analyzed cloud security postures and implemented identity-centric access controls.",
      "Participated in threat modeling exercises to secure multi-cloud enterprise architectures."
    ]
  },
  {
    role: "Secretary & Operation Team Lead",
    company: "KITPD2S Society",
    duration: "Sep 2024 – Sep 2025",
    location: "On-site · Bhubaneshwar, Odisha",
    achievements: [
      "Spearheaded operations for a multifaceted technical society covering Cloud, IoT, and Patents.",
      "Served as the primary Point of Contact (POC) for industry collaborations and event sponsorships.",
      "Led marketing and associate domains to increase event participation by 150%."
    ]
  },
  {
    role: "Executive Team Member",
    company: "CyberVault KIIT",
    duration: "Sep 2024 – Present",
    location: "On-site · Bhubaneswar, Odisha",
    achievements: [
      "Contributing to campus-wide cybersecurity initiatives and vulnerability assessment projects.",
      "Organizing technical workshops on ethical hacking and secure coding practices.",
      "Promoting security awareness through community outreach and capture-the-flag (CTF) events."
    ]
  },
  {
    role: "Cloud Computing Executive",
    company: "Coding Ninjas: KIIT Chapter",
    duration: "Jul 2024 – Present",
    location: "Bhubaneswar, Odisha",
    achievements: [
      "Leading large-scale cloud application projects and student mentoring programs.",
      "Designing and conducting technical workshops on AWS, Docker, and Cloud-native tools.",
      "Establishing a technical community focused on modern cloud architecture principles."
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
