import { ArrowRight, Milk, Leaf, Snowflake, Network, ThermometerSun, Package, CalendarDays, Cross, ShoppingCart, Coffee, Globe, Check } from "lucide-react";
import { useState, type ReactNode } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";
import { sciencePapers } from "@/data/sciencePapers";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./information-pages.css";

const CDN = "https://pub-6206b6e3cb7a4d918837c1fff3ffc368.r2.dev/";
const powder = `${CDN}lyophilized_donkey_milk_plate_bkg.webp`;

function Page({ children }: { children: ReactNode }) {
  return <div className="information-page"><Navbar solid /><main>{children}</main><Footer /></div>;
}

export function SciencePage() {
  const { t } = useTranslation();
  const [researchOpen, setResearchOpen] = useState(false);
  const topics = [
    { key: "INGREDIENT", Icon: Milk, image: `${CDN}lyophilized_donkey_milk_glass_bkg.webp`, position: "center" },
    { key: "BOTANICAL", Icon: Leaf, image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663783644552/ePjzXSW5uHequDXcADS9Jc/satureja_herb-QX5CoNXzg8aA2rPGwarNsL.webp", position: "center" },
    { key: "PROCESS", Icon: Snowflake, image: powder, position: "right center" },
    { key: "FORMULATION", Icon: Network, image: `${CDN}Rtanj%20Wild%20Latte%20glass.webp`, position: "center" },
  ];
  return <Page>
    <section className="science-intro">
      <div className="container">
        <h1 className="info-heading">{t("SCIENCE.HEADING")}</h1>
        <div className="info-rule" />
        <div className="science-topics">
          {topics.map(({ key, Icon, image, position }) => <article className="science-topic" key={key}>
            <span className="info-icon"><Icon aria-hidden="true" strokeWidth={1} /></span>
            <h2>{t(`SCIENCE.${key}_TITLE`)}</h2>
            <p>{t(`SCIENCE.${key}_SUB`)}</p>
            <div className={`science-photo science-photo-${key.toLowerCase()}`}>
              <img src={image} alt={t(`SCIENCE.${key}_SUB`)} style={{ objectPosition: position }} />
            </div>
          </article>)}
        </div>
        <div className="science-action">
          <button type="button" className="info-button research-toggle" aria-expanded={researchOpen} aria-controls="science-research" onClick={() => setResearchOpen(open => !open)}>
            {t("SCIENCE.EXPLORE")}<ChevronDown size={19} aria-hidden="true" />
          </button>
        </div>
        <section id="science-research" className="science-research" hidden={!researchOpen} aria-labelledby="science-research-title">
          <h2 id="science-research-title" className="info-heading">{t("SCIENCE.RESEARCH_TITLE")}</h2>
          <p className="research-intro">{t("SCIENCE.RESEARCH_INTRO")}</p>
          <div className="research-grid">
            {sciencePapers.map(paper => <article className="research-paper" key={paper.id}>
              <p className="research-topic">{t(`SCIENCE.PAPERS.${paper.id}.TOPIC`)}</p>
              <span className="research-evidence">{t(`SCIENCE.PAPERS.${paper.id}.TYPE`)}</span>
              <h3 lang="en">{paper.title}</h3>
              <p className="research-publication">{paper.publication}</p>
              <p className="research-authors"><strong>{t("SCIENCE.AUTHORS")}: </strong>{paper.authors}</p>
              <p className="research-summary">{t(`SCIENCE.PAPERS.${paper.id}.SUMMARY`)}</p>
              <a href={paper.url} target="_blank" rel="noopener noreferrer" aria-label={`${t("SCIENCE.READ_PAPER")}: ${paper.title} (${t("SCIENCE.NEW_TAB")})`}>
                {t("SCIENCE.READ_PAPER")}<ExternalLink size={15} aria-hidden="true" />
              </a>
            </article>)}
          </div>
        </section>
      </div>
    </section>
    <section id="lyophilization" className="lyophilization-section" style={{ backgroundImage: `url('${powder}')` }}>
      <div className="container">
        <div className="lyophilization-content">
          <h2 className="info-heading">{t("SCIENCE.WHY")}</h2>
          <div className="info-rule" />
          <div className="lyophilization-benefits">
            {[ThermometerSun, Package, CalendarDays].map((Icon, index) => <article key={index}>
              <span className="info-icon"><Icon aria-hidden="true" strokeWidth={1} /></span>
              <h3>{t(`SCIENCE.BENEFIT_${index + 1}`)}</h3>
              <p>{t(`SCIENCE.BENEFIT_${index + 1}_DESC`)}</p>
            </article>)}
          </div>
          <p className="science-note"><Leaf aria-hidden="true" strokeWidth={1} />{t("SCIENCE.NOTE")}</p>
        </div>
      </div>
    </section>
  </Page>;
}

export function PartnersPage() {
  const { t } = useTranslation();
  const channels = [{ key: "PHARMACIES", Icon: Cross }, { key: "GROCERY", Icon: ShoppingCart }, { key: "COFFEE", Icon: Coffee }, { key: "WELLNESS", Icon: Leaf }, { key: "DTC", Icon: Globe }];
  return <Page>
    <section className="partners-section" style={{ backgroundImage: `url('${CDN}partner_with_immunasina_bkg.webp')` }}>
      <div className="container partners-layout">
        <div className="partners-copy">
          <h1 className="info-heading">{t("PARTNERS.HEADING")}</h1>
          <div className="info-rule" />
          <p className="partners-intro">{t("PARTNERS.INTRO")}</p>
          <h2>{t("PARTNERS.ADVANTAGES")}</h2>
          <ul className="partner-advantages">
            {Array.from({ length: 8 }, (_, index) => <li key={index}><Check aria-hidden="true" size={18} strokeWidth={1.3} /><span>{t(`PARTNERS.ADVANTAGE_${index + 1}`)}</span></li>)}
          </ul>
        </div>
        <div className="partner-channels">
          <p>{t("PARTNERS.CHANNELS")}</p>
          <ul>
            {channels.map(({ key, Icon }) => <li key={key}><Icon aria-hidden="true" strokeWidth={1} /><span>{t(`PARTNERS.${key}`)}</span></li>)}
          </ul>
          <a className="info-button" href={`mailto:${t("FOOTER.CONTACT_EMAIL")}?subject=${encodeURIComponent(t("PARTNERS.EMAIL_SUBJECT"))}`}>{t("PARTNERS.CTA")}<ArrowRight size={19} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  </Page>;
}
