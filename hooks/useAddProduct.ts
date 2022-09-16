import { useQueryClient, useMutation } from 'react-query';
import { IProduct } from './../@types/IProduct';

const addProduct = async (data: IProduct[] | undefined) => {
    const res: Response = await fetch('/api/products', {
        method: 'POST',
        body: JSON.stringify({data}),
        headers: {
            'Content-Type': 'application/json',
        }
    });
}


export const useAddProduct = (product: IProduct[] | undefined) => {
    const queryClient = useQueryClient();
    return useMutation(() => addProduct(product), {
      onSettled: () => {
        queryClient.invalidateQueries("customerProducts");
      },
    });
  };

