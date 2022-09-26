export type IProduct = {
  pid?: number;
  product?: string;
  techPack?: string;
  quantity?: number;
  price?: number;
  leadTime?: number;
  status?: string;
  id?: number;
  rfq?: boolean;
  proposal?: boolean;
  sampling?: boolean;
  proposalPrice?: number;
  proposalLeadTime?: number;
  actions?: {
    rfq_verification: boolean;
    add_proposal: boolean;
    accept_proposal: boolean;
    decline_proposal: boolean;
    request_sampling?: boolean;
    assign_sampling: boolean;
    accept_sample_request: boolean;
    decline_sample_request: boolean;
    add_bom: boolean;
    dispatch_sample_to_sales: boolean;
    approve_sample_by_sales: boolean;
    reject_sample_by_sales: boolean;
    dispatch_sample_to_customer: boolean;
    delivered_sample: boolean;
    approve_sample_by_customer: boolean;
    reject_sample_by_customer: boolean;
  };
  customerDetails: {
    name: string;
    phoneNumber: number;
    shippingAddress: string;
  };
  samplingDetails: {
    targetDate: Date,
    teckPack: string,
    Comment: string;
  };
  bom_data: {
    fabricDescription: string,
    fabricPrice: number,
    fabricQuantity: number,
    fabricType: string,
    trimDescription: string,
    trimPrice: number,
    trimQuantity: number,
    measureType: string
  }
};
