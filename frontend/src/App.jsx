import { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const skills = [
  { title: 'Data Science Skills', items: ['Python', 'R Programming', 'Statistics', 'Data Analysis', 'Data Visualization', 'Machine Learning', 'Deep Learning', 'Predictive Analytics'] },
  { title: 'Database Skills', items: ['SQL', 'PostgreSQL', 'MySQL'] },
  { title: 'Cloud & Deployment', items: ['Cloud Computing', 'Vercel', 'Render', 'GitHub', 'Git', 'API Development'] },
  { title: 'Tools & Technologies', items: ['Jupyter Notebook', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'Power BI', 'Excel'] },
];

const projects = [
  { name: 'Student Performance Prediction', description: 'Machine learning model predicting student performance using educational data.', stack: ['Python', 'Scikit-learn', 'Pandas'], link: 'https://github.com/bananga1739' },
  { name: 'Sales Data Analytics Dashboard', description: 'Interactive dashboard for business insights and visualization.', stack: ['Power BI', 'Excel', 'SQL'], link: 'https://github.com/bananga1739' },
  { name: 'Customer Churn Prediction', description: 'Predictive analytics project using classification algorithms.', stack: ['Python', 'ML', 'Seaborn'], link: 'https://github.com/bananga1739' },
  { name: 'Statistical Data Analysis System', description: 'Data processing and statistical reporting platform.', stack: ['R', 'Statistics', 'Visualization'], link: 'https://github.com/bananga1739' },
];

export default function App() {
  const [profile, setProfile] = useState(null);
  const [githubData, setGithubData] = useState(null);
  const [repos, setRepos] = useState([]);
  const apiBase = import.meta.env.VITE_API_URL || '/api';

  useEffect(() => {
    axios.get(`${apiBase}/profile`).then(({ data }) => setProfile(data));
    axios.get('https://api.github.com/users/bananga1739').then(({ data }) => setGithubData(data));
    axios.get('https://api.github.com/users/bananga1739/repos?per_page=6&sort=updated').then(({ data }) => setRepos(data));
  }, []);

  return (
    <div className="min-h-screen text-slate-100">
      <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#home" className="text-xl font-semibold tracking-wide text-cyan-300">Walter Bananga</a>
          <div className="hidden gap-6 text-sm md:flex">
            {['Home', 'About', 'Skills', 'Projects', 'GitHub', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`} className="hover:text-cyan-300">{item}</a>
            ))}
          </div>
        </nav>
      </header>

      <main id="home" className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-10 lg:px-8">
        <section className="grid items-center gap-8 rounded-3xl border border-slate-800 bg-slate-900/60 p-8 glass-card lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">Data Science Student</p>
            <h1 className="mt-4 text-4xl font-black text-white md:text-6xl">Walter Timilay Bananga</h1>
            <p className="mt-4 max-w-2xl text-lg text-slate-300">Machine Learning Enthusiast | Cloud Computing Learner</p>
            <p className="mt-6 max-w-xl text-slate-300">Passionate about transforming data into meaningful insights through statistics, analytics, machine learning, and cloud technologies.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#projects" className="rounded-full bg-gradient-to-r from-blue-500 to-violet-500 px-5 py-3 font-semibold text-white shadow-lg shadow-blue-900/30">View Projects</a>
              <a href="#contact" className="rounded-full border border-cyan-400/70 px-5 py-3 font-semibold text-cyan-100">Contact Me</a>
              <a href="https://github.com/bananga1739" target="_blank" rel="noreferrer" className="rounded-full border border-slate-700 px-5 py-3 font-semibold text-slate-100">GitHub Profile</a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="glass-card rounded-3xl p-6">
            <div className="rounded-3xl border border-slate-700 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
              <div className="flex items-center justify-between text-sm text-slate-300"><span>Live Analytics</span><span>2026</span></div>
              <div className="mt-6 grid grid-cols-2 gap-4 text-center">
                {['Python', 'SQL', 'ML', 'Cloud'].map((chip) => <div key={chip} className="rounded-2xl border border-slate-700 bg-slate-800/80 p-4 text-lg font-semibold">{chip}</div>)}
              </div>
              <div className="mt-6 h-24 rounded-2xl border border-cyan-500/30 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.15),_transparent_35%),linear-gradient(120deg,#0f172a,#111827)]" />
            </div>
          </motion.div>
        </section>

        <section id="about" className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <motion.article initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-white">About Me</h2>
            <p className="mt-4 text-slate-300">I am Walter Timilay Bananga, a Data Science student at the Eastern African Statistical Training Centre (EASTC). I completed Advanced Level education at Azania Secondary School from 2021 to 2023. I am passionate about data analysis, machine learning, statistical modeling, and cloud computing.</p>
            <ul className="mt-6 space-y-4 text-slate-200">
              <li>• Education Timeline: EASTC (Current) | Azania Secondary School (2021–2023)</li>
              <li>• Academic Journey: Building strong foundations in statistics, analytics, and programming.</li>
              <li>• Career Goals: Create data-driven solutions that improve decision-making and digital transformation.</li>
            </ul>
          </motion.article>
          <motion.aside initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card rounded-3xl p-8">
            <h3 className="text-xl font-semibold text-cyan-200">Cloud Assignment API</h3>
            <p className="mt-2 text-slate-300">This card fetches data from the backend profile endpoint.</p>
            {profile ? (
              <div className="mt-6 rounded-2xl border border-cyan-400/30 bg-slate-900/90 p-5 text-sm text-slate-100">
                <p><strong>Name:</strong> {profile.name}</p>
                <p><strong>Program:</strong> {profile.program}</p>
                <p><strong>Institution:</strong> {profile.institution}</p>
                <p><strong>School:</strong> {profile.school}</p>
                <p><strong>GitHub:</strong> <a className="text-cyan-300" href={profile.github}>{profile.github}</a></p>
              </div>
            ) : <p className="mt-6 text-slate-400">Loading profile data…</p>}
          </motion.aside>
        </section>

        <section id="skills" className="glass-card rounded-3xl p-8">
          <h2 className="text-3xl font-bold text-white">Skills</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {skills.map((group, index) => (
              <motion.article key={group.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="rounded-3xl border border-slate-700 bg-slate-900/90 p-5">
                <h3 className="text-xl font-semibold text-cyan-200">{group.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => <li key={item} className="rounded-full border border-slate-700 bg-slate-800/90 px-3 py-2 text-sm text-slate-100">{item}</li>)}
                </ul>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="projects" className="glass-card rounded-3xl p-8">
          <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.article key={project.name} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="rounded-3xl border border-slate-700 bg-slate-900/90 p-6">
                <div className="h-36 rounded-2xl bg-gradient-to-br from-blue-500/25 via-violet-500/20 to-cyan-500/20" />
                <h3 className="mt-4 text-xl font-semibold text-white">{project.name}</h3>
                <p className="mt-2 text-slate-300">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">{project.stack.map((tech) => <span key={tech} className="rounded-full bg-slate-800 px-3 py-1 text-xs text-cyan-100">{tech}</span>)}</div>
                <div className="mt-5 flex gap-3">
                  <a href={project.link} target="_blank" rel="noreferrer" className="rounded-full bg-gradient-to-r from-blue-500 to-violet-500 px-4 py-2 text-sm font-semibold text-white">GitHub Link</a>
                  <a href="#contact" className="rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-100">Live Demo</a>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="github" className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <motion.article initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-white">GitHub Profile</h2>
            {githubData ? (
              <div className="mt-6 flex items-center gap-5">
                <img src={githubData.avatar_url} alt="GitHub avatar" className="h-20 w-20 rounded-full border border-slate-700" />
                <div>
                  <p className="text-xl font-semibold text-white">{githubData.login}</p>
                  <p className="text-slate-300">{githubData.bio || 'Data Science and Cloud Computing enthusiast.'}</p>
                  <p className="mt-2 text-sm text-cyan-200">Repos: {githubData.public_repos} • Followers: {githubData.followers} • Following: {githubData.following}</p>
                </div>
              </div>
            ) : <p className="mt-6 text-slate-400">Loading GitHub data…</p>}
            <a href="https://github.com/bananga1739" target="_blank" rel="noreferrer" className="mt-6 inline-flex rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-3 text-sm font-semibold text-white">Visit GitHub Profile</a>
          </motion.article>

          <motion.article initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card rounded-3xl p-8">
            <h3 className="text-2xl font-semibold text-white">Latest Repositories</h3>
            <div className="mt-6 grid gap-4">
              {repos.map((repo) => (
                <a key={repo.name} href={repo.html_url} target="_blank" rel="noreferrer" className="rounded-2xl border border-slate-700 bg-slate-900/90 p-4 transition hover:border-cyan-400/60 hover:bg-slate-800/90">
                  <div className="flex items-center justify-between gap-4">
                    <h4 className="text-lg font-semibold text-cyan-100">{repo.name}</h4>
                    <span className="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-300">{repo.language || 'Various'}</span>
                  </div>
                  <p className="mt-2 text-sm text-slate-300">{repo.description || 'Portfolio project and learning repository.'}</p>
                </a>
              ))}
            </div>
          </motion.article>
        </section>

        <section id="contact" className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.article initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-white">Contact</h2>
            <p className="mt-4 text-slate-300">Feel free to connect for collaboration, internships, or project discussions.</p>
            <ul className="mt-6 space-y-3 text-slate-100">
              <li>Phone: +255 629 080 914</li>
              <li>Email: walterbananga@gmail.com</li>
              <li>GitHub: <a className="text-cyan-300" href="https://github.com/bananga1739">github.com/bananga1739</a></li>
            </ul>
          </motion.article>

          <motion.form initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card rounded-3xl p-8">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="text-sm text-slate-200">Name<input className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900/90 px-4 py-3 text-slate-100" placeholder="Your name" /></label>
              <label className="text-sm text-slate-200">Email<input className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900/90 px-4 py-3 text-slate-100" placeholder="you@example.com" /></label>
            </div>
            <label className="mt-4 block text-sm text-slate-200">Message<textarea className="mt-2 min-h-[140px] w-full rounded-2xl border border-slate-700 bg-slate-900/90 px-4 py-3 text-slate-100" placeholder="Tell me about your project or idea." /></label>
            <button type="button" className="mt-5 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 px-5 py-3 font-semibold text-white">Send Message</button>
          </motion.form>
        </section>
      </main>

      <footer className="border-t border-slate-800 bg-slate-950/90 py-8 text-center text-sm text-slate-300">
        <p>© 2026 Walter Timilay Bananga. All Rights Reserved.</p>
        <div className="mt-3 flex justify-center gap-4 text-cyan-200">
          <a href="https://github.com/bananga1739">GitHub</a>
          <a href="mailto:walterbananga@gmail.com">Email</a>
          <a href="#home">Quick Navigation</a>
        </div>
      </footer>
    </div>
  );
}
