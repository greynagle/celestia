export default function eot(date) {
    Date.prototype.isLeapYear = function (yr) {
        var year = yr;
        if ((year & 3) != 0) return false;
        return year % 100 != 0 || year % 400 == 0;
    };

    // Get Day of Year
    Date.prototype.getDOY = function (year, month, day) {
        var dayCount = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
        var mn = month;
        var dn = day;
        var dayOfYear = dayCount[mn-1] + dn;
        if (mn > 1 && this.isLeapYear(year)) dayOfYear++;
        return dayOfYear;
    };

	const yr = Number(date.split('-')[0])
    const month = Number(date.split('-')[1])
    const day = Number(date.split('-')[2])

    const pi = 3.14159265359;

    const w = (2 * pi) / 365.24; //radians
    const days = Date.prototype.getDOY(yr, month, day); //replace with proper date value
	console.log('day', days)
    const a = w * (days + 10);
    const b = a + 0.0334 * Math.sin(w * (days - 2));
    const c = (a - Math.atan(Math.tan(b) / Math.cos(0.40910518))) / pi;

    return 720 * (c - Math.round(c));
}
