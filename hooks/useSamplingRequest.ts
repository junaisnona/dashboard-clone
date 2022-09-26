import { ISamplingRequest } from "./../@types/ISamplingRequest";
import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

const samplingRequest = async (
  samplingRequestDetails: ISamplingRequest
): Promise<any> => {
  let actions = {
    rfq_verification: true,
    add_proposal: true,
    accept_proposal: true,
    request_sampling: true
  };

  let customerDetails = {
    name: samplingRequestDetails.name,
    phoneNumber: samplingRequestDetails.phoneNumber,
    shippingAddress: samplingRequestDetails.shippingAddress,
  };

  return await axios.patch(
    `http://localhost:8000/productslist/${samplingRequestDetails?.pid}`,
    {
      actions,
      customerDetails,
    }
  );
};

export const useSamplingRequest = () => {
  const queryClient = useQueryClient();
  return useMutation(samplingRequest, {
    onSuccess: () => {
      //   alert("success");
      queryClient.invalidateQueries("customerProducts");
    },
  });
};
