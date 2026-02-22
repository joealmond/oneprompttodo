import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects',
  imports: [RouterLink],
  template: `
    <section class="py-16 sm:py-20">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-bold text-slate-900 mb-4">Projects</h1>
        <p class="text-slate-600 mb-10">Apps and tools I've built. Click to explore them.</p>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Todo App Card -->
          <div class="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
            <div class="bg-gradient-to-br from-indigo-500 to-purple-600 h-40 flex items-center justify-center">
              <span class="text-6xl">✅</span>
            </div>
            <div class="p-6">
              <h2 class="text-lg font-semibold text-slate-900 mb-2">Todo App</h2>
              <p class="text-sm text-slate-500 mb-4">
                A full-stack todo application built with Angular 21 and NestJS 11.
                Features add, toggle, delete, and filtering.
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="text-xs bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded-full">Angular</span>
                <span class="text-xs bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded-full">NestJS</span>
                <span class="text-xs bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded-full">Tailwind</span>
              </div>
              <a
                routerLink="/todo"
                class="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
              >
                Try it live →
              </a>
            </div>
          </div>

          <!-- Portfolio Blog Card -->
          <div class="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
            <div class="bg-gradient-to-br from-pink-500 to-rose-600 h-40 flex items-center justify-center">
              <span class="text-6xl">📝</span>
            </div>
            <div class="p-6">
              <h2 class="text-lg font-semibold text-slate-900 mb-2">Portfolio Blog</h2>
              <p class="text-sm text-slate-500 mb-4">
                This very site! A server-side generated portfolio blog
                built with Angular SSG and deployed to GitHub Pages.
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="text-xs bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded-full">Angular SSG</span>
                <span class="text-xs bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded-full">GitHub Pages</span>
              </div>
              <a
                routerLink="/blog"
                class="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
              >
                Read the blog →
              </a>
            </div>
          </div>

          <!-- Placeholder for future projects -->
          <div class="bg-slate-50 rounded-xl border-2 border-dashed border-slate-300 flex items-center justify-center min-h-[320px]">
            <div class="text-center p-6">
              <div class="text-4xl mb-3">🚀</div>
              <h2 class="text-lg font-semibold text-slate-400 mb-1">More Coming Soon</h2>
              <p class="text-sm text-slate-400">Stay tuned for new projects!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ProjectsComponent {}
