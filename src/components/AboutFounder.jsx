import {motion} from "framer-motion";
import CEO from '../assets/CEO.png';

export default function AboutFounder() {
  return (
    <section id="about-founder" className="about section">
          <motion.h2
            initial={{ opacity: 0, y: -50}}  
            whileInView={{ opacity: 1 , y: 0}}
            transition={{ duration: 2 }} 
          >From Thoughts to Reality</motion.h2><br/>
  
          <div className="about-wrapper">
            <div className="about-text">
              <p>
                <span className="founder-name">TAYE AMPITAN IKUPONIYI</span>
                Her passion for beauty began in childhood, when she naturally taught herself how to braid hair. With her growing expertise and dedication, she officially laid the foundation for what would become a high-end beauty brand trusted by hundreds of women.
                <br /><br />             
                As the CEO, she leads with values grounded in professionalism, customer respect, satisfaction, and beauty excellence...
                <br /><br />
                Guided by her core belief that “Knowledge is power”, Taye is dedicated to inspiring growth, confidence, and empowerment of women and young girls in orphanages with the resources they need to grow, lead, and thrive.
              </p>
            </div>

            <div className="about-image">
              <img src={CEO} alt="Founder portrait" loading="lazy"/>
            </div>
          </div>
        </section>
    );  
}