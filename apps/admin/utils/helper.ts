import { boolean } from "zod";

export const convertIntoFormData = (data: Record<string, any>): FormData => {
  const formData = new FormData();

  const appendValue = (key: string, value: any) => {
    if (value === undefined || value === null) {
      return;
    }

    // File / Blob
    if (value instanceof File || value instanceof Blob) {
      formData.append(key, value);
      return;
    }

    // Date
    if (value instanceof Date) {
      formData.append(key, value.toISOString());
      return;
    }

    // Array
    if (Array.isArray(value)) {
      value.forEach((item) => {
        appendValue(`${key}[]`, item);
      });
      return;
    }

    // Object
    if (typeof value === "object") {
      Object.entries(value).forEach(([nestedKey, nestedValue]) => {
        appendValue(`${key}[${nestedKey}]`, nestedValue);
      });
      return;
    }

    // String, number, boolean, bigint
    formData.append(key, String(value));
  };

  Object.entries(data).forEach(([key, value]) => {
    appendValue(key, value);
  });

  return formData;
};

export const generateCleanQueryParams = (validatedParams: any) => {
  const searchParams = new URLSearchParams();

  Object.entries(validatedParams).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      searchParams.append(key, String(value));
    }
  });

  return searchParams;
};

export const getSerializeData = (data: any): any => {
  if (data === null || data === undefined) return data;

  // Handle Decimal
  if (Object.prototype.toString.call(data).slice(8, -1) === "Decimal") {
    return Number(data); // safest
  }

  // Handle Decimal
  if (typeof data == "bigint") {
    return Number(data); // safest
  }

  // Handle Date
  if (data instanceof Date) {
    return data;
  }

  // Handle Array
  if (Array.isArray(data)) {
    return data.map(getSerializeData);
  }

  // Handle Object
  if (typeof data === "object") {
    return Object.fromEntries(
      Object.entries(data).map(([key, value]) => [
        key,
        getSerializeData(value),
      ]),
    );
  }

  // string, number, boolean
  return data;
};
