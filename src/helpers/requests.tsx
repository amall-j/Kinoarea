import { API_URL } from "../config";
import { $api } from "./api";

export const requests = {
  // PRODUCTS
  fetchProduct: (params: any) => $api.get(`${API_URL}/product/`, { params }),
};
