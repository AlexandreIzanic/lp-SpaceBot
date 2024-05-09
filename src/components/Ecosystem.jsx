import { Backpack, Building2, Store } from "lucide-react";
import React, { useState } from "react";

const Ecosystem = () => {
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };

  return (
    <section className="flex flex-col gap-5">
      <div>
        <h2 className="font-bold text-5xl text-white text-center">
          Un écosystème complet
        </h2>
        <p className="text-center">Devenez qui voulez</p>
      </div>

      <div className="flex gap-2 justify-center">
        <button
          className={` rounded-xl p-3   ${
            activeButton === 1 ? "bg-purple-700" : "bg-purple-500"
          }`}
          onClick={() => handleButtonClick(1)}
        >
          {activeButton === 1 ? (
            <Store />
          ) : (
            <Store className="text-gray-400 hover:text-white" />
          )}
        </button>
        <button
          className={` rounded-xl p-3 ${
            activeButton === 2 ? "bg-purple-700" : "bg-purple-500"
          }`}
          onClick={() => handleButtonClick(2)}
        >
          {activeButton === 2 ? (
            <Building2 />
          ) : (
            <Building2 className="text-gray-400 hover:text-white" />
          )}
        </button>
        <button
          className={` rounded-xl p-3 ${
            activeButton === 3 ? "bg-purple-700" : "bg-purple-500"
          }`}
          onClick={() => handleButtonClick(3)}
        >
          {activeButton === 3 ? (
            <Backpack />
          ) : (
            <Backpack className="text-gray-400 hover:text-white" />
          )}
        </button>
      </div>

      {activeButton === 1 && (
        <Card title="Boutique" description="Devenez qui vous voulez" />
      )}
      {activeButton === 2 && (
        <Card title="Entreprises" description="Description for Card 2" />
      )}
      {activeButton === 3 && (
        <Card title="Inventaire" description="Description for Card 3" />
      )}
    </section>
  );
};

const Card = ({ title, description }) => {
  return (
    <div className="flex justify-center">
      <div className="bg-[#17183F] hover:bg-[#31337f] min-w-80 min-h-28 rounded-lg text-white flex gap-4 px-5 py-3 w-6/12 border-left border-green-400 border-l-4">
        <div>
          <div className="font-bold">{title}</div>
          <div className="fon-medium text-gray-300">{description}</div>
          <div className="text-purple-300">@SpaceRoleplay</div>
        </div>
      </div>
    </div>
  );
};

export default Ecosystem;
