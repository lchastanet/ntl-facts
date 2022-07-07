import dayjs from "dayjs"
import "dayjs/locale/fr"

export const formatDate = () =>
  dayjs().locale("fr").format("dddd DD MMMM YYYY HH:mm:ss")
