const MenuItem = ({ item }) => {
  const { name, recipe, price, image } = item;
  return (
    <div className="flex gap-8">
      <img
        style={{ borderRadius: "0px 200px 200px 200px" }}
        className="w-[120px] "
        src={image}
        alt=""
      />
      <div className="space-y-2">
        <h3 className="uppercase text-xl">{name}------------------</h3>
        <p>{recipe}</p>
        <p className="text-[#BB8506]">${price}</p>
      </div>
    </div>
  );
};

export default MenuItem;
