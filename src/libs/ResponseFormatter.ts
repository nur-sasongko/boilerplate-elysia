import { SuccessResAPI, ErrorResAPI } from "@/types/api";

/**
 * Creates a success response object.
 *
 * @template T - The type of the data in the response.
 * @param {T} data - The data to be included in the response.
 * @param {string} message - The message to be included in the response.
 * @param {number} code - The code to be included in the response.
 * @returns {SuccessResAPI<T>} - The success response object.
 */
export const successResponse = <T>(
  data: T,
  message: string,
  code: number
): SuccessResAPI<T> => ({
  success: true,
  data,
  message,
  code,
});


/**
 * Creates an error response object.
 *
 * @template E - The type of the error object.
 * @param {E} error - The error object.
 * @param {string} message - The error message.
 * @param {number} code - The error code.
 * @returns {ErrorResAPI<E>} - The error response object.
 */
export const errorResponse = <E>(
  error: E,
  message: string,
  code: number
): ErrorResAPI<E> => ({
  success: false,
  error,
  message,
  code,
});
