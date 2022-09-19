import React from 'react'

type setValueProps = {
    setClick: React.Dispatch<React.SetStateAction<boolean>>;
  };

function CreateOrder({ setClick }: setValueProps) {
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
            {/* <!--
        Modal panel, show/hide based on modal state.

        Entering: "ease-out duration-300"
          From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          To: "opacity-100 translate-y-0 sm:scale-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100 translate-y-0 sm:scale-100"
          To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      --> */}
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <form>
                  <div>
                    <header className='flex justify-between items-center'>
                        <h2>Create Order</h2>
                        <span className='cursor-pointer' onClick={() => setClick(false)}>X</span>
                    </header>
                    <hr />
                    <main>
                        <div className='text-center my-4'>
                        <label>
                            PO: <input type="text" placeholder='upload file' className='border p-2' />
                        </label>
                        </div>
                        <div className='flex justify-between items-start my-4'>
                        <label>Shipping Details: <input type="number" placeholder='Qty' className='border p-2 w-28' />
                        </label>
                        <label>
                            <textarea placeholder='Address' className='p-2 border' />
                        </label>
                        </div>
                        <div className='text-center'>
                            <button className='border border-dashed px-32 py-2'>+ Add More</button>
                        </div>
                    </main>
                    <footer>
                        <div className='text-right'>
                            <button className='m-3 border px-4 py-1' onClick={() => setClick(false)}>Cancel</button>
                            <button className='m-3 bg-company-color px-4 py-1 rounded-sm text-white'>Submit</button>
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
