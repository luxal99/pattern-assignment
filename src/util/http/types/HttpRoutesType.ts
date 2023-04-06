export type HttpRoutes = "SENATOR" | "REPRESENTATIVE";
type HttpRoutesType = {
  [name in HttpRoutes]: string;
};

export const httpRoutesConfig: HttpRoutesType = {
  SENATOR: "/senators",
  REPRESENTATIVE: "/representatives",
};
