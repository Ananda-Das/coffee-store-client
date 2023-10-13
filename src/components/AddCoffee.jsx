import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const test = form.test.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = { name, quantity, supplier, test, category, details, photo };

    //send data to the server
    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.insertedId){
          Swal.fire({
            title: 'Success',
            text: 'Successfuly Inserted',
            icon: 'success',
            confirmButtonText: 'Okay'
          })
        }
      });

    console.log(newCoffee);
  };

  return (
    <div className="bg-[#F4F3F0] p-24">
      <h2 className="text-3xl font-extrabold">Add a Coffee</h2>
      <form onSubmit={handleAddCoffee}>
        {/* form row */}
        <div className="md:flex gap-5 mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <label className="input-group">
              <input type="text" placeholder="Coffee Name" name="name" className="input input-bordered w-full" />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Avaiable Quantity</span>
            </label>
            <label className="input-group">
              <input type="number" placeholder="Avaiable Quantity" name="quantity" className="input w-full input-bordered" />
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
              <input type="text" placeholder="Supplier" name="supplier" className="input input-bordered w-full" />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Test</span>
            </label>
            <label className="input-group">
              <input type="text" placeholder="Test" name="test" className="input w-full input-bordered" />
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
              <input type="text" placeholder="Category" name="category" className="input input-bordered w-full" />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              <input type="text" placeholder="Details" name="details" className="input w-full input-bordered" />
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
              <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered w-full" />
            </label>
          </div>
        </div>

        <input type="submit" className="btn btn-block" value="Add Coffee" />
      </form>
    </div>
  );
};

export default AddCoffee;
