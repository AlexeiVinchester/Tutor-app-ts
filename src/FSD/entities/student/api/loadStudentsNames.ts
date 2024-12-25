import { HTTPMethods } from "../../../shared/api/httpMethods.enum";
import { makeApiRequest } from "../../../shared/api/makeApiRequest";
import { TLoaderData } from "../../../shared/types/loaderData.type";
import { studentsEndPoints } from "./endPoints";

export const loadStudentsNames: TLoaderData<string[]> = async () => {
    const studentsNames: string[] = await makeApiRequest(studentsEndPoints.getNames, HTTPMethods.GET);
    return studentsNames;
};

