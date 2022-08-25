export const Form = () => {
  return (
    <>
      <div className="block p-6 rounded-lg shadow-lg max-w-md bg-silver">
        <form method="onSubmit">
          {/* names */}
          <div className="form-group mb-6">
            <input
              type="text"
              className="form-input px-4 py-3 rounded-full w-full"
              placeholder="Names "
            />
          </div>
          {/* phone */}
          <div className="form-group mb-6">
            <input
              type="tel"
              className="form-input px-4 py-3 rounded-full w-full"
              placeholder="Phone"
            />
          </div>
          {/* email */}
          <div className="form-group mb-6">
            <input
              type="email"
              className="form-input px-4 py-3 rounded-full w-full"
              placeholder="Email"
            />
          </div>
          {/* date */}
          <div className="form-group mb-6">
            <div
              className="datepicker   relative form-floating mb-3 xl:w-96 "
              data-mdb-toggle-button="false"
            >
              <input
                type="text"
                className="form-input px-4 py-3 rounded-full w-full"
                placeholder="Pick a date"
                data-mdb-toggle="datepicker"
              />
            </div>
          </div>
          {/* buttons*/}
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="inline-block px-6 py-2.5 bg-gray-900 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-800 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
            >
              Submit
            </button>
            <button
              type="submit"
              className="inline-block px-6 py-2.5 bg-gray-900 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-800 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
