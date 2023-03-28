"use strict";
const app = Vue.createApp({
  data() {
    return {
      notesTopic: {
        name: "",
        done: false,
      },
      notes: [],
      totalTask: 0,
      taskCompleted: 0,
    };
  },
  computed: {},
  watch: {},
  methods: {
    addNote() {
      if (this.notesTopic.name) {
        this.notes.unshift({ name: this.notesTopic.name, done: false });
        this.notesTopic.name = "";
        this.totalTask++;
      }
    },
    taskDone(value, index) {
      // console.log(value.srcElement.checked);
      if (value.srcElement.checked) {
        this.taskCompleted++;
        this.notes[index].done = true;
        // console.log(this.notes[index]);
      } else {
        this.taskCompleted--;
        this.notes[index].done = false;
      }
    },
    deleteTask(index) {
      const ifDone = this.notes[index].done;
      if (ifDone) {
        this.taskCompleted--;
      }
      this.notes.splice(index, 1);
      this.totalTask--;
    },
    editTask(index) {
      const task = this.notes[index];
      // console.log(task);
      this.notesTopic = task;
      this.deleteTask(index);
    },
  },
});

app.mount("#box");
