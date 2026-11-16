export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <div className="eyebrow hero-eyebrow">
          <span className="small-sun">✳</span> A TASTE OF BRAZIL&apos;S
          NORTHEAST
        </div>
        <h1>
          <span>Come</span>
          <span>hungry.</span>
          <span>
            <em>Leave</em>
          </span>
          <span>
            <em>happy.</em>
          </span>
        </h1>
        <div className="hero-bottom">
          <p>
            Big flavors, long lunches, and a little bit of sunshine on every
            plate.
          </p>
          <a
            href="#story"
            className="circle-link"
            aria-label="Discover our story"
          >
            ↘
          </a>
        </div>
      </div>
      <div
        className="hero-image"
        role="img"
        aria-label="A warm, vibrant bowl of Brazilian shrimp moqueca"
      >
        <span className="photo-caption">
          GOOD FOOD. GOOD COMPANY. <b>ALWAYS.</b>
        </span>
        <div className="seal">
          <span>FROM OUR TABLE TO YOURS · </span>
          <strong>✳</strong>
        </div>
      </div>
      <div className="hero-side">
        A LITTLE BIT OF BRAZIL, A LOT OF LOVE <span>↘</span>
      </div>
    </section>
  );
}
