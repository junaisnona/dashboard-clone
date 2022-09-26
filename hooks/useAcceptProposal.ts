import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

const acceptProposal = async (pid?: number): Promise<any> => {

  let actions = {
    rfq_verification: true,
    add_proposal: true,
    accept_proposal: true,
  };

  return await axios.patch(`http://localhost:8000/productslist/${pid}`, {
    actions
  });
};

export const useAcceptProposal = () => {
  const queryClient = useQueryClient();
  return useMutation(acceptProposal, {
    onSuccess: () => {
      //   alert("success");
      queryClient.invalidateQueries("customerProducts");
    },
  });
};
