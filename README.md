Flixster
Сделано приложение для поиска фильмов.

Реализованы следующие требования к функциональности:

1 уровень (необходимый минимум)
React
Функциональные компоненты c хуками в приоритете над классовыми: [components](https://github.com/username/repository-name/tree/branch-name/path/to/file](https://github.com/bobozaka/filmatek-aston-react/tree/main/src/componnets), pages.
Есть разделение на умные и глупые компоненты Умные: SearchPanel, Pagination, MovieCard, HistoryItem и т.д. Глупые: Button, SelectField, InputField и т.д.
Есть рендеринг списков: Main, History, Search, Favorites, SuggestsMovies и т.д.
Реализована хотя бы одна форма: Login, Registration, SearchPanel.
Есть применение Контекст API: featureFlag в App.
Есть применение предохранителя: ErrorBoundary App.
Есть хотя бы один кастомный хук: useDebounce, useOutside, useReadLocalStorage.
Хотя бы несколько компонентов используют PropTypes: HistoryItem, Pagination.
Поиск не должен триггерить много запросов к серверу: useDebounce, использован в компоненте SearchPanel.
Есть применение lazy + Suspense: Routes.
Redux
Используем Modern Redux with Redux Toolkit: store.
Используем слайсы: authSlice.
Есть хотя бы одна кастомная мидлвара: authMiddleware.
Используется RTK Query: favoritesService, historyService, moviesService.
Используется Transforming Responses: transformResponse of moviesService, transformResponse of historyService, transformResponse of favoritesService.
2 уровень
Использован TypeScript.

Использование Firebase для учетных записей пользователей и их Избранного и Истории поиска: config, применение: auth, favorites, history.

Feature Flags. Реализована фича “Поделиться в телеграм”, закрытую под фича флагом.

 Если флаг с этой фичей включен, то у карточки единицы информации должна появиться кнопка “Поделиться”. ShareTelegram;
 Флаг должен присылаться с локального сервера. Для этого нужно написать простой сервер, который по http-запросу на /api/feature-flags отдаст объект с флагом { isTelegramShareEnabled: true } server;
 Флаг положить в react context, забрать из контекста в необходимом месте приложения и включить фичу.featureFlag.
###Deploy link ASTON MOVIES
