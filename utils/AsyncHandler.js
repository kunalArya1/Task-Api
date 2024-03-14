export const AsynHandler = (func) => {
  return async function (req, res, next) {
    try {
      await func(req, res, next);
    } catch (err) {
      next(err);
    }
  };
};
