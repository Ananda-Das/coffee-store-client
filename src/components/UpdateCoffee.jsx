import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();

  const { _id, name, quantity, supplier, test, category, details, photo } = coffee;

  const handleUpdateCoffee = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const test = form.test.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updatedCoffee = { name, quantity, supplier, test, category, details, photo };

    //send data to the server
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success",
            text: "Updated Successfuly Updated",
            icon: "success",
            confirmButtonText: "Okay",
          });
        }
      });

    console.log(updatedCoffee);
  };

  return (
    <div className="bg-[#F4F3F0] p-24">
      <h2 className="text-3xl font-extrabold text-center">Update Coffee: {name}</h2>
      <form onSubmit={handleUpdateCoffee}>
        {/* form row */}
        <div className="md:flex gap-5 mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <label className="input-group">
              <input type="text" placeholder="Coffee Name" name="name" defaultValue={name} className="input input-bordered w-full" />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Avaiable Quantity</span>
            </label>
            <label className="input-group">
              <input type="number" placeholder="Avaiable Quantity" name="quantity" defaultValue={quantity} className="input w-full input-bordered" />
            </label>
          </div>
        </div>

        {/* form row */}
        <div className="md:flex gap-5 mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Supplier Name</span>
            </label>
            <label className="input-group">
              <input type="text" placeholder="Supplier" defaultValue={supplier} name="supplier" className="input input-bordered w-full" />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Test</span>
            </label>
            <label className="input-group">
              <input type="text" placeholder="Test" defaultValue={test} name="test" className="input w-full input-bordered" />
            </label>
          </div>
        </div>
        {/* form row */}
        <div className="md:flex gap-5 mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              <input type="text" placeholder="Category" defaultValue={category} name="category" className="input input-bordered w-full" />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              <input type="text" placeholder="Details" defaultValue={details} name="details" className="input w-full input-bordered" />
            </label>
          </div>
        </div>
        {/* form row */}
        <div className="mb-8">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group">
              <input type="text" placeholder="Photo URL" defaultValue={photo} name="photo" className="input input-bordered w-full" />
            </label>
          </div>
        </div>

        <input type="submit" className="btn btn-block" value="Update Coffee" />
      </form>
    </div>
  );
};

export default UpdateCoffee;
