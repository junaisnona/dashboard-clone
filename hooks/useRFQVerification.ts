import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { actions } from "../actions/actions";



const rfcVerification = async (pid: number | undefined) => {
    let actions = {
        rfq_verification: true,
    }
    
  await axios.patch(`http://localhost:8000/productslist/${pid}`, {
    actions
  });
};

export const useRFQVerification = () => {
  const queryClient = useQueryClient();

  return useMutation(rfcVerification, {
    onSuccess: () => {
      queryClient.invalidateQueries("customerProducts");
    },
  });
};
