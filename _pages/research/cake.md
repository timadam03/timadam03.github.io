---
permalink: /research/cake/
title: "CAKE: Cloud Architecture Knowledge Evaluation of Large Language Models"
author_profile: false
share: false
comments: false
---

<article class="research-page">
  <nav class="research-back"><a href="/">Back to home</a></nav>

  <header class="research-hero">
    <div class="research-hero__copy">
      <p class="research-eyebrow">Accepted · KDA-AI Workshop, IEEE ICSA 2026</p>
      <h1>CAKE: Cloud Architecture Knowledge Evaluation of Large Language Models</h1>
      <p class="research-authors"><strong>Tim Lukas Adam</strong>, Phongsakon Mark Konrad, Riccardo Terrenzi, Florian Girardo Lukas, Rahime Yilmaz, Krzysztof Sierszecki, Serkan Ayvaz</p>
      <div class="research-tags" aria-label="Paper topics">
        <span>LLM evaluation</span>
        <span>Software architecture</span>
        <span>Benchmark</span>
        <span>Cloud-native</span>
      </div>
    </div>
    <aside class="research-hero__meta">
      <p><span>Questions</span><strong>188</strong></p>
      <p><span>Models</span><strong>22</strong></p>
      <p><span>Families</span><strong>4</strong></p>
      <p><span>Scale</span><strong>0.5B-70B</strong></p>
    </aside>
  </header>

  <section class="research-section research-abstract">
    <h2>Abstract</h2>
    <p>Large language models increasingly serve as software architecture co-pilots, yet no benchmark directly evaluates their understanding of cloud-native software architecture. CAKE addresses this gap with 188 expert-validated questions across four cognitive levels of Bloom's revised taxonomy: recall, analyze, design, and implement.</p>
    <p>We evaluate 22 model configurations from four LLM families using three-run majority voting for multiple-choice questions and LLM-as-a-judge scoring for free responses. MCQ accuracy plateaus above 3B parameters, while free-response scores continue to separate model capability. Reasoning augmentation improves free-response quality, while tool augmentation degrades performance for smaller models.</p>
  </section>

  <section class="research-section">
    <h2>Key Findings</h2>
    <div class="finding-grid">
      <div>
        <span>01</span>
        <h3>MCQ accuracy saturates early</h3>
        <p>Above roughly 3B parameters, multiple-choice scores approach a ceiling, with the best model reaching 99.2% accuracy.</p>
      </div>
      <div>
        <span>02</span>
        <h3>Free response keeps differentiating</h3>
        <p>Open-ended architectural answers expose capability gaps that MCQs hide, especially for design and implementation tasks.</p>
      </div>
      <div>
        <span>03</span>
        <h3>Evaluation format changes the story</h3>
        <p>MCQ and free-response evaluation measure different facets of architectural knowledge and should not be treated as interchangeable.</p>
      </div>
      <div>
        <span>04</span>
        <h3>Augmentation depends on model size</h3>
        <p><code>+think</code> improves free-response quality, while <code>+tool</code> harms smaller models and only stabilizes near 8B parameters.</p>
      </div>
    </div>
  </section>

  <section class="research-section split-section">
    <div>
      <h2>Contributions</h2>
      <ul class="research-list">
        <li>A cloud-native software architecture benchmark with 188 expert-validated questions.</li>
        <li>Coverage across recall, analyze, design, and implement levels from Bloom's revised taxonomy.</li>
        <li>An empirical evaluation of 22 configurations across Qwen, Llama, Mistral, and GPT model families.</li>
        <li>Public benchmark artifacts for evaluating architectural knowledge in LLMs.</li>
      </ul>
    </div>
    <div>
      <h2>Method In Brief</h2>
      <ul class="research-list">
        <li>Questions were generated from cloud-native architecture concepts and expert-reviewed for clarity, correctness, and difficulty.</li>
        <li>MCQs were evaluated with shuffled options and three-run majority voting to reduce positional bias.</li>
        <li>Free-response answers were scored on a deterministic 0-5 rubric using an LLM judge.</li>
        <li>Models were tested in base, structured reasoning, and tool-augmented configurations where available.</li>
      </ul>
    </div>
  </section>

  <section class="research-section">
    <h2>Selected Figures</h2>
    <div class="figure-grid">
      <figure>
        <img src="/images/research/cake/fig_topic_skill.png" alt="CAKE question distribution across topics and cognitive levels" />
        <figcaption>Question distribution across cloud-native topics and cognitive levels.</figcaption>
      </figure>
      <figure>
        <img src="/images/research/cake/fig_fr_overview.png" alt="Free-response judge scores across cognitive levels" />
        <figcaption>Free-response scores separate models across analyze, design, implement, and overall performance.</figcaption>
      </figure>
      <figure>
        <img src="/images/research/cake/fig_augmentation.png" alt="Augmentation effects for think and tool configurations" />
        <figcaption>Reasoning and tool augmentation have different effects depending on model size and evaluation format.</figcaption>
      </figure>
      <figure>
        <img src="/images/research/cake/fig_core_comparison.png" alt="Full Bench versus CAKE-Core MCQ comparison" />
        <figcaption>CAKE-Core quality filtering preserves the overall ranking pattern.</figcaption>
      </figure>
    </div>
  </section>

  <footer class="research-download">
    <div>
      <h2>Read the full paper</h2>
      <p>The concise page above summarizes the work. The full IEEE workshop paper contains the complete related work, tables, analysis, limitations, and references.</p>
    </div>
    <a href="/files/cake-paper.pdf" target="_blank" rel="noopener">Download PDF</a>
  </footer>
</article>
