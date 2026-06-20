import { QUESTIONS } from "./questions.js";

export const PIN = "583921";
export const COUNTDOWN_SECONDS = 3;
export const QUESTION_SECONDS = 20;
export const TOTAL_CELLS = QUESTIONS.length;

export const COLORS = [
  "#ef4444", "#3b82f6", "#22c55e", "#facc15",
  "#a855f7", "#fb923c", "#14b8a6", "#ec4899",
  "#84cc16", "#06b6d4", "#f43f5e", "#8b5cf6",
  "#f59e0b", "#10b981", "#6366f1", "#d946ef"
];

export const POINTS = [100, 90, 80, 70, 60, 50, 40, 30];

export function pointsFor(index) {
  return index < POINTS.length ? POINTS[index] : 30;
}

export function q(index) {
  return QUESTIONS[index] || null;
}

export function cleanText(value) {
  return String(value || "").trim().replace(/[<>]/g, "").slice(0, 42);
}

export function optionLabel(question, key) {
  if (!question) return key || "";
  if (question.type === "boolean") return key === "V" ? "Verdadero" : "Falso";
  return question.options?.[key] || key;
}

export function rank(playersObj) {
  return Object.entries(playersObj || {})
    .map(([id, p]) => ({ id, ...p }))
    .sort((a, b) => ((b.score || 0) - (a.score || 0)) || ((b.position || 0) - (a.position || 0)) || ((a.joinedAt || 0) - (b.joinedAt || 0)));
}

export function medal(index) {
  if (index === 0) return "🥇";
  if (index === 1) return "🥈";
  if (index === 2) return "🥉";
  return `${index + 1}°`;
}

export function secondsLeft(target) {
  return Math.max(0, Math.ceil(((target || Date.now()) - Date.now()) / 1000));
}

export function stageByIndex(index) {
  const total = QUESTIONS.length;
  if (index < Math.ceil(total / 3)) return { key: "desert", name: "Desierto", icon: "🌵" };
  if (index < Math.ceil((total * 2) / 3)) return { key: "jerusalem", name: "Jerusalén", icon: "🏛️" };
  return { key: "heaven", name: "Ciudad Celestial", icon: "✨" };
}

export function playerUrl() {
  return window.location.href
    .replace(/index\.html.*$/i, "")
    .replace(/admin\.html.*$/i, "")
    .split("?")[0] + "player.html";
}
