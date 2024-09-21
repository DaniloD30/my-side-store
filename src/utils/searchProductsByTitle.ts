import { ResponseProduct } from "@/components/CardProduct/types";

export default function searchProductsByTitle(
  nameSearch: string,
  data?: ResponseProduct
) {
  if (nameSearch !== '' && data?.products) {
    const lowercasedNameSearch = nameSearch.toLowerCase();

    data = {
      ...data,
      products: data.products.filter((item) =>
        item.title?.toLowerCase().includes(lowercasedNameSearch)
      ),
    };
  }

  return data;
}
