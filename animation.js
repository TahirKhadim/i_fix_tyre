

gsap.from("#right", {
    scrollTrigger: {
        trigger: "#right",
        scroller: "body"

    },
    x: "600",
    duration: 1,
    delay: 0.5,
})
gsap.from("#left", {
    scrollTrigger: {
        trigger: "#left",
        scroller: "body"

    },
    x: "-600",
    duration: 1,
    delay: 0.5,
})

// tl.from(".img-fluid", {
//     x: "-600",
//     duration: 1,
//     delay: 0.5,
// }) 