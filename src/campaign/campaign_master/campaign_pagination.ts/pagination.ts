import { campaign_master } from "src/Entity/campaign_master.entity";
import { PaginationResultInterface } from "./pagination.option.result.interface";

export class Pagination<PaginationEntity> {
    public data: campaign_master[];
    public recordsFiltered: number;
    public recordsTotal: number;

    constructor(paginationResults: PaginationResultInterface) {

        this.data = paginationResults.data;
        this.recordsFiltered = paginationResults.data.length;
        this.recordsTotal = paginationResults.recordsTotal;

    }
}