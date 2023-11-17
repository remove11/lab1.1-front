
export const convertDate = (originalString:string):string => {
    // Convert the string to a Date object
    var originalDate = new Date(originalString);

    // Format the Date object to the desired format
    var newFormat = originalDate.toLocaleDateString('en-US',{
        year:"2-digit",
        month:"2-digit",
        day:"2-digit",
        hour:"2-digit",
        minute:"2-digit",
    });

    return newFormat
}