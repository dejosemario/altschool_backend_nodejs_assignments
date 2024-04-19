export class ErrorWithStatus extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}

// export class BadRequest extends ErrorWithStatus {
//   constructor(message) {
//     super(message, 400);
//   }
// }

// export class Unauthorized extends ErrorWithStatus {
//   constructor(message) {
//     super(message, 401);
//   }
// }

// export class Forbidden extends ErrorWithStatus {
//   constructor(message) {
//     super(message, 403);
//   }
// }

// export class NotFound extends ErrorWithStatus {
//   constructor(message) {
//     super(message, 404);
//   }
// }

// export class Conflict extends ErrorWithStatus {
//   constructor(message) {
//     super(message, 409);
//   }
// }

// export class InvalidInput extends ErrorWithStatus {
//   constructor(message) {
//     super(message, 422);
//   }
// }

export const errorHandler = (err, req, res, next) => {
  const status = err.status || 500;
  const success = err.success || false;
  const message = err.message || "Something went wrong";

  const cleanMessage = message.replace(/"/g, '');
  res.status(status).json({ success, message: cleanMessage });
};
