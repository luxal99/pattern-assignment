import { AxiosAbstract } from "../axios-abstract/AxiosAbstract";
import { Representative } from "../../../models/Representative";

export class RepresentativesHttp extends AxiosAbstract<Representative> {
  constructor() {
    super("REPRESENTATIVE");
  }
}
