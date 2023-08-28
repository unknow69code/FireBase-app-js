const loggetOutLinks = document.querySelectorAll('.logged-out')
const loggetIntLinks =  document.querySelectorAll('.logged-in')
console.log(loggetIntLinks);
console.log(loggetOutLinks);

export const logincheck = user => {
    if (user) {
        loggetIntLinks.forEach(link => link.style.display = 'block')
        loggetOutLinks.forEach(link => link.style.display = 'none')
    } else {
        loggetIntLinks.forEach(link => link.style.display = 'none')
        loggetOutLinks.forEach(link => link.style.display = 'block')
    }
}