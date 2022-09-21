import React from "react";
import {useRFQVerification} from '../../hooks/useRFQVerification'

function VerifyRFQ({pid}: {pid?: number | undefined}) {
    
    const verifyRFQMutation = useRFQVerification();
  return (
    <div className="flex justify-center">
      <button className="block bg-company-color px-2 py-1 text-sm rounded-sm text-white" onClick={() => {
        verifyRFQMutation.mutate(pid)
      }}>
        Verify RFQ
      </button>
    </div>
  );
}

export default VerifyRFQ;
