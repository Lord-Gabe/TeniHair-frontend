import {motion, AnimatePresence} from "framer-motion";

export default function About() {
    return (
        <section id="about" className="about section">
            <motion.h2
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >Who We Are</motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
            >
                Teni Hair and Beauty Studio is here with a clear mission:
                <br /> <strong>To enhance women’s beauty through high-quality hair and beauty services. </strong>
                <br /><br />
                What started as a growing online business has evolved
                into Teni Hair and Beauty Studio, reflecting its expanded service offerings and commitment to complete beauty care.
                <br /><br />
                Over the years, Teni Hair and Beauty Studio has served the beauty needs of more than 500 women, offering professional lace-wig
                installation, wig revamps, makeup artistry, natural hair care, braids, and ready-to-wear wigs. Guided by the tagline
                “Great Hair, Great Look, Great Quality”,
                We are not devoted only to beauty—but to purposeful <strong>Impact</strong>, <strong>Confidence</strong>,
                and < strong>Community Upliftment</strong> of our clients and community.
            </motion.p>
        </section>
    );
}