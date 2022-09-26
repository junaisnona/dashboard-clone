import React, { useState } from 'react'
import AddBOMModal from '../Modal/AddBOMModal';

function AddBOM({pid}: {pid?: number}) {
  const [modal, setModal] = useState(false);
  return (
    <div>
      <button
      className="block bg-company-color px-2 py-1 text-sm rounded-sm text-white my-1 mx-auto"
      onClick={() => setModal(true)}
      >Add BOM</button>
      {modal && <AddBOMModal pid={pid} setModal={setModal} />}
    </div>
  )
}


// Modal 

export default AddBOM