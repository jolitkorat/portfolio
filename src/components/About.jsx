import { useRef, useState, useEffect } from "react";
import StatItem from "./StatItem";
import appDev from "/assets/app-development.png";
import software from "/assets/software.png";
import cloudMigration from "/assets/cloud-migration.png";

const SERVICES = [
  { icon: software,       name: "Website Development" },
  { icon: appDev,         name: "App Development" },
  { icon: cloudMigration, name: "Website Hosting" },
];

const STATS = [
  { target: 10, sym: "+", label: "Completed<br/>Projects" },
  { target: 99,  sym: "%", label: "Client<br/>Satisfaction" },
  { target: 1,  sym: "+", label: "Years of<br/>Experience" },
];

export default function About() {
  const statsRef = useRef(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about" id="about">

      {/* Left: Services */}
      <div className="services-col">
        <div className="services-vline" />
        {SERVICES.map((svc, i) => (
          <div key={svc.name}>
            {i > 0 && <div className="service-dot" />}
            <div className="service-entry">
              <div className="service-icon">
                <img src={svc.icon} alt={svc.name} />
              </div>
              <span className="service-name">{svc.name}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Right: About text + stats */}
      <div className="about-col">
        <h2 className="about-title">About me</h2>
        <p className="about-desc">
          I believe great software is built through continuous learning,
          clear communication, and understanding client needs. My goal is
          to create reliable, modern, and impactful solutions that help 
          businesses and individuals grow with confidence.
        </p>

        <div className="stats-row" ref={statsRef}>
          {STATS.map((stat) => (
            <StatItem
              key={stat.label}
              target={stat.target}
              sym={stat.sym}
              label={stat.label}
              triggered={triggered}
            />
          ))}
        </div>
      </div>

    </section>
  );
}
