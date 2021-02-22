function redirect(url, prt) {
    prt.location = url;
    return true;
}

function email(win) {
    win.location = 'mailto:juicy@ghoster.xyz';
    return true;
}