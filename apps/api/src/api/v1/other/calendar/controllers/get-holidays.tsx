import { calendarQuerySchema } from "@repo/validator";
import { Hono } from "hono";
import ical from "node-ical";
import { validator } from "hono/validator";
import { apiResponse } from "../../../../../libs/response.ts";

const getHolidays = new Hono();

getHolidays.get('/', validator('query', (value) => {
    const parsed = calendarQuerySchema.parse(value);
    return parsed;
}), async(c) => {
    const validatedParams = c.req.valid('query');

    const url =
      "https://calendar.google.com/calendar/ical/en.bd%23holiday@group.v.calendar.google.com/public/basic.ics";

    const events = await ical.async.fromURL(url);

    let holidays = Object.values(events)
      .filter((e: any) => e.type === "VEVENT")
      .map((e: any) => {
        const dateObj = new Date(e.start);

        return {
          date: dateObj.toISOString().split("T")[0],
          year: dateObj.getFullYear(),
          month: dateObj.getMonth() + 1, // 1-12
          name: e.summary,
        };
      });

    // Filter by year
    if (validatedParams.year) {
      holidays = holidays.filter(
        (h) => h.year === Number(validatedParams.year),
      );
    }

    // Filter by month
    if (validatedParams.month) {
      holidays = holidays.filter(
        (h) => h.month === Number(validatedParams.month),
      );
    }

    // Sort by date
    holidays.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
    );

    const res = ({
      message:
        "Get Govt holidays of Bangladesh successful. This Calender is provided upto current year holidays data",
      data: holidays,
    });

    return c.json(apiResponse.single(res))
})

export { getHolidays }