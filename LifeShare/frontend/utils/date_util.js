export const formatDate = date => {
    const months = {
        0: 'JANUARY',
        1: 'FEBRUARY',
        2: 'MARCH',
        3: 'APRIL',
        4: 'MAY',
        5: 'JUNE',
        6: 'JULY',
        7: 'AUGUST',
        8: 'SEPTEMBER',
        9: 'OCTOBER',
        10: 'NOVEMBER',
        11: 'DECEMBER',
    };
    
    const time = new Date(date);
    const month = months[time.getMonth()];
    const day = time.getDate();
    const year = time.getFullYear();
    return `${month} ${day}, ${year}`;
};
