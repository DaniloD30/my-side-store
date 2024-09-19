import { render, screen } from "@testing-library/react";
import Footer from ".";

describe("<Footer />", () => {
  it("should render", () => {
    render(<Footer />);

    expect(
      screen.getByText(
        "MySide - MySide Serviços Imobiliários LTDA CNPJ: 35.895.467/0001-21 ©Todos os direitos reservados"
      )
    ).toBeInTheDocument();
  });
});
