import { ResponseProduct } from "@/components/CardProduct/types";

export default function searchProductsByTitle(
  data: ResponseProduct,
  nameSearch: string
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
