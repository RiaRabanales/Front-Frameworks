<template>
  <div class="chatWindow">
    <div v-if="error">
      {{ error }}
    </div>
    <div v-if="documents" class="messages" ref="messages">
      <div
        v-for="document in formattedDocuments"
        :key="document.id"
        class="singleDocument"
      >
        <span class="createdAt">{{ document.createdAt }} ago</span>
        <span class="name">{{ document.name }}</span>
        <span class="message">{{ document.message }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import getCollection from "../composables/getCollection";
import { formatDistanceToNow } from 'date-fns';
import { computed, ref, onUpdated } from 'vue';

export default {
  setup() {
    const { error, documents } = getCollection("messages");

    //aquí trabajo el formato de fecha si hay docs
    const formattedDocuments = computed(() => {
        if (documents.value) {
            return documents.value.map(doc => {
                let time = formatDistanceToNow(doc.createdAt.toDate());
                return { ...doc, createdAt: time };
            });
        }
    });

    //así hago autoscroll al final del div de mensajes
    const messages = ref(null);
    onUpdated(() => {
        messages.value.scrollTop = messages.value.scrollHeight;
    });

    return { error, documents, formattedDocuments, messages};
  },
};
</script>

<style>
.chatWindow {
  background: #fafafa;
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