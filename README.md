# Agent Store Academy

**The Shopify Era Tech Stack is Dead.**

Open source tools + AI Agents. Own everything. Pay almost nothing.

🌐 **Live:** [agentstore.academy](https://agentstore.academy)

## What is this?

Agent Store Academy teaches people to build with AI agents instead of paying $200-500/month in SaaS subscriptions.

**The old stack (dead):**
- ❌ Shopify
- ❌ Canva
- ❌ Klaviyo
- ❌ Gorgias
- ❌ Zapier

**The new stack:**
- ✅ Human + AI Agents
- ✅ Open source tools
- ✅ Own everything

## Tech Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Forms:** Tally (embedded)
- **Hosting:** Cloudflare Pages
- **Analytics:** Meta Pixel
- **AI SEO:** llms.txt

## Development

```bash
# Install dependencies
pnpm install

# Run dev server
pnpm dev

# Build for production
pnpm build
```

## Deployment

Automatically deployed to Cloudflare Pages on push to `main`.

**Build settings:**
- Build command: `pnpm run build`
- Output directory: `out`

## Files

- `/public/llms.txt` — AI discovery file (SEO for LLMs)
- `/public/og-image.png` — Social sharing image
- `/app/` — Next.js app router pages
- `/components/asa/` — Agent Store Academy components

## Links

- **Website:** https://agentstore.academy
- **Built by:** [Robert Miller](https://linkedin.com/in/rm16/)
- **Agent:** [George](https://agent-george.com) helped build this

## License

MIT
