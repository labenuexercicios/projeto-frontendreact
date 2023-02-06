import cover from "../../img/cover.png";
import { FiSearch } from "react-icons/fi";
import { BsTruck } from "react-icons/bs";
import { BsCreditCard2Back } from "react-icons/bs";
import { AiOutlineTag } from "react-icons/ai";

const TopSection = () => {
  const Cards = ({ icon, title, description }) => {
    return (
      <div className="py-5 flex flex-col items-center gap-1">
        <div className="lg:flex lg:flex-row lg:gap-2 flex flex-col items-center">
          {icon}
          <p className="uppercase font-bold">{title}</p>
        </div>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    );
  };

  const cardList = [
    {
      icon: <BsTruck className="text-2xl" />,
      title: "Free shipping",
      description: "For purchases over $100.00",
    },
    {
      icon: <BsCreditCard2Back className="text-2xl" />,
      title: "Up to 12x interest-free",
      description: "With all credit cards",
    },
    {
      icon: <AiOutlineTag className="text-2xl" />,
      title: "Sales",
      description: "Every day you can access the best deals",
    },
  ];

  return (
    <div className="flex flex-col items-center w-full">
      <img className=" h-auto w-full " src={cover} />
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-32 lg:pt-8">
        {cardList.map((card, index) => (
          <Cards
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default TopSection;
