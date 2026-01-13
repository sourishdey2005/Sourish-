
import { Experience, Project, Publication, Certification } from './types';

export const EXPERIENCES: Experience[] = [
  {
    role: "Data Science Intern",
    company: "Uptricks Services Pvt. Ltd.",
    duration: "Oct 2025 – Present",
    location: "Remote",
    summary: "Leveraging advanced statistical modeling and Python-based analytical frameworks to extract high-value insights from diverse real-world datasets.",
    achievements: [
      "Engineered predictive models with 90%+ accuracy for operational trend forecasting.",
      "Translated complex raw data into actionable business intelligence for stakeholder decision-making.",
      "Optimized client-side data pipelines, reducing processing latency by 20%."
    ]
  },
  {
    role: "Head of Research And Development",
    company: "KINETEX LAB KIIT CHAPTER",
    duration: "Oct 2025 – Present",
    location: "Bhubaneswar, Odisha",
    summary: "Orchestrating the technical roadmap for a premier student research wing, bridging the gap between academic theory and industry implementation.",
    achievements: [
      "Mentoring 20+ student researchers across AI, Cloud, and IoT domains.",
      "Directing full-lifecycle development of innovative technical prototypes.",
      "Spearheading cross-domain research initiatives resulting in 3 major chapter publications."
    ]
  },
  {
    role: "Data Analyst Intern",
    company: "Overload Ware Labs AI",
    duration: "Sep 2025 – Present",
    location: "Remote",
    summary: "Supporting AI product life cycles through rigorous data analysis and automated performance tracking in an agile remote environment.",
    achievements: [
      "Designed automated reporting pipelines to monitor real-time AI product performance.",
      "Identified and mitigated model drift by analyzing key statistical variance metrics.",
      "Collaborated with ML engineers to clean and annotate high-dimensional training data."
    ]
  },
  {
    role: "Data Analyst Intern",
    company: "Coding Samurai",
    duration: "Jul 2025 – Aug 2025",
    location: "Remote",
    summary: "Specialized in transforming disparate data sources into clear, interactive visual narratives that drive strategic product improvements.",
    achievements: [
      "Built dynamic visualization dashboards using Plotly and Seaborn for executive reporting.",
      "Conducted thorough Exploratory Data Analysis (EDA) to uncover hidden user behavior patterns.",
      "Streamlined data cleaning workflows, improving team efficiency by 30%."
    ]
  },
  {
    role: "Data Analyst Intern",
    company: "Codec Technologies India",
    duration: "Apr 2025 – Jul 2025",
    location: "Remote",
    summary: "Applied quantitative analysis techniques to solve complex business problems and ensure high-integrity data manipulation.",
    achievements: [
      "Automated recurrent data processing tasks using custom Python script libraries.",
      "Delivered high-impact analytical reports within tight project sprint deadlines.",
      "Validated data integrity across multi-source database migrations."
    ]
  },
  {
    role: "Research Internship (Cloud Infrastructure)",
    company: "IISER Thiruvananthapuram",
    duration: "Apr 2025 – Present",
    location: "Hybrid · Thiruvananthapuram, Kerala",
    summary: "Investigating the boundaries of high-performance Cloud Infrastructure and its application in large-scale scientific research simulations.",
    achievements: [
      "Benchmarking cloud-native resource management in hybrid HPC environments.",
      "Co-authoring research on cost-effective scaling for scientific computing workloads.",
      "Analyzing latency trade-offs between on-prem and edge-cloud deployments."
    ]
  },
  {
    role: "Cloud Automation Executive",
    company: "USC.KIIT",
    duration: "Apr 2025 – Present",
    location: "Hybrid · Bhubaneswar, Odisha",
    summary: "Scaling institutional digital infrastructure through robust automation and proactive resource management strategies.",
    achievements: [
      "Automated multi-tier infrastructure provisioning using Terraform and CI/CD best practices.",
      "Reduced cloud operational overhead by implementing custom health-monitoring scripts.",
      "Ensured 99.9% uptime for university-wide digital services through efficient load balancing."
    ]
  },
  {
    role: "Zero Trust Cloud Security Intern",
    company: "Zscaler",
    duration: "Jan 2025 – Mar 2025",
    location: "Remote",
    summary: "Gained mastery in identity-centric cloud security frameworks designed for modern, perimeter-less enterprise architectures.",
    achievements: [
      "Analyzed enterprise security postures using Zscaler's Zero Trust Exchange protocols.",
      "Drafted technical documentation for secure access service edge (SASE) implementations.",
      "Simulated advanced threat modeling scenarios to test cloud-native defenses."
    ]
  },
  {
    role: "Secretary & Operation Team Lead",
    company: "KITPD2S Society",
    duration: "Sep 2024 – Sep 2025",
    location: "On-site · Bhubaneshwar, Odisha",
    summary: "Led institutional operations for technical domains focusing on IoT, Cloud, and Intellectual Property rights.",
    achievements: [
      "Managed logistical operations for 5+ major technical symposiums with 500+ attendees.",
      "Coordinated with industry partners to secure sponsorships and expert keynote speakers.",
      "Increased society member engagement by 150% through targeted outreach programs."
    ]
  },
  {
    role: "Executive Team Member",
    company: "CyberVault KIIT",
    duration: "Sep 2024 – Present",
    location: "On-site · Bhubaneswar, Odisha",
    summary: "Advancing campus-wide cybersecurity awareness and technical capability through hands-on workshops and peer mentorship.",
    achievements: [
      "Organized Capture-the-Flag (CTF) events to foster competitive security skillsets.",
      "Mentored peers in network penetration testing and secure software development.",
      "Collaborated on vulnerability assessments for student-led digital projects."
    ]
  },
  {
    role: "Cloud Computing Executive",
    company: "Coding Ninjas: KIIT Chapter",
    duration: "Jul 2024 – Present",
    location: "Bhubaneswar, Odisha",
    summary: "Empowering students with cloud-native skills through curriculum design and intensive technical workshops on modern deployment stacks.",
    achievements: [
      "Conducted 10+ hands-on sessions on AWS Fundamentals, Docker, and Kubernetes.",
      "Guided 50+ students through their first cloud-native application deployments.",
      "Built a vibrant peer-to-peer technical learning community for cloud enthusiasts."
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
    // Fix: Remove 'role' property which is not present in 'Project' interface
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
