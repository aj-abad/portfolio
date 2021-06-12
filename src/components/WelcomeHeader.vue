<template>
  <header id="main-header" class="h-100vh w-100vw pa-16 d-flex align-center">
    <div>
      <h1
        class="display hero mb-8"
        v-html="htmlText"
      ></h1>
      <p class="lead" :style="leadTextStyle">
        Unique web solutions for&nbsp;
        <span
          class="client"
          v-for="(client, i) in clients"
          :key="i"
          :class="{
            'client-not-yet-active': clientIndex < i,
            'client-no-longer-active': clientIndex > i,
          }"
          :aria-hidden="i !== clientIndex"
          >
          <span v-html="client"></span>
          </span
        >
      </p>
      <button class="display px-4 py-3">
        Scroll for more ->
      </button>
    </div>
  </header>
</template>

<script>
import anime from "animejs/lib/anime.es";
export default {
  name: "WelcomeHeader",
  data() {
    return {
      text: "Creative,Web.Experiences",
      leadText: {
        translate: 20,
        blur: 5,
        opacity: 0,
      },
      clients: [
        "small businesses.",
        "startups.",
        "e-commerce stores.",
        "thesis projects.",
        "<span class='display' style='font-weight: bold'>just about anyone.</span>",
      ],
      clientIndex: 0,
      frameInterval: 24,
      frameCounter: 0,
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
    leadTextStyle() {
      return `opacity: ${this.leadText.opacity}; filter: blur(${this.leadText.blur}px); transform: translateY(${this.leadText.translate}px)`;
    },
  },
  mounted() {
    const deez = this;
    setTimeout(() => {
      anime({
        targets: "#main-header .hero span",
        rotateX: 0,
        delay: anime.stagger(40),
        duration: 400,
        complete() {
          deez.animateLeadText();
        },
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
  methods: {
    animateLeadText() {
      const deez = this;
      anime({
        targets: this.leadText,
        opacity: 1,
        duration: 200,
        easing: "linear",
        complete() {
          deez.animateClient();
        },
      });
      anime({
        targets: this.leadText,
        translate: 0,
        blur: 0,
        duration: 400,
        easing: "easeOutSine",
      });
    },
    animateClient() {
      if (this.clientIndex === 4) return false;
      if (this.frameCounter < this.frameInterval) {
        this.frameCounter++;
        return window.requestAnimationFrame(() => this.animateClient());
      }
      this.frameCounter = 0;
      this.clientIndex++;

      return window.requestAnimationFrame(() => this.animateClient());
    },
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

.client {
  position: absolute;
  transition: opacity 0.4s, transform 0.4s, filter 0.4s;
}

.client-not-yet-active {
  transform: translateY(20px);
  opacity: 0;
  filter: blur(5px);
}

.client-no-longer-active {
  transform: translateY(-20px);
  opacity: 0;
  filter: blur(5px);
}

@media (max-width: 1365px) {
  .hero {
    font-size: 8rem;
  }
  .lead{
    font-size: calc(3rem * 2/3)
  }
}
</style>