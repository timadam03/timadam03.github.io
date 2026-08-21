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
    <p><i class="fas fa-building-columns"></i> Technical University of Denmark</p>
    <p><i class="fas fa-envelope"></i> <a href="mailto:timlukas.adam@gmail.com">Email</a></p>
    <p><i class="fab fa-github"></i> <a href="https://github.com/timadam03">GitHub</a></p>
    <p><i class="fab fa-linkedin"></i> <a href="https://www.linkedin.com/in/tim-lukas-adam-3116633b0/">LinkedIn</a></p>
  </div>
</aside>

<main class="home-main" markdown="1">
<header class="profile-section">
  <div class="profile-copy">
    <h1 class="profile-name">Tim Lukas Adam</h1>
    <p class="profile-lede">I recently completed a BSc in Software Engineering at the <a href="https://www.sdu.dk/en/">University of Southern Denmark</a> after an exchange semester at the <a href="https://hkust.edu.hk/">Hong Kong University of Science and Technology (HKUST)</a>, and will begin the MSc in Autonomous Systems at <a href="https://www.dtu.dk/english/">DTU</a> in September 2026. I currently work as a research collaborator with the <a href="https://aiml-sdu.github.io/">Artificial Intelligence and Machine Learning Lab</a>, contributing to applied AI research from problem formulation and implementation to evaluation and scientific writing. My work so far has centered on language models, agentic systems, and applied AI.</p>
  </div>
</header>

## Current Focus

<p class="focus-copy">My background in software engineering and applied AI is expanding toward autonomous systems that can perceive, decide, and act in dynamic environments. I am particularly interested in computer vision and machine perception, reinforcement learning, and embodied AI, while continuing to draw on my experience with language models and agentic systems. More broadly, I am drawn to applied AI that connects research with real-world applications, and I look forward to exploring how these ideas can extend into autonomous and embodied systems.</p>

## Publications

<div class="paper-list">

  <div class="paper-item" data-href="/files/cake-paper.pdf" role="link" tabindex="0">
    <a class="paper-card-hitbox" href="/files/cake-paper.pdf" aria-label="Open CAKE paper PDF"></a>
    <h3 class="paper-title">CAKE: Cloud Architecture Knowledge Evaluation of Large Language Models</h3>
    <div class="paper-meta-line">
      <span class="paper-authors"><strong>Tim Lukas Adam</strong>, Phongsakon Mark Konrad, Riccardo Terrenzi, Florian Girardo Lukas, Rahime Yilmaz, Krzysztof Sierszecki, Serkan Ayvaz</span>
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

  <div class="paper-item" data-href="https://arxiv.org/pdf/2605.10601" role="link" tabindex="0">
    <a class="paper-card-hitbox" href="https://arxiv.org/pdf/2605.10601" aria-label="Open The Open-Box Fallacy paper PDF"></a>
    <h3 class="paper-title">The Open-Box Fallacy: Why AI Deployment Needs a Calibrated Verification Regime</h3>
    <div class="paper-meta-line">
      <span class="paper-authors">Phongsakon Mark Konrad, <strong>Tim Lukas Adam</strong>, Ane Cathrine Holst Merrild, Riccardo Terrenzi, Rebecca De Rosa, Toygar Tanyel, Serkan Ayvaz</span>
    </div>
    <div class="paper-meta-line">
      <span class="paper-venue">Preprint, arXiv:2605.10601</span>
      <span class="paper-status status-submitted">Preprint</span>
    </div>
    <button class="abstract-toggle" aria-expanded="false">
      <span class="abstract-label">Abstract</span>
      <svg class="abstract-arrow" width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M2 4L6 8L10 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <div class="abstract-content" hidden>
      <p>AI deployment in sensitive domains such as health care, credit, employment, and criminal justice is often treated as unsafe to authorize until model internals can be explained. This often leads to an excessive reliance on mechanistic interpretability to address a deployment challenge beyond its intended scope. We argue that the gate should instead be calibrated verification: authorization should be domain-scoped, independently checkable, monitored after release, accountable, contestable, and revocable. The reason is twofold. First, model capability is uneven across nearby tasks, so authorization must attach to a specific use rather than to a model in general. Second, societies have long governed opaque expertise through credentials, monitoring, liability, appeal, and revocation rather than mechanism-level explanation. Recent evidence reinforces this distinction between mechanistic understanding and deployment authority: a 53-percentage-point gap between internal representations and output correction shows that understanding may not translate into action, while one scoping review found that only 9.0% of FDA-approved AI/ML device documents contained a prospective post-market surveillance study. We propose Verification Coverage, a six-component reportable standard with a minimum-composition rule, as the metric that should sit beside capability scores in model cards, leaderboards, and regulatory disclosures.</p>
    </div>
  </div>

</div>

<style>
  .paper-item::before,
  .project-item::before {
    content: none;
  }
</style>

## Selected Projects

<div class="project-list">
  <div class="project-item">
    <h3 class="project-title">Heimdall: Only the Safe Shall Pass</h3>
    <p class="project-meta">Bachelor Thesis · Danfoss · 2026</p>
    <p class="project-desc">A conformal verifier between autonomous bidders and the Nordic electricity balancing market. Co-developed as an end-to-end system combining probabilistic forecasting, conformal prediction, and LLM-based bidding agents to make market bids safer and auditable. <strong>Awarded best bachelor thesis in the SDU Software Engineering programme and nominated for Best TEK Bachelor Thesis 2026.</strong></p>
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

</main>
</div>
