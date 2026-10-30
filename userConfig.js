// =================================================================================================
// 🚀 USER CONFIGURATION FILE
// -------------------------------------------------------------------------------------------------
// This is the ONLY file you need to edit to customize your entire portfolio.
// Change the values below, save the file, and your website will update instantly.
// =================================================================================================

export const userData = {
  
  // ===============================================================================================
  // 1. HERO & SIDEBAR SECTION
  // Information displayed in the sidebar (left panel) and the top of the dashboard.
  // ===============================================================================================
  
  name: "Ahmad Valentama Taruna",           // Your full name as it should appear on the site
  role: "Data Analyst & Dashboard", // Your professional headline or job title
  location: "Surabaya, Indonesia",     // Your city and country
  tagline: "I turn messy data into actionable insights.", // A catchy one-liner displayed on the dashboard
  
  // PROFILE PICTURE SETTINGS
  // Option A: Put a file named 'profile.png' in the 'public' folder and leave this line as is.
  // Option B: If you don't have a photo, delete the text inside the quotes ("") to show your Initials instead.
  profileUrl: "/profile.png",       
  
  summary: "Transforming raw data into strategic decisions. Specializing in e-commerce analytics, revenue optimization, and business intelligence.", // A 2-3 sentence professional bio

  // ===============================================================================================
  // 2. SOCIAL MEDIA LINKS
  // These links will open in a new tab when clicked.
  // ===============================================================================================
  
  github: "",     // Link to your GitHub profile
  linkedin: "https://www.linkedin.com/in/valentama-at", // Link to your LinkedIn profile
  email: "valentamacareer@gmail.com",               // Your contact email address
  
  // RESUME SETTINGS
  // Put your PDF file in the 'public' folder and name it 'resume.pdf'.
  resumeLink: "/resume.pdf", 

  // ===============================================================================================
  // 3. DASHBOARD STATS (The 4 Big Cards at the top)
  // These are the key metrics that highlight your career impact.
  // ===============================================================================================
  
  stats: [
    { 
      label: "Revenue Impact",      // Title of the card
      value: "10",                  // The big number
      prefix: "$",                  // Symbol before the number (e.g., $)
      suffix: "M+",                 // Symbol after the number (e.g., M+, %, +)
      trend: "up",                  // Options: "up", "down", or "neutral" (controls the arrow)
      trendValue: "High Impact"     // The small text next to the arrow (e.g., "Optimized", "Saved")
    },
    { 
      label: "Cost Reduction",
      value: "30",
      prefix: "",
      suffix: "%",
      trend: "down",                // "down" is good for costs (shows green arrow)
      trendValue: "Optimized"
    },
    { 
      label: "Experience",
      value: "4",
      prefix: "",
      suffix: "+ Years",
      trend: "neutral",             // "neutral" shows a flat line/dot
      trendValue: "Senior Level"
    },
    { 
      label: "Dashboards",
      value: "50",
      prefix: "",
      suffix: "+",
      trend: "up",
      trendValue: "Built"
    },
  ],

  // ===============================================================================================
  // 4. EXPERIENCE TIMELINE (The "Career Trajectory" box)
  // List your jobs from newest to oldest.
  // 💡 TIP: You can add as many roles as you want! Just copy the {...} block below and paste it to add more.
  // ===============================================================================================
  
  experience: [
    { 
      company: "PLN UP3 Surabaya Selatan",   // Company Name
      role: "Data Analyst Intern", // Your Job Title
      period: "Feb 2026 - Jun 2026",     // Dates (e.g., "Jan 2023 - Present" or "2020 - 2022")
      current: false,                // Set to true if you still work here (adds a glowing dot)
      color: "#f59e0b",             // Hex code for the bar color (Amber: #f59e0b, Blue: #3b82f6, Pink: #ec4899)
      location: "Surabaya, Indonesia", // City/Location
      
      // Detailed bullet points for this job
      achievements: [  
        "Mengolah dan memvalidasi data transaksi energi skala besar untuk mendukung akurasi pelaporan dan analisis operasional.",
        "Mengembangkan dashboard peramalan untuk memproyeksikan tren susut energi listrik (kWh) sebagai sistem pemantauan dan peringatan dini.",
        "Membangun data pipeline dan logika deteksi anomali pada dashboard untuk mengidentifikasi pola konsumsi listrik pelanggan yang tidak normal.",
        "Mengembangkan aplikasi web internal dengan tiga level pengguna untuk mengotomatisasi pencatatan dan pengelolaan inventaris divisi."
      ]
    },
  
  ],

  // ===============================================================================================
  // 5. DOMAIN EXPERTISE (The Progress Bars)
  // Show your proficiency in specific areas.
  // 💡 TIP: You can add as many skills as you like. The list will grow automatically.
  // ===============================================================================================
  
  domains: [
    { name: "E-commerce", level: 90 },         // Level is a percentage (0 to 100)
    { name: "Marketing Analytics", level: 85 },
    { name: "SQL & Python", level: 95 },
    { name: "Tableau/PowerBI", level: 80 },
  ],

  // ===============================================================================================
  // 6. PROJECTS SECTION
  // Showcase your best work. Use GitHub links or live demos.
  // 💡 TIP: Add as many projects as you want! The grid will auto-adjust. Just copy/paste the block below.
  // ===============================================================================================
  
  projects: [
    {
      title: "WebApp Internal Inventory",              // Project Title
      description: "otomatisasi pencatatan dan pengelolaan inventaris divisi.", // Short description
      tech: ["Spreadsheet", "AppScript", "Java Script", "HTML", "CSS"],               // Tech stack tags
      link: "https://github.com/..."                    // Link to project
    },
    {
      title: "Dashboard Deteksi Anomali",
      description: "Identifikasi pola konsumsi listrik pelanggan yang tidak normal",
      tech: ["Microsoft Access", "Python", "Power BI", "Analisis Statistik", "Data Pipeline"],
      link: "https://github.com/..."
    },
    {
      title: "Dashboard Forecasting Susut kWh",
      description: "Sistem pemantauan dan peringatan dini.",
      tech: ["R", "R Shiny", "Python", "Analisis Statistik", "Forecasting"],
      link: "https://github.com/..."
    }
  ], 

  // ===============================================================================================
  // 7. SKILLS MATRIX (The 4 Categorized Boxes)
  // Group your skills into logical categories.
  // 💡 TIP: You can add more categories (e.g. "Soft Skills") by adding a new block to this list.
  // ===============================================================================================
  
  skills: [
    { 
      category: "Data & Querying",                  // Category Title
      items: ["SQL", "Python", "Hive", "Impala", "Excel"] // List of skills in this category
    },
    { 
      category: "Visualization", 
      items: ["Power BI", "Tableau", "Excel Charts", "Dashboard Design"] 
    },
    { 
      category: "AI & Emerging Tech", 
      items: ["Generative AI", "LLM Concepts", "Prompt Engineering", "AI Product Building"] 
    },
    { 
      category: "Business & Strategy", 
      items: ["Revenue Assurance", "P&L Management", "Inventory Optimization", "Marketing Mix Modeling"] 
    }
  ],

  // ===============================================================================================
  // 8. EDUCATION SECTION
  // List your degrees or certifications.
  // 💡 TIP: You can add more degrees or certifications by copying the block below.
  // ===============================================================================================
  
  education: [
    {
      degree: "S.Tr.Stat. - Statistika Bisnis.",
      school: "Institut Teknologi Sepuluh Nopember",
      location: "Surabaya, Indonesia",
      year: "2026",
      grade: "3.38 / 4.00"
    }
  ],

  // ===============================================================================================
  // 9. SKILL BALANCE (The Circular Charts)
  // A visual representation of how you balance your skills.
  // ===============================================================================================
  
  skillBalance: [
    { label: "Technical", value: 85 },  // Percentage (0-100)
    { label: "Strategic", value: 90 },
    { label: "Leadership", value: 80 }
  ],

  // ===============================================================================================
  // 10. CONTACT SECTION
  // Your availability and services.
  // ===============================================================================================
  
  contact: {
    phone: "", // Your phone number. If you prefer email only, leave this empty "".
    statusMessage: "Actively exploring Lead Business Analyst & Analytics Manager level analytics roles.", // Availability text
    
    // Tags for the "I can help with" section
    // 💡 TIP: Add as many service tags as you like.
    services: [
      "Revenue Assurance", 
      "Analytics Strategy", 
      "P&L Optimization", 
      "Data Team Building", 
      "Inventory Analytics", 
      "AI/GenAI Projects", 
      "Consulting"
    ]
  }
};
