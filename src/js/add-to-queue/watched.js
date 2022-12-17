import { watched, queue } from './local-storage';

const addWatchedRef = document.querySelector('[data-btn=addToWatched]');
const addQueueRef = document.querySelector('[data-btn=addToQueue]');

addWatchedRef.addEventListener('click', onAddToWatched);
addQueueRef.addEventListener('click', onAddToQueue);

function onAddToWatched(id) {
  if (watched.includes(id)) addWatchedRef.setAttribute('disable', true);
  else watched.push(id);
}

function onAddToQueue(id) {
  if (queue.includes(id)) addQueueRef.setAttribute('disable', true);
  else queue.push(id);
}