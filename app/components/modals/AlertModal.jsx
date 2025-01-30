"use client";

import { useGlobalContext } from "@/app/context/GlobalContext";
import { useState } from "react";
import { GoPlus, GoDotFill, GoPlay } from "react-icons/go";
import { LuPenLine, LuTrash } from "react-icons/lu";
import SetAlertModal from "./SetAlertModal";

const AlertModal = () => {
  const { showModal, setShowModal } = useGlobalContext();

  const [onAlerts, setOnAlerts] = useState(true);
  const [alerts, setAlerts] = useState([
    {
      product: "PMS",
      price: 714.45,
      flow: "up",
      name: "PMS crossing 714.45",
      time: "Feb 14, 17:58",
      isActive: true,
    },
    {
      product: "PMS",
      price: 714.45,
      flow: "up",
      name: "PMS crossing 714.45",
      time: "Feb 14, 18:32",
      isActive: false,
    },
  ]);
  const [logs, setLogs] = useState([
    {
      product: "PMS",
      price: 714.45,
      flow: "up",
      name: "PMS crossing 714.45",
      time: "Feb 14, 17:58",
    },
  ]);
  const [showSetAlertModal, setShowSetAlertModal] = useState(false);

  return (
    <div
      onClick={() => setShowModal("")}
      className={`${
        showModal == "Alert" ? "visible" : "invisible"
      } fixed left-0 top-0 h-screen w-screen pt-[60px] bg-[black]/30 z-[5] flex justify-center`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`${
          showModal == "Alert" ? "opacity-100" : "opacity-0"
        } bg-[#0A0A0A] duration-500 w-[480px] h-[500px] flex flex-col rounded-[8px]`}
      >
        <div className="w-full h-[56px] border-b border-b-[#404040] flex justify-between items-center px-[16px]">
          <p className="font-[500]">Alerts</p>
          <button onClick={() => setShowSetAlertModal(true)}>
            <GoPlus size={20} />
          </button>
        </div>

        <div className="px-[16px] py-[10px] border-b border-b-[#404040]">
          <div className="w-full h-[40px] border border-[#404040] rounded-[10px] flex p-[2px]">
            <button
              onClick={() => setOnAlerts(true)}
              style={{ transition: "all 0.3s ease-out" }}
              className={`${
                onAlerts ? "bg-[#525252] text-white" : "text-[#A3A3A3]"
              } w-[50%] hover:bg-[#525252] text-[14px] font-[500 rounded-[8px]`}
            >
              Alert
            </button>
            <button
              onClick={() => setOnAlerts(false)}
              style={{ transition: "all 0.3s ease-out" }}
              className={`${
                !onAlerts ? "bg-[#525252] text-white" : "text-[#A3A3A3]"
              } w-[50%] hover:bg-[#525252] text-[14px] font-[500] rounded-[8px]`}
            >
              Logs
            </button>
          </div>
        </div>

        <div>
          {onAlerts
            ? alerts.map((alert, i) => (
                <div
                  key={i}
                  className="px-[16px] py-[10px] border-b-[0.5px] border-b-[#404040] group hover:bg-[#404040] duration-300 "
                >
                  <div className="flex justify-between items-center">
                    <p className="text-[14px] font-[500]">{alert.name}</p>

                    <span className="opacity-0 group-hover:opacity-100 duration-300 flex cursor-pointer items-center gap-[5px] text-[14px] text-[#A3A3A3]">
                      <GoPlay />
                      <LuPenLine />
                      <LuTrash />
                    </span>
                  </div>
                  <div className="flex items-center gap-[5px]">
                    <p className="text-[14px]">
                      {alert.isActive ? (
                        <span className="text-[#12B76A]">Active</span>
                      ) : (
                        <span className="text-[#F79009]">
                          Stopped - Triggered
                        </span>
                      )}
                    </p>
                    <GoDotFill size={8} />
                    <p className="text-[14px] text-[#A3A3A3]">{alert.time}</p>
                  </div>
                </div>
              ))
            : logs.map((log, i) => (
                <div
                  key={i}
                  className="px-[16px] py-[10px] border-b-[0.5px] border-b-[#404040] hover:bg-[#404040] duration-300 "
                >
                  <p className="text-[14px] font-[500]">{log.name}</p>
                  <div className="flex items-center gap-[5px]">
                    <p className="text-[14px] text-[#A3A3A3]">{log.product}</p>
                    <GoDotFill size={8} />
                    <p className="text-[14px] text-[#A3A3A3]">{log.time}</p>
                  </div>
                </div>
              ))}
        </div>
      </div>

      <SetAlertModal
        showSetAlertModal={showSetAlertModal}
        setShowSetAlertModal={setShowSetAlertModal}
      />
    </div>
  );
};

export default AlertModal;
