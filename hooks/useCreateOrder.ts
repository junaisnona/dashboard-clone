import { IOrder } from './../@types/IOrder';

import axios from "axios"
import { useMutation, useQueryClient } from "react-query"

export const createOrder = async (newOrder: IOrder) => {
    const {data} = await axios.post("http://localhost:8000/orderlist", {
        ...newOrder
    })

    console.log(data);

    return data;
    
}


export const useCreateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation(createOrder, {
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries('customerOrder')
    }
  })
}

