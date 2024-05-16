type Role = undefined | "accountant" | "artist" | "ceo";
type Sex = undefined | "male" | "female";
type City = undefined | "washington" | "new-york" | "chicago";

type UserType = {
  id: number;
  name: string;
  role: Role;
  sex: Sex;
  city: City;
};

type FilterUserType = { role: Role; sex: Sex; city: City };

type UserFilterConfig = {
  label: string;
  key: keyof UserType;
  options: string[];
}[];

export type { UserType, FilterUserType, Role, Sex, City, UserFilterConfig };
