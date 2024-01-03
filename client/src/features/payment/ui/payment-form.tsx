import React from "react";
import { useForm } from "react-hook-form";
import { formSchema, type FormSchemaType } from "../model";
import { zodResolver } from "@hookform/resolvers/zod";

type PaymentFormProps = {
  onSubmit: (values: FormSchemaType) => void;
};

export const PaymentForm = ({ onSubmit }: PaymentFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
  });

  return (
    <section className="w-[352px]">
      <div className="flex flex-col items-center justify-center">
        <div className="w-full">
          <h1 className="text-[22px] text-center">Оплата банковской картой</h1>
          <form className="mt-9 px-[50px]" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label htmlFor="pan" className="label">
                Номер карты
              </label>
              <input
                type="text"
                id="pan"
                className="input"
                placeholder="0000 0000 0000 0000"
                aria-invalid={errors.pan ? "true" : "false"}
                maxLength={19}
                {...register("pan")}
              />
            </div>

            <div className="mb-4 flex justify-between">
              <div className="max-w-[80px]">
                <label htmlFor="exprire" className="label">
                  Месяц/Год
                </label>
                <input
                  type="text"
                  id="exprire"
                  className="input"
                  placeholder="01/24"
                  aria-invalid={errors.expire ? "true" : "false"}
                  maxLength={5}
                  {...register("expire")}
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
                  placeholder="***"
                  maxLength={3}
                  aria-invalid={errors.cvc ? "true" : "false"}
                  {...register("cvc")}
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
                aria-invalid={errors.cardholder ? "true" : "false"}
                {...register("cardholder")}
              />
            </div>

            <div className="flex justify-center mt-[33px]">
              <button
                disabled={!isValid}
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
