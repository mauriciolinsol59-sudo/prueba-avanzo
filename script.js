/* =========================================================
   CONTENIDO — 30 preguntas por área, alineado al temario oficial
   del MINED para la prueba AVANZO (Matemática, Sociales,
   Ciencia y Tecnología, Lengua y Literatura)
   ========================================================= */

const PASSAGES = {
  ana: `Ana llevaba tres semanas preparándose para la prueba de admisión. Cada tarde, después de terminar sus tareas, abría su cuaderno de ejercicios y repasaba durante dos horas, aunque muchas veces prefería salir a jugar con sus amigos. Su madre le repetía que el esfuerzo de hoy sería la tranquilidad de mañana, y aunque al principio esa frase le sonaba a regaño, con el tiempo comenzó a entenderla de verdad. La noche antes del examen, Ana no pudo dormir bien; los nervios le apretaban el estómago. Sin embargo, al llegar al salón y ver la primera pregunta, algo cambió: reconoció el tema, recordó el ejemplo que había practicado tantas veces, y una calma extraña reemplazó al miedo. Terminó la prueba con la sensación de haber hecho lo que estaba en sus manos, sin importar aún el resultado.`,

  reciclaje: `El reciclaje es el proceso mediante el cual los materiales de desecho, como el papel, el plástico, el vidrio y el metal, se transforman nuevamente en productos utilizables, en lugar de terminar en un vertedero. Este proceso reduce la cantidad de materia prima nueva que se extrae del ambiente y disminuye la contaminación generada durante la fabricación de productos desde cero. En muchas comunidades, el reciclaje comienza en el hogar: separar la basura orgánica de los materiales reciclables facilita que estos últimos lleguen limpios y clasificados a las plantas de procesamiento. Sin embargo, no todos los materiales pueden reciclarse un número ilimitado de veces; el plástico, por ejemplo, pierde calidad cada vez que se reprocesa, mientras que el vidrio y el aluminio pueden reciclarse casi indefinidamente sin perder sus propiedades.`,

  masferrer: `Alberto Masferrer fue un pensador y escritor salvadoreño nacido en el siglo XIX, reconocido por su defensa de la justicia social y su interés en la educación del pueblo. A lo largo de su vida escribió ensayos y artículos en los que planteaba la importancia de garantizar a toda persona un mínimo de bienestar material y espiritual para poder vivir con dignidad. Su pensamiento influyó en generaciones posteriores de educadores y políticos centroamericanos, y hoy es recordado como una de las figuras intelectuales más importantes de la historia de El Salvador. Aunque no ocupó cargos políticos de alto perfil durante la mayor parte de su vida, su obra escrita tuvo un impacto duradero en la manera en que se discuten los derechos sociales en el país.`,

  redes: `Cada vez es más común ver a jóvenes revisando su teléfono decenas de veces al día. Si bien las redes sociales permiten mantenerse en contacto con amigos y familiares, y ofrecen acceso rápido a información, su uso excesivo puede afectar la concentración, el sueño y las relaciones cara a cara. No se trata de eliminar por completo estas herramientas, sino de aprender a usarlas con medida: establecer horarios específicos, evitar el teléfono antes de dormir y priorizar encuentros presenciales cuando sea posible. La tecnología, usada con responsabilidad, puede ser una aliada; usada sin límites, se convierte fácilmente en una fuente de distracción constante.`,

  sueno: `Durante el sueño, el cerebro no se apaga; por el contrario, realiza procesos esenciales para la memoria y el aprendizaje. Estudios han mostrado que, mientras dormimos, el cerebro reorganiza la información recibida durante el día, fortaleciendo las conexiones relacionadas con lo aprendido y descartando información menos relevante. Por esta razón, dormir poco antes de un examen puede ser contraproducente, incluso si se aprovecha ese tiempo para seguir estudiando: sin un descanso adecuado, la información nueva tiene menos oportunidad de consolidarse en la memoria de largo plazo. Los especialistas recomiendan a los estudiantes priorizar entre siete y nueve horas de sueño, especialmente en los días previos a evaluaciones importantes.`,

  poema: `La piedra y el agua<br><br>Gota a gota, sin prisa ni ruido,<br>el agua ha tallado la piedra más dura.<br>No usó más fuerza que la paciencia,<br>ni otra herramienta que el tiempo que dura.<br>Así también el que insiste despacio,<br>sin gritos ni prisa, construye su andar:<br>no siempre gana el que corre más rápido,<br>sino quien no deja jamás de avanzar.`
};

/* ---------- SVG de gráficas y figuras ---------- */

const svgVentas = `<svg viewBox="0 0 320 170" style="width:100%;max-width:320px;height:auto;margin:0 auto;display:block">
<line x1="20" y1="150" x2="300" y2="150" style="stroke:var(--ink-soft);stroke-width:1"/>
<rect x="30" y="90" width="30" height="60" style="fill:var(--accent)"/>
<text x="45" y="84" text-anchor="middle" style="font-size:11px;fill:var(--ink)">20</text>
<text x="45" y="164" text-anchor="middle" style="font-size:10px;fill:var(--ink-soft)">Ene</text>
<rect x="90" y="45" width="30" height="105" style="fill:var(--accent)"/>
<text x="105" y="39" text-anchor="middle" style="font-size:11px;fill:var(--ink)">35</text>
<text x="105" y="164" text-anchor="middle" style="font-size:10px;fill:var(--ink-soft)">Feb</text>
<rect x="150" y="105" width="30" height="45" style="fill:var(--accent)"/>
<text x="165" y="99" text-anchor="middle" style="font-size:11px;fill:var(--ink)">15</text>
<text x="165" y="164" text-anchor="middle" style="font-size:10px;fill:var(--ink-soft)">Mar</text>
<rect x="210" y="30" width="30" height="120" style="fill:var(--accent)"/>
<text x="225" y="24" text-anchor="middle" style="font-size:11px;fill:var(--ink)">40</text>
<text x="225" y="164" text-anchor="middle" style="font-size:10px;fill:var(--ink-soft)">Abr</text>
<rect x="270" y="75" width="30" height="75" style="fill:var(--accent)"/>
<text x="285" y="69" text-anchor="middle" style="font-size:11px;fill:var(--ink)">25</text>
<text x="285" y="164" text-anchor="middle" style="font-size:10px;fill:var(--ink-soft)">May</text>
</svg>`;

const svgTemp = `<svg viewBox="0 0 320 170" style="width:100%;max-width:320px;height:auto;margin:0 auto;display:block">
<line x1="20" y1="150" x2="300" y2="150" style="stroke:var(--ink-soft);stroke-width:1"/>
<polyline points="40,129 88,101 136,52 184,38 232,73 280,108" style="fill:none;stroke:var(--accent);stroke-width:2"/>
<circle cx="40" cy="129" r="3" style="fill:var(--accent)"/><circle cx="88" cy="101" r="3" style="fill:var(--accent)"/>
<circle cx="136" cy="52" r="3" style="fill:var(--accent)"/><circle cx="184" cy="38" r="3" style="fill:var(--accent)"/>
<circle cx="232" cy="73" r="3" style="fill:var(--accent)"/><circle cx="280" cy="108" r="3" style="fill:var(--accent)"/>
<text x="40" y="122" text-anchor="middle" style="font-size:10px;fill:var(--ink)">18°</text>
<text x="88" y="94" text-anchor="middle" style="font-size:10px;fill:var(--ink)">22°</text>
<text x="136" y="45" text-anchor="middle" style="font-size:10px;fill:var(--ink)">29°</text>
<text x="184" y="31" text-anchor="middle" style="font-size:10px;fill:var(--ink)">31°</text>
<text x="232" y="66" text-anchor="middle" style="font-size:10px;fill:var(--ink)">26°</text>
<text x="280" y="101" text-anchor="middle" style="font-size:10px;fill:var(--ink)">21°</text>
<text x="40" y="164" text-anchor="middle" style="font-size:9.5px;fill:var(--ink-soft)">6am</text>
<text x="88" y="164" text-anchor="middle" style="font-size:9.5px;fill:var(--ink-soft)">9am</text>
<text x="136" y="164" text-anchor="middle" style="font-size:9.5px;fill:var(--ink-soft)">12pm</text>
<text x="184" y="164" text-anchor="middle" style="font-size:9.5px;fill:var(--ink-soft)">3pm</text>
<text x="232" y="164" text-anchor="middle" style="font-size:9.5px;fill:var(--ink-soft)">6pm</text>
<text x="280" y="164" text-anchor="middle" style="font-size:9.5px;fill:var(--ink-soft)">9pm</text>
</svg>`;

const svgParabola = `<svg viewBox="0 0 300 190" style="width:100%;max-width:300px;height:auto;margin:0 auto;display:block">
<line x1="0" y1="144" x2="300" y2="144" style="stroke:var(--border);stroke-width:1"/>
<line x1="63.33" y1="0" x2="63.33" y2="190" style="stroke:var(--border);stroke-width:1"/>
<polyline points="20,0 41.67,49.5 63.33,90 85,121.5 106.67,144 128.33,157.5 150,162 171.67,157.5 193.33,144 215,121.5 236.67,90 258.33,49.5 280,0" style="fill:none;stroke:var(--accent);stroke-width:2.5"/>
<circle cx="106.67" cy="144" r="3.5" style="fill:var(--ink)"/>
<circle cx="193.33" cy="144" r="3.5" style="fill:var(--ink)"/>
<circle cx="150" cy="162" r="3.5" style="fill:var(--alert)"/>
<text x="106.67" y="158" text-anchor="middle" style="font-size:10px;fill:var(--ink)">(1,0)</text>
<text x="193.33" y="158" text-anchor="middle" style="font-size:10px;fill:var(--ink)">(3,0)</text>
<text x="150" y="177" text-anchor="middle" style="font-size:10px;fill:var(--alert)">(2,-1)</text>
</svg>`;

const svgLinea = `<svg viewBox="0 0 260 150" style="width:100%;max-width:260px;height:auto;margin:0 auto;display:block">
<line x1="0" y1="140" x2="260" y2="140" style="stroke:var(--border);stroke-width:1"/>
<line x1="40" y1="0" x2="40" y2="150" style="stroke:var(--border);stroke-width:1"/>
<line x1="40" y1="116" x2="220" y2="20" style="stroke:var(--accent);stroke-width:2.5"/>
<circle cx="40" cy="116" r="3.5" style="fill:var(--ink)"/><circle cx="220" cy="20" r="3.5" style="fill:var(--ink)"/>
<text x="40" y="130" text-anchor="middle" style="font-size:10px;fill:var(--ink)">(0,2)</text>
<text x="220" y="14" text-anchor="middle" style="font-size:10px;fill:var(--ink)">(4,10)</text>
</svg>`;

const svgTriangulo1 = `<svg viewBox="0 0 200 140" style="width:100%;max-width:220px;height:auto;margin:0 auto;display:block">
<polygon points="30,120 30,20 170,120" style="fill:none;stroke:var(--ink);stroke-width:2"/>
<rect x="30" y="105" width="15" height="15" style="fill:none;stroke:var(--ink);stroke-width:1.2"/>
<text x="15" y="75" text-anchor="middle" style="font-size:12px;fill:var(--ink)">15</text>
<text x="100" y="132" text-anchor="middle" style="font-size:12px;fill:var(--ink)">8</text>
</svg>`;

const svgCirculo = `<svg viewBox="0 0 160 160" style="width:100%;max-width:180px;height:auto;margin:0 auto;display:block">
<circle cx="80" cy="80" r="60" style="fill:none;stroke:var(--ink);stroke-width:2"/>
<line x1="80" y1="80" x2="140" y2="80" style="stroke:var(--accent);stroke-width:2"/>
<text x="112" y="72" text-anchor="middle" style="font-size:12px;fill:var(--accent)">r = 6</text>
<text x="80" y="84" text-anchor="middle" style="font-size:11px;fill:var(--ink-soft)">(0,0)</text>
</svg>`;

/* ---------- contextos de datos (ciencias / sociales) ---------- */

const ctxCarro = `Un carro registra su distancia recorrida a distintos tiempos:<table><tr><th>Tiempo (s)</th><td>0</td><td>10</td><td>20</td><td>30</td></tr><tr><th>Distancia (m)</th><td>0</td><td>100</td><td>220</td><td>300</td></tr></table>`;

const ctxCadena = `Observa la siguiente cadena alimenticia:<br><strong>Pasto → Saltamontes → Rana → Serpiente → Águila</strong>`;

const ctxQuimVar = `Un estudiante mezcla el mismo volumen de ácido con el mismo volumen de una base, usando siempre la misma concentración. Repite el experimento a tres temperaturas distintas (10°C, 25°C y 40°C) y mide el tiempo que tarda en completarse la reacción en cada caso.`;

const ctxSolar = `En un municipio, el porcentaje de hogares con paneles solares aumentó de 5% a 40% en cinco años, mientras que el consumo de electricidad de la red pública disminuyó un 15% en el mismo periodo.`;

const QUESTIONS = [

  // ================= LENGUA Y LITERATURA (30) — 6 lecturas x 5 preguntas =================
  // Cubre lectura literal, inferencial y crítica; tipos de texto: narrativo, expositivo, argumentativo, biográfico, científico-divulgativo y poético.
  {area:"Lenguaje", passage:"ana", q:"¿Cuál es la idea principal del texto?", options:["Ana no logró dormir bien la noche antes del examen","La constancia en el estudio le dio a Ana la seguridad necesaria para enfrentar el examen","Ana prefería jugar con sus amigos en vez de estudiar","El examen resultó ser más fácil de lo esperado"], correct:1, explain:"Todo el texto muestra cómo el estudio constante de Ana le permitió enfrentar el examen con calma, pese a los nervios iniciales."},
  {area:"Lenguaje", passage:"ana", q:"¿Qué significa en el texto la frase “el esfuerzo de hoy sería la tranquilidad de mañana”? (lectura inferencial)", options:["Que debía dormir temprano todos los días","Que trabajar con dedicación en el presente trae beneficios en el futuro","Que el examen sería muy fácil","Que su madre la regañaba sin razón"], correct:1, explain:"La frase expresa que el esfuerzo actual (estudiar) tiene una recompensa futura (enfrentar el examen con tranquilidad)."},
  {area:"Lenguaje", passage:"ana", q:"¿Qué tipo de texto es este fragmento?", options:["Narrativo","Instructivo","Argumentativo","Poético"], correct:0, explain:"El texto cuenta una secuencia de hechos protagonizados por un personaje (Ana), lo cual es propio de un texto narrativo."},
  {area:"Lenguaje", passage:"ana", q:"Según el texto, ¿qué sintió Ana justo antes de empezar el examen? (lectura literal)", options:["Alegría absoluta","Nervios y dificultad para dormir","Indiferencia total","Enojo con su madre"], correct:1, explain:"El texto indica explícitamente que Ana no pudo dormir bien y que los nervios le apretaban el estómago."},
  {area:"Lenguaje", passage:"ana", q:"¿Qué provocó el cambio de miedo a calma en Ana durante el examen? (lectura inferencial)", options:["Que el examen fuera corto","Reconocer un tema que ya había practicado","Que un amigo estuviera cerca","Que el salón fuera cómodo"], correct:1, explain:"El texto dice que al reconocer el tema y recordar un ejemplo practicado, la calma reemplazó al miedo."},

  {area:"Lenguaje", passage:"reciclaje", q:"¿Cuál es la idea principal del texto?", options:["Explicar en qué consiste el reciclaje y sus beneficios ambientales","Convencer al lector de dejar de comprar plástico","Narrar la historia de una fábrica de reciclaje","Describir los colores de los contenedores de basura"], correct:0, explain:"El texto es expositivo: define el reciclaje y explica sus ventajas para el ambiente."},
  {area:"Lenguaje", passage:"reciclaje", q:"Según el texto, ¿qué materiales pueden reciclarse casi indefinidamente sin perder calidad? (lectura literal)", options:["El papel y el plástico","El vidrio y el aluminio","Solo el papel","Ninguno, todos pierden calidad igual"], correct:1, explain:"El texto menciona explícitamente que el vidrio y el aluminio pueden reciclarse casi indefinidamente."},
  {area:"Lenguaje", passage:"reciclaje", q:"¿Qué palabra podría sustituir “vertedero” en el texto sin cambiar el sentido? (significado contextual)", options:["Fábrica","Basurero","Hogar","Tienda"], correct:1, explain:"Un vertedero es el lugar donde se deposita la basura; “basurero” tiene un significado equivalente en este contexto."},
  {area:"Lenguaje", passage:"reciclaje", q:"¿Qué papel juega la separación de basura en el hogar, según el texto? (ideas secundarias)", options:["Facilita que los materiales reciclables lleguen limpios a las plantas de procesamiento","Elimina por completo la necesidad de reciclar","Aumenta la contaminación","No tiene ningún efecto"], correct:0, explain:"Esta es una idea secundaria que apoya la idea principal: explica cómo se logra un reciclaje más eficiente."},
  {area:"Lenguaje", passage:"reciclaje", q:"Este texto es principalmente:", options:["Narrativo","Poético","Expositivo","Argumentativo de opinión personal"], correct:2, explain:"El texto explica hechos y procesos de forma objetiva, sin narrar una historia ni defender una opinión personal: es expositivo."},

  {area:"Lenguaje", passage:"masferrer", q:"¿Cuál es la idea principal del texto?", options:["Presentar la vida e influencia intelectual de Alberto Masferrer","Explicar cómo se fabrica el papel","Narrar un viaje de Masferrer a Europa","Comparar a Masferrer con otro escritor"], correct:0, explain:"El texto es una breve biografía centrada en la vida y el pensamiento de Masferrer."},
  {area:"Lenguaje", passage:"masferrer", q:"Según el texto, ¿qué defendía principalmente Masferrer en sus escritos? (lectura literal)", options:["La justicia social y el bienestar mínimo para vivir con dignidad","La eliminación de la educación pública","El aumento de impuestos","La vida en el campo"], correct:0, explain:"El texto señala que defendía la justicia social y un mínimo de bienestar material y espiritual para todas las personas."},
  {area:"Lenguaje", passage:"masferrer", q:"¿Qué tipo de texto es este fragmento y cuál es su estructura general?", options:["Biográfico: presenta datos de vida en orden y cierra con su legado","Poético: usa rima y verso","Instructivo: da pasos a seguir","Argumentativo: defiende una tesis con contraargumentos"], correct:0, explain:"El texto narra hechos y rasgos de la vida de una persona real, organizados cronológicamente y cerrando con su legado: es biográfico."},
  {area:"Lenguaje", passage:"masferrer", q:"Según el texto, ¿ocupó Masferrer altos cargos políticos durante la mayor parte de su vida? (lectura literal)", options:["Sí, fue presidente del país","No, principalmente influyó a través de su obra escrita","Sí, fue ministro de educación","El texto no lo menciona"], correct:1, explain:"El texto aclara que no ocupó cargos políticos de alto perfil durante la mayor parte de su vida."},
  {area:"Lenguaje", passage:"masferrer", q:"¿A quiénes influyó el pensamiento de Masferrer, según el texto? (lectura literal)", options:["Solo a su familia","A generaciones posteriores de educadores y políticos centroamericanos","A ningún grupo en particular","Solo a escritores europeos"], correct:1, explain:"El texto afirma que su pensamiento influyó en generaciones posteriores de educadores y políticos centroamericanos."},

  {area:"Lenguaje", passage:"redes", q:"¿Cuál es la tesis (postura principal) del autor sobre las redes sociales?", options:["Deben eliminarse por completo","Deben usarse con moderación y responsabilidad","Son completamente inofensivas sin importar el uso","Solo los adultos deberían usarlas"], correct:1, explain:"La tesis es la idea central que el autor defiende: un uso equilibrado, no una eliminación total."},
  {area:"Lenguaje", passage:"redes", q:"¿Cuál de los siguientes es un argumento que el autor usa para sostener su tesis?", options:["El uso excesivo puede afectar la concentración, el sueño y las relaciones cara a cara","Las redes sociales fueron inventadas hace pocos años","A los jóvenes les gusta mucho el teléfono","Los adultos no usan redes sociales"], correct:0, explain:"Este es el argumento (razón) que el autor da para justificar por qué se debe usar las redes sociales con medida."},
  {area:"Lenguaje", passage:"redes", q:"Este texto es principalmente (evaluación de la intención comunicativa):", options:["Narrativo","Argumentativo/de opinión","Biográfico","Poético"], correct:1, explain:"El autor plantea una postura (tesis) y la respalda con razones: es un texto argumentativo, cuya intención es persuadir."},
  {area:"Lenguaje", passage:"redes", q:"¿Qué solución propone el autor frente al problema planteado?", options:["Establecer horarios y priorizar encuentros presenciales","Prohibir el uso de teléfonos a los jóvenes","Ignorar el problema","Usar las redes sociales solo de noche"], correct:0, explain:"El autor sugiere horarios específicos y priorizar los encuentros presenciales como solución."},
  {area:"Lenguaje", passage:"redes", q:"¿Qué significa en el texto la expresión “usada sin límites”? (significado contextual)", options:["Sin control ni horarios definidos","Usada solo por las noches","Usada en exceso de forma educativa","Compartida con toda la familia"], correct:0, explain:"“Sin límites” se refiere a un uso sin control ni horarios, en contraste con el uso “con medida” que propone el autor."},

  {area:"Lenguaje", passage:"sueno", q:"¿Cuál es la idea principal del texto?", options:["El sueño cumple un papel activo en la consolidación de la memoria y el aprendizaje","Dormir es una pérdida de tiempo para los estudiantes","El cerebro se apaga completamente al dormir","Los exámenes deben hacerse de noche"], correct:0, explain:"El texto explica cómo el cerebro procesa y consolida información durante el sueño."},
  {area:"Lenguaje", passage:"sueno", q:"Según el texto, ¿por qué puede ser contraproducente dormir poco antes de un examen? (lectura inferencial)", options:["Porque la información nueva no logra consolidarse sin un descanso adecuado","Porque el cerebro deja de funcionar sin dormir","Porque los exámenes son más difíciles de noche","No hay ninguna razón mencionada"], correct:0, explain:"El texto indica que sin descanso adecuado la información nueva tiene menos oportunidad de consolidarse en la memoria."},
  {area:"Lenguaje", passage:"sueno", q:"¿Qué recomiendan los especialistas según el texto? (lectura literal)", options:["Dormir entre siete y nueve horas, especialmente antes de evaluaciones","Dormir solo cuatro horas para rendir más","Estudiar toda la noche antes del examen","No dormir la siesta nunca"], correct:0, explain:"El texto menciona esta recomendación específica de los especialistas."},
  {area:"Lenguaje", passage:"sueno", q:"Este texto es principalmente:", options:["Narrativo","Informativo/divulgación científica","Poético","Argumentativo de opinión personal"], correct:1, explain:"El texto presenta hallazgos de estudios de forma objetiva: es un texto de divulgación científica."},
  {area:"Lenguaje", passage:"sueno", q:"¿Qué significa “consolidarse” en el contexto del texto? (significado contextual)", options:["Fijarse o afianzarse de manera estable","Desaparecer por completo","Repetirse en voz alta","Acelerarse rápidamente"], correct:0, explain:"En el texto, “consolidarse” se refiere a que la información quede fijada de forma estable en la memoria de largo plazo."},

  {area:"Lenguaje", passage:"poema", q:"¿Cuál es el tema central del poema?", options:["La perseverancia y la paciencia como camino al logro","La fuerza física como única forma de lograr las cosas","La velocidad como clave del éxito","La dureza de las piedras"], correct:0, explain:"El poema compara el trabajo lento del agua sobre la piedra con la constancia de una persona que persigue una meta."},
  {area:"Lenguaje", passage:"poema", q:"¿Qué figura literaria (recurso retórico) se identifica en “el agua ha tallado la piedra más dura”?", options:["Personificación: se le atribuye al agua una acción con intención, como si fuera un ser con voluntad","Onomatopeya","Hipérbole numérica","Rima consonante exclusivamente"], correct:0, explain:"Se atribuye al agua la acción de “tallar” con paciencia, como si actuara con voluntad propia: es una personificación."},
  {area:"Lenguaje", passage:"poema", q:"Este texto es principalmente:", options:["Poético","Expositivo","Biográfico","Instructivo"], correct:0, explain:"El texto usa verso, ritmo e imágenes para expresar una idea, características propias del texto poético."},
  {area:"Lenguaje", passage:"poema", q:"¿Qué relación establece el poema entre el agua y la piedra, y la persona que “insiste despacio”? (lectura inferencial)", options:["Una comparación: así como el agua talla la piedra con constancia, la persona logra sus metas con paciencia","Ninguna relación, son ideas independientes","Que las piedras son más fuertes que las personas","Que el agua y las personas compiten entre sí"], correct:0, explain:"El poema usa la imagen del agua y la piedra como una metáfora de la constancia humana."},
  {area:"Lenguaje", passage:"poema", q:"Según el poema, ¿qué es más importante que la velocidad para lograr algo? (lectura literal)", options:["No dejar de avanzar con constancia","Correr más rápido que los demás","Usar más fuerza","Gritar y hacer ruido"], correct:0, explain:"El verso final indica que “no siempre gana el que corre más rápido, sino quien no deja jamás de avanzar”."},

  // ================= MATEMÁTICA (30) — Álgebra, Funciones, Geometría analítica, Trigonometría, Estadística/Probabilidad =================

  // -- Álgebra (6) --
  {area:"Matemática", q:"Resuelve: (2x³ − 3x² + x) − (x³ + x² − 4x)", options:["x³ − 4x² + 5x","x³ + 4x² − 5x","3x³ − 2x² − 3x","x³ − 4x² − 5x"], correct:0, explain:"Se restan los términos semejantes: 2x³−x³=x³; −3x²−x²=−4x²; x−(−4x)=5x."},
  {area:"Matemática", q:"Multiplica los números complejos: (3+2i)(1−i)", options:["5 − i","5 + i","1 − i","1 + 5i"], correct:0, explain:"(3+2i)(1−i) = 3−3i+2i−2i² = 3−i+2 = 5−i, usando que i²=−1."},
  {area:"Matemática", q:"Resuelve: 2x² + x − 6 = 0", options:["x = 3/2, x = −2","x = −3/2, x = 2","x = 3, x = −2","x = 2, x = −3"], correct:0, explain:"Factorizando: (2x−3)(x+2)=0, de donde x=3/2 o x=−2."},
  {area:"Matemática", q:"Resuelve la inecuación: −2x + 5 ≤ 11", options:["x ≥ −3","x ≤ −3","x ≥ 3","x ≤ 3"], correct:0, explain:"−2x ≤ 6 → al dividir entre −2 se invierte la desigualdad: x ≥ −3."},
  {area:"Matemática", q:"Halla el siguiente término de la sucesión: 3, 7, 11, 15, __", options:["19","18","21","17"], correct:0, explain:"El patrón suma 4 en cada término: 15+4=19."},
  {area:"Matemática", q:"Divide los números complejos: (4+2i) / (1−i)", options:["1 + 3i","1 − 3i","3 + i","2 + 6i"], correct:0, explain:"Multiplicando por el conjugado (1+i)/(1+i): (4+2i)(1+i)/2 = (4+4i+2i−2)/2 = (2+6i)/2 = 1+3i."},

  // -- Funciones (6) --
  {area:"Matemática", q:"¿Cuál es el dominio de f(x) = 1 / (x − 3)?", options:["Todos los reales excepto x = 3","x ≥ 3","Todos los reales","x ≤ 3"], correct:0, explain:"La función no está definida cuando el denominador es 0, es decir cuando x=3."},
  {area:"Matemática", q:"¿Cuál es el rango de f(x) = −(x − 1)² + 4?", options:["y ≤ 4","y ≥ 4","y ≤ 1","Todos los reales"], correct:0, explain:"Como la parábola abre hacia abajo, su punto más alto (vértice) es y=4, por lo que el rango es y ≤ 4."},
  {area:"Matemática", q:"La gráfica de g(x) = f(x − 3) representa, respecto a f(x), un desplazamiento de:", options:["3 unidades a la derecha","3 unidades a la izquierda","3 unidades hacia arriba","3 unidades hacia abajo"], correct:0, explain:"Restar dentro del paréntesis desplaza la gráfica horizontalmente hacia la derecha."},
  {area:"Matemática", q:"Simplifica usando propiedades de exponentes: (x³)² · x⁻¹", options:["x⁵","x⁶","x⁷","x⁴"], correct:0, explain:"(x³)² = x⁶; al multiplicar por x⁻¹ se resta 1 al exponente: x⁶⁻¹ = x⁵."},
  {area:"Matemática", q:"Resuelve la ecuación exponencial: 2^x = 32", options:["5","4","6","16"], correct:0, explain:"32 = 2⁵, por lo tanto x = 5."},
  {area:"Matemática", q:"Resuelve la ecuación logarítmica: log₂(x) = 5", options:["32","10","25","2"], correct:0, explain:"log₂(x)=5 equivale a 2⁵=x, entonces x=32."},

  // -- Geometría analítica (6) --
  {area:"Matemática", q:"Halla la distancia entre los puntos A(1,2) y B(4,6)", options:["5","7","25","6"], correct:0, explain:"d = √((4−1)² + (6−2)²) = √(9+16) = √25 = 5."},
  {area:"Matemática", visual:svgLinea, q:"La recta de la gráfica pasa por los puntos (0,2) y (4,10). ¿Cuál es su pendiente?", options:["1","2","4","8"], correct:1, explain:"pendiente = (10−2)/(4−0) = 8/4 = 2."},
  {area:"Matemática", visual:svgCirculo, q:"La gráfica muestra una circunferencia con centro en el origen y radio 6. ¿Cuál es su ecuación?", options:["x² + y² = 36","x² + y² = 6","x² + y² = 12","x² − y² = 36"], correct:0, explain:"La ecuación de una circunferencia con centro (0,0) y radio r es x²+y²=r²; aquí r=6, entonces x²+y²=36."},
  {area:"Matemática", q:"La ecuación x²/9 + (y−1)²/4 = 1 representa una elipse. ¿Cuál es su centro?", options:["(0,1)","(1,0)","(9,4)","(3,2)"], correct:0, explain:"En la forma estándar (x−h)²/a² + (y−k)²/b² = 1, el centro es (h,k); aquí h=0, k=1."},
  {area:"Matemática", visual:svgParabola, q:"La gráfica muestra f(x) = x² − 4x + 3. Escrita en su forma de vértice (x−h)² + k, esta función es:", options:["(x−2)² − 1","(x−2)² + 1","(x+2)² − 1","(x−4)² − 1"], correct:0, explain:"Completando el cuadrado: x²−4x+3 = (x−2)²−1, lo cual coincide con el vértice (2,−1) mostrado en la gráfica."},
  {area:"Matemática", q:"¿Cuál de las siguientes ecuaciones representa una hipérbola?", options:["x²/16 − y²/9 = 1","x²/16 + y²/9 = 1","x² + y² = 16","y = x² − 9"], correct:0, explain:"Una hipérbola tiene la forma x²/a² − y²/b² = 1 (resta entre los términos), a diferencia de la elipse y la circunferencia."},

  // -- Trigonometría (6) --
  {area:"Matemática", q:"¿Cuál es el valor de sen(30°)?", options:["1/2","√3/2","√2/2","1"], correct:0, explain:"sen(30°) = 1/2 es un valor conocido de los ángulos notables."},
  {area:"Matemática", visual:svgTriangulo1, q:"Observa el triángulo rectángulo. Si sus catetos miden 8 cm y 15 cm, ¿cuánto mide la hipotenusa?", options:["17 cm","23 cm","19 cm","21 cm"], correct:0, explain:"√(8²+15²) = √(64+225) = √289 = 17 cm."},
  {area:"Matemática", q:"En un triángulo, el lado a=10 y los ángulos A=30°, B=45°. Usa el teorema del seno (a/senA = b/senB) para hallar el lado b.", options:["≈14.1","≈10","≈7.1","≈17.3"], correct:0, explain:"b = a·senB/senA = 10 × sen(45°)/sen(30°) ≈ 10×0.7071/0.5 ≈ 14.1."},
  {area:"Matemática", q:"Un triángulo tiene lados b=7, c=9 y un ángulo A=60° entre ellos. Halla el lado a usando el teorema del coseno: a² = b² + c² − 2bc·cosA", options:["≈8.2","≈11.4","≈7.9","≈13.0"], correct:0, explain:"a² = 49+81−2(7)(9)(0.5) = 130−63 = 67 → a ≈ √67 ≈ 8.2."},
  {area:"Matemática", q:"Si sen(θ) = 0.6 y θ es agudo, halla cos(θ) usando la identidad sen²θ + cos²θ = 1", options:["0.8","0.4","0.6","1.0"], correct:0, explain:"cos(θ) = √(1−0.36) = √0.64 = 0.8."},
  {area:"Matemática", q:"Desde un punto en el suelo a 12 m de la base de un poste, el ángulo de elevación a su punta es 40°. ¿Cuál es la altura aproximada del poste? (usa tan(40°) ≈ 0.839)", options:["≈10.1 m","≈9.2 m","≈12.0 m","≈15.4 m"], correct:0, explain:"altura = 12 × tan(40°) ≈ 12 × 0.839 ≈ 10.1 m."},

  // -- Estadística y probabilidad (6) --
  {area:"Matemática", visual:svgVentas, q:"La gráfica muestra las ventas (en miles de $) de una tienda de enero a mayo. ¿En qué mes se registraron las mayores ventas?", options:["Enero","Febrero","Marzo","Abril"], correct:3, explain:"La barra más alta corresponde a abril, con 40 mil dólares."},
  {area:"Matemática", visual:svgTemp, q:"Según la gráfica de temperatura, ¿cuál fue el rango (máximo − mínimo) de temperatura durante el día?", options:["9°C","11°C","13°C","15°C"], correct:2, explain:"El rango, una medida de dispersión, es 31°C (máx) − 18°C (mín) = 13°C."},
  {area:"Matemática", q:"Halla la mediana de: 2, 5, 9, 3, 7, 12, 4", options:["5","4","7","9"], correct:0, explain:"Ordenando: 2,3,4,5,7,9,12. El valor central (4to de 7) es 5."},
  {area:"Matemática", q:"Halla la moda de: 3, 5, 5, 2, 5, 8, 2", options:["5","2","3","8"], correct:0, explain:"El valor 5 aparece 3 veces, más que cualquier otro: es la moda."},
  {area:"Matemática", q:"Si A={1,2,3,4} y B={3,4,5,6}, ¿cuál es A ∩ B (intersección)?", options:["{3,4}","{1,2,5,6}","{1,2,3,4,5,6}","{ } (conjunto vacío)"], correct:0, explain:"La intersección contiene los elementos que están en ambos conjuntos: 3 y 4."},
  {area:"Matemática", q:"Se lanza una moneda y un dado al mismo tiempo. ¿Cuántos resultados posibles hay en el espacio muestral?", options:["12","8","6","36"], correct:0, explain:"Por el principio de conteo: 2 resultados de la moneda × 6 del dado = 12 resultados posibles."},

  // ================= SOCIALES (30) — Investigación y ciencias sociales, Desarrollo histórico-cultural, Sociedad y democracia =================

  // -- Investigación y ciencias sociales (10) --
  {area:"Sociales", q:"¿Cuál es el primer paso del método científico aplicado a una investigación social?", options:["Formular una pregunta o problema de investigación","Publicar los resultados","Recolectar la bibliografía final","Aplicar la ley correspondiente"], correct:0, explain:"Todo proceso de investigación comienza por identificar y formular el problema que se quiere estudiar."},
  {area:"Sociales", q:"Un investigador social entrevista a 50 personas sobre sus hábitos de consumo. ¿Qué técnica de investigación está utilizando principalmente?", options:["La entrevista","La observación documental","El experimento de laboratorio","El censo nacional"], correct:0, explain:"Preguntar directamente a las personas mediante un diálogo estructurado es la técnica de la entrevista."},
  {area:"Sociales", q:"¿Qué caracteriza a un análisis objetivo de la realidad social?", options:["Basarse en datos y evidencia, evitando opiniones personales sin sustento","Basarse únicamente en la opinión del investigador","Ignorar las fuentes de información","Repetir lo que otros han dicho sin verificar"], correct:0, explain:"La objetividad implica apoyarse en evidencia verificable en lugar de juicios personales sin respaldo."},
  {area:"Sociales", q:"Si una investigación concluye que “el 70% de los jóvenes encuestados usa redes sociales más de 4 horas al día”, este dato representa:", options:["Un resultado obtenido mediante investigación social","Una opinión personal del investigador","Una ley aprobada por el Estado","Un mito popular sin sustento"], correct:0, explain:"Es un dato cuantitativo obtenido a través de un proceso de investigación (encuesta)."},
  {area:"Sociales", q:"¿Cuál de las siguientes es una técnica de investigación social?", options:["La encuesta","La fotosíntesis","La titulación química","La ecuación cuadrática"], correct:0, explain:"La encuesta es una técnica propia de la investigación social; las demás pertenecen a otras disciplinas."},
  {area:"Sociales", q:"Al interpretar los resultados de una investigación social, es importante:", options:["Relacionar los datos obtenidos con el contexto social que se estudia","Ignorar el contexto y solo mirar los números","Cambiar los datos si no gustan al investigador","Evitar comparar los resultados con otros estudios"], correct:0, explain:"Los datos por sí solos no bastan: deben interpretarse en relación con el contexto social para tener sentido."},
  {area:"Sociales", q:"La observación como método de investigación social consiste en:", options:["Registrar sistemáticamente hechos o comportamientos tal como ocurren","Preguntar directamente a las personas mediante un cuestionario","Realizar experimentos controlados en laboratorio","Analizar únicamente documentos históricos"], correct:0, explain:"La observación implica registrar de forma sistemática lo que ocurre, sin intervenir directamente."},
  {area:"Sociales", q:"¿Por qué es importante que una muestra de investigación sea representativa?", options:["Porque permite generalizar los resultados a un grupo más amplio con mayor confianza","Porque hace la investigación más rápida sin importar la calidad","Porque evita tener que analizar los datos","Porque garantiza que todos estén de acuerdo con el investigador"], correct:0, explain:"Una muestra representativa refleja las características del grupo completo, permitiendo generalizar con confianza."},
  {area:"Sociales", q:"Un texto que presenta datos, gráficos y conclusiones basadas en un estudio sobre un problema social es un ejemplo de:", options:["Un informe de investigación social","Un cuento","Un poema","Un decreto legislativo"], correct:0, explain:"Este tipo de documento, con datos y conclusiones basadas en evidencia, es un informe de investigación."},
  {area:"Sociales", q:"¿Qué diferencia principal existe entre un dato y una opinión dentro de una investigación social?", options:["El dato se basa en evidencia verificable; la opinión refleja un punto de vista personal","No existe ninguna diferencia entre ambos","El dato siempre es falso y la opinión siempre es verdadera","La opinión se puede medir con precisión y el dato no"], correct:0, explain:"Un dato puede comprobarse con evidencia, mientras que una opinión expresa una valoración personal."},

  // -- Desarrollo histórico-cultural (10) --
  {area:"Sociales", q:"¿En qué año se firmaron los Acuerdos de Paz de Chapultepec que pusieron fin al conflicto armado en El Salvador?", options:["1979","1992","1989","2001"], correct:1, explain:"Los Acuerdos de Paz se firmaron el 16 de enero de 1992 en el Castillo de Chapultepec, México."},
  {area:"Sociales", q:"¿Qué caracteriza a un modelo económico de libre mercado?", options:["Los precios se determinan principalmente por la oferta y la demanda","El Estado fija todos los precios y salarios","No existe el comercio internacional","La producción es planificada completamente por el gobierno"], correct:0, explain:"En un modelo de libre mercado, la interacción entre oferta y demanda determina los precios."},
  {area:"Sociales", q:"La Guerra Fría, uno de los principales conflictos ideológicos del siglo XX, enfrentó principalmente a:", options:["Estados Unidos (capitalismo) y la Unión Soviética (comunismo)","Inglaterra y Francia por territorios coloniales","España y Portugal por rutas comerciales","China y Japón por recursos naturales"], correct:0, explain:"La Guerra Fría fue la confrontación ideológica y política entre el bloque capitalista liderado por EE.UU. y el bloque comunista liderado por la URSS."},
  {area:"Sociales", q:"¿Qué se entiende por “globalización”?", options:["El proceso de creciente interconexión económica, cultural y tecnológica entre países","La eliminación total de las fronteras políticas","Un modelo económico exclusivo de un solo país","La reducción del comercio internacional"], correct:0, explain:"La globalización es el proceso de creciente interdependencia entre países en lo económico, cultural y tecnológico."},
  {area:"Sociales", q:"El intercambio de bienes entre países que exportan lo que producen e importan lo que no fabrican se conoce como:", options:["Flujo comercial internacional","Aislamiento económico","Proteccionismo total","Autarquía"], correct:0, explain:"Este intercambio de bienes entre naciones es lo que se conoce como flujo o comercio internacional."},
  {area:"Sociales", q:"¿Cuál de las siguientes es una medida económica que un gobierno puede aplicar para estimular la economía local?", options:["Reducir impuestos o dar incentivos a pequeñas empresas","Prohibir toda actividad comercial","Eliminar la moneda nacional sin reemplazo","Cerrar las fronteras al turismo"], correct:0, explain:"Reducir impuestos o dar incentivos son medidas económicas comunes para estimular la actividad productiva local."},
  {area:"Sociales", q:"Una cooperativa de artesanos locales que se organiza para exportar sus productos es un ejemplo de:", options:["Una iniciativa económica local","Una política exclusivamente estatal","Un conflicto ideológico","Una transformación tecnológica"], correct:0, explain:"Se trata de una iniciativa que surge de la propia comunidad para generar desarrollo económico local."},
  {area:"Sociales", q:"¿Qué papel tuvo la industrialización en las transformaciones económicas, sociales y culturales del siglo XX?", options:["Impulsó cambios profundos en la forma de producir, trabajar y vivir en las ciudades","No tuvo ningún efecto en la sociedad","Solo afectó a los países sin fábricas","Detuvo el crecimiento económico mundial"], correct:0, explain:"La industrialización transformó profundamente los modos de producción, el trabajo y la vida urbana."},
  {area:"Sociales", q:"El desarrollo económico de El Salvador en las últimas décadas ha estado influenciado principalmente por:", options:["Las remesas familiares, el comercio y los servicios","La exportación exclusiva de petróleo","La producción industrial pesada a gran escala","El aislamiento comercial total"], correct:0, explain:"Las remesas, el comercio y los servicios son componentes centrales de la economía salvadoreña reciente."},
  {area:"Sociales", q:"¿Qué relación existe entre la globalización y las transformaciones mundiales del siglo XX y XXI?", options:["La globalización aceleró el intercambio de bienes, ideas y tecnología entre países","La globalización eliminó por completo el comercio entre naciones","No existe ninguna relación entre ambos conceptos","La globalización solo afecta a los países más pequeños"], correct:0, explain:"La globalización ha sido uno de los principales motores de las transformaciones económicas y culturales recientes."},

  // -- Sociedad y democracia (10) --
  {area:"Sociales", q:"¿Cuál de los siguientes es un derecho humano reconocido universalmente?", options:["El derecho a la educación","El derecho a no pagar impuestos","El derecho a ocupar cualquier cargo sin requisitos","El derecho a evitar las leyes del país"], correct:0, explain:"La educación es reconocida como un derecho humano fundamental en las declaraciones internacionales."},
  {area:"Sociales", q:"Votar en las elecciones y respetar las leyes son ejemplos de:", options:["Deberes y responsabilidades ciudadanas","Derechos exclusivos del gobierno","Privilegios de unos pocos ciudadanos","Obligaciones solo para los funcionarios públicos"], correct:0, explain:"Estas acciones son responsabilidades que todo ciudadano debe cumplir en una democracia."},
  {area:"Sociales", q:"¿Qué acción representa una medida de protección del medio ambiente?", options:["Reducir la contaminación y cuidar los recursos naturales","Talar bosques sin control","Aumentar el uso de plásticos de un solo uso sin reciclar","Ignorar el manejo adecuado de desechos"], correct:0, explain:"Reducir la contaminación y cuidar los recursos naturales son acciones directas de protección ambiental."},
  {area:"Sociales", q:"Los recursos naturales renovables se diferencian de los no renovables en que:", options:["Los renovables pueden regenerarse con el tiempo, los no renovables no","Ambos se agotan exactamente igual","Los no renovables se regeneran más rápido","No existe ninguna diferencia entre ambos"], correct:0, explain:"Los recursos renovables (como el agua o el bosque, bien gestionados) pueden regenerarse; los no renovables (como el petróleo) no."},
  {area:"Sociales", q:"¿Cómo ha impactado el desarrollo tecnológico en la vida cotidiana de las personas?", options:["Ha transformado la forma de comunicarse, trabajar y acceder a la información","No ha generado ningún cambio significativo","Solo ha afectado a las grandes empresas","Ha eliminado por completo el uso de dinero"], correct:0, explain:"La tecnología ha cambiado de forma profunda la comunicación, el trabajo y el acceso a la información."},
  {area:"Sociales", q:"La digitalización económica se refiere principalmente a:", options:["El uso de tecnologías digitales en los procesos comerciales y financieros","La eliminación total del dinero físico en todos los países","Un tipo de moneda antigua","Una ley ambiental específica"], correct:0, explain:"La digitalización económica implica incorporar tecnologías digitales en el comercio, los pagos y las finanzas."},
  {area:"Sociales", q:"¿Cuál es un efecto social del avance tecnológico que se debe analizar con atención?", options:["La posible brecha digital entre quienes tienen y no tienen acceso a la tecnología","La eliminación de todos los problemas sociales","El fin de la necesidad de educación","La desaparición completa de los empleos"], correct:0, explain:"La brecha digital es un efecto social relevante: no todas las personas tienen igual acceso a la tecnología."},
  {area:"Sociales", q:"En una democracia, la división de poderes (Ejecutivo, Legislativo y Judicial) tiene como propósito principal:", options:["Evitar la concentración excesiva de poder en un solo órgano del Estado","Dar todo el poder a un solo presidente","Eliminar la necesidad de leyes","Reducir la participación ciudadana"], correct:0, explain:"La división de poderes busca equilibrar y controlar el poder del Estado, evitando que se concentre en un solo órgano."},
  {area:"Sociales", q:"¿Qué responsabilidad ciudadana se relaciona directamente con el cuidado de los recursos naturales?", options:["Promover y practicar el consumo responsable y el reciclaje","Evitar pagar impuestos","No participar en ninguna actividad comunitaria","Ignorar las leyes ambientales"], correct:0, explain:"El consumo responsable y el reciclaje son acciones ciudadanas directamente ligadas al cuidado ambiental."},
  {area:"Sociales", context:ctxSolar, q:"Según el caso presentado, ¿qué conclusión se puede interpretar razonablemente?", options:["La adopción de tecnología renovable está reduciendo la dependencia de la red eléctrica tradicional","El municipio dejó de usar electricidad por completo","Los paneles solares no tuvieron ningún efecto en el consumo eléctrico","La población abandonó el uso de energía"], correct:0, explain:"El aumento de paneles solares coincide con una disminución del consumo de la red pública, lo que sugiere una relación entre ambos datos."},

  // ================= CIENCIA Y TECNOLOGÍA (30) — Física, Química, Biología =================

  // -- Física (10) --
  {area:"Ciencias", q:"¿Cuál es la unidad de medida del Sistema Internacional para la masa?", options:["Kilogramo","Litro","Metro","Segundo"], correct:0, explain:"El kilogramo (kg) es la unidad base del Sistema Internacional para la masa."},
  {area:"Ciencias", q:"Si 3 obreros construyen un muro en 12 días, ¿cuántos días tardarán 6 obreros trabajando al mismo ritmo? (proporcionalidad inversa)", options:["6 días","24 días","4 días","18 días"], correct:0, explain:"A doble número de obreros, la mitad del tiempo: (3×12)/6 = 6 días."},
  {area:"Ciencias", context:ctxCarro, q:"Según los datos, ¿cuál fue la velocidad promedio del carro entre los segundos 0 y 30?", options:["10 m/s","15 m/s","22 m/s","30 m/s"], correct:0, explain:"velocidad = distancia/tiempo = 300 m / 30 s = 10 m/s."},
  {area:"Ciencias", q:"¿Qué forma de transferencia de calor ocurre principalmente en los líquidos y gases mediante el movimiento de sus partículas?", options:["Convección","Conducción","Radiación","Sublimación"], correct:0, explain:"La convección transfiere calor mediante el movimiento de las partículas de un fluido (líquido o gas)."},
  {area:"Ciencias", q:"En un circuito eléctrico en serie, si se interrumpe en un punto, ¿qué sucede con el resto del circuito?", options:["Todo el circuito deja de funcionar","Solo la parte anterior al punto deja de funcionar","No hay ningún efecto en el circuito","El circuito funciona con mayor intensidad"], correct:0, explain:"En un circuito en serie existe un único camino para la corriente; si se interrumpe en un punto, todo el circuito se abre."},
  {area:"Ciencias", q:"¿Cuál es la energía cinética de un objeto de 4 kg que se mueve a 3 m/s? (Ec = ½mv²)", options:["18 J","12 J","36 J","24 J"], correct:0, explain:"Ec = ½ × 4 × 3² = ½ × 4 × 9 = 18 J."},
  {area:"Ciencias", q:"¿Qué determina principalmente el tono (agudo o grave) de un sonido?", options:["Su frecuencia","Su velocidad","Su color","Su temperatura"], correct:0, explain:"La frecuencia de una onda sonora determina si el sonido se percibe como agudo (alta frecuencia) o grave (baja frecuencia)."},
  {area:"Ciencias", q:"Según el principio de Arquímedes, un objeto sumergido en un líquido experimenta un empuje hacia arriba igual a:", options:["El peso del líquido desalojado por el objeto","El peso total del objeto","La densidad del objeto","El volumen del recipiente"], correct:0, explain:"El principio de Arquímedes establece que el empuje es igual al peso del fluido desplazado por el objeto sumergido."},
  {area:"Ciencias", visual:svgTemp, q:"La gráfica muestra la temperatura (°C) registrada durante un día. ¿Entre qué par de horas consecutivas aumentó más rápidamente la temperatura?", options:["6am a 9am","9am a 12pm","12pm a 3pm","6pm a 9pm"], correct:1, explain:"De 9am a 12pm la temperatura subió de 22° a 29°, un aumento de 7°, mayor que en los otros intervalos."},
  {area:"Ciencias", q:"Cuando un material se calienta y aumenta su longitud o volumen, este fenómeno se llama:", options:["Dilatación térmica","Contracción térmica","Sublimación","Condensación"], correct:0, explain:"La dilatación térmica es el aumento de tamaño de un material al calentarse."},

  // -- Química (10) --
  {area:"Ciencias", q:"Un átomo que ha ganado o perdido electrones, adquiriendo carga eléctrica, se llama:", options:["Ion","Isótopo","Molécula","Compuesto neutro"], correct:0, explain:"Un ion es un átomo (o grupo de átomos) con carga eléctrica debido a la ganancia o pérdida de electrones."},
  {area:"Ciencias", q:"Cuando el hielo se derrite y se convierte en agua líquida, ocurre un cambio:", options:["Físico, porque no cambia la composición de la sustancia","Químico, porque se forma una sustancia nueva","Nuclear","Biológico"], correct:0, explain:"El cambio de estado no altera la composición química del agua: sigue siendo H2O, por lo que es un cambio físico."},
  {area:"Ciencias", q:"¿Qué significa que una sustancia sea “soluble” en agua?", options:["Que puede disolverse en el agua formando una mezcla homogénea","Que flota siempre en el agua","Que cambia de color al contacto con el agua","Que nunca puede mezclarse con el agua"], correct:0, explain:"La solubilidad es la capacidad de una sustancia de disolverse en otra, formando una mezcla homogénea."},
  {area:"Ciencias", q:"Una sustancia con pH menor a 7 se clasifica como:", options:["Ácida","Básica o alcalina","Neutra","Ninguna de las anteriores"], correct:0, explain:"En la escala de pH, los valores menores a 7 corresponden a sustancias ácidas."},
  {area:"Ciencias", q:"Los hidrocarburos son compuestos formados principalmente por átomos de:", options:["Carbono e hidrógeno","Oxígeno y nitrógeno","Sodio y cloro","Calcio y fósforo"], correct:0, explain:"Los hidrocarburos están compuestos únicamente por carbono e hidrógeno."},
  {area:"Ciencias", q:"La combustión de un hidrocarburo en presencia de oxígeno produce principalmente:", options:["Dióxido de carbono y agua","Solo agua","Solo oxígeno","Nitrógeno puro"], correct:0, explain:"La combustión completa de un hidrocarburo con oxígeno produce dióxido de carbono (CO₂) y agua (H₂O)."},
  {area:"Ciencias", q:"En la reacción 2H₂ + O₂ → 2H₂O, ¿qué tipo de reacción química se representa?", options:["Síntesis o combinación","Descomposición","Sustitución simple","Neutralización"], correct:0, explain:"Dos sustancias (hidrógeno y oxígeno) se combinan para formar una sola (agua): es una reacción de síntesis."},
  {area:"Ciencias", q:"En una reacción de oxidación-reducción (REDOX), a la sustancia que pierde electrones (se oxida) se le llama:", options:["Agente reductor","Agente oxidante","Catalizador","Producto neutro"], correct:0, explain:"El agente reductor es la sustancia que pierde electrones (se oxida) y hace que otra se reduzca."},
  {area:"Ciencias", q:"Según la ley de conservación de la masa, en una reacción química cerrada, la masa total de los reactivos:", options:["Es igual a la masa total de los productos","Siempre aumenta","Siempre disminuye a la mitad","Desaparece parcialmente"], correct:0, explain:"La masa no se crea ni se destruye en una reacción química: la masa de reactivos es igual a la de productos."},
  {area:"Ciencias", context:ctxQuimVar, q:"En este experimento, ¿cuál es la variable independiente?", options:["La temperatura","El tiempo de reacción","El volumen de ácido","El tipo de recipiente"], correct:0, explain:"La temperatura es la condición que el estudiante cambia intencionalmente entre las pruebas para observar su efecto en la velocidad de reacción."},

  // -- Biología (10) --
  {area:"Ciencias", q:"El ADN es la molécula que contiene principalmente:", options:["La información genética de un organismo","Solo agua y sales minerales","Glucosa para energía inmediata","Oxígeno para la respiración celular"], correct:0, explain:"El ADN almacena la información genética que se transmite de generación en generación."},
  {area:"Ciencias", q:"¿Cuál es la unidad básica estructural y funcional de los seres vivos?", options:["La célula","El átomo","El tejido","El órgano"], correct:0, explain:"La célula es considerada la unidad básica estructural y funcional de todos los organismos vivos."},
  {area:"Ciencias", q:"¿A qué reino pertenecen los organismos unicelulares procariotas, sin núcleo definido, como las bacterias?", options:["Monera","Animalia","Fungi","Plantae"], correct:0, explain:"Las bacterias, al ser unicelulares y procariotas, se clasifican en el reino Monera."},
  {area:"Ciencias", q:"Los organismos que solo pueden observarse con la ayuda de un microscopio, como las bacterias y muchos protozoos, se denominan:", options:["Microorganismos","Macroorganismos","Vertebrados","Plantas superiores"], correct:0, explain:"Estos organismos, invisibles a simple vista, se agrupan bajo el término microorganismos."},
  {area:"Ciencias", q:"En la fotosíntesis, las plantas utilizan principalmente:", options:["Dióxido de carbono y agua, con luz solar, para producir glucosa y oxígeno","Oxígeno y glucosa para producir dióxido de carbono","Nitrógeno del aire para producir proteínas","Solo agua para producir energía"], correct:0, explain:"La fotosíntesis convierte CO₂ y agua en glucosa y oxígeno, usando la energía luminosa captada por la clorofila."},
  {area:"Ciencias", context:ctxCadena, q:"En esta cadena alimenticia, ¿qué papel cumple el pasto y cómo fluye la energía a lo largo de la cadena?", options:["El pasto es el productor; la energía fluye del productor hacia los consumidores sucesivos","El pasto es un consumidor secundario","La energía fluye igual en todas direcciones","El pasto no participa en el flujo de energía"], correct:0, explain:"El pasto, como productor, captura la energía solar y la transfiere a los consumidores que lo siguen en la cadena."},
  {area:"Ciencias", q:"Un ecosistema está formado por:", options:["Los seres vivos y su ambiente físico interactuando entre sí","Solo los seres vivos de un lugar","Solo los factores físicos como el agua y el suelo","Únicamente las plantas de una región"], correct:0, explain:"Un ecosistema incluye tanto a los seres vivos (factores bióticos) como a los elementos físicos (factores abióticos) y sus interacciones."},
  {area:"Ciencias", q:"Cuando dos especies se benefician mutuamente al vivir juntas, como ciertas abejas y las flores que polinizan, esta relación ecológica se llama:", options:["Mutualismo","Depredación","Parasitismo","Competencia destructiva"], correct:0, explain:"El mutualismo es una relación en la que ambas especies obtienen un beneficio."},
  {area:"Ciencias", q:"¿Cuál de las siguientes actividades humanas contribuye principalmente al cambio climático mediante el aumento de gases de efecto invernadero?", options:["La quema de combustibles fósiles","El reciclaje de papel","La reforestación","El uso de energía solar"], correct:0, explain:"La quema de combustibles fósiles libera grandes cantidades de CO₂, un gas de efecto invernadero."},
  {area:"Ciencias", q:"¿Cuál de las siguientes se considera una evidencia científica de la evolución de las especies?", options:["Los registros fósiles que muestran cambios graduales a lo largo del tiempo","Las leyendas populares sobre animales","Los horóscopos","Las recetas de cocina tradicionales"], correct:0, explain:"El registro fósil es una de las principales evidencias científicas que respaldan la teoría de la evolución."},
];

const AREAS = ["Lenguaje","Matemática","Sociales","Ciencias"];
const EXAM_MINUTES = 45;                 // 4 exámenes x 45 min = 180 min
const EXAM_SECONDS = EXAM_MINUTES * 60;
const EXAMS = {};
AREAS.forEach(a => EXAMS[a] = QUESTIONS.filter(q => q.area === a));

/* ---------- Acceso y registro de estudiantes ---------- */
const PASSWORD   = 'Practica2026';
const DOMAIN     = '@clases.edu.sv';
const DB_KEY     = 'avanzo_registros_v1';
const SESSION_KEY= 'avanzo_sesion_v1';

const el = (id) => document.getElementById(id);
const esc = (s) => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const LETTERS = ['A','B','C','D'];

let db = {};
try { db = JSON.parse(localStorage.getItem(DB_KEY)) || {}; } catch(e){ db = {}; }
let user = null;      // correo del estudiante con sesión activa
let ex = null;        // examen en curso: {area, qs, e, handle, active}

function persist(){
  try { localStorage.setItem(DB_KEY, JSON.stringify(db)); return true; }
  catch(e){ return false; }
}
const rec = () => db[user];

function tally(qs, answers){
  let correct = 0, answered = 0;
  qs.forEach((q,i) => {
    if(answers[i] !== null && answers[i] !== undefined){ answered++; if(answers[i] === q.correct) correct++; }
  });
  return {correct, answered, total: qs.length};
}

function fmtTime(s){
  const m = Math.floor(s/60).toString().padStart(2,'0');
  const sec = (s%60).toString().padStart(2,'0');
  return `${m}:${sec}`;
}
function fmtDate(iso){
  if(!iso) return '';
  return new Date(iso).toLocaleString('es-SV', {dateStyle:'short', timeStyle:'short'});
}

/* ---------- Pantallas ---------- */
function showScreen(id){
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  el(id).classList.add('active');
  updateHead(id);
  window.scrollTo(0,0);
}

function updateHead(screenId){
  const tag = el('head-tag');
  if(!user){ tag.textContent = 'EXAMEN DE PRÁCTICA'; return; }
  const name = esc(rec().nombre);
  if(screenId === 'screen-exam'){ tag.innerHTML = name; }
  else { tag.innerHTML = `${name}<button class="link-btn" id="btn-logout" type="button">Salir</button>`;
         el('btn-logout').addEventListener('click', logout); }
}

function logout(){
  sessionStorage.removeItem(SESSION_KEY);
  user = null; ex = null;
  el('login-form').reset();
  showScreen('screen-login');
}

/* ---------- Login ---------- */
el('login-form').addEventListener('submit', (ev) => {
  ev.preventDefault();
  const err = el('login-error');
  const fail = (m) => { err.textContent = m; err.classList.add('show'); };
  err.classList.remove('show');

  const email = el('f-email').value.trim().toLowerCase();
  const pass  = el('f-pass').value;
  const name  = el('f-name').value.trim().replace(/\s+/g,' ');

  if(!/^[^\s@]+@clases\.edu\.sv$/.test(email)) return fail('Usa tu correo institucional (termina en ' + DOMAIN + ').');
  if(pass !== PASSWORD) return fail('Contraseña incorrecta.');

  if(!db[email]){
    if(name.length < 3) return fail('Es tu primer ingreso: escribe tu nombre completo para crear tu registro.');
    db[email] = { nombre: name, email, creado: new Date().toISOString(), exams: {} };
    if(!persist()){ delete db[email]; return fail('Tu navegador bloquea el almacenamiento y no se podría guardar tu registro. Desactiva el modo privado e intenta de nuevo.'); }
  }
  user = email;
  sessionStorage.setItem(SESSION_KEY, email);
  enterHome();
});

/* ---------- Inicio: lista de exámenes ---------- */
function closeStaleExams(){
  // Un examen "en curso" sin pestaña activa significa que se cerró o recargó la página: se anula.
  Object.keys(rec().exams).forEach(area => {
    if(rec().exams[area].status === 'encurso') voidExam(area, 'Se cerró o recargó la página durante el examen');
  });
}

function voidExam(area, motivo){
  const e = rec().exams[area];
  const t = tally(EXAMS[area], e.answers);
  e.status = 'anulado';
  e.motivo = motivo;
  e.correct = t.correct; e.answered = t.answered; e.total = t.total;
  e.fin = new Date().toISOString();
  persist();
}

function enterHome(){
  closeStaleExams();
  renderHome();
  showScreen('screen-home');
}

function renderHome(){
  const done = AREAS.filter(a => rec().exams[a] && rec().exams[a].status === 'completado').length;
  el('stat-row').innerHTML = `
    <div class="stat"><div class="num">${AREAS.length}</div><div class="label">exámenes (uno por área)</div></div>
    <div class="stat"><div class="num">${QUESTIONS.length}</div><div class="label">preguntas totales</div></div>
    <div class="stat"><div class="num">${done}/${AREAS.length}</div><div class="label">completados</div></div>
  `;

  el('exam-list').innerHTML = AREAS.map(a => {
    const e = rec().exams[a];
    const n = EXAMS[a].length;
    let cls = '', right = '';
    if(!e){
      right = `<button class="mini-btn" data-start="${esc(a)}" type="button">Iniciar</button>`;
    } else if(e.status === 'completado'){
      cls = 'done';
      right = `<span class="badge ok">${Math.round(e.correct/e.total*100)}% · ${e.correct}/${e.total}</span>
               <button class="mini-btn ghost" data-results="${esc(a)}" type="button">Ver resultados</button>`;
    } else {
      cls = 'void';
      right = `<span class="badge bad">Anulado</span>`;
    }
    const meta = !e ? `${n} preguntas · ${EXAM_MINUTES} min`
      : e.status === 'completado' ? `Entregado ${fmtDate(e.fin)}`
      : `${e.answered}/${e.total} respondidas · ${esc(e.motivo)}`;
    return `<div class="exam-card ${cls}">
      <div><div class="ec-name">${esc(a)}</div><div class="ec-meta">${meta}</div></div>
      <div class="ec-right">${right}</div>
    </div>`;
  }).join('');

  el('exam-list').querySelectorAll('[data-start]').forEach(b =>
    b.addEventListener('click', () => showBrief(b.getAttribute('data-start'))));
  el('exam-list').querySelectorAll('[data-results]').forEach(b =>
    b.addEventListener('click', () => showResults(b.getAttribute('data-results'))));
}

/* ---------- Instrucciones previas ---------- */
let briefArea = null;
function showBrief(area){
  briefArea = area;
  el('brief-title').textContent = `Examen de ${area}`;
  el('brief-meta').textContent = `${EXAMS[area].length} preguntas · ${EXAM_MINUTES} minutos`;
  showScreen('screen-brief');
}
el('btn-brief-go').addEventListener('click', () => startExam(briefArea));
el('btn-brief-back').addEventListener('click', () => { renderHome(); showScreen('screen-home'); });

/* ---------- Examen ---------- */
function startExam(area){
  if(rec().exams[area]) { renderHome(); showScreen('screen-home'); return; } // un solo intento
  const qs = EXAMS[area];
  const e = { status:'encurso', answers:new Array(qs.length).fill(null), current:0,
              timeLeft:EXAM_SECONDS, inicio:new Date().toISOString() };
  rec().exams[area] = e;
  persist();
  ex = { area, qs, e, active:true, handle:null };
  showScreen('screen-exam');
  renderQuestion();
  el('exam-timer').textContent = fmtTime(e.timeLeft);
  ex.handle = setInterval(tick, 1000);
}

function tick(){
  if(!ex || !ex.active) return;
  ex.e.timeLeft--;
  const t = el('exam-timer');
  t.textContent = fmtTime(Math.max(ex.e.timeLeft,0));
  t.classList.toggle('low', ex.e.timeLeft <= 300);
  if(ex.e.timeLeft % 5 === 0) persist();
  if(ex.e.timeLeft <= 0) finishExam();
}

function renderQuestion(){
  const {qs, e, area} = ex;
  const q = qs[e.current];
  el('exam-area-chip').textContent = area;
  el('q-number').textContent = `PREGUNTA ${String(e.current+1).padStart(2,'0')}`;
  el('q-text').textContent = q.q;
  el('progress-label').textContent = `Pregunta ${e.current+1} de ${qs.length}`;
  el('progress-fill').style.width = `${(e.current/qs.length)*100}%`;

  if(q.passage){
    el('q-context').innerHTML = `<div class="context-box"><span class="ctx-label">TEXTO DE LECTURA</span>${PASSAGES[q.passage]}</div>`;
  } else if(q.context){
    el('q-context').innerHTML = `<div class="context-box"><span class="ctx-label">DATOS DEL EJERCICIO</span>${q.context}</div>`;
  } else {
    el('q-context').innerHTML = '';
  }
  el('q-visual').innerHTML = q.visual ? `<div class="visual-box">${q.visual}</div>` : '';

  el('q-options').innerHTML = q.options.map((opt,i) => `
    <label class="opt ${e.answers[e.current]===i ? 'selected':''}" data-i="${i}">
      <input type="radio" name="opt">
      <span class="bubble">${LETTERS[i]}</span>
      <span class="opt-text">${opt}</span>
    </label>
  `).join('');

  el('q-options').querySelectorAll('.opt').forEach(node => {
    node.addEventListener('click', () => {
      e.answers[e.current] = parseInt(node.getAttribute('data-i'));
      persist();                       // guardado automático en el registro
      renderQuestion();
    });
  });

  el('btn-prev').disabled = e.current === 0;
  el('btn-next').textContent = e.current === qs.length - 1 ? 'Finalizar' : 'Siguiente';
}

el('btn-next').addEventListener('click', () => {
  if(!ex || !ex.active) return;
  if(ex.e.current === ex.qs.length - 1){
    const sin = ex.e.answers.filter(a => a === null).length;
    if(sin > 0 && !confirm(`Te faltan ${sin} pregunta(s) sin responder. ¿Entregar el examen de todos modos?`)) return;
    finishExam();
  } else { ex.e.current++; persist(); renderQuestion(); }
});
el('btn-prev').addEventListener('click', () => {
  if(ex && ex.active && ex.e.current > 0){ ex.e.current--; persist(); renderQuestion(); }
});

function finishExam(){
  if(!ex || !ex.active) return;
  ex.active = false;
  clearInterval(ex.handle);
  const t = tally(ex.qs, ex.e.answers);
  Object.assign(ex.e, { status:'completado', correct:t.correct, answered:t.answered, total:t.total,
                        fin:new Date().toISOString() });
  persist();
  const area = ex.area;
  ex = null;
  showResults(area);
}

/* ---------- Salir de la pestaña = examen cerrado ---------- */
function onLeave(){
  if(!ex || !ex.active) return;
  ex.active = false;
  clearInterval(ex.handle);
  const area = ex.area;
  voidExam(area, 'Salió de la pestaña o ventana del examen');
  ex = null;
  const e = rec().exams[area];
  el('void-text').textContent =
    `Saliste de la pestaña durante el examen de ${area}. El examen se cerró y no puede volver a iniciarse. ` +
    `Se guardaron tus ${e.answered} respuestas (${e.correct} correctas) en tu registro.`;
  showScreen('screen-void');
}
document.addEventListener('visibilitychange', () => { if(document.hidden) onLeave(); });
window.addEventListener('blur', onLeave);
window.addEventListener('pagehide', onLeave);
el('btn-void-home').addEventListener('click', () => { renderHome(); showScreen('screen-home'); });

/* ---------- Resultados ---------- */
function showResults(area){
  const e = rec().exams[area];
  const qs = EXAMS[area];
  const pct = Math.round(e.correct / e.total * 100);
  el('res-area').textContent = `Examen de ${area}`;
  el('score-big').textContent = `${pct}%`;
  el('score-sub').textContent = `${e.correct} de ${e.total} correctas`;
  el('area-bars').innerHTML = `
    <div class="area-bar-row">
      <div class="top"><span class="name">${esc(area)}</span><span class="frac">${e.correct}/${e.total}</span></div>
      <div class="bar-track"><div class="bar-fill" style="width:${pct}%"></div></div>
    </div>`;

  const wrong = [];
  qs.forEach((q,i) => { if(e.answers[i] !== q.correct) wrong.push({...q, given:e.answers[i]}); });
  el('review-list').innerHTML = wrong.length === 0
    ? `<div class="review-item" style="border-left-color:var(--accent)">¡Ninguna pregunta fallada! Excelente examen.</div>`
    : wrong.map(w => `
      <div class="review-item">
        <div class="rq">${esc(w.q)}</div>
        <div class="ra">Tu respuesta: <strong>${w.given===null ? 'sin responder' : LETTERS[w.given] + ' — ' + w.options[w.given]}</strong></div>
        <div class="ra correct-line">Correcta: ${LETTERS[w.correct]} — ${w.options[w.correct]}</div>
        <div class="ra">${w.explain}</div>
      </div>`).join('');
  showScreen('screen-results');
}
el('btn-retry').addEventListener('click', () => { renderHome(); showScreen('screen-home'); });

/* ---------- Descargar registro ---------- */
el('btn-csv').addEventListener('click', () => {
  const r = rec();
  const cell = (v) => `"${String(v ?? '').replace(/"/g,'""')}"`;
  const rows = [['Nombre','Correo','Área','Estado','Correctas','Respondidas','Total','Porcentaje','Motivo','Inicio','Fin']];
  AREAS.forEach(a => {
    const e = r.exams[a];
    rows.push(e
      ? [r.nombre, r.email, a, e.status, e.correct, e.answered, e.total, Math.round(e.correct/e.total*100)+'%', e.motivo||'', e.inicio, e.fin]
      : [r.nombre, r.email, a, 'pendiente','','','','','','','']);
  });
  const csv = '\ufeff' + rows.map(row => row.map(cell).join(',')).join('\r\n');
  const url = URL.createObjectURL(new Blob([csv], {type:'text/csv;charset=utf-8'}));
  const a = document.createElement('a');
  a.href = url; a.download = `registro-${r.email.split('@')[0]}.csv`;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
});

/* ---------- Arranque ---------- */
(function init(){
  const saved = sessionStorage.getItem(SESSION_KEY);
  if(saved && db[saved]){ user = saved; enterHome(); }
  else { showScreen('screen-login'); }
})();
