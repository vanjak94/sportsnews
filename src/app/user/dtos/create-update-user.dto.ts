export interface ICreateUpdateUserDto {
  id?: number
  username?: string
  name?: string;
  password?: string;
  isAdmin?: boolean;
  isActive?: boolean;
}
