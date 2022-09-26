import { useDeliverSample } from "../../hooks/useDeliverSample"

export function DeliverSample({pid}: {pid?: number}) {
  const deliverSample = useDeliverSample()
  return (
    <div>
      <button
      className='block bg-company-color px-2 py-1 text-sm rounded-sm text-white my-1 mx-auto'
      onClick={() => deliverSample.mutate(pid)}
      >Delivered Sample</button>
    </div>
  )
}