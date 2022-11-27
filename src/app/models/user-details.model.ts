export interface UserDetailsModel {
  readonly id: number;
  readonly email: string;
  readonly username: string;
  readonly password: string;
  readonly name:{
    firstname: string;
    lastname: string
  };
  readonly city: string;
  readonly street: string;
  readonly number: number;
  readonly zipcode: number;
  readonly lat: number;
  readonly long: number;
  readonly phone: number;
}
