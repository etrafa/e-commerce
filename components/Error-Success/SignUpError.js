import { useContext } from "react";
import { CurrencyContext } from "../../Context/CurrencyContext";

const SignUpError = () => {
  const { signUpErrorModal, setSignUpErrorModal, signUpModalMessage } =
    useContext(CurrencyContext);

  return (
    <div>
      {signUpErrorModal && (
        <div className="w-full ml-auto fixed min-h-screen top-0 bg-black bg-opacity-90 z-50">
          <div className="absolute bg-white rounded-lg shadow top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 md:w-8/12 lg:w-4/12 max-w-screen-md z-50">
            <svg
              onClick={() => setSignUpErrorModal(false)}
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 absolute top-2 right-4 ml-auto text-border cursor-pointer hover:text-slate-900"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            <h6 className="my-6 text-xl font-bold text-center">
              {signUpModalMessage}
            </h6>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUpError;
