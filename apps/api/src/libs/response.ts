import { handleError } from "./error.ts"

export const response = <T>({ success, message, data }: { success: boolean, message: string, data?: T }) => {
    return {
        success: success, message: message, data: data
    }
}

const multi = <T>({ message, data, count, size }: { message?: string, data: T[], count: number, size: number }) => {
    return {
        success: true, message, data, pagination: pagination(count, size)
    }
}

const single = <T>({ message, data }: { message?: string, data: T }) => {
    return {
        success: true, message, data
    }
}

const error = ({ error }: { error: unknown }) => {
    const err = handleError(error)

    return {
        success: false, message: err.message, data: null, count: 0
    }
}

export const pagination = (count: number, size: number, page: number = 1) => {
    const safeSize = size > 0 ? size : 1;
    const totalPage = Math.ceil(count / safeSize);

    return {
        total_count: count,
        total_page: totalPage,
        page_size: safeSize,
        current_page: page,
        has_next: page < totalPage,
        has_prev: page > 1,
    };
};

export const apiResponse = {
    single, multi, error
}



