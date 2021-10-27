export interface PandaData {
  profile:   Profile;
  addresses: AddressElement[];
  orders:    Order[];
  chats:     Chat[];
  emails:    Email[];
}

export interface AddressElement {
  address:               string;
  country_code:          string;
  city:                  string;
  postcode:              string;
  delivery_instructions: string;
  latitude:              number;
  longitude:             number;
  created_at:            Date;
  updated_at:            Date;
}

export interface Chat {
  id:           string;
  timestamp:    string;
  country_name: string;
  city:         string;
  history:      History[];
}

export interface History {
  name:      string;
  timestamp: string;
  msg:       string;
}

export interface Email {
  timestamp: string;
  subject:   string;
  content:   string;
}

export interface Order {
  address:               string;
  delivery_instructions: string;
  country:               string;
  restaurant_name:       string;
  type:                  string;
  cart:                  Cart;
  created_at:            Date;
}

export interface Cart {
  items:        Item[];
  vouchers:     Voucher[] | null;
  delivery_fee: number;
  total:        number;
}

export interface Item {
  name:             string;
  quantity:         number;
  price:            number;
  toppings_price:   number;
  total_price:      number;
  toppings:         Topping[];
  special_requests: string;
}

export interface Topping {
  name:  string;
  price: number;
}

export interface Voucher {
  name:     string;
  discount: string;
}

export interface Profile {
  first_name:  string;
  last_name:   string;
  email:       string;
  phone:       string;
  phone_valid: boolean;
  created_at:  Date;
}

export interface Restaurant {
  name: string;
  total: number;
  orders: Order[];
}
