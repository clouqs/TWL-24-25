// switch = can be an efficient replacement to many else if statements
let day = ciao;

switch(day) {
    case 1:
        console.log('Monday');  // se day = 1 allora stampa 'Monday'
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Invalid day'); //il default serve per gestire i casi non previsti
        break; // il break serve per uscire dallo switch
}