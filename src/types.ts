export type UserType = {
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  ssn: string;
  period: number;
  status: string;
  regDate?: string;
  id?: number;
  membershipStart?: string;
  membershipEnd?: string;
  afmember?: string;
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
