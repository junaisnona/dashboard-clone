import { IProduct } from "./../../@types/IProduct";
import { products } from "./../../data/products";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json(products);
  } else if (req.body.type === "addProduct") {
    const productData = req.body.data;

    const newData = {
      id: Date.now(),
      status: "RFQ VERIFICATION PENDING",
      ...productData,
    };

    console.log("newData ", productData);

    products.push(newData);

    res.status(201).json(newData);
  } else if (req.body.type === "DELETE_PRODUCT") {
    const productID = req.body.data;

    // console.log("rest, ", restProducts);

    
    // products.filter((item) => item.id === productID);
    
    let index = products.findIndex((product) => product.id === productID);
    products.splice(index, 1);

    

    res.status(201).json(products);
  }
}
