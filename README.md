### Flixster

#Сайт для поиска фильма: [Deploy ](https://github.com/bobozaka/filmatek-aston-react/tree/main/src/componnets)

## Требования к Проекту

### 1 уровень (обязательный - необходимый минимум)

### React

- [x]  **Пишем функциональные компоненты c хуками** в приоритете над классовыми. [componnets](https://github.com/bobozaka/filmatek-aston-react/tree/main/src/componnets) ,[pages](https://github.com/bobozaka/filmatek-aston-react/tree/main/src/pages)
- [x]  Есть разделение на **умные и глупые компоненты**. Обратите внимание на умные  [ProtectedRoute](https://github.com/bobozaka/filmatek-aston-react/blob/main/src/componnets/ProtectedRoute.js),[SearchBar](https://github.com/bobozaka/filmatek-aston-react/blob/main/src/componnets/SearchBar/index.jsx) [SearchPage](https://github.com/bobozaka/filmatek-aston-react/blob/main/src/pages/SearchPage/index.jsx),[SearchBar](https://github.com/bobozaka/filmatek-aston-react/blob/main/src/componnets/SearchBar/index.jsx) глупые [Loading](https://github.com/bobozaka/filmatek-aston-react/blob/main/src/componnets/Loading/index.jsx) , [SavedShows](https://github.com/bobozaka/filmatek-aston-react/blob/main/src/componnets/SavedShows/index.jsx) ,  [Row](https://github.com/bobozaka/filmatek-aston-react/blob/main/src/componnets/Row/index.jsx) 
- [x]  Есть **рендеринг списков**.  [Row](https://github.com/bobozaka/filmatek-aston-react/blob/main/src/componnets/Row/index.jsx) ,[SavedShows](https://github.com/bobozaka/filmatek-aston-react/blob/main/src/componnets/SavedShows/index.jsx) ,[SearchResults](https://github.com/bobozaka/filmatek-aston-react/blob/main/src/componnets/SearchResults/index.jsx) 
- [x]  Реализована хотя бы одна **форма**. [SearchBar](https://github.com/bobozaka/filmatek-aston-react/blob/main/src/componnets/SearchBar/index.jsx),[Signup](https://github.com/bobozaka/filmatek-aston-react/blob/main/src/pages/Signup/index.jsx),[Login](https://github.com/bobozaka/filmatek-aston-react/blob/main/src/pages/Login/index.jsx)
- [x]  Есть применение **Контекст API**. [AuthContext](https://github.com/bobozaka/filmatek-aston-react/blob/main/src/context/AuthContext.js)
- [x]  Есть применение **предохранителя**. [ProtectedRoute](https://github.com/bobozaka/filmatek-aston-react/blob/main/src/componnets/ProtectedRoute.js)
- [x]  Есть хотя бы один **кастомный хук**. [useUserAuth](https://github.com/bobozaka/filmatek-aston-react/blob/main/src/context/AuthContext.js#L45)
- [x]  Хотя бы несколько компонентов используют **PropTypes**. [Movie]([https://ru.reactjs.org/docs/typechecking-with-proptypes.html](https://github.com/bobozaka/filmatek-aston-react/blob/main/src/componnets/Movie/index.jsx)) ,  [Row](https://github.com/bobozaka/filmatek-aston-react/blob/main/src/componnets/Row/index.jsx) 
- [x]  Поиск не должен триггерить много запросов к серверу (**debounce**). [firebaseUtils]((https://github.com/bobozaka/filmatek-aston-react/blob/main/src/firebaseUtils.js))
- [x]  Есть применение **lazy + Suspense**. [App](https://github.com/bobozaka/filmatek-aston-react/blob/main/src/App.jsx)

### Redux

- [x]  Используем **Modern Redux with Redux Toolkit**. [store](https://github.com/bobozaka/filmatek-aston-react/blob/main/src/redux/store.js)
- [x]  Используем **слайсы**. [filmsSlice](https://github.com/bobozaka/filmatek-aston-react/blob/main/src/redux/reducers/slices/filmsSlice.js) , [searchResultsSlice](https://github.com/bobozaka/filmatek-aston-react/blob/main/src/redux/reducers/slices/searchResultsSlice.js), [userSlice](https://github.com/bobozaka/filmatek-aston-react/blob/main/src/redux/reducers/slices/userSlice.js)
- [x]  Есть хотя бы одна **кастомная мидлвара**. [customMiddleware](https://github.com/bobozaka/filmatek-aston-react/blob/main/src/redux/middleware/customMiddleware.js)
- [x]  Используется **RTK Query**. [api](https://github.com/bobozaka/filmatek-aston-react/blob/main/src/redux/api.js)
- [x]  Используется **Transforming Responses**. [Transforming Responses api](https://github.com/bobozaka/filmatek-aston-react/blob/main/src/redux/api.js)

### 2 уровень (необязательный)

### React

- [x]  **Используется Firebase для учетных записей пользователей и их Избранного и Истории поиска authorization, favorites, history. [authorization]((https://github.com/bobozaka/filmatek-aston-react/blob/main/src/context/AuthContext.js#L45)) ,[favorites](https://github.com/bobozaka/filmatek-aston-react/blob/main/src/componnets/SavedShows/index.jsx), [history]((https://github.com/bobozaka/filmatek-aston-react/blob/main/src/firebaseUtils.js))
- 


