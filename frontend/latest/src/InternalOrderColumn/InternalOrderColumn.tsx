import React, { useEffect } from 'react';
import {
  ArrayElement,
  BasicCellLayout,
  CellProps,
  ColumnDefinition,
  create,
  PluginDataStore,
  Plugins,
  QueryClientProviderProxy,
} from '@openmsupply-client/common';
import { RequestLineFragment } from '@openmsupply-client/system';
import { usePluginData } from './api';

const useColumnStore = create<PluginDataStore<RequestLineFragment, string>>(
  (set, get) => ({
    data: [],
    set: data => set(state => ({ ...state, data })),
    getById: row =>
      get().data.find(({ relatedRecordId }) => relatedRecordId == row.id),
  })
);

type ColumnType = NonNullable<ArrayElement<Plugins['internalOrderColumn']>>;

export const StateLoader: ArrayElement<ColumnType['StateLoader']> = ({
  stockLines,
}) => {
  const { set } = useColumnStore();
  const { data } = usePluginData.data(stockLines.map(({ id }) => id));

  useEffect(() => {
    if (!!data) {
      set(data);
    }
  }, [data]);

  return <></>;
};

const DonorColumn = ({ rowData }: CellProps<RequestLineFragment>) => {
  const { getById } = useColumnStore();

  return <BasicCellLayout>{getById(rowData)?.data || ''} </BasicCellLayout>;
};

const ColumnInner = (props: CellProps<RequestLineFragment>) => (
  <QueryClientProviderProxy>
    <DonorColumn {...props} />
  </QueryClientProviderProxy>
);

export const Column: ColumnDefinition<RequestLineFragment> = {
  Cell: ColumnInner,
  key: 'stock-donor',
  label: 'Check',
  maxWidth: 150,
  sortable: false,
  order: 103,
};
