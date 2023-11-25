import InfoTodo from "../components/infotodo/InfoTodo";
import { useFilterData } from "../hooks/useFilterData";
import {useTranslation} from 'react-i18next'
import {useDefaultQuery} from '../state/index.api'
import "./StylePages.scss";
import { useLocation } from "react-router-dom";
import { useLabel } from "../hooks/useLabel";

export function Page() {
  const {data=[], isLoading,isError} = useDefaultQuery()
  const filterData = useFilterData(data)
  const {pathname} = useLocation();
  const menuLabel = useLabel(pathname)  ;
  const {t} = useTranslation()

  return (
    <section className="section">
      <p className="page">{menuLabel} ({filterData ? filterData.length : 0} {t('tasks')})</p>
      <div>
        {filterData && filterData.length ? (
          <div className="todos">
            {isLoading ? (
              <h1>Loading</h1>
            ) : isError ? (
              <h1>{isError}</h1>
            ) : (
              <InfoTodo data={filterData} />
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

