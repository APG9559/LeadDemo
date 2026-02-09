/* eslint-disable prettier/prettier */
export class RegisterDto {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  role: string; // 'admin', 'manager', 'sales_rep'
}
