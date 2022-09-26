import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

function Sidebar() {
  const { asPath } = useRouter();

  let homeUrl = "/";
  let productsUrl = "/products";
  let orderUrl = "/order"

  if (asPath === "/") {
    homeUrl = "/";
    productsUrl = "/products"
    orderUrl = "/order"
  } else if (asPath.includes("/sales")) {
    homeUrl = "/sales";
    productsUrl = "/sales/products";
    orderUrl = "/sales/order";
  } else if (asPath.includes("/sampling")) {
    homeUrl = "/sampling";
    productsUrl = "/sampling/products";
    orderUrl = "/sampling/order";
  }

  return (
    <aside className="w-[200px] h-[840px] bg-primary-color float-left">
      <nav className="text-left text-lg text-white">
        <div
          className={
            asPath === "/" || asPath === "/sales"
              ? `pl-10 py-3 bg-company-color`
              : "pl-10 py-3 bg-transparent"
          }
        >
          <Link href={`${homeUrl}`}>
            <span className="cursor-pointer">Home</span>
          </Link>
        </div>
        <div
          className={
            asPath.includes("/products")
              ? `pl-10 py-3 bg-company-color`
              : "pl-10 py-3 bg-transparent"
          }
        >
          <Link href={`${productsUrl}`}>
            <span className="cursor-pointer">Products</span>
          </Link>
        </div>
        {asPath !== "/sampling/products" && (
          <div
            className={
              asPath.includes("/order")
                ? `pl-10 py-3 bg-company-color`
                : "pl-10 py-3 bg-transparent"
            }
          >
            <Link href={orderUrl}>
              <span className="cursor-pointer">Orders</span>
            </Link>
          </div>
        )}
      </nav>
    </aside>
  );
}

export default Sidebar;
