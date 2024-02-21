interface MealProps {
  category: string;
  desc: string;
  id: number;
  img: string;
  price: number;
  title: string;
}

const Meal: React.FC<MealProps> = (props) => {
  return (
    <article className="bg-white pb-4">
      <img
        src={`../../public/img/item-${props.id}.jpeg`}
        className="h-[240px] w-[100%] object-cover rounded-md"
      ></img>
      <div className="flex justify-between p-4">
        <h2 className="capitalize font-semibold text-lg tracking-wid leading-loose">{props.title}</h2>
        <span className="flex items-center text-white px-1 bg-orange-400 rounded-md">${props.price}</span>
      </div>
      <p className="px-4">{props.desc}</p>
    </article>
  );
};

export default Meal;
