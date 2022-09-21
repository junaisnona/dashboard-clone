import { useMutation, useQueryClient } from "react-query";
import axios from "axios";

const deleteProduct = async (id?: number) => {
    const res: Response = await axios.delete(`http://localhost:8000/productsList/${id}`);
  
    return res;
  }

  
 export const useDeleteProduct = () => {
    const queryClient = useQueryClient();
    return useMutation(deleteProduct, {
        onSuccess: data => {
      console.log(data);
      queryClient.invalidateQueries('customerProducts')
  
      // const message = "success"
      // alert(message)
    }
  });
 }