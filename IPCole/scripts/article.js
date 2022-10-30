var links = document.getElementsByTagName('a')
for (var i = 0; i < links.length; ++i) {
    if(links[i].id=="back") {
        break
    }
    else{
        links[i].setAttribute('target', '_blank');
    }
}