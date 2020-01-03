<template>
  <div class="contentLeft">
    <div>
      <b>【吐槽】</b>
      <textarea class="feedback" rows="3" cols="20" v-model="feedback" placeholder="有什么想说的话，写在这儿吧。" v-on:click="enableSave"></textarea>
      <input class="saveButton" type="button" value="保存" v-if="save" v-on:click="saveFeedback" />
    </div>
    <div class="mainHeader"></div>
  </div>
</template>

<script>
export default {
  name: "FeedbackBox",

  data: function() {
    return {
      feedback: "",
      save: false
    };
  },
  methods: {
    enableSave: function(event) {
      this.save = true;
    },
    saveFeedback: function(event) {
      alert(this.feedback);
    }
  }
};
</script>

<style scoped>
textarea.feedback {
  display: block;
  float: none;
  border: 1px solid #ccc;
  height: 100px;
}
input.saveButton {
  position: absolute;
  right: 30px;
  top: 60px;
  background-color: rgb(255, 224, 47);
}
</style>
