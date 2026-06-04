import { useEffect } from "react";

import { BrandingProps, InformationProps } from "@/types";

import ContactItem from "../ContactItem";
import SectionTitle from "../SectionTitle";

const Branding = ({
  branding,
  contact,
}: {
  branding: BrandingProps;
  contact: InformationProps["contact"];
}) => {
  const storyItems = branding.problem.flow;
  const workItems = branding.thinkingModel.layers;
  const careItems = branding.architectureViews ?? [];
  const strengthItems = branding.technicalProof?.groups ?? [];
  const timelineItems = branding.trajectory?.stages ?? [];
  const proofOfWorkItems = branding.proofOfWork?.items ?? [];
  const proofOfWorkAffiliations = branding.proofOfWork?.affiliations ?? [];
  const contactCopy = branding.quotes ?? [];

  useEffect(() => {
    const items = Array.from(document.querySelectorAll(".reveal-item"));
    if (!items.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      { rootMargin: "-8% 0px -8% 0px", threshold: 0.12 }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="founder-page">
      <section className="founder-hero">
        <div className="founder-hero__media" aria-hidden="true">
          {branding.hero.imageSrc && <img src={branding.hero.imageSrc} alt="" />}
        </div>
        <div className="founder-hero__inner">
          <div className="founder-hero__copy reveal-item">
            <p className="mb-6 text-sm font-semibold tracking-wide text-[#059669]">
              {branding.hero.eyebrow}
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] text-[#111827] md:text-7xl">
              {branding.hero.title.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p className="mt-8 max-w-3xl whitespace-pre-line text-xl leading-9 text-[#374151]">
              {branding.hero.description}
            </p>

            <div className="contact-actions mt-9">
              {contact.map((contactItem) => (
                <ContactItem
                  key={contactItem.id}
                  className={`interactive-button rounded-md border px-4 py-2.5 text-sm font-medium ${
                    contactItem.name === "Email"
                      ? "border-[#111827] bg-[#111827] text-white"
                      : "border-[#d1d5db] bg-white text-[#111827]"
                  }`}
                  {...contactItem}
                >
                  {contactItem.name}
                </ContactItem>
              ))}
            </div>
          </div>

          <aside className="founder-hero__signals reveal-item">
            <p>Focus</p>
            <strong>{branding.oneLine}</strong>
            <div>
              {branding.hero.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section id="about" className="founder-section">
        <SectionTitle>About Me</SectionTitle>
        <div className="grid gap-9 lg:grid-cols-[0.75fr_1.25fr]">
          <h2 className="reveal-item whitespace-pre-line text-3xl font-medium leading-snug text-[#111827] md:text-4xl">
            {branding.about.title}
          </h2>
          <div className="grid gap-5">
            {branding.about.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="reveal-item whitespace-pre-line text-lg leading-8 text-[#374151]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="founder-section border-y border-[#e5e7eb]">
        <div className="grid gap-6 md:grid-cols-3">
          {branding.proofPoints?.map((point) => (
            <article key={point.id} className="reveal-item founder-proof">
              <span>{point.label}</span>
              <h3>{point.title}</h3>
              <p>{point.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="done" className="founder-section">
        <SectionTitle>What I Have Done</SectionTitle>
        <div className="mb-10 grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
          <h2 className="reveal-item whitespace-pre-line text-3xl font-medium leading-snug text-[#111827] md:text-4xl">
            {branding.proofOfWork?.title}
          </h2>
          <p className="reveal-item text-lg leading-8 text-[#374151]">
            {branding.proofOfWork?.description}
          </p>
        </div>
        {proofOfWorkAffiliations.length > 0 && (
          <div className="work-marquee reveal-item" aria-label="거쳐온 회사">
            <div className="work-marquee__track">
              {[...proofOfWorkAffiliations, ...proofOfWorkAffiliations].map(
                (company, index) => (
                  <span key={`${company}-${index}`}>{company}</span>
                )
              )}
            </div>
          </div>
        )}
        <div className="done-showcase">
          <div className="done-list">
            {proofOfWorkItems.map((item) => (
              <article key={item.id} className="done-item reveal-item">
                {item.imageSrc && (
                  <div className="done-item__visual" aria-hidden="true">
                    <img src={item.imageSrc} alt="" />
                  </div>
                )}
                <div className="done-item__meta">
                  <span>{item.label}</span>
                  <small>{item.period}</small>
                </div>
                <section>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div>
                    {item.items.map((keyword) => (
                      <em key={keyword}>{keyword}</em>
                    ))}
                  </div>
                </section>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="story" className="founder-section">
        <SectionTitle>My Story</SectionTitle>
        <div className="mb-10">
          <h2 className="reveal-item whitespace-pre-line text-3xl font-medium leading-snug text-[#111827] md:text-4xl">
            {branding.problem.title}
          </h2>
          <p className="reveal-item mt-4 text-lg leading-8 text-[#374151]">
            {branding.problem.description}
          </p>
        </div>
        <div className="story-line">
          {storyItems.map((item, index) => (
            <article key={item.id} className="reveal-item story-line__item">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="work" className="founder-section border-y border-[#e5e7eb]">
        <SectionTitle>How I Work</SectionTitle>
        <div className="mb-10 ">
          <h2 className="reveal-item whitespace-pre-line text-3xl font-medium leading-snug text-[#111827] md:text-4xl">
            {branding.thinkingModel.title}
          </h2>
          <p className="reveal-item mt-4 text-lg leading-8 text-[#374151]">
            {branding.thinkingModel.description}
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {workItems.map((item) => (
            <article key={item.id} className="reveal-item founder-panel">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="care" className="founder-section founder-section--ambient care-section">
        <SectionTitle>What I Care About</SectionTitle>
        {branding.architectureVisual && (
          <div className="ambient-visual care-ambient reveal-item" aria-hidden="true">
            <img src={branding.architectureVisual.imageSrc} alt="" aria-hidden="true" />
          </div>
        )}
        <div className="care-map">
          <div className="care-map__copy reveal-item">
            <h2>{branding.architectureIntro?.title}</h2>
            <p>{branding.architectureIntro?.description}</p>
          </div>
          <div className="care-lens-list">
            {careItems.map((item) => (
              <article key={item.id} className="reveal-item care-lens">
                <span>{item.label}</span>
                <section>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div>
                    {item.items.map((keyword) => (
                      <em key={keyword}>{keyword}</em>
                    ))}
                  </div>
                </section>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="strengths" className="founder-section border-y border-[#e5e7eb]">
        <SectionTitle>Strengths</SectionTitle>
        <div className="mb-10">
          <h2 className="reveal-item whitespace-pre-line text-3xl font-medium leading-snug text-[#111827] md:text-4xl">
            {branding.technicalProof?.title}
          </h2>
          <p className="reveal-item mt-4 text-lg leading-8 text-[#374151]">
            {branding.technicalProof?.description}
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {strengthItems.map((item) => (
            <article key={item.id} className="reveal-item strength-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div>
                {item.items.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="timeline" className="founder-section">
        <SectionTitle>Timeline</SectionTitle>
        <div className="mb-10 ">
          <h2 className="reveal-item whitespace-pre-line text-3xl font-medium leading-snug text-[#111827] md:text-4xl">
            {branding.trajectory?.title}
          </h2>
          <p className="reveal-item mt-4 text-lg leading-8 text-[#374151]">
            {branding.trajectory?.description}
          </p>
        </div>
        <div className="timeline-list">
          {timelineItems.map((item) => (
            <article key={item.id} className="reveal-item timeline-item">
              <div>
                <span>{item.period}</span>
                <small>{item.label}</small>
              </div>
              <section>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </section>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="founder-contact reveal-item">
        <div>
          <SectionTitle>Contact</SectionTitle>
          <h2>커피챗처럼 가볍게 이야기해도 좋습니다.</h2>
          {contactCopy.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        <div className="contact-actions">
          {contact.map((contactItem) => (
            <ContactItem
              key={contactItem.id}
              className="interactive-button rounded-md border border-[#111827]/15 bg-white px-4 py-2.5 text-sm font-medium text-[#111827]"
              {...contactItem}
            >
              {contactItem.name}
            </ContactItem>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Branding;
