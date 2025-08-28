import type { Product } from "@/types";
import { useLocation } from "react-router";

type LocationState = {
  state: Product;
};

const ProductDetail = () => {
  const { state: product } = useLocation() as LocationState;

  return <div>ProductDetail</div>;
};

export default ProductDetail;
