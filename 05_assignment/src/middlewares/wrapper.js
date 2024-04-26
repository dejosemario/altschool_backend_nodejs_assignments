const wrapper = (fn) => {
  return async (req, res, next) => {
    try {
      throw new Error("somehing went wrong");
    } catch (error) {
      next(error);
    }
  };
};

export default wrapper;