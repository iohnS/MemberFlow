import { Moment } from "moment";

const moment = require("moment");

/* 
    @ Formats a Date object to string
*/
export const formatDate = (date: Object) => {
  return moment(date).format("YYYY/M/D");
};

/* 
    @ Firebase returns timestamps as seconds
    checks if the specific row data is a timestamp object
*/
export const getRowDataFormat = (rowData: any) => {
  return typeof rowData == "object" ? formatDate(rowData.toDate()) : rowData;
};

/* 
  @ Adds months to a date
*/
export const addRealMonths = (m: Moment, amount: number) => {
  var fm = moment(m).add(amount, "M");
  var fmEnd = moment(fm).endOf("month");
  return m.date() !== fm.date() && fm.isSame(fmEnd.format("YYYY-MM-DD"))
    ? fm.add(amount, "d")
    : fm;
};
