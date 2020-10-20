export default function dateDif(date1, date2) {
    // JavaScript program to illustrate
    // calculation of no. of days between two date

    // To set two dates to two variables
    var date1 = new Date(date1);
    var date2 = new Date(date2);

    // To calculate the time difference of two dates
    var Difference_In_Time = date2.getTime() - date1.getTime();

    // To calculate the no. of days between two dates
    return Math.abs(Difference_In_Time / (1000 * 3600 * 24));
}
