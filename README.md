# With

This website is dedicated to promoting my private English classes.

## Development Setup

### Installation

```bash
git clone https://github.com/luisfuturist/with.git
cd with/
pnpm install
```

### Scripts

All commands are run from the root of the project, from a terminal:

| Command          | Action                                               |
| :--------------- | :--------------------------------------------------- |
| `pnpm install`   | Installs dependencies                                |
| `pnpm dev`       | Starts local development server at `localhost:4321`  |
| `pnpm build`     | Builds the production site to `./dist/`              |
| `pnpm preview`   | Previews the build locally before deploying          |
| `pnpm release`   | Automates package publishing tasks                   |
| `pnpm deploy`    | Deploys the website                                  |
| `pnpm cf ...`    | Runs Cloudflare CLI commands like `wrangler deploy`  |

## Technology Stack

- **Frontend**:
  - **Astro**: Next-generation web framework for fast and efficient websites.
  - **Preact**: Lightweight JavaScript library for UI development.
  - **Tailwind CSS**: Utility-first CSS framework for responsive UI.
  - **Bootstrap Icons**: Collection of SVG icons for enhanced visuals.
  - **clsx**: Utility for managing CSS class names conditionally.
- **Development Tools**:
  - **TypeScript**: Superset of JavaScript for static typing.
  - **release-it**: Tool for automating package publishing.
  - **Wrangler**: Service for deploying and managing websites on Cloudflare Workers.
