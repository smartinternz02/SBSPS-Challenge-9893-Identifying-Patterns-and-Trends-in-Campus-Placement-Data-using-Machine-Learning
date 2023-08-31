const body = document.querySelector("body");
const p2Elements = document.querySelectorAll(".p2");

p2Elements.forEach(p2Element => {
    p2Element.addEventListener('mouseenter', () => {
        body.classList.add("bodybg");
    });

    p2Element.addEventListener('mouseleave', () => {
        body.classList.remove("bodybg");
    });
});

const grid2Elements = document.querySelectorAll(".grid2");

grid2Elements.forEach(grid2Element => {
    grid2Element.addEventListener('mouseenter', () => {
        body.classList.add("bodybg");
    });

    grid2Element.addEventListener('mouseleave', () => {
        body.classList.remove("bodybg");
    });
});

const predictn = document.querySelectorAll(".containerR");

predictn.forEach(pele => {
    pele.addEventListener('mouseenter', () => {
        body.classList.add("bodybgr");
    });

    pele.addEventListener('mouseleave', () => {
        body.classList.remove("bodybgr");
    });
});
const predicty = document.querySelectorAll(".containerG");

predicty.forEach(pele => {
    pele.addEventListener('mouseenter', () => {
        body.classList.add("bodybgg");
    });

    pele.addEventListener('mouseleave', () => {
        body.classList.remove("bodybgg");
    });
});
