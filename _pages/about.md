---
permalink: /
title: "Tim Lukas Adam"
author_profile: false
share: false
comments: false
---

<h1 class="profile-name">Tim Lukas Adam</h1>

<div class="profile-section">
  <div class="profile-image">
    <img src="/images/profile.png" alt="Tim Lukas Adam" />
  </div>
  <div class="profile-details">
    <p><i class="fas fa-location-dot"></i> Sonderborg / Hamburg</p>
    <p><i class="fas fa-building-columns"></i> SDU University of Southern Denmark</p>
    <p><i class="fas fa-envelope"></i> <a href="mailto:timlukas.adam@gmail.com">timlukas.adam@gmail.com</a></p>
    <p><i class="fab fa-github"></i> <a href="https://github.com/timadam03">timadam03</a></p>
  </div>
</div>

I'm a bachelor student starting research in LLMs and Agents, focusing on Small Language Models and their potential and limitations. After finishing high school in Hamburg, Germany, I am now pursuing my BSc in Software Engineering at SDU, where I am currently in my 6th semester working on my bachelor's thesis.

After focusing on art and architecture in high school, I shifted towards programming and pursued a software engineering degree. During my studies, I discovered my interest for artificial intelligence. To deepen my knowledge, I pursued an exchange semester at HKUST, where I took ML and LLM courses. I am now looking to continue my academic journey with a master's degree in AI and Applied AI, with a focus on civil engineering or data analysis.


## Research

<div class="paper-list">

  <div class="paper-item">
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
    <p class="paper-links"><a href="/files/cake-paper.pdf" class="paper-link" target="_blank">View Full Paper</a></p>
  </div>

  <div class="paper-item">
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
    <p class="paper-links"><a href="/files/architecture-without-architects.pdf" class="paper-link" target="_blank">View Full Paper</a></p>
  </div>

</div>

<script>
document.querySelectorAll('.abstract-toggle').forEach(function(btn) {
  btn.addEventListener('click', function() {
    var content = this.nextElementSibling;
    var isExpanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', !isExpanded);
    content.hidden = isExpanded;
    var arrow = this.querySelector('.abstract-arrow');
    arrow.style.transform = isExpanded ? '' : 'rotate(180deg)';
  });
});
</script>

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
      <p class="edu-desc">Choosing courses focused on AI and Data Analysis:</p>
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
      <p class="edu-desc">a project-oriented and applied program. Semester projects are often in cooperation with companies using real-life cases and data.</p>
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
      <p class="edu-desc">After focusing on art and architecture in high school, I shifted towards programming and pursued a software engineering degree.</p>
    </div>
  </div>

</div>

## Ongoing Projects

<div class="project-item">
  <h3 class="project-title">The Trader's Trinity: Forecasting Models, RL Agents, and LLM Judges for Day-Ahead Markets</h3>
  <p class="project-meta">In cooperation with Danfoss</p>
  <p class="project-desc">Investigating the utilization of different AI models for predicting and explaining the Danish energy markets.</p>
</div>

