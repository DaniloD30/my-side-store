import {
  ResponseProduct,
  ResponseProductCategories,
} from "@/components/CardProduct/types";

interface State {
  categories: ResponseProductCategories | undefined;
  products: ResponseProduct | undefined;
  nameSearch: string;
  category: string;
  page: number;
  loading: boolean;
  loadingCategories: boolean;
}

export type Action =
  | { type: "SET_CATEGORIES"; payload: ResponseProductCategories }
  | { type: "SET_PRODUCTS"; payload: ResponseProduct }
  | { type: "SET_NAME_SEARCH"; payload: string }
  | { type: "SET_CATEGORY"; payload: string }
  | { type: "SET_PAGE"; payload: number }
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_LOADING_CATEGORIES"; payload: boolean }
  | { type: "RESET_FILTERS" };

export const initialState: State = {
  categories: undefined,
  products: undefined,
  nameSearch: "",
  category: "",
  page: 1,
  loading: true,
  loadingCategories: true,
};

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_CATEGORIES":
      return { ...state, categories: action.payload };
    case "SET_PRODUCTS":
      return { ...state, products: action.payload };
    case "SET_NAME_SEARCH":
      return { ...state, nameSearch: action.payload };
    case "SET_CATEGORY":
      return { ...state, category: action.payload };
    case "SET_LOADING_CATEGORIES":
      return { ...state, loadingCategories: action.payload };
    case "SET_PAGE":
      return { ...state, page: action.payload };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "RESET_FILTERS":
      return { ...state, page: 1, nameSearch: "", category: "" };
    default:
      return state;
  }
}
