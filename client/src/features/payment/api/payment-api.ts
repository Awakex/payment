import { api } from "../../../shared/api/axios";

export const PaymentAPI = {
  pay: (data: any) => {
    return api.post("api", data);
  },
  check: (pid: string) => {
    return api.get(`pay/check/${pid}`);
  },
};
