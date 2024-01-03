import React from "react";
import { PaymentForm } from "./ui/payment-form";
import { FormSchemaType } from "./model";
import { PaymentAPI } from "./api/payment-api";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

export const Payment = () => {
  const navigate = useNavigate();

  const handleSubmit = (values: FormSchemaType) => {
    const payValues = {
      jsonrpc: "2.0",
      id: uuidv4(),
      method: "pay",
      params: {
        ...values,
      },
    };

    PaymentAPI.pay(payValues).then((response) => {
      const pid = response.data.result?.pid;
      if (pid) {
        navigate(`/check/${pid}`);
      }
    });
  };

  return <PaymentForm onSubmit={handleSubmit} />;
};
