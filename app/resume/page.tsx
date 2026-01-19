'use client';

import React, { useEffect, useState } from 'react';

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
      highlights: [
        'ZK proof systems for on-chain metrics',
        'Decentralized impact verification',
      ],
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
    {
      label: 'AI/ML',
      items: ['REAP', 'LoRA', 'RAG', 'vLLM', 'MLX', 'PyTorch'],
    },
    {
      label: 'Blockchain',
      items: ['Solidity', 'ZK proofs', 'EVM', 'L2s'],
    },
    {
      label: 'Languages',
      items: ['TypeScript', 'Python', 'Rust', 'Solidity'],
    },
    {
      label: 'Infra',
      items: ['Docker', 'Linux', '4×3090 homelab'],
    },
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

const sectionOrder = [
  { id: 'experience', label: 'Experience' },
  { id: 'openSource', label: 'Open Source' },
  { id: 'skills', label: 'Skills' },
  { id: 'community', label: 'Community & Education' },
  { id: 'metrics', label: 'Metrics' },
  { id: 'featured', label: 'Featured Work' },
];

const ResumePage = () => {
  const [entered, setEntered] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleResize = () => setIsMobile(window.innerWidth < 900);

    handleResize();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    const welcomeTimer = window.setTimeout(() => setEntered(true), 1200);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      window.clearTimeout(welcomeTimer);
    };
  }, []);

  const heroAlign = isMobile ? 'flex-start' : 'flex-end';
  const heroTextAlign = isMobile ? 'left' : 'right';
  const sectionWidth = isMobile ? '100%' : '700px';
  const heroShift = Math.min(28, scrollY * 0.08);
  const timelineShift = Math.min(40, scrollY * 0.06);

  if (!entered) {
    return (
      <div
        style={{
          minHeight: '100vh',
          backgroundColor: '#1a1918',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          padding: '24px',
        }}
      >
        <div
          style={{
            position: 'absolute',
            width: '360px',
            height: '360px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(180, 140, 90, 0.1) 0%, transparent 70%)',
            filter: 'blur(55px)',
          }}
        />

        <div
          style={{
            fontSize: '9px',
            letterSpacing: '0.4em',
            color: 'rgba(180, 150, 100, 0.5)',
            marginBottom: '18px',
            fontFamily: 'monospace',
            textTransform: 'uppercase',
          }}
        >
          Welcome
        </div>

        <h1
          style={{
            fontSize: 'clamp(30px, 8vw, 70px)',
            fontWeight: 200,
            letterSpacing: '-0.03em',
            color: 'rgba(245, 240, 230, 0.95)',
            marginBottom: '12px',
            textAlign: 'center',
            lineHeight: 1.1,
          }}
        >
          {RESUME.name}
        </h1>

        <p
          style={{
            fontSize: '13px',
            color: 'rgba(180, 160, 130, 0.6)',
            marginBottom: '20px',
            textAlign: 'center',
            maxWidth: '360px',
            lineHeight: 1.7,
            fontWeight: 300,
          }}
        >
          {RESUME.title}
        </p>

        <div
          style={{
            fontSize: '9px',
            letterSpacing: '0.2em',
            color: 'rgba(150, 130, 100, 0.35)',
            textTransform: 'uppercase',
          }}
        >
          Loading resume…
        </div>
      </div>
    );
  }

  const renderSection = (sectionId: string) => {
    if (sectionId === 'experience') {
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {RESUME.experience.map((item) => (
            <div
              key={item.role}
              style={{
                padding: '16px 18px',
                backgroundColor: 'rgba(60, 55, 45, 0.08)',
                border: '1px solid rgba(120, 100, 70, 0.1)',
                borderRadius: '10px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  gap: '12px',
                  flexWrap: 'wrap',
                }}
              >
                <div style={{ fontSize: '15px', fontWeight: 300, color: 'rgba(245, 240, 230, 0.9)' }}>
                  {item.role}
                </div>
                <div style={{ fontSize: '9px', letterSpacing: '0.12em', color: 'rgba(180, 150, 100, 0.45)' }}>
                  {item.period}
                </div>
              </div>
              <ul style={{ margin: '10px 0 0 14px', padding: 0, color: 'rgba(210, 195, 170, 0.7)', fontSize: '12px', lineHeight: 1.7 }}>
                {item.highlights.map((detail) => (
                  <li key={typeof detail === 'string' ? detail : detail.label} style={{ marginBottom: '4px' }}>
                    {typeof detail === 'string' ? (
                      detail
                    ) : (
                      <a
                        href={detail.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'rgba(200, 170, 120, 0.7)', textDecoration: 'none' }}
                      >
                        {detail.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
    }

    if (sectionId === 'openSource') {
      return (
        <div style={{ display: 'grid', gap: '10px' }}>
          {RESUME.openSource.map((project) => (
            <div
              key={project.name}
              style={{
                padding: '14px 16px',
                backgroundColor: 'rgba(60, 55, 45, 0.08)',
                border: '1px solid rgba(120, 100, 70, 0.1)',
                borderRadius: '10px',
                display: 'flex',
                justifyContent: 'space-between',
                gap: '12px',
                alignItems: 'center',
              }}
            >
              <div>
                <div style={{ fontSize: '13px', color: 'rgba(240, 230, 210, 0.85)' }}>{project.name}</div>
                <div style={{ fontSize: '11px', color: 'rgba(180, 160, 130, 0.55)' }}>{project.desc}</div>
              </div>
              <div style={{ fontSize: '10px', fontFamily: 'monospace', color: 'rgba(200, 160, 100, 0.75)' }}>
                {project.stars}
              </div>
            </div>
          ))}
        </div>
      );
    }

    if (sectionId === 'skills') {
      return (
        <div style={{ display: 'grid', gap: '12px' }}>
          {RESUME.skills.map((group) => (
            <div
              key={group.label}
              style={{
                padding: '14px 16px',
                borderRadius: '10px',
                border: '1px solid rgba(120, 100, 70, 0.1)',
                backgroundColor: 'rgba(60, 55, 45, 0.08)',
              }}
            >
              <div style={{ fontSize: '10px', letterSpacing: '0.18em', color: 'rgba(180, 150, 100, 0.5)', textTransform: 'uppercase' }}>
                {group.label}
              </div>
              <div style={{ fontSize: '12px', marginTop: '8px', color: 'rgba(220, 205, 185, 0.75)' }}>
                {group.items.join(' • ')}
              </div>
            </div>
          ))}
        </div>
      );
    }

    if (sectionId === 'community') {
      return (
        <div style={{ display: 'grid', gap: '12px' }}>
          {RESUME.community.map((entry) => (
            <div
              key={entry.role}
              style={{
                padding: '14px 16px',
                borderRadius: '10px',
                border: '1px solid rgba(120, 100, 70, 0.1)',
                backgroundColor: 'rgba(60, 55, 45, 0.08)',
              }}
            >
              <div style={{ fontSize: '13px', color: 'rgba(235, 225, 205, 0.85)' }}>{entry.role}</div>
              <div style={{ fontSize: '11px', color: 'rgba(180, 160, 130, 0.6)', marginTop: '6px' }}>{entry.detail}</div>
              {entry.link && (
                <a
                  href={entry.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '10px',
                    color: 'rgba(200, 170, 120, 0.7)',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    marginTop: '8px',
                    gap: '6px',
                    alignItems: 'center',
                  }}
                >
                  {entry.link.label}
                  <span style={{ fontSize: '10px', opacity: 0.6 }}>↗</span>
                </a>
              )}
            </div>
          ))}
        </div>
      );
    }

    if (sectionId === 'metrics') {
      return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px' }}>
          {RESUME.metrics.map((stat) => (
            <div
              key={stat.label}
              style={{
                padding: '14px 16px',
                borderRadius: '10px',
                border: '1px solid rgba(120, 100, 70, 0.1)',
                backgroundColor: 'rgba(60, 55, 45, 0.08)',
              }}
            >
              <div style={{ fontSize: '18px', fontFamily: 'monospace', color: 'rgba(200, 160, 100, 0.8)' }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '9px', letterSpacing: '0.12em', color: 'rgba(150, 130, 100, 0.45)' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      );
    }

    if (sectionId === 'featured') {
      return (
        <div style={{ display: 'grid', gap: '10px' }}>
          {RESUME.featured.map((item) => (
            <div
              key={item.title}
              style={{
                padding: '14px 16px',
                borderRadius: '10px',
                border: '1px solid rgba(120, 100, 70, 0.1)',
                backgroundColor: 'rgba(60, 55, 45, 0.08)',
              }}
            >
              <div style={{ fontSize: '13px', color: 'rgba(235, 225, 205, 0.85)' }}>{item.title}</div>
              <div style={{ fontSize: '11px', color: 'rgba(180, 160, 130, 0.6)', marginTop: '6px' }}>{item.desc}</div>
            </div>
          ))}
        </div>
      );
    }

    return null;
  };

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
            right: '20px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 100,
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            padding: '6px 4px',
            borderRadius: '999px',
            border: '1px solid rgba(120, 100, 70, 0.12)',
            background: 'rgba(26, 25, 24, 0.6)',
            backdropFilter: 'blur(10px)',
          }}
        >
          {sectionOrder.map((section, index) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={(event) => {
                event.preventDefault();
                document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                setActiveSection(index);
              }}
              style={{
                width: '4px',
                height: activeSection === index ? '24px' : '4px',
                borderRadius: '2px',
                backgroundColor: activeSection === index ? 'rgba(200, 160, 100, 0.8)' : 'rgba(150, 130, 100, 0.2)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
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
          Resume
        </div>
        <a
          href="https://sybilsolutions.ai"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: '9px', fontFamily: 'monospace', color: 'rgba(150, 130, 100, 0.4)', textDecoration: 'none' }}
        >
          sybilsolutions.ai
        </a>
      </header>

      <section
        style={{
          minHeight: '80vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: heroAlign,
          padding: isMobile ? '90px 24px 50px' : '120px 80px 60px',
          position: 'relative',
          maxWidth: '980px',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            alignSelf: heroAlign,
            textAlign: heroTextAlign as 'left' | 'right',
            transform: `translateX(${heroShift}px)`
          }}
        >
          <div
            style={{
              fontSize: '10px',
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
              color: 'rgba(180, 150, 100, 0.5)',
              marginBottom: '18px',
              fontFamily: 'monospace',
            }}
          >
            Resume
          </div>
          <h1
            style={{
              fontSize: isMobile ? '32px' : 'clamp(38px, 5vw, 56px)',
              fontWeight: 200,
              marginBottom: '14px',
              lineHeight: 1.1,
              color: 'rgba(245, 240, 230, 0.95)',
            }}
          >
            {RESUME.name}
          </h1>
          <div style={{ fontSize: '13px', color: 'rgba(180, 160, 130, 0.6)', maxWidth: isMobile ? '100%' : '460px', lineHeight: 1.7 }}>
            {RESUME.title}
          </div>
          <div
            style={{
              marginTop: '20px',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              justifyContent: heroTextAlign === 'right' ? 'flex-end' : 'flex-start',
            }}
          >
            {RESUME.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '8px 12px',
                  borderRadius: '999px',
                  border: '1px solid rgba(120, 100, 70, 0.2)',
                  fontSize: '10px',
                  color: 'rgba(200, 170, 120, 0.7)',
                  textDecoration: 'none',
                  letterSpacing: '0.08em',
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div
          style={{
            position: 'absolute',
            right: isMobile ? '24px' : '60px',
            bottom: '40px',
            opacity: Math.max(0, 1 - scrollY / 120),
          }}
        >
          <div style={{ width: '1px', height: '34px', backgroundColor: 'rgba(150, 130, 100, 0.15)', position: 'relative' }}>
            <div
              style={{
                position: 'absolute',
                width: '100%',
                height: '12px',
                backgroundColor: 'rgba(200, 160, 100, 0.5)',
                animation: 'scrollUp 1.8s ease-in-out infinite',
                bottom: '-12px',
              }}
            />
          </div>
        </div>
      </section>

      <main
        style={{
          padding: isMobile ? '0 20px 80px' : '0 80px 120px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: isMobile ? 'stretch' : 'flex-end',
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: '1100px',
          gap: '12px',
        }}
      >
        {sectionOrder.map((section, index) => (
          <section
            key={section.id}
            id={section.id}
            style={{
              paddingTop: isMobile ? '50px' : '70px',
              width: sectionWidth,
              alignSelf: isMobile ? 'stretch' : 'flex-end',
              transform: `translateX(${-timelineShift}px)`,
              transition: 'transform 0.25s ease-out',
            }}
            onMouseEnter={() => setActiveSection(index)}
          >
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '14px', marginBottom: '20px' }}>
              <div
                style={{
                  fontSize: '10px',
                  letterSpacing: '0.12em',
                  color: 'rgba(180, 150, 100, 0.4)',
                  fontFamily: 'monospace',
                }}
              >
                {section.label}
              </div>
              <div style={{ flex: 1, height: '1px', backgroundColor: 'rgba(100, 90, 70, 0.15)' }} />
            </div>
            {renderSection(section.id)}
          </section>
        ))}
      </main>

      <style>{`
        @keyframes scrollUp {
          0% { bottom: -12px; opacity: 0.2; }
          50% { bottom: 14px; opacity: 0.9; }
          100% { bottom: 30px; opacity: 0; }
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
