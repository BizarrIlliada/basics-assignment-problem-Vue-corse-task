const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    }
  },

  methods: {
    add(num) {
      this.counter += num;
    }
  },

  computed: {
    result() {
      const { counter } = this;

      switch (true) {
        case counter < 37:
          return 'Not there yet!';
        case counter === 37:
          return 'Bravo!!!';
        case counter > 37:
          return 'Too much!';
      }
    }
  },

  watch: {
    result() {
      setTimeout(() => {
        console.log('Timeout counter ' + this.timeOutCounter);
      }, 5000)
    }
  }
})

app.mount('#assignment')