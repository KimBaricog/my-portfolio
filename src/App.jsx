import { profile, services, skills, projects } from "./data";

function Project({ p }) {
  return (
    <article className="project">
      <div className="thumb">
        {p.image ? <img src={p.image} alt={`${p.title} screenshot`} loading="lazy" /> : <span>{p.title}</span>}
      </div>
      <div className="project-body">
        <h3>{p.title}</h3>
        <p>{p.description}</p>
        <ul className="tags">
          {p.tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        {(p.live || p.repo) && (
          <div className="actions">
            {p.live && (
              <a href={p.live} target="_blank" rel="noreferrer">
                View live
              </a>
            )}
            {p.repo && (
              <a href={p.repo} target="_blank" rel="noreferrer">
                Source code
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default function App() {
  return (
    <>
      <nav className="nav">
        <div className="wrap nav-inner">
          <a href="#top" className="brand">{profile.name}</a>
          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#services">Services</a>
            <a href="#contact" className="nav-cta">Hire me</a>
          </div>
        </div>
      </nav>

      <main id="top">
        <header className="wrap hero">
          <div>
            <p className="role">{profile.role}</p>
            <h1>{profile.headline}</h1>
            <p className="lead">{profile.intro}</p>
            <div className="btns">
              <a className="btn primary" href="#contact">Start a project</a>
              <a className="btn" href="#work">See my work</a>
            </div>
          </div>
          {profile.photo ? (
            <img className="photo" src={profile.photo} alt={profile.name} />
          ) : (
            <div className="photo placeholder" aria-hidden="true">Photo</div>
          )}
        </header>

        <section id="work" className="wrap">
          <h2>Selected work</h2>
          <div className="grid">
            {projects.map((p) => (
              <Project key={p.title} p={p} />
            ))}
          </div>
        </section>

        <section id="services" className="wrap">
          <h2>What I build</h2>
          <div className="services">
            {services.map((s) => (
              <div key={s.title} className="service">
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
          <ul className="tags skills">
            {skills.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </section>

        <section id="contact" className="wrap contact">
          <h2>Let’s work together</h2>
          <p>Tell me what you need and I’ll reply with a plan and a price.</p>
          <a className="mail" href={`mailto:${profile.email}`}>{profile.email}</a>
          <div className="links">
            {profile.links.map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noreferrer">{l.label}</a>
            ))}
          </div>
        </section>
      </main>

      <footer className="wrap footer">© {new Date().getFullYear()} {profile.name}</footer>
    </>
  );
}
