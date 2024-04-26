import React from "react";

import AnketForm from "@/components/anket/AnketForm";

function Anket() {
  return (
    <div className="space-y-4 bg-gray-100 min-h-screen pb-20">
      <div className="w-full h-12 bg-slate-500 ">
        <h1 className="text-white">Ажилд бүртгүүлэх өргөдлийн маягт</h1>
      </div>
      <AnketForm />
    </div>
  );
}

export default Anket;
