import { useContext } from "react";
import { CurrencyContext } from "../../Context/CurrencyContext";

const SignUpSuccess = () => {
  const { signUpSuccessModal, setSignUpSuccessModal, signUpModalMessage } =
    useContext(CurrencyContext);

  return (
    <div>
      {signUpSuccessModal && (
        <div className="w-full h-5/6 absolute bottom-0 z-50  mx-auto bg-neutral-100">
          <svg
            onClick={() => setSignUpSuccessModal(false)}
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 ml-auto text-border cursor-pointer hover:text-slate-900"
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

          <div className="flex flex-col justify-center items-center mt-24">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <strong className="mt-6">{signUpModalMessage}</strong>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUpSuccess;
