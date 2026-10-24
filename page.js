const films = [
  { title: "The Last Horizon", genre: "Adventure · 2h 04m", tag: "FEATURED", style: "poster-one" },
  { title: "Velvet City", genre: "Drama · 1h 52m", tag: "CINENOVA PICK", style: "poster-two" },
  { title: "Beyond the Signal", genre: "Sci-Fi · 1h 48m", tag: "NEW TRAILER", style: "poster-three" },
  { title: "A Quiet Promise", genre: "Romance · 1h 57m", tag: "EDITOR'S CHOICE", style: "poster-four" },
  { title: "Shadow Protocol", genre: "Thriller · 2h 01m", tag: "TRENDING", style: "poster-five" },
];

function FilmCard({ film }) {
  return (
    <article className={`film-card ${film.style}`}>
      <div className="poster-art" aria-hidden="true">
        <span className="poster-orb" />
        <span className="poster-line" />
        <span className="poster-grain" />
      </div>
      <div className="film-info">
        <span className="film-tag">{film.tag}</span>
        <h3>{film.title}</h3>
        <p>{film.genre}</p>
        <button className="text-button" type="button" aria-label={`View ${film.title} details`}>
          Explore <span aria-hidden="true">↗</span>
        </button>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#" aria-label="CineNova home">
          <span className="brand-mark">C</span>
          <span>Cine<span>Nova</span></span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a className="active" href="#home">Home</a>
          <a href="#discover">Discover</a>
          <a href="#trailers">Trailers</a>
          <a href="#plans">Membership</a>
        </nav>
        <div className="header-actions">
          <button className="icon-button" type="button" aria-label="Search">⌕</button>
          <a className="sign-in" href="#sign-in">Sign in</a>
          <a className="button button-gold button-small" href="#plans">Join CineNova</a>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-image" aria-hidden="true">
          <div className="hero-moon" />
          <div className="hero-ridge ridge-back" />
          <div className="hero-ridge ridge-front" />
        </div>
        <div className="hero-content">
          <p className="eyebrow"><span className="eyebrow-line" /> A NEW CINEMATIC EXPERIENCE</p>
          <p className="hero-kicker">THE C IN CINEMA STANDS FOR</p>
          <h1>Stories worth<br /><em>staying up for.</em></h1>
          <p className="hero-copy">
            Discover remarkable worlds, unforgettable characters, and stories that stay with you.
            Your next favourite is waiting.
          </p>
          <div className="hero-actions">
            <a className="button button-gold" href="#trailers"><span aria-hidden="true">▶</span> Explore trailers</a>
            <a className="button button-outline" href="#discover">Discover the collection <span aria-hidden="true">→</span></a>
          </div>
          <div className="hero-note"><span className="note-dot" /> A new world of entertainment</div>
        </div>
        <div className="hero-index"><span>01</span><i /> 05</div>
        <div className="hero-side-label">CINENOVA ORIGINAL DESIGN CONCEPT</div>
      </section>

      <section className="trust-strip" aria-label="CineNova features">
        <div><span className="strip-symbol">✦</span><span><strong>Stories selected with care</strong><small>A collection worth discovering</small></span></div>
        <div><span className="strip-symbol">◉</span><span><strong>Made for every screen</strong><small>Enjoy on mobile or desktop</small></span></div>
        <div><span className="strip-symbol">⌁</span><span><strong>Your next favourite awaits</strong><small>Explore at your own pace</small></span></div>
      </section>

      <section className="catalog-section" id="discover">
        <div className="section-heading">
          <div><p className="eyebrow">CURATED FOR YOU</p><h2>Discover something <em>extraordinary.</em></h2></div>
          <a className="section-link" href="#trailers">View all titles <span aria-hidden="true">→</span></a>
        </div>
        <div className="film-grid">
          {films.map((film) => <FilmCard key={film.title} film={film} />)}
        </div>
        <p className="demo-note">Preview concept: these are illustrative title cards, not a catalogue of available films.</p>
      </section>

      <section className="trailer-band" id="trailers">
        <div className="trailer-copy">
          <p className="eyebrow">FIRST LOOKS, BIG FEELINGS</p>
          <h2>Every great story<br />starts with a <em>glimpse.</em></h2>
          <p>Explore trailers and previews while we prepare a collection of films we can share legally with our audience.</p>
          <a className="button button-gold" href="#discover">Explore the previews <span aria-hidden="true">→</span></a>
        </div>
        <div className="trailer-visual" aria-label="Decorative cinematic preview artwork">
          <div className="trailer-ring ring-one" />
          <div className="trailer-ring ring-two" />
          <div className="trailer-play">▶</div>
          <span className="trailer-caption">THE NEXT CHAPTER BEGINS HERE</span>
        </div>
      </section>

      <section className="membership-section" id="plans">
        <p className="eyebrow">YOUR SEAT IS WAITING</p>
        <h2>Entertainment, on <em>your terms.</em></h2>
        <p className="membership-copy">Choose the experience that suits you. Membership options and prices will be confirmed before launch.</p>
        <div className="plan-grid">
          <article className="plan-card"><p className="plan-name">BASIC</p><h3>Simply enjoy.</h3><p>Discover the collection with an ad-supported experience.</p><ul><li>Curated catalogue</li><li>One device at a time</li><li>Standard quality where available</li></ul><a href="#sign-in" className="button button-outline plan-button">Explore Basic</a></article>
          <article className="plan-card plan-featured"><div className="popular-label">MOST POPULAR</div><p className="plan-name">STANDARD</p><h3>Stay a little longer.</h3><p>A more seamless way to enjoy the stories you love.</p><ul><li>Curated catalogue</li><li>Two devices at a time</li><li>Full HD where available</li></ul><a href="#sign-in" className="button button-gold plan-button">Explore Standard</a></article>
          <article className="plan-card"><p className="plan-name">PREMIUM</p><h3>Make it cinematic.</h3><p>For viewers who want more room for movie night.</p><ul><li>Curated catalogue</li><li>Up to four devices</li><li>Highest supported quality</li></ul><a href="#sign-in" className="button button-outline plan-button">Explore Premium</a></article>
        </div>
        <p className="fine-print">Plans shown are a design preview, not an offer for sale. Features depend on content rights and technical availability.</p>
      </section>

      <section className="closing-cta" id="sign-in">
        <p className="eyebrow">THE SCREEN IS YOURS</p>
        <h2>Find a story that <em>moves you.</em></h2>
        <p>CineNova is being built. Join us as a new world of entertainment takes shape.</p>
        <a className="button button-gold" href="mailto:hello@cinenova.example?subject=CineNova%20launch%20updates">Get launch updates <span aria-hidden="true">→</span></a>
      </section>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#home"><span className="brand-mark">C</span><span>Cine<span>Nova</span></span></a>
        <p>A New World of Entertainment.</p>
        <div className="footer-links"><a href="#plans">Membership</a><a href="#trailers">Trailers</a><a href="mailto:hello@cinenova.example">Contact</a></div>
        <small>© {new Date().getFullYear()} CineNova concept. All rights reserved.</small>
      </footer>
    </main>
  );
}
