import ReactDOM from 'react-dom/client'
import './index.css'
import MainPage from './views/MainPage.tsx'
import { Provider } from 'react-redux'
import { store } from './store/toDoStore/ToDoStore.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
      <MainPage />
    </Provider>
)
