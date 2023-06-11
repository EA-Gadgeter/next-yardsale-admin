const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const endPoints = {
  auth: {
    login: `${API}/api/${VERSION}/auth/login`,
    profile: `${API}/api/${VERSION}/auth/profile`,
  },
  products: {
    getProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
    getProducts: (limit, offset) => `${API}/api/${VERSION}/products?limit=${limit}&offset=${offset}`,
    addProduct: `${API}/api/${VERSION}/products`,
    deleteProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
  },
  categories: {
    getCategories: `${API}/api/${VERSION}/categories`,
    getCategorie: (id) => `${API}/api/${VERSION}/categories/${id}`,
  },
};

export default endPoints;
