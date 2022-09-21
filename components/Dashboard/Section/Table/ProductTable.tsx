import React, { useState } from "react";
import { useQuery } from "react-query";
import { IProduct } from "../../../../@types/IProduct";
import { useDeleteProduct } from "../../../../hooks/useDeleteProduct";
import Link from "next/link";
import CreateOrder from "../../../Modal/CreateOrder";
import axios from "axios";
import { useRouter } from "next/router";
import VerifyRFQ from "../../../ActionButton/VerifyRFQ";
import { AcceptProposal, AddProposal } from "../../../ActionButton/Proposal";
import { status } from "../../../../status/status";
import { RequestSample } from "../../../ActionButton/Sampling";

export const fetchProducts = async (): Promise<IProduct[] | undefined> => {
  const res: Response = await fetch("http://localhost:8000/productslist");

  return res.json();
};

export const ProductHead = () => {
  return (
    <tr>
      <th className="border border-slate-200 font-medium p-5">Product</th>
      <th className="border border-slate-200 font-medium p-5">Tech Pack</th>
      <th className="border border-slate-200 font-medium p-5">Quantity</th>
      <th className="border border-slate-200 font-medium p-5">Price</th>
      <th className="border border-slate-200 font-medium p-5">Lead Time</th>
      <th className="border border-slate-200 font-medium p-5">Status</th>
      <th className="border border-slate-200 font-medium p-5">Actions</th>
    </tr>
  );
};

export const ProductBody = () => {
  const { asPath } = useRouter();
  const [createProduct, setCreateProduct] = useState<IProduct | boolean>(false);
  const { data } = useQuery("customerProducts", fetchProducts);

  const deleteProductMutation = useDeleteProduct();
  const handleDelete = (id?: number) => {
    deleteProductMutation.mutate(id);
  };

  return (
    <>
      {data?.map((item) => {
        let status_process = "";
        if (!item?.actions?.rfq_verification) {
          status_process = status.RFQ_VERIFICATION_PENDING;
        } else if (item.actions?.rfq_verification && !item.actions?.add_proposal || item.actions.add_proposal) {
          status_process = status.PROPOSAL_PENDING;
        } else if (item.actions.rfq_verification && item.actions.accept_proposal) {
          status_process = status.PROPOSAL_ACCEPTED;
        } else if (item.actions.accept_proposal && !item.actions.request_sampling) {
          status_process = status.SAMPLING_REQUESTED;
        } else if (item.actions.approve_sample_by_sampler) {
          status_process = status.APPROVED;
        }
        return (
          <tr key={item.id}>
            <td className="border border-slate-200 p-5">
              <Link href={`/products/${item.id}`}>{item.product}</Link>
            </td>
            <td className="border border-slate-200 p-5 font-light">{item.techPack}</td>
            <td className="border border-slate-200 p-5 font-light">
              {item.quantity} pieces
            </td>
            <td className="border border-slate-200 p-5 text-left">
              {item.proposalPrice && <span className="block my-2 font-light"><span className="font-normal">Proposed:</span> {item?.proposalPrice} INR</span>}
              <span className="block my-2 font-light"><span className="font-normal">{item?.proposalPrice && 'Target:'}</span> {item.price} INR</span>
            </td>
            <td className="border border-slate-200 p-5 font-light">
              {item.leadTime} Days
            </td>
            <td className="border border-slate-200 p-5"><span className="bg-blue-100 text-xs text-blue-600 p-1 rounded-sm">{status_process}</span></td>
            <td className="border border-slate-200 p-5 ">
              {asPath === "/products" && item.actions?.approve_sample_by_customer ? (
                <div className="flex justify-center">
                  <button
                className="block bg-company-color px-2 py-1 text-sm rounded-sm text-white"
                onClick={() => {
                  setCreateProduct(item);
                }}
              >
                Create Order
              </button>
                </div>
              ) :
              asPath.includes("/sales/products") && !item.actions?.rfq_verification ? (
                <VerifyRFQ pid={item.id} />
              ) : asPath.includes("/sales/products") && item.actions?.rfq_verification && !item.actions.add_proposal ? (
                <AddProposal pid={item.id} />
              ) : asPath === "/products" && item.actions?.add_proposal && !item.actions.accept_proposal ? (
                <AcceptProposal pid={item.id} />
              ) : asPath === "/products" && item.actions?.accept_proposal && (
                <RequestSample />
              )} 
              <span
                className="cursor-pointer"
                onClick={() => handleDelete(item?.id)}
              >
                Delete
              </span>
            </td>
          </tr>
        );
      })}

      {createProduct && (
        <CreateOrder
          createProduct={createProduct}
          setCreateProduct={setCreateProduct}
        />
      )}
    </>
  );
};
