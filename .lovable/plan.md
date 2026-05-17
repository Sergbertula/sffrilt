# План: 3D-иконка логотипа

В `src/components/layout/Header.tsx` сейчас перед надписью «SFFRILT» стоит иконка `Sparkles` в градиентном квадрате. Заменю на 3D-картинку в стиле hero.

## Шаги

1. **Сгенерировать 3D-иконку** `src/assets/logo-3d.png` через imagegen (premium, transparent background):
   - Современный 3D-рендер: глянцевая сфера/куб с нейросетевыми связями, голубой→фиолетовый градиент, мягкие блики, на прозрачном фоне.
   - Квадрат 512×512, чтобы хорошо смотрелось в маленьком размере шапки.

2. **Обновить `Header.tsx`**:
   - Импорт: `import logo3d from "@/assets/logo-3d.png";`
   - Заменить `<span class="...gradient-primary"><Sparkles/></span>` на `<img src={logo3d} alt="SFFRILT" className="h-9 w-9 object-contain drop-shadow-[0_0_12px_oklch(0.7_0.2_245/0.5)]" />`
   - Убрать импорт `Sparkles` (если больше не используется).

3. Та же 3D-иконка позже подойдёт и для hero-бейджа (см. предыдущий план), чтобы стилистика была единой.
