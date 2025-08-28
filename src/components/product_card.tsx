import type { Product } from "@/types";
import type { FC } from "react";
import { Card, CardFooter } from "./ui/card";
import { useNavigate } from "react-router";

interface ProductCardProps {
  product: Product;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();

  const navigateDetail = () => {
    navigate(`/products/${product.name}`, { state: product });
  };

  return (
    <Card className=" pt-0 rounded-2xl" onClick={navigateDetail}>
      <img
        src={product.preview}
        className=" h-[300px] object-cover rounded-t-2xl"
      />
      <CardFooter>
        <p className=" text-xl font-semibold">{product.name}</p>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
