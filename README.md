# Prime Theme Starter 🚀

Ushbu loyiha — **Angular 19+**, **Tailwind CSS v4** va **PrimeNG 20** texnologiyalarini o'zaro mukammal sinxronizatsiya qiluvchi zamonaviy starter shablonidir.

---

## 🎯 Asosiy Maqsad

Loyihaning bosh maqsadi — **Tailwind CSS dark mode** va **PrimeNG mavzularini** birgalikda, bir-biriga qarshi chiqmagan holda ishlatishdir. Eng muhimi, barcha ranglar va dizayn o'zgarishlari hech qanday **CSS override** (stillar ustidan yozish)larsiz amalga oshiriladi.

## ✨ Asosiy Xususiyatlar

- 🌓 **Sinxronlashgan Dark Mode:** Tailwind CSS va PrimeNG ranglari bir vaqtda, `ThemeService` orqali tizimli boshqariladi.
- 🛠️ **No CSS Overrides:** Komponentlar stilini o'zgartirish uchun CSS selectorlar bilan kurashish shart emas. Hammasi PrimeNG **Preset** tizimi orqali hal qilingan.
- 🎨 **Tizimlashgan Ranglar:** PrimeNG design tokenlari va Tailwind v4 rang palitralari o'zaro bog'langan.
- ⚡ **Angular Signals:** Mavzu holati (light/dark) Angular Signals yordamida eng tezkor va xotira uchun tejamkor usulda boshqariladi.
- 🚀 **Tailwind v4 & PrimeUI:** Eng so'nggi `@plugin "tailwindcss-primeui"` yordamida PrimeNG ranglarini Tailwind klasslari sifatida ishlatish imkoniyati.
- 💨 **Zoneless Change Detection:** Angular'ning eng so'nggi zoneless mantiqi asosida qurilgan bo'lib, yuqori unumdorlikni ta'minlaydi.

---

## 🛠️ Mavzuni Sozlama (Preset Usuli)

PrimeNG komponentlarining ranglarini va ko'rinishini o'zgartirish uchun `app.config.ts` faylida `definePreset` funksiyasidan foydalaniladi. Bu usul CSS fayllarini to'ldirmasdan, butun loyiha dizaynini bir joydan boshqarish imkonini beradi:

```typescript
// app.config.ts
const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{emerald.50}',
      // ... boshqa ranglar
      500: '{emerald.500}',
      // ...
    },
    colorScheme: {
      light: {
        surface: {
          0: '#ffffff',
          50: '{slate.50}',
          // ... slate ranglar palitrasiga bog'lash
        },
      },
      dark: {
        surface: {
          0: '#ffffff',
          50: '{slate.50}',
          // ...
        },
      },
    },
  },
});
```

---

## 📦 O'rnatish va Ishga tushirish

1. **Repozitoriyani yuklab oling:**

   ```bash
   git clone https://github.com/username/prime-theme-starter.git
   cd prime-theme-starter
   ```

2. **Kutubxonalarni o'rnating:**

   ```bash
   npm install
   ```

3. **Loyihani ishga tushiring:**
   ```bash
   npm start
   ```

---

## 🏗️ Loyiha Strukturasi

- 📂 `src/app/core/service/theme-service.ts`: Mavzuni (Dark/Light) boshqaruvchi asosiy signal mantiqi.
- 📂 `src/app/app.config.ts`: PrimeNG va Tailwind integratsiyasi, Preset sozlamalari.
- 📂 `src/styles.css`: Tailwind v4 direktivalari va PrimeUI plugin integratsiyasi.
- 📂 `index.html`: Brauzer yuklanayotgan vaqtda "miltillash" (flickering) oldini oluvchi kichik skript.

---
