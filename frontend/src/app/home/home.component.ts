import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  template: `
    <!-- Hero section -->
    <section class="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
          Hi, I'm a Developer 👋
        </h1>
        <p class="text-lg sm:text-xl text-indigo-100 max-w-2xl mx-auto mb-8">
          I build modern web applications with Angular, NestJS, and more.
          Welcome to my portfolio — explore my blog and projects.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            routerLink="/projects"
            class="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-indigo-600 font-semibold hover:bg-indigo-50 transition-colors"
          >
            View Projects
          </a>
          <a
            routerLink="/blog"
            class="inline-flex items-center justify-center px-6 py-3 rounded-xl border-2 border-white/40 text-white font-semibold hover:bg-white/10 transition-colors"
          >
            Read Blog
          </a>
        </div>
      </div>
    </section>

    <!-- About section -->
    <section class="py-16 sm:py-20">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold text-slate-900 mb-4">About Me</h2>
            <p class="text-slate-600 mb-4">
              I'm a passionate developer who loves building user-friendly web applications.
              I specialize in full-stack development with Angular and NestJS, and I'm always
              exploring new technologies.
            </p>
            <p class="text-slate-600">
              This portfolio showcases my projects and shares insights from my development journey
              through blog posts. Feel free to explore!
            </p>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-white rounded-xl p-6 shadow-sm border border-slate-200 text-center">
              <div class="text-3xl mb-2">⚡</div>
              <h3 class="font-semibold text-slate-900">Angular</h3>
              <p class="text-sm text-slate-500">Frontend</p>
            </div>
            <div class="bg-white rounded-xl p-6 shadow-sm border border-slate-200 text-center">
              <div class="text-3xl mb-2">🔧</div>
              <h3 class="font-semibold text-slate-900">NestJS</h3>
              <p class="text-sm text-slate-500">Backend</p>
            </div>
            <div class="bg-white rounded-xl p-6 shadow-sm border border-slate-200 text-center">
              <div class="text-3xl mb-2">🎨</div>
              <h3 class="font-semibold text-slate-900">Tailwind</h3>
              <p class="text-sm text-slate-500">Styling</p>
            </div>
            <div class="bg-white rounded-xl p-6 shadow-sm border border-slate-200 text-center">
              <div class="text-3xl mb-2">📦</div>
              <h3 class="font-semibold text-slate-900">TypeScript</h3>
              <p class="text-sm text-slate-500">Language</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Recent posts teaser -->
    <section class="bg-white py-16 sm:py-20">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-slate-900 mb-4">Latest from the Blog</h2>
          <p class="text-slate-600">Thoughts on web development, architecture, and more.</p>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <a routerLink="/blog/building-a-todo-app-with-angular-and-nestjs"
             class="group block bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all">
            <div class="text-xs text-indigo-600 font-medium mb-2">Feb 22, 2026</div>
            <h3 class="font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors mb-2">
              Building a Todo App with Angular &amp; NestJS
            </h3>
            <p class="text-sm text-slate-500">A full-stack journey from zero to a working todo application.</p>
          </a>
          <a routerLink="/blog/why-tailwind-css-for-rapid-prototyping"
             class="group block bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all">
            <div class="text-xs text-indigo-600 font-medium mb-2">Feb 22, 2026</div>
            <h3 class="font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors mb-2">
              Why Tailwind CSS for Rapid Prototyping
            </h3>
            <p class="text-sm text-slate-500">How utility-first CSS accelerates UI development.</p>
          </a>
          <a routerLink="/blog/server-side-generation-with-angular"
             class="group block bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all">
            <div class="text-xs text-indigo-600 font-medium mb-2">Feb 22, 2026</div>
            <h3 class="font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors mb-2">
              Server-Side Generation with Angular
            </h3>
            <p class="text-sm text-slate-500">Pre-rendering routes for blazing-fast static hosting.</p>
          </a>
        </div>
        <div class="text-center mt-8">
          <a
            routerLink="/blog"
            class="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-700 transition-colors"
          >
            View all posts →
          </a>
        </div>
      </div>
    </section>
  `,
})
export class HomeComponent {}
