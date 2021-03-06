import { Callback, OrNull, OrUndefined, User } from '@types';
import { useDispatch, useSelector } from 'react-redux';

import MUIDataTable from 'mui-datatables';
import React from 'react';
import { ReduxState } from '../../../redux/reducers';
import { Toast } from '../../../shared/components/toast';
import { clearAllVhtsRequestOutcome } from '../../../redux/reducers/user/allVhts';
import { clearHealthFacilitiesRequestOutcome } from '../../../redux/reducers/healthFacilities';
import { customRowRender } from '../../../shared/components/table/row';
import { customToolbarRender } from './toolbar';
import { updateRowsPerPage } from '../../../redux/reducers/user/allUsers';
import { useData } from './hooks/data';
import { useHealthFacilityOptions } from '../../../shared/hooks/healthFacilityOptions';
import { useLocalization } from '../../../shared/hooks/table/localization';
import { useSearchChange } from '../../../shared/hooks/table/searchChange';
import { useStyles } from './styles';
import { useTableColumns } from './hooks/tableColumns';
import { useUpdatePageNumber } from '../../../shared/hooks/table/updatePageNumber';
import { useVHTOptions } from './hooks/vhtOptions';

interface IProps {
  data: OrNull<Array<User>>;
  pageNumber: number;
  loading: boolean;
  sortUsers: Callback<OrNull<Array<User>>>;
  updatePageNumber: Callback<number>;
  updateSearchText: Callback<OrUndefined<string>>;
  searchText?: string;
}

type SelectorState = {
  error: OrNull<string>;
  rowsPerPage: number;
};

export const AdminTable: React.FC<IProps> = (props) => {
  const { error, rowsPerPage } = useSelector(
    ({ healthFacilities, user }: ReduxState): SelectorState => {
      return {
        error: user.allVhts.error
          ? user.allVhts.message
          : healthFacilities.error,
        rowsPerPage: user.allUsers.rowsPerPage,
      };
    }
  );

  const dispatch = useDispatch();

  const classes = useStyles();

  const onSearchChange = useSearchChange({
    capitalize: false,
    updateSearchText: props.updateSearchText,
  });

  const { users, sortData } = useData({
    data: props.data,
    searchText: props.searchText,
    sortUsers: props.sortUsers,
  });

  const healthFacilityOptions = useHealthFacilityOptions();

  const vhtOptions = useVHTOptions();

  const tableColumns = useTableColumns({
    users,
    healthFacilityOptions,
    vhtOptions,
    sortData,
  });

  const localization = useLocalization({
    loading: props.loading,
    loadingText: `Getting user data...`,
  });

  const onChangePage = useUpdatePageNumber({
    update: props.updatePageNumber,
  });

  const onChangeRowsPerPage = (numberOfRows: number): void => {
    dispatch(updateRowsPerPage(numberOfRows));
  };

  const clearMessage = (): void => {
    dispatch(clearAllVhtsRequestOutcome());
    dispatch(clearHealthFacilitiesRequestOutcome());
  };

  return (
    <>
      <Toast message={error} clearMessage={clearMessage} status="error" />
      <MUIDataTable
        columns={tableColumns}
        data={users}
        title="Manage Users"
        options={{
          customRowRender: customRowRender({ rowClassName: classes.row }),
          customToolbar: customToolbarRender({
            loading: props.loading,
            searchText: props.searchText ?? ``,
            searchPlaceholder: `Search by any field`,
            updateSearchText: onSearchChange,
          }),
          download: false,
          elevation: 1,
          fixedHeader: true,
          filter: false,
          page: props.pageNumber,
          print: false,
          responsive: `simple`,
          rowsPerPage,
          selectableRows: `none`,
          search: false,
          textLabels: localization,
          viewColumns: false,
          onChangePage,
          onChangeRowsPerPage,
        }}
      />
    </>
  );
};
