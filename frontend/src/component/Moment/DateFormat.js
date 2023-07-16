
import moment from 'moment';


export const dateFormat = (date) => {
    return moment(date).format('MM Do YYYY, h:mm:ss');
}
