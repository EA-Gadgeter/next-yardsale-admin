import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import FormProduct from "../../../components/FormProduct";

import endPoints from "../../../services/api";

const Edit = () => {
  const [product, setProduct] = useState({});
  const [notFound, setNotFound] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const { id } = router.query;

    if (!router.isReady) return;

    async function getProduct() {
      const response = await axios.get(endPoints.products.getProduct(id));
      setProduct(response.data);
    }

    getProduct().catch(() => {
      setNotFound(true);
    });
  }, [router.isReady]);

  return <>{notFound ? <h1>Product not found</h1> : <FormProduct product={product} />}</>;
};

export default Edit;
