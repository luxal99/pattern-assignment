import { AxiosAbstract } from "../axios-abstract/AxiosAbstract";
import { Senator } from "../../../models/Senator";

export class SenatorsHttp extends AxiosAbstract<Senator> {
  constructor() {
    super("SENATOR");
  }
}
