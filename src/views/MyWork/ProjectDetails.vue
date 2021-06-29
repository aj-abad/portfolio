<template>
  <section class="w-100vw h-100vh py-8">
    <v-row class="h-100">
      <v-col class="d-flex h-100 align-center">
        <p class="mb-0 mr-8">
          Kixothermic is a web store that sells high-end sneakers, streetwear,
          and luxury apparel.  
        </p>
        <arrow style="width: 12rem; display: inline-block"/>
      </v-col>
      <v-col>
        <h4 class="display">The Problem</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          sapiente laudantium sequi maxime, necessitatibus fugit, architecto
          veritatis optio, nulla nisi quibusdam ex iure cumque? Minus officia
          quia ex corrupti quasi!
          <!-- We wanted to be able to calculate a song's line distribution. For
          this, we needed a database of lyrics with some sort of indicator of
          which singer sang which line. We would also need a way to calculate -->
        </p>
      </v-col>
      <v-col>
        <h4 class="display">The Solution</h4>
        <p>
          <!-- I found ColorCodedLyrics, a site which hosts a sizeable database of
          K-Pop and J-Pop lyrics. Each song's line is color-coded with a legend
          that indicates which color represents which singer. -->
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptas ab, soluta beatae ipsam harum iusto, unde quia consequuntur ullam molestias ut sed, est nulla earum voluptate voluptatum. Eos, debitis.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          sapiente laudantium sequi maxime, necessitatibus fugit, architecto
          veritatis optio, nulla nisi quibusdam ex iure cumque? Minus officia
          quia ex corrupti quasi!
          <!-- I decided to use
          <a href="https://scraperapi.com/" target="_blank" rel="noopener">
            ScraperAPI
          </a>
          to scrape our target site. From there, it was just a matter of using
          the right selectors to collect the singers' corresponding colors and
          iterating through a song's lines to match them with their respective
          singers. -->
        </p>
      </v-col>
    </v-row>
  </section>
</template>

<script>
import Arrow from "@/components/Arrow"
export default {
  name: "ProjectDetails",
  components:{
    Arrow
  }
};
</script>