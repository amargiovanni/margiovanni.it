# margiovanni.it

Personal website and blog powered by Jekyll.

## Features

- Modern, responsive design with animated gradient background
- Blog functionality with sample posts
- SEO optimized with jekyll-seo-tag
- RSS feed support with jekyll-feed
- Clean, minimalist aesthetic

## Development

### Prerequisites

- Ruby 3.4.5 or higher
- Bundler

### Getting Started

1. Install dependencies:
```bash
bundle install
```

2. Run the development server:
```bash
bundle exec jekyll serve
```

3. Visit [http://localhost:4000](http://localhost:4000) in your browser

### Project Structure

```
.
├── _config.yml           # Jekyll configuration
├── _includes/            # Reusable components (head, nav, footer)
├── _layouts/             # Page layouts
│   ├── default.html     # Base layout
│   ├── home.html        # Homepage layout
│   ├── blog.html        # Blog listing layout
│   └── post.html        # Single post layout
├── _posts/              # Blog posts (Markdown)
├── css/                 # Stylesheets
│   ├── style.css       # Main styles
│   └── animations.css  # Animation styles
├── js/                  # JavaScript files
├── blog/                # Blog index page
└── index.md             # Homepage

```

### Adding a New Blog Post

Create a new file in the `_posts` directory with the format:
```
YYYY-MM-DD-post-title.md
```

Add front matter at the top:
```yaml
---
layout: post
title: "Your Post Title"
subtitle: "Optional subtitle"
date: YYYY-MM-DD
categories: [category1, category2]
---

Your post content here...
```

## Building for Production

To build the site for production:

```bash
bundle exec jekyll build
```

The static site will be generated in the `_site` directory.

## License

© 2025 Andrea Margiovanni. All rights reserved.
