import InfoTodo from "../components/infotodo/InfoTodo";
import { useFilterData } from "../hooks/useFilterData";
import { useAppSelector } from "../hooks/useRedux";
import "../pages/style/StylePages.scss";
import {useTranslation} from 'react-i18next'

export function Page() {
  const {todos, pending, error} = useAppSelector(state => state.TodoReducer)
  const data = useFilterData(todos)
  const {t} = useTranslation()

  return (
    <section className="section">
      <p className="page">{t('All tasks')} ({todos.length} {t('tasks')})</p>
      <div>
        {todos.length ? (
          <div className="todos">
            {pending ? (
              <h1>Loading</h1>
            ) : error ? (
              <h1>{error}</h1>
            ) : (
              <InfoTodo data={data} />
            )}
          </div>
        ) : (
          <div className="noTodo">
            <p>{t('No To-Do')}</p>
          </div>
        )}
      </div>
    </section>
  );
}

