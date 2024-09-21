import { ResponseProduct } from "@/components/CardProduct/types";
import searchProductsByTitle from "./searchProductsByTitle";

const mockData: ResponseProduct = {
  status: "status",
  message: "message",
  products: [
    {
      id: 1,
      title:
        "LG 139 cm (55 inches) 4K Ultra HD Smart OLED TV 55BXPTA (Dark Steel Silver)",
      image: "h",
      price: 123,
      description:
        "Display backlight technology used by the TV \r\n" +
        "The nunuber of vertical pixels\r\n",
      brand: "LG",
      model: "OLED55BXPTA",
      color: "dark steel silver",
      category: "tv",
    },
    {
      id: 2,
      title: "Sony",
      image: "ht4N4zL._SL1500_.jpg",
      price: 1322,
      description:
        "Display backlight technology used by the TV \r\n" + "Theal pixels\r\n",
      brand: "LG",
      model: "OLED55BXPTA",
      color: "dark steel silver",
      category: "tv",
    },
    {
      id: 3,
      title: "lg 2",
      image: "https://szL._SL1500_.jpg",
      price: 1322,
      description: "The number of disl pixels\r\n",
      brand: "LG",
      model: "OLED55BXPTA",
      color: "dark steel silver",
      category: "tv",
    },
    {
      id: 4,
      title: "xxxxxxxx",
      image: "https:/-71KVQa4N4zL._SL1500_.jpg",
      price: 1322,
      description:
        "Display backlight technology used by the TV \r\n" +
        "Thizontalpixels\r\n",
      brand: "LG",
      model: "OLED55BXPTA",
      color: "dark steel silver",
      category: "tv",
    },
    {
      id: 5,
      title: "sony 333",
      image: "http4N4zL._SL1500_.jpg",
      price: 1322,
      description:
        "Display backlight technology used by the TV \r\n" +
        "The numb pixels\r\n",
      brand: "LG",
      model: "OLED55BXPTA",
      color: "dark steel silver",
      category: "tv",
    },
  ],
};
describe("utils -> search products", () => {
  const searchProducts = [
    { value: "", expected: mockData },
    {
      value: "lg",
      expected: {
        ...mockData,
        products: [
          {
            ...mockData.products[0],
          },
          {
            ...mockData.products[2],
          },
        ],
      },
    },
    {
      value: "sony",
      expected: {
        ...mockData,
        products: [
          {
            ...mockData.products[1],
          },
          {
            ...mockData.products[4],
          },
        ],
      },
    },
  ];

  it.each(searchProducts)(
    'should search title "$value" and return "$expected"',
    ({ value, expected }) => {
      expect(searchProductsByTitle(value, mockData)).toEqual(expected);
    }
  );
});
