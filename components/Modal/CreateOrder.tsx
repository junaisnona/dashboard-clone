import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { IOrder } from '../../@types/IOrder';
import { IProduct } from '../../@types/IProduct';
import { useCreateProduct } from '../../hooks/useCreateOrder';

type setValueProps = {
    setCreateProduct: React.Dispatch<React.SetStateAction<boolean | IProduct>>;
    createProduct: IProduct | boolean;
  };

function CreateOrder({ setCreateProduct, createProduct }: setValueProps) {

  const createProductMutation = useCreateProduct();

  let pid:number | undefined, product:string | undefined, leadTime:number | undefined, price: number | undefined, quantity: number | undefined, status: string | undefined, techPack: string | undefined;

  if(typeof createProduct === 'object') {
    pid = createProduct.id
    product = createProduct.product
    leadTime = createProduct.leadTime;
    price = createProduct.price;
    quantity = createProduct.quantity;
    status = createProduct.status;
    techPack = createProduct.techPack;
  }
  const { register, handleSubmit } = useForm<IOrder>({
    mode: "onChange",
  });


  const onSubmit: SubmitHandler<IOrder> = async (data: IProduct) => {

    
    let orderProduct = {
      ...data,
      pid,
      product,
      leadTime,
      price,
      quantity,
      status,
      techPack,
    };

    console.log('orderProduct ', orderProduct);
    
    createProductMutation.mutate(orderProduct);

    setCreateProduct(false);
  };

  return (
    <div>
      <div
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div>
                    <header className='flex justify-between items-center'>
                        <h2>Create Order</h2>
                        <span className='cursor-pointer' onClick={() => setCreateProduct(false)}>X</span>
                    </header>
                    <hr />
                    <main>
                        <div className='text-center my-4'>
                        <label>
                            PO: <input type="text" placeholder='upload file' className='border p-2' {...register('po')} />
                        </label>
                        </div>
                        <div className='flex justify-between items-start my-4'>
                        <label>Shipping Details: <input type="number" placeholder='Qty' className='border p-2 w-28' {...register('qty')} />
                        </label>
                        <label>
                            <textarea placeholder='Address' className='p-2 border' {...register('address')} />
                        </label>
                        </div>
                        <div className='text-center'>
                            <button className='border border-dashed px-32 py-2'>+ Add More</button>
                        </div>
                    </main>
                    <footer>
                        <div className='text-right'>
                            <button className='m-3 border px-4 py-1' onClick={() => setCreateProduct(false)}>Cancel</button>
                            <button className='m-3 bg-company-color px-4 py-1 rounded-sm text-white' type='submit'>Submit</button>
                        </div>
                    </footer>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>    
  )
    }

export default CreateOrder
