export default class ErrorWithStatus extends Error {
  constructor(message, statusCode) {
    super(message);
    this.status = statusCode;
  }
}

export class BadRequest extends ErrorWithStatus{
  constructor(message){
    super(message, 400);
  }
}

export class Unauthorized extends ErrorWithStatus{
  constructor(message){
    super(message, 401);
  }
}

export class Forbidden extends ErrorWithStatus{
  constructor(message){
    super(message, 403);
  }
}

export class NotFound extends ErrorWithStatus{
  constructor(message){
    super(message, 404);
  }
}

export class Conflict extends ErrorWithStatus{
  constructor(message){
    super(message, 409);
  }
}

export class InvalidInput extends ErrorWithStatus{
  constructor(message){
    super(message, 422);
  }   
}


