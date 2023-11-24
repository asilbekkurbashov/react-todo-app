import styles from './HeaderSearch.module.scss'
import { MdOutlineSearch } from "react-icons/md";
import { useTranslation } from 'react-i18next';
import { clsx } from '../../../helper/clsx';
import { useResponsive } from '../../../hooks/useResponsive';
import { useAppDispatch, useAppSelector } from '../../../hooks/useRedux';
import { SharedSliceActions} from '../../../state/shared/sharedSlice'

function HeaderSearch() {
  const {isMobile} = useResponsive(1200)
  const dispatch = useAppDispatch()
  const {search} = useAppSelector(state => state.SharedSliceReducer)
  const { t } = useTranslation();
  const changeInput = (e: string) => {
    dispatch(SharedSliceActions.setSearch(e))
  };
  return (
    <div className={clsx([`${styles.search}`], {[styles.search_phone_device] : isMobile})}>
      <input
        type="text"
        value={search}
        onChange={(e) => changeInput(e.target.value)}
        placeholder={t("Search")}
      />
      <MdOutlineSearch />
    </div>
  );
}

export default HeaderSearch;
