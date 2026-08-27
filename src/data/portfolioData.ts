import { Project, SkillCategory, ExperienceItem, EducationItem, CertificationItem, HackathonItem, ResumeOption } from './types';

export const OWNER_INFO = {
  name: 'Taksh Patel',
  location: 'Vaughan, Ontario, Canada',
  email: 'takshp2024@gmail.com',
  university: 'York University',
  degree: 'Bachelor of Arts, Computer Science Honours',
  graduation: 'April 2029',
  headline: 'Building Intelligent Software & Secure Systems.',
  subheadline: 'Computer Science student at York University focused on Software Engineering, AI/ML, and Cybersecurity.',
  availabilityText: 'Open to Software Engineering, AI/ML & Cybersecurity Opportunities',
  githubUser: 'takshp2024-sys',
  links: {
    github: 'https://github.com/takshp2024-sys',
    linkedin: 'https://linkedin.com/in/taksh-patel-b71b33329/',
    devpost: 'https://devpost.com/takshp2024-sys',
    email: 'takshp2024@gmail.com',
  }
};

export const RESUME_OPTIONS: ResumeOption[] = [
  {
    id: 'full',
    label: 'FULL RESUME',
    title: 'Full Engineering Resume',
    description: 'Complete overview of my education, experience, projects, and technical background.',
    path: 'https://drive.google.com/file/d/1uBbq2hWJtX5y7fsEuO-PcyscGmTW8m2E/view?usp=sharing',
  },
  {
    id: 'software-ai',
    label: 'SOFTWARE / AI',
    title: 'Software & AI Tailored Resume',
    description: 'Focused on Software Engineering, Artificial Intelligence, Machine Learning, and Full-Stack Development.',
    path: 'https://drive.google.com/file/d/1RQDf0bvE8Jzm-JGpanB3phHgg8rN95GE/view?usp=sharing',
  },
  {
    id: 'cybersecurity',
    label: 'CYBERSECURITY',
    title: 'Cybersecurity Tailored Resume',
    description: 'Focused on Cybersecurity, Computer Security, Threat Detection, Security Monitoring, Digital Forensics, and Secure Systems.',
    path: 'https://drive.google.com/file/d/1HYkEiyp2-gZKp2El7ebQ_rf2xCDM0sY9/view?usp=sharing',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'perimeter',
    title: 'Perimeter',
    subtitle: 'Vendor-Scoped Payment Tokenization Vault',
    tier: 1,
    modes: ['cybersecurity'],
    category: 'FinTech × Cybersecurity',
    badge: 'Hackathon Project',
    year: '2026',
    shortDescription: 'Vendor-scoped payment tokenization system designed to reduce the impact of payment-data breaches by issuing disposable, domain-bound tokens.',
    fullDescription: [
      'Perimeter is a vendor-scoped payment tokenization vault engineered to mitigate collateral damage during third-party payment data breaches.',
      'Instead of exposing real underlying credit card credentials to every online merchant, Perimeter generates disposable, vendor-scoped payment tokens tied directly to merchant domains.',
      'The system maintains an exposure relationship between vendor, domain, token, and transaction activity. If a vendor is compromised, the affected token can be identified and revoked instantly without requiring every other payment relationship to be replaced.'
    ],
    myContribution: 'Architected the core payment token vault schema, domain-scoped binding logic, and instant breach revocation workflow.',
    technologies: ['Python', 'FastAPI', 'React', 'Cryptography', 'Docker', 'SQLite', 'FinTech Security'],
    keyAccomplishments: [
      'Engineered vendor-scoped token generator binding real payment credentials to isolated merchant domains',
      'Built exposure relationship graph mapping vendor, domain, token, and transaction activity',
      'Implemented instant single-token revocation workflow preventing collateral payment re-issuance',
      'Designed read-only breach isolation API enabling targeted threat containment'
    ],
    architectureNotes: [
      'Vault Tokenization: Real Credentials → Perimeter Vault → Vendor-Scoped Token → Vendor Domain → Transaction',
      'Breach Response: Vendor Breach → Identify Vendor → Match Token → Revoke Token → Other Vendors Protected'
    ],
    isPerimeterVisual: true,
    links: {
      github: 'https://github.com/lohit555/Perimeter',
      liveDemo: 'https://perimeter-beta.vercel.app',
      devpost: 'https://devpost.com/software/perimeter-7gkrq5',
      demoVideo: 'https://drive.google.com/file/d/16YFcKzquKJa1qBd6AVg-1F3fzlKH3hQa/view?usp=drive_link',
    }
  },
  {
    id: 'coursechat',
    title: 'CourseChat',
    subtitle: 'CUTC Transform Hackathon 2026',
    tier: 1,
    modes: ['software-ai'],
    category: 'AI / EdTech',
    badge: 'Hackathon Project',
    year: '2026',
    shortDescription: 'AI-powered Chrome extension that indexes course materials and uses retrieval-augmented generation (RAG) to provide context-aware answers from course content.',
    fullDescription: [
      'Built during the CUTC Transform Hackathon 2026 to help students interact directly with course material inside the browser.',
      'Core architecture integrates retrieval-augmented generation (RAG) using Backboard.io and Google Gemini to deliver contextually precise answers based on indexed document chunks.',
      'Features Chrome Manifest V3 background scripts, real-time vector search workflow, and a clean slide-over UI panel.'
    ],
    myContribution: 'Architected the retrieval-augmented generation (RAG) pipeline & Backboard.io document indexing workflow.',
    technologies: ['TypeScript', 'React', 'Chrome Manifest V3', 'Gemini', 'Backboard.io', 'RAG'],
    keyAccomplishments: [
      'Architected the retrieval-augmented generation (RAG) & Backboard.io indexing pipeline',
      'Developed Chrome Manifest V3 extension architecture for seamless browser sidebar interaction',
      'Implemented context-aware query resolution from raw lecture notes and course documents'
    ],
    architectureNotes: [
      'Manifest V3 Background Service Worker → Backboard.io Document Indexer',
      'Gemini API LLM invocation with strict context prompt constraints',
      'Local caching for active session conversation context'
    ],
    links: {
      chromeExtension: 'https://chromewebstore.google.com/detail/dlgnoolemhejlchaakdekdjlhcpnopgg',
      github: 'https://github.com/tridibbanik17/CUTC-Transform-Hackathon-2026',
      devpost: 'https://devpost.com/software/coursechat?_gl=1*1pgmqm2*_gcl_au*MTg1NTE3MTE2OC4xNzg1MTIzOTI1*_ga*MzY0OTkzNjEyLjE3ODUxMjM5MjY.*_ga_0YHJK3Y10M*czE3ODY5ODk5MDIkbzE1JGcxJHQxNzg2OTg5OTY1JGo2MCRsMCRoMA..',
      demoVideo: 'https://www.youtube.com/watch?v=3ZYDVrsDuRY',
    },
    importantNote: 'Contribution focused on the RAG / Backboard integration and document indexing workflow.'
  },
  {
    id: 'robot-sensor-anomaly-detector',
    title: 'Robot Sensor Anomaly Detector',
    subtitle: 'Unsupervised Hardware Telemetry Protection',
    tier: 1,
    modes: ['software-ai', 'cybersecurity'],
    category: 'AI / Security / Robotics',
    year: '2026',
    shortDescription: 'Unsupervised LSTM Autoencoder detecting multi-modal telemetry anomalies in robot sensor streams across temperature, vibration, and voltage.',
    fullDescription: [
      'Developed an unsupervised deep learning pipeline designed to monitor robotic hardware streams and detect early structural or electrical degradation before physical failure.',
      'Trained an LSTM Autoencoder on high-frequency time-series telemetry (temperature, vibration, voltage) to establish baseline system behavior.',
      'Deployed a production-grade FastAPI inference microservice wrapped in multi-stage Docker and hosted on Render with automated SQLite drift tracking.'
    ],
    myContribution: 'Sole developer of unsupervised PyTorch LSTM autoencoder, FastAPI inference microservice, and SQLite drift monitoring.',
    technologies: ['Python', 'PyTorch', 'FastAPI', 'React', 'Docker', 'Render', 'SQLite', 'Scikit-Learn'],
    keyAccomplishments: [
      'Achieved 0.82 F1-score and 0.89 ROC-AUC across 4 injected fault types',
      'Outperformed Isolation Forest baseline model by 10 F1 points',
      'Engineered FastAPI inference API exposing /predict, /health, and /history endpoints',
      'Implemented SQLite drift monitoring triggering alerts at 1.5x baseline degradation threshold'
    ],
    metrics: [
      { label: 'F1 Score', value: '0.82', subtext: 'Tested across 4 fault types' },
      { label: 'ROC-AUC', value: '0.89', subtext: 'High anomaly discrimination' },
      { label: 'Baseline Uplift', value: '+10 F1', subtext: 'vs. Isolation Forest' },
      { label: 'Degradation Limit', value: '1.5x', subtext: 'SQLite drift trigger threshold' }
    ],
    architectureNotes: [
      'Telemetry Stream → Standard Scaler → LSTM Autoencoder (PyTorch)',
      'Reconstruction Error Loss vs Dynamic Thresholding Engine',
      'FastAPI Microservice (/predict, /health, /history) + Docker on Render',
      'SQLite telemetry log & model performance drift tracking'
    ],
    links: {
      github: 'https://github.com/takshp2024-sys/robot-sensor-anomaly-detector',
      liveDemo: 'https://robot-sensor-anomaly-detector-2.onrender.com/docs',
      devpost: 'https://devpost.com/software/robot-sensor-anomaly-detector',
    }
  },
  {
    id: 'siem-lite',
    title: 'SIEM-lite',
    subtitle: 'Real-Time Threat Detection & Security Log Monitoring',
    tier: 2,
    modes: ['cybersecurity'],
    category: 'Security Operations / SIEM',
    year: '2025',
    shortDescription: 'Security log ingestion and anomaly detection engine with rule signatures, sliding-window brute-force detection, and live analyst dashboard.',
    fullDescription: [
      'Built a lightweight, high-speed Security Information and Event Management (SIEM) pipeline designed for real-time security log ingestion and threat detection.',
      'Combines signature-based detection rules (sliding-window brute force, off-hours authentication) with an ML Isolation Forest model targeting anomalous per-source-IP login patterns.',
      'Features source-agnostic log normalization and a real-time React security analyst dashboard complete with live alert streams and severity analytics.'
    ],
    myContribution: 'Sole developer of log ingestion engine, signature rules, Isolation Forest integration, and analyst dashboard.',
    technologies: ['Python', 'FastAPI', 'React', 'Scikit-Learn', 'Docker', 'SQLite', 'Isolation Forest'],
    keyAccomplishments: [
      'Engineered source-agnostic log normalization pipeline supporting diverse log formats',
      'Implemented dual threat detection: rule signatures + ML Isolation Forest anomaly model',
      'Built sliding-window brute force and off-hours login detection triggers',
      'Created real-time React analyst dashboard with live alert feeds, severity breakdowns, and top source IP maps',
      'Packaged full environment into a one-command Docker deployment'
    ],
    metrics: [
      { label: 'Detection Mode', value: 'Dual Engine', subtext: 'Signatures + ML Anomaly Model' },
      { label: 'Window Rule', value: 'Sliding', subtext: 'Brute-force velocity thresholding' },
      { label: 'Deployment', value: '1-Command', subtext: 'Containerized via Docker' }
    ],
    architectureNotes: [
      'Multi-Format Log Parser → Source-Agnostic Normalizer Engine',
      'Signature Engine (Brute Force, Off-Hours) & Isolation Forest Model',
      'FastAPI Event Hub → SQLite Event Store → Real-Time React Analyst UI'
    ],
    isSecurityDashboard: true,
    links: {
      github: 'https://github.com/takshp2024-sys/siem-lite',
      devpost: 'https://devpost.com/software/robot-sensor-anomaly-detector', // Config warning: supplied URL matches Anomaly Detector Devpost URL
    }
  },
  {
    id: 'forensics-triage-tool',
    title: 'Forensics Triage Tool',
    subtitle: 'Cross-Platform Volatile System Live-Response CLI',
    tier: 2,
    modes: ['cybersecurity'],
    category: 'Digital Forensics / Incident Response',
    year: '2025',
    shortDescription: 'Read-only live-response CLI capturing volatile system state, process memory maps, network sockets, and VirusTotal threat scoring.',
    fullDescription: [
      'Engineered a cross-platform incident response CLI tool to automate initial forensic triage during suspected system compromises.',
      'Collects volatile artifact data including running processes, open network sockets, scheduled tasks/cron jobs, and recently modified binaries.',
      'Maintains strict evidentiary integrity using SHA-256 cryptographic hashing, timestamped chain-of-custody audit logs, and a non-invasive read-only architecture.'
    ],
    myContribution: 'Sole developer of cross-platform triage CLI, VirusTotal lookup rate limiter, and audit logger.',
    technologies: ['Python', 'psutil', 'VirusTotal API', 'SHA-256', 'CLI', 'Security Forensics'],
    keyAccomplishments: [
      'Developed read-only artifact collection mechanism ensuring target system state is never altered',
      'Implemented automated SHA-256 file hashing and rate-limited VirusTotal hash lookups',
      'Added granular volatile data capture: processes, sockets, cron jobs, modified binaries',
      'Generated timestamped chain-of-custody audit logs with explicit access-denied exception handling'
    ],
    architectureNotes: [
      'OS Abstraction Layer (psutil) → Volatile State Collector',
      'Cryptographic Engine (SHA-256) → VirusTotal API Rate-Limited Querier',
      'Immutable Audit Logger → Markdown/Text Triage Artifact Generation'
    ],
    links: {
      github: 'https://github.com/takshp2024-sys/forensics-triage-tool',
      devpost: 'https://devpost.com/software/forensics-triage-tool',
    }
  },
  {
    id: 'aura-engine',
    title: 'Aura Engine',
    subtitle: 'AI-Powered Fashion Styling Platform',
    tier: 2,
    modes: ['software-ai'],
    category: 'Full-Stack AI',
    year: '2025',
    shortDescription: 'Full-stack AI application delivering personalized wardrobe recommendations based on user profiles, real-time weather, and event parameters.',
    fullDescription: [
      'Designed and developed a modular React application featuring user authentication, real-time Firestore storage, and intelligent wardrobe management.',
      'Integrated LLM API with structured prompt engineering to analyze climate, dress codes, and user preference profiles into cohesive outfit recommendations.',
      'Implemented robust client resilience with exponential backoff retry logic and optimized React Hooks state management.'
    ],
    myContribution: 'Sole developer of full-stack React frontend, Firestore schema, and LLM prompt engineering pipeline.',
    technologies: ['React', 'Firebase', 'Firestore', 'LLM API', 'JavaScript', 'Tailwind CSS'],
    keyAccomplishments: [
      'Constructed secure Firebase authentication and real-time Firestore data schema',
      'Engineered structured LLM prompt templates considering event type, weather, and wardrobe inventory',
      'Integrated exponential backoff retry handling to manage LLM API rate limits smoothly',
      'Built a responsive, highly intuitive fashion recommendation interface with React Hooks'
    ],
    architectureNotes: [
      'React App (State via Custom Hooks) → Firebase Auth & Firestore DB',
      'Weather Data Context Aggregator → Structured LLM Prompt Compiler',
      'LLM API Invocation with Exponential Backoff Resilience'
    ],
    links: {
      github: 'https://github.com/takshp2024-sys/aura-engine',
      liveDemo: 'https://aura-engine-ochre.vercel.app',
      devpost: 'https://devpost.com/software/aura-engine-zaf630',
    }
  },
  {
    id: 'facial-recognition-pipeline',
    title: 'Facial Recognition & Emotion Detection Pipeline',
    subtitle: 'Multi-Stage Biometric Identity & Expression Verification',
    tier: 3,
    modes: ['cybersecurity'],
    category: 'Computer Vision & Biometrics',
    year: '2025',
    shortDescription: 'Biometric verification pipeline utilizing Dlib 68-landmark alignment, 128-D FaceNet embeddings, and SVM identity verification with 7-expression classification.',
    fullDescription: [
      'Constructed a robust computer vision pipeline for identity verification and real-time facial expression analysis.',
      'Uses Dlib 68-landmark alignment to normalize facial orientation before passing crops into a pre-trained FaceNet architecture to extract 128-dimensional biometric embeddings.',
      'Trains a multi-class SVM classifier across 7 expression states, augmented with automated outlier filtering and NO_FACE exclusion controls.'
    ],
    myContribution: 'Sole developer of computer vision processing pipeline, FaceNet embedding extractor, and SVM classifier.',
    technologies: ['Python', 'TensorFlow/Keras', 'OpenCV', 'Dlib', 'Scikit-Learn', 'Docker', 'SVM'],
    keyAccomplishments: [
      'Integrated Dlib 68-landmark detection for geometric facial normalization',
      'Extracted 128-D feature embeddings via FaceNet for high-precision identity representation',
      'Trained multi-class SVM for concurrent 7-expression emotion classification',
      'Built automated outlier filtering and NO_FACE frame exclusion controls',
      'Containerized in a multi-stage Docker environment for reproducible deployment'
    ],
    architectureNotes: [
      'Video Frame Input → OpenCV Face Cascade / Dlib 68 Landmarks',
      'Face Crop Normalization → FaceNet (128-D Embedding Generator)',
      'SVM Identity & 7-Emotion Multi-Class Classifier → Outlier Filter'
    ],
    links: {
      github: 'https://github.com/takshp2024-sys/facial-recognition-pipeline',
      devpost: 'https://devpost.com/software/facial-recognition-pipeline',
    }
  },
  {
    id: 'motion',
    title: 'MOTION',
    subtitle: 'Arts & Technology Hackathon 2026',
    tier: 3,
    modes: ['software-ai'],
    category: 'Generative Art / Creative Tech',
    badge: 'Hackathon Project',
    year: '2026',
    shortDescription: 'Interactive generative art and audio-visual creative technology application built during the Arts & Technology Hackathon 2026.',
    fullDescription: [
      'Developed during the Arts & Technology Hackathon 2026 to explore real-time creative technology interactions and algorithmic visual generative models.',
      'Combines high-performance HTML5 Canvas rendering, dynamic procedural particle algorithms, and Web Audio API frequency synchronization into a fluid creative art interface.'
    ],
    myContribution: 'Developed real-time canvas generative art rendering routines and audio frequency motion mapping.',
    technologies: ['JavaScript', 'TypeScript', 'React', 'HTML5 Canvas', 'Generative Art', 'Web Audio API'],
    keyAccomplishments: [
      'Engineered high-performance HTML5 Canvas rendering loop for real-time generative particle motion',
      'Built interactive parameter controls adjusting visual velocity, chaos scales, and color spectrums',
      'Integrated Web Audio frequency mapping to synchronize visual wave motion with audio signals'
    ],
    links: {
      github: 'https://github.com/takshp2024-sys/motion-generative-art',
      liveDemo: 'https://motion-generative-art.vercel.app/',
      devpost: 'https://devpost.com/software/motion-generative-art',
    }
  }
];

export const HACKATHONS: HackathonItem[] = [
  {
    id: 'perimeter-hackathon',
    title: 'Perimeter',
    subtitle: 'Vendor-Scoped Payment Tokenization Vault',
    hackathonName: 'Hackathon Project',
    year: '2026',
    category: 'FinTech × Cybersecurity',
    shortDescription: 'Vendor-scoped payment tokenization system designed to reduce payment-data breach impacts by issuing disposable, domain-bound tokens.',
    myContribution: 'Architected core token vault schema, domain binding logic, and instant breach revocation workflow.',
    technologies: ['Python', 'FastAPI', 'Cryptography', 'Docker', 'SQLite'],
    projectId: 'perimeter',
    links: {
      github: 'https://github.com/lohit555/Perimeter',
      liveDemo: 'https://perimeter-beta.vercel.app',
      devpost: 'https://devpost.com/software/perimeter-7gkrq5',
      demoVideo: 'https://drive.google.com/file/d/16YFcKzquKJa1qBd6AVg-1F3fzlKH3hQa/view?usp=drive_link',
    }
  },
  {
    id: 'coursechat-hackathon',
    title: 'CourseChat',
    subtitle: 'AI Chrome Extension for Course Materials',
    hackathonName: 'CUTC Transform Hackathon 2026',
    year: '2026',
    category: 'AI / EdTech',
    shortDescription: 'AI-powered Chrome extension indexing course files for real-time RAG context-aware Q&A.',
    myContribution: 'Architected Backboard.io RAG integration and vector document indexing workflow.',
    technologies: ['TypeScript', 'React', 'Manifest V3', 'Gemini', 'Backboard.io'],
    projectId: 'coursechat',
    links: {
      chromeExtension: 'https://chromewebstore.google.com/detail/dlgnoolemhejlchaakdekdjlhcpnopgg',
      github: 'https://github.com/tridibbanik17/CUTC-Transform-Hackathon-2026',
      devpost: 'https://devpost.com/software/coursechat?_gl=1*1pgmqm2*_gcl_au*MTg1NTE3MTE2OC4xNzg1MTIzOTI1*_ga*MzY0OTkzNjEyLjE3ODUxMjM5MjY.*_ga_0YHJK3Y10M*czE3ODY5ODk5MDIkbzE1JGcxJHQxNzg2OTg5OTY1JGo2MCRsMCRoMA..',
      demoVideo: 'https://www.youtube.com/watch?v=3ZYDVrsDuRY',
    }
  },
  {
    id: 'motion-hackathon',
    title: 'MOTION',
    subtitle: 'Generative Art & Creative Technology App',
    hackathonName: 'Arts & Technology Hackathon 2026',
    year: '2026',
    category: 'Generative Art / Creative Tech',
    shortDescription: 'Interactive generative art canvas synchronizing dynamic particle motion with real-time audio reactivity.',
    myContribution: 'Developed canvas rendering routines and audio frequency motion mapping.',
    technologies: ['JavaScript', 'TypeScript', 'React', 'HTML5 Canvas', 'Web Audio API'],
    projectId: 'motion',
    links: {
      github: 'https://github.com/takshp2024-sys/motion-generative-art',
      liveDemo: 'https://motion-generative-art.vercel.app/',
      devpost: 'https://devpost.com/software/motion-generative-art',
    }
  }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', modeEmphasis: 'both' },
      { name: 'TypeScript', modeEmphasis: 'software-ai' },
      { name: 'JavaScript', modeEmphasis: 'software-ai' },
      { name: 'C++', modeEmphasis: 'software-ai' },
      { name: 'C#', modeEmphasis: 'software-ai' },
      { name: 'HTML/CSS', modeEmphasis: 'software-ai' }
    ]
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      { name: 'React', modeEmphasis: 'software-ai' },
      { name: 'FastAPI', modeEmphasis: 'both' },
      { name: 'PyTorch', modeEmphasis: 'software-ai' },
      { name: 'TensorFlow/Keras', modeEmphasis: 'software-ai' },
      { name: 'Scikit-Learn', modeEmphasis: 'both' },
      { name: 'OpenCV', modeEmphasis: 'both' }
    ]
  },
  {
    title: 'AI / Machine Learning',
    skills: [
      { name: 'Machine Learning', modeEmphasis: 'software-ai' },
      { name: 'Deep Learning', modeEmphasis: 'software-ai' },
      { name: 'LSTM Autoencoders', modeEmphasis: 'software-ai' },
      { name: 'Anomaly Detection', modeEmphasis: 'both' },
      { name: 'LLM APIs', modeEmphasis: 'software-ai' },
      { name: 'Prompt Engineering', modeEmphasis: 'software-ai' },
      { name: 'RAG', modeEmphasis: 'software-ai' }
    ]
  },
  {
    title: 'Cybersecurity & Security',
    skills: [
      { name: 'FinTech Security', modeEmphasis: 'cybersecurity' },
      { name: 'Security Monitoring', modeEmphasis: 'cybersecurity' },
      { name: 'Threat Detection', modeEmphasis: 'cybersecurity' },
      { name: 'Log Analysis', modeEmphasis: 'cybersecurity' },
      { name: 'Digital Forensics', modeEmphasis: 'cybersecurity' },
      { name: 'Incident Triage', modeEmphasis: 'cybersecurity' },
      { name: 'Chain of Custody', modeEmphasis: 'cybersecurity' }
    ]
  },
  {
    title: 'Security Technologies',
    skills: [
      { name: 'VirusTotal API', modeEmphasis: 'cybersecurity' },
      { name: 'SHA-256', modeEmphasis: 'cybersecurity' },
      { name: 'psutil', modeEmphasis: 'cybersecurity' },
      { name: 'Isolation Forest', modeEmphasis: 'cybersecurity' }
    ]
  },
  {
    title: 'Development & Storage',
    skills: [
      { name: 'REST APIs', modeEmphasis: 'software-ai' },
      { name: 'Full-Stack Development', modeEmphasis: 'software-ai' },
      { name: 'Authentication', modeEmphasis: 'software-ai' },
      { name: 'Firestore', modeEmphasis: 'software-ai' },
      { name: 'SQLite', modeEmphasis: 'both' }
    ]
  },
  {
    title: 'Systems & Infrastructure',
    skills: [
      { name: 'Docker', modeEmphasis: 'both' },
      { name: 'Linux/Bash', modeEmphasis: 'cybersecurity' },
      { name: 'Windows', modeEmphasis: 'cybersecurity' },
      { name: 'Git', modeEmphasis: 'both' },
      { name: 'Render', modeEmphasis: 'software-ai' },
      { name: 'Firebase', modeEmphasis: 'software-ai' }
    ]
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'kevares',
    role: 'Artificial Intelligence Intern',
    company: 'Kevares Autonomous Services',
    location: 'Remote / Canada',
    period: 'March 2026 – Present',
    isPrimary: true,
    facts: [
      'Collected, cleaned, and preprocessed large-scale datasets for robotics and autonomous systems.',
      'Built and fine-tuned predictive models supporting robot hardware monitoring, actuator control, and CPU bridging.',
      'Implemented testing frameworks to monitor model accuracy, latency, and drift.',
      'Documented experiments, architecture choices, and codebase changes.',
      'Collaborated with senior engineers in an agile environment.',
      'Delivered AI/ML solutions supporting in-robot power systems and low-level controller integration.'
    ]
  },
  {
    id: 'york-frosh',
    role: 'Orientation Week Leader / Frosh Leader',
    company: 'York University',
    location: 'Toronto, Ontario',
    period: 'July. 2025 – August. 2025',
    isPrimary: false,
    facts: [
      'Guided and mentored a group of 25+ freshmen during orientation week, increasing participation in scheduled events by 35%.',
      'Facilitated icebreakers and group discussions to foster engagement, contributing to a 90%+ satisfaction rating from participant feedback surveys.',
      'Collaborated with student leaders and university staff to coordinate event logistics and communicate key campus resources.'
    ]
  },
  {
    id: 'idream',
    role: 'Data Entry Assistant',
    company: 'IDream Reality Inc.',
    location: 'Ontario, Canada',
    period: 'May 2024 – August 2024',
    isPrimary: false,
    facts: [
      'Managed shared inbox with 50+ daily client emails, improving response time by 30%.',
      'Maintained CRM records, reducing client information errors by 20%.',
      'Organized and digitized 500+ property and client documents.',
      'Supported operations for 5+ real estate agents.'
    ]
  }
];

export const EDUCATION_DATA: EducationItem = {
  institution: 'York University',
  degree: 'Bachelor of Arts, Computer Science Honours',
  period: 'September 2024 – April 2029',
  location: 'Toronto, Ontario'
};

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  { name: 'Certified Cloud Practitioner', issuer: 'AWS', category: 'AWS' },
  { name: 'Fundamentals of Machine Learning and AI', issuer: 'AWS', category: 'AWS' },
  { name: 'Data Science & Analytics', issuer: 'HP Life', category: 'HP Life' },
  { name: 'AI for Beginners', issuer: 'HP Life', category: 'HP Life' },
  { name: 'Introduction to Cybersecurity Awareness', issuer: 'HP Life', category: 'HP Life' },
  { name: 'Claude 101', issuer: 'Anthropic', category: 'Anthropic' },
  { name: 'Claude Code 101', issuer: 'Anthropic', category: 'Anthropic' },
  { name: 'Claude Platform 101', issuer: 'Anthropic', category: 'Anthropic' },
  { name: 'Introduction to Claude Cowork', issuer: 'Anthropic', category: 'Anthropic' }
];
