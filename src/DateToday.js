export default function DateToday(){
    const dateObj = new Date();
    const month = dateObj.getMonth()+1 <10 ? '0'+(dateObj.getMonth()+1) : dateObj.getMonth()+1
    const day = dateObj.getDate() <10 ? '0'+dateObj.getDate() : dateObj.getDate()
    const year = dateObj.getFullYear();
    return `${day}.${month}.${year}`
}