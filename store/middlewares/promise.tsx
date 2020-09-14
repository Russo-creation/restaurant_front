export default function promiseMiddleware() {
  return function (next: any) {
    return function (action: any) {
      const { promise, type, ...rest } = action;

      if (!promise || typeof promise.then !== "function") {
        return next(action);
      }

      const SUCCESS = `${type}_SUCCESS`;
      const FAILURE = `${type}_FAILURE`;
      const REQUEST = `${type}_REQUEST`;

      next({ type: REQUEST, ...rest });

      return promise
        .then((response: any) => {
          if (!response.ok) {
            throw new Error(response.status);
          } else {
            return response.json() as Promise<any>;
          }
        })
        .then((data: object) => {
          next({
            type: SUCCESS,
            payload: data,
            ...rest,
          });
        })
        .catch((error: Error) => {
          next({ type: FAILURE, error: error.message, ...rest });
        });
    };
  };
}
