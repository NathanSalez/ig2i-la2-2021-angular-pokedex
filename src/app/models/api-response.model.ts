export interface ApiResponse<T> {
  data: T[],
  limit: number,
  offset: number
}
