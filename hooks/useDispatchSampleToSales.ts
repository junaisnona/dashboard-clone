import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

const dispatchSampleToSale = async (pid?: number | undefined) => {
  let actions = {
    rfq_verification: true,
    add_proposal: true,
    accept_proposal: true,
    request_sampling: true,
    assign_sampling: true,
    accept_sample_request: true,
    add_bom: true,
    dispatch_sample_to_sales: true,
  };

  await axios.patch(`http://localhost:8000/productslist/${pid}`, {
    actions,
  });
};

export const useDispatchSampleToSales = () => {
  const queryClient = useQueryClient();

  return useMutation(dispatchSampleToSale, {
    onSuccess: () => {
      queryClient.invalidateQueries("customerProducts");
    },
  });
};
