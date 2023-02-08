import { createContext, useState, useContext } from "react";
import { CheckoutContext } from "./CheckoutContext";
import validator from "validator";

export const RegistrationContext = createContext();

const RegistrationProvider = ({ children }) => {
  const { setFormPage } = useContext(CheckoutContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCondition, setPasswordCondition] = useState(false);
  const [firstNameValid, setFirstNameValid] = useState(0);
  const [lastNameValid, setLastNameValid] = useState(0);
  const [emailValid, setEmailValid] = useState(0);
  const [passwordValid, setPasswordValid] = useState(0);
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [postCode, setPostCode] = useState("");
  const [addressValid, setAddressValid] = useState(0);
  const [cityValid, setCityValid] = useState(0);
  const [codeValid, setCodeValid] = useState(0);
  const [stateValid, setStateValid] = useState(0);
  const [countryValid, setCountryValid] = useState(0);
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardDate, setCardDate] = useState("");
  const [cardCode, setCardCode] = useState("");
  const [cardNumberValid, setCardNumberValid] = useState(0);
  const [cardNameValid, setCardNameValid] = useState(0);
  const [cardDateValid, setCardDateValid] = useState(0);
  const [cardCodeValid, setCardCodeValid] = useState(0);

  const sendPayment = (e) => {
    e.preventDefault();
    validator.isCreditCard(cardNumber)
      ? setCardNumberValid(1)
      : setCardNumberValid(2);

    const isCardNameValid = /[A-Za-z\sá-úÁ-Ú]{1,}/;
    isCardNameValid.test(cardName) ? setCardNameValid(1) : setCardNameValid(2);

    const isCardDateValid = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
    isCardDateValid.test(cardDate) ? setCardDateValid(1) : setCardDateValid(2);

    const isCardCodeValid = /^\d{3}$/;
    isCardCodeValid.test(cardCode) ? setCardCodeValid(1) : setCardCodeValid(2);

    cardNumberValid === 1 &&
    cardNameValid === 1 &&
    cardDateValid === 1 &&
    cardCodeValid === 1
      ? setFormPage(4)
      : setFormPage(3);
  };

  const sendAddress = (e) => {
    e.preventDefault();

    const isAddressValid = /[A-Za-z\sá-úÁ-Ú\d,.]{5,}/;
    isAddressValid.test(address) ? setAddressValid(1) : setAddressValid(2);

    const isCityValid = /[A-Za-z\sá-úÁ-Ú]{1,}/;
    isCityValid.test(city) ? setCityValid(1) : setCityValid(2);

    const isCodeValid = /^[0-9]{5}-[0-9]{3}$/;
    isCodeValid.test(postCode) ? setCodeValid(1) : setCodeValid(2);

    state ? setStateValid(1) : setStateValid(2);

    country ? setCountryValid(1) : setCountryValid(2);

    if (
      addressValid === 1 &&
      cityValid === 1 &&
      codeValid === 1 &&
      stateValid === 1 &&
      countryValid
    ) {
      return setFormPage(3);
    } else {
      return setFormPage(2);
    }
  };

  const sendRegistration = (e) => {
    e.preventDefault();

    const isFirstNameValid = /[A-Za-z\sá-úÁ-Ú]{1,15}/;
    isFirstNameValid.test(firstName)
      ? setFirstNameValid(1)
      : setFirstNameValid(2);

    const isLastNameValid = /[A-Za-z\sá-úÁ-Ú]{1,15}/;
    isLastNameValid.test(lastName) ? setLastNameValid(1) : setLastNameValid(2);

    validator.isEmail(email) ? setEmailValid(1) : setEmailValid(2);

    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,15}$/;
    isPasswordValid.test(password) ? setPasswordValid(1) : setPasswordValid(2);

    if (
      firstNameValid === 1 &&
      lastNameValid === 1 &&
      emailValid === 1 &&
      passwordValid === 1
    ) {
      return setFormPage(2);
    } else {
      return setFormPage(1);
    }
  };

  const handlePasswordCondition = () => {
    setPasswordCondition(true);
  };

  const inputs = [
    {
      type: "name",
      placeholder: "First Name",
      value: firstName,
      onChange: (e) => setFirstName(e.target.value),
      onClick: "",
      message: "Your name must have 1-15 characters.",
      validation: firstNameValid,
    },
    {
      type: "name",
      placeholder: "Last Name",
      value: lastName,
      onChange: (e) => setLastName(e.target.value),
      onClick: "",
      message: "Your last name must have 1-15 characters.",
      validation: lastNameValid,
    },
    {
      type: "email",
      placeholder: "Email",
      value: email,
      onChange: (e) => setEmail(e.target.value),
      onClick: "",
      message: "E-mail not valid.",
      validation: emailValid,
    },
    {
      type: "password",
      placeholder: "Password",
      value: password,
      onChange: (e) => setPassword(e.target.value),
      onClick: handlePasswordCondition,
      message: "Password not valid.",
      validation: passwordValid,
    },
  ];

  const addressInputs = [
    {
      type: "text",
      placeholder: "Address",
      value: address,
      onChange: (e) => setAddress(e.target.value),
      message: "Enter a valid address",
      validation: addressValid,
    },
    {
      type: "text",
      placeholder: "City",
      value: city,
      onChange: (e) => setCity(e.target.value),
      message: "Enter a valid city",
      validation: cityValid,
    },
    {
      type: "text",
      placeholder: "Postcode",
      value: postCode,
      onChange: (e) => setPostCode(e.target.value),
      message: "Enter a valid ZIP code",
      validation: codeValid,
    },
  ];

  const states = [
    "Acre",
    "Alagoas",
    "Amazonas",
    "Amapá",
    "Bahia",
    "Ceará",
    "Distrito Federal",
    "Espírito Santo",
    "Goiás",
    "Maranhão",
    "Mato Grosso",
    "Mato Grosso do Sul",
    "Minas Gerais",
    "Pará",
    "Paraíba",
    "Paraná",
    "Pernambuco",
    "Piauí",
    "Rio de Janeiro",
    "Rio Grande do Norte",
    "Rondônia",
    "Rio Grande do Sul",
    "Roraima",
    "Santa Catarina",
    "Sergipe",
    "São Paulo",
    "Tocantins",
  ];

  const cardInputs = [
    {
      type: "number",
      placeholder: "Card number",
      value: cardNumber,
      onChange: (e) => setCardNumber(e.target.value),
      message: "Enter a valid credit card number",
      validator: cardNumberValid,
    },
    {
      type: "text",
      placeholder: "Cardholder name",
      value: cardName,
      onChange: (e) => setCardName(e.target.value),
      message: "Enter a valid name",
      validator: cardNameValid,
    },
    {
      type: "text",
      placeholder: "Expiration date (MM / YY)",
      value: cardDate,
      onChange: (e) => setCardDate(e.target.value),
      message: "Enter a valid date",
      validator: cardDateValid,
    },
    {
      type: "number",
      placeholder: "Security code",
      value: cardCode,
      onChange: (e) => setCardCode(e.target.value),
      message: "Enter a valid security code",
      validator: cardCodeValid,
    },
  ];

  const userInfo = [
    {
      firstName: firstName,
      lastName: lastName,
      email: email,
      address: address,
      city: city,
      country: country,
      state: state,
      postCode: postCode,
    },
  ];

  return (
    <RegistrationContext.Provider
      value={{
        inputs,
        passwordCondition,
        addressInputs,
        states,
        sendRegistration,
        state,
        setState,
        country,
        setCountry,
        sendAddress,
        stateValid,
        countryValid,
        userInfo,
        cardInputs,
        sendPayment,
      }}
    >
      {children}
    </RegistrationContext.Provider>
  );
};

export default RegistrationProvider;
