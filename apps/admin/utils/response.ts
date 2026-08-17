import { handleError } from "./error";
import { logger } from "./logger";

export interface Pagination {
  total_count: number;
  total_page: number;
  page_size: number;
  current_page: number;
  has_next: boolean;
  has_prev: boolean;
}

class Response {
  constructor() {}

  success = <T>({
    message,
    data,
    pagination,
  }: {
    message: string;
    data?: T | null;
    pagination?: Pagination;
  }) => {
    return {
      success: true,
      message,
      data,
      pagination,
    };
  };

  error = (error: any) => {
    console.error(error);

    return {
      success: false,
      message: error.message,
      details: error.details,
      data: undefined,
      pagination: undefined,
    };
  };
}

const apiResponse = new Response();

export const response = <T>({
  success,
  message,
  data,
}: {
  success: boolean;
  message: string;
  data?: T;
}) => {
  return {
    success: success,
    message: message,
    data: data,
  };
};

const multi = <T>({
  message,
  data,
  count,
}: {
  message?: string;
  data: T[];
  count: number;
}) => {
  return {
    success: true,
    message: message ?? "Success",
    data,
    count,
  };
};

const single = <T>({ message, data }: { message: string; data: T }) => {
  return {
    success: true,
    message,
    data,
  };
};

const error = ({ error }: { error: unknown }) => {
  logger.error({
    message: "Error in error handler",
    error,
  });

  const err = handleError(error);

  return {
    success: false,
    message: err.message ?? "Something went wrong",
    data: null,
    count: 0,
  };
};

const serverResponse = {
  single,
  multi,
  error,
};

export { apiResponse, serverResponse };
