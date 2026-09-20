import { EmojiCategory } from './emojiCategories';

export interface EmojiData {
  emoji: string;
  name: string;
  keywords: string[];
  category: EmojiCategory;
}

export const emojis: EmojiData[] = [
  // Caras y emociones
  { emoji: "😀", name: "Cara sonriendo", keywords: ["feliz", "sonrisa", "alegría", "happy", "smile"], category: "😀 Caras y emociones" },
  { emoji: "😂", name: "Cara llorando de risa", keywords: ["risa", "jaja", "lol", "humor", "laugh", "cry"], category: "😀 Caras y emociones" },
  { emoji: "🥰", name: "Cara con corazones", keywords: ["amor", "enamorado", "cute", "love", "hearts"], category: "😀 Caras y emociones" },
  { emoji: "😎", name: "Cara con gafas de sol", keywords: ["guay", "cool", "sol", "estilo", "style"], category: "😀 Caras y emociones" },
  { emoji: "🥺", name: "Cara suplicante", keywords: ["por favor", "triste", "tierno", "cute", "pleading"], category: "😀 Caras y emociones" },
  { emoji: "😭", name: "Cara llorando fuerte", keywords: ["llanto", "tristeza", "drama", "cry", "sad"], category: "😀 Caras y emociones" },
  { emoji: "🤩", name: "Cara con estrellas", keywords: ["wow", "increíble", "sorpresa", "star", "amazing"], category: "😀 Caras y emociones" },
  { emoji: "🤔", name: "Cara pensando", keywords: ["duda", "pensar", "hmmm", "think"], category: "😀 Caras y emociones" },
  { emoji: "😡", name: "Cara enfadada", keywords: ["enojo", "furia", "angry", "mad"], category: "😀 Caras y emociones" },
  { emoji: "😴", name: "Cara durmiendo", keywords: ["sueño", "dormir", "cansado", "sleep", "tired"], category: "😀 Caras y emociones" },

  // Gestos
  { emoji: "👍", name: "Pulgar arriba", keywords: ["bien", "ok", "me gusta", "like", "thumbs up"], category: "👍 Gestos" },
  { emoji: "👎", name: "Pulgar abajo", keywords: ["mal", "no me gusta", "dislike", "thumbs down"], category: "👍 Gestos" },
  { emoji: "✌️", name: "Signo de la paz", keywords: ["paz", "victoria", "peace", "victory"], category: "👍 Gestos" },
  { emoji: "🤞", name: "Dedos cruzados", keywords: ["suerte", "esperanza", "luck", "cross"], category: "👍 Gestos" },
  { emoji: "🙏", name: "Manos juntas", keywords: ["por favor", "gracias", "rezar", "pray", "thanks"], category: "👍 Gestos" },
  { emoji: "👏", name: "Manos aplaudiendo", keywords: ["aplauso", "bravo", "clap", "applause"], category: "👍 Gestos" },
  { emoji: "🙌", name: "Manos levantadas", keywords: ["celebración", "éxito", "hands", "celebrate"], category: "👍 Gestos" },
  { emoji: "👋", name: "Mano saludando", keywords: ["hola", "adiós", "saludo", "wave", "hello", "bye"], category: "👍 Gestos" },

  // Amor
  { emoji: "❤️", name: "Corazón rojo", keywords: ["amor", "love", "pasión", "heart"], category: "❤️ Amor" },
  { emoji: "💖", name: "Corazón brillante", keywords: ["amor", "brillo", "sparkle", "love"], category: "❤️ Amor" },
  { emoji: "💕", name: "Dos corazones", keywords: ["amor", "cariño", "love", "hearts"], category: "❤️ Amor" },
  { emoji: "💔", name: "Corazón roto", keywords: ["desamor", "tristeza", "broken", "heart"], category: "❤️ Amor" },
  { emoji: "💗", name: "Corazón latiendo", keywords: ["latido", "amor", "love", "beat"], category: "❤️ Amor" },
  { emoji: "💘", name: "Corazón flechado", keywords: ["cupido", "flechazo", "love", "arrow"], category: "❤️ Amor" },
  { emoji: "💝", name: "Corazón con lazo", keywords: ["regalo", "amor", "gift", "love"], category: "❤️ Amor" },
  { emoji: "🖤", name: "Corazón negro", keywords: ["oscuro", "dark", "gótico", "black"], category: "❤️ Amor" },
  { emoji: "🤍", name: "Corazón blanco", keywords: ["puro", "paz", "white", "pure"], category: "❤️ Amor" },

  // Fuego / Emociones
  { emoji: "🔥", name: "Fuego", keywords: ["caliente", "hot", "viral", "fuego", "fire"], category: "🔥 Emociones" },
  { emoji: "✨", name: "Chispas", keywords: ["brillo", "aesthetic", "magia", "sparkles", "magic"], category: "🔥 Emociones" },
  { emoji: "💯", name: "Cien puntos", keywords: ["perfecto", "top", "100", "perfect"], category: "🔥 Emociones" },
  { emoji: "💥", name: "Colisión", keywords: ["boom", "explosión", "bang", "crash"], category: "🔥 Emociones" },
  { emoji: "💫", name: "Estrella mareada", keywords: ["brillo", "estrella", "dizzy", "star"], category: "🔥 Emociones" },
  { emoji: "💦", name: "Gotas de sudor", keywords: ["agua", "sudor", "water", "sweat"], category: "🔥 Emociones" },

  // Aesthetic
  { emoji: "🌸", name: "Flor de cerezo", keywords: ["flor", "rosa", "primavera", "cherry blossom", "flower"], category: "✨ Aesthetic" },
  { emoji: "🦋", name: "Mariposa", keywords: ["insecto", "belleza", "butterfly", "beautiful"], category: "✨ Aesthetic" },
  { emoji: "🌙", name: "Luna creciente", keywords: ["luna", "noche", "moon", "night"], category: "✨ Aesthetic" },
  { emoji: "☁️", name: "Nube", keywords: ["cielo", "blanco", "cloud", "sky"], category: "✨ Aesthetic" },
  { emoji: "☕", name: "Bebida caliente", keywords: ["café", "té", "coffee", "tea", "morning"], category: "✨ Aesthetic" },
  { emoji: "🍓", name: "Fresa", keywords: ["fruta", "rojo", "strawberry", "fruit"], category: "✨ Aesthetic" },
  { emoji: "🧸", name: "Oso de peluche", keywords: ["peluche", "cute", "oso", "teddy", "bear"], category: "✨ Aesthetic" },
  { emoji: "🪐", name: "Planeta con anillos", keywords: ["espacio", "saturno", "planet", "space"], category: "✨ Aesthetic" },
  { emoji: "🎀", name: "Lazo", keywords: ["moño", "rosa", "regalo", "ribbon", "bow", "girly"], category: "✨ Aesthetic" },
  
  // Beauty
  { emoji: "💅", name: "Pintauñas", keywords: ["uñas", "belleza", "nail polish", "beauty"], category: "💅 Beauty" },
  { emoji: "💄", name: "Pintalabios", keywords: ["labios", "maquillaje", "lipstick", "makeup"], category: "💅 Beauty" },
  { emoji: "💋", name: "Marca de beso", keywords: ["beso", "labios", "kiss", "lips"], category: "💅 Beauty" },
  { emoji: "💇‍♀️", name: "Mujer cortándose el pelo", keywords: ["pelo", "peluquería", "haircut", "salon"], category: "💅 Beauty" },
  { emoji: "👗", name: "Vestido", keywords: ["ropa", "moda", "dress", "fashion"], category: "💅 Beauty" },

  // Fashion
  { emoji: "👑", name: "Corona", keywords: ["rey", "reina", "poder", "crown", "king", "queen"], category: "👑 Fashion" },
  { emoji: "👠", name: "Zapato de tacón", keywords: ["tacones", "moda", "zapatos", "heels", "shoes"], category: "👑 Fashion" },
  { emoji: "👜", name: "Bolso", keywords: ["cartera", "compras", "handbag", "shopping"], category: "👑 Fashion" },
  { emoji: "🕶️", name: "Gafas de sol", keywords: ["lentes", "sol", "sunglasses", "shades"], category: "👑 Fashion" },
  { emoji: "💎", name: "Piedra preciosa", keywords: ["diamante", "joya", "gem", "diamond", "jewel"], category: "👑 Fashion" },

  // Familia
  { emoji: "👨‍👩‍👧", name: "Familia", keywords: ["padres", "hija", "family", "parents"], category: "👨‍👩‍👧 Familia" },
  { emoji: "👶", name: "Bebé", keywords: ["niño", "pequeño", "baby", "child"], category: "👨‍👩‍👧 Familia" },
  { emoji: "👵", name: "Abuela", keywords: ["anciana", "mayor", "grandmother", "old"], category: "👨‍👩‍👧 Familia" },
  { emoji: "👴", name: "Abuelo", keywords: ["anciano", "mayor", "grandfather", "old"], category: "👨‍👩‍👧 Familia" },
  { emoji: "👫", name: "Hombre y mujer cogidos de la mano", keywords: ["pareja", "novios", "couple"], category: "👨‍👩‍👧 Familia" },

  // Humor (already largely covered in faces, but specific expressions)
  { emoji: "🤡", name: "Cara de payaso", keywords: ["tonto", "broma", "clown", "joke"], category: "😂 Humor" },
  { emoji: "🤪", name: "Cara de loco", keywords: ["locura", "diversión", "crazy", "silly"], category: "😂 Humor" },
  { emoji: "💀", name: "Calavera", keywords: ["muerto de risa", "muerte", "skull", "dead"], category: "😂 Humor" },
  { emoji: "💩", name: "Caca", keywords: ["mierda", "broma", "poop", "shit"], category: "😂 Humor" },

  // Gaming
  { emoji: "🎮", name: "Mando de videoconsola", keywords: ["juego", "gamer", "play", "controller"], category: "🎮 Gaming" },
  { emoji: "🕹️", name: "Joystick", keywords: ["arcade", "juego", "joystick"], category: "🎮 Gaming" },
  { emoji: "👾", name: "Monstruo alienígena", keywords: ["alien", "retro", "monster", "invader"], category: "🎮 Gaming" },
  { emoji: "🏆", name: "Trofeo", keywords: ["ganador", "victoria", "trophy", "win"], category: "🎮 Gaming" },
  { emoji: "🥇", name: "Medalla de oro", keywords: ["primero", "oro", "gold", "medal"], category: "🎮 Gaming" },

  // Fiesta
  { emoji: "🎉", name: "Cañón de confeti", keywords: ["celebración", "fiesta", "party", "tada"], category: "🎉 Fiesta" },
  { emoji: "🎊", name: "Bola de confeti", keywords: ["celebración", "fiesta", "confetti"], category: "🎉 Fiesta" },
  { emoji: "🎂", name: "Tarta de cumpleaños", keywords: ["cumpleaños", "pastel", "cake", "birthday"], category: "🎉 Fiesta" },
  { emoji: "🎈", name: "Globo", keywords: ["fiesta", "cumpleaños", "balloon", "party"], category: "🎉 Fiesta" },
  { emoji: "🥂", name: "Copas brindando", keywords: ["brindis", "salud", "cheers", "glasses"], category: "🎉 Fiesta" },

  // Animales
  { emoji: "🐶", name: "Cara de perro", keywords: ["perrito", "mascota", "dog", "puppy"], category: "🐶 Animales" },
  { emoji: "🐱", name: "Cara de gato", keywords: ["gatito", "mascota", "cat", "kitty"], category: "🐶 Animales" },
  { emoji: "🐰", name: "Cara de conejo", keywords: ["conejito", "rabbit", "bunny"], category: "🐶 Animales" },
  { emoji: "🦊", name: "Cara de zorro", keywords: ["zorro", "fox"], category: "🐶 Animales" },
  { emoji: "🐼", name: "Cara de panda", keywords: ["panda", "oso", "bear"], category: "🐶 Animales" },
  { emoji: "🦁", name: "Cara de león", keywords: ["león", "salvaje", "lion"], category: "🐶 Animales" },
  { emoji: "🦄", name: "Cara de unicornio", keywords: ["magia", "caballo", "unicorn", "magic"], category: "🐶 Animales" },
  { emoji: "🐸", name: "Cara de rana", keywords: ["sapo", "frog", "toad"], category: "🐶 Animales" },
  { emoji: "🐵", name: "Cara de mono", keywords: ["chango", "monkey", "ape"], category: "🐶 Animales" },

  // Comida
  { emoji: "🍔", name: "Hamburguesa", keywords: ["comida rápida", "carne", "burger", "food"], category: "🍔 Comida" },
  { emoji: "🍕", name: "Pizza", keywords: ["queso", "italiana", "pizza"], category: "🍔 Comida" },
  { emoji: "🍟", name: "Patatas fritas", keywords: ["papas", "fritas", "fries"], category: "🍔 Comida" },
  { emoji: "🍩", name: "Donut", keywords: ["dulce", "rosquilla", "doughnut"], category: "🍔 Comida" },
  { emoji: "🍦", name: "Helado", keywords: ["frío", "postre", "ice cream"], category: "🍔 Comida" },
  { emoji: "🥑", name: "Aguacate", keywords: ["palta", "sano", "avocado"], category: "🍔 Comida" },
  { emoji: "🌮", name: "Taco", keywords: ["mexicana", "comida", "taco"], category: "🍔 Comida" },
  { emoji: "🥗", name: "Ensalada", keywords: ["sano", "verde", "salad", "healthy"], category: "🍔 Comida" },
  
  // Naturaleza (some crossover with aesthetic)
  { emoji: "🌲", name: "Árbol de hoja perenne", keywords: ["pino", "bosque", "tree", "forest"], category: "🌸 Naturaleza" },
  { emoji: "🌵", name: "Cactus", keywords: ["desierto", "planta", "cactus"], category: "🌸 Naturaleza" },
  { emoji: "🌊", name: "Ola de mar", keywords: ["océano", "agua", "wave", "ocean"], category: "🌸 Naturaleza" },
  { emoji: "☀️", name: "Sol", keywords: ["calor", "día", "sun", "day"], category: "🌸 Naturaleza" },
  { emoji: "🌈", name: "Arcoíris", keywords: ["colores", "lluvia", "rainbow"], category: "🌸 Naturaleza" },

  // Deportes
  { emoji: "⚽", name: "Balón de fútbol", keywords: ["pelota", "deporte", "soccer", "football"], category: "⚽ Deportes" },
  { emoji: "🏀", name: "Balón de baloncesto", keywords: ["baloncesto", "basketball"], category: "⚽ Deportes" },
  { emoji: "🎾", name: "Pelota de tenis", keywords: ["raqueta", "tennis"], category: "⚽ Deportes" },
  { emoji: "🏋️", name: "Persona levantando pesas", keywords: ["gimnasio", "fuerte", "gym", "weight"], category: "⚽ Deportes" },
  { emoji: "🧘‍♀️", name: "Mujer en posición de loto", keywords: ["yoga", "relax", "meditation"], category: "⚽ Deportes" },

  // Viajes
  { emoji: "✈️", name: "Avión", keywords: ["volar", "vuelo", "airplane", "fly", "travel"], category: "✈️ Viajes" },
  { emoji: "🚗", name: "Coche", keywords: ["auto", "conducir", "car", "drive"], category: "✈️ Viajes" },
  { emoji: "🌍", name: "Globo terráqueo", keywords: ["mundo", "tierra", "earth", "world"], category: "✈️ Viajes" },
  { emoji: "🏖️", name: "Playa con sombrilla", keywords: ["arena", "vacaciones", "beach", "vacation"], category: "✈️ Viajes" },
  { emoji: "🗽", name: "Estatua de la libertad", keywords: ["nueva york", "monumento", "statue", "liberty"], category: "✈️ Viajes" },

  // Objetos
  { emoji: "📱", name: "Teléfono móvil", keywords: ["celular", "smartphone", "phone"], category: "💎 Objetos" },
  { emoji: "💻", name: "Ordenador portátil", keywords: ["laptop", "pc", "computer"], category: "💎 Objetos" },
  { emoji: "📸", name: "Cámara", keywords: ["foto", "fotografía", "camera", "photo"], category: "💎 Objetos" },
  { emoji: "📖", name: "Libro abierto", keywords: ["leer", "estudiar", "book", "read"], category: "💎 Objetos" },
  { emoji: "💡", name: "Bombilla", keywords: ["idea", "luz", "lightbulb", "idea"], category: "💎 Objetos" },

  // Números (1-5 for brevity)
  { emoji: "1️⃣", name: "Tecla uno", keywords: ["número", "uno", "one", "number"], category: "🔢 Números" },
  { emoji: "2️⃣", name: "Tecla dos", keywords: ["número", "dos", "two", "number"], category: "🔢 Números" },
  { emoji: "3️⃣", name: "Tecla tres", keywords: ["número", "tres", "three", "number"], category: "🔢 Números" },
  { emoji: "4️⃣", name: "Tecla cuatro", keywords: ["número", "cuatro", "four", "number"], category: "🔢 Números" },
  { emoji: "5️⃣", name: "Tecla cinco", keywords: ["número", "cinco", "five", "number"], category: "🔢 Números" },

  // Banderas (A few examples)
  { emoji: "🇪🇸", name: "Bandera: España", keywords: ["españa", "spain", "es"], category: "🏳️ Banderas" },
  { emoji: "🇲🇽", name: "Bandera: México", keywords: ["méxico", "mexico", "mx"], category: "🏳️ Banderas" },
  { emoji: "🇦🇷", name: "Bandera: Argentina", keywords: ["argentina", "ar"], category: "🏳️ Banderas" },
  { emoji: "🇨🇴", name: "Bandera: Colombia", keywords: ["colombia", "co"], category: "🏳️ Banderas" },
  { emoji: "🇺🇸", name: "Bandera: Estados Unidos", keywords: ["usa", "estados unidos", "us"], category: "🏳️ Banderas" }
];
