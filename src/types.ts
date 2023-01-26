export type UserType = {
  name: string;
  gender: string; 
  email: string;
  ssn: string;
  period: number;
  status: string;
  reg_date: string;
  id: number;
  exp_date: string;
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
