/**
 * Represents a successful API response.
 * @template T - The type of the data in the response.
 */
export type SuccessResAPI<T> = {
  success: true;
  data: T;
  message?: string;
  code: number;
};

/**
 * Represents an error API response.
 * @template E - The type of the error object.
 */
export type ErrorResAPI<E> = {
  success: false;
  error: E;
  message?: string;
  code: number;
};
