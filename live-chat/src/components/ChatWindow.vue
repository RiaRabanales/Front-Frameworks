<template>
  <div class="chatWindow">
      <div v-if="error">
          {{ error }}
      </div>
      <div v-if="documents" class="messages">
          <div v-for="document in documents" :key="document.id" class="singleDocument">
              <span class="createdAt">{{ document.createdAt.toDate() }}</span>
              <span class="name">{{ document.name }}</span>
              <span class="message">{{ document.message }}</span>
          </div>
      </div>
  </div>
</template>

<script>
import getCollection from "../composables/getCollection";

export default {
  setup() {
    const { error, documents } = getCollection("messages");

    return { error, documents };
  },
};
</script>

<style>
.chatWindow {
    background: #fafafa;
    min-height: 40vh;
    padding: 30px 20px;
  }
  .singleDocument {
    margin: 18px 0;
  }
  .createdAt {
    display: block;
    color: #999;
    font-size: 12px;
    margin-bottom: 4px;
  }
  .name {
    font-weight: bold;
    margin-right: 6px;
  }
  .messages {
    max-height: 400px;
    overflow: auto;
  }
</style>