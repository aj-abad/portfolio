<template>
  <section class="w-100vw h-100vh py-8 px-16">
    <v-row>
      <v-col>
        <h4 class="display">Project Details</h4>
        <p>
          Hallyulator is a web application that calculates how lines of a song
          are distributed between singers, such as in songs by K-Pop or J-Pop
          groups.
        </p>
      </v-col>
      <v-col>
        <h4 class="display">The Problem</h4>
        <p>
          We wanted to be able to calculate a song's line distribution. For
          this, we needed a database of lyrics with some sort of indicator of
          which singer sang which line. We would also need a way to calculate
        </p>
      </v-col>
      <v-col>
        <h4 class="display">The Solution</h4>
        <p>
          I found ColorCodedLyrics, a site which hosts a sizeable database of
          K-Pop and J-Pop lyrics. Each song's line is color-coded with a legend
          that indicates which color represents which singer.
        </p>
        <p>
          I decided to use
          <a href="https://scraperapi.com/" target="_blank" rel="noopener">
            ScraperAPI
          </a>
          to scrape our target site. From there, it was just a matter of using
          the right selectors to collect the singers' corresponding colors
          and iterating through a song's lines to match them with their
          respective singers.
        </p>
      </v-col>
    </v-row>
  </section>
</template>
<script>
export default {
  name: "ProjectDetails",
};
</script>