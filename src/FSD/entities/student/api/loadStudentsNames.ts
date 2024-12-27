import { ILesson } from '../../../../share/interfaces/lesson.interface';
import { HTTPMethods } from '../../../shared/api/httpMethods.enum';
import { makeApiRequest } from '../../../shared/api/makeApiRequest';
import { TLoaderData } from '../../../shared/types/loaderData.type';
import { studentsEndPoints } from './endPoints';

export const loadStudentsNames: TLoaderData<string[]> = async () => {
  const studentsNames: string[] = await makeApiRequest(
    studentsEndPoints.getNames,
    HTTPMethods.GET
  );
  return studentsNames;
};

export const sendNewLesson: TLoaderData<ILesson, ILesson> = async (data) => {
  const respone: ILesson = await makeApiRequest(
    'http://localhost:3002/addLesson',
    HTTPMethods.POST,
    data
  );
  return respone;
};
