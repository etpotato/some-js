// Задача: реализовать очередь

// Первым аргументом конструктора является функция — обработчик одной задачи, задача считаетcя обработанной после вызова коллбэка
// Вторым количество параллельно обрабатываемых задач
// Третьим коллбек, вызываемый по окончанию обработки всех задач


// const queue = new Queue(processTask, paralleledTasks, whenEmpty)

// queue.add('task 1')
// queue.add('task 2')
// queue.add('task 3')
// queue.loop()


class Queue {
  constructor(processTask, threadCount, onFinish) {
    this.tasks = [];
    this.activeTasksCount = 0;
    this.processTask = processTask;
    this.threadCount = threadCount;
    this.onFinish = onFinish;
    console.log('threadCount', this.threadCount);
  }

  add(task) {
    this.tasks.push(task);
    return this;
  }

  list() {
    console.log(this.tasks);
    return this.tasks;
  }

  loop() {
    console.log('loop');
    console.log('tasks in queue on loop enter', this.tasks.length);
    if (this.tasks.length === 0 && this.activeTasksCount === 0) return this.onFinish();

    while (this.activeTasksCount < this.threadCount && this.tasks.length) {
      const newTask = this.tasks.shift();
      this.activeTasksCount++;
      console.log('process task');
      console.log('active tasks сount', this.activeTasksCount);
      console.log('tasks in queue', this.tasks.length);
      this.processTask(newTask)
        .then(() => {
          this.activeTasksCount--;
          console.log('finish process');
          this.loop();
        });
    }
  }
}

const process = async () => new Promise(res => {
  setTimeout(() => res(), Math.random() * 2000);
});

const whenEmpty = () => console.log('fin!');

const queue = new Queue(process, 3, whenEmpty);

queue.add('task 1');
queue.add('task 2');
queue.add('task 3');
queue.add('task 4');
queue.add('task 5');
queue.add('task 6');
queue.add('task 7');
queue.add('task 8');
queue.list();
queue.loop();


