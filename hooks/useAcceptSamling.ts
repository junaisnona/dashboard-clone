import { ISamplingRequest } from "./../@types/ISamplingRequest";
import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { ISamplingDetails } from "../@types/ISamplingDetails";

const acceptSampling = async (
    pid?: number
): Promise<any> => {
  let actions = {
    rfq_verification: true,
    add_proposal: true,
    accept_proposal: true,
    request_sampling: true,
    assign_sampling: true,
    accept_sample_request: true,
  };


  return await axios.patch(
    `http://localhost:8000/productslist/${pid}`,
    {
      actions,
    }
  );
};

export const useAcceptSampling = () => {
  const queryClient = useQueryClient();
  return useMutation(acceptSampling, {
    onSuccess: () => {
      //   alert("success");
      queryClient.invalidateQueries("customerProducts");
    },
  });
};
