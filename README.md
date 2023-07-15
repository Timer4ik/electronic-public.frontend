```diff
- Модули с заказми и отзывами всё ещё находятся в разработке 
# Проект находится на этапе тестирования для выявления ошибок и оптимизации написанного кода

```

## Обзор проекта
Проект electronic представляет из себя несколько проектов
- Сайт [electronic-public.frontend](https://github.com/Timer4ik/electronic-public.frontend) next js + typescript + redux tookit 
- Админ панель [electronic-admin.frontend](https://github.com/Timer4ik/electronic-admin) для добавления контента на сайт react js + typescript + redux tookit,rtk query
- Бэкэнд [electronic.backend](https://github.com/Timer4ik/electronic.backend) написанный на node js + express + sequelizу (postgresSQL)

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

## Как запустить проект

Для начала необходимо создать в postgreSQL бд electronic и загрузить туда дамб базы данных, который находится в проекте [electronic.backend](https://github.com/Timer4ik/electronic.backend)

После нужно сконфигурировать бэк в файле db.js под свою базу

После чего можно запустить проекты
- Сайт [electronic-ssr.frontend](https://github.com/Timer4ik/electronic-ssr.frontend)
- Админ [electronic-admin.frontend](https://github.com/Timer4ik/electronic-admin)
