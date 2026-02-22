import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BLOG_POSTS } from './blog-data';

@Component({
  selector: 'app-blog',
  imports: [RouterLink],
  template: `
    <section class="py-16 sm:py-20">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-bold text-slate-900 mb-4">Blog</h1>
        <p class="text-slate-600 mb-10">Thoughts on web development, architecture, and lessons learned.</p>

        <div class="space-y-8">
          @for (post of posts; track post.slug) {
            <article class="group">
              <a [routerLink]="['/blog', post.slug]" class="block bg-white rounded-xl p-6 border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all">
                <div class="flex flex-wrap items-center gap-2 mb-3">
                  <span class="text-xs text-indigo-600 font-medium">{{ post.date }}</span>
                  @for (tag of post.tags; track tag) {
                    <span class="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">{{ tag }}</span>
                  }
                </div>
                <h2 class="text-xl font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors mb-2">
                  {{ post.title }}
                </h2>
                <p class="text-slate-500">{{ post.excerpt }}</p>
                <span class="inline-block mt-3 text-sm text-indigo-600 font-medium">Read more →</span>
              </a>
            </article>
          }
        </div>
      </div>
    </section>
  `,
})
export class BlogComponent {
  posts = BLOG_POSTS;
}
