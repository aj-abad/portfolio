<template>
  <header id="main-header" class="h-100 w-100 pa-16">
    <h1 class="display hero mb-6" v-html="htmlText"></h1>
    <p class="lead" style="transform: scaleX(2); filter: blur(20px)">
      Creating unique web solutions for <span>just about everyone.</span>
    </p>

  </header>
</template>

<script>
import anime from "animejs/lib/anime.es";
export default {
  name: "WelcomeHeader",
  data() {
    return {
      text: "Creative,Web.Experiences",
      clients: [
        "small businesses",
        "startups",
        "e-commerce stores",
        "hobbyists",
        "school projects",
        "just about anyone.",
      ],
    };
  },
  computed: {
    htmlText() {
      const textArray = [...this.text];
      let text = "";
      textArray.forEach((char) => {
        if (char !== ".") {
          const ch = char !== "," ? char : "&nbsp;";
          text += `<span style='display: inline-block; opacity: 0; transform: rotateX(90deg)'>${ch}</span>`;
        } else {
          text += "<br/>";
        }
      });
      return text;
    },
  },
  mounted() {
    setTimeout(() => {
      anime({
        targets: "#main-header .hero span",
        rotateX: 0,
        delay: anime.stagger(40),
        duration: 400,
        easing: "easeOutSine",
      });

      anime({
        targets: "#main-header .hero span",
        opacity: 1,
        delay: anime.stagger(40),
        duration: 200,
        easing: "linear",
      });

    }, 200);
  },
};
</script>


<style lang="stylus">
#main-header {
  & * {
    transform-style: preserve-3d;
  }

  & .hero {
    perspective: 1000px;
  }
}

.hero {
  font-size: 12rem;
}

.lead {
  font-size: 3rem;
}

.hero span {
  transform-origin: 50% 50% -100px;
}
</style>