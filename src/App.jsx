import React, { useEffect, useState } from 'react';
import profilePic from '../assets/img/profile-img.jpg'

const navItems = [
  { id: 'hero', label: 'Home', icon: 'bi bi-house' },
  { id: 'about', label: 'About', icon: 'bi bi-person' },
  { id: 'resume', label: 'Experience', icon: 'bi bi-file-earmark-text' },
  { id: 'articles', label: 'Articles', icon: 'bi bi-journal-text' },
  { id: 'skills', label: 'Skills', icon: 'bi bi-bar-chart' },
  { id: 'projects', label: 'Projects', icon: 'bi bi-code-slash' },
  { id: 'achievements', label: 'Achievements', icon: 'bi bi-trophy' },
  { id: 'contact', label: 'Contact', icon: 'bi bi-envelope' },
];
const skillGroups = [
  {
    title: 'Programming Languages',
    items: [{ name: 'Core Java' }, { name: 'JavaScript' }],
  },
  {
    title: 'Frontend',
    items: [{ name: 'React.js' }, { name: 'HTML / CSS' }, { name: 'Bootstrap' }],
  },
  {
    title: 'Backend & APIs',
    items: [{ name: 'Spring Boot' }, { name: 'express.js' }],
  },
  {
    title: 'Databases',
    items: [{ name: 'MySQL' }, { name: 'MongoDB' }],
  },
  {
    title: 'Cloud & DevOps',
    items: [{ name: 'AWS' }, { name: 'OpenShift' }, { name: 'Docker' }],
  }
];

const projects = [
  {
    title: 'SnapFit',
    period: 'Personal Project',
    tech: 'React.js, JavaScript, HTML, CSS',
    link: 'https://www.snapfit.in',
    github: 'https://github.com/Shivendra-99/snapFit',
    points: [
      'Built a browser-based React app for exam-ready photo editing and PDF compression, designed for Indian competitive exams such as NEET, JEE, UPSC, SSC, IBPS, RRB, GATE, NDA, and more.',
      'Implemented exam photo resizing for 20+ presets with auto crop and face framing for passport and exam photo requirements.',
      'Added background replacement options including white, off-white, light blue, and blue for polished output.',
      'Enabled JPEG preview and file size estimation so users can validate final output before download.',
      'Supported custom presets for any width, height, and KB range to match specific application needs.',
      'Developed a fully client-side workflow with no uploads or server-side storage, ensuring privacy and fast processing.',
      'Included a standalone PDF compressor with before/after preview and adjustable quality settings for local file-size reduction.',
    ],
  },
  {
    title: 'Tweet App',
    period: 'Personal Project',
    link: 'https://tweet-app.example.com',
    tech: 'Java, Spring Boot, MongoDB, React.js, Docker, AWS (Amplify, Elastic Beanstalk)',
    github: '',
    points: [
      'Designed and built a full‑stack microblogging application with secure authentication and tweet management.',
      'Deployed backend services on AWS Elastic Beanstalk and frontend on AWS Amplify for scalable hosting.',
      'Used Grafana for server monitoring and alerting on key application metrics.',
      'Integrated a rich text editor (Jodit) to compose and format tweets before publishing.',
      'Implemented utilities such as Text‑to‑PDF conversion using AWS Lambda and S3.',
    ],
  },
  {
    title: 'News App',
    period: 'Personal Project',
    link: 'https://news-app.example.com',
    tech: 'React.js, News API, Bootstrap, React Router',
    github: '',
    points: [
      'Built a single‑page news application that displays the latest headlines from multiple categories.',
      'Integrated News API to fetch real‑time news articles.',
      'Implemented routing for smooth navigation between different news categories.',
      'Used card layouts and a carousel for a visually engaging reading experience.',
    ],
  },
  {
    title: 'E‑Voting App',
    period: 'Personal Project',
    tech: 'Java, Firebase Authentication, REST APIs',
    github: '',
    points: [
      'Developed a secure e‑voting Android application enabling users to vote from home.',
      'Integrated Firebase Authentication for user login and identity verification.',
      'Consumed APIs to fetch state, district, and block level election information.',
      'Added fingerprint verification during voting for additional security.',
    ],
  },
];

const experience = [
  {
    role: 'Software Engineer (FSE)',
    company: 'Accenture Solutions Pvt. Ltd.',
    period: '29-May-2026 – Present',
    location: 'India',
     points: [
      'Implemented efficient pagination and optimized query performance, reducing API response time from 10 seconds to 2.5 seconds.',
      'Provisioned and managed Snowflake database tables using Terraform to support infrastructure-as-code practices.',
      'Built and maintained Pulsar topics and listeners to support reliable messaging workflows.'
    ],
  },
  {
    role: 'Software Engineer (FSE)',
    company: 'Cognizant Technology Solutions',
    period: '09/2021 – 28-May-2026',
    location: 'India',
    points: [
      'Implemented secure SFTP integration to transfer files from Java application to MFS system, ensuring reliable and automated data exchange.',
      'Configured and implemented monitoring using Dynatrace, including creation of custom dashboards and alert setup for proactive issue detection and performance monitoring in production.',
      'Led migration of backend applications from PCF to OpenShift and frontend workloads to AWS, improving scalability and deployment efficiency.',
      'Contributed across frontend and backend to design and deliver new features and enhancements, while ensuring production stability and timely issue resolution.',
      'Utilized Splunk for log analysis and implemented alerting mechanisms to proactively monitor backend services and reduce incident resolution time.'
    ],
  }
];

const articles = [
  {
    title: 'Text to PDF conversion using AWS Lambda and S3',
    link: "https://shivendra-sonkar.hashnode.dev/text-to-pdf-conversion-using-aws-lambda-and-s3-using-java",
    description: 'Implemented a serverless workflow to convert text input into PDF documents using AWS Lambda and store them in S3 for durable access.',
  },
  {
    title: 'Self-Hosting Judge0 on Windows: A Step-by-Step Guide',
    link: "https://shivendra-sonkar.hashnode.dev/self-hosting-judge0-on-windows-a-step-by-step-guide",
    description: 'earn how to set up a self-hosted Judge0 environment on Windows with clear, step-by-step instructions so you can compile and execute code across multiple languages without relying on external services',
  },
  {
    title: 'How to Connect MongoDB with Spring Boot?',
    link: "https://www.geeksforgeeks.org/how-to-connect-mongodb-with-spring-boot/",
    description: 'Article that explains step‑by‑step how to integrate MongoDB with a Spring Boot backend, covering configuration, repositories, and common pitfalls.',
  },
   {
    title: 'How I Built an Async Email Notification System Using Express.js, SQS, and AWS Lambda',
    link: "https://medium.com/@sanusonkar1/how-i-built-an-async-email-notification-system-using-express-js-sqs-and-aws-lambda-be09adbafd22",
    description: 'A practical walkthrough of building an asynchronous email notification system using Express.js, SQS, and AWS Lambda for reliable background processing.',
  },
];

const education = [
  {
    degree: 'B.Tech in Computer Science & Engineering',
    school: 'Ambalika Institute of Management and Technology, Lucknow',
    period: '2017 – 2021',
    result: 'Marks: 74.23%',
  }
];

const achievements = [
  'Received recognition for introducing new features and migrating backend applications from PCF to OpenShift and frontend to AWS.',
  'Ranked 443rd in the HackerEarth Easy20 competition.',
  'Achieved 1350th position in India in the Interview Jump Start coding contest.',
  'Secured 2nd place in the Tech Buzz coding contest.',
  'HackerRank: Gold Badge in Problem Solving.',
  'LeetCode: 3‑star coder.'
];


const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg" aria-hidden="true" />
      <div className="container hero-container">
        <div className="hero-text">
          <p className="hero-eyebrow">Hello, I&apos;m</p>
          <h1>Shivendra Kumar Sonkar</h1>
          <p className="hero-role">Fullstack Software Engineer</p>
          <p className="hero-summary">
            I design and build scalable backend services and clean, production‑ready interfaces with Java,
            Spring Boot, React.js and AWS — turning ideas into reliable software.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn-solid">
              View Projects
            </a>
            <a href="#contact" className="btn-outline-nav">
              Get in Touch
            </a>
          </div>
          <div className="social-links hero-socials">
            <a
              href="https://www.linkedin.com/in/shivendra-kumar-sonkar-4349ab17b"
              aria-label="LinkedIn profile"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bx bxl-linkedin" />
            </a>
            <a href="https://twitter.com/Shivendra9598" aria-label="Twitter profile" target="_blank" rel="noreferrer">
              <i className="bx bxl-twitter" />
            </a>
            <a href="mailto:shivendrasonkar001@gmail.com" aria-label="Send email">
              <i className="bx bx-envelope" />
            </a>
          </div>
        </div>

        <div className="hero-media">
          <div className="hero-photo-ring">
            <img src={profilePic} alt="Shivendra Kumar Sonkar" className="hero-photo" />
          </div>
        </div>
      </div>

      <a href="#about" className="scroll-cue" aria-label="Scroll to About section">
        <i className="bi bi-chevron-down" />
      </a>
    </section>
  );
};

const Header = ({ darkMode, onToggleDarkMode, activeSection, scrolled, mobileMenuOpen, onToggleMobileMenu, onNavLinkClick }) => {
  return (
    <header id="header" className={scrolled ? 'scrolled' : ''}>
      <div className="container header-inner">
        <a href="#hero" className="brand" onClick={onNavLinkClick}>
          Shivendra<span>.</span>
        </a>

        <nav id="navbar" className={`nav-menu ${mobileMenuOpen ? 'nav-menu-open' : ''}`}>
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={onNavLinkClick}
                >
                  <i className={item.icon} /> <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <button
            type="button"
            className="theme-toggle-btn"
            onClick={onToggleDarkMode}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <i className={darkMode ? 'bi bi-sun-fill' : 'bi bi-moon-fill'} />
          </button>
          <button
            type="button"
            className="mobile-nav-toggle"
            onClick={onToggleMobileMenu}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="navbar"
          >
            <i className={mobileMenuOpen ? 'bi bi-x-lg' : 'bi bi-list'} />
          </button>
        </div>
      </div>
    </header>
  );
};

const About = () => {
  const [year, setYear] = useState(2021);
const [month, setMonth] = useState(9);

useEffect(()=>{
    const startYear = 2021;
    const startMonth = 9;
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth() + 1; // getMonth() is 0-based

    // Calculate differences
    let years = currentYear - startYear;
    let months = currentMonth - startMonth;

    // Adjust if months are negative
    if (months < 0) {
        years--;
        months += 12;
    }

    // Ensure no negative experience
    if (years < 0) {
        throw new Error("Start date is in the future");
    }

    setMonth(months);
    setYear(years);
    // return { years, months };


},[])

  return (
    <section id="about" className="about section-animate">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
        </div>

        <div className="row align-items-center g-5">
          <div className="col-lg-7 content order-2 order-lg-1">
            <p>
              I am a Fullstack Software Engineer with experience delivering end‑to‑end solutions across Java, Spring Boot, React.js, express.js
              and cloud platforms such as AWS and OpenShift. I enjoy building scalable backend services, clean user
              interfaces, and automating deployments to create reliable, production‑ready systems.
            </p>
            <h3>Fullstack Software Developer</h3>
            <p className="fst-italic">
              Passionate about backend services, cloud‑native architectures, and modern frontend development.
            </p>
            <div className="row">
              <div className="col-sm-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right" /> <strong>Phone:</strong>{' '}
                    <a href="tel:+919936120982" target="_blank" rel="noreferrer">
                      +91 99361 20982
                    </a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" /> <strong>Current Role:</strong> <span>Fullstack Software Engineer</span>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right" /> <strong>Email:</strong>
                    <a href="mailto:shivendrasonkar001@gmail.com" target="_blank" rel="noreferrer">
                      shivendrasonkar001@gmail.com
                    </a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" /> <strong>Experience:</strong>{' '}
                    <span>{year} years and {month} months</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" /> <strong>Job Type:</strong> <span>Full Time</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-5 order-1 order-lg-2">
            <img src={profilePic} className="img-fluid about-photo" alt="Shivendra Kumar Sonkar" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="skills section-bg section-animate">
      <div className="container">
        <div className="section-title">
          <h2>Skills</h2>
          <p>
            A summarized view of my full‑stack skill set across languages, frameworks, databases, cloud platforms, and
            tooling.
          </p>
        </div>

        <div className="row g-4">
          {skillGroups.map((group) => (
            <div className="col-lg-4 col-md-6" key={group.title}>
              <div className="skill-card">
                <h3>{group.title}</h3>
                <div className="skill-badges">
                  {group.items.map((item) => (
                    <span className="skill-badge" key={item.name}>
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ResumeSection = () => {
  return (
    <section id="resume" className="resume section-animate">
      <div className="container">
        <div className="section-title">
          <h2>Experience &amp; Education</h2>
          <p>Professional experience and academic background aligned with full‑stack and cloud‑native development.</p>
        </div>

        <div className="timeline">
          <div className="timeline-group">
            <h3 className="resume-title">Professional Experience</h3>
            {experience.map((item) => (
              <div className="resume-item" key={item.company}>
                <h4>{item.role}</h4>
                <h5>{item.period}</h5>
                <p>
                  <em>
                    {item.company} &mdash; {item.location}
                  </em>
                </p>
                <ul>
                  {item.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="timeline-group">
            <h3 className="resume-title">Education</h3>
            {education.map((item) => (
              <div className="resume-item" key={item.degree + item.period}>
                <h4>{item.degree}</h4>
                <h5>{item.period}</h5>
                <p>
                  <em>{item.school}</em>
                </p>
                {item.result && <p>{item.result}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ArticlesSection = () => {
  return (
    <section id="articles" className="portfolio section-bg section-animate">
      <div className="container">
        <div className="section-title">
          <h2>Articles</h2>
          <p>Articles and write‑ups sharing my learnings from real projects.(you can click on title to open article)</p>
        </div>

        <div className="row g-4">
          {articles.map((article) => (
            <div className="col-lg-6" key={article.title}>
              <div className="project-card">
                <h3 className="project-title"><a href={article.link} target="_blank">{article.title}</a></h3>
                <ul className="project-points">
                  <li>{article.description}</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="portfolio section-bg section-animate">
      <div className="container">
        <div className="section-title">
          <h2>Projects</h2>
          <p>Key projects that reflect my hands‑on experience with Java, React, Spring Boot, cloud, and DevOps.</p>
        </div>

        <div className="row g-4">
          {projects.map((project) => (
            <div className="col-12 portfolio-item" key={project.title}>
              <div className="project-card project-card-row">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-period">{project.period}</p>
                <div className="project-tech-badges">
                  {project.tech.split(',').map((t) => (
                    <span className="tech-badge" key={t}>
                      {t.trim()}
                    </span>
                  ))}
                </div>
                <div className="project-links d-flex flex-wrap gap-2">
                  {project.link && (
                    <a
                      href={project.link}
                      className="btn-chip"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bi bi-link" />
                      <span>View Application</span>
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      className="btn-chip"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bi bi-github" />
                      <span>View on GitHub</span>
                    </a>
                  )}
                </div>
                <ul className="project-points">
                  {project.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AchievementsSection = () => {
  return (
    <section id="achievements" className="portfolio section-bg section-animate">
      <div className="container">
        <div className="section-title">
          <h2>Achievements &amp; Competitive Coding</h2>
          <p>Highlights from coding contests, recognitions, and technical contributions.</p>
        </div>

        <div className="row g-4">
          {achievements.map((item) => (
            <div className="col-lg-4 col-md-6" key={item}>
              <div className="achievement-card">
                <div className="achievement-icon">
                  <i className="bi bi-trophy" />
                </div>
                <p className="achievement-text">{item}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="contact section-animate">
      <div className="container">
        <div className="section-title">
          <h2>Contact</h2>
          <p>Feel free to reach out for opportunities, collaborations, or any queries.</p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="info contact-card">
              <div className="email d-flex align-items-center gap-3 mb-0">
                <div className="contact-icon rounded-circle text-white d-flex align-items-center justify-content-center">
                  <i className="bi bi-envelope" />
                </div>
                <a href="mailto:shivendrasonkar001@gmail.com">shivendrasonkar001@gmail.com</a>
              </div>

              <div className="contact-divider" />

              <div className="phone d-flex align-items-center gap-3 mb-0">
                <div className="contact-icon rounded-circle text-white d-flex align-items-center justify-content-center">
                  <i className="bi bi-phone" />
                </div>
                <a href="tel:+919936120982">+91 99361 20982</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="copyright">
          &copy; {new Date().getFullYear()} <strong>
            <span>Shivendra Kumar Sonkar</span>
          </strong>{' '}
          &mdash; Built with React
        </div>
      </div>
    </footer>
  );
};

const sectionIds = navItems.map((item) => item.id);

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const saved = window.localStorage.getItem('theme');
    if (saved === 'dark') {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
    window.localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      setShowBackToTop(window.scrollY > 400);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleToggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const handleToggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const handleNavLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <Header
        darkMode={darkMode}
        onToggleDarkMode={handleToggleDarkMode}
        activeSection={activeSection}
        scrolled={scrolled}
        mobileMenuOpen={mobileMenuOpen}
        onToggleMobileMenu={handleToggleMobileMenu}
        onNavLinkClick={handleNavLinkClick}
      />
      <Hero />
      <main id="main">
        <About />
        <ResumeSection />
        <ArticlesSection />
        <Skills />
        <ProjectsSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      <Footer />
      <a
        href="#hero"
        className={`back-to-top d-flex align-items-center justify-content-center ${showBackToTop ? 'active' : ''}`}
        aria-label="Back to top"
      >
        <i className="bi bi-arrow-up-short" />
      </a>
    </>
  );
};

export default App;

