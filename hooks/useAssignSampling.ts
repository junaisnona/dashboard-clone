import { ISamplingRequest } from "./../@types/ISamplingRequest";
import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { ISamplingDetails } from "../@types/ISamplingDetails";

const samplingRequest = async (
    assignSamplingDetails: ISamplingDetails
): Promise<any> => {
  let actions = {
    rfq_verification: true,
    add_proposal: true,
    accept_proposal: true,
    request_sampling: true,
    assign_sampling: true
  };

  let samplingDetails = {
    targetDate: assignSamplingDetails.targetDate,
    teckPack: assignSamplingDetails.techPack,
    Comment: assignSamplingDetails.comment,
  };

  return await axios.patch(
    `http://localhost:8000/productslist/${assignSamplingDetails?.pid}`,
    {
      actions,
      samplingDetails,
    }
  );
};

export const useAssignSampling = () => {
  const queryClient = useQueryClient();
  return useMutation(samplingRequest, {
    onSuccess: () => {
      //   alert("success");
      queryClient.invalidateQueries("customerProducts");
    },
  });
};
