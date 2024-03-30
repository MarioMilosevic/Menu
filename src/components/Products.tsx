import Meal from "./Meal";

type Element = {
  id: number;
  title: string;
  category: string;
  price: number;
  img: string;
  desc: string;
};

type MainProps = {
  current: Element[];
};

const Products: React.FC<MainProps> = ({ current }) => {
  return (
    <main className="grid grid-cols-3 w-[1200px] gap-6 mx-auto py-8 ">
      {current.map((meal) => {
        return <Meal {...meal} key={meal.id} />;
      })}
    </main>
  );
};

export default Products;
