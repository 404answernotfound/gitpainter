/**
 * Const
 */
const items = document.querySelectorAll('div.item')
const btn = document.querySelector('button')
const patternDiv = document.querySelector('.patternDiv')
const patternDivSpan = document.querySelector('.patternDiv span')
const patternDivBtn = document.querySelector('.patternDiv button')

/**
 * 
 * @param {Element} e 
 * @returns void
 */
function addToPattern(e) {
    console.log(e.target)
    if (e.target.getAttribute('clicked') === null || e.target.getAttribute('clicked') === 'false') {
        e.target.setAttribute('clicked', 'true')
        e.target.style.backgroundColor = '#31A641'
        return
    }
    e.target.setAttribute('clicked', 'false')
    e.target.style.backgroundColor = '#414141'
    return
}

/**
 * 
 * @param {[Numbers]} pattern 
 * @returns [Numbers]
 */
function createPattern(pattern) {
    items.forEach(item => {
        if (item.getAttribute('clicked') === 'true') {
            pattern.push(3)
            return
        }
        pattern.push(0)
    })
    return pattern
}

/**
 * 
 * @param {[Numbers]} pattern 
 * @returns [Numbers]
 */
function trimPattern(pattern) {
    let lastPosition = null
    for (let i = 0; i < pattern.length; i++) {
        if (pattern[i] !== 0) {
            lastPosition = i
        }
    }
    lastPosition += 1
    pattern = pattern.slice(0, lastPosition)
    if (pattern.length === 1) {
        patternDivSpan.textContent = 'No pattern selected!'
        patternDiv.style.display = 'flex'
        patternDivBtn.disabled = true
        setTimeout(() => {
            patternDiv.style.display = 'none'
        }, 800)
        return
    }
    patternDivBtn.disabled ? patternDivBtn.disabled = false : null
    patternDiv.style.display = 'flex';
    patternDivSpan.textContent = pattern.toString()
    return pattern
}


/**
 * Event Listeners
 */
btn.addEventListener('click', (e) => {
    let pattern = []
    let filledPattern = createPattern(pattern)
    let trimmedPattern = trimPattern(filledPattern)


    patternDivBtn.addEventListener('click', () => {
        patternDivBtn.style.backgroundColor = '#31A641'
        patternDivBtn.style.fill = '#fff'
        navigator.clipboard.writeText(trimmedPattern);
        setTimeout(() => {
            patternDivBtn.style.backgroundColor = '#fff'
            patternDivBtn.style.fill = '#414141'
            patternDiv.style.display = 'none'
        }, 800)
    })

    return trimmedPattern
})

items.forEach(item => item.addEventListener('click', (e) => {
    addToPattern(e)
}))