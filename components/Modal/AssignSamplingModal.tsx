import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ISamplingDetails } from "../../@types/ISamplingDetails";
import { useAssignSampling } from "../../hooks/useAssignSampling";

type AssignSamplingProps = {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  pid?: number | undefined;
};

function AssignSamplingModal({ pid, setModal }: AssignSamplingProps) {
  const AssignSamplingMutation = useAssignSampling();
  const { register, handleSubmit } = useForm<ISamplingDetails>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<ISamplingDetails> = (
    data?: ISamplingDetails
  ) => {
    let assignSamplingDetails: ISamplingDetails = {
      ...data,
      pid,
    };
    AssignSamplingMutation.mutate(assignSamplingDetails);

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
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div>
                    <header className="flex justify-between items-center">
                      <h2>Add Sampling Details</h2>
                      <span
                        className="cursor-pointer"
                        onClick={() => setModal(false)}
                      >
                        X
                      </span>
                    </header>
                    <hr />
                    <main className="text-center">
                      <div className="my-4 flex">
                        <div className="w-[180px] text-right  mr-3">
                          <label>Target Date: </label>
                        </div>
                        <input
                          type="date"
                          className="border p-2"
                          {...register("targetDate")}
                        />
                      </div>
                      <div className="flex my-4">
                        <div className="w-[180px]  text-right mr-3">
                          <label>Techpack: </label>
                        </div>
                        <input
                          type="text"
                          className="border p-2 "
                          {...register("techPack")}
                        />
                      </div>
                      <div className="flex items-start my-4">
                        <div className="w-[180px]  text-right mr-3">
                          <label>Comment:</label>
                        </div>
                        <textarea
                          placeholder="Address"
                          className="p-2 border w-[200px]"
                          {...register("comment")}
                        />
                      </div>
                    </main>
                    <footer>
                      <div className="text-right">
                        <button
                          className="m-3 border px-4 py-1 rounded-sm"
                          onClick={() => setModal(false)}
                        >
                          Cancel
                        </button>
                        <button
                          className="m-3 bg-company-color px-4 py-1 rounded-sm text-white"
                          type="submit"
                        >
                          Submit
                        </button>
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
  );
}

export default AssignSamplingModal;
