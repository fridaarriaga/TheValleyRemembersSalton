import "./Data.css";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import farming from "../assets/farming.jpeg"

export default function Data() {
    useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);
  
    return (
      <main className="about-container">
        <h1 className="about-title" data-aos="zoom-in"> The Worries and Hopes for the Salton Sea        </h1>
        {/* Section 1: Shrinking */}
      <section className="about-Section" data-aos="fade-up">
        <h2 className="about-subtitle">Vanishing Waters: The Shrinking Salton Sea Crisis</h2>
        <img
          src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fb20bc321-86b9-4301-983a-aa78c9e512ce_470x643.png"
          alt="Shrinking Salton Sea Image"
          className="about-image"
        />
        <p className="about-text">
        In 2003, the Quantification Settlement Agreement (QSA) required the Imperial Irrigation District to send up to 800,000 acre-feet of conserved Colorado River water annually to the Salton Sea as a temporary mitigation measure. This water came from conservation efforts such as canal lining and improved irrigation efficiency. The agreement specified that these mitigation flows would end after 15 years, and they officially stopped on December 31, 2017. As a result, no mitigation water was delivered to the Salton Sea beginning in 2018.
        As the shoreline recedes, vital wetlands and habitats for native and migratory birds are disappearing, endangering species that rely on the Sea during their seasonal journeys. But it’s not just the wildlife at risk.
The exposed playa of the Salton Sea has become a major source of toxic dust, severely affecting nearby communities—especially low-income, predominantly Latinx farmworker communities and Indigenous families. Childhood asthma rates in the region soar between 20–24%, double the California average, with hospitalizations far above norm. Studies link playa dust to lung inflammation, bronchitis, wheezing, chronic coughing, sinusitis, and even disrupted sleep in children.

 </p>
      </section>
     {/* Section 2: Soil */}
     <section className="about-Section" data-aos="fade-right">
        <h2 className="about-subtitle">Toxic Soil, Toxic Air</h2>
        <img
          src="https://cvep.com/wp-content/uploads/2023/06/Other-Crops-1536x1187.jpg"
          alt="Toxic Soil in Salton Sea"
          className="about-image"
        />
        <p className="about-text">
        <figure>
        <img
          src={farming}
          alt="Frida Arriaga spending the summer in Mexicali with her cousins"
          className="about-image"/>
          <figcaption>Arriaga Family picking grapes in Coachella (1986)</figcaption>
          

        </figure>
        The soil in the Salton Sea region emits more than 11 tons of nitrogen oxides (NOx) per day—the same amount as a busy freeway—creating smog-forming pollutants that harm air quality. According to Dr. Ian Faloona, a biometeorologist at UC Davis, “In the Salton Sea Air Basin—both in the Imperial and Coachella Valleys combined—at least one-third of all the pollutant gases in the air came from the soil” when sampled. Using two monitoring sites, Dr. Faloona and his team found that soil NOx emissions are 10 times higher than current estimates by California air regulators.
The main driver of these high emissions? Year-round farming activity. Heavy use of fertilizers, irrigation and rising temperatures are known to increase NOx soil emissions — all of which occur in the study area. The Imperial Valley is a major agricultural hub, home to over 400 farms producing more than 65 different crops. Dr. Faloona emphasizes that this study underscores the urgent need to better account for emissions from agricultural soils in order to protect air quality in both the Imperial and Coachella Valleys.
 </p>
      </section>

    {/* Section 3: Lithium */}
      <section className="about-Section" data-aos="fade-left">
        <h2 className="about-subtitle">Lithium Valley: Powering the Future from the Salton Sea</h2>
        <img
          src="https://cdn.motor1.com/images/mgl/VzMk1l/s1/california-salton-sea-lithium-reserves.webp"
          alt="Lithium Salton Sea"
          className="about-image"
        />
        <p className="about-text">
        The Salton Sea in California holds one of the most significant lithium reserves in the world—estimated to be worth up to $540 billion. 
According to recent analysis from the Lawrence Berkeley National Laboratory, the Salton Sea contains enough lithium to produce batteries for over 375 million electric vehicles (EVs). In fact, the area holds the fifth-largest lithium deposit globally and could generate enough lithium to support production of 5 million EV batteries each year.
Why is lithium so important? It’s a critical component in EV batteries, essential to building a 100% clean electric grid and transitioning California’s homes and industries away from fossil fuels.
In support of this effort, the U.S. Department of Energy recently announced a $1.36 billion loan to EnergySource Minerals for the construction and operation of its geothermal and lithium extraction facility in the region.
To ensure local benefits, Imperial County has introduced a tax on each ton of lithium extracted. Twenty percent of this revenue will go toward Salton Sea restoration efforts, while the remaining eighty percent will support Imperial County infrastructure and services.
        </p>
      </section>
      
  {/* Section 4: Salton Sea Conservancy */}
  <section className="about-Section" data-aos="fade-up-right">
        <h2 className="about-subtitle">A New Era: Salton Sea Conservancy</h2>
        <img
          src="https://pbs.twimg.com/media/GYmW5x1bsAA23Dp.jpg"
          alt="Lithium Salton Sea"
          className="about-image"
        />
        <p className="about-text">
        On August 30, 2024, the California State Senate passed Senate Bill 583 with bipartisan support. Authored by Senator Steve Padilla (D–San Diego) and co-authored by Assemblymember Eduardo Garcia (D–Coachella), the bill establishes the Salton Sea Conservancy to coordinate the state’s efforts to protect public health, support ecological restoration, and empower local stakeholders in the region.

The Salton Sea Conservancy will be California’s 11th state conservancy—and the first created in more than 15 years. This move marks a major step forward as the state commits unprecedented investments in Salton Sea restoration: over $250 million from the federal Inflation Reduction Act, $60 million from the Greenhouse Gas Reduction Fund, and an additional $170 million contingent on voter approval of the Safe Drinking Water, Wildfire Prevention, Drought Preparedness, and Clean Air Bond Act of 2024.

Senator Padilla emphasized the long-term significance of the legislation, stating:

“The Salton Sea Conservancy will be a permanent legacy government entity responsible for the restoration and management of the Salton Sea.”        </p>
      </section>

      <section className="about-Section" data-aos="fade-up-left">
  <h2 className="about-subtitle">Debated Proposal: Sea of Cortez Water Importation</h2>
  <img
    src="https://quirkycruise.com/wp-content/uploads/2020/09/Screen-Shot-2020-09-04-at-4.58.01-AM.png"
    alt="Sea of Cortez Map View"
    className="about-image"
  />
  <p className="about-text">
    Nathan White, CEO of AGGES Inc., has proposed a bold plan to import desalinated water from Mexico’s Sea of Cortez to refill the Salton Sea. The vision includes constructing a long-distance pipeline or canal system spanning hundreds of miles—an ambitious effort to address the region’s escalating environmental crisis and groundwater depletion.
    However, California’s Independent Review Panel rejected the proposal, citing prohibitively high costs—<em>estimated in the tens of billions of dollars</em>—along with significant environmental risks and extremely lengthy timelines  
    <a href="https://www.latimes.com/california/story/2022-10-05/panel-rejects-idea-of-filling-salton-sea-with-ocean-water?" target="_blank" rel="noopener noreferrer"> (latimes.com)</a>.

    <br /><br />
    As <strong>UC Santa Cruz professor Brent Haddad</strong>, who led the panel, stated:
    
    “It’s not feasible… The panel feels that the state should no longer consider water importation from the Sea of Cortez to restore the Salton Sea.”
    
     The panel’s summary further noted:

    <em>“The Sea of Cortez Import Concept was rejected… based on its high cost, environmental damage, minimal benefits to Mexico beyond construction and operations jobs, and potential that benefits would not be realized.”</em>
    <br /><br />
    Instead, the panel endorsed a more realistic strategy that combines a <strong>large-scale desalination facility at the Salton Sea</strong> with <strong>voluntary Colorado River water transfers</strong>, particularly through compensated fallowing in the Imperial Irrigation District. According to the report, this method is far more <em>cost-effective, faster to implement,</em> and <em>less environmentally damaging</em> than international importation:
    
    “This combination … is the Panel’s recommended approach to the long-term restoration of the Salton Sea via importation.”
  </p>
</section>

        







        </main>
);
} 