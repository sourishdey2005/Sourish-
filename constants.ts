
import { Experience, Project, Publication, Certification, Education, Honor } from './types';

export interface CodeSnippet {
  id: string;
  title: string;
  language: string;
  code: string;
  description: string;
  category: 'ML' | 'Cloud' | 'DevOps';
}

export const CODE_SNIPPETS: CodeSnippet[] = [
  {
    id: 'snip-1',
    title: 'Distributed Model Training',
    language: 'python',
    category: 'ML',
    description: 'A scalable training orchestration pattern used for high-dimensional genomic datasets using MirroredStrategy.',
    code: `import tensorflow as tf
from tensorflow.keras import layers

def create_distributed_model(input_shape):
    strategy = tf.distribute.MirroredStrategy()
    
    with strategy.scope():
        model = tf.keras.Sequential([
            layers.Conv1D(64, 3, activation='relu', input_shape=input_shape),
            layers.LSTM(128, return_sequences=True),
            layers.Dropout(0.3),
            layers.Dense(3, activation='softmax')
        ])
        
        model.compile(
            optimizer='adam',
            loss='categorical_crossentropy',
            metrics=['accuracy']
        )
    return model

# Initialize training on multi-GPU cluster
model = create_distributed_model((100, 1))
print(f"Cluster Ready. Training on {strategy.num_replicas_in_sync} units.")`
  },
  {
    id: 'snip-2',
    title: 'Multi-AZ Infrastructure',
    language: 'hcl',
    category: 'Cloud',
    description: 'Production-grade VPC definition with private subnets and NAT gateway orchestration via Terraform.',
    code: `module "vpc" {
  source = "terraform-aws-modules/vpc/aws"

  name = "engineering-prod-vpc"
  cidr = "10.0.0.0/16"

  azs             = ["us-east-1a", "us-east-1b", "us-east-1c"]
  private_subnets = ["10.0.1.0/24", "10.0.2.0/24", "10.0.3.0/24"]
  public_subnets  = ["10.0.101.0/24", "10.0.102.0/24", "10.0.103.0/24"]

  enable_nat_gateway = true
  single_nat_gateway = false
  
  tags = {
    Environment = "production"
    Owner       = "SourishDey"
  }
}`
  },
  {
    id: 'snip-3',
    title: 'Canary Deployment Spec',
    language: 'yaml',
    category: 'DevOps',
    description: 'Advanced Kubernetes deployment strategy with resource limits and automated health probes.',
    code: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: ml-inference-canary
spec:
  replicas: 1
  selector:
    matchLabels:
      app: inference
      track: canary
  template:
    metadata:
      labels:
        app: inference
        track: canary
    spec:
      containers:
      - name: api
        image: sourish/ml-inference:v2.1-canary
        resources:
          limits:
            cpu: "500m"
            memory: "1Gi"
        livenessProbe:
          httpGet:
            path: /health
            port: 8080`
  },
  {
    id: 'snip-4',
    title: 'Lambda@Edge Auth Hook',
    language: 'javascript',
    category: 'Cloud',
    description: 'CloudFront function for identity-based request signing and header sanitization.',
    code: `export const handler = async (event) => {
    const request = event.Records[0].cf.request;
    const headers = request.headers;

    // Validate JWT from custom headers
    if (!headers['x-auth-token']) {
        return {
            status: '403',
            statusDescription: 'Forbidden',
            body: 'Access Denied'
        };
    }

    // Sanitize and Forward
    delete headers['x-internal-id'];
    return request;
};`
  },
  {
    id: 'snip-5',
    title: 'CI/CD Model Pipeline',
    language: 'yaml',
    category: 'DevOps',
    description: 'Automated GitHub Actions workflow for linting, testing, and pushing Docker images to ECR.',
    code: `name: ML Ops CI
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Run Tests
        run: pytest tests/
      - name: Build and Push
        run: |
          docker build -t ml-api .
          aws ecr get-login-password | docker login
          docker push ecr-uri:latest`
  }
];

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
  {
    provider: "Google Cloud & Terraform",
    items: [
      "Google Cloud Cybersecurity Certificate",
      "Build Infrastructure with Terraform",
      "Manage Kubernetes in Google Cloud",
      "Cloud Computing Foundations",
      "Generative AI Certificate"
    ]
  },
  {
    provider: "AWS & Docker",
    items: [
      "AWS Machine Learning Foundations",
      "AWS Cloud Essentials",
      "Basic DevSecOps in AWS",
      "Basic Docker Training"
    ]
  },
  {
    provider: "Linux Foundation & Kubernetes",
    items: [
      "LFS158: Introduction to Kubernetes",
      "LFS167: Introduction to Jenkins",
      "LFS151: Cloud Infrastructure Technologies",
      "LFD110: Introduction to RISC-V"
    ]
  },
  {
    provider: "IBM & Deep Learning",
    items: [
      "Deep Learning with TensorFlow",
      "Accelerating Deep Learning with GPUs",
      "Machine Learning with Python",
      "Introduction to Quantum Computing",
      "Containers, Kubernetes, and OpenShift"
    ]
  },
  {
    provider: "Microsoft & Data Analysis",
    items: [
      "Career Essentials in Data Analysis",
      "Career Essentials in Generative AI",
      "Analyzing and Visualizing Data with Power BI"
    ]
  },
  {
    provider: "freeCodeCamp & Python",
    items: [
      "Machine Learning with Python",
      "Data Analysis with Python",
      "Data Visualization",
      "Scientific Computing with Python"
    ]
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    title: "HyperNova++: A Novel Adaptive Activation Function for High-Accuracy Neural Learning on Nonlinear Synthetic Decision Manifolds",
    journal: "INTERNATIONAL JOURNAL OF LATEST TECHNOLOGY IN ENGINEERING, MANAGEMENT & APPLIED SCIENCE (IJLTEMAS)",
    date: "Jan 10, 2026",
    abstract: "Activation functions play a critical role in enabling deep neural networks to model complex non-linear relationships; however, widely used functions such as ReLU, GELU, and Swish suffer from gradient saturation, vanishing gradients in deep architectures, and limited ability to model periodic and heterogeneous non-linear patterns. To address these limitations, this work introduces HyperNova++, a smooth, adaptive, parameterized activation function that unifies bounded saturation, periodic oscillation, and unbounded monotonic growth within a single learnable formulation. HyperNova++ combines hyperbolic tangent, sine, and Softplus components, modulated by three trainable parameters (𝛼,𝛽,𝛾) that dynamically control curvature, frequency, and growth behavior.\n\nExtensive evaluation on a controlled synthetic dataset with known ground-truth decision boundaries—incorporating linear, polynomial, and periodic interactions—demonstrates that HyperNova++ consistently outperforms ReLU, GELU, and Swish under identical training conditions. The proposed activation achieves over 99% accuracy, along with superior F1-score and ROC-AUC, while exhibiting stable, non-vanishing gradients and faster convergence. Theoretical analysis further establishes universal approximation capability, bounded Lipschitz continuity, and favorable gradient properties. These results position HyperNova++ as a robust and versatile activation function for deep learning applications involving complex, multi-regime nonlinear manifolds, particularly in scientific, financial, and engineering domains.",
    type: "publication"
  },
  {
    title: "IoT and Computer Vision for Urban Traffic Management",
    journal: "International Journal for Multidisciplinary Research (IJFMR)",
    date: "Feb 11, 2025",
    abstract: "A novel smart urban traffic management system synergistically integrating IoT and computer vision. The system employs a hybrid edge-cloud architecture with a distributed network of intelligent IoT devices (smart cameras with on-device AI, LIDAR, radar) to capture real-time traffic data. Edge computing nodes perform localized analysis for immediate responses like adaptive traffic signal adjustments, while the cloud platform aggregates data for comprehensive pattern analysis and predictive modeling. Advanced computer vision algorithms (YOLOv8) provide critical insights into traffic dynamics.",
    type: "publication"
  },
  {
    title: "Smart Breathe: IoT-Integrated Community Air Purification System",
    journal: "International Journal for Multidisciplinary Research (IJFMR)",
    date: "Dec 18, 2024",
    abstract: "An innovative IoT-integrated air purification system to combat air pollution in high-density urban and industrial areas. Utilizing a distributed architecture, the system employs real-time monitoring and dynamic adaptivity to optimize air purification at pollution hotspots. Advanced sensors track pollutants like PM2.5, NO₂, and VOCs, while a centralized IoT platform analyzes data to provide actionable insights for targeted interventions, enhancing public health and promoting environmental equity.",
    type: "publication"
  },
  {
    title: "Quantum Computing for Nuclear Fusion: Advancing Simulation and Optimization",
    journal: "International Journal for Multidisciplinary Research (IJFMR)",
    date: "Dec 10, 2024",
    abstract: "This paper explores the transformative potential of quantum computing in revolutionizing nuclear fusion. It focuses on leveraging quantum algorithms to enhance simulation accuracy and optimize energy production processes, paving the way for cleaner and more efficient energy solutions. The work aims to combine cutting-edge quantum technologies with energy innovation to contribute to a sustainable and energy-secure future.",
    type: "publication"
  },
  {
    title: "AI-Powered Smart Agriculture Drone",
    journal: "Intellectual Property India",
    date: "Patent ID: 468494-001",
    abstract: "A revolutionary autonomous aerial system engineered for precision agriculture. The framework utilizes high-resolution multi-spectral imaging and computer vision to monitor crop health in real-time. By applying edge-based AI models, the drone can identify localized nutrient deficiencies and pest infestations, triggering automated, targeted pesticide dispersal. Includes a predictive engine for yield forecasting based on temporal vegetative indices (NDVI/EVI), significantly optimizing harvest cycles.",
    type: "patent"
  },
  {
    title: "Underwater Power Generator",
    journal: "Intellectual Property India",
    date: "Patent ID: 450888-001",
    abstract: "A high-efficiency renewable energy solution designed for harvesting kinetic energy from underwater currents. The system features a custom-designed magneto-inductive turbine that operates effectively even in low-velocity flow environments. It employs advanced hydrodynamic blade profiles to maximize energy capture while minimizing environmental impact on marine life. Integrated with IoT sensors for remote structural health monitoring and power output optimization via adaptive torque control.",
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

export const HONORS: Honor[] = [
  {
    title: "School Topper",
    institution: "Hem Sheela Model School",
    date: "Jan 2023",
    description: "Achieved first rank in the graduating class of 2023."
  },
  {
    title: "School Topper (98.5%)",
    institution: "Hem Sheela Model School",
    date: "Jan 2020",
    description: "Academic excellence award for secondary board examinations."
  },
  {
    title: "Gold Medalist",
    institution: "International Maths Olympiad (SOF)",
    date: "High School",
    description: "Achieved top international rank in competitive mathematics."
  },
  {
    title: "Silver Medalist",
    institution: "International Maths Olympiad (SOF)",
    date: "High School",
    description: "Exceptional performance award in SOF mathematics competition."
  }
];
