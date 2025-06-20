import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./AboutSaltonSea.module.css";

export default function AboutSaltonSea() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <main className={styles.aboutContainer}>
      <h1 className={styles.aboutTitle} data-aos="zoom-in">
        The Salton Sea: A Dying Lake
      </h1>

      {/* Section 1: Where is the Salton Sea? */}
      <section className={styles.aboutSection} data-aos="fade-up">
        <h2 className={styles.aboutSubtitle}>Where is the Salton Sea?</h2>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/SaltonSeaByPhilKonstantin.jpg/1200px-SaltonSeaByPhilKonstantin.jpg"
          alt="High View of the Salton Sea"
          className="about-image"
        />
        <p className={styles.aboutText}>
          The Salton Sea is located in Southern California’s Imperial and Coachella Valleys, roughly 40 miles from the U.S.-Mexico border. It's California’s largest lake by surface area, formed accidentally in 1905 when the Colorado River breached an irrigation canal and flooded the Salton Sink.
        </p>
      </section>

      {/* Section 2: A Brief History */}
      <section className={styles.aboutSection} data-aos="fade-right">
        <h2 className={styles.aboutSubtitle}>A Brief History</h2>
        <img
          src="https://www.desertsun.com/gcdn/-mm-/f6465df92897798eb0c6f731138de2ecb59a8af7/c=0-75-1636-998/local/-/media/PalmSprings/PalmSprings/2014/07/15/1405402746004-121-CWL193.jpg?width=1636&height=923&fit=crop&format=pjpg&auto=webp"
          alt="Salton Sea vacation spot in 1960s"
          className={styles.aboutImage}
        />
        <img
          src="https://images.squarespace-cdn.com/content/v1/522384f8e4b062b4a5ced35c/1433968745719-UCHN13HO4I61480JORLC/image-asset.jpeg"
          alt="Salton Sea vacation spot in 1960s 2"
          className={styles.aboutImage}
        />
        <p className={styles.aboutText}>
          In just over a century, the Salton Sea evolved from a surprising accident to a popular resort destination in the 1950s and 60s. Celebrities, such as Frank Sinatra, water-skied on its surface, fishing thrived, and entire communities were built along its shores. But without a natural outlet, the sea relied on agricultural runoff to maintain its water level. Over time, salinity rose and water levels dropped, leading to mass die-offs of fish and birds.
        </p>
      </section>

      {/* Section 3: Why It’s a Health Hazard */}
      <section className={styles.aboutSection}  data-aos="fade-left">
        <h2 className="about-subtitle">Why Has It Become a Health Hazard?</h2>
        <img
        
          src="https://www.sierraclub.org/sites/default/files/styles/amp_1200x675_16_9/public/2018-1-SaltonSea-ph1-WB.jpg.webp?itok=VRQYVRd0"
          alt="Dead fish at the Salton Sea"
          className="about-image"
          
        />
        <p className={styles.aboutText}>
          As the sea recedes, it exposes a dry lakebed laced with toxic chemicals, pesticides, and heavy metals. Strong desert winds lift this dust into the air, polluting the region and contributing to some of the highest asthma rates in California. What was once a thriving ecosystem and vacation hotspot is now a public health and environmental crisis.
        </p>
      </section>

      {/* Section 4: Interactive Map */}
      <section className={styles.aboutSection}  data-aos="fade-up">
        <h2 className={styles.aboutSubtitle}>Explore the Salton Sea on the Map</h2>
        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d263136.0580764286!2d-116.00410712267787!3d33.30957450937304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80da0e34f245497f%3A0xba9798cef0c05781!2sSalton%20Sea!5e1!3m2!1sen!2sus!4v1750185303727!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Salton Sea Map"
          ></iframe>
        </div>
      </section>
    </main>
  );
}
