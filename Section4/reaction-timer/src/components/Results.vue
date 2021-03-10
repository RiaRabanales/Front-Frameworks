<template>
  <p class="result">
    Reaction time: {{ score }} ms
    <br>
    <span class="rank">{{ rank }}</span>
  </p>
</template>

<script>
export default {
  props: ['score'],
  data() {
    return {
      rank: null
    }
  },
  mounted() {
    if (this.score < 260) {
      this.rank = "2fast 2furious"
    } else if (this.score < 440) {
      this.rank = "rapid reflexes"
    } else {
      this.rank = "snail pace..."
    }
  }
}
</script>

<style>
.result {
  color: #444;
  font-weight: bold;
  font-size: 0.8rem;
}
.rank {
  color: #0faf87;
  font-weight: normal;
  font-style: italic;
}
</style>