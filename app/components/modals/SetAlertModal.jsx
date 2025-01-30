"use client";

import { products } from "@/app/constants";
import { useGlobalContext } from "@/app/globalContext";
import { useState } from "react";
import { GoPlus } from "react-icons/go";
import { IoClose } from "react-icons/io5";

const SetAlertModal = ({ showSetAlertModal, setShowSetAlertModal }) => {
  const { showModal, setShowModal } = useGlobalContext();

  const handleModalClose = () => {
    setShowSetAlertModal(false);
    setShowModal("Alert");
  };

  const [formData, setFormData] = useState({
    productId: "ICE",
    flow: "up",
    price: "750",
    name: "",
    date: "",
    isTriggerOnce: true,
  });

  return (
    <div
      onClick={handleModalClose}
      className={`${
        showSetAlertModal ? "visible" : "invisible"
      } fixed left-0 top-0 h-screen w-screen pt-[60px] bg-[black]/30 z-[5] flex justify-center`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`${
          showSetAlertModal ? "opacity-100" : "opacity-0"
        } bg-[#0A0A0A] duration-500 w-[480px] h-[500px] flex flex-col rounded-[8px]`}
      >
        <div className="w-full h-[56px]  flex justify-between items-center px-[16px]">
          <p className="font-[500]">Set an Alert</p>
          <button onClick={() => setShowSetAlertModal(false)}>
            <IoClose size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="h-fit px-[16px]">
            <div className="flex justify-between border-b-[0.8px] border-b-[#404040] pb-[10px]">
              <p className="w-[30%] text-[14px] font-[500] text-[#A3A3A3]">
                Condition
              </p>
              <div className="flex-1 space-y-[10px]">
                <div className="w-full h-[44px] bg-[#404040] border border-[#525252] rounded-[36px] px-[14px] flex items-center">
                  <p>{formData.productId}</p>
                  <select
                    value={formData.productId}
                    onChange={(e) =>
                      setFormData({ ...formData, productId: e.target.value })
                    }
                    className="flex-1 h-full bg-[#404040] outline-none text-[12px] text-[#A3A3A3]"
                  >
                    {products.map((product, i) => (
                      <option key={i} value={product.id}>
                        {product.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="w-full h-[44px] bg-[#404040] border border-[#525252] rounded-[36px] px-[14px] flex items-center">
                  <select
                    value={formData.flow}
                    onChange={(e) =>
                      setFormData({ ...formData, flow: e.target.value })
                    }
                    className="flex-1 h-full bg-[#404040] outline-none"
                  >
                    <option value="up">Crossing up</option>
                    <option value="down">Crossing down</option>
                  </select>
                </div>
                <div className="w-full flex gap-[10px] justify-between items-center">
                  <p className="text-[14px] text-[#A3A3A3]">Price:</p>
                  <input
                    value={formData.price}
                    onChange={(e) =>
                      setFormData({ ...formData, price: e.target.value })
                    }
                    className="flex-1 h-[44px] bg-[#404040] border border-[#525252] rounded-[36px] px-[14px] outline-none"
                    type="number"
                  />
                </div>
              </div>
            </div>

            <div className="border-b-[0.8px] border-b-[#404040] py-[10px]">
              <div className="flex justify-between">
                <p className="w-[30%] text-[14px] font-[500] text-[#A3A3A3]">
                  Trigger
                </p>
                <div className="flex-1 space-y-[10px]">
                  <div className="px-[2px] h-[40px] py-[2px] border border-[#404040] rounded-[10px] flex justify-between items-center">
                    <button
                      onClick={() =>
                        setFormData({ ...formData, isTriggerOnce: true })
                      }
                      className={`${
                        formData.isTriggerOnce ? "bg-[#525252]" : ""
                      } w-[50%] h-[33px] rounded-[8px] text-[14px] font-[500] duration-300`}
                    >
                      Only once
                    </button>
                    <button
                      onClick={() =>
                        setFormData({ ...formData, isTriggerOnce: false })
                      }
                      className={`${
                        !formData.isTriggerOnce ? "bg-[#525252]" : ""
                      } w-[50%] h-[33px] rounded-[8px] text-[14px] font-[500] duration-300`}
                    >
                      Every time
                    </button>
                  </div>
                  <p className="text-[14px] text-[#A3A3A3]">
                    {formData.isTriggerOnce
                      ? "The alert will only trigger once and will not be repeated"
                      : "The alert will trigger every time the condition is met, but not more than 1 time per minute"}
                  </p>
                </div>
              </div>
              <div className="mt-[10px] flex justify-between">
                <p className="w-[30%] text-[14px] font-[500] text-[#A3A3A3]">
                  Expiration
                </p>
                <div className="flex-1 space-y-[10px]">
                  <p>Ime</p>
                </div>
              </div>
            </div>

            <div className="flex justify-between border-b-[0.8px] border-b-[#404040] py-[10px]">
              <p className="w-[30%] text-[14px] font-[500] text-[#A3A3A3]">
                Alert name
              </p>
              <div className="flex-1 space-y-[10px]">
                <input
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full h-[44px] bg-[#404040] border border-[#525252] rounded-[36px] px-[14px] outline-none"
                  type="text"
                  placeholder="Name your alert"
                />
                <p className="w-full min-h-[100px] bg-[#404040] border border-[#525252] rounded-[16px] px-[14px] py-[10px]">
                  {formData.productId}{" "}
                  {formData.flow == "up" ? "crossing" : "crossing down"}{" "}
                  {formData.price}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-auto w-full h-[84px] border-t-[0.8px] border-t-[#404040] flex justify-center items-center gap-[10px]">
          <button
            onClick={() => setShowSetAlertModal(false)}
            className="w-[45%] h-[44px] bg-[#525252] rounded-[36px] border border-[#737373] text-[14px] font-[500]"
          >
            Cancel
          </button>
          <button className="w-[45%] h-[44px] bg-[#00897B] rounded-[36px] border border-[#00897B] text-[14px] font-[500] flex items-center justify-center gap-[5px]">
            <p>Create alert</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SetAlertModal;
