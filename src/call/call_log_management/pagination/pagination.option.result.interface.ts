import { call_log_management } from '../../../Entity/call_log_management.entity'
export interface PaginationResultInterface {

    data: call_log_management[];
    recordsTotal: number;
    next?: string;
    previous?: string;

}