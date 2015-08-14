/**
 * return bool
 */
function isMobileDevice {
    return (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent))
}
