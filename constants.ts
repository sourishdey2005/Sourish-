
import { Experience, Project, Publication, Certification, Education } from './types';

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
    description: "Econometric & Time-Series Comparison (2011–2021) using over a decade of NIFTY data.",
    achievements: [
      "Performed econometric modeling and ESG score analysis.",
      "Analyzed digital banking transformations and trading strategy implications."
    ],
    stack: ["Python", "Econometrics", "Pandas", "Plotly"],
    domain: "Finance",
    chartData: [
      { name: 'Accuracy', value: 92 },
      { name: 'Recall', value: 88 },
      { name: 'Sharpe', value: 75 }
    ]
  },
  {
    title: "F1 Historical Data Analysis",
    description: "Interactive EDA of 70+ years of Formula 1 history (1950–2023) analyzing race trends and driver performance.",
    achievements: [
      "Analyzed trends with interactive charts for races, titles, and points.",
      "Evaluated driver consistency and peak performance with statistical boxplots."
    ],
    stack: ["Python", "Plotly", "Seaborn", "Pandas"],
    domain: "ML",
    chartData: [
      { name: 'Consistency', value: 85 },
      { name: 'Growth', value: 94 },
      { name: 'Impact', value: 89 }
    ]
  },
  {
    title: "UiPath AWS Automation Suite",
    description: "End-to-end automation for enterprise-grade management of EC2 and S3 resources.",
    achievements: [
      "Automated EC2 provisioning, reducing setup time by 70%.",
      "Streamlined S3 file operations with automated access control and error handling."
    ],
    stack: ["UiPath", "AWS", "RPA", "Terraform"],
    domain: "Cloud",
    chartData: [
      { name: 'Efficiency', value: 98 },
      { name: 'Speed', value: 95 },
      { name: 'Reliability', value: 99 }
    ]
  },
  {
    title: "Uber Ride Analytics Platform",
    description: "ML-powered operational analytics featuring 50+ unique EDAs to optimize pricing and predict churn.",
    achievements: [
      "Analyzed 148,000+ bookings to uncover dense traffic and demand patterns.",
      "Developed high-precision models for revenue optimization and customer retention."
    ],
    stack: ["Python", "Machine Learning", "StatsModels", "Pandas"],
    domain: "ML",
    chartData: [
      { name: 'Churn Acc', value: 91 },
      { name: 'Price Opt', value: 84 },
      { name: 'Data Vol', value: 98 }
    ]
  },
  {
    title: "FaceMeshX",
    description: "Real-time system using MediaPipe and OpenCV for advanced facial expression and head pose detection.",
    achievements: [
      "Achieved real-time 60 FPS tracking with 468 facial landmarks.",
      "Implemented detection for head tilt, eye status, and emotional cues."
    ],
    stack: ["Python", "OpenCV", "MediaPipe"],
    domain: "ML",
    chartData: [
      { name: 'FPS', value: 95 },
      { name: 'Accuracy', value: 92 },
      { name: 'Latency', value: 15 }
    ]
  },
  {
    title: "Gene Expression Bioinformatics",
    description: "Hybrid CNN-BiLSTM deep learning model for predicting cell-cycle phases from genomic time-series data.",
    achievements: [
      "Achieved >98% accuracy on benchmark Spellman genomic datasets.",
      "Developed a compact model footprint of less than 50 KB for edge deployment."
    ],
    stack: ["Deep Learning", "CNN", "LSTM", "Bioinformatics"],
    domain: "IoT",
    chartData: [
      { name: 'Accuracy', value: 98 },
      { name: 'Compactness', value: 96 },
      { name: 'Recall', value: 97 }
    ]
  },
  {
    title: "YouTube Trending Analytics",
    description: "Cross-country trend analysis exploring engagement patterns and content preferences using global datasets.",
    achievements: [
      "Uncovered critical insights on 'time-to-trend' variables across regions.",
      "Analyzed engagement ratios and audience retention metrics."
    ],
    stack: ["Python", "Data Viz", "Pandas", "Statistics"],
    domain: "ML"
  },
  {
    title: "Cervical Cancer Risk Predictor",
    description: "Sophisticated predictive framework combining deep neural networks and hybrid architectures.",
    achievements: [
      "Integrated multi-source clinical data for holistic risk profiling.",
      "Leveraged hybrid models to significantly reduce false negative rates."
    ],
    stack: ["Deep Learning", "Healthcare AI", "Python"],
    domain: "ML"
  },
  {
    title: "Breast Cancer Classification",
    description: "Explainable ML pipeline integrating statistical inference and dimensionality reduction.",
    achievements: [
      "Built a robust, clinically relevant system with high interpretability (XAI).",
      "Integrated multivariate analysis for enhanced feature engineering."
    ],
    stack: ["Python", "Scikit-learn", "XAI", "Pandas"],
    domain: "ML"
  },
  {
    title: "Customer Churn Prediction",
    description: "Telecom-focused supervised learning platform using Random Forest and XGBoost.",
    achievements: [
      "Identified top 5 contributing factors to customer churn for telecom providers.",
      "Optimized model performance through hyperparameter tuning and cross-validation."
    ],
    stack: ["Python", "Random Forest", "XGBoost", "Data Analysis"],
    domain: "Finance"
  },
  {
    title: "Mercedes-Benz Stock Analytics",
    description: "Financial time-series forecasting emphasizing statistical signal processing and technical indicators.",
    achievements: [
      "Extracted temporal and cyclical patterns in global automotive stock movements.",
      "Visualized volatility clusters and momentum trend reversals."
    ],
    stack: ["Python", "Time Series", "Pandas", "Financial Analysis"],
    domain: "Finance"
  },
  {
    title: "Ultrasonic Radar System",
    description: "Arduino-powered real-time object detection with Processing-based GUI visualization.",
    achievements: [
      "Engineered a functional radar system with a full 180° scan range.",
      "Developed real-time GUI for obstacle mapping and distance measurement."
    ],
    stack: ["Arduino", "C++", "Processing", "IoT"],
    domain: "IoT"
  },
  {
    title: "Concurrent Port Scanner",
    description: "High-speed network security tool utilizing multi-threading for efficient remote host scanning.",
    achievements: [
      "Implemented concurrent threading to reduce scan time by 90%.",
      "Created comprehensive diagnostic reporting for network security audits."
    ],
    stack: ["Python", "Cybersecurity", "Networking", "Threading"],
    domain: "IoT"
  },
  {
    title: "Hull Tactical Market Prediction",
    description: "Deep learning forecasting model using market sentiment, macro data, and volatility indices.",
    achievements: [
      "Conducted EDA with 50+ advanced visualizations of financial signal noise.",
      "Engineered features from cross-asset sentiment and macroeconomic indicators."
    ],
    stack: ["Deep Learning", "Quant Finance", "Python"],
    domain: "Finance"
  },
  {
    title: "Iris Species Neural Net",
    description: "Advanced classification engine built from scratch using only NumPy with attention mechanisms.",
    achievements: [
      "Achieved >98% test accuracy without external ML libraries.",
      "Implemented Swish/GELU activations and Batch Normalization from first principles."
    ],
    stack: ["NumPy", "Neural Networks", "Python", "Math"],
    domain: "ML"
  }
];

export const SKILLS = {
  cloud: ["AWS", "GCP", "Azure", "Terraform", "Kubernetes", "Docker", "Jenkins", "GitHub Actions", "Ansible", "Bash", "Git"],
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

export const EDUCATION_DATA: Education[] = [
  {
    institution: "Kalinga Institute of Industrial Technology (KIIT)",
    degree: "B.Tech. in Computer Engineering",
    duration: "July 2023 – Dec 2027 (Expected)",
    score: "Currently Pursuing",
    details: "Focusing on large-scale distributed systems and AI infrastructure.",
    coursework: ["Data Structures", "Algorithms", "Operating Systems", "DBMS", "OOP", "Computer Networks", "Probability", "Statistics"]
  },
  {
    institution: "Hem Sheela Model School",
    degree: "Senior Secondary (AISSCE) — Science",
    duration: "2021 – 2023",
    score: "91%",
    details: "Completed high school with a major in Physics, Chemistry, and Mathematics."
  },
  {
    institution: "Hem Sheela Model School",
    degree: "Secondary (AISSE)",
    duration: "2010 – 2020",
    score: "98%",
    details: "Achieved top-tier academic standing in foundational science and mathematics."
  }
];
