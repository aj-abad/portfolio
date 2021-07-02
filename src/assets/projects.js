import curaTxt from "raw-loader!../assets/txt/cura.txt"
const cura = curaTxt.split("\n").filter(e => e.length > 2)
import fightTxt from "raw-loader!../assets/txt/fightthepower.txt"
const fight = fightTxt.split("\n").filter(e => e.length > 2)



const projects = [{
        name: "Cura",
        photo: "cura.png",
        words: ["CURA", ""],
        content: {
            description: cura[0],
            goal: cura[1],
            solution: cura[2]
        },
        links: {
            site: "https://cura-demo.netlify.app",
            repo: null,
            caseStudy: "cura"
        }
    },
    {
        name: "Fight the Power",
        photo: "fightthepower.png",
        words: ["FIGHT THE", "POWER"],
        content: {
            description: fight[0],
            goal: fight[1],
            solution: fight[2]
        },
        links: {
            site: "https://fightthepower.netlify.app",
            repo: null,
            caseStudy: "fighthepower"
        }
    },
    {
        name: "Ateneo SALT",
        photo: "salt.png",
        words: ["ATENEO", "SALT"],
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

export default projects