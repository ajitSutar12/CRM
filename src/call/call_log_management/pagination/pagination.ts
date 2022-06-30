import { PaginationResultInterface } from "./pagination.option.result.interface";
import { call_log_management } from '../../../Entity/call_log_management.entity';

export class Pagination<PaginationEntity> {
    public data: call_log_management[];
    public recordsFiltered: number;
    public recordsTotal: number;

    constructor(paginationResults: PaginationResultInterface) {

        this.data = paginationResults.data;
        this.recordsFiltered = paginationResults.data.length;
        this.recordsTotal = paginationResults.recordsTotal;

    }
}