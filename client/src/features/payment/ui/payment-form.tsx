import React from "react";
import { z } from "zod";

const formSchema = z.object({});

export const PaymentForm = () => {
  return (
    <section className="w-[352px]">
      <div className="flex flex-col items-center justify-center">
        <div className="w-full">
          <h1 className="text-[22px] text-center">Оплата банковской картой</h1>
          <form className="mt-9 px-[50px]">
            <div className="mb-4">
              <label htmlFor="pan" className="label">
                Номер карты
              </label>
              <input
                type="text"
                id="pan"
                className="input"
                placeholder="0000 0000 0000 0000"
              />
            </div>

            <div className="mb-4 flex justify-between">
              <div className="max-w-[80px]">
                <label htmlFor="age" className="label">
                  Месяц/Год
                </label>
                <input
                  type="text"
                  id="age"
                  className="input"
                  placeholder="00/00"
                />
              </div>

              <div className="max-w-[80px]">
                <label htmlFor="cvc" className="label">
                  Код
                </label>
                <input
                  type="password"
                  id="cvc"
                  className="input text-center"
                  maxLength={3}
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="cardholder" className="label">
                Владелец карты
              </label>
              <input
                type="text"
                id="cardholder"
                className="input"
                placeholder="IVAN IVANOV"
              />
            </div>

            <div className="flex justify-center mt-[33px]">
              <button
                type="submit"
                className="btn btn-primary w-full text-[22px] h-[42px]"
              >
                Оплатить
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
