# Название проекта

Короткое описание проекта.

## Требования к Проекту

### 1 уровень (обязательный - необходимый минимум)

- [x]  Реализованы **Требования к функциональности.**
- [x]  Для хранения учетных записей пользователей, их Избранного и Истории поиска, используем **LocalStorage**. [redux-persist](https://www.npmjs.com/package/redux-persist) библиотеку использовать **нельзя** из-за того, что привнесется большая автоматизация процесса сохранения, и это будет неравносильно затратам по времени других людей, которые используют LocalStorage напрямую.

### React

- [x]  **Пишем функциональные компоненты c хуками** в приоритете над классовыми.
- [x]  Есть разделение на **умные и глупые компоненты**. Обратите внимание на [статью от Дэна](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0) для подробностей.
- [x]  Есть **рендеринг списков**. [Документация React](https://ru.reactjs.org/docs/lists-and-keys.html)
- [x]  Реализована хотя бы одна **форма**. [Документация React](https://ru.reactjs.org/docs/forms.html)
- [x]  Есть применение **Контекст API**. [Документация React](https://ru.reactjs.org/docs/context.html)
- [x]  Есть применение **предохранителя**. [Документация React](https://ru.reactjs.org/docs/error-boundaries.html)
- [x]  Есть хотя бы один **кастомный хук**. [Документация React](https://ru.reactjs.org/docs/hooks-custom.html)
- [x]  Хотя бы несколько компонентов используют **PropTypes**. [Документация React](https://ru.reactjs.org/docs/typechecking-with-proptypes.html)
- [x]  Поиск не должен триггерить много запросов к серверу (**debounce**). [FAQ React](https://ru.reactjs.org/docs/faq-functions.html#how-can-i-prevent-a-function-from-being-called-too-quickly-or-too-many-times-in-a-row)
- [x]  Есть применение **lazy + Suspense**. [Документация React](https://ru.reactjs.org/docs/code-splitting.html#route-based-code-splitting)

### Redux

- [x]  Используем **Modern Redux with Redux Toolkit**. [Документация Redux](https://redux.js.org/tutorials/fundamentals/part-8-modern-redux)
- [x]  Используем **слайсы**. [Документация Redux](https://redux.js.org/tutorials/fundamentals/part-8-modern-redux#using-createslice)
- [x]  Есть хотя бы одна **кастомная мидлвара**. [Документация Redux](https://redux.js.org/understanding/history-and-design/middleware)
- [x]  Используется **RTK Query**. [Документация Redux](https://redux.js.org/tutorials/essentials/part-7-rtk-query-basics)
- [x]  Используется **Transforming Responses**. [Документация Redux](https://redux.js.org/tutorials/essentials/part-8-rtk-query-advanced#transforming-responses)

## Установка и запуск

Описание процедуры установки и запуска проекта.

## Лицензия

Опишите лицензию вашего проекта.
