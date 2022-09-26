import axios from "axios";
import { IAddProposal } from "../@types/IAddProposal";
import { useMutation, useQueryClient } from "react-query";
import { IAddBOM } from "../@types/IAddBOM";

const addBOM = async (data?: IAddBOM | undefined): Promise<any> => {
  console.log(data?.pid);

    let fabricDescription = data?.fabricDescription;
    let fabricPrice = data?.fabricPrice;
    let fabricQuantity = data?.fabricQuantity;
    let fabricType = data?.fabricType;
    let trimDescription = data?.trimDescription;
    let trimPrice = data?.trimPrice;
    let trimQuantity = data?.trimQuantity;
    let measureType = data?.measureType;

    let bom_data = {
        fabricDescription,
        fabricPrice,
        fabricQuantity,
        fabricType,
        trimDescription,
        trimPrice,
        trimQuantity,
        measureType
    }

  let actions = {
    rfq_verification: true,
    add_proposal: true,
    accept_proposal: true,
    request_sampling: true,
    assign_sampling: true,
    accept_sample_request: true,
    add_bom: true
  };

  return await axios.patch(`http://localhost:8000/productslist/${data?.pid}`, {
    actions,
    bom_data
  });
};

export const useAddBOM = () => {
  const queryClient = useQueryClient();
  return useMutation(addBOM, {
    onSuccess: () => {
      //   alert("success");
      queryClient.invalidateQueries("customerProducts");
    },
  });
};
