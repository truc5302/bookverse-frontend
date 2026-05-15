export interface ApiResult<T> {
  succeeded: boolean;
  message: string;
  data: T;
  errors: string[];
}