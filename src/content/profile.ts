export interface Profile {
  personal: {
    name: string;
    title: string;
    bio: string;
    avatar: string;
  };
  contact: {
    email: string;
    linkedin: string;
    github: string;
  };
  cv: {
    filename: string;
    path: string;
  };
  skills: {
    category: string;
    items: string[];
  }[];
  projects: {
    title: string;
    description: string;
    techStack: string;
    dataAnalytics?: string;
    tools?: string;
    skills?: string;
    tags: string[];
    github?: string;
  }[];
  research: {
    title: string;
    period: string;
    highlights: string[];
    pdfPath: string;
  }[];
  education: {
    degree: string;
    institution: string;
    location: string;
    period: string;
  }[];
  leadership: {
    role: string;
    organization: string;
    period: string;
  }[];
}

export const profileData: Profile = {
  personal: {
    name: "Jean Gabriel Mpuhwezimana",
    title: "Machine Learning and Electronics Engineer",
    bio: "Machine Learning and Electronics Engineer experienced in software development, data-driven modeling, and sensor-based ML systems. Passionate about multidisciplinary solutions combining electronics and software to solve real-world problems. Skilled in software development, embedded systems, signal processing, machine learning, and computer vision.",
    avatar: "/avatar.png",
  },
  contact: {
    email: "placeholder@example.com",
    linkedin: "https://www.linkedin.com/in/workwithgabby/",
    github: "https://github.com/Gabriel-mdv",
  },
  cv: {
    filename: "Jean_Gabriel_Mpuhwezimana_CV.pdf",
    path: "/files/Jean_Gabriel_Mpuhwezimana_CV.pdf",
  },
  skills: [
    {
      category: "Programming",
      items: ["Python", "TypeScript", "JavaScript"],
    },
    {
      category: "Machine Learning & Data Science",
      items: ["PyTorch", "scikit-learn", "pandas", "NumPy"],
    },
    {
      category: "Computer Vision",
      items: ["OpenCV", "Image preprocessing", "CNN evaluation"],
    },
    {
      category: "Backend & Databases",
      items: ["PostgreSQL", "MongoDB"],
    },
    {
      category: "DevOps & Tools",
      items: ["Docker", "Git", "CI/CD", "Linux"],
    },
    {
      category: "Analytics & Reporting",
      items: ["Dashboard design", "Data visualization", "Metric tracking"],
    },
  ],
  projects: [
    {
      title: "Stock Management System — AGCERA Mozambique",
      description:
        "Built a stock and inventory management platform for AGCERA Mozambique with role-based access, stock movement tracking, and operational dashboards. Implemented analytics pipelines to generate KPI summaries, trends, and reports supporting management decisions.",
      techStack: "React.js, Redux, PostgreSQL, Docker",
      dataAnalytics: "pandas, SQL aggregation, dashboard reporting, data summaries",
      tags: ["Web Application", "Inventory Systems", "Data Analytics", "Dashboards"],
    },
    {
      title: "DevPulse",
      description:
        "Educational platform designed to help trainers track learner progress in real time, generate automated performance reports, and identify learning gaps. Integrated stable APIs, testing, and CI/CD pipelines for reliable deployment.",
      techStack: "React.js, MongoDB, GraphQL, CI/CD, Testing",
      dataAnalytics: "ML-inspired analytics for learner trend detection and report generation",
      tags: ["EdTech", "Real-Time Systems", "Reporting", "Full Stack"],
    },
    {
      title: "Markov-Chains and Central Limit Theorem",
      description:
        "Python-based simulations demonstrating Markov chain behavior and the Central Limit Theorem through repeated sampling, convergence analysis, and visualization of distributions.",
      tools: "Python, NumPy, SciPy, pandas, matplotlib",
      tags: ["Probability", "Statistics", "Simulation"],
    },
    {
      title: "MLE_MAP_spam_detection_practice",
      description:
        "Implemented Maximum Likelihood Estimation (MLE) and Maximum A Posteriori (MAP) methods for probability distributions and applied probabilistic machine learning models for spam email classification and evaluation.",
      tools: "Python, NumPy, pandas, scikit-learn, scipy.stats, matplotlib",
      skills: "Bayesian inference, classification, evaluation metrics, data preprocessing",
      tags: ["Machine Learning", "NLP", "Probability"],
    },
    {
      title: "time-series-data-inference (AAPL Stock Prediction)",
      description:
        "Time-series inference and forecasting project using historical AAPL stock data. Applied feature engineering, baseline forecasting models, and evaluated predictions using standard error metrics.",
      tools: "Python, pandas, NumPy, scikit-learn, matplotlib",
      tags: ["Time Series", "Forecasting", "Finance"],
    },
    {
      title: "queueing-theory-sim",
      description:
        "Simulation framework for queueing systems using Poisson arrivals, exponential service times, and Gaussian noise, analyzing how performance metrics change with parameters.",
      tools: "Python, NumPy, SciPy, pandas, matplotlib",
      tags: ["Simulation", "Queueing Theory", "Probability"],
    },
  ],
  research: [
    {
      title: "Analysis of Log Normalization Strategies on MTTD and MTTR",
      period: "November 2025 – January 2026",
      highlights: [
        "Evaluated rule-based (Drain3) and LLM-assisted (LibreLog) log normalization on HDFS, Nginx, and Apache datasets, achieving >20% improvement in template coverage.",
        "ML-assisted approach improved anomaly detection precision from 0.7318 to 0.9953 with only 1.98% processing overhead, significantly reducing SIEM false positives.",
      ],
      pdfPath: "/files/Log_Normalization_MTTD_MTTR.pdf",
    },
    {
      title: "BiliTrack – ML-Enabled Neonatal Jaundice Detection",
      period: "October 2024 – June 2025",
      highlights: [
        "Developed a low-cost biomedical sensing system using dual-wavelength photometry and supervised regression for data-driven bilirubin calibration.",
        "Achieved 81% diagnostic accuracy using <100 µL blood samples, enabling point-of-care screening in low-resource settings.",
      ],
      pdfPath: "/files/BiliTrack_Neonatal_Jaundice.pdf",
    },
  ],
  education: [
    {
      degree: "Master of Science in Engineering Artificial Intelligence",
      institution: "Carnegie Mellon University, Kigali",
      location: "Rwanda",
      period: "August 2025 – July 2027",
    },
    {
      degree: "Bachelor's (Hons) in Electronics and Telecommunication Engineering",
      institution: "University of Rwanda",
      location: "Rwanda",
      period: "April 2021 – July 2025",
    },
  ],
  leadership: [
    {
      role: "Research Club Community Manager",
      organization: "CMU-Africa",
      period: "Nov 2025 – Present",
    },
    {
      role: "Vice President, Giants Electronics Group",
      organization: "University of Rwanda",
      period: "2023 – 2024",
    },
    {
      role: "General Secretary, Sustainable Development Goals Hub",
      organization: "University of Rwanda",
      period: "2023 – 2024",
    },
  ],
};
