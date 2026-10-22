
export function PageAbout(): string {
  return `
    <main class="about-page">
      <header class="about-header">
        <nav>
          <a class="logo" href="/">MijnApp</a>
          <a href="#about">Over ons</a>
        </nav>
      </header>

      <section class="hero" id="about">
        <p class="eyebrow">OVER ONS</p>
        <h1>Gebouwd met TypeScript.</h1>
        <p class="description">
          Een applicatie waarin gebruikers en hun rekeningen
          overzichtelijk worden beheerd.
        </p>
        <a class="cta" href="#details">Ontdek meer</a>
      </section>

      <section class="details" id="details">
        <article class="detail-card">
          <h2>Gebruikers</h2>
          <p>Beheer gebruikers en hun saldo.</p>
        </article>

        <article class="detail-card">
          <h2>Rekeningen</h2>
          <p>Bekijk bedragen, omschrijvingen en afschrijvingen.</p>
        </article>

        <article class="detail-card">
          <h2>TypeScript</h2>
          <p>Gebruik duidelijke interfaces en gescheiden modules.</p>
        </article>
      </section>

      <footer class="about-footer">
        <p>&copy; 2026 MijnApp</p>
      </footer>
    </main>
  `;
}
