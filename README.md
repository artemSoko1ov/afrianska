# Afrianska Landing Page

Это адаптивный лендинг-проект, сверстанный с использованием **TypeScript**, **SCSS**, **BEM**, модульной архитектуры и кастомной валидацией форм.

Проект демонстрирует работу:

- модальных окон,
- бургер-меню,
- форм с валидацией,
- адаптивного дизайна.

---

## 📦 Установка

Склонируй репозиторий и установи зависимости:

```bash
git clone https://github.com/artemSoko1ov/afrianska.git
cd afrianska
npm install
```

---

## 🛠️ Скрипты

| Команда          | Описание                                      |
| ---------------- | --------------------------------------------- |
| `npm run dev`    | Запуск проекта в режиме разработки            |
| `npm run build`  | Сборка проекта для продакшена                 |
| `npm run lint`   | Проверка кода на соответствие ESLint правилам |
| `npm run deploy` | Деплой проекта на GitHub Pages                |

---

## 🌐 Демо

Сайт доступен онлайн по ссылке:
[https://artemsoko1ov.github.io/afrianska/](https://artemsoko1ov.github.io/afrianska/)

---

## 📂 Структура проекта

```
Project/
├─ public/
├─ src/
│   ├─ modules/       # JS/TS модули (Header, BurgerMenu, Modal, Form)
│   ├─ assets/        # Стили, изображения, шрифты
│   └─ main.ts        # Точка входа
├─ package.json
├─ tsconfig.json
└─ .eslintrc.js
```

---

## 💻 Технологии

* TypeScript (ES6+)
* SCSS с миксинами и функциями
* Vite
* BEM методология
* Кастомная валидация форм без сторонних библиотек
* Адаптивная верстка (Mobile First)
* Модальные окна с блокировкой скролла и `inert` на фоне
* Анимации и эффекты для UI элементов
