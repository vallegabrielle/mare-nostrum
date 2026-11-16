"use client";

import { useEffect, useState } from "react";

const dishes = {
  "From the sea": [
    { name: "Moqueca de Camarão", description: "Shrimp, coconut milk, tomatoes, peppers & dendê oil.", tag: "A HOUSE FAVORITE" },
    { name: "Peixe na Brasa", description: "Charcoal-grilled fish, lime, herbs & a little ocean breeze.", tag: "FRESH & BRIGHT" },
    { name: "Casquinha de Siri", description: "Blue crab, coconut, toasted cassava & fresh lime.", tag: "A LITTLE SOMETHING" },
  ],
  "From the land": [
    { name: "Baião de Dois", description: "Rice and black-eyed peas, queijo coalho & fresh herbs.", tag: "NORDESTE CLASSIC" },
    { name: "Carne de Sol", description: "Sun-cured beef, creamy cassava purée & caramelized onions.", tag: "SLOW & SOULFUL" },
    { name: "Cuscuz Nordestino", description: "Steamed corn couscous, butter & queijo coalho.", tag: "COMFORT FOOD" },
  ],
  "Sweet endings": [
    { name: "Cartola", description: "Warm bananas, melted cheese, cinnamon & sugar.", tag: "A RECIFE CLASSIC" },
    { name: "Bolo de Rolo", description: "Delicate layers of sponge cake wrapped around guava.", tag: "MADE FOR SHARING" },
    { name: "Cocada", description: "Sweet coconut, golden edges & a touch of sunshine.", tag: "A LITTLE TREAT" },
  ],
};
type MenuCategory = keyof typeof dishes;

export default function Home() {
  const [category, setCategory] = useState<MenuCategory>("From the sea");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <header className="header">
        <a href="#top" className="wordmark" aria-label="Mare Nostrum, home">mare <span>nostrum</span><i>✳</i></a>
        <nav className={menuOpen ? "nav nav-open" : "nav"} aria-label="Main navigation">
          <a href="#story" onClick={() => setMenuOpen(false)}>Our story</a>
          <a href="#menu" onClick={() => setMenuOpen(false)}>The menu</a>
          <a href="#visit" onClick={() => setMenuOpen(false)}>Come by</a>
        </nav>
        <a href="#menu" className="header-cta">EXPLORE THE MENU <span>↗</span></a>
        <button className="mobile-toggle" type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? "×" : "☰"}</button>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow hero-eyebrow"><span className="small-sun">✳</span> A TASTE OF BRAZIL&apos;S NORTHEAST</div>
          <h1><span>Come</span><span>hungry.</span><span><em>Leave</em></span><span><em>happy.</em></span></h1>
          <div className="hero-bottom"><p>Big flavors, long lunches, and a little bit of sunshine on every plate.</p><a href="#story" className="circle-link" aria-label="Discover our story">↘</a></div>
        </div>
        <div className="hero-image" role="img" aria-label="A warm, vibrant bowl of Brazilian shrimp moqueca">
          <span className="photo-caption">GOOD FOOD. GOOD COMPANY. <b>ALWAYS.</b></span>
          <div className="seal"><span>FROM OUR TABLE TO YOURS · </span><strong>✳</strong></div>
        </div>
        <div className="hero-side">A LITTLE BIT OF BRAZIL, A LOT OF LOVE <span>↘</span></div>
      </section>

      <div className="ticker" aria-hidden="true"><div><span>THE TABLE IS SET</span><b>✳</b><span>COME AS YOU ARE</span><b>✳</b><span>STAY A LITTLE LONGER</span><b>✳</b><span>THE TABLE IS SET</span><b>✳</b><span>COME AS YOU ARE</span><b>✳</b><span>STAY A LITTLE LONGER</span><b>✳</b></div></div>

      <section className="intro section-pad" id="story">
        <div className="intro-label" data-reveal><span>01 / OUR STORY</span><span className="drawn-sun">✳</span></div>
        <div className="intro-content" data-reveal><span className="eyebrow">A PLACE AT THE TABLE</span><h2>From the Northeast,<br /><em>with love.</em></h2><div className="intro-text"><p>Inspired by the sun-soaked coast and generous spirit of Brazil&apos;s Nordeste, Mare Nostrum is a love letter to food that brings people together.</p><p>Think coconut, cassava, fresh seafood, a little dendê, and recipes that taste like they have a story to tell.</p></div><a className="text-link" href="#menu">GET TO KNOW OUR FOOD <span>↗</span></a></div>
      </section>

      <section className="menu-section section-pad" id="menu">
        <div className="menu-head" data-reveal><div><span className="eyebrow light">02 / THE GOOD STUFF</span><h2>A little bit<br />of <em>everything.</em></h2></div><p>Familiar to some, a delicious discovery for others. There&apos;s always room for one more at the table.</p></div>
        <div className="menu-layout">
          <div className="menu-photo" data-reveal><div className="menu-photo-image"/><div className="menu-photo-note"><span>MADE WITH<br />SUNSHINE & SOUL</span><span>✳</span></div></div>
          <div className="menu-content" data-reveal>
            <div className="menu-tabs" role="group" aria-label="Menu categories">{(Object.keys(dishes) as MenuCategory[]).map((item) => <button type="button" key={item} className={category === item ? "active" : ""} aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}</div>
            <div className="dish-list" aria-live="polite" key={category}>{dishes[category].map((dish, index) => <article className="dish" key={dish.name}><div className="dish-number">0{index + 1}</div><div><span className="dish-tag">{dish.tag}</span><h3>{dish.name}</h3><p>{dish.description}</p></div><span className="dish-star">✳</span></article>)}</div>
            <p className="menu-note">A LITTLE NOTE: THIS IS A CONCEPT MENU, MADE WITH LOVE.</p>
          </div>
        </div>
      </section>

      <section className="manifesto section-pad" data-reveal><div className="manifesto-top"><span>03 / THE MARE WAY</span><span>GOOD FOOD IS A LOVE LANGUAGE</span></div><div className="manifesto-body"><div className="manifesto-sun">✳</div><p>Food tastes better<br />when <em>we&apos;re together.</em></p></div><div className="manifesto-bottom"><span>PASS THE PLATES.</span><span>SHARE THE STORIES.</span><span>STAY FOR DESSERT.</span></div></section>

      <footer className="footer section-pad" id="visit"><div className="footer-top" data-reveal><div><span className="eyebrow light">UNTIL WE MEET AGAIN</span><h2>There&apos;s always<br /><em>room for you.</em></h2><p>Gather your favorite people. We&apos;ll bring the sunshine.</p></div><a href="#menu" className="footer-button">TAKE A LOOK AT THE MENU <span>↗</span></a></div><div className="footer-brand">mare <em>nostrum</em><span>✳</span></div><div className="footer-bottom"><span>© MARE NOSTRUM — A RESTAURANT CONCEPT</span><span>MADE WITH SUNSHINE & A LITTLE SAUDADE</span><a href="#top">BACK TO TOP ↑</a></div></footer>
    </main>
  );
}
