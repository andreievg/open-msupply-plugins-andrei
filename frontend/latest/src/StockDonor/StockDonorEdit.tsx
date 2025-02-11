import React from 'react';
import {
  ArrayElement,
  Plugins,
  QueryClientProviderProxy,
  ThemeProviderProxy,
} from '@openmsupply-client/common';
import StockDonorEditInput from './StockDonorEditInput';

export type StockDonorEditPlugin = NonNullable<
  ArrayElement<Plugins['stockEditForm']>
>;

const StockDonorEdit: StockDonorEditPlugin = ({
  stockLine,
  events,
  disableSaveButton,
  enableSaveButton,
}) => (
  <ThemeProviderProxy>
    <QueryClientProviderProxy>
      <StockDonorEditInput
        stockLine={stockLine}
        events={events}
        disableSaveButton={disableSaveButton}
        enableSaveButton={enableSaveButton}
      />
    </QueryClientProviderProxy>
  </ThemeProviderProxy>
);

export default StockDonorEdit;
