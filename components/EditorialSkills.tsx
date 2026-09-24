import React, { useLayoutEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Database, 
  Brain, 
  Sparkles, 
  Terminal, 
  Code2, 
  Server, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Flame
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface SkillCategory {
  id: string;
  title: string;
  badge: string;
  skills: string[];
  note: string;
  icon: typeof Database;
  highlight: string;
}

const CATEGORIES: SkillCategory[] = [
  {
    id: 'core-languages',
    title: 'Programming & Databases',
    badge: 'Core Code',
    skills: ['Python', 'SQL', 'R', 'C', 'JavaScript', 'HTML5', 'Tailwind CSS', 'React'],
    note: 'Vectorized mathematical computing, relational database design, high-frequency scripts',
    icon: Code2,
    highlight: 'Production Python & SQL pipelines'
  },
  {
    id: 'data-science',
    title: 'Data Science & Machine Learning',
    badge: 'Algorithms',
    skills: [
      'Supervised Learning', 
      'Unsupervised Learning', 
      'Time-Series Forecasting', 
      'Feature Engineering', 
      'EDA & Diagnostics', 
      'Predictive Modeling', 
      'Model Evaluation'
    ],
    note: 'Random Matrix Theory, stationarity analysis (ADF/KPSS), anomaly detection, statistical tests',
    icon: Brain,
    highlight: '94% IoT Anomaly Detection Accuracy'
  },
  {
    id: 'py-ecosystem',
    title: 'Python Libraries & Frameworks',
    badge: 'Ecosystem',
    skills: ['NumPy', 'Pandas', 'Scikit-learn', 'TensorFlow', 'Statsmodels', 'Plotly', 'Matplotlib', 'Seaborn', 'Streamlit'],
    note: 'Data pipelines, scientific computing, regression/classification, interactive analytical dashboards',
    icon: Database,
    highlight: 'High-Throughput Vectorized Processing'
  },
  {
    id: 'gen-ai',
    title: 'Generative AI & LLM Systems',
    badge: 'Applied AI',
    skills: [
      'Retrieval-Augmented Generation (RAG)', 
      'LangChain', 
      'Vector Databases (FAISS, ChromaDB)', 
      'Fine-Tuning (LoRA, QLoRA)', 
      'Prompt Engineering'
    ],
    note: 'Zero-hallucination domain knowledge grounding, sub-second vector search inferencing',
    icon: Sparkles,
    highlight: '< 800ms Financial RAG Query Latency'
  },
  {
    id: 'data-eng',
    title: 'Data Engineering & BI Tools',
    badge: 'Pipelines',
    skills: ['ETL Pipeline Development', 'Data Modeling', 'Data Validation Rules', 'Power BI', 'Excel & Power Query'],
    note: 'Scalable processing of 100K+ records, automated Power Query workflows, saving 3+ engineering hours weekly',
    icon: Server,
    highlight: '100K+ Records Handled, 35% Effort Cut'
  },
  {
    id: 'devops-cloud',
    title: 'Business Analysis, QA & DevOps',
    badge: 'Infrastructure',
    skills: [
      'Requirements Gathering & Mapping', 
      'KPI & Trend Analysis', 
      'Functional & Integration Testing', 
      'SDLC', 
      'Git', 
      'GitHub Actions', 
      'Docker', 
      'CI/CD Pipelines', 
      'AWS', 
      'Google Cloud (GCP)', 
      'Oracle Cloud (OCI)'
    ],
    note: 'Agile/Scrum, containerization, multi-cloud automated deployment pipelines',
    icon: Terminal,
    highlight: 'Automated CI/CD & Multi-Cloud Ops'
  }
];

const RESUME_CERTS = [
  "IBM Data Science Professional",
  "IBM Data Analytics",
  "IBM Business Analyst",
  "DeepLearning.AI (Neural Networks, Hyperparameter Tuning)",
  "TensorFlow Deep Learning",
  "MathWorks Image Processing",
  "ZTCA Certified",
  "Google Cloud Fundamentals",
  "Oracle Cloud Infrastructure Data Science & Cloud",
  "FreeCodeCamp: Machine Learning with Python",
  "FreeCodeCamp: Data Analysis with Python"
];

// Skill Logo Component rendering dedicated SVG brand logos and domain icons
const SkillLogo: React.FC<{ name: string }> = ({ name }) => {
  switch (name) {
    case 'Python':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
          <path d="M11.9 1.5c-5.2 0-4.9 2.2-4.9 2.2l.1 2.3h5V7H5.2S2 6.6 2 11.9c0 5.2 2.8 5 2.8 5h1.7v-2.4s-.1-2.8 2.8-2.8h4.9s2.7.1 2.7-2.6V4.2s.4-2.7-5-2.7zm-2.8 1.6c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9z" fill="#387EB8"/>
          <path d="M12.1 22.5c5.2 0 4.9-2.2 4.9-2.2l-.1-2.3h-5V17h6.9s3.2.4 3.2-4.9c0-5.2-2.8-5-2.8-5h-1.7v2.4s.1 2.8-2.8 2.8h-4.9s-2.7-.1-2.7 2.6v4.9s-.4 2.7 5 2.7zm2.8-1.6c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9z" fill="#FFE052"/>
        </svg>
      );
    case 'SQL':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
          <ellipse cx="12" cy="5" rx="8" ry="3" stroke="#38BDF8" strokeWidth="1.8" fill="#0284C7" fillOpacity="0.2"/>
          <path d="M4 5v6c0 1.6 3.6 3 8 3s8-1.4 8-3V5" stroke="#38BDF8" strokeWidth="1.8"/>
          <path d="M4 11v6c0 1.6 3.6 3 8 3s8-1.4 8-3v-6" stroke="#38BDF8" strokeWidth="1.8"/>
        </svg>
      );
    case 'R':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
          <ellipse cx="12" cy="12" rx="10" ry="8" fill="#276DC3"/>
          <path d="M8 8h4.2c1.8 0 3 .8 3 2.2 0 1.1-.7 1.8-1.8 2.1l2.4 3.7h-2.2l-2-3.4H9.8v3.4H8V8zm1.8 3.2h2c.8 0 1.3-.4 1.3-1s-.5-1-1.3-1H9.8v2z" fill="#FFFFFF"/>
        </svg>
      );
    case 'C':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L2 7.8v11.4L12 25l10-5.8V7.8L12 2z" fill="#00599C" />
          <path d="M15.5 15.5c-1 1-2.2 1.5-3.5 1.5-2.8 0-5-2.2-5-5s2.2-5 5-5c1.3 0 2.5.5 3.5 1.5l1.4-1.4C15.5 5.7 13.8 5 12 5 8.1 5 5 8.1 5 12s3.1 7 7 7c1.8 0 3.5-.7 4.9-2.1l-1.4-1.4z" fill="#FFFFFF"/>
        </svg>
      );
    case 'JavaScript':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
          <rect width="24" height="24" rx="3" fill="#F7DF1E"/>
          <path d="M6 18.5l2.2-1.3c.4.8.8 1.4 1.7 1.4.9 0 1.4-.4 1.4-1.3v-6.8h2.6v6.9c0 2.2-1.3 3.3-3.6 3.3-2 0-3.3-1-4.3-2.2zm8.5-.2l2.2-1.3c.6 1 1.4 1.6 2.5 1.6 1 0 1.7-.5 1.7-1.3 0-.9-.7-1.2-1.9-1.7l-.7-.3c-2-.8-3.3-1.9-3.3-4.1 0-2 1.6-3.6 4-3.6 1.8 0 3 0.7 3.8 2.2l-2.1 1.4c-.4-.8-1-1.2-1.8-1.2-.8 0-1.4.5-1.4 1.1 0 .8.6 1.1 1.7 1.6l.7.3c2.3 1 3.5 2.1 3.5 4.3 0 2.5-1.9 3.8-4.3 3.8-2.4 0-3.9-1.2-4.7-2.7z" fill="#000000"/>
        </svg>
      );
    case 'HTML5':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
          <path d="M2.5 2l1.7 19 7.8 2.2 7.8-2.2L21.5 2H2.5z" fill="#E34F26"/>
          <path d="M12 3.8v17.5l6.4-1.8 1.4-15.7H12z" fill="#EF652A"/>
          <path d="M12 8.4H7.8l.3 3.4H12v-3.4zm0 6.6l-.1.1-2.9-.8-.2-2.1H6.7l.4 4.5 4.9 1.4V15zm0-10v3.4h4.4l-.4 4.3H12v3.4l3.7-1 .5-5.7H12V5z" fill="#FFFFFF"/>
        </svg>
      );
    case 'Tailwind CSS':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#38BDF8">
          <path d="M12 6c-3.6 0-5.8 1.8-6.6 5.4 1.3-1.8 2.9-2.5 4.7-2 1.1.3 1.9 1.1 2.7 2 1.4 1.4 3 3.1 6.8 3.1 3.6 0 5.8-1.8 6.6-5.4-1.3 1.8-2.9 2.5-4.7 2-1.1-.3-1.9-1.1-2.7-2-1.4-1.4-3-3.1-6.8-3.1zm-6.6 6.5C1.8 12.5-.4 14.3-1.2 17.9c1.3-1.8 2.9-2.5 4.7-2 1.1.3 1.9 1.1 2.7 2 1.4 1.4 3 3.1 6.8 3.1 3.6 0 5.8-1.8 6.6-5.4-1.3 1.8-2.9 2.5-4.7 2-1.1-.3-1.9-1.1-2.7-2-1.4-1.4-3-3.1-6.8-3.1z"/>
        </svg>
      );
    case 'React':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
          <ellipse cx="12" cy="12" rx="3.2" ry="8.8" stroke="#61DAFB" strokeWidth="1.4" transform="rotate(30 12 12)"/>
          <ellipse cx="12" cy="12" rx="3.2" ry="8.8" stroke="#61DAFB" strokeWidth="1.4" transform="rotate(90 12 12)"/>
          <ellipse cx="12" cy="12" rx="3.2" ry="8.8" stroke="#61DAFB" strokeWidth="1.4" transform="rotate(150 12 12)"/>
          <circle cx="12" cy="12" r="1.8" fill="#61DAFB"/>
        </svg>
      );
    case 'Supervised Learning':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
          <circle cx="6" cy="6" r="2.5" fill="#3B82F6"/>
          <circle cx="6" cy="18" r="2.5" fill="#3B82F6"/>
          <circle cx="18" cy="12" r="3" fill="#10B981"/>
          <path d="M8.5 7.5L15 11M8.5 16.5L15 13" stroke="#60A5FA" strokeWidth="1.5"/>
        </svg>
      );
    case 'Unsupervised Learning':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
          <circle cx="6" cy="7" r="2" fill="#EC4899"/>
          <circle cx="9" cy="11" r="2" fill="#EC4899"/>
          <circle cx="15" cy="14" r="2" fill="#8B5CF6"/>
          <circle cx="18" cy="17" r="2" fill="#8B5CF6"/>
          <circle cx="16" cy="7" r="2" fill="#F59E0B"/>
        </svg>
      );
    case 'Time-Series Forecasting':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
          <path d="M3 17l5-6 4 3 6-8 3 4" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18 6h3v3" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'Feature Engineering':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
          <path d="M4 8h16M4 16h16" stroke="#64748B" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="8" cy="8" r="3" fill="#F59E0B"/>
          <circle cx="16" cy="16" r="3" fill="#06B6D4"/>
        </svg>
      );
    case 'EDA & Diagnostics':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
          <path d="M3 12h4l3-7 4 14 3-7h4" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'Predictive Modeling':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke="#8B5CF6" strokeWidth="1.5"/>
          <circle cx="12" cy="12" r="5" stroke="#A78BFA" strokeWidth="1.5"/>
          <circle cx="12" cy="12" r="2" fill="#C084FC"/>
        </svg>
      );
    case 'Model Evaluation':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke="#10B981" strokeWidth="1.8"/>
          <path d="M8 12l3 3 5-5" stroke="#34D399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'NumPy':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#013243">
          <rect width="24" height="24" rx="4" fill="#4DABCF"/>
          <path d="M5 6v12h3v-6.5l6 6.5h3V6h-3v6.5L8 6H5z" fill="#FFFFFF"/>
        </svg>
      );
    case 'Pandas':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="3" width="7" height="8" rx="2" fill="#150458"/>
          <rect x="14" y="3" width="7" height="18" rx="2" fill="#E70488"/>
          <rect x="3" y="13" width="7" height="8" rx="2" fill="#FFCA00"/>
        </svg>
      );
    case 'Scikit-learn':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="#F89939"/>
          <path d="M7 16c2-4 6-7 10-6-1 3-4 6-8 6l-2 0z" fill="#3499CD"/>
          <circle cx="10" cy="9" r="2.5" fill="#FFFFFF"/>
        </svg>
      );
    case 'TensorFlow':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L3 7v10l4.5-2.5V8.5L12 6l4.5 2.5V14.5L21 17V7l-9-5z" fill="#FF6F00"/>
          <path d="M12 9.5l-4.5 2.5v4.5L12 19l4.5-2.5V12L12 9.5z" fill="#FFA800"/>
        </svg>
      );
    case 'Statsmodels':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
          <path d="M2 19h20M4 17c3-1 6-12 8-12s5 11 8 12" stroke="#4682B4" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="12" cy="5" r="2" fill="#E65100"/>
        </svg>
      );
    case 'Plotly':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#3F4F75">
          <rect x="2" y="12" width="3.5" height="9" rx="1" fill="#3F4F75"/>
          <rect x="7.5" y="7" width="3.5" height="14" rx="1" fill="#119DFF"/>
          <rect x="13" y="3" width="3.5" height="18" rx="1" fill="#636EFA"/>
          <rect x="18.5" y="9" width="3.5" height="12" rx="1" fill="#00CC96"/>
        </svg>
      );
    case 'Matplotlib':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke="#11557C" strokeWidth="2"/>
          <path d="M6 15c2-6 5-6 7-2s3 4 5-3" stroke="#E24A33" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      );
    case 'Seaborn':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
          <path d="M3 18c3-8 6-8 9-2s6 4 9-6" stroke="#4C72B0" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M3 13c3-5 6-5 9 0s6 3 9-4" stroke="#55A868" strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
        </svg>
      );
    case 'Streamlit':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#FF4B4B">
          <path d="M12 3l3.5 6.5H8.5L12 3zm-6 11l3-5.5H3L6 14zm12 0l3-5.5h-6l3 5.5zm-6 7l3.5-6.5H8.5L12 21z"/>
        </svg>
      );
    case 'Retrieval-Augmented Generation (RAG)':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
          <path d="M4 6h16M4 12h10M4 18h7" stroke="#A855F7" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="18" cy="15" r="3.5" stroke="#F59E0B" strokeWidth="1.8"/>
          <path d="M20.5 17.5L22 19" stroke="#F59E0B" strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
      );
    case 'LangChain':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
          <circle cx="7" cy="12" r="4.5" stroke="#10B981" strokeWidth="2" fill="#059669" fillOpacity="0.2"/>
          <circle cx="17" cy="12" r="4.5" stroke="#3B82F6" strokeWidth="2" fill="#2563EB" fillOpacity="0.2"/>
          <path d="M9.5 12h5" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
      );
    case 'Vector Databases (FAISS, ChromaDB)':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="3" width="18" height="5" rx="2.5" fill="#3B82F6"/>
          <rect x="3" y="9.5" width="18" height="5" rx="2.5" fill="#6366F1"/>
          <rect x="3" y="16" width="18" height="5" rx="2.5" fill="#8B5CF6"/>
        </svg>
      );
    case 'Fine-Tuning (LoRA, QLoRA)':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
          <rect x="5" y="5" width="14" height="14" rx="3" stroke="#EC4899" strokeWidth="1.8"/>
          <path d="M9 12h6M12 9v6" stroke="#F43F5E" strokeWidth="2" strokeLinecap="round"/>
          <path d="M2 10h3M2 14h3M19 10h3M19 14h3" stroke="#FDA4AF" strokeWidth="1.5"/>
        </svg>
      );
    case 'Prompt Engineering':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="4" width="18" height="16" rx="3" fill="#1E1E2E" stroke="#89B4FA" strokeWidth="1.5"/>
          <path d="M7 9l3 3-3 3M12 15h5" stroke="#A6E3A1" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      );
    case 'ETL Pipeline Development':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
          <path d="M3 6h7a3 3 0 0 1 3 3v6a3 3 0 0 0 3 3h5" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="3" cy="6" r="2" fill="#06B6D4"/>
          <circle cx="21" cy="18" r="2" fill="#10B981"/>
        </svg>
      );
    case 'Data Modeling':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="4" width="8" height="6" rx="1.5" stroke="#38BDF8" strokeWidth="1.5"/>
          <rect x="13" y="4" width="8" height="6" rx="1.5" stroke="#38BDF8" strokeWidth="1.5"/>
          <rect x="8" y="14" width="8" height="6" rx="1.5" stroke="#F59E0B" strokeWidth="1.5"/>
          <path d="M7 10v2h10v-2M12 12v2" stroke="#94A3B8" strokeWidth="1.5"/>
        </svg>
      );
    case 'Data Validation Rules':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
          <path d="M12 2l7 3.5v6c0 5-3.5 9.5-7 10.5-3.5-1-7-5.5-7-10.5v-6L12 2z" fill="#059669" fillOpacity="0.2" stroke="#10B981" strokeWidth="1.5"/>
          <path d="M9 12l2 2 4-4" stroke="#34D399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'Power BI':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="11" width="4.5" height="10" rx="1.5" fill="#EAA300"/>
          <rect x="9.5" y="6" width="4.5" height="15" rx="1.5" fill="#F2C811"/>
          <rect x="16" y="2" width="4.5" height="19" rx="1.5" fill="#F7DC6F"/>
        </svg>
      );
    case 'Excel & Power Query':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="3" fill="#107C41"/>
          <path d="M8 8l8 8M16 8l-8 8" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
      );
    case 'Requirements Gathering & Mapping':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
          <rect x="4" y="4" width="16" height="16" rx="2" stroke="#38BDF8" strokeWidth="1.5"/>
          <path d="M8 8h8M8 12h6M8 16h4" stroke="#7DD3FC" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      );
    case 'KPI & Trend Analysis':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
          <path d="M3 19l6-6 4 4 8-10" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 7h5v5" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'Functional & Integration Testing':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
          <path d="M8 4h8M9 4v6l-4 7a2 2 0 0 0 1.7 3h10.6A2 2 0 0 0 19 17l-4-7V4" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M7 16h10" stroke="#FBBF24" strokeWidth="2"/>
        </svg>
      );
    case 'SDLC':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
          <path d="M21 12a9 9 0 0 0-15.5-6.4L3 8m0 0V3m0 5h5M3 12a9 9 0 0 0 15.5 6.4L21 16m0 0v5m0-5h-5" stroke="#6366F1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'Git':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#F05032">
          <path d="M21.6 10.7L13.3 2.4c-.6-.6-1.5-.6-2.1 0L9.4 4.2l2.6 2.6c.6-.2 1.4 0 1.9.5.5.5.7 1.3.5 1.9l2.5 2.5c.6-.2 1.4 0 1.9.5.7.7.7 1.9 0 2.6-.7.7-1.9.7-2.6 0-.6-.6-.7-1.4-.5-2.1l-2.4-2.4v5.3c.2.2.3.5.3.8 0 .9-.7 1.6-1.6 1.6s-1.6-.7-1.6-1.6c0-.4.2-.8.5-1.1V9.5c-.3-.3-.5-.7-.5-1.1 0-.6.3-1.1.8-1.4L8.7 4.4 2.4 10.7c-.6.6-.6 1.5 0 2.1l8.3 8.3c.6.6 1.5.6 2.1 0l8.8-8.8c.6-.6.6-1.5 0-2.1z"/>
        </svg>
      );
    case 'GitHub Actions':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#2088FF">
          <path d="M12 2C6.5 2 2 6.5 2 12c0 4.4 2.9 8.2 6.8 9.5.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.3-3.4-1.3-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-4.9 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1 .8-.2 1.7-.3 2.5-.3.9 0 1.7.1 2.5.3 1.9-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.7.7 1 1.6 1 2.7 0 3.8-2.3 4.6-4.6 4.9.4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5 4-1.3 6.8-5.1 6.8-9.5 0-5.5-4.5-10-10-10z"/>
        </svg>
      );
    case 'Docker':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#2496ED">
          <path d="M13 8h2v2h-2V8zm-3 0h2v2h-2V8zm-3 0h2v2H7V8zm6-3h2v2h-2V5zm-3 0h2v2h-2V5zm-3 0h2v2H7V5zm12 7c-.3 0-1.4.1-2 .7-.6-.4-1.5-.6-2.5-.5-5.2 0-9.5 3.3-9.5 8 0 .5 0 1 .1 1.5 1.5.8 4 1.3 7 1.3 6.6 0 11.9-4 11.9-9.5 0-.5 0-1-.1-1.5H23v-1.5c-1.3 0-2.3.8-3.1 1.5z"/>
        </svg>
      );
    case 'CI/CD Pipelines':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
          <path d="M6 12a4 4 0 1 0 8 0 4 4 0 1 0-8 0zm4 0a4 4 0 1 0 8 0 4 4 0 1 0-8 0z" stroke="#F97316" strokeWidth="1.8" strokeLinecap="round"/>
          <circle cx="6" cy="12" r="1.5" fill="#F97316"/>
          <circle cx="18" cy="12" r="1.5" fill="#3B82F6"/>
        </svg>
      );
    case 'AWS':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#FF9900">
          <path d="M6.8 10.5c0-.6.4-1.1 1.2-1.1.6 0 1.2.2 1.7.5v-1c-.5-.3-1.1-.4-1.7-.4-1.5 0-2.4.8-2.4 2 0 1.9 2.6 1.6 2.6 2.5 0 .6-.5 1-1.3 1-.7 0-1.4-.3-2-.7v1.1c.6.4 1.3.6 2 .6 1.7 0 2.5-.9 2.5-2.1 0-2.1-2.6-1.7-2.6-2.4zm10.7 3.3c-.6-.7-1-1.8-1-3.2 0-1.4.4-2.5 1-3.2.6-.7 1.5-1.1 2.6-1.1s2 .4 2.6 1.1c.6.7 1 1.8 1 3.2 0 1.4-.4 2.5-1 3.2-.6.7-1.5 1.1-2.6 1.1s-2-.4-2.6-1.1zm2.6-.2c1.3 0 1.8-1.2 1.8-3s-.5-3-1.8-3-1.8 1.2-1.8 3 .5 3 1.8 3zm-6.8-6.1h1.3v8h-1.3v-8zM3 19.5c5.3 3 12.7 3 18 0-.4-.4-1-.8-1.5-1.1-4.7 2.4-11 2.4-15.5 0-.4.3-.8.7-1 1.1z"/>
        </svg>
      );
    case 'Google Cloud (GCP)':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
          <path d="M19.4 10.6a5.5 5.5 0 0 0-10.2-2.1A4.5 4.5 0 0 0 4.5 13a4.5 4.5 0 0 0 4.5 4.5h10.4a3.6 3.6 0 0 0 0-7.2v.3z" fill="#4285F4"/>
          <circle cx="8" cy="14" r="2" fill="#EA4335"/>
          <circle cx="16" cy="13" r="2.5" fill="#FBBC05"/>
          <path d="M12 9l2 3h-4z" fill="#34A853"/>
        </svg>
      );
    case 'Oracle Cloud (OCI)':
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#F80000">
          <path d="M7.7 5.5C3.5 5.5 0 8.4 0 12s3.5 6.5 7.7 6.5h8.6c4.2 0 7.7-2.9 7.7-6.5s-3.5-6.5-7.7-6.5H7.7zm8.4 10.5H7.9C5 16 2.6 14.2 2.6 12s2.4-4 5.3-4h8.2c2.9 0 5.3 1.8 5.3 4s-2.4 4-5.3 4z"/>
        </svg>
      );
    default:
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="#FF7A00" strokeWidth="2">
          <circle cx="12" cy="12" r="8"/>
        </svg>
      );
  }
};

const EditorialSkills: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    let ctx: gsap.Context | null = null;
    let timer: NodeJS.Timeout | null = null;

    // Small delay ensures DOM renders, fonts load, and dimensions are fully established
    timer = setTimeout(() => {
      if (!triggerRef.current || !trackRef.current) return;

      ctx = gsap.context(() => {
        const track = trackRef.current;
        const trigger = triggerRef.current;
        if (!track || !trigger) return;

        // Dynamic horizontal scroll calculation
        const getDistance = () => track.scrollWidth - window.innerWidth;

        gsap.to(track, {
          x: () => -getDistance(),
          ease: 'none',
          scrollTrigger: {
            id: 'skills-horizontal-scroll',
            trigger: trigger,
            pin: true,
            scrub: 1,
            start: 'top top',
            end: () => `+=${Math.max(getDistance(), 600)}`,
            invalidateOnRefresh: true,
            anticipatePin: 1
          }
        });
      }, triggerRef);

      // Force a calculation refresh across all active ScrollTriggers
      ScrollTrigger.refresh();
    }, 150);

    const onResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener('resize', onResize);

    return () => {
      if (timer) clearTimeout(timer);
      window.removeEventListener('resize', onResize);
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <div ref={sectionRef} className="relative w-full">
      {/* 
        Sticky GSAP Horizontal Section:
        Vertical scroll is locked, translating the track horizontally to showcase skills & certifications
      */}
      <div 
        ref={triggerRef} 
        className="relative h-screen w-full overflow-hidden flex flex-col justify-center bg-[#0d0300] border-y border-orange-950/60"
      >
        {/* Top Sticky Header inside pinned canvas */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-7xl w-full mx-auto px-6 sm:px-10 pt-8 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-4 shrink-0"
        >
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-[#ff3d00] animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-orange-400">
                07 &bull; INTERACTIVE COMPETENCY GALLERY
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white flex items-center gap-3">
              <span>Technical Skills </span>
            </h2>
            <p className="text-xs sm:text-sm text-stone-400 mt-1 max-w-xl">
              Scroll down to travel through core programming, ML architectures, LLM systems, and industry accreditations.
            </p>
          </div>

          {/* Horizontal Scroll Progress Prompt */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-stone-400 backdrop-blur-md self-start sm:self-auto">
            <span>Scroll vertically to pan</span>
            <ArrowRight size={13} className="text-orange-400 animate-bounce-x" />
          </div>
        </motion.div>

        {/* Horizontal Track Container */}
        <div className="relative flex-1 flex items-center overflow-visible py-4">
          <div 
            ref={trackRef} 
            className="flex items-stretch gap-6 pl-6 sm:pl-12 pr-16 w-max will-change-transform"
          >
            {/* 1. Introductory Overview Card */}
            <motion.div 
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="w-[320px] sm:w-[380px] shrink-0 p-7 rounded-2xl bg-gradient-to-br from-[#200800] to-[#120400] border border-orange-500/40 shadow-2xl shadow-black/80 flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-orange-400 bg-orange-950/80 px-2.5 py-1 rounded-full border border-orange-500/30 inline-block mb-4">
                  COMPREHENSIVE CAPABILITIES
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight mb-3">
                  Production Engineering Stack
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                  Engineered across quantitative finance, large-scale statistical pipelines, deep learning vision models, zero-hallucination RAG frameworks, and distributed enterprise CI/CD.
                </p>

                <div className="mt-6 pt-5 border-t border-white/10 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-stone-400">
                    <CheckCircle2 size={13} className="text-emerald-400" />
                    <span>Python &bull; SQL &bull; R &bull; C</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-stone-400">
                    <CheckCircle2 size={13} className="text-emerald-400" />
                    <span>FAISS &bull; LangChain &bull; LoRA</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-stone-400">
                    <CheckCircle2 size={13} className="text-emerald-400" />
                    <span>AWS &bull; GCP &bull; Oracle &bull; Docker</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-stone-400">
                <span>6 Core Disciplines</span>
                <span className="text-orange-400 font-semibold flex items-center gap-1">
                  Pan Right <ArrowRight size={12} />
                </span>
              </div>
            </motion.div>

            {/* 2. Six Detailed Skill Domain Cards */}
            {CATEGORIES.map((cat, idx) => {
              const Icon = cat.icon;

              return (
                <div 
                  key={cat.id}
                  className="w-[360px] sm:w-[450px] shrink-0 p-7 rounded-2xl bg-[#140501] border border-white/10 hover:border-orange-500/40 shadow-xl shadow-black/80 flex flex-col justify-between group transition-all duration-300"
                >
                  <div>
                    {/* Card Header */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 group-hover:scale-105 transition-transform">
                        <Icon size={20} />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/5 text-stone-300 border border-white/10">
                          {cat.badge}
                        </span>
                        <span className="text-xs font-mono text-stone-400">
                          0{idx + 1}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-orange-300 transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-stone-400 leading-relaxed mb-5">
                      {cat.note}
                    </p>

                    {/* Skill Pill Grid with logos */}
                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((skill) => (
                        <div
                          key={skill}
                          className="flex items-center gap-2 text-[11px] font-mono px-2.5 py-1.5 rounded-lg bg-black/60 text-stone-200 border border-white/10 group-hover:border-orange-500/25 hover:border-orange-400/50 hover:bg-white/5 transition-all shadow-sm"
                        >
                          <span className="w-3.5 h-3.5 shrink-0 flex items-center justify-center">
                            <SkillLogo name={skill} />
                          </span>
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Highlight Footer */}
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono">
                    <span className="text-stone-400">Benchmark:</span>
                    <span className="text-orange-300 font-semibold flex items-center gap-1">
                      <Flame size={12} className="text-[#ff3d00]" />
                      {cat.highlight}
                    </span>
                  </div>
                </div>
              );
            })}

            {/* 3. Industry Certifications Card (End of horizontal gallery) */}
            <div className="w-[380px] sm:w-[480px] shrink-0 p-7 rounded-2xl bg-gradient-to-br from-[#1f0902] via-[#170601] to-[#100300] border border-orange-500/35 shadow-2xl shadow-black/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <ShieldCheck size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-bold block">
                      VERIFIED ACCREDITATIONS
                    </span>
                    <h4 className="text-lg sm:text-xl font-bold text-white">
                      Industry Certifications
                    </h4>
                  </div>
                </div>

                <p className="text-xs text-stone-400 mb-4">
                  Rigorous external professional certificates across IBM, DeepLearning.AI, Google Cloud, Oracle Cloud, and TensorFlow.
                </p>

                <div className="grid grid-cols-1 gap-2 max-h-[320px] overflow-y-auto pr-1">
                  {RESUME_CERTS.map((cert, cIdx) => (
                    <div
                      key={cIdx}
                      className="flex items-center gap-2 p-2 rounded-xl bg-white/5 border border-white/5 text-xs font-mono text-stone-200 hover:border-orange-500/30 transition-colors"
                    >
                      <CheckCircle2 size={12} className="text-emerald-400 shrink-0" />
                      <span className="truncate">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-stone-400">
                <span>All credentials up-to-date</span>
                <span className="text-orange-400 font-semibold">&bull; 2024–2026</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Status bar */}
        <div className="px-6 sm:px-10 py-3 bg-black/40 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-stone-400 shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-orange-400 font-bold">Skills Gallery</span>
            <span>&bull;</span>
            <span>Python, SQL, RAG, Scikit-learn, Docker, CI/CD, Microgrid Diagnostics</span>
          </div>
          <div className="hidden sm:block text-stone-400">
            End of Skills Showcase &rarr;
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorialSkills;
