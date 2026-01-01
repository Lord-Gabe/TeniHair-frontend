import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ImCrying } from "react-icons/im";
import { FaInstagram} from "react-icons/fa";

const reviews = [
  {
    text: "Good afternoon \n I am really proud and excited of my makeup. \n It lasted me till the end of the after party, still radiant and smooth despite the activities. \n I will definitely be patronizing you more often. \n Thank you once again. 😊",
    author: "Simnon"
  },
  {
    text: "The are lovely. Thank you for the gifts too! 🥹 No online vendor has ever been this nice and homely. \n Thank you for BEING HOSPITABLE",
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
    text: "The wig is soo pretty, Thank you💖 \n I just gave your number to my friends. I will definetly keep on patronizing you",
    author: "M-Jay"
  }
];

function moreReview() {
  window.open("https://www.instagram.com/s/aGlnaGxpZ2h0OjE3ODkwNDQ2Njg4NTk0OTU0/?igsh=dG5xdnA3NjR1N2Vx#", "_blank");
}

export default function Reviews() {
  const [index, setIndex] = useState(0);

  const paginate = (direction) => {
    setIndex((prev) =>
      (prev + direction + reviews.length) % reviews.length
    );
  };

  return (
    <section className="reviews section">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        What Our Clients Say
      </motion.h2>

      <div className="review-slider">
        <AnimatePresence initial={false}>
          <motion.div
            key={index}
            className="review-card"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(e, info) => {
              if (info.offset.x < -100) paginate(1);
              if (info.offset.x > 100) paginate(-1);
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
          >
            <p>“{reviews[index].text}”</p>
            <span>— {reviews[index].author}</span>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="review-dots">
        {reviews.map((_, i) => (
          <button
            key={i}
            className={i === index ? "active" : ""}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
      <button className="see-more-reviews" onClick={moreReview}><FaInstagram /> See More Reviews</button>
    </section>
  );
}
