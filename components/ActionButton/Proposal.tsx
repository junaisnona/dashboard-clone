import React, { useState } from "react";
import { useAcceptProposal } from "../../hooks/useAcceptProposal";
import AddProposalModal from "../Modal/AddProposalModal";

export function AcceptProposal({pid}: {pid?: number}) {
  const acceptProposal = useAcceptProposal();

  return (
    <div>
      <button className="block bg-company-color px-2 py-1 text-sm rounded-sm text-white my-1 mx-auto" onClick={
        () => acceptProposal.mutate(pid)
      }>Accept Proposal</button>
      <button className="block border border-red-600 px-2 py-1 text-sm rounded-sm text-red-600 my-1 mx-auto">Decline Proposal</button>
    </div>
  );
}

export function AddProposal({ pid }: { pid?: number }) {
  const [modal, setModal] = useState<boolean>(false);

  return (
    <div className="flex justify-center">
      <button
        className="block bg-company-color px-2 py-1 text-sm rounded-sm text-white"
        onClick={() => {
          setModal(true);
        }}
      >
        Add Proposal
      </button>
      {modal && <AddProposalModal pid={pid} setModal={setModal} />}
    </div>
  );
}
