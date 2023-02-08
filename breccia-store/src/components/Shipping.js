import { useContext } from "react";
import { RegistrationContext } from "../contexts/RegistrationContext";

const Shipping = () => {
  const {
    addressInputs,
    states,
    state,
    setState,
    country,
    setCountry,
    sendAddress,
    stateValid,
    countryValid,
  } = useContext(RegistrationContext);
  return (
    <div className="flex flex-col gap-5 justify-center pt-8 mb-32 max-w-xl">
      <h2 className="py-2 font-semibold text-3xl">Shipping Address</h2>
      <form>
        <div className="w-full">
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="px-2 py-2 focus:ouline-none w-full lg:w-96 border  border-gray"
          >
            <option defaultValue="">Country</option>
            <option>Brazil</option>
          </select>
          {countryValid === 2 ? (
            <p className="font-thin text-sm text-red-600 pb-2">
              Enter a valid Country
            </p>
          ) : (
            ""
          )}
        </div>
        <div>
          <select
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="px-2 py-2 focus:ouline-none w-full lg:w-96 border my-2 border-gray"
          >
            <option defaultValue="">State</option>
            {states.map((state) => {
              return <option>{state}</option>;
            })}
          </select>
          {stateValid === 2 ? (
            <p className="font-thin text-sm text-red-600 pb-2">
              Enter a valid State
            </p>
          ) : (
            ""
          )}
        </div>

        {addressInputs.map((input, index) => {
          return (
            <div>
              <input
                key={index}
                type={input.type}
                value={input.value}
                placeholder={input.placeholder}
                onChange={input.onChange}
                className="px-2 py-2 focus:ouline-none w-full border mb-2 border-gray"
              />
              <p className="font-thin text-sm text-red-600 pb-2">
                {input.validation === 2 ? input.message : ""}
              </p>
            </div>
          );
        })}

        <button
          onClick={sendAddress}
          className="uppercase bg-black py-3 w-full mt-4 text-white"
        >
          Continue to payment
        </button>
      </form>
    </div>
  );
};

export default Shipping;
