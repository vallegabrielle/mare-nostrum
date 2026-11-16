"use client";

import { useState } from "react";
import { dishes, type MenuCategory } from "@/data/menu";

export function MenuSection() {
  const [category, setCategory] = useState<MenuCategory>("From the sea");

  return (
    <section className="menu-section section-pad" id="menu">
      <div className="menu-head" data-reveal>
        <div>
          <span className="eyebrow light">02 / THE GOOD STUFF</span>
          <h2>
            A little bit
            <br />
            of <em>everything.</em>
          </h2>
        </div>
        <p>
          Familiar to some, a delicious discovery for others. There&apos;s
          always room for one more at the table.
        </p>
      </div>
      <div className="menu-layout">
        <div className="menu-photo" data-reveal>
          <div className="menu-photo-image" />
          <div className="menu-photo-note">
            <span>
              MADE WITH
              <br />
              SUNSHINE & SOUL
            </span>
            <span>✳</span>
          </div>
        </div>
        <div className="menu-content" data-reveal>
          <div className="menu-tabs" role="group" aria-label="Menu categories">
            {(Object.keys(dishes) as MenuCategory[]).map((item) => (
              <button
                type="button"
                key={item}
                className={category === item ? "active" : ""}
                aria-pressed={category === item}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="dish-list" aria-live="polite" key={category}>
            {dishes[category].map((dish, index) => (
              <article className="dish" key={dish.name}>
                <div className="dish-number">0{index + 1}</div>
                <div>
                  <span className="dish-tag">{dish.tag}</span>
                  <h3>{dish.name}</h3>
                  <p>{dish.description}</p>
                </div>
                <span className="dish-star">✳</span>
              </article>
            ))}
          </div>
          <p className="menu-note">
            A LITTLE NOTE: THIS IS A CONCEPT MENU, MADE WITH LOVE.
          </p>
        </div>
      </div>
    </section>
  );
}
