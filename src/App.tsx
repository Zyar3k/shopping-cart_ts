import { useQuery } from "react-query";
// styles
import { Wrapper } from "./App.styles";

export type CartTypeItem = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

const getProducts = async (): Promise<CartTypeItem[]> =>
  (await fetch("https://fakestoreapi.com/products")).json();

const App = () => {
  const { data, isLoading, error } = useQuery<CartTypeItem[]>(
    "products",
    getProducts
  );
  console.log(data);
  return (
    <Wrapper>
      <h1>Start project</h1>
    </Wrapper>
  );
};

export default App;
