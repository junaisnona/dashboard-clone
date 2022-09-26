import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

const deliverSample = async (pid?: number | undefined) => {
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
    delivered_sample: true
  };

  await axios.patch(`http://localhost:8000/productslist/${pid}`, {
    actions,
  });
};

export const useDeliverSample = () => {
  const queryClient = useQueryClient();

  return useMutation(deliverSample, {
    onSuccess: () => {
      queryClient.invalidateQueries("customerProducts");
    },
  });
};
