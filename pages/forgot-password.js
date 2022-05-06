const forgotpassword = () => {
  return (
    <div className="mt-6">
      <h1 className="text-border text-2xl font-bold text-center">
        FORGOT YOUR PASSWORD?
      </h1>
      <div className="border-dotted border-2 px-8 mt-4 py-4 w-11/12 mx-auto md:w-8/12 lg:w-6/12">
        <p>
          Please enter your email address below. You will receive a link to
          reset your password.
        </p>
        <p className="text-searchBar mt-6">Email Address</p>
        <input className="border w-11/12 lg:w-6/12 h-8 mt-2" type="email" />
        <button className="block border w-44 h-10 mt-4  mb-4 bg-footer text-white font-bold hover:bg-white hover:text-footer">
          Submit
        </button>
      </div>
    </div>
  );
};

export default forgotpassword;
