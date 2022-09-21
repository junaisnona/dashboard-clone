import { useQueryClient, useMutation } from 'react-query';
import { IProduct } from './../@types/IProduct';
import axios from 'axios';

const addProduct = async (data: IProduct | undefined) => {
  
  await axios.post("http://localhost:8000/productslist", {
    ...data,
  });

};


export const useAddProduct = () => {
  const queryClient = useQueryClient();

  return useMutation(addProduct, {
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries("customerProducts");

      // const message = "success"
      // alert(message)
    },
  });
  };

