import ContactItem from "../ContactItem";
import SectionTitle from "../SectionTitle";

import { BrandingProps, InformationProps } from "@/types";

const Branding = ({
  branding,
  contact,
}: {
  branding: BrandingProps;
  contact: InformationProps["contact"];
}) => {
  return (
    <>
      <section className="flex min-h-[70vh] flex-col justify-center gap-12 py-16 md:min-h-[75vh] md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_380px] lg:items-center">
          <div className="flex flex-col gap-8">
            <span className="text-sm font-medium tracking-wide text-PRIMARY_LIGHT">
              {branding.hero.eyebrow}
            </span>
            <h1 className="max-w-4xl py-0 text-5xl font-semibold leading-[1.15] tracking-tight text-white md:text-7xl">
              {branding.hero.title.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p className="max-w-2xl whitespace-pre-line text-lg leading-relaxed text-GRAY_LIGHT md:text-xl">
              {branding.hero.description}
            </p>
            
            <div className="mt-4 flex flex-wrap gap-4">
              {contact.map((contactItem) => (
                <ContactItem
                  key={contactItem.id}
                  className="rounded-md border border-GRAY_EXTRAHEAVY bg-[#151a1f] px-4 py-2.5 text-sm text-GRAY_LIGHT transition-colors hover:border-PRIMARY_HEAVY hover:text-PRIMARY_LIGHT"
                  {...contactItem}
                >
                  {contactItem.name}
                </ContactItem>
              ))}
            </div>
          </div>

          <aside className="hidden rounded-xl border border-GRAY_EXTRAHEAVY bg-[#0a0d10] p-8 shadow-2xl lg:block relative overflow-hidden h-[400px]">
            {/* Realtime scanning effect */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-PRIMARY_HEAVY/50 shadow-[0_0_15px_#2dd4bf] animate-[pulse_3s_ease-in-out_infinite]"></div>

            <div className="mb-1 flex items-center justify-between z-10 relative">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-PRIMARY_LIGHT opacity-75"></span>
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-PRIMARY_HEAVY"></span>
                </span>
                <span className="text-xs font-bold tracking-[0.2em] text-PRIMARY_LIGHT uppercase">
                  Active Research Node
                </span>
              </div>
              <span className="text-[10px] font-mono text-GRAY_LIGHT opacity-50">SYS.ON</span>
            </div>
            
            <div className="relative flex flex-col items-center gap-10 py-4 z-10">
              <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-PRIMARY_HEAVY bg-[#111] shadow-[0_0_30px_rgba(45,212,191,0.15)]">
                <div className="absolute inset-0 rounded-full border border-PRIMARY_LIGHT/30 border-t-PRIMARY_LIGHT animate-[spin_4s_linear_infinite]"></div>
                <span className="text-[10px] font-bold text-white tracking-widest">DATA</span>
              </div>
              
              {/* Vertical Line */}
              <div className="absolute top-[80px] bottom-[60px] w-px bg-gradient-to-b from-PRIMARY_HEAVY via-PRIMARY_LIGHT to-transparent">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-8 bg-white rounded-full shadow-[0_0_10px_#fff] animate-pulse"></div>
              </div>
              
              <div className="z-10 grid w-full grid-cols-2 gap-x-16 gap-y-8">
                <div className="flex justify-end relative group">
                  <div className="absolute right-[-32px] top-1/2 h-px w-8 bg-PRIMARY_HEAVY/40"></div>
                  <div className="rounded border border-GRAY_EXTRAHEAVY bg-BLACK px-4 py-2 text-[10px] font-medium tracking-wider text-GRAY_LIGHT transition-colors group-hover:border-PRIMARY_HEAVY group-hover:text-PRIMARY_LIGHT shadow-sm">CARETOC RX</div>
                </div>
                <div className="flex justify-start relative group">
                  <div className="absolute left-[-32px] top-1/2 h-px w-8 bg-PRIMARY_HEAVY/40"></div>
                  <div className="rounded border border-GRAY_EXTRAHEAVY bg-BLACK px-4 py-2 text-[10px] font-medium tracking-wider text-GRAY_LIGHT transition-colors group-hover:border-PRIMARY_HEAVY group-hover:text-PRIMARY_LIGHT shadow-sm">LIFESTYLE</div>
                </div>
                <div className="flex justify-end relative group">
                  <div className="absolute right-[-32px] top-1/2 h-px w-8 bg-PRIMARY_HEAVY/40"></div>
                  <div className="rounded border border-GRAY_EXTRAHEAVY bg-BLACK px-4 py-2 text-[10px] font-medium tracking-wider text-GRAY_LIGHT transition-colors group-hover:border-PRIMARY_HEAVY group-hover:text-PRIMARY_LIGHT shadow-sm">SYMPTOMS</div>
                </div>
                <div className="flex justify-start relative group">
                  <div className="absolute left-[-32px] top-1/2 h-px w-8 bg-PRIMARY_HEAVY/40"></div>
                  <div className="rounded border border-GRAY_EXTRAHEAVY bg-BLACK px-4 py-2 text-[10px] font-medium tracking-wider text-GRAY_LIGHT transition-colors group-hover:border-PRIMARY_HEAVY group-hover:text-PRIMARY_LIGHT shadow-sm">NUTRITION</div>
                </div>
              </div>
              
              <div className="z-10 mt-6 rounded border border-PRIMARY_HEAVY bg-PRIMARY_HEAVY/10 px-8 py-3 text-[11px] font-bold tracking-widest text-PRIMARY_LIGHT shadow-[0_0_20px_rgba(45,212,191,0.1)] backdrop-blur-sm">
                RISK_DETECTED
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Quote Break 1 */}
      {branding.quotes && branding.quotes.length > 0 && (
        <section className="py-24 md:py-32 flex justify-center">
          <h2 className="text-center text-3xl md:text-5xl font-light leading-tight text-white whitespace-pre-line tracking-tight opacity-90">
            {branding.quotes[0]}
          </h2>
        </section>
      )}

      <section className="py-12 md:py-16">
        <SectionTitle>Founder Profile</SectionTitle>
        <div className="flex flex-col gap-10">
          <div className="border-l-2 border-PRIMARY_HEAVY pl-6">
            <p className="text-xl md:text-2xl leading-relaxed text-white font-medium">
              "의료 현장에서 반복적으로 보였던 것은<br />
              정보 부족이 아니라 '관계 해석'의 공백이었습니다."
            </p>
          </div>
          
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl leading-snug text-white md:text-4xl font-medium tracking-tight">
              {branding.about.title}
            </h3>
            <div className="flex flex-col gap-4 text-lg leading-relaxed text-GRAY_LIGHT">
              {branding.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <SectionTitle>Problem Definition</SectionTitle>
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div className="flex flex-col gap-4">
            <h3 className="text-3xl leading-snug text-white md:text-4xl font-medium tracking-tight">
              {branding.problem.title}
            </h3>
            <p className="text-lg leading-relaxed text-GRAY_LIGHT">
              {branding.problem.description}
            </p>
          </div>

          <div className="flex flex-col gap-0 pt-4">
            {branding.problem.flow.map((item, index) => (
              <div key={item.id} className="group relative flex items-start gap-6">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-GRAY_EXTRAHEAVY bg-BLACK text-sm font-semibold text-GRAY_LIGHT group-hover:border-PRIMARY_HEAVY group-hover:text-PRIMARY_LIGHT transition-colors">
                    {index + 1}
                  </div>
                  {index < branding.problem.flow.length - 1 && (
                    <div className="my-2 h-16 w-px bg-GRAY_EXTRAHEAVY"></div>
                  )}
                </div>
                <article className="flex-1 pb-8">
                  <h4 className="mb-2 text-xl font-medium text-white">{item.title}</h4>
                  <p className="text-base leading-relaxed text-GRAY_LIGHT">{item.description}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Break 2 */}
      {branding.quotes && branding.quotes.length > 1 && (
        <section className="py-32 md:py-56 flex justify-center px-4 w-full overflow-hidden relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#111] via-transparent to-transparent opacity-80"></div>
          <h2 className="relative z-10 text-center text-4xl sm:text-6xl md:text-[5.5rem] font-black leading-[1.1] text-white whitespace-pre-line tracking-tighter opacity-95 drop-shadow-2xl">
            {branding.quotes[1]}
          </h2>
        </section>
      )}

      <section className="py-12 md:py-16">
        <SectionTitle>Thinking Model</SectionTitle>
        <div className="grid gap-10">
          <div className="flex flex-col gap-4">
            <h3 className="text-3xl leading-snug text-white md:text-4xl font-medium tracking-tight">
              {branding.thinkingModel.title}
            </h3>
            <p className="text-lg leading-relaxed text-GRAY_LIGHT">
              {branding.thinkingModel.description}
            </p>
          </div>

          {/* Tree Diagram */}
          <div className="my-6 rounded-xl border border-GRAY_EXTRAHEAVY bg-[#0f1318] p-10 hidden md:block">
            <div className="flex items-center justify-center gap-16">
              {/* Left nodes */}
              <div className="flex flex-col gap-4 relative">
                {/* Connecting lines */}
                <div className="absolute right-[-32px] top-1/2 h-[220px] w-8 border-y border-r border-GRAY_EXTRAHEAVY -translate-y-1/2 rounded-r-lg"></div>
                <div className="absolute right-[-32px] top-1/2 h-px w-8 bg-GRAY_EXTRAHEAVY"></div>
                
                {["환자 상태", "약물 이력", "생활 습관", "증상", "영양/위험 신호"].map((node) => (
                  <div key={node} className="z-10 w-32 rounded-md border border-GRAY_EXTRAHEAVY bg-BLACK px-4 py-3 text-center text-sm font-medium text-GRAY_LIGHT shadow-sm">
                    {node}
                  </div>
                ))}
              </div>
              
              {/* Arrow */}
              <div className="z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#151a1f] border border-GRAY_EXTRAHEAVY text-PRIMARY_LIGHT shadow-sm">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </div>
              
              {/* Right nodes */}
              <div className="flex flex-col gap-6 relative">
                <div className="absolute left-[-32px] top-1/2 h-[130px] w-8 border-y border-l border-PRIMARY_HEAVY -translate-y-1/2 rounded-l-lg opacity-50"></div>
                <div className="absolute left-[-32px] top-1/2 h-px w-8 bg-PRIMARY_HEAVY opacity-50"></div>
                
                <div className="z-10 w-40 rounded-lg border border-PRIMARY_HEAVY bg-[#151a1f] px-6 py-4 text-center text-base font-semibold tracking-wide text-PRIMARY_LIGHT shadow-[0_0_15px_rgba(45,212,191,0.1)]">
                  Context
                </div>
                <div className="z-10 w-40 rounded-lg border border-PRIMARY_HEAVY bg-[#151a1f] px-6 py-4 text-center text-base font-semibold tracking-wide text-PRIMARY_LIGHT shadow-[0_0_15px_rgba(45,212,191,0.1)]">
                  Relationship
                </div>
                <div className="z-10 w-40 rounded-lg border border-PRIMARY_HEAVY bg-[#151a1f] px-6 py-4 text-center text-base font-semibold tracking-wide text-PRIMARY_LIGHT shadow-[0_0_15px_rgba(45,212,191,0.1)]">
                  Signal
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {branding.thinkingModel.layers.map((item, index) => (
              <article
                key={item.id}
                className="interactive-card rounded-xl border border-GRAY_EXTRAHEAVY bg-[#151a1f] p-6 hover:border-PRIMARY_HEAVY transition-colors duration-300"
              >
                <span className="mb-6 block text-sm font-semibold tracking-wider text-PRIMARY_LIGHT">
                  0{index + 1}
                </span>
                <h4 className="pb-3 text-xl font-medium text-white">{item.title}</h4>
                <p className="text-base leading-relaxed text-GRAY_LIGHT">
                  {item.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            {branding.thinkingModel.keywords.map((item) => (
              <span
                key={item}
                className="rounded-full border border-GRAY_EXTRAHEAVY bg-BLACK px-4 py-1.5 text-sm font-medium text-GRAY_LIGHT"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Huge System Architecture Visual */}
      <section className="py-16 md:py-32 overflow-hidden hidden xl:block">
        <div className="flex flex-col items-center justify-center gap-16 border-y border-GRAY_EXTRAHEAVY py-32 bg-[#0a0d10] relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-PRIMARY_HEAVY/10 via-transparent to-transparent opacity-50"></div>
          
          <h3 className="text-center text-sm font-semibold tracking-[0.2em] text-PRIMARY_LIGHT uppercase z-10">
            Medical Data Architecture
          </h3>

          <div className="relative flex items-center justify-center w-full max-w-7xl mx-auto px-8 z-10">
            {/* The overwhelming diagram */}
            <div className="flex w-full items-center justify-between gap-4">
              
              {/* Node 1: Raw Data */}
              <div className="flex flex-col gap-4 relative z-10 w-[280px]">
                <div className="rounded-2xl border border-GRAY_EXTRAHEAVY bg-BLACK p-8 shadow-2xl">
                  <div className="mb-6 text-xs font-bold text-GRAY_LIGHT tracking-wider">01. RAW DATA</div>
                  <div className="flex flex-wrap gap-2">
                    {["처방 이력", "검진 수치", "영양제", "생활습관", "기저 질환"].map(t => (
                      <span key={t} className="rounded border border-GRAY_EXTRAHEAVY px-2.5 py-1.5 text-[11px] text-GRAY_LIGHT">{t}</span>
                    ))}
                  </div>
                  <div className="mt-8 text-base font-semibold text-white">단절된 환자 정보</div>
                </div>
              </div>

              {/* Connecting Lines */}
              <div className="flex-1 h-px bg-gradient-to-r from-GRAY_EXTRAHEAVY via-PRIMARY_HEAVY to-PRIMARY_HEAVY relative z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-PRIMARY_HEAVY blur-[4px] animate-pulse"></div>
              </div>

              {/* Node 2: Knowledge Graph */}
              <div className="flex flex-col gap-4 relative z-10 w-[380px]">
                <div className="rounded-3xl border-2 border-PRIMARY_HEAVY bg-[#12161b] p-10 shadow-[0_0_50px_rgba(45,212,191,0.15)] transform scale-105">
                  <div className="mb-6 text-xs font-bold text-PRIMARY_LIGHT tracking-wider text-center">02. STRUCTURAL INTERPRETATION</div>
                  <div className="flex justify-center my-8">
                    {/* Abstract Graph Icon */}
                    <div className="relative w-40 h-40">
                      <div className="absolute top-0 left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
                      <div className="absolute bottom-6 left-0 w-3 h-3 rounded-full bg-PRIMARY_LIGHT"></div>
                      <div className="absolute bottom-6 right-0 w-3 h-3 rounded-full bg-PRIMARY_LIGHT"></div>
                      <div className="absolute top-1/2 left-1/2 w-5 h-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-PRIMARY_HEAVY shadow-[0_0_15px_rgba(45,212,191,0.8)]"></div>
                      
                      {/* Edges */}
                      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                        <line x1="50" y1="10" x2="50" y2="50" stroke="#2dd4bf" strokeWidth="2" opacity="0.6"/>
                        <line x1="15" y1="75" x2="50" y2="50" stroke="#2dd4bf" strokeWidth="2" opacity="0.6"/>
                        <line x1="85" y1="75" x2="50" y2="50" stroke="#2dd4bf" strokeWidth="2" opacity="0.6"/>
                        <line x1="15" y1="75" x2="85" y2="75" stroke="#2dd4bf" strokeWidth="1" strokeDasharray="4 4" opacity="0.4"/>
                      </svg>
                    </div>
                  </div>
                  <div className="text-center text-2xl font-bold text-white tracking-tight">Knowledge Graph</div>
                  <div className="mt-3 text-center text-sm text-GRAY_LIGHT">약물-건기식-질환 다중 관계망 분석</div>
                </div>
              </div>

              {/* Connecting Lines */}
              <div className="flex-1 h-px bg-gradient-to-r from-PRIMARY_HEAVY via-PRIMARY_LIGHT to-white relative z-0">
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-PRIMARY_LIGHT blur-[6px] animate-pulse"></div>
              </div>

              {/* Node 3: Result */}
              <div className="flex flex-col gap-4 relative z-10 w-[280px]">
                <div className="rounded-2xl border border-white bg-white text-BLACK p-8 shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                  <div className="mb-6 text-xs font-bold text-GRAY_HEAVY tracking-wider">03. PREVENTIVE ACTION</div>
                  <div className="flex flex-col gap-3">
                    <div className="rounded bg-[#f0f0f0] px-4 py-2.5 text-sm font-semibold">충돌 위험 사전 경고</div>
                    <div className="rounded bg-[#f0f0f0] px-4 py-2.5 text-sm font-semibold">설명 가능한 근거 제공</div>
                    <div className="rounded bg-[#f0f0f0] px-4 py-2.5 text-sm font-semibold">안전한 영양 개입</div>
                  </div>
                  <div className="mt-8 text-base font-black text-BLACK border-t border-GRAY_HEAVY/20 pt-5">AI Safety Filtering</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <SectionTitle>Operating Principles</SectionTitle>
        <div className="grid gap-10 md:grid-cols-2">
          {branding.principles.map((item) => (
            <article
              key={item.id}
              className="interactive-line border-l-2 border-GRAY_EXTRAHEAVY pl-6 hover:border-PRIMARY_LIGHT transition-colors duration-300"
            >
              <h3 className="pb-3 text-2xl font-medium text-white">{item.title}</h3>
              <p className="text-base leading-relaxed text-GRAY_LIGHT">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Branding;
