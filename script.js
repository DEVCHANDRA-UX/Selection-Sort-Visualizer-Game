// ================================
// Selection Sort Visualizer
// Part 1
// ================================

const arrayContainer = document.getElementById("arrayContainer");

const generateBtn = document.getElementById("generateBtn");
const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

const comparisonCount = document.getElementById("comparisonCount");
const swapCount = document.getElementById("swapCount");
const pauseCount = document.getElementById("pauseCount");

const statusText = document.getElementById("statusText");
const speedRange = document.getElementById("speedRange");

let array = [];
let originalArray = [];

let comparisons = 0;
let swaps = 0;
let pauses = 0;

let sorting = false;
let paused = false;

let speed = 500;

speedRange.addEventListener("input",() => {
    speed = parseInt(speedRange.value);
});