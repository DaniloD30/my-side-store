import { fireEvent, render, screen } from "@testing-library/react";
import CardProduct from ".";
import { useProduct } from "@/context/ProductContext";

const mockProduct = {
  id: 1,
  title: "title 1",
  image:
    "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692947383286-714WUJlhbLS._SL1500_.jpg",
  price: 10,
  description: "description",
  brand: "brand",
  model: "model",
  color: "blue",
  category: "tv",
};

jest.mock("../../context/ProductContext", () => ({
  useProduct: jest.fn(),
}));

describe("<CardProduct />", () => {
  beforeEach(() => {
    (useProduct as jest.Mock).mockReturnValue({
      handleAddProduct: jest.fn(),
    });
  });

  it("should render CardProduct", () => {
    render(<CardProduct product={mockProduct} />);

    // screen.logTestingPlaygroundURL();
    expect(
      screen.getByRole("heading", {
        name: /title 1/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("img", {
        name: /title 1/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: /description/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: /\$10/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: /adicionar ao carrinho/i,
      })
    ).toBeInTheDocument();
  });

  it("should click button", () => {
    render(<CardProduct product={mockProduct} />);

    fireEvent.click(
      screen.getByRole("button", {
        name: /adicionar ao carrinho/i,
      })
    );
  });
});
