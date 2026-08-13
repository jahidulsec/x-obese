import { ZodError } from "zod";

export interface ErrorStrategy {
  canHandle(error: any): boolean;
  handle(error: any): ErrorResponse;
}

export type ErrorResponse = {
  status: number;
  message: string;
  details?: unknown;
  type?: string;
};

class PrismaKnownErrorStrategy implements ErrorStrategy {
  canHandle(error: any): boolean {
    return error["name"] === "PrismaClientKnownRequestError";
  }

  handle(error: any) {
    switch (error.code) {
      case "P2002":
        return {
          status: 409,
          message:
            "Duplicate entry: a record with these fields already exists.",
        };
      case "P2003":
        return {
          status: 400,
          message:
            "Cannot delete or update because it is referenced somewhere else.",
        };
      case "P2025":
        return {
          status: 404,
          message: "Requested item does not exist.",
        };
      default:
        return {
          status: 500,
          message: "Database error occurred (unexpected code).",
        };
    }
  }
}

class PrismaClientValidationStrategy implements ErrorStrategy {
  canHandle(error: any): boolean {
    return error?.name === "PrismaClientValidationError";
  }

  handle(error: any) {
    return {
      status: 400,
      message: "Invalid data sent to the database.",
    };
  }
}

class PrismaInitStrategy implements ErrorStrategy {
  canHandle(error: any): boolean {
    return error["name"] === "PrismaClientInitializationError";
  }

  handle(error: any) {
    return {
      status: 500,
      message: "Database connection could not be initialized.",
    };
  }
}

class ZodValidationStrategy implements ErrorStrategy {
  canHandle(error: any): boolean {
    return error['name'] === "ZodError";
  }

  handle(error: any): { status: number; message: string; details?: any } {
    return {
      status: 400,
      message: "Validation Failed",
      details: (error as ZodError).issues,
    };
  }
}

class JWTInvalidStrategy implements ErrorStrategy {
  canHandle(error: any): boolean {
    return error["name"] === "JwtTokenInvalid";
  }

  handle(error: any): ErrorResponse {
    return {
      status: 401,
      message: "Invalid Token",
    };
  }
}

class JWTTokenExpiredStrategy implements ErrorStrategy {
  canHandle(error: any): boolean {
    return error["name"] === "JwtTokenExpired";
  }

  handle(error: any): ErrorResponse {
    return { status: 401, message: "Token is expired" };
  }
}

class CustomErrorStrategy implements ErrorStrategy {
  canHandle(error: any): boolean {
    return error["name"] === "CustomHttpException";
  }

  handle(error: any): ErrorResponse {
    return {
      status: error.status,
      message: error.message,
      details: error.details,
    };
  }
}

class DefaultErrorStrategy implements ErrorStrategy {
  canHandle(): boolean {
    return true; // fallback
  }

  handle(error: any) {
    const defaultMsg = "Unexpected error occurred.";
    if (error) {
      return {
        status: 500,
        message: error.message.split("\n").pop() ?? defaultMsg,
      };
    }

    return {
      status: 500,
      message: defaultMsg,
    };
  }
}

const strategies = [
  new JWTInvalidStrategy(),
  new JWTTokenExpiredStrategy(),
  new PrismaInitStrategy(),
  new PrismaKnownErrorStrategy(),
  new PrismaClientValidationStrategy(),
  new ZodValidationStrategy(),
  new CustomErrorStrategy(),
  new DefaultErrorStrategy(), // always last
];

export const handleError = (error: any): ErrorResponse => {
  console.log(error);
  const strategy = strategies.find((i) => i.canHandle(error));

  return { ...strategy!.handle(error), type: error["name"] };
};
