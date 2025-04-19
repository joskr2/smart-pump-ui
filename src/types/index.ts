
export interface User {
  _id: string;
  guid: string;
  isActive: boolean;
  balance: string;
  picture: string;
  age: number;
  eyeColor: string;
  name: {
    first: string;
    last: string;
  };
  company: string;
  email: string;
  // password?: string; // Podría ser opcional si alguna API la devuelve
  phone: string;
  address: string;
}
