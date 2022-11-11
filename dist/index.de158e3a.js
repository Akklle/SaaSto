function parallaxMouse(ev) {
    this.querySelector("#parallax1").style.transform = `translateX(${ev.clientX / 70}px)`;
    this.querySelector("#parallax2").style.transform = `translateX(${-(ev.clientX / 23)}px)`;
}
document.addEventListener("mousemove", parallaxMouse);
function parallaxScroll() {
    console.log(scrollY);
    if (scrollY > 1000 && scrollY < 1901) this.querySelector("#parallax3").style.transform = `translateX(${-1900 + scrollY}px)`;
    if (scrollY > 3500 && scrollY < 4301) {
        this.querySelector("#parallax4").style.transform = `translateX(${-4300 + scrollY}px)`;
        this.querySelector("#parallax5").style.transform = `translateX(${4300 - scrollY}px)`;
    }
}
document.addEventListener("scroll", parallaxScroll);

//# sourceMappingURL=index.de158e3a.js.map
