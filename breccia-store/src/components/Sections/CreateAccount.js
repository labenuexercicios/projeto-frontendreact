import { useContext, useState } from "react";
import { RegistrationContext } from "../../contexts/RegistrationContext";

const CreateAccount = () => {
  const { inputs, sendRegistration } = useContext(RegistrationContext);

  return (
    <div className=" flex flex-col gap-5 justify-center pt-8 mb-32 max-w-xl">
      <div>
        <h1 className="py-2 font-semibold text-3xl">Create Account</h1>
      </div>
      <form onSubmit={sendRegistration}>
        {inputs.map((input, index) => {
          return (
            <>
              <input
                key={index}
                type={input.type}
                placeholder={input.placeholder}
                value={input.value}
                onChange={input.onChange}
                onClick={input.onClick}
                className="px-2 py-2 focus:ouline-none w-full lg:w-96 border mb-2 border-gray"
              />
              <p className="font-thin text-sm text-red-600 pb-2">
                {input.validation === 2 ? input.message : ""}
              </p>
            </>
          );
        })}

        <ul className="font-thin text-sm pb-4">
          <li>- At least one uppercase.</li>
          <li>- At least one number.</li>
          <li>- 8-15 characters.</li>
        </ul>

        <button
          type="submit"
          className="uppercase bg-black py-3 w-full  text-white"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default CreateAccount;
