export const OrderHead = () => {
  return (
    <tr>
      <th className="border border-slate-600 p-5">Order ID</th>
      <th className="border border-slate-600 p-5">Purchase Order</th>
      <th className="border border-slate-600 p-5">Products</th>
      <th className="border border-slate-600 p-5">Price</th>
      <th className="border border-slate-600 p-5">Est. Delivery</th>
      <th className="border border-slate-600 p-5">Status</th>
    </tr>
  );
};

export const OrderBody = () => {
  return (
    <tr>
      <td className="border border-slate-700 p-5">565758</td>
      <td className="border border-slate-700 p-5">Download</td>
      <td className="border border-slate-700 p-5">Solid Curtains</td>
      <td className="border border-slate-700 p-5">80000 INR</td>
      <td className="border border-slate-700 p-5">25 Days</td>
      <td className="border border-slate-700 p-5">VERIFICATION PENDING</td>
    </tr>
  );
};
