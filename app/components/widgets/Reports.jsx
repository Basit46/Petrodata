import Image from "next/image";
import React from "react";

const Reports = () => {
  const reports = [
    {
      title: "PMS - Aug 12-17",
      file: "",
    },
    {
      title: "DPK - Aug 12-17",
      file: "",
    },
    {
      title: "AGO - Aug 12-17",
      file: "",
    },
    {
      title: "ICE - Aug 12-17",
      file: "",
    },
  ];

  return (
    <div className="w-full md:w-[266px] h-[290px] bg-[#171717] rounded-[24px] p-[16px]">
      <div className="flex items-center gap-[5px]">
        <div className="relative size-[32px]">
          <Image src="/reportIcon.png" alt="report" fill />
        </div>
        <p className="text-[12px] font-[500]">Reports - week 31</p>
      </div>
      <div className="mt-[20px] flex flex-wrap justify-center gap-y-[20px]">
        {reports.map((report, i) => (
          <div className="w-[50%] flex flex-col items-center gap-[6px]">
            <div key={i} className="relative w-[48px] h-[63px]">
              <Image src="/fileImg.png" fill alt="file" />
            </div>
            <p className="text-[12px] text-[#C2C2C2]">{report.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reports;
