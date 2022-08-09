<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  methods: {},
  computed: {
    changeCounter: {
      get() {
        return this.$store.state.counter;
      },
      set(newVal) {
        this.$store.commit("setCounter");
      },
    },
  },
};
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
    <p>{{ $store.state.counter }}</p>
    <div>
      <button @click="$store.commit('addCounter')">+</button>
      <button @click="$store.dispatch('lessCounter')">-</button>
      <p>
        {{ $store.state.counter }} * 2 = {{ $store.getters.multiplyCounter }}
      </p>
      <input v-model="changeCounter" type="number" />
    </div>
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
