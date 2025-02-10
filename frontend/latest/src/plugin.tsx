import { Plugins } from '@openmsupply-client/common';
import ShippingStatus from './ShippingStatus/ShippingStatus';
import Replenishment from './Dashboard/Replenishment';
import SyncStatus from './Dashboard/SyncStatus';
import StockDonorEdit from './StockDonor/StockDonorEdit';
import { StateLoader, StockDonorColumn } from './StockDonor/StockDonorColumn';
import {
  StateLoader as IOLoader,
  Column as IOColumn,
} from './InternalOrderColumn/InternalOrderColumn';

const ReplenishmentAndSyncStatus: Plugins = {
  inboundShipmentAppBar: [ShippingStatus],
  dashboard: [Replenishment, SyncStatus],
  stockEditForm: [StockDonorEdit],
  stockColumn: { StateLoader: [StateLoader], columns: [StockDonorColumn] },
  internalOrderColumn: { StateLoader: [IOLoader], columns: [IOColumn] },
};

export default ReplenishmentAndSyncStatus;
