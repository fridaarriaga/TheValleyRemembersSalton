import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./AboutFrida.module.css";
import berkeley from "../assets/berkeley.jpeg"
import mexicali from "../assets/Mexicali.jpg"

export default function AboutSaltonSea() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <main className={styles.aboutContainer}>
      <h1 className={styles.aboutTitle} data-aos="zoom-in">
        Who is Frida Arriaga?
      </h1>

      {/* Section 1: Where is the Salton Sea? */}
      <section className={styles.aboutSection} data-aos="zoom-in">
        <h2 className={styles.aboutSubtitle}>Background</h2>
        <img
        data-aos = "flip-down"
          src={berkeley}
          alt="Picture of Frida Arriaga in the University of California, Berkeley."
          className="about-image"
        />
        <p className={styles.aboutText}>
        Hello, my name is Frida Arriaga, and I’m a sophomore studying Computer Science at UC Berkeley. I was born and raised in the Coachella Valley and graduated as Salutatorian from Shadow Hills High School, Class of 2024. In my free time, I enjoy running, curating Spotify playlists, and listening to clasical music.        </p>
      </section>

      {/* Section 2: A Brief History */}
      <section className={styles.aboutSection} >
        <h2 data-aos = "zoom-in"className={styles.aboutSubtitle}>Why an interest in the Salton Sea?</h2>
        <img 
        data-aos="fade-right"
          src="https://images.squarespace-cdn.com/content/v1/522384f8e4b062b4a5ced35c/1433968745719-UCHN13HO4I61480JORLC/image-asset.jpeg"
          alt="Salton Sea vacation spot in 1960s 2"
          className="about-image"
        />

        <figure>
        <img
        data-aos="fade-left"
          src={mexicali}
          alt="Frida Arriaga spending the summer in Mexicali with her cousins"
          className="about-image"/>
          <figcaption>Frida and her younger brother, Imanol, spending the summer in Mexicali with her two cousins.</figcaption>
          

        </figure>
        <p className={styles.aboutText}>
        In 2010, my aunt was deported for 10 years to Mexico. Along with her family, they moved to Mexicali, and over the span of the decade, my family and I would drive to her house for birthday parties, holidays, and get-togethers. While driving, I’d like to stare at the vast Salton Sea, and look how glittery it would look as the sun reflects the body of water. I would also notice how much of a ghost town it looked like with poster boards welcoming families to spend the summer at the Salton Sea as it was a perfect summer getaway. I eventually interned for a summer in high school with former assemblyman Eduardo Garcia and became more aware of the Salton Sea Restoration Program. Now a Computer Science major, I decided to code a website to make people more aware of the Salton Sea, its risks toward the neighboring people, and what some future plans are about it. If you have any feedback or comments on this website project, feel free to{' '}
            <a
            href="mailto:frida.arriaga@berkeley.edu?subject=Question/Comment%20on%20Salton%20Sea%20Website"
            className={styles.emailLink}
            >
        email me
  </a>
  .
</p>

      </section>



      {/* Section 4: Interactive Map */}
      <section className={styles.aboutSection}  data-aos="fade-up">
        <h2 className={styles.aboutSubtitle}>Drive from Coachella Valley to Mexicali</h2>
        <div className={styles.mapContainer}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d820159.7965284613!2d-116.24081473864268!3d33.164328747838155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x80da588e87ce3caf%3A0xfd521c797b97bcf8!2sCoachella%2C%20CA!3m2!1d33.6803003!2d-116.17389399999999!4m5!1s0x80d7700ca877ddd3%3A0xd40033a0e5cdf59a!2sMexicali%2C%20Baja%20California%2C%20Mexico!3m2!1d32.6245389!2d-115.4522623!5e1!3m2!1sen!2sus!4v1750277146964!5m2!1sen!2sus" 
         width="100%"
         height="450"
         style={{ border: 0 }}
         allowFullScreen=""
         loading="lazy"
         referrerPolicy="no-referrer-when-downgrade"
         title="Road Trip from Coachella Valley to Mexically"
       ></iframe>
        </div>
      </section>
    </main>
  );
}
