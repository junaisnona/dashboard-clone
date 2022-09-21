import axios from "axios";
import { IAddProposal } from "../@types/IAddProposal";
import { useMutation, useQueryClient } from "react-query";

const addProposal = async (data?: IAddProposal | undefined): Promise<any> => {
  console.log(data?.pid);

  const proposalLeadTime = data?.proposalLeadTime;
  const proposalPrice = data?.proposalPrice;

  let actions = {
    rfq_verification: true,
    add_proposal: true,
  };

  return await axios.patch(`http://localhost:8000/productslist/${data?.pid}`, {
    proposalLeadTime,
    proposalPrice,
    actions
  });
};

export const useAddProposal = () => {
  const queryClient = useQueryClient();
  return useMutation(addProposal, {
    onSuccess: () => {
      //   alert("success");
      queryClient.invalidateQueries("customerProducts");
    },
  });
};
