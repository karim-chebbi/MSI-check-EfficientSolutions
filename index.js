

   // Task constructor
class Task {
  constructor(name, startTime, endTime, priority) {
    this.name = name;
    this.startTime = startTime; // in minutes or as Date
    this.endTime = endTime;
    this.priority = priority; // "High", "Medium", "Low"
  }
}

// Task Scheduler
class TaskScheduler {
  constructor() {
    this.tasks = [];
  }

  // Add a task
  addTask(task) {
    this.tasks.push(task);
  }

  // Sort tasks by start time
  sortTasks() {
    // Time Complexity: O(n log n)
    // Space Complexity: O(n) due to sort copy (depends on JS engine)
    this.tasks.sort((a, b) => a.startTime - b.startTime);
  }

  // Group tasks by priority
  groupByPriority() {
    // Time Complexity: O(n)
    // Space Complexity: O(n) for hash map
    const groups = {
      High: [],
      Medium: [],
      Low: [],
    };

    for (const task of this.tasks) {
      if (groups[task.priority]) {
        groups[task.priority].push(task);
      } else {
        groups[task.priority] = [task]; // handles unexpected priority
      }
    }

    return groups;
  }

  // Detect overlapping tasks
  findOverlappingTasks() {
    // Sort tasks first: O(n log n)
    this.sortTasks();

    const overlaps = [];
    for (let i = 0; i < this.tasks.length - 1; i++) {
      const current = this.tasks[i];
      const next = this.tasks[i + 1];
      if (current.endTime > next.startTime) {
        overlaps.push([current, next]);
      }
    }
    // Time Complexity: O(n) after sorting
    // Overall: O(n log n)
    return overlaps;
  }

  // Optional: estimate memory usage
  estimateMemoryUsage() {
    // Approximate: sum of string lengths + 2 numbers + 1 string per task
    let totalBytes = 0;
    for (const task of this.tasks) {
      totalBytes +=
        task.name.length * 2 + // assuming 2 bytes per char
        2 * 8 + // startTime and endTime as 64-bit numbers
        task.priority.length * 2;
    }
    return totalBytes;
  }
}

// ------------------- Testing -------------------

const scheduler = new TaskScheduler();

scheduler.addTask(new Task("Task A", 9, 11, "High"));
scheduler.addTask(new Task("Task B", 10, 12, "Medium"));
scheduler.addTask(new Task("Task C", 13, 15, "Low"));
scheduler.addTask(new Task("Task D", 11, 14, "High"));

// Sort tasks
scheduler.sortTasks();
console.log("Tasks sorted by start time:");
console.log(scheduler.tasks);

// Group by priority
console.log("\nTasks grouped by priority:");
console.log(scheduler.groupByPriority());

// Detect overlapping tasks
console.log("\nOverlapping tasks:");
const overlaps = scheduler.findOverlappingTasks();
overlaps.forEach((pair) => {
  console.log(`${pair[0].name} overlaps with ${pair[1].name}`);
});

// Estimate memory usage
console.log(
  "\nEstimated memory usage (bytes):",
  scheduler.estimateMemoryUsage()
);
