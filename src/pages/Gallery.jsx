import { useState } from "react";

function Gallery() {
  const photos = [
    {
      image:
        "https://britishacademy.vercel.app/assets/police-guest-honour.png",
      caption: "Community Guests",
    },
    {
      image:
        "https://britishacademy.vercel.app/assets/campus/faculty-annual-day.png",
      caption: "Faculty Annual Day Celebration",
    },
    {
      image:
        "https://britishacademy.vercel.app/assets/campus/anchor-speech.png",
      caption: "Management Address",
    },
    {
      image:
        "https://britishacademy.vercel.app/assets/campus/student-medal-classroom.png",
      caption: "Medal Honour",
    },
    {
      image:
        "https://britishacademy.vercel.app/assets/campus/earth-day-collage.png",
      caption: "Earth Day Activity",
    },
    {
      image:
        "https://britishacademy.vercel.app/assets/awards-trophies.png",
      caption: "Prizes and Trophies",
    },
  ];

  const [selected, setSelected] = useState(null);

  const previous = () => {
    setSelected((selected - 1 + photos.length) % photos.length);
  };

  const next = () => {
    setSelected((selected + 1) % photos.length);
  };

  return (
    <main className="gallery-page">
     <section className="gallery-hero">
  <div className="gallery-hero-content">
    <p className="eyebrow">LIFE AT BRITISH ACADEMY</p>

    <h1>
      Little Moments.
      <br />
      <span>Beautiful Memories.</span>
    </h1 >

    <p>
      Explore the moments of learning, creativity, friendship
      and discovery that make life at British Academy special.
    </p>

    <a href="#gallery-photos" className="gallery-explore">
      EXPLORE OUR GALLERY <span>↓</span>
    </a>
  </div>

  <div className="gallery-hero-decoration">
    <span>LEARN</span>
    <span>GROW</span>
    <span>SHINE</span>
  </div>
</section>

      <section className="gallery-content" id="gallery-photos">
        <div className="gallery-heading">
          <p className="eyebrow">OUR PHOTO COLLECTION</p>
          <h2>Moments Worth Remembering</h2>
        </div>

        <div className="gallery-grid">
          {photos.map((photo, index) => (
            <div
              className="gallery-item"
              key={index}
              onClick={() => setSelected(index)}
            >
              <img
                src={photo.image}
                alt={`School gallery moment ${index + 1}`}
                loading="lazy"
              />
              <p className="gallery-caption">{photo.caption}</p>
              <div className="gallery-overlay">
                <span>View Photo ↗</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selected !== null && (
        <div className="lightbox">
          <button className="lightbox-close" onClick={() => setSelected(null)}>
            ✕
          </button>
          <button onClick={previous}>❮</button>
          <img src={photos[selected].image} alt="Selected gallery photo" />
          <button onClick={next}>❯</button>
        </div>
      )}
    </main>
  );
}

export default Gallery;
