type ErrorType =
  | "BAD_REQUEST"
  | "UNAUTHORIZED"
  | "FORBIDDEN"
  | "NOT_FOUND"
  | "CONFLICT"
  | "INTERNAL";

export class HttpException extends Error {
  public status: number;
  public details?: any;

  constructor(status: number, message: string, details?: any) {
    super(message);
    this.name = "CustomHttpException";
    this.details = details;
    this.status = status;
  }
}

export class ErrorFactory {
  static create(type: ErrorType, message?: string, details?: any) {
    switch (type) {
      case "BAD_REQUEST":
        return new HttpException(400, message || "Bad Request", details);

      case "FORBIDDEN":
        return new HttpException(403, message || "Forbidden", details);

      case "CONFLICT":
        return new HttpException(409, message || "Confict", details);

      case "NOT_FOUND":
        return new HttpException(404, message || "Not Found", details);

      case "UNAUTHORIZED":
        return new HttpException(401, message || "Unauthorized", details);

      case "INTERNAL":
      default:
        return new HttpException(
          500,
          message || "Internal Server Error",
          details,
        );
    }
  }
}
