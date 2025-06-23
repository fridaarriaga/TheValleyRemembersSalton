import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./AboutFrida.module.css";
import berkeley from "../assets/berkeley.jpeg"
import mexicali from "../assets/Mexicali.jpg"
import birds from "../assets/birds.jpeg"
import corvina from "../assets/corvina.jpeg"
import sea from "../assets/sea.jpeg"
import benches from "../assets/benches.jpeg"
import pointing from "../assets/pointing.jpeg"
import houses from "../assets/houses.jpeg"
import registration from "../assets/registration.jpeg"

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';



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
      <section className={styles.aboutSection}data-aos = "zoom-in" >
        <h2 className={styles.aboutSubtitle}>Motivation Behind Building a Salton Sea Platform</h2>

        <figure>
        <img
          data-aos="zoom-in"
          src={mexicali}
          alt="Frida Arriaga spending the summer in Mexicali with her cousins"
          className = {styles.aboutImage}
          />
          <figcaption>Frida and her younger brother, Imanol, spending the summer in Mexicali with her two cousins.</figcaption>
        </figure>

        <p className={styles.aboutText}>
        In 2007, my aunt was deported for 10 years to Mexico. Along with her family, they moved to Mexicali, and over the span of the decade, my family and I would drive from Coachella to her house for birthday parties, holidays, and get-togethers. While driving, I’d like to stare at the vast Salton Sea, and look how glittery it would look as the sun reflects the body of water. I would also notice how much of a ghost town it looked like with poster boards welcoming families to spend the summer at the Salton Sea as it was a perfect summer getaway. I eventually interned for a summer in high school with former assemblyman Eduardo Garcia and became more aware of the Salton Sea Restoration Program. Now a Computer Science major, I decided to code a website to make more people aware of the Salton Sea, its risks toward the neighboring people, and what some future plans are about it. If you have any feedback or comments on this website project, feel free to{' '}
            <a
            href="mailto:frida.arriaga@berkeley.edu?subject=Question/Comment%20on%20Salton%20Sea%20Website"
            className={styles.emailLink}
            >
        email me
  </a>
  .
</p>

      </section>
      {/* Section: Image Carousel */}
<section className={styles.aboutSection} data-aos="fade-up">
  <h2 className={styles.aboutSubtitle}>Trip to Salton Sea</h2>
  <Carousel
    showArrows={true}
    showThumbs={false}
    autoPlay
    infiniteLoop
    interval={4000}
    className={styles.carousel}
  >
    <div>
      <img src={birds} alt="A few small birds near Salton Sea shore"/>
      <p className={styles.aboutImage}>A few small birds near Salton Sea shore</p>
    </div>
    <div>
      <img src={sea} alt="Frida by the shore of the Salton Sea" />
      <p className={styles.aboutImage}>Frida by the shore of the Salton Sea</p>
    </div>
    <div>
    <img src= {pointing} alt="Frida pointing at the Salton Sea" />
      <p className={styles.aboutImage}>Frida pointing at the Salton Sea</p>
    </div>
    <div>
    <img src={houses} alt="Community Event in Coachella" />
      <p className={styles.aboutImage}>Notice the shriking shoreline (the playa) and very few houses in the Salton Sea</p>
    </div>
    <div>
      <img src = {benches} alt="Community Event in Coachella" />
      <p className={styles.aboutImage}>Free and unoccupied benches to admire the sea</p>
    </div>
    <div>
    <img src={corvina} alt="Community Event in Coachella" />
      <p className={styles.aboutImage}>Community Event in Coachella</p>
    </div>
    <div>
    <img src={registration} alt="Community Event in Coachella" />
      <p className={styles.aboutImage}>Community Event in Coachella</p>
    </div>
    <div>
    <img src="https://your-image-url-3.jpg" alt="Community Event in Coachella" />
      <p className={styles.aboutImage}>Community Event in Coachella</p>
    </div>

  </Carousel>
  <p className = {styles.aboutText}>
    On June 22, 2025, after around a week of starting this project, I visited Desert Shores and Bombay Beach to step on the actual Salton Sea rather than seeing it from my car window. It was a really oeaceful experience, with little to no cars and movement in these cities. As I stepped on the sand, I could tell how much the sea has shrunk compared to recent years by the amount of sand on the shore. I was surprised to see a bit of wildlife such as a few small birds on the shore. 
  </p>
</section>




      {/* Section 4: Interactive Map */}
      <section className={styles.aboutSection}  data-aos="fade-up">
        <h2 className={styles.aboutSubtitle}>Drive from Coachella to Mexicali</h2>
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
