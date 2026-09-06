import { Hono } from "hono";
import { getHolidays } from "./controllers/get-holidays.tsx";

const calendarRouter = new Hono()

calendarRouter.route('/holidays', getHolidays)

export { calendarRouter }