import { fireEvent, render, screen } from "@testing-library/react";
import Header from ".";

describe("<Header />", () => {
  it("should render the heading", () => {
    render(<Header />);

    expect(screen.getByText("Carrinho")).toBeInTheDocument();
  });
  it("should click on Cart", () => {
    render(<Header />);

    fireEvent.click(screen.getByText("Carrinho"));
  });
  it("should click on My Side Logo", () => {
    render(<Header />);

    fireEvent.click(
      screen.getByRole("img", {
        name: /myside/i,
      })
    );
  });
});
