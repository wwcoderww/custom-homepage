import { BackEndResponseType } from '@/lib/types';

export default async function tryBackend(
  fetchFunction: Promise<Response>
): Promise<BackEndResponseType> {
  try {
    const res = await fetchFunction;
    // Response
    const responseText = await res.text();
    if (!res.ok) {
      try {
        const errorJson = JSON.parse(responseText);
        return errorJson;
      } catch {
        return {
          success: false,
          errors: responseText || `Error: ${res.status}`,
        };
      }
    }
    return { success: true };
  } catch (error) {
    return { success: false, errors: error };
  }
}
