import { AxiosResponse } from "axios";
import { getRequest } from "../axios-client/axios-client";
import { HttpRoutes, httpRoutesConfig } from "../types/HttpRoutesType";
import { DefaultResponse } from "../../../models/DefaultResponse";

export class AxiosAbstract<T> {
  private _httpRoute;

  constructor(private httpRouteC: HttpRoutes) {
    this._httpRoute = httpRoutesConfig[httpRouteC];
  }

  get(pathParams: string): Promise<AxiosResponse<DefaultResponse<T>>> {
    return getRequest(`${this._httpRoute}/${pathParams}`);
  }

  get httpRoute() {
    return this._httpRoute;
  }
}
