export type UserType = {
  name: string;
  email: string;
  ssn: string;
  period: number;
  status: string;
  regDate: string;
  id: number;
};

export type CheckoutSession = {
  cancel_url?: string;
  client?: string;
  mode?: string;
  price?: string;
  sessionId?: string;
  success_url?: string;
  url?: string;
};
