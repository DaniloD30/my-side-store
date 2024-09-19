export type ResponseProduct = {
  status: string;
  message: string;
  products: Product[];
};

export type Product = {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  brand: string;
  model: string;
  color: string;
  category: string;
};

// {
// 	"status": "SUCCESS",
// 	"message": "Here you go! You've received 50 \n
//     products. If you need more, just ask for it",
