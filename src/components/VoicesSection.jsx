import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import styles from "./VoicesSection.module.css";

export default function VoicesSection() {
  const [testimonials, setTestimonials] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    async function fetchTestimonials() {
      const { data, error } = await supabase
        .from("testimonials")
        .select("*")
        .eq("approved", true)
        .order("created_at", { ascending: false });

      if (!error) {
        setTestimonials(data);
      }
    }

    fetchTestimonials();
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.from("testimonials").insert([
      {
        name: formData.name,
        location: formData.location,
        message: formData.message,
        approved: false,
      },
    ]);
    if (error) {
      alert("Submission failed: " + error.message);
      console.error(error);
    } else {
      setSubmitted(true);
    }
  };

  return (
    <section className={styles.aboutContainer}>
      <h2 data-aos= "zoom-out-down" className={styles.aboutTitle}>Voices from the Valley</h2>

      {testimonials.length === 0 ? (
        <p className={styles.aboutText}>No stories yet.</p>
      ) : (
        <div className={styles.aboutMessageContainer}>
            {testimonials.map((t) => (
             <div key={t.id} className={styles.aboutMessagebox} data-aos="flip-left">
                <p className="text-xl text-gray-700 dark:text-gray-900 mb-2 text-center">
                    "{t.message}"
                </p>
                <p className="text-sm text-black text-center">
                — {t.name} from {t.location}
                </p>
            </div>
            ))}
        </div>
      )}

      <div className="mt-12">
        {submitted ? (
          <div className={styles.aboutText}>
            Thank you for sharing your story!
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
          >
            <h3 className={styles.aboutSubtitle} data-aos = "zoom-in">
              Share your story about living near the Salton Sea
            </h3>

            <label className={styles.aboutText} data-aos = "fade-up">
              Name
              <input
                type="text"
                name="name"
                className="mt-1 w-full p-2 border rounded"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>

            <label className={styles.aboutText} data-aos = "fade-up">
              Location
              <input
                type="text"
                name="location"
                className="mt-1 w-full p-2 border rounded"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </label>

            <label className={styles.aboutText} data-aos = "fade-up">
              Testimonial
              <textarea
                name="message"
                className="mt-1 w-full p-2 border rounded"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </label>

            <button
              type="submit"
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
