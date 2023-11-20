import "../style/StylePages.scss";
import InfoTodo from "../../components/infotodo/InfoTodo";
import { useAppSelector } from "../../hooks/useRedux";
import {useTranslation} from 'react-i18next'

function AllTasks() {
  const { pending, error} = useAppSelector(state => state.TodoReducer)
  const {t} = useTranslation()

  return (
    <section className="section">
      <p className="page">{t('Today tasks')} (0 {t('tasks')})</p>
      <div>
        {0 ? (
          <div className="todos">
            {pending ? (
              <h1>Loading</h1>
            ) : error ? (
              <h1>{error}</h1>
            ) : (
              <InfoTodo  />
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