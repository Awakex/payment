import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PaymentAPI } from "./api/payment-api";
import { OkIcon } from "../../shared/icons/ok";
import { FailIcon } from "../../shared/icons/fail";

export const PaymentCheck = () => {
  const { pid } = useParams();
  const [paymentStatus, setPaymentStatus] = useState(null);

  const handlePaymentCheck = () => {
    if (pid) {
      PaymentAPI.check(pid).then((response) => {
        setPaymentStatus(response.data.status);
      });
    }
  };

  useEffect(() => {
    handlePaymentCheck();
  }, [pid]);

  useEffect(() => {
    let interval: any = "";
    if (paymentStatus === "process") {
      interval = setInterval(() => {
        handlePaymentCheck();
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [paymentStatus]);

  if (!paymentStatus) {
    return <p className="text-[22px]">Ошибка получения статуса</p>;
  }

  return (
    <div>
      {paymentStatus === "process" && <p className="text-[22px]">Оплата...</p>}
      {paymentStatus === "ok" && (
        <div className="flex flex-col justify-center items-center">
          <p className="mb-[41px] text-[22px]">Оплата прошла успешно</p>
          <OkIcon />
        </div>
      )}
      {paymentStatus === "fail" && (
        <div className="flex flex-col justify-center items-center">
          <p className="mb-[41px] text-[22px]">Произошла ошибка</p>
          <FailIcon />
        </div>
      )}
    </div>
  );
};
