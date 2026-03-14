import { topLeadersEndPoints } from "./endPoints";
import { TTopLeadersMode, TTopLeadersAmount, TTopLeader } from "../model/TopLeader.type";
import { makeApiRequest } from "../../../shared/api/makeApiRequest";
import { HTTPMethods } from "../../../shared/types/httpMethods.enum";
import { TLoaderData } from "../../../shared/types/loaderData.type";

type TLoadTopLeadersRequestDate = {
  mode?: TTopLeadersMode;
  amount?: TTopLeadersAmount;
};

type TLoadTopLeadersResponseData = TTopLeader[];

const loadTopLeaders: TLoaderData<TLoadTopLeadersResponseData, TLoadTopLeadersRequestDate> = async (requestData = {}) => {
  const { mode = "amount", amount = 5 } = requestData;

  const response = await makeApiRequest<void, TLoadTopLeadersResponseData>({
    url: `${topLeadersEndPoints.loadTopLeaders}?mode=${mode}&amount=${amount}`,
    method: HTTPMethods.GET
  });

  return response;
};

export { loadTopLeaders };