import { Injectable, signal, effect, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private platformId = inject(PLATFORM_ID);
  private readonly THEME_KEY = 'theme-preference'; // Kalit nomi bitta joyda

  isDarkMode = signal<boolean>(this.getInitialPreference());

  constructor() {
    effect(() => {
      this.updateDOM(this.isDarkMode());
    });

    if (isPlatformBrowser(this.platformId)) {
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', (e) => {
          // Agar foydalanuvchi qo'lda tanlamagan bo'lsa, tizimga qarab o'zgaradi
          if (!localStorage.getItem(this.THEME_KEY)) {
            this.isDarkMode.set(e.matches);
          }
        });
    }
  }

  private getInitialPreference(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      const saved = localStorage.getItem(this.THEME_KEY); // 'THEME_KEY' emas, o'zgaruvchi!
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  }

  private updateDOM(dark: boolean) {
    if (isPlatformBrowser(this.platformId)) {
      const html = document.documentElement;
      if (dark) {
        html.classList.add('app-dark');
        localStorage.setItem(this.THEME_KEY, 'dark');
      } else {
        html.classList.remove('app-dark');
        localStorage.setItem(this.THEME_KEY, 'light');
      }
    }
  }

  toggleTheme() {
    this.isDarkMode.update((v) => !v);
  }
}
