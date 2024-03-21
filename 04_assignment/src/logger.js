export default function logger (req, res, next) {
  console.log("Logger", {
    url: req.url,
    method: req.method,
    body: req.body,
    time: new Date(),
    query: req.query,
    params: req.params,
  });
  next();
};
