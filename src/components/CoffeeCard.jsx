/* eslint-disable react/prop-types */
const CoffeeCard = ({ coffee }) => {
  const { name, quantity, supplier, test, category, details, photo } = coffee;

  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={photo} alt="Album" />
        </figure>
        <div className="flex justify-between w-full pr-4 ">
          <div>
            <h2 className="card-title">Name: {name}</h2>
            <p>{quantity}</p>
            <p>{test}</p>
          </div>
          <div className="card-actions justify-end">
            <div className="btn-group btn-group-vertical space-y-4">
              <button className="btn">View</button>
              <button className="btn">Edit</button>
              <button className="btn">X</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
