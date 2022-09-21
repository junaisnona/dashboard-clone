import React from "react";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { IProduct } from "../../@types/IProduct";
import { useAddProduct } from "../../hooks/useAddProduct";

type setValueProps = {
  setClick: React.Dispatch<React.SetStateAction<boolean>>;
};

function SendEnquiry({ setClick }: setValueProps) {
  const addProductMutation = useAddProduct();

  const { register, handleSubmit } = useForm<IProduct>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<IProduct> = async (data: IProduct) => {
    let productData = {
      ...data,
      // id: Date.now().toString(),
      // status: "RFQ VERIFICATION PENDING",
    };

    addProductMutation.mutate(productData);

    setClick(false);
  };

  const handleCancel = () => {
    setClick(false);
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
                  <div className="flex justify-between items-center mb-2">
                    <label className="block">Products </label>
                    <select
                      className="border border-slate-300 w-[300px] p-1 text-lg"
                      {...register("product")}
                    >
                      <option
                        defaultValue={"Men's T-shirt"}
                        value={"Men's T-shirt"}
                      >
                        T-shirt
                      </option>
                      <option value={"Men's Pant"}>Pant</option>
                      <option value={"Men's Cap"}>Cap</option>
                      <option value={"Men's Belt"}>Belt</option>
                      <option value={"Men's Shoe"}>Shoe</option>
                    </select>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="block ">Tech Pack </label>
                    <input
                      className="border border-slate-300 w-[300px] p-1 text-lg"
                      type="text"
                      {...register("techPack")}
                    />
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="block ">Quantity </label>
                    <input
                      className="border border-slate-300 w-[300px] p-1 text-lg"
                      type="text"
                      {...register("quantity")}
                    />
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="block ">Price </label>
                    <input
                      className="border border-slate-300 w-[300px] p-1 text-lg"
                      type="text"
                      {...register("price")}
                    />
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="block ">Lead Time</label>
                    <input
                      className="border border-slate-300 w-[300px] p-1 text-lg"
                      type="text"
                      {...register("leadTime")}
                    />
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex w-full justify-center rounded-md border border-transparent bg-company-color px-4 py-2 text-base font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-company-color focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                      // onClick={handleSubmit}
                    >
                      Send Enquiry
                    </button>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={handleCancel}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SendEnquiry;
