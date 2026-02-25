import React, { useEffect, useState } from 'react';
import profilePic from '../assets/img/profile-img.jpg'
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
    title: 'Tweet App',
    period: 'Personal Project',
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
    company: 'Cognizant Technology Solutions',
    period: '09/2021 – Present',
    location: 'India',
    points: [
      'Worked across frontend and backend to introduce new features and enhancements.',
      'Migrated backend applications from PCF to OpenShift and frontend workloads to AWS.',
      'Used Splunk for log analysis and configured alerting for backend services.',
      'Focused on building new capabilities and resolving production issues in a timely manner.',
    ],
  },
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
];

const education = [
  {
    degree: 'B.Tech in Computer Science & Engineering',
    school: 'Ambalika Institute of Management and Technology, Lucknow',
    period: '2017 – 2021',
    result: 'Marks: 74.23%',
  },
  {
    degree: 'Intermediate',
    school: 'S.V.M Inter College, Unchahar Raebareli',
    period: '2016',
    result: 'Marks: 66%',
  },
  {
    degree: 'High School',
    school: 'S.V.M Inter College, Unchahar Raebareli',
    period: '2014',
    result: 'Marks: 77.8%',
  },
];

const achievements = [
  'Received recognition for introducing new features and migrating backend applications from PCF to OpenShift and frontend to AWS.',
  'Ranked 443rd in the HackerEarth Easy20 competition.',
  'Achieved 1350th position in India in the Interview Jump Start coding contest.',
  'Secured 2nd place in the Tech Buzz coding contest.',
  'HackerRank: Gold Badge in Problem Solving.',
  'LeetCode: 3‑star coder.',
  'Published article: "How to Connect MongoDB with Spring Boot?".',
  'Implemented Text‑to‑PDF conversion using AWS Lambda and S3.',
];


const Hero = () => {
  return (
    <section id="hero" className="d-flex flex-column justify-content align-items-center">
      <div className="hero-container">
        <h1>Shivendra Kumar Sonkar</h1>
        <p>
          <span>Fullstack Software Engineer</span>
        </p>
      </div>
    </section>
  );
};

const Header = () => {
  return (
    <header id="header">
      <div className="d-flex flex-column">
        <div className="profile">
          <img src={profilePic} alt="Profile" className="img-fluid rounded-circle" />
          <h1 className="text-light">
            <a href="#hero">Shivendra Kumar Sonkar</a>
          </h1>
          <div className="social-links mt-3 text-center">
            <a
              href="https://www.linkedin.com/in/shivendra-kumar-sonkar-4349ab17b"
              className="linkedin"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bx bxl-linkedin" />
            </a>
            <a href="https://twitter.com/Shivendra9598" className="twitter" target="_blank" rel="noreferrer">
              <i className="bx bxl-twitter" />
            </a>
            <a href="mailto:sanusonkar1@gmail.com" className="twitter" target="_blank" rel="noreferrer">
             <i className="bx bx-envelope"/>
            </a>
          </div>
        </div>

        <nav id="navbar" className="nav-menu navbar">
          <ul>
            <li>
              <a href="#hero" className="nav-link scrollto active">
                <i className="bx bx-home" /> <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#about" className="nav-link scrollto">
                <i className="bx bx-user" /> <span>About</span>
              </a>
            </li>
            <li>
              <a href="#skills" className="nav-link scrollto">
                <i className="bx bx-bar-chart-alt-2" /> <span>Skills</span>
              </a>
            </li>
            <li>
              <a href="#resume" className="nav-link scrollto">
                <i className="bx bx-file-blank" /> <span>Experience &amp; Education</span>
              </a>
            </li>
            <li>
              <a href="#projects" className="nav-link scrollto">
                <i className="bx bx-code-alt" /> <span>Projects</span>
              </a>
            </li>
            <li>
              <a href="#achievements" className="nav-link scrollto">
                <i className="bx bx-trophy" /> <span>Achievements</span>
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link scrollto">
                <i className="bx bx-envelope" /> <span>Contact</span>
              </a>
            </li>
          </ul>
        </nav>
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
          <p>
            I am a Fullstack Software Engineer with experience delivering end‑to‑end solutions across Java, Spring Boot, React.js, express.js
            and cloud platforms such as AWS and OpenShift. I enjoy building scalable backend services, clean user
            interfaces, and automating deployments to create reliable, production‑ready systems.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <img src={profilePic} className="img-fluid" alt="Profile" />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content">
            <h3>Fullstack Software Developer</h3>
            <p className="fst-italic">
              Passionate about backend services, cloud‑native architectures, and modern frontend development.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right" /> <strong>Phone:</strong>{' '}
                    <span>+91&nbsp;99361&nbsp;20982</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" /> <strong>City:</strong>{' '}
                    <span>Pratapgarh, Uttar Pradesh, India</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" /> <strong>Current Role:</strong> <span>Fullstack Software Engineer</span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right" /> <strong>Email:</strong>{' '}
                    <span>sanusonkar1@gmail.com</span>
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

        <div className="row">
          <div className="col-lg-6">
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

          <div className="col-lg-6">
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
            <div className="col-lg-4 col-md-6 portfolio-item" key={project.title}>
              <div className="project-card">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-period">{project.period}</p>
                <p className="project-tech">
                  <strong>Tech stack:</strong> {project.tech}
                </p>
                <ul className="project-points">
                  {project.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                {project.github && (
                  <div className="project-links mt-2">
                    <a
                      href={project.github}
                      className="btn btn-sm btn-outline-primary d-inline-flex align-items-center gap-2"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bi bi-github" />
                      <span>View on GitHub</span>
                    </a>
                  </div>
                )}
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

        <div className="row">
          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt" />
                <h4>Location:</h4>
                <p>Ali Ganj Churaha, Garhi Manikpur, Kunda, Pratapgarh, Uttar Pradesh, India</p>
              </div>

              <div className="email">
                <i className="bi bi-envelope" />
                <h4>Email:</h4>
                <p>sanusonkar1@gmail.com</p>
              </div>

              <div className="phone">
                <i className="bi bi-phone" />
                <h4>Call:</h4>
                <p>+91 99361 20982</p>
              </div>
            </div>
          </div>

          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <div className="info">
              <h4>Let&apos;s connect</h4>
              <p>
                The contact form from the original template has been simplified. You can reach me directly via email or
                phone for any professional discussion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = ({ darkMode, onToggleDarkMode }) => {
  return (
    <footer id="footer">
      <div className="container">
        <button
          type="button"
          className="btn btn-sm btn-outline-light w-100 d-flex align-items-center justify-content-center gap-2 mb-2 theme-toggle-btn-footer"
          onClick={onToggleDarkMode}
        >
          <i className={darkMode ? 'bi bi-sun-fill' : 'bi bi-moon-fill'} />
          <span>{darkMode ? 'Switch to light mode' : 'Switch to dark mode'}</span>
        </button>
        <div className="copyright">
          &copy; {new Date().getFullYear()} <strong>
            <span>Shivendra Kumar Sonkar</span>
          </strong>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

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

  const handleToggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <>
      <Header />
      <Hero />
      <main id="main">
        <About />
        <ResumeSection />
        <Skills />
        <ArticlesSection />
        <ProjectsSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      <Footer darkMode={darkMode} onToggleDarkMode={handleToggleDarkMode} />
      <a href="#hero" className="back-to-top d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-up-short" />
      </a>
    </>
  );
};

export default App;

