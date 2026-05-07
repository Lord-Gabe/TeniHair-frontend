import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FaInstagram } from "react-icons/fa";

const reviews = [
  {
    text: "Good afternoon\nI am really proud and excited of my makeup.\nIt lasted me till the end of the after party, still radiant and smooth.\nI will definitely be patronizing you more often. 😊",
    author: "Simnon"
  },
  {
    text: "They are lovely. Thank you for the gifts too! 🥹\nNo vendor has ever been this nice and homely.\nThank you for being hospitable.",
    author: "Candy"
  },
  {
    text: "She brought my wig back to life! 😭",
    author: "Ayanfunmilola"
  },
  {
    text:"Thank you so much Teni Studio. I love them 💖",
    author: "Alfonso"
  },
  {
    text: "The wig is soo pretty! 💖\nI already referred my friends.\nI’ll definitely keep patronizing you.",
    author: "M-Jay"
  }
];

function moreReview() {
  window.open("https://www.instagram.com/tenihair_luxuryextensions/", "_blank");
}

export default function Reviews() {
  const [index, setIndex] = useState(0);

  const paginate = (direction) => {
    setIndex((prev) =>
      (prev + direction + reviews.length) % reviews.length
    );
  };

  /* 🔥 AUTO SLIDE */
  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 5000); // every 5s

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="reviews section">

      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        What Our Clients Say
      </motion.h2>

      <div className="review-slider">

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="review-card active"

            drag="x"
            dragConstraints={{ left: 0, right: 0 }}

            onDragEnd={(e, info) => {
              if (info.offset.x < -100) paginate(1);
              if (info.offset.x > 100) paginate(-1);
            }}

            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -30 }}

            transition={{ duration: 0.5 }}
          >
            <p className="review-text">
              “{reviews[index].text}”
            </p>

            <span className="review-author">
              — {reviews[index].author}
            </span>
          </motion.div>
        </AnimatePresence>

      </div>

      {/* DOTS */}
      <div className="review-dots">
        {reviews.map((_, i) => (
          <button
            key={i}
            className={i === index ? "active" : ""}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>

      {/* CTA */}
      <button className="see-more-reviews" onClick={moreReview}>
        <FaInstagram /> See More Reviews
      </button>

    </section>
  );
}