import { errorResponse, successResponse } from "@/libs/ResponseFormatter";

/**
 * Check Health
 */
export const checkHealth = async () => {
  try {
    return successResponse("Server is running", "Server is running", 200);
  } catch (e: unknown) {
    console.error(`Error checking health: ${e}`);
    return errorResponse(e, "Error checking health", 500);
  }
}
