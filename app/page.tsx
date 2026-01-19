'use client';

import React, { useState, useEffect } from 'react';

const REAPOdyssey = () => {
  const [entered, setEntered] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activePhase, setActivePhase] = useState(0);
  const [hoveredTweet, setHoveredTweet] = useState(null);
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

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  const phases = [
    {
      id: 'foundation',
      title: 'Foundation',
      subtitle: 'The Dream Begins',
      date: 'Aug 30, 2025',
      day: 0,
      tweets: [
        {
          url: 'https://x.com/0xSero/status/1961726063496622447',
          quote: 'Building an AI rig at home: 96GB VRAM (4x 3090s), 512GB DDR4, 6TB NVMe, Epyc 7443p. Really excited to go on this learning journey.',
          impressions: 37836,
        },
      ],
    },
    {
      id: 'breakthrough',
      title: 'First Contact',
      subtitle: 'REAP Goes Local',
      date: 'Oct 25, 2025',
      day: 56,
      tweets: [
        {
          url: 'https://x.com/0xSero/status/1982083885912432858',
          quote: 'Running GLM-4.6 at home on my 6x 3090s using exllamav3! 120k context window at FP16 kv_cache. This is actually a breakthrough, Cerebras are doing god\'s work.',
          impressions: 76767,
          viral: true,
        },
        {
          url: 'https://x.com/0xSero/status/1989604170295390358',
          quote: 'I have to give a big shout out to the Cerebras team. They are working hard to make frontier intelligence available to everyone.',
          impressions: 31859,
        },
        {
          url: 'https://x.com/0xSero/status/1983941091087815042',
          quote: 'I ran all the most important benchmarks against GLM-4.5-Air-reap-82b at Q8... REAP maintains parity on coding and agentic tasks.',
          impressions: 10295,
        },
      ],
    },
    {
      id: 'funding',
      title: 'The Ask',
      subtitle: '12-Hour Turnaround',
      date: 'Dec 31, 2025',
      day: 123,
      tweets: [
        {
          url: 'https://x.com/0xSero/status/2006257608429052048',
          quote: 'I can get GLM-4.7 running on vLLM @ 110GB of VRAM. It\'ll cost about $500-1000. I want to crowdfund this.',
          impressions: 47012,
          time: '6:54 AM',
        },
        {
          url: 'https://x.com/0xSero/status/2006453692866900468',
          quote: 'Compute secured! I will start the pruning and quantising tomorrow... Thanks to Prime Intellect.',
          impressions: 40569,
          time: '7:53 PM',
          highlight: true,
        },
      ],
    },
    {
      id: 'marathon',
      title: '80 Hours',
      subtitle: 'The Marathon',
      date: 'Jan 1-4, 2026',
      day: 124,
      tweets: [
        {
          url: 'https://x.com/0xSero/status/2006724548071194989',
          quote: 'Pruning has started. Wish me luck, failure would be embarrassing.',
          impressions: 80982,
          viral: true,
        },
        {
          url: 'https://x.com/0xSero/status/2007065195097489634',
          quote: 'GLM-4.7 pruned 40% and quantized... running successfully on my linux rig, 108GB for the weights.',
          impressions: 57347,
        },
        {
          url: 'https://x.com/0xSero/status/2007158541988311150',
          quote: 'GLM-4.7 running locally just: 1. Vectorized 600mb of tweets... I am very excited.',
          impressions: 52316,
        },
        {
          url: 'https://x.com/0xSero/status/2007052241623015486',
          quote: 'GLM-4.7 running on 115GB VRAM as promised!',
          impressions: 34699,
        },
        {
          url: 'https://x.com/0xSero/status/2007360740311617543',
          quote: 'GLM-4.7-Reap now on MLX! Run GLM with tons of context on 128GB of memory.',
          impressions: 32477,
        },
        {
          url: 'https://x.com/0xSero/status/2007879762883305919',
          quote: 'Guys here you have it MiniMax-M2.1 with full context on 96GB VRAM... Enjoy.',
          impressions: 27145,
        },
        {
          url: 'https://x.com/0xSero/status/2007533092727353746',
          quote: 'DeepSeek 135GB.',
          impressions: 19303,
        },
        {
          url: 'https://x.com/0xSero/status/2007433591010058271',
          quote: '58.8 tokens per second, GLM-4.7-REAP-50 Weights: 92GB of VRAM.',
          impressions: 18491,
        },
        {
          url: 'https://x.com/0xSero/status/2006750242176139665',
          quote: 'Prime Intellect has been very easy to use... Renting out 8x H200s for $13~/hour',
          impressions: 15117,
        },
        {
          url: 'https://x.com/0xSero/status/2007779404500373772',
          quote: 'I think I did good in this 80 hour run... I was able to shrink GLM-4.7 from 720GB → 92GB.',
          impressions: 12597,
        },
      ],
    },
    {
      id: 'rabbitholes',
      title: 'Rabbit Holes',
      subtitle: 'RAG Everything',
      date: 'Jan 10-18, 2026',
      day: 133,
      tweets: [
        {
          url: 'https://x.com/0xSero/status/2010026812139811183',
          quote: 'I rag all my AI/agent chat history and have conversations with it now... Good dude.',
          impressions: 116224,
          viral: true,
          peak: true,
        },
        {
          url: 'https://x.com/0xSero/status/2011520377563070502',
          quote: 'GLM-4.7 + Droid is god tier... 35M tokens in a day just in Droid.',
          impressions: 48505,
        },
        {
          url: 'https://x.com/0xSero/status/2012889904611553491',
          quote: 'Let me make your life better... Use that data to learn more about yourself.',
          impressions: 28708,
        },
        {
          url: 'https://x.com/0xSero/status/2011523763893125317',
          quote: 'I quantized GLM-4.7-Reap by Cerebras, enjoy probably better than mine.',
          impressions: 27130,
        },
        {
          url: 'https://x.com/0xSero/status/2010296695406395851',
          quote: 'Here\'s the dumbest engineering idea to get GLM-4.7 at 32GB VRAM... No reason this shouldn\'t work.',
          impressions: 23247,
        },
        {
          url: 'https://x.com/0xSero/status/2012912540813000986',
          quote: 'GLM-4.7 running locally plans a refactor... Good plan, GLM was always a good communicator.',
          impressions: 19737,
        },
        {
          url: 'https://x.com/0xSero/status/2011760575802732590',
          quote: 'GLM running coding locally... Working like a charm. 40 TPS gen, 400 TPS prefill.',
          impressions: 14827,
        },
        {
          url: 'https://x.com/0xSero/status/2012200047216148974',
          quote: 'I took all my AI chats... then ragged it. Afterwards I trained a LoRA...',
          impressions: 8935,
        },
        {
          url: 'https://x.com/0xSero/status/2010664456565735912',
          quote: 'I made a configuration mistake with MiniMax-M2.1... Dusting off Prime Intellect and redoing this REAP.',
          impressions: 4998,
        },
      ],
    },
  ];

  const totalTweets = phases.reduce((acc, p) => acc + p.tweets.length, 0);

  // Entry Screen
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
        <div style={{
          position: 'absolute',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(180, 140, 90, 0.1) 0%, transparent 70%)',
          filter: 'blur(60px)',
          animation: 'pulse 4s ease-in-out infinite',
        }} />
        
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
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

        <div style={{
          fontSize: '9px',
          letterSpacing: '0.4em',
          color: 'rgba(180, 150, 100, 0.5)',
          marginBottom: '28px',
          fontFamily: 'monospace',
          textTransform: 'uppercase',
        }}>
          Case Study
        </div>
        
        <h1 style={{
          fontSize: 'clamp(32px, 9vw, 80px)',
          fontWeight: '200',
          letterSpacing: '-0.03em',
          color: 'rgba(245, 240, 230, 0.95)',
          marginBottom: '16px',
          textAlign: 'center',
          lineHeight: 1.1,
        }}>
          The REAP Odyssey
        </h1>
        
        <p style={{
          fontSize: '14px',
          color: 'rgba(180, 160, 130, 0.6)',
          marginBottom: '48px',
          textAlign: 'center',
          maxWidth: '300px',
          lineHeight: 1.7,
          fontWeight: '300',
        }}>
          Democratizing frontier AI through compression
        </p>

        <div style={{
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
        }}>
          Enter
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>

        <div style={{
          position: 'absolute',
          bottom: '32px',
          fontSize: '10px',
          letterSpacing: '0.2em',
          color: 'rgba(150, 130, 100, 0.35)',
        }}>
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
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#1a1918',
      color: 'rgba(245, 240, 230, 0.9)',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      position: 'relative',
    }}>
      {/* Background */}
      <div style={{
        position: 'fixed',
        inset: 0,
        background: 'radial-gradient(ellipse at 50% 20%, rgba(160, 120, 70, 0.06) 0%, transparent 50%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        position: 'fixed',
        inset: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        opacity: 0.02,
        pointerEvents: 'none',
      }} />

      {/* Side nav - hidden on mobile */}
      {!isMobile && (
        <nav style={{
          position: 'fixed',
          left: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 100,
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
        }}>
          {phases.map((phase, i) => (
            <a
              key={phase.id}
              href={`#${phase.id}`}
              onClick={(e) => {
                e.preventDefault();
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

      {/* Header - minimal */}
      <header style={{
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
      }}>
        <div style={{
          fontSize: '10px',
          letterSpacing: '0.12em',
          color: 'rgba(180, 150, 100, 0.6)',
          fontFamily: 'monospace',
        }}>
          REAP
        </div>
        <div style={{
          fontSize: '9px',
          fontFamily: 'monospace',
          color: 'rgba(150, 130, 100, 0.4)',
        }}>
          {isMobile ? '~1M imp' : '~1M imp • 10+ models'}
        </div>
      </header>

      {/* Hero */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: isMobile ? '80px 24px 60px' : '100px 40px 60px',
        position: 'relative',
      }}>
        <div style={{
          opacity: Math.max(0, 1 - scrollY / 300),
          transform: `translateY(${scrollY * 0.2}px)`,
          textAlign: 'center',
        }}>
          <h1 style={{
            fontSize: isMobile ? '36px' : 'clamp(40px, 6vw, 64px)',
            fontWeight: '200',
            letterSpacing: '-0.02em',
            marginBottom: '16px',
            lineHeight: 1.1,
            color: 'rgba(245, 240, 230, 0.95)',
          }}>
            720GB → 92GB
          </h1>
          <p style={{
            fontSize: isMobile ? '14px' : '15px',
            color: 'rgba(180, 160, 130, 0.6)',
            maxWidth: '380px',
            lineHeight: 1.7,
            fontWeight: '300',
            margin: '0 auto',
          }}>
            7.8× compression of GLM-4.7 using Cerebras REAP
          </p>
          
          {/* Stats row */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: isMobile ? '20px' : '32px',
            marginTop: '40px',
            flexWrap: 'wrap',
          }}>
            {[
              { value: '~1M', label: 'impressions' },
              { value: '22K', label: 'YT views' },
              { value: '7K', label: 'downloads' },
              { value: '10+', label: 'models' },
            ].map((stat, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: isMobile ? '20px' : '24px',
                  fontWeight: '300',
                  fontFamily: 'monospace',
                  color: 'rgba(200, 160, 100, 0.8)',
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontSize: '9px',
                  color: 'rgba(150, 130, 100, 0.4)',
                  letterSpacing: '0.05em',
                  marginTop: '4px',
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{
          position: 'absolute',
          bottom: '40px',
          opacity: Math.max(0, 1 - scrollY / 120),
        }}>
          <div style={{
            width: '1px',
            height: '32px',
            backgroundColor: 'rgba(150, 130, 100, 0.15)',
            margin: '0 auto',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute',
              width: '100%',
              height: '12px',
              backgroundColor: 'rgba(200, 160, 100, 0.5)',
              animation: 'scrollLine 1.6s ease-in-out infinite',
            }} />
          </div>
        </div>
      </section>

      {/* Timeline */}
      <main style={{ 
        padding: isMobile ? '0 16px 80px' : '0 40px 100px', 
        marginLeft: isMobile ? 0 : '40px',
      }}>
        {phases.map((phase, phaseIndex) => {
          const phaseImpressions = phase.tweets.reduce((acc, t) => acc + t.impressions, 0);
          
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
              {/* Phase header */}
              <div style={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                gap: isMobile ? '16px' : '28px',
                alignItems: isMobile ? 'flex-start' : 'flex-start',
                marginBottom: '28px',
              }}>
                {/* Day */}
                <div style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '8px',
                  minWidth: isMobile ? 'auto' : '70px',
                }}>
                  <span style={{
                    fontSize: isMobile ? '28px' : '36px',
                    fontWeight: '100',
                    fontFamily: 'monospace',
                    color: activePhase === phaseIndex ? 'rgba(200, 160, 100, 0.85)' : 'rgba(150, 130, 100, 0.25)',
                    transition: 'color 0.3s ease',
                    lineHeight: 1,
                  }}>
                    {phase.day}
                  </span>
                  <span style={{
                    fontSize: '8px',
                    letterSpacing: '0.1em',
                    color: 'rgba(150, 130, 100, 0.35)',
                    textTransform: 'uppercase',
                  }}>
                    day
                  </span>
                </div>

                {/* Title block */}
                <div style={{ flex: 1 }}>
                  <div style={{
                    fontSize: '10px',
                    letterSpacing: '0.1em',
                    color: 'rgba(180, 150, 100, 0.45)',
                    marginBottom: '8px',
                    fontFamily: 'monospace',
                  }}>
                    {phase.date}
                  </div>
                  <h2 style={{
                    fontSize: isMobile ? '24px' : '32px',
                    fontWeight: '200',
                    marginBottom: '4px',
                    color: 'rgba(245, 240, 230, 0.95)',
                    lineHeight: 1.2,
                  }}>
                    {phase.title}
                  </h2>
                  <div style={{
                    fontSize: '13px',
                    color: 'rgba(180, 160, 130, 0.5)',
                    fontWeight: '300',
                  }}>
                    {phase.subtitle}
                  </div>
                </div>

                {/* Impressions */}
                <div style={{
                  padding: '10px 16px',
                  background: 'rgba(80, 70, 50, 0.12)',
                  borderRadius: '6px',
                  border: '1px solid rgba(120, 100, 70, 0.1)',
                  alignSelf: isMobile ? 'flex-start' : 'flex-start',
                }}>
                  <span style={{
                    fontSize: '18px',
                    fontWeight: '300',
                    fontFamily: 'monospace',
                    color: 'rgba(200, 160, 100, 0.8)',
                  }}>
                    {formatNumber(phaseImpressions)}
                  </span>
                  <span style={{
                    fontSize: '9px',
                    color: 'rgba(150, 130, 100, 0.4)',
                    marginLeft: '6px',
                  }}>
                    imp
                  </span>
                </div>
              </div>

              {/* Tweets */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}>
                {phase.tweets.map((tweet, tweetIndex) => (
                  <a
                    key={tweetIndex}
                    href={tweet.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setHoveredTweet(`${phase.id}-${tweetIndex}`)}
                    onMouseLeave={() => setHoveredTweet(null)}
                    style={{
                      display: 'block',
                      padding: isMobile ? '16px' : '16px 20px',
                      backgroundColor: hoveredTweet === `${phase.id}-${tweetIndex}` 
                        ? 'rgba(100, 85, 60, 0.18)' 
                        : tweet.peak 
                          ? 'rgba(90, 75, 50, 0.14)'
                          : 'rgba(60, 55, 45, 0.08)',
                      border: `1px solid ${
                        hoveredTweet === `${phase.id}-${tweetIndex}`
                          ? 'rgba(180, 150, 100, 0.3)'
                          : tweet.peak
                            ? 'rgba(180, 150, 100, 0.2)'
                            : 'rgba(120, 100, 70, 0.08)'
                      }`,
                      borderRadius: '8px',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                      position: 'relative',
                    }}
                  >
                    {(tweet.peak || tweet.viral) && (
                      <span style={{
                        position: 'absolute',
                        top: '10px',
                        right: '12px',
                        fontSize: '7px',
                        letterSpacing: '0.1em',
                        padding: '3px 8px',
                        backgroundColor: tweet.peak ? 'rgba(200, 160, 100, 0.2)' : 'rgba(160, 120, 80, 0.15)',
                        color: 'rgba(220, 190, 140, 0.8)',
                        borderRadius: '3px',
                        textTransform: 'uppercase',
                      }}>
                        {tweet.peak ? 'Peak' : 'Viral'}
                      </span>
                    )}

                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      marginBottom: '8px',
                    }}>
                      <span style={{
                        fontSize: '15px',
                        fontWeight: '400',
                        fontFamily: 'monospace',
                        color: tweet.impressions >= 50000 ? 'rgba(210, 170, 110, 0.85)' : 'rgba(180, 150, 100, 0.7)',
                      }}>
                        {formatNumber(tweet.impressions)}
                      </span>
                      {tweet.time && (
                        <span style={{
                          fontSize: '9px',
                          color: 'rgba(150, 130, 100, 0.35)',
                          fontFamily: 'monospace',
                        }}>
                          {tweet.time}
                        </span>
                      )}
                    </div>
                    
                    <p style={{
                      fontSize: isMobile ? '12px' : '13px',
                      lineHeight: 1.6,
                      color: 'rgba(220, 210, 190, 0.7)',
                      margin: 0,
                      paddingRight: (tweet.viral || tweet.peak) ? '50px' : '0',
                    }}>
                      "{tweet.quote}"
                    </p>

                    <div style={{
                      marginTop: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                      fontSize: '9px',
                      color: 'rgba(150, 130, 100, 0.35)',
                    }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                      </svg>
                      View on X
                    </div>
                  </a>
                ))}
              </div>
            </section>
          );
        })}

        {/* Prime Intellect */}
        <section style={{
          marginTop: '60px',
          padding: isMobile ? '28px' : '36px',
          background: 'linear-gradient(135deg, rgba(100, 80, 50, 0.1) 0%, rgba(60, 50, 35, 0.06) 100%)',
          border: '1px solid rgba(150, 120, 80, 0.12)',
          borderRadius: '12px',
        }}>
          <div style={{
            fontSize: '8px',
            letterSpacing: '0.18em',
            color: 'rgba(200, 160, 100, 0.5)',
            marginBottom: '12px',
            textTransform: 'uppercase',
          }}>
            Sponsorship • 12 Hours
          </div>
          
          <h3 style={{
            fontSize: isMobile ? '20px' : '22px',
            fontWeight: '200',
            marginBottom: '24px',
            color: 'rgba(245, 240, 230, 0.85)',
          }}>
            Prime Intellect
          </h3>
          
          <div style={{
            display: 'flex',
            gap: isMobile ? '24px' : '32px',
            flexWrap: 'wrap',
          }}>
            {[
              { value: '8×', label: 'H200s' },
              { value: '$13', label: '/hour' },
              { value: '80', label: 'hours' },
              { value: '7.8×', label: 'smaller' },
            ].map((stat, i) => (
              <div key={i}>
                <div style={{
                  fontSize: isMobile ? '22px' : '26px',
                  fontWeight: '200',
                  fontFamily: 'monospace',
                  color: 'rgba(200, 160, 100, 0.8)',
                  lineHeight: 1,
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontSize: '9px',
                  color: 'rgba(150, 130, 100, 0.45)',
                  marginTop: '4px',
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Resources */}
        <div style={{
          marginTop: '48px',
          display: 'flex',
          gap: '8px',
          flexWrap: 'wrap',
        }}>
          {[
            { label: 'Case Study', url: 'https://www.sybilsolutions.ai/case-studies/glm-4-7-compression' },
            { label: 'HuggingFace', url: 'https://huggingface.co/0xSero' },
            { label: '@0xSero', url: 'https://x.com/0xSero' },
            { label: 'REAP Paper', url: 'https://arxiv.org/html/2510.13999v1' },
          ].map((link, i) => (
            <a
              key={i}
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

        {/* Footer */}
        <footer style={{
          marginTop: '80px',
          paddingTop: '28px',
          borderTop: '1px solid rgba(100, 90, 70, 0.1)',
        }}>
          <blockquote style={{
            fontSize: isMobile ? '14px' : '16px',
            fontStyle: 'italic',
            fontWeight: '300',
            color: 'rgba(200, 180, 150, 0.5)',
            lineHeight: 1.7,
            marginBottom: '12px',
          }}>
            "We need to be able to run intelligence locally... prevent power consolidation."
          </blockquote>
          <div style={{ fontSize: '11px', color: 'rgba(180, 150, 100, 0.4)' }}>
            — @0xSero
          </div>
          <div style={{
            marginTop: '28px',
            fontSize: '9px',
            color: 'rgba(120, 100, 80, 0.35)',
            letterSpacing: '0.06em',
          }}>
            Aug 30, 2025 → Jan 19, 2026 • 145 Days
          </div>
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

export default REAPOdyssey;
