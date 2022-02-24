export default class TodoTask {
  constructor(description, arr, done = false) {
    this.description = description;
    this.index = arr.length;
    this.done = done;
  }
}
