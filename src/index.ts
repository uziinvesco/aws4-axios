import { aws4Interceptor } from "./interceptor";
import { getAuthErrorMessage } from "./getAuthErrorMessage";

/**
 * @deprecated Please use the alternative export of `aws4Interceptor`
 */
export const interceptor = aws4Interceptor;

export default aws4Interceptor;

export { getAuthErrorMessage, aws4Interceptor };
