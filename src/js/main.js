document.addEventListener('DOMContentLoaded', function () {
    const cardLinkElements = document.querySelectorAll('.card__link')
    const urlParams = new URLSearchParams(window.location.search)

    if (!urlParams.toString()) return

    cardLinkElements.forEach(function (link) {
        const linkUrl = link.getAttribute('href')

        link.setAttribute('href', `${linkUrl}?${urlParams}`)
    })
})
