import { RenderMode, ServerRoute } from '@angular/ssr';
import { BLOG_POSTS } from './blog/blog-data';

export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Prerender },
  { path: 'blog', renderMode: RenderMode.Prerender },
  {
    path: 'blog/:slug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return BLOG_POSTS.map((post) => ({ slug: post.slug }));
    },
  },
  { path: 'projects', renderMode: RenderMode.Prerender },
  { path: 'todo', renderMode: RenderMode.Client },
  { path: '**', renderMode: RenderMode.Prerender },
];
