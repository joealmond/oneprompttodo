import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="min-h-screen flex flex-col bg-slate-50">
      <!-- Navigation -->
      <header class="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <nav class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
            <!-- Logo -->
            <a routerLink="/" class="text-xl font-bold text-indigo-600 hover:text-indigo-700 transition-colors">
              📝 OnePromptTodo
            </a>

            <!-- Desktop nav -->
            <div class="hidden md:flex items-center gap-1">
              @for (link of navLinks; track link.path) {
                <a
                  [routerLink]="link.path"
                  routerLinkActive="bg-indigo-50 text-indigo-600"
                  [routerLinkActiveOptions]="{ exact: link.exact }"
                  class="px-4 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
                >{{ link.label }}</a>
              }
            </div>

            <!-- Mobile hamburger -->
            <button
              (click)="mobileMenuOpen.set(!mobileMenuOpen())"
              class="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
              [attr.aria-expanded]="mobileMenuOpen()"
              aria-label="Toggle navigation"
            >
              @if (mobileMenuOpen()) {
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              } @else {
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
              }
            </button>
          </div>

          <!-- Mobile menu -->
          @if (mobileMenuOpen()) {
            <div class="md:hidden pb-4 border-t border-slate-100 pt-2">
              @for (link of navLinks; track link.path) {
                <a
                  [routerLink]="link.path"
                  routerLinkActive="bg-indigo-50 text-indigo-600"
                  [routerLinkActiveOptions]="{ exact: link.exact }"
                  (click)="mobileMenuOpen.set(false)"
                  class="block px-4 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
                >{{ link.label }}</a>
              }
            </div>
          }
        </nav>
      </header>

      <!-- Main content -->
      <main class="flex-1">
        <router-outlet />
      </main>

      <!-- Footer -->
      <footer class="bg-white border-t border-slate-200 py-8 mt-auto">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-slate-500">
          <p>&copy; {{ currentYear }} OnePromptTodo. Built with Angular &amp; Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  `,
})
export class LayoutComponent {
  mobileMenuOpen = signal(false);
  currentYear = new Date().getFullYear();

  navLinks = [
    { path: '/', label: 'Home', exact: true },
    { path: '/blog', label: 'Blog', exact: false },
    { path: '/projects', label: 'Projects', exact: false },
    { path: '/todo', label: 'Todo App', exact: false },
  ];
}
