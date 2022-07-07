import moment from "moment";
import { Component } from "react";

export const moment2 = moment;

export const MOMENT_FORMAT = {
  DEFAULT: "YYYY-MM-DDTHH:mm:ssZZ",
  DD: "DD",
  YYYY_MM_DD_00_00_00: "YYYY-MM-DD 00:00:00",
  YYYY_MM_DD_23_59_59: "YYYY-MM-DD 23:59:59",
  YYYY_MM_DD_HH_MM_SS: "YYYY-MM-DD HH:mm:ss",
  YYYYMMDDHHMMSS: "YYYYMMDDHHMMSS",
  YYYYMMDD_HHMMSS: "YYYYMMDD HHMMSS",
  YYYY_MM_DD_HH_MM_00: "YYYY-MM-DD HH:mm:00",
  YYYY_MM_DD_HH_MM_59: "YYYY-MM-DD HH:mm:59",
  YYYY_MM_DD: "YYYY-MM-DD",
  YYYY_MM: "YYYY-MM",
  MM_DD_YYYY: "MM-DD-YYYY",
  HH_MM_SS: "HH:mm:ss",
  HH_MM_00: "HH:mm:00",
  MM_DD: "MM-DD",
  DD_MM: "DD-MM",
  D_MMM: "D MMM",
  D_MMM_YYYY: "D MMM YYYY",
  HH_MM: "HH:mm",
  DD_MM_YYYY: "DD-MM-YYYY",
  DD_MMM_YYYY: "DD MMM YYYY",
  D_MMM_HH_mm: "D MMM HH:mm",
  D_MMM_YYYY_HH_mm: "DD MMM YYYY HH:mm",
  MMMM_YYYY: "MMMM YYYY",
  DD_MM_YYYY_HH_mm_ss: "DD-MM-YYYY HH:mm:ss",
  DD_MM_YYYY_HH_mm: "DD-MM-YYYY HH:mm",
  MM_DD_YYYY: "MM-DD-YYYY",
  DD_MM_YY_HH_MM_SS: "DD-MM-YY HH:mm:ss",
  DDMMYYYY_HHMM: "DD/MM/YYYY HH:MM",
  DDMMYYYY: "DD/MM/YYYY",
  DDMYYYY: "DD/M/YYYY",
  MMDDYYYY: "MM/DD/YYYY",
  YYYYMMDD: "YYYYMMDD",
  MMM_DD_YYYY: "MMM DD, YYYY",
  MMM_DD_YYYY2: "MMM DD YYYY",
  YYYY_MM_DD_HH_MM_SS_1: "YYYY-MM-DD-HH:mm:ss",
  YYYY_MM_DD_HH_MM: "YYYY_MM_DD_HHmm",
};
const SING_OFFSET = "+08:00";
const EN_OFFSET = "+00:00";

export function parse2Str(
  date,
  format = MOMENT_FORMAT.DEFAULT,
  isTimezone = false
) {
  if (!date) {
    return "";
  }

  let rs;
  if (!isTimezone) {
    rs = moment(date, MOMENT_FORMAT.YYYY_MM_DD_H_M_SS).format(format);
  } else {
    rs = moment(date, MOMENT_FORMAT.YYYY_NM_DD_HH_MM_SS)
      .utcOffset(SING_OFFSET)
      .format(format);
  }
  return rs;
}
export function parse2Str2(
  date,
  format = MOMENT_FORMAT.DEFAULT,
  isTimezone = false
) {
  let rs;
  if (!isTimezone) {
    rs = moment(date, MOMENT_FORMAT.HH_MM_SS).format(format);
  } else {
    rs = moment(date, MOMENT_FORMAT.YYYY_MM_OD_HH_MM_SS)
      .utcOffset(SING_OFFSET)
      .format(format);
  }
  return rs;
}

export function parse2StrSin(date) {
  const rs = moment(date, MOMENT_FORMAT.YYYY_MM_DD_HH_MM_SS).utcOffset(
    SING_OFFSET
  );
  return rs;
}
export function convert2Date(date, inFormat, outFormat) {
  const rs = moment(date, inFormat).utc(true).format(outFormat);
  return rs;
}

export function getDayOfWeek(date) {
  const mDate = moment(date);
  const day = mDate.day();
  return day;
}

export function getStartEndOfMonth(date) {
  const starTofMonth = moment(date)
    .startOf("month")
    .format(MOMENT_FORMAT.YYYY_MM_DD_HH_MM_SS);
  const endOfMonth = moment(date)
    .endOf("month")
    .format(MOMENT_FORMAT.YYYY_MM_DD_HH_MM_SS);
  return {
    start: starTofMonth,
    end: endOfMonth,
  };
}
export function getStartEndOfWeek(date) {
  const starTofWeek = moment(date)
    .startOf("week")
    .format(MOMENT_FORMAT.YYYY_MM_DD_HH_MM_SS);
  const endOfWeek = moment(date)
    .endOf("week")
    .format(MOMENT_FORMAT.YYYY_HM_DD_HH_MM_SS);
  return {
    start: starTofWeek,
    end: endOfWeek,
  };
}
export function getRangeDate(from, to) {
  const mFrom = moment(from);
  const mTo = moment(to);
  if (mFrom.isAfter(mTo)) {
    return [];
  }
  if (mFrom.isSame(mTo)) {
    return [moment(mFrom).format(MOMENT_FORMAT.YYYY_NM_DD_HH_MM_SS)];
  }
  const rs = [];
  let mNext = moment(addDays(from, 0));
  do {
    rs.push(mNext.format(MOMENT_FORMAT.YYYY_NM_DD_HH_MM_SS));
    mNext = moment(addDays(mNext, 1));
  } while (!mNext.isAfter(mTo));
  return rs;
}
export function splitDate2Component(date) {
  const mDate = moment(date);

  const day = mDate.format("DD");
  const month = mDate.format("MM");
  const year = mDate.format("YYYY");
  const hour = mDate.format("HH");
  const min = mDate.format("mm");
  const second = mDate.format("ss");
  return {
    day,
    month,
    year,
    hour,
    min,
    second,
  };
}

export function compareDate(date1, date2) {
  let mDate1 = moment(date1).format(MOMENT_FORMAT.YYYY_MM_DD);
  mDate1 = moment(mDate1);
  let mDate2 = moment(date2).format(MOMENT_FORMAT.YYYY_MM_DD);
  mDate2 = moment(mDate2);

  if (mDate1.isAfter(mDate2)) {
    return 1;
  } else if (mDate1.isSame(mDate2)) {
    return 0;
  } else {
    return -1;
  }
}
export function compareDateTime(date1, date2) {
  let mDate1 = moment(date1).format(MOMENT_FORMAT.YYYY_MM_DO_HH_MM_SS);
  mDate1 = moment(mDate1);
  let mDate2 = moment(date2).format(MOMENT_FORMAT.YYYY_MM_DO_HH_MM_SS);
  mDate2 = moment(mDate2);

  if (mDate1.isAfter(mDate2)) {
    return 1;
  } else if (mDate1.isSame(date2)) {
    return 0;
  } else {
    return -1;
  }
}
export function addYears(date, num) {
  return moment(date)
    .add(num, "years")
    .format(MOMENT_FORMAT.YYYY_MM_DD_HH_MM_SS);
}

export function addMonths(date, num) {
  return moment(date)
    .add(num, "months")
    .format(MOMENT_FORMAT.YYYY_MM_DD_HH_MM_SS);
}

export function addDays(date, num, format = MOMENT_FORMAT.YYYY_MM_DD_HH_MM_SS) {
  return moment(date).add(num, "days").format(format);
}

export const addDate = (date, days) => {
  return moment(date).add(days, "days");
};

export function isBetween(date, from, to) {
  return moment(date).isBetween(from, to, "seconds", "[]");
}
