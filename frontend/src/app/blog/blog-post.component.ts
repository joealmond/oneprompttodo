import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BLOG_POSTS, BlogPost } from './blog-data';

@Component({
  selector: 'app-blog-post',
  imports: [RouterLink],
  template: `
    @if (post()) {
      <article class="py-16 sm:py-20">
        <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <a routerLink="/blog" class="inline-flex items-center text-sm text-indigo-600 hover:text-indigo-700 mb-8 transition-colors">
            ← Back to Blog
          </a>

          <header class="mb-10">
            <div class="flex flex-wrap items-center gap-2 mb-4">
              <span class="text-sm text-indigo-600 font-medium">{{ post()!.date }}</span>
              @for (tag of post()!.tags; track tag) {
                <span class="text-xs bg-indigo-50 text-indigo-600 px-2.5 py-0.5 rounded-full">{{ tag }}</span>
              }
            </div>
            <h1 class="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
              {{ post()!.title }}
            </h1>
          </header>

          <div class="prose prose-slate max-w-none" [innerHTML]="post()!.content"></div>
        </div>
      </article>
    } @else {
      <div class="py-20 text-center">
        <h1 class="text-2xl font-bold text-slate-900 mb-4">Post Not Found</h1>
        <p class="text-slate-600 mb-6">The blog post you're looking for doesn't exist.</p>
        <a routerLink="/blog" class="text-indigo-600 hover:text-indigo-700 font-medium">← Back to Blog</a>
      </div>
    }
  `,
})
export class BlogPostComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  post = signal<BlogPost | undefined>(undefined);

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.post.set(BLOG_POSTS.find((p) => p.slug === slug));
  }
}
