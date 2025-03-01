const DEFAULT_TIMEOUT = 15 * 1000;

/**
 * Set timeout for HTTP request or any promise
 * @param promise Promise that will be set with timeout
 * @param timeout Time in millisecond
 */
export const requestWithTimeOut = (promise: Promise<any>, timeout?: number) => {
  const _timeout = timeout || DEFAULT_TIMEOUT;
  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => reject(new Error('Request timeout')), _timeout);
  });

  return Promise.race([timeoutPromise, promise]);
};
