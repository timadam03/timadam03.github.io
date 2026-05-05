# AGENTS.md

## Repo Shape
- Minimal Jekyll 4 GitHub Pages site, not the old Academic Pages template.
- Public pages are `_pages/about.md`, `_pages/research/cake.md`, and `_pages/404.md`; `_config.yml` includes `_pages` and `files`.
- Page-specific markup lives in `_pages/*.md`; most custom visual styling lives inline in `_includes/head/custom.html`, with `assets/css/main.scss` only importing the retained Sass baseline and Font Awesome.
- `assets/js/site.js` only handles research abstract toggles and clickable paper cards. Do not reintroduce `main.min.js`, jQuery, Plotly, MathJax, Mermaid, or an npm pipeline unless explicitly requested.

## Commands
- On this macOS/Apple Silicon setup, use Homebrew Ruby before Bundler commands if `jekyll` is not found:
  `export PATH="/opt/homebrew/opt/ruby/bin:$PATH" && export GEM_HOME="$HOME/.gem/ruby/4.0.0" && export PATH="$GEM_HOME/bin:$PATH"`
- Install deps: `bundle install`
- Local server: `bundle exec jekyll serve -l -H localhost`
- Production check: `bundle exec jekyll build`
- No repo lint, typecheck, test, CI workflow, or package manager scripts are configured; a successful Jekyll build is the focused verification step.
- Restart the dev server after changing `_config.yml`.

## Workflow
- `master` is the GitHub Pages production branch. Use `feat/*` branches for changes, then merge to `master` only when ready to publish.
- `Gemfile.lock` exists locally but is ignored, as are `_site/`, `.jekyll-cache/`, `.bundle/`, `/vendor/`, `CLAUDE.md`, and `.claude/`; do not commit these unless the workflow intentionally changes.
- Keep asset additions tied to live pages: profile/favicon files, public PDFs in `files/`, and CAKE research assets under `files/research/cake/` and `images/research/cake/`.

## Visual Direction
- Current homepage direction is modern warm-minimal academic portfolio, taking broad layout cues from Anthropic, Mistral, and Liquid AI without copying their color schemes.
- Preserve the black, charcoal, grey, taupe, and cream palette: `#191714`, `#38342d`, `#716b61`, `#d8d0c2`, `#f4efe7`, `#fbf8f1`.
- Keep the font pairing: `Inter` for interface/body text and `Source Serif 4` for editorial headings.
- Use spacious layouts, subtle geometric backgrounds, strong editorial hierarchy, and restrained depth/shadows.
- Prefer square or lightly rounded structural elements over generic academic-template styling.
- Avoid reintroducing green/sage accents or generic academic template styling.

## Existing Instructions
- Root `CLAUDE.md` is ignored local guidance and contains stale references to collections and template pages. Trust this file, `README.md`, `Gemfile`, and `_config.yml` over `CLAUDE.md` when they disagree.
