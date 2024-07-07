import moment from "moment";
export const analyze = (text) => {
  if (text.includes("hi")) {
    return "Hi, How are You?";
  } else if (text.includes("date")) {
    return moment().format("MMMM DD YYYY");
  } else if (text.includes("time")) {
    return moment().format("h:mm:ss a");
  }
  return `I can't get you..`;
};
