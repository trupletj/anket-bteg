import React from "react";

import AnketForm from "@/components/anket/AnketForm";

function Anket() {
  return (
    <div className="space-y-4 bg-gray-100 min-h-screen pb-20 max-w-[900px] mx-auto">
      <div className="w-full py-10 bg-primary ">
        <h1 className="text-white text-xl text-center">
          Ажилд бүртгүүлэх өргөдлийн маягт
        </h1>
      </div>
      <AnketForm />
    </div>
  );
}

export default Anket;
