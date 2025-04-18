export class ApiError extends Error {
  constructor(public message: string, public httpStatus: number) {
    super(message);
    this.httpStatus = httpStatus;
  }
}
