'use client';

import React, { useEffect, useState } from 'react';

type LinkItem = {
  label: string;
  url: string;
};

type Point = string | LinkItem;

type ResumeItem = {
  title: string;
  meta?: string;
  value?: string;
  detail?: string;
  points?: Point[];
  link?: LinkItem;
  tag?: string;
};

type ResumePhase = {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  day: number;
  countLabel: string;
  items: ResumeItem[];
};

const RESUME = {
  name: '0xSero',
  title: 'Emerging Tech Consultant • AI • Blockchain • Automation',
  links: [
    { label: 'github.com/0xSero', url: 'https://github.com/0xSero' },
    { label: 'sybilsolutions.ai', url: 'https://sybilsolutions.ai' },
    { label: 'x.com/0xSero', url: 'https://x.com/0xSero' },
    { label: 'huggingface.co/0xSero', url: 'https://huggingface.co/0xSero' },
    { label: 'linktr.ee/warsawinternational', url: 'https://linktr.ee/warsawinternational' },
  ],
  metrics: [
    { value: '~1M', label: 'Impressions / week' },
    { value: '22K', label: 'YouTube views / month' },
    { value: '7K+', label: 'Downloads / month' },
    { value: '60+', label: 'Interviews' },
    { value: '10+', label: 'Models released' },
    { value: '178', label: 'GitHub repos' },
  ],
  experience: [
    {
      role: 'Founder — Sybil Solutions',
      period: '2023 – Present',
      highlights: [
        'GLM-4.7 compression: 720GB → 92GB (7.8×)',
        'MiniMax-AI ACP agent integration',
        'AI data extraction toolkit',
        '2GB chat history processing',
      ],
    },
    {
      role: 'AI Lead — Thrive Protocol',
      period: '2024 – Present',
      highlights: ['ZK proof systems for on-chain metrics', 'Decentralized impact verification'],
    },
    {
      role: 'Grant — Ethereum Foundation',
      period: '2024',
      highlights: [
        { label: 'IVC research', url: 'https://ethereum.foundation/' },
        { label: 'ZKSync event indexing', url: 'https://zksync.io/' },
      ],
    },
    {
      role: 'Researcher — Gitcoin',
      period: '2024',
      highlights: [{ label: 'Cross-chain donations', url: 'https://www.gitcoin.co/' }],
    },
    {
      role: 'Core Contributor — Synpress',
      period: '2022 – 2024',
      highlights: [
        'E2E testing (Cypress + Playwright + MetaMask)',
        'Millions of downloads, 872+ stars',
        { label: 'github.com/synpress-io/synpress', url: 'https://github.com/synpress-io/synpress' },
      ],
    },
  ],
  openSource: [
    { name: 'ElizaOS', desc: 'Autonomous agents', stars: '17.3K★' },
    { name: 'Azul', desc: 'Terminal browser (Rust)', stars: '29.5K★' },
    { name: 'Hey (Lens)', desc: 'Decentralized social', stars: '1.1K★' },
    { name: 'MiniMax Agent', desc: 'ACP integration', stars: '136★' },
    { name: 'Orchestra', desc: 'Agent orchestration', stars: '203★' },
  ],
  skills: [
    { label: 'AI/ML', items: ['REAP', 'LoRA', 'RAG', 'vLLM', 'MLX', 'PyTorch'] },
    { label: 'Blockchain', items: ['Solidity', 'ZK proofs', 'EVM', 'L2s'] },
    { label: 'Languages', items: ['TypeScript', 'Python', 'Rust', 'Solidity'] },
    { label: 'Infra', items: ['Docker', 'Linux', '4×3090 homelab'] },
  ],
  community: [
    {
      role: 'Warsaw International — Founder',
      detail: '4,500+ member dev community',
      link: { label: 'meetup.com/warsawinternational', url: 'https://www.meetup.com/warsawinternational' },
    },
    {
      role: 'ETHWarsaw — Organizer',
      detail: 'Ethereum dev meetups & hackathons',
      link: { label: 'meetup.com/ethwarsaw-meetup', url: 'https://www.meetup.com/ethwarsaw-meetup' },
    },
    {
      role: 'Ethers Club — Podcast Host',
      detail: '60+ web3/AI builder interviews',
    },
    {
      role: 'Superfluid Poland — Educator',
      detail: '200+ students/year',
      link: { label: 'luma.com/Superfluid-Poland', url: 'https://lu.ma/Superfluid-Poland' },
    },
    {
      role: 'Claude Code Warsaw — Anthropic-sponsored',
      detail: 'AI coding meetups',
      link: { label: 'luma.com/bwbby7uc', url: 'https://lu.ma/bwbby7uc' },
    },
  ],
  featured: [
    { title: 'REAP Compression', desc: 'GLM-4.7 MacBook-ready' },
    { title: 'AI Extraction', desc: 'ML training pipelines' },
    { title: 'MiniMax ACP', desc: 'Agent protocol' },
    { title: 'ZK Metrics', desc: 'On-chain proofs' },
  ],
};

const phases: ResumePhase[] = [
  {
    id: 'experience',
    title: 'Experience',
    subtitle: 'Operator roles and research arcs',
    date: '2022 → Present',
    day: 1,
    countLabel: 'roles',
    items: RESUME.experience.map((entry) => ({
      title: entry.role,
      meta: entry.period,
      points: entry.highlights,
    })),
  },
  {
    id: 'open-source',
    title: 'Open Source',
    subtitle: 'Shipping at community scale',
    date: 'Global projects',
    day: 2,
    countLabel: 'projects',
    items: RESUME.openSource.map((project) => ({
      title: project.name,
      detail: project.desc,
      value: project.stars,
    })),
  },
  {
    id: 'skills',
    title: 'Skills',
    subtitle: 'Tooling across the stack',
    date: 'Current focus',
    day: 3,
    countLabel: 'domains',
    items: RESUME.skills.map((group) => ({
      title: group.label,
      detail: group.items.join(' • '),
    })),
  },
  {
    id: 'community',
    title: 'Community & Education',
    subtitle: 'Builders and programs',
    date: 'Warsaw & beyond',
    day: 4,
    countLabel: 'initiatives',
    items: RESUME.community.map((entry) => ({
      title: entry.role,
      detail: entry.detail,
      link: entry.link,
    })),
  },
  {
    id: 'metrics',
    title: 'Metrics',
    subtitle: 'Live signals',
    date: 'Weekly / monthly',
    day: 5,
    countLabel: 'signals',
    items: RESUME.metrics.map((metric) => ({
      title: metric.label,
      value: metric.value,
    })),
  },
  {
    id: 'featured',
    title: 'Featured Work',
    subtitle: 'Select systems',
    date: 'Recent highlights',
    day: 6,
    countLabel: 'projects',
    items: RESUME.featured.map((item) => ({
      title: item.title,
      detail: item.desc,
    })),
  },
];

const ResumePage = () => {
  const [entered, setEntered] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activePhase, setActivePhase] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    handleResize();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const renderPoint = (point: Point) => {
    if (typeof point === 'string') return point;

    return (
      <a
        href={point.url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: 'rgba(200, 170, 120, 0.75)', textDecoration: 'none' }}
      >
        {point.label}
      </a>
    );
  };

  if (!entered) {
    return (
      <div
        onClick={() => setEntered(true)}
        style={{
          minHeight: '100vh',
          backgroundColor: '#1a1918',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          position: 'relative',
          overflow: 'hidden',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          padding: '20px',
        }}
      >
        <div
          style={{
            position: 'absolute',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(180, 140, 90, 0.1) 0%, transparent 70%)',
            filter: 'blur(60px)',
            animation: 'pulse 4s ease-in-out infinite',
          }}
        />

        {[...Array(12)].map((_, i) => (
          <div
            key={`resume-dot-${i}`}
            style={{
              position: 'absolute',
              width: '2px',
              height: '2px',
              backgroundColor: 'rgba(180, 150, 100, 0.25)',
              borderRadius: '50%',
              left: `${15 + Math.random() * 70}%`,
              top: `${15 + Math.random() * 70}%`,
              animation: `float ${4 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}

        <div
          style={{
            fontSize: '9px',
            letterSpacing: '0.4em',
            color: 'rgba(180, 150, 100, 0.5)',
            marginBottom: '28px',
            fontFamily: 'monospace',
            textTransform: 'uppercase',
          }}
        >
          Resume
        </div>

        <h1
          style={{
            fontSize: 'clamp(32px, 9vw, 80px)',
            fontWeight: 200,
            letterSpacing: '-0.03em',
            color: 'rgba(245, 240, 230, 0.95)',
            marginBottom: '16px',
            textAlign: 'center',
            lineHeight: 1.1,
          }}
        >
          {RESUME.name}
        </h1>

        <p
          style={{
            fontSize: '14px',
            color: 'rgba(180, 160, 130, 0.6)',
            marginBottom: '48px',
            textAlign: 'center',
            maxWidth: '300px',
            lineHeight: 1.7,
            fontWeight: 300,
          }}
        >
          {RESUME.title}
        </p>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 28px',
            border: '1px solid rgba(180, 150, 100, 0.2)',
            borderRadius: '100px',
            fontSize: '10px',
            letterSpacing: '0.25em',
            color: 'rgba(200, 170, 120, 0.7)',
            animation: 'breathe 2.5s ease-in-out infinite',
            textTransform: 'uppercase',
          }}
        >
          Enter
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: '32px',
            fontSize: '10px',
            letterSpacing: '0.2em',
            color: 'rgba(150, 130, 100, 0.35)',
          }}
        >
          @0xSero
        </div>

        <style>{`
          @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 0.5; }
            50% { transform: scale(1.1); opacity: 0.8; }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0); opacity: 0.2; }
            50% { transform: translateY(-20px); opacity: 0.5; }
          }
          @keyframes breathe {
            0%, 100% { opacity: 0.6; }
            50% { opacity: 1; }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#1a1918',
        color: 'rgba(245, 240, 230, 0.9)',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'fixed',
          inset: 0,
          background: 'radial-gradient(ellipse at 50% 20%, rgba(160, 120, 70, 0.06) 0%, transparent 50%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'fixed',
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          opacity: 0.02,
          pointerEvents: 'none',
        }}
      />

      {!isMobile && (
        <nav
          style={{
            position: 'fixed',
            left: '20px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 100,
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}
        >
          {phases.map((phase, i) => (
            <a
              key={phase.id}
              href={`#${phase.id}`}
              onClick={(event) => {
                event.preventDefault();
                document.getElementById(phase.id)?.scrollIntoView({ behavior: 'smooth' });
                setActivePhase(i);
              }}
              style={{
                width: '4px',
                height: activePhase === i ? '24px' : '4px',
                borderRadius: '2px',
                backgroundColor: activePhase === i ? 'rgba(200, 160, 100, 0.8)' : 'rgba(150, 130, 100, 0.2)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
              title={phase.title}
            />
          ))}
        </nav>
      )}

      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          padding: isMobile ? '12px 16px' : '14px 40px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: scrollY > 60 ? 'rgba(26, 25, 24, 0.95)' : 'transparent',
          backdropFilter: scrollY > 60 ? 'blur(12px)' : 'none',
          borderBottom: scrollY > 60 ? '1px solid rgba(100, 90, 70, 0.1)' : 'none',
          transition: 'all 0.3s ease',
          zIndex: 50,
        }}
      >
        <div
          style={{
            fontSize: '10px',
            letterSpacing: '0.12em',
            color: 'rgba(180, 150, 100, 0.6)',
            fontFamily: 'monospace',
          }}
        >
          RESUME
        </div>
        <div
          style={{
            fontSize: '9px',
            fontFamily: 'monospace',
            color: 'rgba(150, 130, 100, 0.4)',
          }}
        >
          {isMobile ? '~1M/wk' : '~1M/wk • 178 repos'}
        </div>
      </header>

      <section
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: isMobile ? '80px 24px 60px' : '100px 40px 60px',
          position: 'relative',
        }}
      >
        <div
          style={{
            opacity: Math.max(0, 1 - scrollY / 300),
            transform: `translateY(${scrollY * 0.2}px)`,
            textAlign: 'center',
          }}
        >
          <h1
            style={{
              fontSize: isMobile ? '36px' : 'clamp(40px, 6vw, 64px)',
              fontWeight: 200,
              letterSpacing: '-0.02em',
              marginBottom: '16px',
              lineHeight: 1.1,
              color: 'rgba(245, 240, 230, 0.95)',
            }}
          >
            {RESUME.name}
          </h1>
          <p
            style={{
              fontSize: isMobile ? '14px' : '15px',
              color: 'rgba(180, 160, 130, 0.6)',
              maxWidth: '420px',
              lineHeight: 1.7,
              fontWeight: 300,
              margin: '0 auto',
            }}
          >
            {RESUME.title}
          </p>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: isMobile ? '20px' : '32px',
              marginTop: '40px',
              flexWrap: 'wrap',
            }}
          >
            {RESUME.metrics.slice(0, 4).map((stat) => (
              <div key={stat.label} style={{ textAlign: 'center' }}>
                <div
                  style={{
                    fontSize: isMobile ? '20px' : '24px',
                    fontWeight: 300,
                    fontFamily: 'monospace',
                    color: 'rgba(200, 160, 100, 0.8)',
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: '9px',
                    color: 'rgba(150, 130, 100, 0.4)',
                    letterSpacing: '0.05em',
                    marginTop: '4px',
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            opacity: Math.max(0, 1 - scrollY / 120),
          }}
        >
          <div
            style={{
              width: '1px',
              height: '32px',
              backgroundColor: 'rgba(150, 130, 100, 0.15)',
              margin: '0 auto',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                position: 'absolute',
                width: '100%',
                height: '12px',
                backgroundColor: 'rgba(200, 160, 100, 0.5)',
                animation: 'scrollLine 1.6s ease-in-out infinite',
              }}
            />
          </div>
        </div>
      </section>

      <main
        style={{
          padding: isMobile ? '0 16px 80px' : '0 40px 100px',
          marginLeft: isMobile ? 0 : '40px',
        }}
      >
        {phases.map((phase, phaseIndex) => {
          const phaseCount = phase.items.length;

          return (
            <section
              key={phase.id}
              id={phase.id}
              style={{
                paddingTop: isMobile ? '60px' : '80px',
                paddingBottom: '20px',
              }}
              onMouseEnter={() => setActivePhase(phaseIndex)}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: isMobile ? 'column' : 'row',
                  gap: isMobile ? '16px' : '28px',
                  alignItems: isMobile ? 'flex-start' : 'flex-start',
                  marginBottom: '28px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '8px',
                    minWidth: isMobile ? 'auto' : '70px',
                  }}
                >
                  <span
                    style={{
                      fontSize: isMobile ? '28px' : '36px',
                      fontWeight: 100,
                      fontFamily: 'monospace',
                      color: activePhase === phaseIndex ? 'rgba(200, 160, 100, 0.85)' : 'rgba(150, 130, 100, 0.25)',
                      transition: 'color 0.3s ease',
                      lineHeight: 1,
                    }}
                  >
                    {phase.day}
                  </span>
                  <span
                    style={{
                      fontSize: '8px',
                      letterSpacing: '0.1em',
                      color: 'rgba(150, 130, 100, 0.35)',
                      textTransform: 'uppercase',
                    }}
                  >
                    set
                  </span>
                </div>

                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontSize: '10px',
                      letterSpacing: '0.1em',
                      color: 'rgba(180, 150, 100, 0.45)',
                      marginBottom: '8px',
                      fontFamily: 'monospace',
                    }}
                  >
                    {phase.date}
                  </div>
                  <h2
                    style={{
                      fontSize: isMobile ? '24px' : '32px',
                      fontWeight: 200,
                      marginBottom: '4px',
                      color: 'rgba(245, 240, 230, 0.95)',
                      lineHeight: 1.2,
                    }}
                  >
                    {phase.title}
                  </h2>
                  <div
                    style={{
                      fontSize: '13px',
                      color: 'rgba(180, 160, 130, 0.5)',
                      fontWeight: 300,
                    }}
                  >
                    {phase.subtitle}
                  </div>
                </div>

                <div
                  style={{
                    padding: '10px 16px',
                    background: 'rgba(80, 70, 50, 0.12)',
                    borderRadius: '6px',
                    border: '1px solid rgba(120, 100, 70, 0.1)',
                    alignSelf: isMobile ? 'flex-start' : 'flex-start',
                  }}
                >
                  <span
                    style={{
                      fontSize: '18px',
                      fontWeight: 300,
                      fontFamily: 'monospace',
                      color: 'rgba(200, 160, 100, 0.8)',
                    }}
                  >
                    {phaseCount}
                  </span>
                  <span
                    style={{
                      fontSize: '9px',
                      color: 'rgba(150, 130, 100, 0.4)',
                      marginLeft: '6px',
                    }}
                  >
                    {phase.countLabel}
                  </span>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                }}
              >
                {phase.items.map((item, itemIndex) => {
                  const cardKey = `${phase.id}-${itemIndex}`;
                  const isHovered = hoveredCard === cardKey;
                  const topValue = item.value || item.meta;

                  return (
                    <div
                      key={cardKey}
                      onMouseEnter={() => setHoveredCard(cardKey)}
                      onMouseLeave={() => setHoveredCard(null)}
                      style={{
                        display: 'block',
                        padding: isMobile ? '16px' : '16px 20px',
                        backgroundColor: isHovered
                          ? 'rgba(100, 85, 60, 0.18)'
                          : 'rgba(60, 55, 45, 0.08)',
                        border: `1px solid ${
                          isHovered ? 'rgba(180, 150, 100, 0.3)' : 'rgba(120, 100, 70, 0.08)'
                        }`,
                        borderRadius: '8px',
                        textDecoration: 'none',
                        transition: 'all 0.2s ease',
                        position: 'relative',
                      }}
                    >
                      {item.tag && (
                        <span
                          style={{
                            position: 'absolute',
                            top: '10px',
                            right: '12px',
                            fontSize: '7px',
                            letterSpacing: '0.1em',
                            padding: '3px 8px',
                            backgroundColor: 'rgba(200, 160, 100, 0.2)',
                            color: 'rgba(220, 190, 140, 0.8)',
                            borderRadius: '3px',
                            textTransform: 'uppercase',
                          }}
                        >
                          {item.tag}
                        </span>
                      )}

                      {topValue && (
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            marginBottom: '8px',
                          }}
                        >
                          <span
                            style={{
                              fontSize: '15px',
                              fontWeight: 400,
                              fontFamily: 'monospace',
                              color: 'rgba(210, 170, 110, 0.85)',
                            }}
                          >
                            {topValue}
                          </span>
                        </div>
                      )}

                      <p
                        style={{
                          fontSize: isMobile ? '12px' : '13px',
                          lineHeight: 1.6,
                          color: 'rgba(220, 210, 190, 0.7)',
                          margin: 0,
                        }}
                      >
                        {item.title}
                      </p>

                      {item.detail && (
                        <p
                          style={{
                            marginTop: '10px',
                            fontSize: '12px',
                            color: 'rgba(180, 160, 130, 0.6)',
                            lineHeight: 1.6,
                          }}
                        >
                          {item.detail}
                        </p>
                      )}

                      {item.points && (
                        <ul
                          style={{
                            marginTop: '10px',
                            paddingLeft: '16px',
                            color: 'rgba(200, 190, 170, 0.65)',
                            fontSize: '12px',
                            lineHeight: 1.6,
                          }}
                        >
                          {item.points.map((point) => (
                            <li key={typeof point === 'string' ? point : point.label}>{renderPoint(point)}</li>
                          ))}
                        </ul>
                      )}

                      {item.link && (
                        <div
                          style={{
                            marginTop: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '5px',
                            fontSize: '9px',
                            color: 'rgba(150, 130, 100, 0.35)',
                          }}
                        >
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                          </svg>
                          <a
                            href={item.link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: 'rgba(200, 180, 150, 0.6)', textDecoration: 'none' }}
                          >
                            {item.link.label}
                          </a>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}

        <div
          style={{
            marginTop: '48px',
            display: 'flex',
            gap: '8px',
            flexWrap: 'wrap',
          }}
        >
          {RESUME.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '10px 14px',
                backgroundColor: 'rgba(60, 55, 45, 0.1)',
                border: '1px solid rgba(120, 100, 70, 0.08)',
                borderRadius: '6px',
                textDecoration: 'none',
                color: 'rgba(200, 180, 150, 0.6)',
                fontSize: '11px',
                transition: 'all 0.2s ease',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <footer
          style={{
            marginTop: '80px',
            paddingTop: '28px',
            borderTop: '1px solid rgba(100, 90, 70, 0.1)',
          }}
        >
          <blockquote
            style={{
              fontSize: isMobile ? '14px' : '16px',
              fontStyle: 'italic',
              fontWeight: 300,
              color: 'rgba(200, 180, 150, 0.5)',
              lineHeight: 1.7,
              marginBottom: '12px',
            }}
          >
            "Build the tooling so intelligence runs anywhere."
          </blockquote>
          <div style={{ fontSize: '11px', color: 'rgba(180, 150, 100, 0.4)' }}>— @0xSero</div>
        </footer>
      </main>

      <style>{`
        @keyframes scrollLine {
          0% { top: -12px; }
          100% { top: 32px; }
        }
        html { scroll-behavior: smooth; }
        * {
          scrollbar-width: thin;
          scrollbar-color: rgba(150, 120, 80, 0.2) transparent;
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

export default ResumePage;
