import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IAddProposal } from "../../@types/IAddProposal";
import { useAddProposal } from "../../hooks/useAddProposal";

type AddProposalModalProps = {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  pid?: number
}



function AddProposalModal({setModal, pid}: AddProposalModalProps) {
  const addProposalMutation = useAddProposal();
  const { register, handleSubmit } = useForm<IAddProposal>({
    mode: "onChange",
  });

  const onSubmit:SubmitHandler<IAddProposal> = (data?: IAddProposal) => {
    let proposal: IAddProposal = {
      ...data,
      pid
    }
    addProposalMutation.mutate(proposal)

    setModal(false);
  }
  

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
                  <header>
                    <div className="flex justify-between px-5">
                      <h2 className="text-xl">Add Proposal</h2>
                      <span className="text-2xl cursor-pointer" onClick={() => setModal(false)}>X</span>
                    </div>
                    <hr />
                  </header>

                  <main className=" static text-center">
                    <div className="my-3">
                      <label className="ml-9 mr-2">Price:</label>
                      <input
                        type="number"
                        placeholder="Rs 0"
                        className="border p-1"
                        {...register("proposalPrice")}
                      />
                    </div>
                    <div className="my-3">
                      <label className="mr-2">Lead time:</label>
                        
                      <input type="number" className="border p-1" {...register("proposalLeadTime")} />
                    </div>
                  </main>
                  <footer>
                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                      <button type="submit" className="inline-flex w-full justify-center rounded-md border border-transparent bg-company-color px-4 py-2 text-base font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-company-color focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm">
                        Submit
                      </button>
                      <button onClick={() => setModal(false)} className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                        Cancel
                      </button>
                    </div>
                  </footer>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProposalModal;
