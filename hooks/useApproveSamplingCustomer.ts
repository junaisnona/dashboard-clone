import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

const approveSamplingCustomer = async (pid?: number): Promise<any> => {

    let actions = {
        rfq_verification: true,
        add_proposal: true,
        accept_proposal: true,
        request_sampling: true,
        assign_sampling: true,
        accept_sample_request: true,
        add_bom: true,
        dispatch_sample_to_sales: true,
        approve_sample_by_sales: true,
        dispatch_sample_to_customer: true,
        delivered_sample: true,
        approve_sample_by_customer: true,
      };

  return await axios.patch(`http://localhost:8000/productslist/${pid}`, {
    actions
  });
};

export const useApproveSamplingCustomer = () => {
  const queryClient = useQueryClient();
  return useMutation(approveSamplingCustomer, {
    onSuccess: () => {
      //   alert("success");
      queryClient.invalidateQueries("customerProducts");
    },
  });
};
