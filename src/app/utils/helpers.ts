import * as moment from "moment"

export const formatDate = (date: Date | string | undefined): string => {
  return moment(date).format("DD. MM. YYYY, HH:mm")
}
