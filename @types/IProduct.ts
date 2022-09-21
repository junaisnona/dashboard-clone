
export type IProduct = {
    pid?: number,
    product?: string,
    techPack?: string,
    quantity?: number,
    price?: number,
    leadTime?: number,
    status?: string,
    id?: number
    rfq?: boolean,
    proposal?: boolean,
    sampling?: boolean  
    proposalPrice?: number;
    proposalLeadTime?: number;
    actions?: {
        rfq_verification: boolean,
        add_proposal: boolean,
        accept_proposal: boolean,
        decline_proposal: boolean,
        request_sampling: boolean,
        assign_sampling: boolean,
        accept_sample_request: boolean,
        decline_sample_request: boolean,
        dispatch_sample_to_sales: boolean,
        approve_sample_by_sampler: boolean,
        reject_sample_by_sampler: boolean,
        dispatch_sample_to_customer: boolean,
        delivered_sample: boolean,
        approve_sample_by_customer: boolean,
        reject_sample_by_customer: boolean,
    }
}