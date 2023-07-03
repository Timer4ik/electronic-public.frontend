This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Проект electronic представляет из себя несколько частей
- Сайт [https://github.com/Timer4ik/electronic-ssr.frontend](electronic-ssr.frontend) next js + typescript + redux tookit 
- Админ [https://github.com/Timer4ik/electronic-admin](electronic-admin.frontend) панель для добавления контента на сайт react js + typescript + redux tookit,rtk query
- Бэкэнд [https://github.com/Timer4ik/electronic.backend](electronic.backend) написанный на node js + express + sequelizу (postgresSQL)

Проект electronic-ssr.frontend представляет из себя магазин электроники, которые включает в себя
следующие модули

```bash

- Список категорий и неограниченно вложенных категорий
- Список товаров для каждой категории с собственными фильтрами зависящими от категорий
- Карточку товара с отзывами и характеристиками специфичными для каждого товара отдельной категории
- Корзину, избранное и просмотр заказов
- Авторизацию в системе как покупатель
- Просмотр магазинов


```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
