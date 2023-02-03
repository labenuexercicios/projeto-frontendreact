import { useContext } from "react";
import { RegistrationContext } from "../contexts/RegistrationContext";
import credict from "../img/credict.png";

const PaymentForm = () => {
  const { cardInputs, sendPayment } = useContext(RegistrationContext);

  return (
    <div className=" flex flex-col gap-5 justify-center pt-8 mb-32 max-w-xl">
      <div>
        <h1 className="py-2 font-semibold text-2xl">Payment</h1>
        <p className="font-thin">All transactions are secure and encrypted</p>
        <form className="pt-8">
          <div className="flex justify-between items-center pb-2">
            <p className="font-semibold">Credit card</p>
            <img className="h-5" src={credict} alt="credict card logo" />
          </div>
          {cardInputs.map((input) => {
            return (
              <div>
                <input
                  type={input.type}
                  placeholder={input.placeholder}
                  value={input.value}
                  onChange={input.onChange}
                  className="px-2 py-2 focus:ouline-none w-full lg:w-[580px] border mb-2 border-gray"
                />
                <p className="font-thin text-sm text-red-600 pb-2">
                  {input.validator === 2 ? input.message : ""}
                </p>
              </div>
            );
          })}
          <button
            onClick={sendPayment}
            className="uppercase bg-black py-3 w-full mt-4 text-white"
          >
            Pay now
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;
