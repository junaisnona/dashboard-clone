import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IAddBOM } from "../../@types/IAddBOM";
import { useAddBOM } from "../../hooks/useAddBOM";

type AddBOMProps = {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  pid?: number | undefined;
};

function AddBOMModal({ pid, setModal }: AddBOMProps) {
  const addBOMMutation = useAddBOM();
  const { register, handleSubmit } = useForm<IAddBOM>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<IAddBOM> = (data?: IAddBOM) => {
    let bomData: IAddBOM = {
      ...data,
      pid,
    };
    addBOMMutation.mutate(bomData);

    setModal(false);
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
                <div>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <header className="flex justify-between items-center">
                      <h2>Add BOM</h2>
                      <span
                        className="cursor-pointer"
                        onClick={() => setModal(false)}
                      >
                        X
                      </span>
                    </header>
                    <hr />
                    <main>
                      <section>
                        <label className="block mt-4">Fabrics</label>
                        <div className="flex">
                          <input
                            type="text"
                            placeholder="Description of fabric"
                            className="w-full border p-1 my-2"
                            {...register("fabricDescription")}
                          />
                          <select
                            className="border p-1 my-2"
                            {...register("fabricType")}
                          >
                            <option defaultValue={"Knit"}>Knit</option>
                            <option value={"Woven"}>Woven</option>
                          </select>
                          <input
                            type="number"
                            placeholder="Quantity"
                            className="border p-1 my-2 ml-2 w-[100px]"
                            {...register("fabricQuantity")}
                          />
                        </div>

                        <div>
                          <input
                            type="number"
                            placeholder="Rs 0"
                            className="border p-1 my-2"
                            {...register("fabricPrice")}
                          />
                        </div>
                      </section>

                      <section>
                        <label className="block mt-4">Trims</label>
                        <div>
                          <input
                            type="text"
                            placeholder="Description of Trim"
                            className="border p-1 my-2"
                            {...register("trimDescription")}
                          />
                          <input
                            type="number"
                            placeholder="Quantity"
                            className="border p-1 my-2 ml-2 w-[100px]"
                            {...register("trimQuantity")}
                          />
                          <select
                            className="border p-1 my-2"
                            {...register("measureType")}
                          >
                            <option defaultValue={"kg"}>kg</option>
                            <option value={"m"}>m</option>
                            <option value={"piece"}>piece</option>
                          </select>
                        </div>
                        <div>
                          <input
                            type="number"
                            placeholder="Rs 0"
                            className="border p-1 my-2"
                            {...register("trimPrice")}
                          />
                        </div>
                      </section>
                    </main>
                    <footer className="flex justify-end">
                      <button className="m-3 px-4 py-1 rounded-sm border">
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="m-3 bg-company-color px-4 py-1 rounded-sm text-white"
                      >
                        Submit
                      </button>
                    </footer>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddBOMModal;
