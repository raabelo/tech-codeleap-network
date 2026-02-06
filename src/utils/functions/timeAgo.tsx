import { TranslateFn } from "@/hooks/useLang";

type TimeUnit = "seconds" | "minutes" | "hours" | "days" | "weeks" | "months" | "years";

const SECOND = 1;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;
const WEEK = 7 * DAY;
const MONTH = 30 * DAY;
const YEAR = 365 * DAY;

const UNITS: readonly [TimeUnit, number][] = [
    ["years", YEAR],
    ["months", MONTH],
    ["weeks", WEEK],
    ["days", DAY],
    ["hours", HOUR],
    ["minutes", MINUTE],
    ["seconds", SECOND],
];

export function timeAgo(date: Date | string, t: TranslateFn): string {
    const diffInSeconds = (Date.now() - new Date(date).getTime()) / 1000;

    for (const [unit, seconds] of UNITS) {
        if (diffInSeconds >= seconds) {
            const amount = Math.floor(diffInSeconds / seconds);

            const unitText =
                amount === 1
                    ? t(`codeleap.common.timeAgo.time.${unit}.singular`)
                    : t(`codeleap.common.timeAgo.time.${unit}.plural`);

            return `${amount} ${unitText} ${t("codeleap.common.timeAgo.ago")}`;
        }
    }

    const unitText = t(`codeleap.common.timeAgo.time.seconds.plural`);
    return `0 ${unitText} ${t("codeleap.common.timeAgo.ago")}`;
}
