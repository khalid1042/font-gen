export const emojiCategories = [
  "😀 Caras y emociones",
  "👍 Gestos",
  "❤️ Amor",
  "🔥 Emociones",
  "✨ Aesthetic",
  "👨‍👩‍👧 Familia",
  "💅 Beauty",
  "👑 Fashion",
  "😂 Humor",
  "🎮 Gaming",
  "🎉 Fiesta",
  "🐶 Animales",
  "🍔 Comida",
  "🌸 Naturaleza",
  "⚽ Deportes",
  "✈️ Viajes",
  "💎 Objetos",
  "🔢 Números",
  "🏳️ Banderas"
] as const;

export type EmojiCategory = typeof emojiCategories[number];

// Used to map specific platforms to the categories they should prioritize.
export const platformCategoryPriorities: Record<string, string[]> = {
  tiktok: ["✨ Aesthetic", "❤️ Amor", "💅 Beauty", "👑 Fashion", "😂 Humor", "🔥 Emociones", "🎮 Gaming"],
  whatsapp: ["❤️ Amor", "👨‍👩‍👧 Familia", "😂 Humor", "🎉 Fiesta", "👍 Gestos", "🔥 Emociones"],
  instagram: ["✨ Aesthetic", "❤️ Amor", "🌸 Naturaleza", "💅 Beauty", "👑 Fashion", "✈️ Viajes", "🔥 Emociones"],
  twitter: ["😂 Humor", "🔥 Emociones", "👍 Gestos", "🎉 Fiesta", "⚽ Deportes"],
  youtube: ["🎮 Gaming", "🔥 Emociones", "😂 Humor", "❤️ Amor", "✨ Aesthetic"]
};
