// Base de datos de la serie organizada por temporadas
const seriesData = {
    "temporada1": [
        {
            id: 1,
            titulo: "T1 E1: Piloto",
            sinopsis: "Steve McGarrett regresa a Hawái, su ciudad natal, para investigar el asesinato de su padre, John McGarrett, que era oficial en el Departamento de Policía de Honolulu. Él se da de alta por la Gobernadora de Hawái, una amiga de su padre, a la cabeza de un nuevo equipo de trabajo especial con total inmunidad y medios para limpiar los bajos fondos de la isla de Oahu. A su vez, McGarrett alige como compañero al recién llegado a Honolulu Danny Williams, un detective divorciado que se mudó de Nueva Jersey para estar más cerca de su hija; Chin Ho Kelly, un ex-inspector de policía caído en disgraced y un protegido del padre de McGarrett que fue acusado falsamente de corrupción, y Kono Kalakaua, prima de Chin Ho Kelly, una ex surfista profesional y pronto a ser graduada de la Academia de Policía. Juntos descubren un vínculo entre el hombre que mató al padre de McGarrett.",
            url: "https://drive.google.com/file/d/1yCnh1-rtd8Z8uAGp5AYEWu1qNcEf5gvj/preview",
            calidad: "360p"
        },
        {
            id: 2,
            titulo: "T1 E2: Familia",
            sinopsis: "Tras el secuestro violento de un experto ex-NSA, se descubre que hay ciberterrorismo en el centro de la ciudad de Waikiki. McGarrett, Chin, Danny, y Kono tienen una carrera contra el tiempo para rescatar al hombre y prevenir la violación de la seguridad nacional.",
            url: "https://drive.google.com/file/d/1yh-WrXpDNYW-5y4gHezUM_SeZhGVp-Rr/preview",
            calidad: "360p"
        },
        {
            id: 3,
            titulo: "T1 E3: Respetar la Tierra",
            sinopsis: "Un tiroteo estalla entre dos bandas callejeras durante un partido de fútbol del instituto Kukui. El primo de Chin Ho Kelly, Sid, que es un detective encubierto que trabaja sobre el mismo caso, se niega a tener nada que ver con él debido a su oscuro pasado. Mientras tanto, Danny lucha para mantener la custodia compartida de su hija Grace.",
            url: "https://drive.google.com/file/d/1BFkdpdkDjddJGI_SLef9xxPxgJUHaSmd/preview",
            calidad: "360p"
        },
        {
            id: 4,
            titulo: "T1 E4: Victoria",
            sinopsis: "Un convicto se escapa de la cárcel para cazar a un ex socio en el crimen que ahora está casado con una mujer que acaba de ganar dinero en un programa de televisión. La hermana de Steve, Mary Ann McGarrett, quien ha tenido problemas con la ley en el pasado, viene de visita. Además, Danny tiene una lesión en la rodilla.",
            url: "https://drive.google.com/file/d/1gN9D2pJaLkf9309CIhjMNxgeU_Nud2Wm/preview",
            calidad: "360p"
        },
        {
            id: 5,
            titulo: "T1 E5: Perdido u olvidado",
            sinopsis: "Mientras estaban de vacaciones en Hawái, las dos hijas adultas del Embajador de Estados Unidos en las Filipinas han sido secuestradas. La Gobernadora Jameson hace una promesa al embajador y a su esposa de encontrar a los autores, contando con la ayuda del 5-0. En este episodio, la Gobernadora le presenta al equipo al peculiar médico forense Max Bergman.",
            url: "https://drive.google.com/file/d/17Ps3fWlA7vBKRqfaexghMX3LpNnvumxJ/preview",
            calidad: "360p"
        },
        {
            id: 6,
            titulo: "T1 E6: Orilla del norte de O'ahu",
            sinopsis: "El jefe del antiguo equipo profesional de surf de Kono es asesinado frente a una gran multitud. Kono parte en la investigación del 5-0 y le lleva a sospechar de un ecologista joven que resulta ser su excompañero en sus días de surf.",
            url: "https://drive.google.com/file/d/1T3XfIZwJ0bsSKwDcvg_OQjkMu0_SGd-4/preview",
            calidad: "360p"
        },
        {
            id: 7,
            titulo: "T1 E7: Aceptar",
            sinopsis: "Un ex-Navy Seal es sospechoso de asesinar a su esposa. Reivindicándose de su inocencia, toma rehenes a bordo de la USS Misuri en Pearl Harbor y da a las autoridades cuatro horas para encontrar al verdadero asesino. McGarrett decide colarse solo a bordo del Misuri mientras el resto del equipo trata de reconstruir lo que sucedió realmente en la escena del crimen. El plan de McGarrett es asistido por un marinero jubilado, que había servido anteriormente con el abuelo de McGarrett en la USS Arizona en el momento del ataque a Pearl Harbor.",
            url: "https://drive.google.com/file/d/1GJDeGZpELNXNO8GkLS7SjNP7vFlTWke0/preview",
            calidad: "360p"
        },
        {
            id: 8,
            titulo: "T1 E8: Creencia",
            sinopsis: "Meka Hanamoa, que se asoció con Danny cuando estaba con el Departamento de Policía de Honolulu, aparece muerto en un luau. Ante la insistencia de la viuda de Meka, Danny trabaja sin descanso para encontrar al asesino y limpiar su nombre ya que estaba siendo investigado por corrupción en el momento de su muerte.",
            url: "https://drive.google.com/file/d/1brbRdtQGh7LfbgeNEXshqchUNG-gCdGI/preview",
            calidad: "360p"
        },
        {
            id: 9,
            titulo: "T1 E9: El asedio",
            sinopsis: "The Oahu Foreign Aid Summit es el tema de protestas debido a una polémica que lleva un dignatario extranjero: un general asesino en masa de militares de Sandimar, a quien Five-0 es asignado para proteger después de enterarse de un complot de asesinato inminente.",
            url: "https://drive.google.com/file/d/119tccu630Ah-aRksh1lC0XiRH6nlHXFv/preview",
            calidad: "360p"
        },
        {
            id: 10,
            titulo: "T1 E10: Carrera",
            sinopsis: "Un vehículo blindado es robado en pleno día en el centro de Waikiki. El Five-0 recupera el dinero, pero se da cuenta de una trama más siniestra, donde los sospechosos están viviendo al lado de Rachel, la exesposa de Danny.",
            url: "https://drive.google.com/file/d/1tBRFwF1yz9Eh_eyCNuQSezO8_X5MWhq2/preview",
            calidad: "360p"
        },
        {
            id: 11,
            titulo: "T1 E11: Paraíso",
            sinopsis: "La esposa de una pareja de recién casados se encuentra desorientada con amnesia en el Parque Estatal de Kahana con su marido actualmente desaparecido. La madre del marido sospecha que su nuera está mintiendo, a pesar de que Five-0 y Bergman pueden haber descubierto un potencial asesino en serie de recién casados.",
            url: "https://drive.google.com/file/d/1q50l1_f0NqNyw3-HJrLgLjpgNOC3ACPp/preview",
            calidad: "360p"
        },
        {
            id: 12,
            titulo: "T1 E12: Medidas desesperadas",
            sinopsis: "Un traficante de armas es encontrado muerto después de un lavado. Vigilancia muestra que la víctima fue vista caminando con Víctor Hesse, el hombre al que creían muerto y el responsable de la muerte del padre del Capitán Steve McGarrett. Hesse también tiene la suerte de Chin Ho en sus manos después de ponerle una bomba en el cuello. Tras ser enviado de vuelta a la cárcel, Hesse negocia con Wo Fat.",
            url: "https://drive.google.com/file/d/1xxhcc2i0AkI9fQtFUVhF10CnbDeCtf84/preview",
            calidad: "360p"
        },
        {
            id: 13,
            titulo: "T1 E13: El principio",
            sinopsis: "Mary Ann es secuestrada, y la caja de herramientas Champion Spark Plugs es robada de la casa de McGarrett. Steve y el Five-0 descubren pistas en el asesinato de su madre, incluyendo lazos con la Yakuza.",
            url: "",
            calidad: "360p"
        },
        {
            id: 14,
            titulo: "T1 E14: Un hombre inocente",
            sinopsis: "Chin y Kono se unen al HPD en una persecución de coches de alta velocidad, en última instancia conducen a un accidente mortal y el descubrimiento de una cabeza cortada en una caja de cartón. Lo que están a punto de descubrir lleva al equipo a un inocente inmigrante chino ilegal, un paciente de cáncer decapitado, la desaparición de su esposa y un secuestrador. La investigación también lleva a Chin Ho a reunirse torpemente con su exnovia Malia en el hospital mientras trataban de identificar a John Doe.",
            url: "https://drive.google.com/file/d/19iIg3hg_PiVQ34_obhYZNtB6T2xmXLN1/preview",
            calidad: "360p"
        },
        {
            id: 15,
            titulo: "T1 E15: Marea",
            sinopsis: "El equipo investiga la desaparición del Dr. Norman Russell, el jefe del Centro de Alerta contra los Tsunamis, mientras una amenaza de tsunami se acerca a la isla y las autoridades deben preparar a los residentes para la evacuación.",
            url: "https://drive.google.com/file/d/1P9JDv8EAV-1fXyfEuSm448cFitE0J0pJ/preview",
            calidad: "360p"
        },
        {
            id: 16,
            titulo: "T1 E16: Proteger",
            sinopsis: "Cuando el testigo clave en la sentencia para poner a un líder de una banda desaparece, el equipo es enviado para dar la vuelta a la sala del tribunal a tiempo para la audiencia. Los dos guardias armados enviados para protegerlo son hallados muertos en el maletero de una patrulla, y la casa en la que se supone que vive es saqueada: los instintos de McGarrett como Navy SEAL le dicen que pelearon y escaparon ya que son asesinos entrenados. Dany no asiste a la caza de Steve a través de la densa selva de Hawái, y en su lugar se centra en mantener a su hija (Grace) y su exesposa (Rachel) seguras. Convencida de que Stan (actual esposo de Rachel) tiene algo que ver con el robo del auto, Dany tiene la intención de llegar al fondo de cualquier danger a fin de mantener segura a Grace.",
            url: "https://drive.google.com/file/d/1tkiQiq6L9oZTTR-2gJ1JLGRImzl69Z0Z/preview",
            calidad: "360p"
        },
        {
            id: 17,
            titulo: "T1 E17: Pirata",
            sinopsis: "El equipo investiga el secuestro de 12 estudiantes universitarios que estaban de fiesta en las vacaciones de primavera, cuyo catamarán es atacado por piratas frente a la costa de Waikiki.",
            url: "https://drive.google.com/file/d/1ct2o0QpcYrEyuycQjy-AJVcRufFD5Gh7/preview",
            calidad: "360p"
        },
        {
            id: 18,
            titulo: "T1 E18: El largo adiós",
            sinopsis: "El equipo trata de averiguar quién está detrás de una ola de atentados contra ellos, y el hermano menor de Danny, Mathiew Williams, viene a visitarlo de forma inesperada, ocultando sus propios oscuros secretos.",
            url: "https://drive.google.com/file/d/1eqauFPqiJcQOokppo-0qlC0ZB0G95RbN/preview",
            calidad: "360p"
        },
        {
            id: 19,
            titulo: "T1 E19: Héroes y villanos",
            sinopsis: "Después de que un inocente es asesinado, el equipo investiga sólo para descubrir que el asesinato está vinculado a un caso mucho más grande. Mientras tanto, el equipo de McGarret, junto a un analista de la CIA se encuentra a la persona que causó la muerte de los padres de McGarret, la contratación del asesino del padre de McGarret y el jefe de la Yakuza: Wo Fat.",
            url: "https://drive.google.com/file/d/1YZdBVzF3VsT0dIM4PUA6J47ynE9U3LWp/preview",
            calidad: "360p"
        },
        {
            id: 20,
            titulo: "T1 E20: Costa",
            sinopsis: "McGarrett y Williams van a la sierra de Ko'olau pero como resultado McGarrett se lesiona después de encontrar un cuerpo con una herida de bala. Mientras tanto, después de visitar a su tía enferma, Chin Ho revela a Kono las circunstancias exactas detrás de sus acusaciones de corrupción y último despido de HPD.",
            url: "https://drive.google.com/file/d/1Ks1C5U0lkGq1pUY3H3o9rM0Ap7LOaYzu/preview",
            calidad: "360p"
        },
        {
            id: 21,
            titulo: "T1 E21: Venganza",
            sinopsis: "Reggie Cole un policía de Nueva York ha estado trabajando encubierto para un jefe del crimen de Nueva York durante dos años. El viaje del jefe a Hawái también permite a Reggie visitar brevemente a su esposa y a su pequeño hijo después de estar ausente durante tanto tiempo, esto da lugar a que dos hombres armados ataquen a su familia. El Five-0 debe resolver el crimen, acabar con el jefe del crimen, y dar caza a Reggie que se ha convertido en corrupto en una misión de venganza.",
            url: "https://drive.google.com/file/d/1FUTGr1TH9EJCfg0BmLQ54bgzz3M8itx8/preview",
            calidad: "360p"
        },
        {
            id: 22,
            titulo: "T1 E22: Cerca del corazón",
            sinopsis: "Un fotógrafo de fama mundial, Renny Sinclair, ha sido asesinado mientras cumplía una misión en Hawái en el rodaje de la edición anual de trajes de baño de una revista de deportes. Danny cree que este caso puede ser el mejor hasta ahora que Five-0 ha investigado cuando tiene que hablar con los modelos en la ciudad.",
            url: "https://drive.google.com/file/d/1ztSbJ3MszM0E-cvene7WrpakvInHpB4d/preview",
            calidad: "360p"
        },
        {
            id: 23,
            titulo: "T1 E23: Hasta que el final esté cerca",
            sinopsis: "El equipo y Jenna Kaye tratan de localizar el paradero de Wo Fat, pero aparece Sang Min en su lugar. El resultado es un caos total para Danny, quien queda envenenado después de entrar en contacto con el Sarín.",
            url: "https://drive.google.com/file/d/1iVzyH0uCCnZdoNOaKoAfjQSDtmDUVYX3/preview",
            calidad: "360p"
        },
        {
            id: 24,
            titulo: "T1 E24: Verdad",
            sinopsis: "Los equipos de Wo Fat ponen un coche bomba que mata a Laura y deja un rastro de pruebas para la elaboración de McGarrett, que no tiene más remedio que ir a la carrera, todo el tiempo sospechando de la Gobernadora Jameson quien está en contacto con Wo Fat, lo que lleva a McGarrett a entrar en la mansión de la Gobernadora. Kono es acusado de robar el dinero de la bóveda de la policía. McGarrett está enmarcado por el asesinato de la gobernadora Jameson. Kono y McGarrett son arrestados. Chin tiene su lugar en HPD como un teniente, mientras que Danny y Rachel reavivan su relación.",
            url: "https://drive.google.com/file/d/1roVVbx9YRfTeNrQEL0ajqKHg76l51Pf_/preview",
            calidad: "360p"
        }
    ],
    "temporada2": [
    {
        id: 1,
        titulo: "T2 E1: El regreso",
        sinopsis: "Mientras McGarrett está en prisión en espera de juicio por el asesinato de la gobernadora Jameson, Danny se presenta con una visitante sorpresa para ayudar a limpiar su name: la analista de la CIA Jenna Kaye. Mientras tanto, el ex-mentor de Steve en los Navy SEAL, Joe White, llega a Hawái a petición de Steve para ayudarle. Además, Kono es suspendida de la fuerza por el HPD debido a la investigación de asuntos internos por el robo del dinero de la bóveda.",
        url: "/preview",
        calidad: "360p"
    },
    {
        id: 2,
        titulo: "T2 E2: Tomar el control",
        sinopsis: "El gobernador interino Sam Denning asigna a una nueva oficial, la ex-oficial de Seguridad Nacional Lori Weston, para integrarse al Five-0 y asegurarse de que el equipo siga las reglas. Mientras tanto, el equipo investiga el secuestro de un campeón de paddleboard que resulta ser el hijo de un multimillonario, lo que los lleva a una red de culto peligroso.",
        url: "/preview",
        calidad: "360p"
    },
    {
        id: 3,
        titulo: "T2 E3: El héroe en la sombra",
        sinopsis: "El equipo del Five-0 investiga el asesinato de un Navy SEAL que fue encontrado muerto en una zanja profunda. El caso toma un giro personal para McGarrett cuando Joe White le revela que la víctima estaba conectada con una investigación secreta que involucra al padre de Steve.",
        url: "/preview",
        calidad: "360p"
    },
    {
        id: 4,
        titulo: "T2 E4: Tesoro enterrado",
        sinopsis: "El asesinato de un buceador de aguas profundas que buscaba un tesoro hundido lleva al Five-0 a investigar el mundo de los cazadores de tesoros piratas. Chin Ho está preocupado por Kono, quien parece estar involucrándose con un grupo de ex-policías corruptos.",
        url: "/preview",
        calidad: "360p"
    },
    {
        id: 5,
        titulo: "T2 E5: Limpio",
        sinopsis: "El Five-0 investiga el asesinato del entrenador de un equipo de voleibol femenino de una escuela secundaria. Durante la investigación, descubren que el entrenador estaba involucrado en un turbio negocio de chantaje. Chin Ho recibe una oferta para regresar al HPD con el rango de teniente.",
        url: "/preview",
        calidad: "360p"
    },
    {
        id: 6,
        titulo: "T2 E6: La buena lucha",
        sinopsis: "El asesinato de un multimillonario dueño de un hotel de lujo lleva al equipo a investigar a un luchador de artes marciales mixtas (MMA) que resulta ser un viejo amigo de McGarrett de sus días en la Marina. Kono continúa operando de incógnito con los policías corruptos.",
        url: "/preview",
        calidad: "360p"
    },
    {
        id: 7,
        titulo: "T2 E7: Huesos sagrados",
        sinopsis: "Durante la víspera de Halloween, un asesinato ritualista en un cementerio sagrado de Hawái lleva al Five-0 a buscar a un asesino en serie que se inspira en antiguas leyendas hawaianas. Max Bergman, el médico forense, ayuda de manera clave a descifrar los patrones del asesino.",
        url: "/preview",
        calidad: "360p"
    },
    {
        id: 8,
        titulo: "T2 E8: Sanación",
        sinopsis: "El Five-0 trabaja junto al HPD cuando un avión de carga que transportaba aduanas es derribado. El equipo descubre que el accidente fue provocado para liberar a un peligroso asesino internacional. Se revela el misterio detrás de la supuesta traición de Kono: estaba trabajando encubierta para Asuntos Internos.",
        url: "/preview",
        calidad: "720p"
    },
    {
        id: 9,
        titulo: "T2 E9: Identidad",
        sinopsis: "El asesinato de una mujer en una habitación de hotel lleva al equipo a descubrir que la víctima tenía una doble vida y estaba planeando un gran robo de joyas. El pasado de la oficial Lori Weston con el FBI resulta muy útil para resolver el caso.",
        url: "/preview",
        calidad: "720p"
    },
    {
        id: 10,
        titulo: "T2 E10: Engaño",
        sinopsis: "Un periodista que investigaba una historia sobre corrupción política es asesinado. El Five-0 debe desentrañar una compleja red de mentiras que involucra a altos cargos de la isla. Chin Ho se reencuentra con su ex-prometida Malia y planean su boda.",
        url: "/preview",
        calidad: "720p"
    },
    {
        id: 11,
        titulo: "T2 E11: Trampa",
        sinopsis: "McGarrett viaja a Corea del Norte con Jenna Kaye para rescatar a Joe White, quien supuestamente ha sido capturado. Sin embargo, Steve descubre que todo es una elaborada trampa orquestada por Wo Fat, y Jenna Kaye se ve obligada a tomar una trágica decisión.",
        url: "/preview",
        calidad: "720p"
    },
    {
        id: 12,
        titulo: "T2 E12: Adiós y buena suerte",
        sinopsis: "El Five-0 investiga el asesinato de un hombre que cayó desde un balcón durante una fiesta. El caso se complica cuando descubren que la víctima estaba conectada con un cartel de drogas. El equipo asiste a la boda de Chin Ho Kelly y Malia Waincroft.",
        url: "/preview",
        calidad: "720p"
    },
    {
        id: 13,
        titulo: "T2 E13: El juego de la muerte",
        sinopsis: "El Five-0 debe resolver el asesinato de una mujer cuyo cuerpo fue encontrado en un búnker de la Segunda Guerra Mundial. La investigación revela que participaba en un perturbador juego de rol en vivo que se volvió real y mortal.",
        url: "/preview",
        calidad: "720p"
    },
    {
        id: 14,
        titulo: "T2 E14: El paquete misterioso",
        sinopsis: "Cuando un hombre con una bomba atada al pecho entra en una subasta de arte, el Five-0 interviene. Descubren que el sospechoso es una víctima de chantaje cuyo hijo ha sido secuestrado, obligando a Danny a revivir traumas de su pasado en Nueva Jersey.",
        url: "/preview",
        calidad: "720p"
    },
    {
        id: 15,
        titulo: "T2 E15: De vuelta al pasado",
        sinopsis: "El Five-0 investiga el asesinato de un hombre que resulta ser un antiguo miembro de una banda criminal de los años 80. La investigación lleva a Danny a confrontar a un fantasma de su propio pasado cuando era policía en Newark.",
        url: "/preview",
        calidad: "720p"
    },
    {
        id: 16,
        titulo: "T2 E16: Ajuste de cuentas",
        sinopsis: "Un caso de asesinato lleva al equipo a una organización criminal rusa. Lori Weston se ve obligada a renunciar al Five-0 después de que sus vínculos emocionales con el equipo entren en conflicto con las estrictas órdenes del Gobernador Denning.",
        url: "/preview",
        calidad: "720p"
    },
    {
        id: 17,
        titulo: "T2 E17: Defensor de los jóvenes",
        sinopsis: "El Five-0 investiga el asesinato de un hombre que dirigía un centro de detención juvenil privado. El equipo descubre abusos severos dentro de la institución y debe encontrar al culpable entre los jóvenes maltratados.",
        url: "/preview",
        calidad: "720p"
    },
    {
        id: 18,
        titulo: "T2 E18: Radioaficionado",
        sinopsis: "Un locutor de radio de entrevistas controvertidas es asesinado al aire por un atacante desconocido. El Five-0 debe filtrar una larga lista de sospechosos, incluidos oyentes enfurecidos y políticos locales con secretos oscuros.",
        url: "/preview",
        calidad: "720p"
    },
    {
        id: 19,
        titulo: "T2 E19: Fe",
        sinopsis: "El asesinato de un contratista militar lleva al Five-0 a investigar un complot que involucra armas experimentales robadas. Mary Ann, la hermana de Steve, regresa a Hawái con un nuevo trabajo que levanta las sospechas de su hermano.",
        url: "",
        calidad: "720p"
    },
    {
        id: 20,
        titulo: "T2 E20: Abandonado",
        sinopsis: "El Five-0 investiga el asesinato de un hombre abandonado en un yate a la deriva. El caso da un giro inesperado cuando descubren que el crimen está conectado con un brote mortal de un virus virulento que amenaza a toda la isla.",
        url: "/preview",
        calidad: "720p"
    },
    {
        id: 21,
        titulo: "T2 E21: Toque de queda",
        sinopsis: "En este episodio crossover con *NCIS: Los Ángeles*, los agentes G. Callen y Sam Hanna viajan a Hawái para ayudar al Five-0 a rastrear a un sospechoso que amenaza con liberar una variante mortal de la viruela neumónica en la isla.",
        url: "/preview",
        calidad: "720p"
    },
    {
        id: 22,
        titulo: "T2 E22: Atrapado",
        sinopsis: "El Five-0 logra capturar finalmente a Wo Fat tras una intensa redada, pero el convoy que lo transporta es emboscado por la Yakuza. McGarrett debe trabajar junto a su peor enemigo para sobrevivir en la selva mientras escapan de los asesinos.",
        url: "/preview",
        calidad: "720p"
    },
    {
        id: 23,
        titulo: "T2 E23: Muerte en la familia",
        sinopsis: "En el impactante final de temporada, el archienemigo Frank Delano ofrece a Chin Ho una retorcida elección: salvar a su prima Kono, que ha sido atada y arrojada al océano, o a su esposa Malia, que está gravemente herida en su casa. Mientras tanto, Steve descubre la identidad de 'Shelburne': su propia madre, supuestamente muerta.",
        url: "/preview",
        calidad: "360p"
    }
]
};