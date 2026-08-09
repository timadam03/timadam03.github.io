---
permalink: /
title: "Tim Lukas Adam"
author_profile: false
share: false
comments: false
---

<div class="home-layout">
<aside class="profile-sidebar">
  <div class="profile-image">
    <img src="/images/profile.png" alt="Tim Lukas Adam" />
  </div>
  <h2 class="sidebar-name">Tim Lukas Adam</h2>
  <p class="sidebar-role">Incoming MSc student in Autonomous Systems at DTU.</p>
  <div class="profile-details">
    <p><i class="fas fa-location-dot"></i> Copenhagen / Hamburg</p>
    <p><i class="fas fa-building-columns"></i> SDU Data &amp; Intelligence Lab</p>
    <p><i class="fas fa-envelope"></i> <a href="mailto:timlukas.adam@gmail.com">Email</a></p>
    <p><i class="fab fa-github"></i> <a href="https://github.com/timadam03">GitHub</a></p>
    <p><i class="fab fa-linkedin"></i> <a href="https://www.linkedin.com/in/tim-lukas-adam-3116633b0/">LinkedIn</a></p>
  </div>
</aside>

<main class="home-main" markdown="1">
<header class="profile-section">
  <div class="profile-copy">
    <h1 class="profile-name">Tim Lukas Adam</h1>
    <p class="profile-lede">I recently completed a BSc in Software Engineering at the University of Southern Denmark and will begin the MSc in Autonomous Systems at DTU in September 2026. I currently collaborate on applied AI research at the SDU Data &amp; Intelligence Lab. My interests include practical and observable AI, language models, agentic systems, and intelligent systems for infrastructure and energy.</p>
  </div>
</header>

## Research

<div class="paper-list">

  <div class="paper-item" data-href="/files/cake-paper.pdf" role="link" tabindex="0">
    <a class="paper-card-hitbox" href="/files/cake-paper.pdf" aria-label="Open CAKE paper PDF"></a>
    <h3 class="paper-title">CAKE: Cloud Architecture Knowledge Evaluation of Large Language Models</h3>
    <div class="paper-meta-line">
      <span class="paper-authors"><strong>Tim Lukas Adam</strong>, Phongsakon Mark Konrad, Riccardo Terrenzi, Florian Girardo Lukas, Rahame Yilmaz, Krzysztof Sierszecki, Serkan Ayvaz</span>
    </div>
    <div class="paper-meta-line">
      <span class="paper-venue">KDA-AI Workshop, IEEE ICSA 2026</span>
      <span class="paper-status status-accepted">Accepted</span>
    </div>
    <button class="abstract-toggle" aria-expanded="false">
      <span class="abstract-label">Abstract</span>
      <svg class="abstract-arrow" width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M2 4L6 8L10 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <div class="abstract-content" hidden>
      <p>In today's software architecture, large language models (LLMs) serve as software architecture co-pilots. However, no benchmark currently exists to evaluate large language models' actual understanding of cloud-native software architecture. For this reason we present a benchmark called CAKE, which consists of 188 expert-validated questions covering four cognitive levels of Bloom's revised taxonomy -- recall, analyze, design, and implement -- and five cloud-native topics. Evaluation is conducted on 22 model configurations (0.5B--70B parameters) across four LLM families, using three-run majority voting for multiple-choice questions (MCQs) and LLM-as-a-judge scoring for free-responses (FR). Based on this evaluation, four notable findings were identified. First, MCQ accuracy plateaus above 3B parameters, with the best model reaching 99.2%. Second, free-response scores scale steadily across all cognitive levels. Third, the two formats capture different facets of knowledge, as the MCQ accuracy approaches a ceiling while free-responses continue to differentiate models. Finally, reasoning augmentation (+think) improves free-response quality, while tool augmentation (+tool) degrades performance for small models. These results suggest that the evaluation format fundamentally shapes how we measure architectural knowledge in LLMs.</p>
    </div>
  </div>

  <div class="paper-item" data-href="/files/architecture-without-architects.pdf" role="link" tabindex="0">
    <a class="paper-card-hitbox" href="/files/architecture-without-architects.pdf" aria-label="Open Architecture Without Architects paper PDF"></a>
    <h3 class="paper-title">Architecture Without Architects: How AI Coding Agents Shape Software Architecture</h3>
    <div class="paper-meta-line">
      <span class="paper-authors">Phongsakon Mark Konrad, <strong>Tim Lukas Adam</strong>, Riccardo Terrenzi, Serkan Ayvaz</span>
    </div>
    <div class="paper-meta-line">
      <span class="paper-venue">SAGAI Workshop, IEEE ICSA 2026</span>
      <span class="paper-status status-accepted">Accepted</span>
    </div>
    <button class="abstract-toggle" aria-expanded="false">
      <span class="abstract-label">Abstract</span>
      <svg class="abstract-arrow" width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M2 4L6 8L10 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <div class="abstract-content" hidden>
      <p>AI coding agents select frameworks, scaffold infrastructure, and wire integrations, often in seconds. These are architectural decisions, yet almost no one reviews them as such. We identify five mechanisms by which agents make implicit architectural choices and propose six prompt-architecture coupling patterns that map natural-language prompt features to the infrastructure they require. The patterns range from contingent couplings (structured output validation) that may weaken as models improve to fundamental ones (tool-call orchestration) that persist regardless of model capability. An illustrative demonstration confirms that prompt wording alone produces structurally different systems for the same task. We term the phenomenon vibe architecting, architecture shaped by prompts rather than deliberate design, and outline review practices, decision records, and tooling to bring these hidden decisions under governance.</p>
    </div>
  </div>

  <div class="paper-item" data-href="/files/agentic-hybrid-retrieval.pdf" role="link" tabindex="0">
    <a class="paper-card-hitbox" href="/files/agentic-hybrid-retrieval.pdf" aria-label="Open Agentic Hybrid Retrieval paper PDF"></a>
    <h3 class="paper-title">A Reference Architecture for Agentic Hybrid Retrieval in Dataset Search</h3>
    <div class="paper-meta-line">
      <span class="paper-authors">Riccardo Terrenzi, Phongsakon Mark Konrad, <strong>Tim Lukas Adam</strong>, Serkan Ayvaz</span>
    </div>
    <div class="paper-meta-line">
      <span class="paper-venue">SAML Workshop, IEEE ICSA 2026</span>
      <span class="paper-status status-accepted">Accepted</span>
    </div>
    <button class="abstract-toggle" aria-expanded="false">
      <span class="abstract-label">Abstract</span>
      <svg class="abstract-arrow" width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M2 4L6 8L10 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <div class="abstract-content" hidden>
      <p>Ad hoc dataset search requires matching underspecified natural-language queries against sparse, heterogeneous metadata records, a task where typical lexical or dense retrieval alone falls short. We reposition dataset search as a software-architecture problem and propose a bounded, auditable reference architecture for agentic hybrid retrieval that combines BM25 lexical search with dense-embedding retrieval via reciprocal rank fusion, orchestrated by a large language model agent that repeatedly plans queries, evaluates the sufficiency of results, and reranks candidates. To reduce vocabulary mismatch, we introduce an offline metadata augmentation step in which an LLM generates pseudo-queries for each dataset record, augmenting both retrieval indexes before query time. Two architectural styles are examined: a single ReAct agent and a multi-agent horizontal architecture with Feedback Control. Their quality-attribute tradeoffs are analyzed with respect to modifiability, observability, performance, and governance.</p>
    </div>
  </div>

  <div class="paper-item" data-href="https://arxiv.org/abs/2605.10601" role="link" tabindex="0">
    <a class="paper-card-hitbox" href="https://arxiv.org/abs/2605.10601" aria-label="Open The Open-Box Fallacy on arXiv"></a>
    <h3 class="paper-title">The Open-Box Fallacy: Why AI Deployment Needs a Calibrated Verification Regime</h3>
    <div class="paper-meta-line">
      <span class="paper-authors">Phongsakon Mark Konrad, <strong>Tim Lukas Adam</strong>, Anders C. H. Merrild, Riccardo Terrenzi, Raffaele De Rosa, Taha Tanyel, Serkan Ayvaz</span>
    </div>
    <div class="paper-meta-line">
      <span class="paper-venue">Preprint, arXiv:2605.10601</span>
      <span class="paper-status status-submitted">Preprint</span>
    </div>
    <button class="abstract-toggle" aria-expanded="false">
      <span class="abstract-label">Summary</span>
      <svg class="abstract-arrow" width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M2 4L6 8L10 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <div class="abstract-content" hidden>
      <p>This paper argues that transparency alone is not sufficient for trustworthy AI deployment. It proposes calibrated verification and a six-component Verification Coverage standard for governing AI systems in sensitive domains.</p>
    </div>
  </div>

</div>

## Experience

<style>
  .paper-item::before,
  .project-item::before {
    content: none;
  }
</style>

<div class="experience-list">
  <div class="experience-item">
    <div>
      <h3>Research Collaborator</h3>
      <p>SDU Data &amp; Intelligence Lab · Sønderborg, Denmark</p>
    </div>
    <span>2026 — Present</span>
    <p>Applied AI and machine-learning research spanning problem formulation, experimental design, implementation, analysis, and writing.</p>
  </div>
  <div class="experience-item">
    <div>
      <h3>Student Ambassador</h3>
      <p>University of Southern Denmark · Sønderborg, Denmark</p>
    </div>
    <span>2024 — 2026</span>
    <p>Represented SDU at national and international education fairs and communicated the student experience to prospective students.</p>
  </div>
  <div class="experience-item">
    <div>
      <h3>Student Assistant, IT Service</h3>
      <p>University of Southern Denmark · Sønderborg, Denmark</p>
    </div>
    <span>2024 — 2025</span>
    <p>Supported students and staff with day-to-day IT service requests and technical issues.</p>
  </div>
</div>

## Selected Projects

<div class="project-list">
  <div class="project-item">
    <h3 class="project-title">Heimdall: Only the Safe Shall Pass</h3>
    <p class="project-meta">Bachelor Thesis · Danfoss · 2026</p>
    <p class="project-desc">A conformal verifier between autonomous bidders and the Nordic electricity balancing market. Co-developed as an end-to-end system combining probabilistic forecasting, conformal prediction, and LLM-based bidding agents to make market bids safer and auditable. Awarded best bachelor thesis in the SDU Software Engineering programme and nominated for Best TEK Bachelor Thesis 2026.</p>
  </div>
  <div class="project-item">
    <h3 class="project-title">Automated Tag and Summary Generation for Audio/Video Content</h3>
    <p class="project-meta">SpeedAdmin · Spring 2025</p>
    <p class="project-desc">Developed a locally deployed AI pipeline to transcribe, summarize, and categorize educational audio and video content.</p>
  </div>
  <div class="project-item">
    <h3 class="project-title">Data Analysis for Transportation Systems</h3>
    <p class="project-meta">HKUST · Fall 2025</p>
    <p class="project-desc">Analysed smart-card transportation data using queueing models and machine learning to identify travel patterns and factors affecting waiting and transfer times.</p>
  </div>
</div>

## Education

<div class="education-timeline">

  <div class="edu-item">
    <div class="edu-marker"><div class="edu-dot"></div><div class="edu-line"></div></div>
    <div class="edu-content">
      <h3 class="edu-title">MSc Autonomous Systems</h3>
      <div class="edu-meta">
        <span class="edu-date">2026 — Present</span>
      </div>
      <p class="edu-venue">Technical University of Denmark (DTU)</p>
      <p class="edu-desc">Incoming September 2026.</p>
    </div>
  </div>

  <div class="edu-item">
    <div class="edu-marker"><div class="edu-dot"></div><div class="edu-line"></div></div>
    <div class="edu-content">
      <h3 class="edu-title">BSc in Engineering, Software Engineering</h3>
      <div class="edu-meta">
        <span class="edu-date">2023 — 2026</span>
      </div>
      <p class="edu-venue">University of Southern Denmark, Sonderborg</p>
      <p class="edu-desc">Graduated June 2026. Project-oriented programme with semester projects developed around real company cases and data; bachelor thesis completed in cooperation with Danfoss.</p>
    </div>
  </div>

  <div class="edu-item">
    <div class="edu-marker"><div class="edu-dot"></div><div class="edu-line"></div></div>
    <div class="edu-content">
      <h3 class="edu-title">Exchange Semester</h3>
      <div class="edu-meta">
        <span class="edu-date">Fall 2025</span>
      </div>
      <p class="edu-venue">Hong Kong University of Science and Technology (HKUST)</p>
      <p class="edu-desc">Machine Learning; Large Language Models; Data Analysis for Smart Transportation Systems.</p>
    </div>
  </div>

  <div class="edu-item">
    <div class="edu-marker"><div class="edu-dot"></div><div class="edu-line"></div></div>
    <div class="edu-content">
      <h3 class="edu-title">German Abitur — High School Diploma</h3>
      <div class="edu-meta">
        <span class="edu-date">2022</span>
      </div>
      <p class="edu-venue">Gymnasium Kaiser-Friedrich-Ufer · Hamburg, Germany</p>
      <p class="edu-desc">Final grade: 1.5.</p>
    </div>
  </div>

</div>

</main>
</div>
