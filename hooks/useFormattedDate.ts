import { format } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";

export function useFormattedDate(dateString: string) {
  const KSTDate = utcToZonedTime(dateString, "Asia/Seoul");
  return format(KSTDate, "yyyy년 MM월 dd일");
}

export function toKSTDate(dateString: string) {
  return utcToZonedTime(dateString, "Asia/Seoul");
}
