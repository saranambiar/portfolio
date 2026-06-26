import Image from "next/image";
import type { StaticImageData } from "next/image";
import Link from "next/link";
import {
  FaEdge,
  FaWindows,
} from "react-icons/fa";
import {
  SiApple,
  SiArc,
  SiBrave,
  SiFirefoxbrowser,
  SiGooglechrome,
  SiLinux,
  SiSafari,
} from "react-icons/si";
import profilePhoto from "../sara-photo.jpg";
import vcLogo from "../assets/16vc.png";
import clefLogo from "../assets/clef.png";
import cgpaLogo from "../assets/pict-cgpa.png";
import iitbLogo from "../assets/iitb.png";
import sihLogo from "../assets/SIH.png";
import mirageLogo from "../assets/logo.png";
import ycLogo from "../assets/yc.png";
import { getArticles, type Article } from "@/lib/articles";

const links = {
  mirage: "https://www.trymirage.app/",
  linkedin: "https://www.linkedin.com/in/sara-nambiar/",
  x: "https://x.com/sara_nambiar",
  github: "https://github.com/saranambiar/",
  paper: "https://ceur-ws.org/Vol-4038/paper_182.pdf",
  email: "mailto:nambiar.sara@gmail.com",
};

const heroLinks = [
  { label: "LinkedIn", href: links.linkedin, icon: LinkedinIcon },
  { label: "X", href: links.x, icon: TwitterBirdIcon },
  { label: "GitHub", href: links.github, icon: GithubIcon },
  { label: "Email", href: links.email, icon: MailIcon },
];

const workCards = [
  {
    title: "AI NETRA",
    meta: "Froncort.AI",
    description:
      "Agentic public health AI platform built to combat TB in India. Connected outbreak prediction to diagnostic supply optimization. 55.2% reduction in screening effort. 54.8% reduction in costs. Built with FIND, supported by Google.org. Deployed with Maharashtra State Government. Demoed at India AI Impact Summit 2026.",
    tags: ["Healthcare AI", "Agentic Systems", "Google.org"],
  },
  {
    title: "Edge Patient Monitoring",
    meta: "IIIT Hyderabad",
    description:
      "Multimodal edge AI pipeline for real-time patient deterioration detection in general wards. Built with custom agentic harnesses and MedGemma, quantized for low-cost hardware.",
    tags: ["Edge AI", "Research", "Clinical"],
  },
];

const projectCards = [
  {
    title: "Nirikshan SahAI",
    meta: "Smart India Hackathon 2024 - 1st Place",
    description:
      "End-to-end automation platform for AICTE college inspections. Document verification, vision-based infrastructure assessment, automated compliance reports. Reduced weeks of manual work to days. Won 1st place among 4.92 lakh participants, Government of India.",
    tags: ["NLP", "Computer Vision", "Government", "1st Place"],
  },
  {
    title: "Mercury AI",
    meta: "IIT Bombay TechFest 2024 - 1st Place",
    description:
      "Intelligent knowledge platform making siloed organizational information fully queryable. 3-layer search architecture. 68% improvement in knowledge transfer speed. Recognized by Marsh McLennan leadership.",
    tags: ["RAG", "Enterprise", "1st Place"],
  },
];

type RecognitionItem = {
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
  image?: StaticImageData;
  mark?: string;
};

const recognition: RecognitionItem[] = [
  { label: "YC Startup School", image: ycLogo },
  { label: "16VC Summer Founder Fellowship", image: vcLogo },
  { label: "Smart India Hackathon 2024 - 1st Place", image: sihLogo },
  { label: "IIT Bombay TechFest 2024 - 1st Place", image: iitbLogo },
  { label: "CLEF 2025 Madrid", image: clefLogo },
  { label: "CGPA 9.65", image: cgpaLogo },
];

const browserChips = [
  { label: "Chrome", icon: SiGooglechrome },
  { label: "Safari", icon: SiSafari },
  { label: "Firefox", icon: SiFirefoxbrowser },
  { label: "Arc", icon: SiArc },
  { label: "Edge", icon: FaEdge },
  { label: "Brave", icon: SiBrave },
  { label: "macOS", icon: SiApple },
  { label: "Windows", icon: FaWindows },
  { label: "Linux", icon: SiLinux },
];
const movingSites = [
  "gmail.com",
  "reddit.com",
  "github.com",
  "linkedin.com",
  "twitter.com",
  "notion.com",
  "figma.com",
  "spotify.com",
];
const mirageVideos = [
  { label: "Podcast YouTube", src: "/podcast-clip-v3.mp4" },
  { label: "Keyboard-first Gmail", src: "/gmail-clip-final.mp4" },
];

export default function Home() {
  const articles = getArticles();

  return (
    <main className="site-shell min-h-screen bg-[var(--background)] text-[var(--ink)]">
      <div className="mx-auto flex max-w-[960px] flex-col gap-24 px-6 py-8 sm:py-10">
        <Hero />
        <CurrentlyBuilding />
        <Work />
        <Projects />
        <Research />
        <Writing articles={articles} />
        <Recognition />
        <Footer />
      </div>
    </main>
  );
}

function Hero() {
  return (
    <section className="flex flex-col items-center pt-8 text-center sm:pt-14">
      <Image
        src={profilePhoto}
        alt="Sara Nambiar"
        width={136}
        height={136}
        priority
        className="h-[136px] w-[136px] rounded-full border-2 border-[var(--border)] object-cover shadow-[0_8px_24px_rgba(26,26,26,0.08)]"
      />
      <h1 className="mt-7 text-5xl font-semibold leading-none tracking-[-0.06em] text-[var(--ink)] sm:text-7xl">
        Sara Nambiar
      </h1>
      <p className="mt-5 max-w-none text-lg leading-8 text-[var(--muted)] sm:whitespace-nowrap sm:text-2xl">
        20 year old CS student, AI systems builder. Co-founder, Mirage.
      </p>
      <p className="mt-5 max-w-[540px] text-sm leading-7 text-[var(--muted)] sm:text-base">
        I build systems that work in places that actually need them - from public health
        infrastructure to the personal internet.
      </p>
      <div className="mt-9 grid w-full max-w-[760px] grid-cols-2 gap-4 sm:grid-cols-4">
        {heroLinks.map((link) => (
          <TextLink key={link.label} href={link.href} icon={link.icon}>
            {link.label}
          </TextLink>
        ))}
      </div>
    </section>
  );
}

function CurrentlyBuilding() {
  return (
    <Section
      label="Currently Building"
      title="Software that adapts itself to the user."
      description="Mirage turns plain-English intent into persistent website transformations."
      accent="coral"
    >
      <PaperCard className="overflow-hidden p-0">
        <div className="border-b border-[#050505] bg-[#050505] px-7 py-5 sm:px-9">
          <div className="flex items-center justify-between gap-4">
            <Image src={mirageLogo} alt="Mirage" className="h-20 w-auto object-contain" />
            <a
              href={links.mirage}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[var(--ink)] transition-colors hover:text-[var(--coral)]"
            >
              Visit Mirage
              <ArrowIcon />
            </a>
          </div>
        </div>
        <div className="grid gap-0 lg:grid-cols-2">
          <div className="flex flex-col p-7 sm:p-9">
            <Badge tone="coral">Mirage · trymirage.app</Badge>
            <h2 className="mt-5 max-w-2xl text-4xl font-semibold leading-[1] tracking-[-0.055em] text-[var(--ink)] sm:text-5xl">
              The internet looks the same for everyone. It shouldn&apos;t.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              Mirage lets anyone reshape any website into their own version of it using AI -
              not themes, not CSS. AI rebuilding the interface itself, permanently.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              <Tag>16VC Summer Founder Fellowship</Tag>
              <Tag tone="coral">Co-founder</Tag>
            </div>
          </div>
          <div className="border-t border-[var(--border)] bg-[#F7F5F1] p-6 lg:border-l lg:border-t-0">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--coral)]">
              Works everywhere
            </p>
            <h3 className="mt-3 max-w-xl text-3xl font-semibold leading-tight tracking-[-0.04em] text-[var(--ink)]">
              Every browser.
              <br />
              Every device.
              <br />
              Every site you visit.
            </h3>
            <div className="mt-6 flex flex-wrap gap-2">
              {browserChips.map((chip) => (
                <LogoChip key={chip.label} icon={chip.icon}>
                  {chip.label}
                </LogoChip>
              ))}
            </div>
            <div className="mt-8 overflow-hidden rounded-[18px] border border-[var(--border)] bg-white py-4 shadow-[0_8px_24px_rgba(26,26,26,0.04)]">
              <MovingSiteRow reverse={false} />
              <TypedPrompt />
            </div>
          </div>
        </div>
        <div className="grid gap-5 border-t border-[var(--border)] bg-white p-5 sm:grid-cols-2">
          {mirageVideos.map((video) => (
            <div
              key={video.src}
              className="overflow-hidden rounded-[18px] border border-[var(--border)] bg-[#F7F5F1] shadow-[0_10px_28px_rgba(26,26,26,0.06)]"
            >
              <video
                src={video.src}
                aria-label={video.label}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="aspect-video w-full object-cover"
              />
            </div>
          ))}
        </div>
      </PaperCard>
    </Section>
  );
}

function Work() {
  return (
    <Section
      label="Work"
      title="Systems shipped across health, research, and enterprise AI."
      description="A few projects where agents, retrieval, edge models, and product thinking met real deployment constraints."
    >
      <TextRows items={workCards} />
    </Section>
  );
}

function Projects() {
  return (
    <Section
      label="Projects"
      title="Competition-winning systems."
      description="Focused builds where AI systems moved from concept to judged outcomes."
    >
      <TextRows items={projectCards} />
    </Section>
  );
}

function TextRows({
  items,
}: {
  items: Array<{
    title: string;
    meta: string;
    description: string;
    tags: string[];
  }>;
}) {
  return (
    <div className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
      {items.map((item) => (
        <div key={item.title} className="grid gap-5 py-8 sm:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold text-[var(--coral)]">{item.meta}</p>
            <h3 className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-[var(--ink)]">
              {item.title}
            </h3>
          </div>
          <div>
            <p className="text-base leading-8 text-[var(--muted)]">{item.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function Research() {
  return (
    <Section label="Research" title="Research on synthetic medical image attribution.">
      <div className="grid gap-5 border-y border-[var(--border)] py-8 sm:grid-cols-[auto_1fr_auto] sm:items-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(232,118,90,0.12)] text-[var(--coral)]">
          <FileIcon />
        </div>
        <div>
          <h2 className="max-w-3xl text-2xl font-semibold tracking-[-0.03em] text-[var(--ink)]">
            Reverse Engineering Generative Fingerprints in Medical Images: A Deep Learning
            Approach to Training Data Attribution
          </h2>
          <p className="mt-3 text-base text-[var(--muted)]">
            ImageCLEF Lab, CLEF 2025 · Presented in Madrid, Spain
          </p>
        </div>
        <PlainLink href={links.paper} icon={FileIcon}>
          Read paper
        </PlainLink>
      </div>
    </Section>
  );
}

function Writing({ articles }: { articles: Article[] }) {
  return (
    <Section
      label="Writing"
      title="Long-form notes from the edge of adaptive software."
      description="Essays on personal interfaces, Mirage's engineering loops, and agent-led video workflows."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </Section>
  );
}

function Recognition() {
  return (
    <Section
      label="Recognition"
      title={
        <>
          Signals from building,
          <br />
          shipping,
          <br />
          and research.
        </>
      }
    >
      <div className="grid gap-3 sm:grid-cols-2">
        {recognition.map((item) => (
          <RecognitionPill key={item.label} item={item} />
        ))}
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="flex flex-col gap-3 border-t border-[var(--border)] pt-8 text-center sm:text-left">
      <p className="text-base font-medium text-[var(--ink)]">Building the personal internet.</p>
      <p className="text-sm text-[var(--muted)]">
        Reach out to me at{" "}
        <a className="font-semibold text-[var(--ink)] transition-colors hover:text-[var(--coral)]" href="mailto:nambiar.sara@gmail.com">
          nambiar.sara@gmail.com
        </a>
      </p>
    </footer>
  );
}

function Section({
  label,
  title,
  description,
  accent = "sage",
  children,
}: {
  label: string;
  title?: React.ReactNode;
  description?: string;
  accent?: "sage" | "coral";
  children: React.ReactNode;
}) {
  const id = label.toLowerCase().replace(/\s+/g, "-");
  const labelColor = accent === "coral" ? "text-[var(--coral)]" : "text-[var(--sage)]";

  return (
    <section id={id}>
      <div className="mb-6 grid gap-4 sm:grid-cols-[1fr_0.9fr] sm:items-end">
        <div>
          <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${labelColor}`}>
            {label}
          </p>
          {title ? (
            <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-[1.02] tracking-[-0.045em] text-[var(--ink)] sm:text-4xl">
              {title}
            </h2>
          ) : null}
        </div>
        {description ? (
          <p className="text-sm leading-6 text-[var(--muted)] sm:text-base">{description}</p>
        ) : null}
      </div>
      {children}
    </section>
  );
}

function ArticleCard({ article }: { article: Article }) {
  return (
    <Link href={`/writing/${article.slug}`} className="group block h-full">
      <PaperCard className="flex min-h-[340px] flex-col overflow-hidden p-0">
        <div className="flex min-h-[260px] flex-col border-b border-[var(--border)] bg-[#F7F5F1] p-5">
          <div className="flex items-center justify-between gap-3">
            <Badge>Article</Badge>
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-[rgba(232,118,90,0.12)] px-3 py-1.5 text-xs font-semibold text-[var(--muted)]">
                Written by me
              </span>
              <span className="text-xs font-medium text-[var(--muted)]">{article.readTime}</span>
            </div>
          </div>
          <div className="mt-5 flex flex-1 flex-col rounded-[16px] border border-[var(--border)] bg-white p-4 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.7)]">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--sage)]">
              {article.eyebrow}
            </p>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{article.excerpt}</p>
          </div>
        </div>
        <div className="flex min-h-[220px] flex-1 flex-col p-6">
          <h3 className="min-h-[116px] text-2xl font-semibold leading-[1.05] tracking-[-0.04em] text-[var(--ink)]">
            {article.title}
          </h3>
          <div className="mt-auto flex items-center justify-between gap-4 pt-8 text-sm font-semibold">
            <span className="text-[var(--muted)]">Read article</span>
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-white text-[var(--ink)] transition-colors group-hover:border-[var(--coral)] group-hover:text-[var(--coral)]">
              <ArrowIcon />
            </span>
          </div>
        </div>
      </PaperCard>
    </Link>
  );
}

function MovingSiteRow({ reverse }: { reverse: boolean }) {
  const sites = [...movingSites, ...movingSites];

  return (
    <div className="site-marquee py-1" data-reverse={reverse}>
      <div className="site-marquee-track">
        {sites.map((site, index) => (
          <span
            key={`${site}-${index}`}
            className="mx-1 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[#FAF8F5] px-3 py-1.5 text-xs font-semibold text-[var(--muted)] shadow-[0_4px_14px_rgba(26,26,26,0.035)]"
          >
            <span className="h-2 w-2 rounded-full bg-[var(--sage)]" />
            {site}
          </span>
        ))}
      </div>
    </div>
  );
}

function PaperCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <article
      className={`rounded-[12px] border border-[var(--border)] bg-white shadow-[0_1px_2px_rgba(26,26,26,0.04),0_10px_30px_rgba(26,26,26,0.04)] transition-shadow duration-200 hover:shadow-[0_2px_4px_rgba(26,26,26,0.05),0_16px_38px_rgba(26,26,26,0.08)] ${className}`}
    >
      {children}
    </article>
  );
}

function TextLink({
  href,
  icon: Icon,
  children,
}: {
  href: string;
  icon: React.ComponentType;
  children: React.ReactNode;
}) {
  const isMailLink = href.startsWith("mailto:");

  return (
    <a
      href={href}
      target={isMailLink ? undefined : "_blank"}
      rel={isMailLink ? undefined : "noreferrer"}
      className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-[var(--border)] bg-white px-5 py-3 text-lg font-semibold text-[var(--ink)] shadow-[0_4px_14px_rgba(26,26,26,0.035)] transition-colors hover:border-[var(--coral)] hover:text-[var(--coral)]"
    >
      <Icon />
      <span>{children}</span>
    </a>
  );
}

function PlainLink({
  href,
  icon: Icon,
  children,
}: {
  href: string;
  icon: React.ComponentType;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 text-base font-semibold text-[var(--ink)] transition-colors hover:text-[var(--coral)]"
    >
      <Icon />
      <span>{children}</span>
    </a>
  );
}

function Badge({
  children,
  tone = "coral",
}: {
  children: React.ReactNode;
  tone?: "sage" | "coral";
}) {
  const dotColor = tone === "coral" ? "bg-[var(--coral)]" : "bg-[var(--sage)]";

  return (
    <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--border)] bg-white px-3 py-1.5 text-xs font-semibold text-[var(--ink)] shadow-[0_4px_14px_rgba(26,26,26,0.035)]">
      <span className={`h-2 w-2 rounded-full ${dotColor}`} />
      {children}
    </span>
  );
}

function LogoChip({
  icon: Icon,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white px-3 py-1.5 text-xs font-semibold text-[var(--muted)] shadow-[0_4px_14px_rgba(26,26,26,0.035)]">
      <Icon className="h-4 w-4 text-[var(--ink)]" />
      {children}
    </span>
  );
}

function RecognitionPill({ item }: { item: RecognitionItem }) {
  const Icon = item.icon;

  return (
    <span className="inline-flex min-h-14 w-full items-center gap-3 rounded-full border border-[var(--border)] bg-white px-4 py-2 text-sm font-semibold text-[var(--muted)] shadow-[0_1px_2px_rgba(26,26,26,0.03)] transition-colors hover:border-[rgba(232,118,90,0.42)]">
      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[var(--border)] bg-[#FAF8F5] text-xs font-bold text-[var(--ink)]">
        {item.image ? (
          <Image src={item.image} alt="" className="h-full w-full object-contain p-0.5" />
        ) : Icon ? (
          <Icon className="h-5 w-5 text-[var(--ink)]" />
        ) : (
          item.mark
        )}
      </span>
      <span>{item.label}</span>
    </span>
  );
}

function TypedPrompt() {
  return (
    <div className="mx-4 mt-4 rounded-[14px] border border-[var(--border)] bg-[#FAF8F5] px-4 py-3 text-sm font-semibold text-[var(--ink)]">
      <span className="mr-2 text-[var(--coral)]">Prompt</span>
      <span className="typed-prompts" aria-label="Example Mirage prompts">
        <span>Hide YouTube Shorts.</span>
        <span>Make Gmail keyboard-first.</span>
        <span>Show GitHub PRs as kanban.</span>
      </span>
    </div>
  );
}

function Tag({
  children,
  tone = "sage",
}: {
  children: React.ReactNode;
  tone?: "sage" | "coral";
}) {
  const background =
    tone === "coral" ? "bg-[rgba(232,118,90,0.13)]" : "bg-[rgba(168,196,188,0.22)]";

  return (
    <span className={`rounded-full px-3 py-1 text-xs font-semibold text-[var(--muted)] ${background}`}>
      {children}
    </span>
  );
}

function SvgIcon({ children }: { children: React.ReactNode }) {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      {children}
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <SvgIcon>
      <path d="M8 11v7" />
      <path d="M8 7.5v.01" />
      <path d="M12 18v-7" />
      <path d="M12 14a3 3 0 0 1 6 0v4" />
      <rect x="3" y="3" width="18" height="18" rx="3" />
    </SvgIcon>
  );
}

function TwitterBirdIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" fill="#1A1A1A" viewBox="0 0 24 24">
      <path d="M22 5.8c-.7.3-1.5.6-2.4.7.9-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.7 1A4.1 4.1 0 0 0 15.7 4c-2.3 0-4.1 1.9-4.1 4.1 0 .3 0 .6.1.9A11.7 11.7 0 0 1 3.2 4.7a4.2 4.2 0 0 0-.6 2.1c0 1.4.7 2.7 1.8 3.4-.7 0-1.3-.2-1.9-.5v.1c0 2 1.4 3.7 3.3 4.1-.4.1-.7.1-1.1.1-.3 0-.5 0-.8-.1.5 1.7 2.1 2.9 3.9 2.9a8.3 8.3 0 0 1-5.1 1.8c-.3 0-.7 0-1-.1A11.7 11.7 0 0 0 8 20.4c7.6 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.4 2.1-2.4Z" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <SvgIcon>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5a4.4 4.4 0 0 0-1.2-3.1A4.1 4.1 0 0 0 18.7 3S17.7 2.7 15 4.3a12.3 12.3 0 0 0-6 0C6.3 2.7 5.3 3 5.3 3a4.1 4.1 0 0 0-.1 2.9A4.4 4.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.4.5-.7 1.2-.8 2" />
      <path d="M9 18c-4.5 2-5-2-7-2" />
    </SvgIcon>
  );
}

function FileIcon() {
  return (
    <SvgIcon>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5" />
      <path d="M9 13h6" />
      <path d="M9 17h4" />
    </SvgIcon>
  );
}

function MailIcon() {
  return (
    <SvgIcon>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </SvgIcon>
  );
}

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}
