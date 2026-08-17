export type AuthUser = {
  username: string;
  name: string;
  role: AuthUserRole;
};

export type AuthUserRole = "superadmin" | "admin";
