import "../style/StylePages.scss";
import InfoTodo from "../../components/infotodo/InfoTodo";
import { useAppSelector } from "../../hooks/useRedux";
import {useTranslation} from 'react-i18next'

function AllTasks() {
  const {todos, pending, error} = useAppSelector(state => state.TodoReducer)
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
              <InfoTodo data={todos} />
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

export default AllTasks;
