<!-- Puedo crear el template vacío simplemente con 'vue' en vsCode-->
<template>
  <div class="block" v-if="showBlock" @click="stopTimer">click me</div>
</template>

<script>
export default {
    props: ['delay'],
    data() {
      return {
        showBlock: false,  //sólo enseño el block cuando ha pasado el delay
        timer: null,
        reactionTime: 0 //lo tendré que pasar al padre para que lo pase a results
      }
    },
    mounted() {
      // Así lanzo esto sólo cuando el hook 'mounted' se ha realizado
      setTimeout(() => {
        this.showBlock = true;
        console.log('delay ' + this.delay);
        this.startTimer();
      }, this.delay)
    },
    methods: {
      startTimer() {
        this.timer = setInterval(() => {
          // cuando veo el block empiezo el intervalo, lo cuento en incrementos de 10milisecs
          this.reactionTime += 10;
        }, 10);
      },
      stopTimer() {
        // limpio el intervalo y reactionTime deja de crecer
        // lo llamo cuando el usuario hace click en el block
        clearInterval(this.timer);
        console.log("tiempo de reaccion: " + this.reactionTime);
        this.$emit('end', this.reactionTime);
      }
    }
};
</script>

<style>
.block {
  width: 400px;
  border-radius: 20px;
  background:  #0faf87;
  color: white;
  text-align: center;
  padding: 100px 0;
  margin: 40px auto;
}
button {
  background:  #0faf87;
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  font-size: 16px;
  letter-spacing: 1px;
  cursor: pointer;
}
button[disabled] {
  opacity: 0.3;
  cursor: not-allowed;
}
</style>