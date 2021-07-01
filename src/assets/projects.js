const projects = [{
        name: "Cura",
        photo: "cura.png",
        description: "Cura is a progressive web app that allows customers to book personal care services at home.",
        words: ["CURA", ""],
        text: "cura.txt",
        repo: []
    },
    {
        name: "Fight the Power",
        photo: "fightthepower.png",
        description: "Fight the Power is an exhibit website featuring a mixtape of songs protesting police brutality.",
        words: ["FIGHT THE", "POWER"],
        text: "fightthepower.txt"
    },
    {
        name: "Ateneo SALT",
        photo: "salt.png",
        description: "This is a redesign of Ateneo SALT's existing website.",
        words: ["ATENEO", "SALT"],
        text: "ateneosalt.txt"
    },
    {
        name: "Kixothermic",
        photo: "kixothermic.png",
        description: "Kixothermic is a web store that sells high-end sneakers, streetwear, and luxury apparel.",
        words: ["KIXO-", "THERMIC"],
        goal: `I wanted to create a small consignment-slash-reselling shop that also `
    },
    {
        name: "Hallyulator",
        photo: "hallyulator.png",
        description: "Hallyulator is a web app that calculates line distribution in a song with multiple singers, such as in a K-Pop or J-Pop song.",
        words: ["HALLYU-", "LATOR"]
    },
]

import axios from 'axios'
axios({
        method: "get",
        url: "txt/fightthepower.txt",
    })
    .then((res) => {
        console.log(res.data.split("#"))
    })
    .catch((err) => {
        console.log(err)
    });

export default projects