export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  tags: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'building-a-todo-app-with-angular-and-nestjs',
    title: 'Building a Todo App with Angular & NestJS',
    date: 'Feb 22, 2026',
    excerpt: 'A full-stack journey from zero to a working todo application with Angular 21 and NestJS 11.',
    tags: ['Angular', 'NestJS', 'TypeScript'],
    content: `
      <h2 class="text-2xl font-bold text-slate-900 mb-4">The Full-Stack Journey</h2>
      <p class="text-slate-600 mb-4">
        Building a modern todo application doesn't have to be complicated. With Angular 21 on the frontend
        and NestJS 11 on the backend, you get a fully typed, end-to-end TypeScript experience.
      </p>
      <h3 class="text-xl font-semibold text-slate-900 mb-3 mt-8">Backend: NestJS REST API</h3>
      <p class="text-slate-600 mb-4">
        The backend exposes a clean CRUD REST API at <code class="bg-slate-100 px-1.5 py-0.5 rounded text-sm">/api/todos</code>.
        It uses an abstract <code class="bg-slate-100 px-1.5 py-0.5 rounded text-sm">TodoRepository</code> pattern,
        making it easy to swap between a JSON file store and a real database like PostgreSQL or MongoDB.
      </p>
      <h3 class="text-xl font-semibold text-slate-900 mb-3 mt-8">Frontend: Angular Signals &amp; New Control Flow</h3>
      <p class="text-slate-600 mb-4">
        The Angular frontend leverages the latest signals API for reactive state management. The new
        control-flow syntax (<code class="bg-slate-100 px-1.5 py-0.5 rounded text-sm">&#64;for</code>,
        <code class="bg-slate-100 px-1.5 py-0.5 rounded text-sm">&#64;if</code>) makes templates cleaner and more intuitive.
      </p>
      <h3 class="text-xl font-semibold text-slate-900 mb-3 mt-8">Key Features</h3>
      <ul class="list-disc list-inside text-slate-600 mb-4 space-y-1">
        <li>Add, toggle, and delete todos</li>
        <li>Filter by All, Active, or Completed</li>
        <li>Responsive design with Tailwind CSS</li>
        <li>Type-safe HTTP communication</li>
      </ul>
      <p class="text-slate-600">
        Check out the <a href="/projects" class="text-indigo-600 hover:underline">Projects page</a>
        to see the live todo app in action!
      </p>
    `,
  },
  {
    slug: 'why-tailwind-css-for-rapid-prototyping',
    title: 'Why Tailwind CSS for Rapid Prototyping',
    date: 'Feb 22, 2026',
    excerpt: 'How utility-first CSS accelerates UI development and why it pairs perfectly with Angular.',
    tags: ['CSS', 'Tailwind', 'Design'],
    content: `
      <h2 class="text-2xl font-bold text-slate-900 mb-4">Utility-First CSS</h2>
      <p class="text-slate-600 mb-4">
        Tailwind CSS takes a different approach to styling. Instead of writing custom CSS classes,
        you compose designs directly in your HTML using small, single-purpose utility classes.
      </p>
      <h3 class="text-xl font-semibold text-slate-900 mb-3 mt-8">Why It Works for Prototyping</h3>
      <ul class="list-disc list-inside text-slate-600 mb-4 space-y-1">
        <li><strong>Speed:</strong> No context switching between HTML and CSS files</li>
        <li><strong>Consistency:</strong> Design tokens built into the class names</li>
        <li><strong>Responsive:</strong> Breakpoint prefixes make mobile-first easy</li>
        <li><strong>Purging:</strong> Production builds strip unused classes automatically</li>
      </ul>
      <h3 class="text-xl font-semibold text-slate-900 mb-3 mt-8">Angular + Tailwind v4</h3>
      <p class="text-slate-600 mb-4">
        With Angular's esbuild pipeline, integrating Tailwind v4 requires a
        <code class="bg-slate-100 px-1.5 py-0.5 rounded text-sm">postcss.config.json</code>
        (not <code class="bg-slate-100 px-1.5 py-0.5 rounded text-sm">.js</code>) with the
        <code class="bg-slate-100 px-1.5 py-0.5 rounded text-sm">&#64;tailwindcss/postcss</code> plugin.
        This small gotcha cost me an hour — now it's documented!
      </p>
      <p class="text-slate-600">
        The result is a blazing-fast build that produces tiny CSS bundles with only the classes you actually use.
      </p>
    `,
  },
  {
    slug: 'server-side-generation-with-angular',
    title: 'Server-Side Generation with Angular',
    date: 'Feb 22, 2026',
    excerpt: 'Pre-rendering Angular routes at build time for blazing-fast static hosting on GitHub Pages.',
    tags: ['Angular', 'SSG', 'Performance'],
    content: `
      <h2 class="text-2xl font-bold text-slate-900 mb-4">Why SSG?</h2>
      <p class="text-slate-600 mb-4">
        Server-Side Generation (SSG) pre-renders your pages at build time. The result is plain HTML files
        that load instantly — no JavaScript needed for the initial paint. Search engines love it, users love it.
      </p>
      <h3 class="text-xl font-semibold text-slate-900 mb-3 mt-8">Angular's Approach</h3>
      <p class="text-slate-600 mb-4">
        Angular supports SSG through <code class="bg-slate-100 px-1.5 py-0.5 rounded text-sm">&#64;angular/ssr</code>
        with <code class="bg-slate-100 px-1.5 py-0.5 rounded text-sm">outputMode: "static"</code>
        in the build configuration. Each route can be configured individually:
      </p>
      <ul class="list-disc list-inside text-slate-600 mb-4 space-y-1">
        <li><strong>Prerender:</strong> Pages rendered at build time (blog, portfolio)</li>
        <li><strong>Client:</strong> Pages rendered in the browser (dynamic apps)</li>
      </ul>
      <h3 class="text-xl font-semibold text-slate-900 mb-3 mt-8">Deploying to GitHub Pages</h3>
      <p class="text-slate-600 mb-4">
        The prerendered HTML files can be deployed directly to GitHub Pages. Static routes get full HTML,
        while client-rendered routes (like the todo app) load as a single-page application with JavaScript hydration.
      </p>
      <p class="text-slate-600">
        This hybrid approach gives you the best of both worlds: fast static pages for content,
        and full interactivity for your web applications.
      </p>
    `,
  },
];
