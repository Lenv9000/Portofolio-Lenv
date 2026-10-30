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
  role: "Data Analyst & Dashboard Expert", // Your professional headline or job title
  location: "Bangalore, India",     // Your city and country
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
  
  github: "https://github.com/yourusername",     // Link to your GitHub profile
  linkedin: "https://linkedin.com/in/yourusername", // Link to your LinkedIn profile
  email: "your.email@example.com",               // Your contact email address
  
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
      company: "Tech Giant Corp",   // Company Name
      role: "Senior Analytics Manager", // Your Job Title
      period: "2023 - Present",     // Dates (e.g., "Jan 2023 - Present" or "2020 - 2022")
      current: true,                // Set to true if you still work here (adds a glowing dot)
      color: "#f59e0b",             // Hex code for the bar color (Amber: #f59e0b, Blue: #3b82f6, Pink: #ec4899)
      location: "Bangalore, India", // City/Location
      
      // Detailed bullet points for this job
      achievements: [
        "Architected centralized inventory data aggregate → 60% reduction in compute costs.",
        "Designed centralized selection framework replacing ad-hoc processes.",
        "Built automated insights dashboards for leadership team."
      ]
    },
    { 
      company: "Fast Growth Startup", 
      role: "Lead Business Analyst", 
      period: "2021 - 2023", 
      current: false, 
      color: "#ec4899", 
      location: "Remote",
      achievements: [
        "Led a team of 4 analysts to optimize marketing spend.",
        "Improved conversion rate by 15% through A/B testing frameworks.",
        "Automated daily reporting using Python and Airflow."
      ]
    },
    { 
      company: "Consulting Firm", 
      role: "Business Analyst", 
      period: "2018 - 2021", 
      current: false, 
      color: "#3b82f6", 
      location: "Gurugram, India",
      achievements: [
        "Analyzed large datasets to identify revenue leakage.",
        "Created Tableau dashboards for healthcare clients."
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
      title: "E-Commerce Sales Dashboard",              // Project Title
      description: "Analyzed $5M in sales data using Python and PowerBI.", // Short description
      tech: ["Python", "SQL", "PowerBI"],               // Tech stack tags
      link: "https://github.com/..."                    // Link to project
    },
    {
      title: "Customer Churn Prediction",
      description: "Built a logistic regression model to predict churn with 85% accuracy.",
      tech: ["Scikit-Learn", "Tableau"],
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
      degree: "M.Tech - Computer Science Eng.",   // Degree Name
      school: "Indian Institute of Technology ", // University / School
      location: "Chenni, India",            // Location
      year: "2015",                           // Year of Graduation
      grade: "7.29 CGPA"                      // Grade / GPA / Score (Optional)
    },
    {
      degree: "B.Tech - Computer Science Eng.",
      school: "Indian Institute of Technology",
      location: "Chennai, India",
      year: "2015",
      grade: "7.23 CGPA"
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
    phone: "+91 xxxxx xxxxx", // Your phone number. If you prefer email only, leave this empty "".
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
