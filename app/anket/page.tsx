import React from "react";

import AnketForm from "@/components/anket/AnketForm";

function Anket() {
  return (
    <div className="space-y-4 bg-gray-100 min-h-screen">
      <div className="w-full h-40 bg-orange-500 ">
        <h1 className="text-white">Ажил бүртгүүлэх өргөдлийн маягт</h1>
      </div>
      <AnketForm />
    </div>
  );
}

export default Anket;
