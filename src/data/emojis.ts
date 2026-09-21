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
  { emoji: "🇺🇸", name: "Bandera: Estados Unidos", keywords: ["usa", "estados unidos", "us"], category: "🏳️ Banderas" },

  // --- NEW EMOJIS ADDED ---
  
  // Más Caras y emociones
  { emoji: "😇", name: "Cara sonriendo con aureola", keywords: ["ángel", "bueno", "inocente", "angel"], category: "😀 Caras y emociones" },
  { emoji: "🙃", name: "Cara al revés", keywords: ["ironía", "sarcasmo", "upside down"], category: "😀 Caras y emociones" },
  { emoji: "😉", name: "Cara guiñando un ojo", keywords: ["guiño", "broma", "wink"], category: "😀 Caras y emociones" },
  { emoji: "😋", name: "Cara saboreando comida", keywords: ["rico", "comida", "yummy"], category: "😀 Caras y emociones" },
  { emoji: "😜", name: "Cara sacando la lengua y guiñando", keywords: ["locura", "broma", "lengua", "wink"], category: "😀 Caras y emociones" },
  { emoji: "🤫", name: "Cara pidiendo silencio", keywords: ["shh", "secreto", "silencio", "quiet"], category: "😀 Caras y emociones" },
  { emoji: "🤭", name: "Cara con mano sobre la boca", keywords: ["ups", "risita", "oops"], category: "😀 Caras y emociones" },
  { emoji: "🥱", name: "Cara bostezando", keywords: ["aburrido", "sueño", "yawn"], category: "😀 Caras y emociones" },
  { emoji: "🥶", name: "Cara helada", keywords: ["frío", "congelado", "cold", "freezing"], category: "😀 Caras y emociones" },
  { emoji: "🥵", name: "Cara acalorada", keywords: ["calor", "sudor", "hot", "sweating"], category: "😀 Caras y emociones" },
  { emoji: "🤯", name: "Cabeza explotando", keywords: ["boom", "sorpresa", "mind blown"], category: "😀 Caras y emociones" },
  { emoji: "🥳", name: "Cara de fiesta", keywords: ["celebración", "cumpleaños", "party"], category: "😀 Caras y emociones" },
  { emoji: "🤠", name: "Cara con sombrero de vaquero", keywords: ["vaquero", "cowboy", "yeehaw"], category: "😀 Caras y emociones" },
  { emoji: "🤢", name: "Cara de asco", keywords: ["enfermo", "asco", "sick", "gross"], category: "😀 Caras y emociones" },
  { emoji: "🤮", name: "Cara vomitando", keywords: ["asco", "vomitar", "puke"], category: "😀 Caras y emociones" },
  { emoji: "🤧", name: "Cara estornudando", keywords: ["resfriado", "alergia", "sneeze"], category: "😀 Caras y emociones" },
  { emoji: "😵", name: "Cara mareada", keywords: ["mareo", "confusión", "dizzy"], category: "😀 Caras y emociones" },

  // Más Gestos
  { emoji: "👊", name: "Puño cerrado", keywords: ["puñetazo", "choque", "punch", "fist"], category: "👍 Gestos" },
  { emoji: "🤝", name: "Apretón de manos", keywords: ["trato", "acuerdo", "handshake"], category: "👍 Gestos" },
  { emoji: "💪", name: "Bíceps flexionado", keywords: ["fuerza", "músculo", "strong", "muscle"], category: "👍 Gestos" },
  { emoji: "🤌", name: "Dedos juntos", keywords: ["italiano", "qué", "italian", "chef kiss"], category: "👍 Gestos" },
  { emoji: "🤏", name: "Mano pellizcando", keywords: ["pequeño", "un poco", "tiny", "pinch"], category: "👍 Gestos" },
  { emoji: "🤟", name: "Te quiero", keywords: ["amor", "rock", "signo", "love you"], category: "👍 Gestos" },

  // Más Amor
  { emoji: "❤️‍🔥", name: "Corazón en llamas", keywords: ["pasión", "fuego", "heart on fire"], category: "❤️ Amor" },
  { emoji: "❤️‍🩹", name: "Corazón vendado", keywords: ["curando", "recuperación", "healing"], category: "❤️ Amor" },
  { emoji: "💌", name: "Carta de amor", keywords: ["mensaje", "romance", "love letter"], category: "❤️ Amor" },
  { emoji: "💜", name: "Corazón morado", keywords: ["púrpura", "bts", "purple heart"], category: "❤️ Amor" },
  { emoji: "💙", name: "Corazón azul", keywords: ["frío", "confianza", "blue heart"], category: "❤️ Amor" },
  { emoji: "💚", name: "Corazón verde", keywords: ["naturaleza", "esperanza", "green heart"], category: "❤️ Amor" },
  { emoji: "💛", name: "Corazón amarillo", keywords: ["amistad", "yellow heart"], category: "❤️ Amor" },

  // Más Aesthetic
  { emoji: "🔮", name: "Bola de cristal", keywords: ["magia", "futuro", "crystal ball"], category: "✨ Aesthetic" },
  { emoji: "🧿", name: "Ojo turco", keywords: ["protección", "amuleto", "nazar"], category: "✨ Aesthetic" },
  { emoji: "🪬", name: "Mano de Fátima", keywords: ["hamsa", "protección", "espiritual"], category: "✨ Aesthetic" },
  { emoji: "🧚‍♀️", name: "Hada", keywords: ["magia", "fantasía", "fairy"], category: "✨ Aesthetic" },
  { emoji: "🧜‍♀️", name: "Sirena", keywords: ["mar", "fantasía", "mermaid"], category: "✨ Aesthetic" },
  { emoji: "🍄", name: "Champiñón", keywords: ["hongo", "bosque", "mushroom", "cottagecore"], category: "✨ Aesthetic" },
  { emoji: "🍃", name: "Hojas al viento", keywords: ["viento", "naturaleza", "leaves"], category: "✨ Aesthetic" },
  { emoji: "🍂", name: "Hoja caída", keywords: ["otoño", "naturaleza", "autumn", "fall"], category: "✨ Aesthetic" },
  { emoji: "🌷", name: "Tulipán", keywords: ["flor", "primavera", "tulip"], category: "✨ Aesthetic" },
  { emoji: "🌻", name: "Girasol", keywords: ["flor", "sol", "sunflower"], category: "✨ Aesthetic" },

  // Más Animales
  { emoji: "🦖", name: "T-Rex", keywords: ["dinosaurio", "rex", "dinosaur"], category: "🐶 Animales" },
  { emoji: "🐢", name: "Tortuga", keywords: ["lento", "caparazón", "turtle"], category: "🐶 Animales" },
  { emoji: "🐍", name: "Serpiente", keywords: ["víbora", "snake"], category: "🐶 Animales" },
  { emoji: "🐙", name: "Pulpo", keywords: ["mar", "tentáculos", "octopus"], category: "🐶 Animales" },
  { emoji: "🦈", name: "Tiburón", keywords: ["mar", "peligro", "shark"], category: "🐶 Animales" },
  { emoji: "🦥", name: "Perezoso", keywords: ["lento", "dormir", "sloth"], category: "🐶 Animales" },
  { emoji: "🦦", name: "Nutria", keywords: ["agua", "lindo", "otter"], category: "🐶 Animales" },

  // Más Comida
  { emoji: "🍣", name: "Sushi", keywords: ["pescado", "japón", "sushi"], category: "🍔 Comida" },
  { emoji: "🍜", name: "Fideos", keywords: ["ramen", "sopa", "noodles"], category: "🍔 Comida" },
  { emoji: "🥐", name: "Croissant", keywords: ["desayuno", "pan", "croissant"], category: "🍔 Comida" },
  { emoji: "🥞", name: "Tortitas", keywords: ["desayuno", "dulce", "pancakes"], category: "🍔 Comida" },
  { emoji: "🥓", name: "Bacon", keywords: ["tocino", "carne", "bacon"], category: "🍔 Comida" },
  { emoji: "🧀", name: "Queso", keywords: ["lácteo", "cheese"], category: "🍔 Comida" },

  // --- NEW EMOJIS (BATCH 2) ---
  
  // Fantasía & Magia
  { emoji: "🐉", name: "Dragón", keywords: ["fantasía", "monstruo", "dragon"], category: "✨ Aesthetic" },
  { emoji: "🦄", name: "Unicornio", keywords: ["magia", "caballo", "unicorn"], category: "✨ Aesthetic" },
  { emoji: "🧛‍♂️", name: "Vampiro", keywords: ["drácula", "halloween", "vampire"], category: "😂 Humor" },
  { emoji: "🧟‍♀️", name: "Zombi", keywords: ["muerto viviente", "zombie"], category: "😂 Humor" },
  
  // Naturaleza y Tiempo
  { emoji: "⚡", name: "Rayo", keywords: ["electricidad", "tormenta", "lightning", "voltaje"], category: "🌸 Naturaleza" },
  { emoji: "❄️", name: "Copo de nieve", keywords: ["frío", "invierno", "snow", "ice"], category: "🌸 Naturaleza" },
  { emoji: "🌪️", name: "Tornado", keywords: ["viento", "tormenta", "tornado"], category: "🌸 Naturaleza" },
  { emoji: "🌋", name: "Volcán", keywords: ["erupción", "lava", "volcano"], category: "🌸 Naturaleza" },
  
  // Música
  { emoji: "🎵", name: "Nota musical", keywords: ["música", "canción", "music", "note"], category: "💎 Objetos" },
  { emoji: "🎸", name: "Guitarra", keywords: ["música", "rock", "guitar"], category: "💎 Objetos" },
  { emoji: "🎧", name: "Auriculares", keywords: ["música", "escuchar", "headphones"], category: "💎 Objetos" },
  { emoji: "🎹", name: "Teclado musical", keywords: ["piano", "música", "keyboard"], category: "💎 Objetos" },
  
  // Bebidas
  { emoji: "🧋", name: "Té de burbujas", keywords: ["boba", "bebida", "bubble tea"], category: "🍔 Comida" },
  { emoji: "🧉", name: "Mate", keywords: ["bebida", "argentina", "mate"], category: "🍔 Comida" },
  { emoji: "🍺", name: "Cerveza", keywords: ["alcohol", "fiesta", "beer"], category: "🎉 Fiesta" },
  { emoji: "🍹", name: "Cóctel", keywords: ["bebida", "fruta", "cocktail"], category: "🎉 Fiesta" }
];
