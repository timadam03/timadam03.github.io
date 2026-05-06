---
permalink: /
title: "Tim Lukas Adam"
author_profile: false
share: false
comments: false
---

<section class="profile-section">
  <div class="profile-copy">
    <h1 class="profile-name">Tim Lukas Adam</h1>
    <p class="profile-lede">Final-year Software Engineering student with a focus on applied artificial intelligence, large language models, and data-driven systems. Experienced in developing and evaluating AI solutions through industry-linked projects and research, including local LLM deployment, fine-tuning, benchmarking, and multi-agent systems.</p>
  </div>
  <div class="profile-image">
    <img src="/images/profile.png" alt="Tim Lukas Adam" />
  </div>
  <div class="profile-details">
    <p><i class="fas fa-location-dot"></i> Sonderborg / Hamburg</p>
    <p><i class="fas fa-building-columns"></i> SDU University of Southern Denmark</p>
    <p><i class="fas fa-envelope"></i> <a href="mailto:timlukas.adam@gmail.com">Email</a></p>
    <p><i class="fab fa-github"></i> <a href="https://github.com/timadam03">GitHub</a></p>
    <p><i class="fab fa-linkedin"></i> <a href="https://www.linkedin.com/in/tim-lukas-adam-3116633b0/">LinkedIn</a></p>
  </div>
</section>

<section class="intro-panel">
  <div>
    <p>I am a final-year BSc Software Engineering student at the University of Southern Denmark, currently writing my bachelor’s thesis in collaboration with Danfoss. Over the course of my studies, I have become increasingly focused on applied AI, especially large language models, agent-based systems, and the use of intelligent systems in real-world domains.</p>
    <p>An exchange semester at HKUST helped sharpen that direction through coursework in machine learning, large language models, and data analysis. Next, I am looking to continue with a master’s degree in AI or Applied AI, with a strong interest in civil engineering, infrastructure, and data-driven systems.</p>
  </div>
</section>

## Interests

<div class="finding-grid interest-grid">
  <div>
    <span>1.</span>
    <h3>LLM scaling laws and limitations</h3>
    <p>Understanding where model capability grows, saturates, or breaks.</p>
  </div>
  <div>
    <span>2.</span>
    <h3>Agentic systems</h3>
    <p>Tool-using systems with observable decisions.</p>
  </div>
  <div>
    <span>3.</span>
    <h3>Small language models</h3>
    <p>Efficient models for local and practical AI.</p>
  </div>
  <div>
    <span>4.</span>
    <h3>Applied AI systems</h3>
    <p>AI for infrastructure and data-driven systems.</p>
  </div>
</div>


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

</div>

## Ongoing Projects

<style>
  .paper-item::before,
  .project-item::before {
    content: none;
  }
</style>

<div class="project-item">
  <h3 class="project-title">The Trader's Trinity: Forecasting Models, RL Agents, and LLM Judges for Day-Ahead Markets</h3>
  <p class="project-meta">Bachelor Thesis Project in cooperation with Danfoss</p>
  <p class="project-desc">Investigating how forecasting models, reinforcement learning agents, and LLM-based judges can predict and explain behavior in Danish energy markets.</p>
</div>

## Education

<div class="education-timeline">

  <div class="edu-item">
    <div class="edu-marker"><div class="edu-dot"></div><div class="edu-line"></div></div>
    <div class="edu-content">
      <h3 class="edu-title">Semester Abroad</h3>
      <div class="edu-meta">
        <span class="edu-date">Fall 2025</span>
      </div>
      <p class="edu-venue">Hong Kong University of Science and Technology (HKUST)</p>
      <p class="edu-desc">Selected courses focused on machine learning, language models, and applied data analysis:</p>
      <ul class="edu-courses">
        <li>COMP4211 Machine Learning</li>
        <li>COMP4901B Large Language Models</li>
        <li>CIVL4610 Data Analysis for Smart Transportation Systems</li>
      </ul>
    </div>
  </div>

  <div class="edu-item">
    <div class="edu-marker"><div class="edu-dot"></div><div class="edu-line"></div></div>
    <div class="edu-content">
      <h3 class="edu-title">Bachelor of Software Engineering</h3>
      <div class="edu-meta">
        <span class="edu-date">2023 — Present</span>
      </div>
      <p class="edu-venue">University of Southern Denmark, Sonderborg</p>
      <p class="edu-desc">Project-oriented and applied program with semester projects often developed with companies around real cases and data.</p>
    </div>
  </div>

  <div class="edu-item">
    <div class="edu-marker"><div class="edu-dot"></div><div class="edu-line"></div></div>
    <div class="edu-content">
      <h3 class="edu-title">German Abitur — High School Diploma</h3>
      <div class="edu-meta">
        <span class="edu-date">2022</span>
      </div>
      <p class="edu-venue">Gymnasium Kaiser-Friedrich-Ufer, Hamburg</p>
    </div>
  </div>

</div>
