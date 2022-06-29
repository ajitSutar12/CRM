import { campaign_master } from "src/Entity/campaign_master.entity";

export interface PaginationResultInterface {

    data: campaign_master[];
    recordsTotal: number;
    next?: string;
    previous?: string;

}