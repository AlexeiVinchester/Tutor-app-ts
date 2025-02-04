import { ILesson } from '../../../../share/interfaces/lesson.interface';
import { HTTPMethods } from '../../../shared/types/httpMethods.enum';
import { makeApiRequest } from '../../../shared/api/makeApiRequest';
import { TLoaderData } from '../../../shared/types/loaderData.type';
import { studentsEndPoints } from './endPoints';

export type TCreateNewLessonFormServerAnswer = {
  names: string[];
  nextId: number;
}

export const loadStudentsNamesAndNextId: TLoaderData<TCreateNewLessonFormServerAnswer> = async () => {
  const response: TCreateNewLessonFormServerAnswer = await makeApiRequest(
    'http://localhost:3002/getNamesAndNextId',
    HTTPMethods.GET
  );
  return response;
}

export const loadStudentsNames: TLoaderData<string[]> = async () => {
  const studentsNames: string[] = await makeApiRequest(
    studentsEndPoints.getNames,
    HTTPMethods.GET
  );
  return studentsNames;
};

export type TServerAnswerAddLesson = {
  savedLesson: ILesson;
  nextId: number
}

export const sendNewLesson: TLoaderData<TServerAnswerAddLesson, ILesson> = async (data) => {
  const response: TServerAnswerAddLesson = await makeApiRequest(
    'http://localhost:3002/addLesson',
    HTTPMethods.POST,
    data
  );
  return response;
};
