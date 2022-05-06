import { useContext } from "react";
import { CurrencyContext } from "../../Context/CurrencyContext";

const SizeSelectionError = () => {
  const { isProductSizeEmpty, setIsProductSizeEmpty } =
    useContext(CurrencyContext);

  return (
    // ? TOGGLE MODAL}
    <div>
      {isProductSizeEmpty && (
        <div className="w-11/12 h-96  mx-auto bg-neutral-100">
          <svg
            onClick={() => setIsProductSizeEmpty(false)}
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
              className="h-12 w-12 text-border"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <strong className="mt-6">Please select a size</strong>
          </div>
        </div>
      )}
    </div>
  );
};

export default SizeSelectionError;
