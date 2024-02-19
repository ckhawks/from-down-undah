export const timeSince = (timeStamp: number): string | undefined => {
  var now = new Date(),
    secondsPast = (now.getTime() - timeStamp) / 1000;
  if (secondsPast < 60) {
    return secondsPast + "s";
  }
  if (secondsPast < 3600) {
    return secondsPast / 60 + "m";
  }
  if (secondsPast <= 86400) {
    return secondsPast / 3600 + "h";
  }
  if (secondsPast > 86400) {
    let day = (timeStamp as unknown as Date).getDate();
    // @ts-ignore
    let month = (timeStamp as unknown as Date) 
      .toDateString()
      .match(/ [a-zA-Z]*/)[0]
      .replace(" ", "");
    let year =
    (timeStamp as unknown as Date).getFullYear() == now.getFullYear()
        ? ""
        : " " + (timeStamp as unknown as Date).getFullYear();
    return day + " " + month + year;
  }
};
