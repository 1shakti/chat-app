export const getTimeFromSeconds = (seconds) => {
    const date = new Date(seconds);
    let hours = date.getHours();
    const minutes = date.getMinutes();

    const shift = hours >= 12 ? 'pm' : 'am'

    hours = hours % 12;
    hours = hours || 12;

    return `${hours < 10 ? '0'+hours : hours}:${minutes < 10 ? '0'+minutes : minutes} ${shift}`
}

export const timesAgo = (currentTime, sentTime) => {
    const diff = (currentTime - sentTime) / 1000;

    if (diff > 60*60) {
        return `${Math.round(diff/60*60)}h ago`
    }
    if (diff > 60) {
        return `${Math.round(diff/60)}m ago`
    }
    if (diff < 60) {
        return 'Now'
    }
}