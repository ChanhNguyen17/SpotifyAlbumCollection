// Get hash
const hash = window.location.hash.substring(1).split('&').reduce(((result, current) => {
    if(current){
        const parts = current.split('=');
        result[parts[0]] = decodeURIComponent(parts[1]);
    }
    return result;
}), {});

window.location.hash = "";

export default hash;


