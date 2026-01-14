🗓️ Lightweight Task Scheduler

A simple JavaScript task scheduler for managing tasks efficiently.
Supports sorting, grouping by priority, and detecting overlapping tasks.

✨ Features

Add tasks with name, start & end time, and priority

Sort tasks by start time (efficiently)

Group tasks by priority using a hash map

Detect overlapping tasks (tasks running at the same time)

Estimate memory usage (optional)

🧩 Example Usage
const scheduler = new TaskScheduler();

scheduler.addTask(new Task("Task A", 9, 11, "High"));
scheduler.addTask(new Task("Task B", 10, 12, "Medium"));
scheduler.addTask(new Task("Task C", 13, 15, "Low"));
scheduler.addTask(new Task("Task D", 11, 14, "High"));

// Sort tasks
scheduler.sortTasks();
console.log("Tasks sorted by start time:", scheduler.tasks);

// Group by priority
console.log("Tasks grouped by priority:", scheduler.groupByPriority());

// Detect overlapping tasks
const overlaps = scheduler.findOverlappingTasks();
overlaps.forEach(pair => {
  console.log(`${pair[0].name} overlaps with ${pair[1].name}`);
});

// Estimate memory usage
console.log("Estimated memory usage (bytes):", scheduler.estimateMemoryUsage());

📊 Time & Space Complexity
Function	Time Complexity	Space Complexity
sortTasks()	O(n log n)	O(n)
groupByPriority()	O(n)	O(n)
findOverlappingTasks()	O(n log n)	O(n)
estimateMemoryUsage()	O(n)	O(1)
🛠 Tech Stack

JavaScript (ES6)

Node.js (optional, for running locally)
