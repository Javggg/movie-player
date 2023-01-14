// Components
import Player from '../components/Player/Player'

const Panel = ({ imgPosition = 'left' }) => {
	const text = (
		<div>
			<div>
				<h3>Test</h3>
			</div>
		</div>
	)

	const image = (
		<div>
			<h3>Other</h3>
		</div>
	)

	return (
		<div>
			{imgPosition === 'left' ? (
				<>
					{image}
					{text}
				</>
			) : (
				<>
					{text}
					{image}
				</>
			)}
		</div>
	)
}

const Play = ({ history }) => {
	const movie = [
		{
			id: 1,
			name: 'Español',
			parts: ['https://damovie.b-cdn.net/movie.mp4']
		}
	]

	const subtitles = [
		{
			id: 1,
			lang: 'spanish',
			name: 'Español',
			data: [
				{ id: 1, start: 1.001, end: 9.011, text: '<b>CONFIGURE SU MONITOR A 16x9</b>' },
				{
					id: 2,
					start: 46.797,
					end: 50.301,
					text: 'En los confines más remotos<br />del este del continente europeo:'
				},
				{ id: 3, start: 50.467, end: 52.219, text: 'La ex República de<br />ZUBROWKA' },
				{ id: 4, start: 52.302, end: 54.145, text: 'Antaño la sede de un imperio.' },
				{ id: 5, start: 54.263, end: 56.686, text: '<b>ANTIGUO CEMENTERIO LUTZ</b>' },
				{
					id: 6,
					start: 89.172,
					end: 91.891,
					text: '<b>A LA MEMORIA DE<br />NUESTRO TESORO NACIONAL</b>'
				},
				{ id: 7, start: 92.009, end: 93.932, text: '<b>ESCRITOR</b>' },
				{ id: 8, start: 100.892, end: 102.86, text: '<b>EL GRAN HOTEL<br />BUDAPEST</b>' },
				{ id: 9, start: 115.032, end: 117.785, text: 'Es un error extremadamente común:' },
				{
					id: 10,
					start: 117.993,
					end: 121.463,
					text: 'La gente cree que la imaginación<br />del escritor siempre trabaja...'
				},
				{
					id: 11,
					start: 121.58,
					end: 124.584,
					text: '...que inventa constantemente una<br />infinidad de incidentes y episodios...'
				},
				{
					id: 12,
					start: 126.209,
					end: 129.964,
					text: '...que simplemente sueña<br />sus historias de la nada.'
				},
				{
					id: 13,
					start: 130.088,
					end: 132.762,
					text: 'La realidad es que<br />sucede lo contrario.'
				},
				{
					id: 14,
					start: 132.883,
					end: 135.181,
					text: 'Cuando el público sabe que eres escritor...'
				},
				{
					id: 15,
					start: 135.302,
					end: 138.055,
					text: '...ellos te proporcionan<br />personajes y hechos.'
				},
				{
					id: 16,
					start: 138.18,
					end: 141.024,
					text: 'Siempre que conserves<br />la capacidad de observar...'
				},
				{ id: 17, start: 141.141, end: 142.768, text: '...y escuchar con atención...' },
				{ id: 18, start: 143.31, end: 146.234, text: '...las historias continuarán...' },
				{ id: 19, start: 146.355, end: 148.949, text: '¡Basta! ¡Basta!<br />¡No hagas eso!' },
				{
					id: 20,
					start: 154.321,
					end: 158.076,
					text: '...continuarán buscándote<br />a lo largo de toda tu vida.'
				},
				{
					id: 21,
					start: 158.533,
					end: 162.083,
					text: 'A aquel que con frecuencia<br />ha contado las historias de otros...'
				},
				{ id: 22, start: 162.204, end: 164.127, text: '...muchas historias se le contarán.' },
				{ id: 23, start: 164.247, end: 165.59, text: '- Perdón.<br />- Está bien.' },
				{
					id: 24,
					start: 165.916,
					end: 169.386,
					text: 'Los incidentes a continuación<br />me fueron narrados...'
				},
				{ id: 25, start: 169.503, end: 172.097, text: '...exactamente como los presento aquí...' },
				{ id: 26, start: 172.339, end: 175.218, text: '...y de una forma totalmente inesperada.' },
				{
					id: 27,
					start: 182.516,
					end: 186.987,
					text: '<i>Hace algunos años, mientras sufría de<br />un caso moderado de "fiebre de escritor"...</i>'
				},
				{
					id: 28,
					start: 187.104,
					end: 190.825,
					text: '<i>...una forma de neurastenia común<br />entre la élite intelectual de entonces...</i>'
				},
				{
					id: 29,
					start: 190.941,
					end: 192.989,
					text: '<i>...decidí pasar el mes de agosto...</i>'
				},
				{
					id: 30,
					start: 193.11,
					end: 197.035,
					text: '<i>...en la aldea spa de Nebelsbad,<br />bajo el Sudetenwaltz alpino...</i>'
				},
				{
					id: 31,
					start: 197.155,
					end: 200.5,
					text: '<i>...y me alojaba en el Gran Budapest...</i>'
				},
				{
					id: 32,
					start: 201.076,
					end: 205.582,
					text: '<i>...un establecimiento pintoresco, esmerado<br />y otrora ampliamente celebrado.</i>'
				},
				{ id: 33, start: 205.706, end: 207.925, text: '<i>Supongo que algunos lo conocen.</i>' },
				{
					id: 34,
					start: 209.876,
					end: 213.471,
					text: '<i>Era temporada baja y para entonces<br />estaba muy pasado de moda...</i>'
				},
				{
					id: 35,
					start: 213.588,
					end: 218.264,
					text: '<i>...y había iniciado el descenso<br />hacia su decadencia y eventual demolición.</i>'
				},
				{
					id: 36,
					start: 220.262,
					end: 224.312,
					text: '<i>Los escasos huéspedes pronto<br />comenzamos a reconocemos de vista...</i>'
				},
				{
					id: 37,
					start: 224.433,
					end: 227.812,
					text: '<i>...como las únicas almas<br />que residían en el enorme edificio.</i>'
				},
				{
					id: 38,
					start: 228.311,
					end: 231.69,
					text: '<i>Aunque dudo que las relaciones<br />hayan trascendido...</i>'
				},
				{
					id: 39,
					start: 231.815,
					end: 234.489,
					text: '<i>...los corteses saludos<br />que intercambiábamos...</i>'
				},
				{
					id: 40,
					start: 234.609,
					end: 237.203,
					text: '<i>...en el jardín de las palmas,<br />en los baños árabes...</i>'
				},
				{
					id: 41,
					start: 237.32,
					end: 239.414,
					text: '<i>...y a bordo del funicular columnado.</i>'
				},
				{
					id: 42,
					start: 240.198,
					end: 243.168,
					text: '<i>Éramos un grupo muy reservado,<br />al parecer...</i>'
				},
				{ id: 43, start: 243.285, end: 244.958, text: '<i>...y, sin excepción...</i>' },
				{ id: 44, start: 245.662, end: 246.914, text: '<i>...solitario.</i>' },
				{
					id: 45,
					start: 250.459,
					end: 253.212,
					text: '<i>Quizá como resultado<br />del silencio prevaleciente...</i>'
				},
				{
					id: 46,
					start: 253.336,
					end: 257.261,
					text: '<i>...establecí una familiaridad<br />desenfadada con el concierge...</i>'
				},
				{
					id: 47,
					start: 257.424,
					end: 260.803,
					text: '<i>...proveniente del oeste de Europa<br />y conocido como Monsieur Jean...</i>'
				},
				{
					id: 48,
					start: 260.927,
					end: 265.774,
					text: '<i>...quien era a la vez perezoso<br />y bastante servicial.</i>'
				},
				{ id: 49, start: 266.016, end: 268.018, text: '<i>Imagino que no le pagaban bien.</i>' },
				{
					id: 50,
					start: 268.769,
					end: 272.774,
					text: '<i>Una noche, mientras deliberaba<br />codo a codo con Monsieur Jean...</i>'
				},
				{
					id: 51,
					start: 272.898,
					end: 276.653,
					text: '<i>...como se había vuelto costumbre,<br />reparé en una presencia nueva.</i>'
				},
				{
					id: 52,
					start: 277.235,
					end: 279.738,
					text: '<i>Un anciano pequeño,<br />elegantemente vestido...</i>'
				},
				{
					id: 53,
					start: 280.071,
					end: 282.915,
					text: '<i>...Con un rostro vivaz e inteligente...</i>'
				},
				{
					id: 54,
					start: 283.033,
					end: 286.162,
					text: '<i>...y un aire de tristeza<br />inmediatamente perceptible.</i>'
				},
				{
					id: 55,
					start: 286.62,
					end: 288.588,
					text: '<i>Estaba, como todos nosotros, solo...</i>'
				},
				{
					id: 56,
					start: 288.705,
					end: 291.709,
					text: '<i>...pero fue el primero en darme<br />la impresión de estar...</i>'
				},
				{
					id: 57,
					start: 291.833,
					end: 294.427,
					text: '<i>...profunda y verdaderamente solitario...</i>'
				},
				{
					id: 58,
					start: 294.544,
					end: 296.888,
					text: '<i>...síntoma de mi propio<br />padecimiento médico.</i>'
				},
				{ id: 59, start: 297.547, end: 299.424, text: '¿Quién es ese interesante anciano?' },
				{ id: 60, start: 299.549, end: 301.267, text: '<i>Le pregunté a Monsieur Jean.</i>' },
				{
					id: 61,
					start: 301.51,
					end: 304.104,
					text: '<i>Para mi sorpresa,<br />se mostró desconcertado.</i>'
				},
				{ id: 62, start: 304.221, end: 305.689, text: '<i>- ¿ No lo sabe?<br />- Preguntó.</i>' },
				{ id: 63, start: 305.806, end: 307.353, text: '¿No lo reconoce?' },
				{ id: 64, start: 307.474, end: 309.101, text: '<i>Si me parecía conocido.</i>' },
				{
					id: 65,
					start: 309.434,
					end: 312.734,
					text: '<i>Es el Sr. Moustafa en persona.<br />Llegó esta mañana.</i>'
				},
				{
					id: 66,
					start: 313.688,
					end: 317.989,
					text: '<i>Sin duda, este nombre le será familiar<br />a los más conocedores de ustedes.</i>'
				},
				{
					id: 67,
					start: 320.32,
					end: 324.917,
					text: '<i>El Sr. Zero Moustafa fue en el pasado<br />el hombre más rico de Zubrowka...</i>'
				},
				{ id: 68, start: 325.158, end: 326.705, text: '<b>INMIGRANTE RECLAMA FORTUNA</b>' },
				{
					id: 69,
					start: 326.827,
					end: 330.081,
					text: '<i>...y aún era el dueño del Gran Budapest.</i>'
				},
				{ id: 70, start: 330.205, end: 331.422, text: '<b>PACTO CON EL COMISARIO</b>' },
				{
					id: 71,
					start: 331.54,
					end: 335.795,
					text: 'Viene a quedarse una semana o más<br />tres veces al año, nunca en temporada alta.'
				},
				{
					id: 72,
					start: 335.919,
					end: 338.342,
					text: '<i>Monsieur Jean me indicó que me acercara.</i>'
				},
				{ id: 73, start: 338.463, end: 339.555, text: 'Le diré un secreto.' },
				{
					id: 74,
					start: 339.673,
					end: 343.974,
					text: 'Se aloja en una habitación sencilla,<br />sin baño, en la esquina del piso superior.'
				},
				{
					id: 75,
					start: 344.094,
					end: 346.392,
					text: 'Es más pequeña que<br />el elevador de servicio.'
				},
				{ id: 76, start: 346.513, end: 347.73, text: '<i>Era bien sabido:</i>' },
				{
					id: 77,
					start: 347.973,
					end: 350.692,
					text: '<i>Zero Moustafa había poseído y habitado...</i>'
				},
				{
					id: 78,
					start: 350.809,
					end: 353.779,
					text: '<i>...algunos de los castillos<br />más lujosos del continente.</i>'
				},
				{
					id: 79,
					start: 353.895,
					end: 357.069,
					text: '<i>Sin embargo aquí, en su propio<br />hotel casi vacío...</i>'
				},
				{
					id: 80,
					start: 357.232,
					end: 359.701,
					text: '<i>...¿ocupaba una habitación de servicio?</i>'
				},
				{
					id: 81,
					start: 360.318,
					end: 363.697,
					text: '<i>En ese momento, se alzó el telón<br />en un drama secundario...</i>'
				},
				{ id: 82, start: 363.822, end: 364.789, text: 'Diablos.' },
				{
					id: 83,
					start: 365.365,
					end: 368.665,
					text: '<i>...que requirió la atención inmediata<br />de Monsieur Jean.</i>'
				},
				{
					id: 84,
					start: 371.496,
					end: 374.215,
					text: '<i>Pero, francamente, no retuvo<br />la mía por mucho tiempo.</i>'
				},
				{
					id: 85,
					start: 381.673,
					end: 385.803,
					text: '<i>Sin embargo, el intermedio prematuro<br />en la historia del curioso anciano...</i>'
				},
				{
					id: 86,
					start: 385.927,
					end: 388.1,
					text: '<i>...me había dejado, como dice el dicho...</i>'
				},
				{
					id: 87,
					start: 388.221,
					end: 391.065,
					text: '<i>... "gespannt wie ein Ftitzebogen",<br />es decir...</i>'
				},
				{
					id: 88,
					start: 391.182,
					end: 395.153,
					text: '<i>...al borde de mi asiento, donde<br />permanecí toda la mañana siguiente...</i>'
				},
				{
					id: 89,
					start: 395.27,
					end: 399.525,
					text: '<i>...hasta que, a su manera<br />misteriosa y altamente confiable...</i>'
				},
				{
					id: 90,
					start: 399.649,
					end: 403.87,
					text: '<i>...el destino, una vez más,<br />intervino a mi favor.</i>'
				},
				{ id: 91, start: 407.908, end: 409.751, text: 'Admiro su trabajo.' },
				{ id: 92, start: 412.829, end: 414.206, text: '¿Disculpe?' },
				{
					id: 93,
					start: 416.082,
					end: 420.303,
					text: 'Dije que conozco y admiro<br />su maravilloso trabajo.'
				},
				{ id: 94, start: 421.171, end: 422.969, text: 'Gracias, es muy amable, señor.' },
				{
					id: 95,
					start: 423.089,
					end: 427.014,
					text: '¿Monsieur Jean le compartió<br />una o dos cosas respecto...'
				},
				{
					id: 96,
					start: 427.135,
					end: 429.433,
					text: '...al anciano propietario de este recinto?'
				},
				{
					id: 97,
					start: 429.679,
					end: 434.059,
					text: 'Debo confesar que yo mismo<br />le interrogué respecto a usted.'
				},
				{ id: 98, start: 434.184, end: 436.858, text: 'Monsieur Jean es muy capaz...' },
				{
					id: 99,
					start: 436.937,
					end: 439.941,
					text: '...pero no podemos alegar<br />que sea un concierge de primera...'
				},
				{
					id: 100,
					start: 440.065,
					end: 443.114,
					text: '...ni siquiera de segunda.<br />Pero helo ahí.'
				},
				{ id: 101, start: 443.777, end: 445.495, text: 'Los tiempos han cambiado.' },
				{ id: 102, start: 448.281, end: 451.376, text: 'Los baños termales son muy hermosos.' },
				{ id: 103, start: 451.493, end: 453.621, text: 'Lo eran en su estado inicial.' },
				{
					id: 104,
					start: 453.745,
					end: 457.466,
					text: 'Fue imposible mantenerlo.<br />Muy decadente para los gustos actuales.'
				},
				{
					id: 105,
					start: 457.582,
					end: 461.928,
					text: 'Pero yo amo de cualquier modo<br />estas ruinas fascinantes.'
				},
				{
					id: 106,
					start: 463.213,
					end: 465.807,
					text: '¿Cómo fue que lo compró,<br />si me permite preguntar?'
				},
				{ id: 107, start: 465.924, end: 467.597, text: 'El Gran Budapest.' },
				{ id: 108, start: 477.894, end: 478.941, text: 'No lo compré.' },
				{
					id: 109,
					start: 488.446,
					end: 493.122,
					text: 'Si no pregunta solo por cortesía,<br />y si es el caso, debe decírmelo...'
				},
				{ id: 110, start: 493.243, end: 495.917, text: '...sino que le interesa genuinamente...' },
				{ id: 111, start: 496.579, end: 499.002, text: '...¿puedo invitarlo a cenar esta noche?' },
				{ id: 112, start: 499.124, end: 502.378, text: 'Y será un placer, y un privilegio...' },
				{ id: 113, start: 502.502, end: 504.755, text: '...contarle mi historia.' },
				{ id: 114, start: 505.338, end: 506.76, text: 'Tal como es.' },
				{ id: 115, start: 513.013, end: 514.89, text: 'Dos patos asados con aceitunas.' },
				{ id: 116, start: 515.015, end: 516.813, text: 'Conejo... ¿ensalada?' },
				{ id: 117, start: 517.809, end: 520.403, text: "Pouilly-Jouvet '52.<br />Y champán." },
				{ id: 118, start: 521.688, end: 524.282, text: 'Eso nos dará suficiente tiempo.' },
				{
					id: 119,
					start: 524.858,
					end: 527.452,
					text: '- Si comienzo de inmediato.<br />- Por favor.'
				},
				{
					id: 120,
					start: 547.005,
					end: 551.932,
					text: 'Comienza, como es inevitable, con el<br />antecesor de nuestro amigo en común.'
				},
				{
					id: 121,
					start: 552.469,
					end: 556.099,
					text: 'El amado concierge original<br />del Hotel Budapest.'
				},
				{ id: 122, start: 557.182, end: 559.31, text: 'Comienza, por supuesto, con...' },
				{ id: 123, start: 559.517, end: 561.44, text: '<b>PARTE 1<br />M. GUSTAVE</b>' },
				{
					id: 124,
					start: 581.831,
					end: 584.175,
					text: '- La mesa junto a la ventana.<br />- Sí, Monsieur Gustave.'
				},
				{
					id: 125,
					start: 584.292,
					end: 586.636,
					text: '- La bandeja sobre la mesa.<br />- De inmediato.'
				},
				{ id: 126, start: 586.753, end: 589.427, text: 'Ahí. ¿Los cepillaron y les dieron forma?' },
				{
					id: 127,
					start: 589.547,
					end: 591.424,
					text: '- Por supuesto.<br />- Pónganlos en esas cajas.'
				},
				{
					id: 128,
					start: 591.549,
					end: 593.426,
					text: '<i>- ¿Son de Oberstdorf & Co.?<br />- Eso creo.</i>'
				},
				{
					id: 129,
					start: 593.551,
					end: 595.303,
					text: '- Segundo baúl. ¿Boletos?<br />- Yo los tengo.'
				},
				{ id: 130, start: 595.428, end: 596.52, text: 'Dámelos.' },
				{ id: 131, start: 598.389, end: 600.391, text: 'Todo correcto. Espera en la esquina.' },
				{ id: 132, start: 608.858, end: 609.95, text: 'No me iré.' },
				{ id: 133, start: 610.276, end: 611.402, text: '¿Cómo dices?' },
				{ id: 134, start: 611.528, end: 613.53, text: '- No me iré.<br />- ¿Por qué no?' },
				{ id: 135, start: 613.655, end: 615.498, text: '- Tengo miedo.<br />- ¿De qué?' },
				{
					id: 136,
					start: 615.824,
					end: 618.247,
					text: 'Temo que sea la última vez<br />que nos veamos.'
				},
				{ id: 137, start: 618.368, end: 619.711, text: '¿Por qué habría de serlo?' },
				{ id: 138, start: 619.828, end: 622.081, text: 'No sé explicarlo, pero lo presiento.' },
				{ id: 139, start: 622.205, end: 624.879, text: 'Por favor, no tienes que partir si no...' },
				{ id: 140, start: 624.999, end: 628.299, text: '- Ven conmigo.<br />- ¿Al maldito Lutz?' },
				{ id: 141, start: 628.419, end: 630.421, text: '- Por favor.<br />- Dame tu mano.' },
				{
					id: 142,
					start: 632.048,
					end: 635.552,
					text: 'No hay nada que temer.<br />Siempre te pones nerviosa antes de viajar.'
				},
				{
					id: 143,
					start: 635.677,
					end: 639.807,
					text: 'Admito que pareces sufrir un ataque<br />más agudo en esta ocasión, pero...'
				},
				{
					id: 144,
					start: 639.931,
					end: 642.309,
					text: '- ¡Dios! ¿Qué le hiciste a tus uñas?<br />- ¿Perdón?'
				},
				{
					id: 145,
					start: 642.433,
					end: 645.562,
					text: '- Ese esmalte diabólico. El color es terrible.<br />- ¿No te gusta?'
				},
				{
					id: 146,
					start: 645.687,
					end: 648.611,
					text: 'No es que no me guste.<br />Me parece repulsivo.'
				},
				{
					id: 147,
					start: 649.691,
					end: 651.944,
					text: '- Quizá esto te tranquilice.<br />- ¿Qué?'
				},
				{
					id: 148,
					start: 652.068,
					end: 655.117,
					text: '- ¡No recites!<br />- Escucha las palabras. Silencio.'
				},
				{
					id: 149,
					start: 655.78,
					end: 659.58,
					text: '"Mientras caminaba por un noble bosque<br />de pinos medievales...'
				},
				{
					id: 150,
					start: 659.701,
					end: 663.831,
					text: '...una tumba hallé, golpeada por<br />la lluvia, desgastada, etérea...'
				},
				{ id: 151, start: 663.955, end: 665.923, text: '...su inscripción desvanecida.' },
				{
					id: 152,
					start: 666.04,
					end: 668.463,
					text: 'Mas detrás de sus fisuras melancólicas..."'
				},
				{ id: 153, start: 669.377, end: 671.095, text: '¿Encenderás una vela por mí?' },
				{
					id: 154,
					start: 672.422,
					end: 675.972,
					text: '- En la sacristía de Santa María.<br />- Me encargará de inmediato.'
				},
				{ id: 155, start: 676.759, end: 679.888, text: 'Recuerda, siempre estoy contigo.' },
				{ id: 156, start: 680.889, end: 682.015, text: 'Te amo.' },
				{ id: 157, start: 682.432, end: 683.729, text: 'Yo te amo a ti.' },
				{ id: 158, start: 683.85, end: 685.022, text: '<i>¡Abfahren!</i>' },
				{
					id: 159,
					start: 695.445,
					end: 700.076,
					text: 'No es poca cosa ganarse la lealtad de<br />una mujer así 19 temporadas consecutivas.'
				},
				{ id: 160, start: 701.242, end: 702.334, text: 'Sí, señor.' },
				{
					id: 161,
					start: 702.41,
					end: 705.289,
					text: '- Me tiene mucho cariño, ¿sabes?<br />- Sí, señor.'
				},
				{ id: 162, start: 705.413, end: 707.461, text: 'Pero jamás la había visto así.' },
				{ id: 163, start: 707.582, end: 708.754, text: 'No, señor.' },
				{ id: 164, start: 708.833, end: 711.507, text: 'Se estremecía como un perro defecando.' },
				{ id: 165, start: 712.462, end: 713.588, text: 'En verdad.' },
				{
					id: 166,
					start: 714.297,
					end: 718.302,
					text: 'Corre a la catedral de Santa María.<br />Compra una vela sencilla.'
				},
				{
					id: 167,
					start: 718.426,
					end: 722.306,
					text: 'Guarda cuatro klubecks de cambio.<br />Enciéndela en la sacristía, reza un poco...'
				},
				{
					id: 168,
					start: 722.43,
					end: 724.432,
					text: '<i>...y cómprame un courtesan au chocolat.</i>'
				},
				{
					id: 169,
					start: 724.557,
					end: 726.685,
					text: 'Si sobra dinero,<br />dáselo al limpiabotas cojo.'
				},
				{ id: 170, start: 728.519, end: 730.613, text: '- De inmediato, señor.<br />- Aguarda.' },
				{
					id: 171,
					start: 732.774,
					end: 736.699,
					text: '- ¿Quién eres?<br />- Soy Zero, el nuevo botones.'
				},
				{ id: 172, start: 736.819, end: 738.116, text: '- ¿Zero?<br />- Sí, señor.' },
				{
					id: 173,
					start: 738.238,
					end: 740.582,
					text: 'Nunca te había visto.<br />¿Quién te contrató?'
				},
				{
					id: 174,
					start: 740.698,
					end: 743.121,
					text: '- El Sr. Mosher, señor.<br />- ¡Sr. Mosher!'
				},
				{ id: 175, start: 744.202, end: 745.624, text: '¿Sí, Monsieur Gustave?' },
				{
					id: 176,
					start: 745.745,
					end: 749.75,
					text: '¿Es verdad que contrató secretamente<br />a este joven como botones?'
				},
				{
					id: 177,
					start: 749.874,
					end: 753.504,
					text: 'Está en periodo de prueba,<br />y depende de su aprobación, claro.'
				},
				{ id: 178, start: 754.796, end: 757.219, text: 'Quizás, sí.<br />Gracias, Sr. Mosher.' },
				{
					id: 179,
					start: 757.34,
					end: 759.342,
					text: 'Nada que agradecer,<br />Monsieur Gustave.'
				},
				{ id: 180, start: 760.385, end: 762.854, text: 'Te haré una entrevista oficial.' },
				{ id: 181, start: 762.971, end: 765.19, text: '¿Voy antes a encender la vela, señor?' },
				{ id: 182, start: 765.306, end: 766.523, text: '¿Qué? No.' },
				{ id: 183, start: 770.27, end: 771.487, text: '¿Experiencia?' },
				{
					id: 184,
					start: 771.562,
					end: 773.781,
					text: 'Hotel Kinski, ayudante de cocina,<br />seis meses.'
				},
				{ id: 185, start: 773.898, end: 776.276, text: 'Hotel Berlitz, limpieza, tres meses.' },
				{
					id: 186,
					start: 776.401,
					end: 779.029,
					text: '- Antes fui lavaplatos...<br />- Experiencia: Cero.'
				},
				{
					id: 187,
					start: 779.153,
					end: 781.076,
					text: '- Gracias de nuevo.<br />- Arréglate ese gorro.'
				},
				{
					id: 188,
					start: 781.197,
					end: 783.416,
					text: '- El placer es mío.<br />- La correa está rota.'
				},
				{ id: 189, start: 783.533, end: 785.126, text: '- Son inaceptables.<br />- Concuerdo.' },
				{ id: 190, start: 785.243, end: 787.962, text: '- ¿Educación?<br />- Sé leer y escribir.' },
				{
					id: 191,
					start: 788.079,
					end: 790.502,
					text: 'Comencé la escuela primaria.<br />Por poco...'
				},
				{ id: 192, start: 790.623, end: 792.751, text: 'Educación: Cero.<br />- Ahora explotó.' },
				{
					id: 193,
					start: 792.875,
					end: 795.128,
					text: 'Buen día, Cicero.<br />¡Llama al maldito plomero!'
				},
				{
					id: 194,
					start: 795.253,
					end: 797.472,
					text: '- ¿Esta tarde, Monsieur Gustave?<br />- Sin falta.'
				},
				{
					id: 195,
					start: 797.588,
					end: 799.215,
					text: '- ¿Qué diablos es esto?<br />- ¡Ahora no!'
				},
				{ id: 196, start: 799.424, end: 800.516, text: '¿Familia?' },
				{ id: 197, start: 803.553, end: 804.725, text: 'Cero.' },
				{ id: 198, start: 805.888, end: 807.231, text: 'Seis, Igor.' },
				{ id: 199, start: 815.064, end: 817.192, text: '¿Por qué quieres ser botones?' },
				{
					id: 200,
					start: 818.901,
					end: 823.498,
					text: 'Pues... ¿quién no querría serlo<br />en el Gran Budapest, señor?'
				},
				{ id: 201, start: 823.614, end: 825.412, text: 'Es una institución.' },
				{ id: 202, start: 828.411, end: 829.913, text: 'Muy bien.' },
				{ id: 203, start: 845.386, end: 847.639, text: '- Mil klubecks.<br />- Cielo santo.' },
				{ id: 204, start: 848.765, end: 850.608, text: '¿Usted fue botones alguna vez?' },
				{
					id: 205,
					start: 851.893,
					end: 854.942,
					text: '- ¿Tú qué crees?<br />- Tuvo que empezar en alguna parte...'
				},
				{
					id: 206,
					start: 855.063,
					end: 856.94,
					text: '- Ve a encender la maldita vela.<br />- Sí, señor.'
				},
				{ id: 207, start: 860.568, end: 861.945, text: '<b>UN MES DESPUÉS</b>' },
				{ id: 208, start: 862.153, end: 864.155, text: '<i>Y así comenzó mi vida.</i>' },
				{
					id: 209,
					start: 866.699,
					end: 869.748,
					text: '<i>Botones en entrenamiento,<br />Gran Hotel Budapest...</i>'
				},
				{
					id: 210,
					start: 869.869,
					end: 872.588,
					text: '<i>...bajo las estrictas órdenes<br />de Monsieur Gustave H.</i>'
				},
				{
					id: 211,
					start: 872.83,
					end: 876.63,
					text: '<i>Me convertí en su aprendiz<br />y él en mi consejero y guardián.</i>'
				},
				{ id: 212, start: 876.751, end: 878.469, text: '<i>¿Qué es un botones?</i>' },
				{
					id: 213,
					start: 878.586,
					end: 882.011,
					text: '<i>Es completamente invisible<br />y, a la vez, siempre está a la vista.</i>'
				},
				{ id: 214, start: 882.382, end: 884.476, text: '<i>Recuerda lo que la gente detesta.</i>' },
				{
					id: 215,
					start: 884.592,
					end: 888.722,
					text: '<i>Se anticipa a las necesidades de sus<br />clientes antes de que sean necesidades.</i>'
				},
				{
					id: 216,
					start: 889.013,
					end: 892.062,
					text: '<i>Un botones es, ante todo,<br />discreto en extremo.</i>'
				},
				{
					id: 217,
					start: 892.183,
					end: 894.185,
					text: 'Nuestros huéspedes saben<br />que sus secretos...'
				},
				{ id: 218, start: 894.268, end: 895.861, text: '...algunos francamente indecorosos...' },
				{ id: 219, start: 895.978, end: 897.776, text: '...nos acompañarán a la tumba.' },
				{
					id: 220,
					start: 897.897,
					end: 900.32,
					text: '- Así que, boca cerrada, Zero.<br />- Sí, señor.'
				},
				{ id: 221, start: 902.86, end: 904.282, text: 'Eso es todo por ahora.' },
				{
					id: 222,
					start: 904.821,
					end: 909.247,
					text: '<i>Comencé a ver que algunos de los<br />huéspedes más valiosos y distinguidos...</i>'
				},
				{ id: 223, start: 909.367, end: 910.96, text: '<i>...venían por él.</i>' },
				{
					id: 224,
					start: 911.077,
					end: 913.626,
					text: '<i>Al parecer era una parte<br />esencial de sus deberes...</i>'
				},
				{
					id: 225,
					start: 913.996,
					end: 916.465,
					text: '<i>...pero creo que también era un placer.</i>'
				},
				{
					id: 226,
					start: 918.376,
					end: 920.549,
					text: '<i>Los requisitos siempre eran los mismos.</i>'
				},
				{ id: 227, start: 920.67, end: 922.923, text: '<i>Tenían que ser ricas...</i>' },
				{ id: 228, start: 923.256, end: 924.303, text: '<i>...mayores...</i>' },
				{ id: 229, start: 924.424, end: 925.721, text: '<i>...inseguras...</i>' },
				{ id: 230, start: 925.842, end: 926.968, text: '<i>vanidosas...</i>' },
				{ id: 231, start: 927.093, end: 928.561, text: '<i>...superficiales...</i>' },
				{ id: 232, start: 928.678, end: 929.77, text: '<i>...rubias...</i>' },
				{ id: 233, start: 929.887, end: 931.139, text: '<i>...absorbentes.</i>' },
				{ id: 234, start: 932.89, end: 934.187, text: '¿Por qué rubias?' },
				{ id: 235, start: 936.811, end: 938.313, text: 'Porque todas lo eran.' },
				{ id: 236, start: 938.938, end: 940.315, text: '<i>Él era, por cierto...</i>' },
				{
					id: 237,
					start: 940.44,
					end: 943.319,
					text: '<i>...el hombre más perfumado<br />que jamás había conocido.</i>'
				},
				{
					id: 238,
					start: 943.609,
					end: 946.658,
					text: '<i>El aroma anunciaba su negada<br />a gran distancia...</i>'
				},
				{
					id: 239,
					start: 948.03,
					end: 951.034,
					text: '<i>...y permanecía muchos minutos<br />después de su partida.</i>'
				},
				{
					id: 240,
					start: 952.702,
					end: 955.672,
					text: '<i>Trabajaba seis días a la semana<br />más medio día los domingos...</i>'
				},
				{
					id: 241,
					start: 955.788,
					end: 958.007,
					text: '<i>...de las 5 a.m. a pasada la medianoche.</i>'
				},
				{
					id: 242,
					start: 959.208,
					end: 962.087,
					text: '<i>Las comidas pequeñas,<br />pero frecuentes, para tener energía.</i>'
				},
				{
					id: 243,
					start: 962.211,
					end: 964.93,
					text: '<i>Dos desayunos, dos comidas<br />y una cena tarde.</i>'
				},
				{
					id: 244,
					start: 966.174,
					end: 968.848,
					text: '<i>Monsieur Gustave también nos daba<br />un sermón cada noche.</i>'
				},
				{
					id: 245,
					start: 969.343,
					end: 972.643,
					text: 'La arrogancia es solo<br />una expresión del miedo.'
				},
				{ id: 246, start: 972.763, end: 974.936, text: 'La gente teme no obtener lo que desea.' },
				{
					id: 247,
					start: 975.057,
					end: 978.652,
					text: 'Las personas más temibles y poco<br />atractivas solo necesitan que las amen...'
				},
				{ id: 248, start: 978.769, end: 980.988, text: '...y se abrirán como una flor.' },
				{ id: 249, start: 981.105, end: 982.982, text: 'Me recuerda un verso:' },
				{
					id: 250,
					start: 983.107,
					end: 987.829,
					text: '"El pintor tocó el rostro<br />incipiente con ligeras pinceladas...'
				},
				{
					id: 251,
					start: 987.945,
					end: 991.916,
					text: '...y con el rubor del primer color<br />dio vida a su mejilla inerte".'
				},
				{
					id: 252,
					start: 992.033,
					end: 995.253,
					text: '<i>Su propia cena la tomaba<br />a solas en su habitación.</i>'
				},
				{
					id: 253,
					start: 1000.708,
					end: 1004.508,
					text: '<i>La identidad del dueño del hotel<br />nos era desconocida a todos.</i>'
				},
				{
					id: 254,
					start: 1004.629,
					end: 1007.883,
					text: '<i>Cada mes, su emisario,<br />el subdirector Kovacs...</i>'
				},
				{
					id: 255,
					start: 1008.007,
					end: 1013.264,
					text: '<i>...revísaba los libros y entregaba mensajes<br />en nombre del misterioso propietario.</i>'
				},
				{
					id: 256,
					start: 1013.471,
					end: 1017.476,
					text: '<i>En dichas ocasiones, Monsieur Gustave<br />y el gerente, Herr Becker...</i>'
				},
				{
					id: 257,
					start: 1017.6,
					end: 1020.82,
					text: '<i>...se reunían en privado<br />arriba de la Recepción.</i>'
				},
				{
					id: 258,
					start: 1032.865,
					end: 1035.414,
					text: '<i>También fue entonces<br />cuando conocí a Agatha.</i>'
				},
				{ id: 259, start: 1053.469, end: 1055.187, text: '<i>Pero no hablaremos de eso.</i>' },
				{
					id: 260,
					start: 1062.645,
					end: 1064.613,
					text: '<b>PARTE 2<br />MADAME C. V. D. U. T.</b>'
				},
				{ id: 261, start: 1067.65, end: 1069.698, text: '<b>PRENSA</b>' },
				{
					id: 262,
					start: 1070.82,
					end: 1074.495,
					text: '<b>DOS EDICIONES DIARIAS<br />DIARIO DE ZUBROWKA</b>'
				},
				{ id: 263, start: 1103.978, end: 1105.651, text: '<b>NO MOLESTAR</b>' },
				{ id: 264, start: 1106.48, end: 1107.481, text: '- ¿Qué quieres?<br />- Mire.' },
				{
					id: 265,
					start: 1108.399,
					end: 1110.777,
					text: '<b>¿HABRÁ GUERRA?<br />Tanques en la frontera</b>'
				},
				{
					id: 266,
					start: 1110.901,
					end: 1112.574,
					text: '<b>CONDESA DOWAGER<br />HALLADA MUERTA.</b>'
				},
				{ id: 267, start: 1112.695, end: 1113.787, text: 'Dios mío.' },
				{
					id: 268,
					start: 1113.904,
					end: 1116.453,
					text: '- Lo siento mucho, señor.<br />- Debemos ir con ella.'
				},
				{ id: 269, start: 1116.574, end: 1118.292, text: '- ¿Debemos?<br />- De inmediato.' },
				{
					id: 270,
					start: 1118.409,
					end: 1121.083,
					text: 'Ella me necesita, y yo necesito<br />que me ayudes con mis maletas.'
				},
				{
					id: 271,
					start: 1121.203,
					end: 1123.046,
					text: '<i>- ¿Todo bien?<br />- Un momento, querida.</i>'
				},
				{
					id: 272,
					start: 1123.164,
					end: 1124.916,
					text: '- ¿Cuánto tardas en empacar?<br />- 5 minutos.'
				},
				{
					id: 273,
					start: 1125.041,
					end: 1128.341,
					text: "Hazlo. Y trae una botella de<br />Pouilly-Jouvet '26 y dos copas..."
				},
				{
					id: 274,
					start: 1128.461,
					end: 1130.839,
					text: '...para no beber la basura<br />que sirven en el tren.'
				},
				{ id: 275, start: 1140.348, end: 1141.895, text: 'Lo considero culpa mía.' },
				{
					id: 276,
					start: 1143.225,
					end: 1146.525,
					text: 'Intentó decirme que tuvo una premonición,<br />pero no la escuché.'
				},
				{
					id: 277,
					start: 1146.812,
					end: 1150.737,
					text: 'Todo Lutz vestirá de negro,<br />excepto sus propios hijos abominables...'
				},
				{
					id: 278,
					start: 1150.858,
					end: 1153.327,
					text: '...a quienes odiaba y<br />no soportaba siquiera besar.'
				},
				{ id: 279, start: 1153.402, end: 1155.2, text: 'Ellos bailarán como gitanos.' },
				{
					id: 280,
					start: 1158.407,
					end: 1162.753,
					text: 'No vale la pena hacer nada en la vida,<br />pues todo termina en un parpadeo.'
				},
				{
					id: 281,
					start: 1162.912,
					end: 1165.506,
					text: 'Antes de darte cuenta,<br />llega el rigor mortis.'
				},
				{ id: 282, start: 1165.748, end: 1168.251, text: '¡Ay! Los buenos mueren jóvenes.' },
				{
					id: 283,
					start: 1168.584,
					end: 1171.713,
					text: 'Con suerte, le habrá dejado<br />algunos klubecks a tu amigo.'
				},
				{
					id: 284,
					start: 1171.837,
					end: 1175.182,
					text: 'Se sabrá cuando seque<br />la tinta del certificado de defunción.'
				},
				{ id: 285, start: 1176.425, end: 1178.519, text: 'Era dinamita en la cama, por cierto.' },
				{ id: 286, start: 1180.554, end: 1182.682, text: 'Tenía 84 años, Monsieur Gustave.' },
				{ id: 287, start: 1182.765, end: 1184.392, text: 'He estado con mayores.' },
				{ id: 288, start: 1184.517, end: 1186.519, text: 'Cuando eres joven, todo son filetes...' },
				{
					id: 289,
					start: 1186.602,
					end: 1189.572,
					text: '...pero con el tiempo debes<br />pasar a los cortes más baratos.'
				},
				{
					id: 290,
					start: 1189.689,
					end: 1192.033,
					text: 'Por mí está bien,<br />porque me gustan.'
				},
				{ id: 291, start: 1192.191, end: 1194.614, text: 'Gallina vieja hace buen caldo, dicen.' },
				{
					id: 292,
					start: 1197.53,
					end: 1199.908,
					text: '¿Por qué nos detenemos<br />en un campo de cebada?'
				},
				{ id: 293, start: 1205.871, end: 1207.623, text: '19 de octubre.' },
				{ id: 294, start: 1207.748, end: 1209.876, text: 'Cierre de la frontera.' },
				{ id: 295, start: 1215.089, end: 1216.762, text: 'Buen día, señores.' },
				{ id: 296, start: 1216.966, end: 1218.434, text: 'Documentos, por favor.' },
				{ id: 297, start: 1218.551, end: 1220.428, text: 'Con gusto.' },
				{
					id: 298,
					start: 1224.473,
					end: 1228.444,
					text: 'No es una fotografía muy halagadora.<br />Antes se me consideraba una belleza.'
				},
				{
					id: 299,
					start: 1229.645,
					end: 1232.148,
					text: '¿De qué es la "F"?<br />¿De Fritz? ¿Franz?'
				},
				{ id: 300, start: 1232.273, end: 1234.571, text: '- Franz.<br />- ¡Lo sabía!' },
				{ id: 301, start: 1235.651, end: 1237.574, text: 'Está haciendo una mueca.' },
				{
					id: 302,
					start: 1238.154,
					end: 1242.125,
					text: 'Es una visa migratoria con permiso<br />de trabajo, Franz, querido.'
				},
				{ id: 303, start: 1242.241, end: 1243.333, text: 'Viene conmigo.' },
				{ id: 304, start: 1244.785, end: 1246.128, text: 'Salga, por favor.' },
				{
					id: 305,
					start: 1247.747,
					end: 1250.921,
					text: 'Un momento, Siéntate, Zero.<br />Sus documentos están en orden.'
				},
				{
					id: 306,
					start: 1251,
					end: 1253.674,
					text: 'Lo verifiqué yo mismo.<br />No pueden arrestarlo'
				},
				{ id: 307, start: 1253.794, end: 1255.637, text: 'solo porque es un maldito inmigrante.' },
				{ id: 308, start: 1255.755, end: 1257.507, text: 'No ha hecho nada malo.' },
				{ id: 309, start: 1263.512, end: 1265.48, text: '¡Basta maldita sea!' },
				{
					id: 310,
					start: 1265.598,
					end: 1268.192,
					text: '¡No importa, Monsieur Gustave!<br />¡Que procedan!'
				},
				{ id: 311, start: 1268.517, end: 1269.564, text: '¡Eso dolió!' },
				{ id: 312, start: 1272.271, end: 1275.445, text: '¡Malditos fascistas asquerosos!' },
				{
					id: 313,
					start: 1275.691,
					end: 1277.989,
					text: '¡Quítenle las manos de encima<br />a mi botones!'
				},
				{ id: 314, start: 1289.789, end: 1290.961, text: '¿Cuáles el problema?' },
				{
					id: 315,
					start: 1291.207,
					end: 1295.178,
					text: '¡Esto es intolerable! El joven trabaja<br />para mí en el Gran Hotel Budapest.'
				},
				{ id: 316, start: 1296.879, end: 1298.301, text: '¿Monsieur Gustave?' },
				{ id: 317, start: 1301.008, end: 1302.555, text: 'Me llamo Henckels.' },
				{
					id: 318,
					start: 1304.637,
					end: 1307.561,
					text: 'Soy hijo del Dr. Wolfgang<br />Henckels-Bergersdórfer.'
				},
				{ id: 319, start: 1308.14, end: 1309.357, text: '¿Me recuerda?' },
				{
					id: 320,
					start: 1310.518,
					end: 1314.239,
					text: 'Sé bien quién eres. Es sorprendente.<br />Eres el pequeño Albert.'
				},
				{
					id: 321,
					start: 1314.396,
					end: 1316.398,
					text: 'Estoy muy avergonzado.<br />Suéltenlos.'
				},
				{ id: 322, start: 1317.233, end: 1318.234, text: '¡Suéltenlos!' },
				{ id: 323, start: 1326.033, end: 1327.41, text: 'Su colega es apátrida.' },
				{
					id: 324,
					start: 1327.576,
					end: 1332.878,
					text: 'Deberá solicitar un permiso especial<br />de tránsito, muy difícil de obtener.'
				},
				{ id: 325, start: 1333.582, end: 1334.708, text: 'Tome esto.' },
				{
					id: 326,
					start: 1336.001,
					end: 1337.423,
					text: 'Es temporal, pero es lo que puedo ofrecer.'
				},
				{ id: 327, start: 1337.545, end: 1339.092, text: '<b>PERMISO ESPECIAL DE TRÁNSITO</b>' },
				{ id: 328, start: 1339.213, end: 1340.931, text: '¿Cómo está tu maravillosa madre?' },
				{ id: 329, start: 1341.549, end: 1343.597, text: '- Muy bien, gracias.<br />- La adoro.' },
				{ id: 330, start: 1343.717, end: 1345.264, text: '- Envíale saludos.<br />- Lo haré.' },
				{
					id: 331,
					start: 1346.554,
					end: 1350.525,
					text: 'Tu compañero fue muy amable conmigo<br />cuando yo era un niño solitario.'
				},
				{
					id: 332,
					start: 1351.559,
					end: 1354.028,
					text: 'Mis hombres y yo les pedimos disculpas.'
				},
				{ id: 333, start: 1354.27, end: 1356.113, text: 'Disculpe, señor.' },
				{
					id: 334,
					start: 1372.371,
					end: 1376.251,
					text: 'Aún hay vagos destellos de civilidad...'
				},
				{
					id: 335,
					start: 1376.375,
					end: 1379.879,
					text: '...en este matadero salvaje<br />que alguna vez fue la humanidad.'
				},
				{
					id: 336,
					start: 1379.962,
					end: 1384.308,
					text: 'Es lo que nosotros brindamos a<br />nuestro modo humilde, insignificante...'
				},
				{ id: 337, start: 1385.593, end: 1386.81, text: 'Al diablo.' },
				{
					id: 338,
					start: 1418.959,
					end: 1422.008,
					text: '¿Dónde está, Clotilde?<br />Llévame con ella.'
				},
				{
					id: 339,
					start: 1457.373,
					end: 1461.048,
					text: 'Te ves de maravilla, querida.<br />Hicieron un magnífico trabajo.'
				},
				{
					id: 340,
					start: 1461.168,
					end: 1465.218,
					text: 'No sé qué crema te pusieron en<br />la morgue, pero yo quiero un poco.'
				},
				{ id: 341, start: 1465.381, end: 1467.554, text: 'Hace años que no te veías tan bien.' },
				{ id: 342, start: 1467.716, end: 1469.514, text: 'Luces como si estuvieras viva.' },
				{ id: 343, start: 1475.724, end: 1478.193, text: 'Sí te lo cambiaste, después de todo.' },
				{ id: 344, start: 1478.394, end: 1480.396, text: 'Es perfecto.<br />Clotilde.' },
				{
					id: 345,
					start: 1480.521,
					end: 1483.57,
					text: '- Sí, Monsieur Gustave.<br />- Un vaso de agua sin hielo, por favor.'
				},
				{ id: 346, start: 1483.816, end: 1483.862, text: 'Sí, Monsieur Gustave.' },
				{ id: 347, start: 1483.857, end: 1484.949, text: 'Sí, Monsieur Gustave.' },
				{
					id: 348,
					start: 1485.025,
					end: 1488.154,
					text: 'Y Monsieur Serge quiere hablar con usted<br />en privado en su oficina.'
				},
				{ id: 349, start: 1490.739, end: 1491.831, text: 'Muy bien.' },
				{ id: 350, start: 1492.574, end: 1494.201, text: 'No tardaré, querida.' },
				{
					id: 351,
					start: 1495.869,
					end: 1499.84,
					text: '<i>Nos escoltaron por una puerta<br />de paño y un corredor de servicio...</i>'
				},
				{ id: 352, start: 1499.915, end: 1501.588, text: '<i>...hasta la despensa.</i>' },
				{
					id: 353,
					start: 1504.253,
					end: 1510.056,
					text: '<i>Al momento, se abrió la puerta de la cocina<br />y apareció un sirviente vestido de blanco.</i>'
				},
				{
					id: 354,
					start: 1510.884,
					end: 1513.228,
					text: '<i>Jamás he olvidado<br />la expresión de ese hombre.</i>'
				},
				{ id: 355, start: 1514.013, end: 1515.936, text: '¿Qué demonios está pasando?' },
				{
					id: 356,
					start: 1516.765,
					end: 1520.19,
					text: '<i>Yo nunca en mi vida había<br />entrado a una casa como esa.</i>'
				},
				{
					id: 357,
					start: 1521.729,
					end: 1524.608,
					text: '<i>Entendí muy poco de<br />los hechos a continuación...</i>'
				},
				{
					id: 358,
					start: 1524.732,
					end: 1527.281,
					text: '<i>...pero a la larga llegué a comprender:</i>'
				},
				{
					id: 359,
					start: 1527.693,
					end: 1530.617,
					text: '<i>Cuando el destino de una<br />gran fortuna está en juego...</i>'
				},
				{
					id: 360,
					start: 1531.363,
					end: 1535.084,
					text: '<i>mía codicia corre por las venas<br />de los hombres como veneno.</i>'
				},
				{ id: 361, start: 1538.37, end: 1540.589, text: '<i>Tíos, sobrinos, primos...</i>' },
				{
					id: 362,
					start: 1540.748,
					end: 1543.547,
					text: '<i>...familia política con lazos<br />cada vez más dudosos.</i>'
				},
				{
					id: 363,
					start: 1543.625,
					end: 1547.596,
					text: '<i>Los parientes más lejanos de la<br />anciana habían aparecido de la nada.</i>'
				},
				{
					id: 364,
					start: 1549.048,
					end: 1553.554,
					text: '<i>Presidiendo esta congregación,<br />era una coincidencia confusa...</i>'
				},
				{
					id: 365,
					start: 1553.635,
					end: 1556.388,
					text: '<i>...estaba nuestro subdirector Kovacs...</i>'
				},
				{
					id: 366,
					start: 1556.472,
					end: 1558.975,
					text: '<i>...quien era, claro, un importante abogado.</i>'
				},
				{
					id: 367,
					start: 1559.433,
					end: 1563.154,
					text: '<i>Él era el albacea de los bienes<br />de la difunta viuda.</i>'
				},
				{
					id: 368,
					start: 1569.485,
					end: 1572.91,
					text: 'Este es el testamento y<br />última voluntad de Madame D.'
				},
				{ id: 369, start: 1573.822, end: 1575.995, text: 'Consta de una tontina general...' },
				{
					id: 370,
					start: 1576.158,
					end: 1580.004,
					text: '...escrita antes de la muerte<br />de su esposo hace 46 años...'
				},
				{ id: 371, start: 1580.162, end: 1583.587, text: '...en combinación con 635 enmiendas...' },
				{
					id: 372,
					start: 1583.665,
					end: 1586.509,
					text: '...notaciones, correcciones<br />y cartas de deseos...'
				},
				{
					id: 373,
					start: 1586.627,
					end: 1589.597,
					text: '...ejecutadas durante<br />las siguientes décadas.'
				},
				{
					id: 374,
					start: 1591.799,
					end: 1594.928,
					text: 'La legalidad de dicha acumulación<br />requiere más análisis...'
				},
				{
					id: 375,
					start: 1595.01,
					end: 1598.605,
					text: '...pero opinamos que<br />era la intención de Madame D...'
				},
				{
					id: 376,
					start: 1598.68,
					end: 1603.186,
					text: '...que el control de sus bienes<br />le fuera transferido a su hijo Dmitri...'
				},
				{
					id: 377,
					start: 1603.644,
					end: 1608.195,
					text: '...con pensiones para sus hermanas<br />Marguerite, Laetizia y Carolina...'
				},
				{
					id: 378,
					start: 1608.357,
					end: 1612.032,
					text: '...y regalos menores para distintos<br />miembros de su familia lejana...'
				},
				{
					id: 379,
					start: 1612.152,
					end: 1615.531,
					text: '...de acuerdo con la lista de beneficiarios,<br />la cual leeré en su momento.'
				},
				{ id: 380, start: 1617.783, end: 1619.035, text: 'Sin embargo...' },
				{
					id: 381,
					start: 1622.496,
					end: 1627.343,
					text: '...recibí esta mañana por correo<br />un codicilo adicional...'
				},
				{
					id: 382,
					start: 1627.459,
					end: 1631.68,
					text: '...aparentemente enviado por Madame D<br />durante sus últimas horas de vida...'
				},
				{
					id: 383,
					start: 1631.797,
					end: 1634.516,
					text: '...que contiene una enmienda<br />al certificado original...'
				},
				{
					id: 384,
					start: 1634.633,
					end: 1638.012,
					text: '...el cual, como indica la ley,<br />leeré en este momento.'
				},
				{
					id: 385,
					start: 1638.137,
					end: 1642.233,
					text: 'La autenticidad de este documento<br />no ha sido confirmada por el magistrado...'
				},
				{
					id: 386,
					start: 1642.391,
					end: 1646.237,
					text: '...así que les pido ser pacientes<br />y evitar comentarios...'
				},
				{
					id: 387,
					start: 1646.353,
					end: 1649.527,
					text: '...hasta que nuestras investigaciones<br />lleguen a su fin.'
				},
				{
					id: 388,
					start: 1658.407,
					end: 1662.082,
					text: '"A mi estimado amigo, quien fue<br />un bálsamo en mis últimos años...'
				},
				{
					id: 389,
					start: 1662.202,
					end: 1666.878,
					text: '...y trajo luz a la vida de una anciana<br />que creyó que no volvería a ser feliz...'
				},
				{ id: 390, start: 1667.082, end: 1668.88, text: '...Monsieur Gustave H...' },
				{
					id: 391,
					start: 1671.086,
					end: 1674.056,
					text: '...lego, dono y asigno, libre de impuestos...'
				},
				{
					id: 392,
					start: 1674.173,
					end: 1676.596,
					text: '...y con derecho fiduciario absoluto...'
				},
				{
					id: 393,
					start: 1677.426,
					end: 1679.895,
					text: '- ...la pintura "Niño con manzana"...<br />- ¡Vaya!'
				},
				{
					id: 394,
					start: 1680.012,
					end: 1682.106,
					text: '- ...de Johannes van Hoytl...<br />- ¡No puedo creerlo!'
				},
				{ id: 395, start: 1682.264, end: 1683.39, text: '- ...el joven...<br />- ¿Qué?' },
				{ id: 396, start: 1683.515, end: 1685.267, text: '...que nos dio tanto placer...' },
				{ id: 397, start: 1685.267, end: 1686.268, text: '¿El van Hoytl?' },
				{
					id: 398,
					start: 1686.351,
					end: 1687.477,
					text: '- ¿Sin impuestos?<br />- ¿Puede hacer eso?'
				},
				{ id: 399, start: 1687.769, end: 1689.612, text: '¿Quién es Gustave H.?' },
				{ id: 400, start: 1690.898, end: 1692.741, text: 'Temo que soy yo, querido.' },
				{ id: 401, start: 1694.86, end: 1696.612, text: '¡Ese maldito marica!' },
				{ id: 402, start: 1697.404, end: 1700.203, text: 'Es un concierge.<br />¿Qué hace aquí?' },
				{
					id: 403,
					start: 1700.282,
					end: 1703.252,
					text: 'Vine a rendirle honores a una<br />gran mujer a la que amaba.'
				},
				{
					id: 404,
					start: 1703.368,
					end: 1706.872,
					text: '- ¡Este hombre es un intruso en mi casa!<br />- Aún no es tuya, Dmitri.'
				},
				{ id: 405, start: 1706.955, end: 1709.049, text: 'Cuando se otorgue la sucesión y...' },
				{
					id: 406,
					start: 1709.124,
					end: 1711.627,
					text: '"Niño con manzana" no será suyo,<br />maldito mariquita.'
				},
				{ id: 407, start: 1713.045, end: 1715.298, text: '¿Crees que con eso me vas a ofender?' },
				{
					id: 408,
					start: 1715.422,
					end: 1717.47,
					text: '¡Llamen a la policía!<br />Levantaremos cargos.'
				},
				{
					id: 409,
					start: 1717.633,
					end: 1720.978,
					text: 'Este criminal ha fastidiado<br />a mi familia desde hace 20 años.'
				},
				{
					id: 410,
					start: 1721.094,
					end: 1723.096,
					text: 'Es un aventurero despiadado,<br />un estafador...'
				},
				{
					id: 411,
					start: 1723.222,
					end: 1725.645,
					text: '...que asedia a ancianas<br />inestables y enfermas.'
				},
				{ id: 412, start: 1725.766, end: 1727.564, text: 'Y probablemente se acuesta con ellas.' },
				{ id: 413, start: 1727.976, end: 1729.978, text: 'Me acuesto con todas mis amigas.' },
				{ id: 414, start: 1739.738, end: 1741.331, text: '¿Dónde está Céline?' },
				{ id: 415, start: 1741.49, end: 1742.582, text: '¿Qué?' },
				{
					id: 416,
					start: 1742.908,
					end: 1745.286,
					text: 'Está muerta.<br />Estamos leyendo su testamento.'
				},
				{ id: 417, start: 1745.41, end: 1747.663, text: 'Ah, sí, sí, por supuesto.' },
				{
					id: 418,
					start: 1748.163,
					end: 1751.838,
					text: 'Si le puso un dedo encima<br />a mi madre, viva o muerta...'
				},
				{ id: 419, start: 1752, end: 1754.344, text: '...juro que lo degollaré.<br />¿Me oye?' },
				{
					id: 420,
					start: 1754.461,
					end: 1756.589,
					text: '¿No se supone que soy<br />un maldito marica?'
				},
				{
					id: 421,
					start: 1757.506,
					end: 1761.181,
					text: '- Lo es, pero es bisexual.<br />- Cambiemos de tema. Me voy.'
				},
				{ id: 422, start: 1767.557, end: 1767.603, text: 'Espere aquí en silencio, por favor.' },
				{ id: 423, start: 1767.599, end: 1770.022, text: 'Espere aquí en silencio, por favor.' },
				{
					id: 424,
					start: 1770.477,
					end: 1773.697,
					text: 'Ese retrato, "Niño con manzana",<br />es invaluable, ¿entiendes?'
				},
				{
					id: 425,
					start: 1774.356,
					end: 1777.53,
					text: 'Felicitaciones, Monsieur Gustave.<br />Intentarán quitármelo.'
				},
				{
					id: 426,
					start: 1777.651,
					end: 1780.029,
					text: '- ¿Es muy hermoso?<br />- Indescriptible.'
				},
				{
					id: 427,
					start: 1780.153,
					end: 1784.829,
					text: '"El bardo más talentoso no puede más<br />que cantar a su ausencia y lo que no es".'
				},
				{ id: 428, start: 1784.95, end: 1786.623, text: '- "Su lengua..."<br />- ¿Puedo verlo?' },
				{ id: 429, start: 1787.494, end: 1788.871, text: 'No veo por qué no.' },
				{
					id: 430,
					start: 1821.403,
					end: 1826.409,
					text: 'Este es el exquisito retrato de van Hoytl de<br />un bello joven en el umbral de la madurez.'
				},
				{
					id: 431,
					start: 1826.533,
					end: 1830.583,
					text: 'Rubio, suave, su piel blanca<br />como esa leche. De alta cuna.'
				},
				{
					id: 432,
					start: 1830.746,
					end: 1834.171,
					text: 'Uno de los últimos en colecciones<br />privadas y, sin duda, el mejor.'
				},
				{ id: 433, start: 1834.249, end: 1835.922, text: 'Es una obra maestra.' },
				{ id: 434, start: 1836.043, end: 1838.262, text: 'Lo demás que hay aquí es basura.' },
				{ id: 435, start: 1885.008, end: 1885.054, text: '¿Monsieur Gustave?' },
				{ id: 436, start: 1885.05, end: 1886.973, text: '¿Monsieur Gustave?' },
				{ id: 437, start: 1889.262, end: 1889.308, text: '¿Puedo ayudarle?' },
				{ id: 438, start: 1889.304, end: 1891.147, text: '¿Puedo ayudarle?' },
				{ id: 439, start: 1892.14, end: 1892.857, text: 'Sí, Serge.' },
				{ id: 440, start: 1892.974, end: 1893.02, text: 'Puedes envolver esto, por favor.' },
				{ id: 441, start: 1893.016, end: 1894.939, text: 'Puedes envolver esto, por favor.' },
				{ id: 442, start: 1894.935, end: 1894.981, text: 'Puedes envolver esto, por favor.' },
				{ id: 443, start: 1895.143, end: 1895.189, text: '¿Envolver...' },
				{ id: 444, start: 1895.185, end: 1896.232, text: '¿Envolver...' },
				{ id: 445, start: 1896.311, end: 1897.984, text: '... "Niño con manzana"?' },
				{ id: 446, start: 1909.157, end: 1910.659, text: '<b>CONFIDENCIAL</b>' },
				{ id: 447, start: 1916.998, end: 1919.797, text: '¿Qué querías decirme... hace rato?' },
				{ id: 448, start: 1920.669, end: 1922.592, text: 'Creo que no puedo decírselo ahora.' },
				{
					id: 449,
					start: 1922.963,
					end: 1925.432,
					text: 'Escríbeme mañana.<br />¡A la estación Lutzbahn!'
				},
				{ id: 450, start: 1937.31, end: 1939.028, text: 'Jamás me separaré de él.' },
				{
					id: 451,
					start: 1939.479,
					end: 1943.825,
					text: 'A ella le recordaba a mí.<br />A mí me la recordará a ella. Siempre.'
				},
				{ id: 452, start: 1944.025, end: 1946.653, text: 'Moriré con esta pintura sobre mi cama.' },
				{ id: 453, start: 1946.987, end: 1948.66, text: '¿Notas el parecido?' },
				{ id: 454, start: 1950.157, end: 1951.534, text: 'Ah, sí.' },
				{ id: 455, start: 1957.205, end: 1959.048, text: 'En realidad, deberíamos venderlo.' },
				{
					id: 456,
					start: 1959.207,
					end: 1962.552,
					text: 'Lo antes posible,<br />por si intentan robárnoslo.'
				},
				{ id: 457, start: 1962.669, end: 1965.388, text: 'Además. Esos soldados en el tren...' },
				{
					id: 458,
					start: 1965.505,
					end: 1969.135,
					text: 'Podría ser una guerra complicada<br />y afectar seriamente el negocio hotelero.'
				},
				{ id: 459, start: 1969.217, end: 1971.515, text: 'Inclusive podrían invadirnos mañana.' },
				{ id: 460, start: 1977.893, end: 1980.066, text: 'Hagamos un pacto de sangre solemne.' },
				{
					id: 461,
					start: 1980.228,
					end: 1983.732,
					text: 'Venderemos "Niño con manzana"<br />en el mercado negro esta semana.'
				},
				{
					id: 462,
					start: 1983.857,
					end: 1986.986,
					text: 'Saldremos del país y nos<br />ocultaremos en la Riviera Maltesa...'
				},
				{
					id: 463,
					start: 1987.068,
					end: 1989.571,
					text: '...hasta que podamos<br />retomar nuestros puestos.'
				},
				{
					id: 464,
					start: 1989.738,
					end: 1994.835,
					text: 'A cambio de tu ayuda, lealtad y servicios<br />como mi asistente personal te ofrezco...'
				},
				{ id: 465, start: 1995.202, end: 1998.046, text: '...el 1.5% del precio neto de venta.' },
				{
					id: 466,
					start: 1998.163,
					end: 2000.507,
					text: '- ¿1.5%?<br />- Más alojamiento y alimentos.'
				},
				{
					id: 467,
					start: 2001.583,
					end: 2004.086,
					text: '- ¿Podría ser 10%?<br />- ¿Diez? ¿Bromeas?'
				},
				{
					id: 468,
					start: 2004.211,
					end: 2006.509,
					text: 'Es más de lo que cobra<br />un comerciante de arte...'
				},
				{
					id: 469,
					start: 2006.588,
					end: 2010.092,
					text: '...y tú no distingues un chiaroscuro<br />de unas tripas de pollo. No, 1.5%.'
				},
				{
					id: 470,
					start: 2010.258,
					end: 2014.434,
					text: 'Pero si yo muero primero, que es<br />lo más seguro, serás mi único heredero.'
				},
				{
					id: 471,
					start: 2014.554,
					end: 2018.775,
					text: 'No tengo mucho: Cepillos de marfil<br />y mi biblioteca de poesía romántica...'
				},
				{
					id: 472,
					start: 2018.934,
					end: 2021.528,
					text: '...pero llegado el momento serán tuyos...'
				},
				{
					id: 473,
					start: 2021.603,
					end: 2024.607,
					text: '...junto con lo que no hayamos gastado<br />en prostitutas y whisky.'
				},
				{ id: 474, start: 2024.731, end: 2026.608, text: 'Este es nuestro compromiso sagrado.' },
				{ id: 475, start: 2027.776, end: 2029.369, text: 'Prepararé el documento de inmediato.' },
				{
					id: 476,
					start: 2034.908,
					end: 2039.129,
					text: 'Yo, Gustave H., en suficiente uso<br />de mis facultades mentales...'
				},
				{
					id: 477,
					start: 2039.287,
					end: 2042.791,
					text: '...en este día, 19 de octubre de 1932...'
				},
				{ id: 478, start: 2043.083, end: 2045.461, text: '<i>Jamás me dijo su origen.</i>' },
				{
					id: 479,
					start: 2049.214,
					end: 2051.808,
					text: '<i>Yo jamás le pregunté<br />quién había sido su familia.</i>'
				},
				{ id: 480, start: 2072.571, end: 2073.663, text: 'Disculpe.' },
				{
					id: 481,
					start: 2077.45,
					end: 2080.795,
					text: 'La policía está aquí.<br />Preguntan por usted.'
				},
				{ id: 482, start: 2084.624, end: 2086.297, text: 'Diles que ahora bajo.' },
				{ id: 483, start: 2087.752, end: 2088.799, text: 'Bien.' },
				{ id: 484, start: 2095.135, end: 2096.808, text: '¿Alguna vez te han interrogado?' },
				{ id: 485, start: 2096.928, end: 2098.18, text: '- Sí, una vez.<br />- ¿Por?' },
				{
					id: 486,
					start: 2098.346,
					end: 2101.099,
					text: 'La milicia rebelde<br />me arrestó y me torturó.'
				},
				{
					id: 487,
					start: 2101.182,
					end: 2103.184,
					text: 'Entonces ya sabes qué hacer.<br />Cierra el pico.'
				},
				{
					id: 488,
					start: 2103.31,
					end: 2106.154,
					text: '- Claro.<br />- Jamás has oído de van Hoytl. Vamos.'
				},
				{ id: 489, start: 2121.828, end: 2123.705, text: '¿En qué podemos servirles, caballeros?' },
				{ id: 490, start: 2124.831, end: 2126.504, text: 'Ah, inspector Henckels.' },
				{
					id: 491,
					start: 2126.625,
					end: 2129.219,
					text: 'Por órdenes del comandante de la policía<br />de Zubrowka queda arrestado...'
				},
				{
					id: 492,
					start: 2129.336,
					end: 2133.637,
					text: '...por el asesinato de Madame Céline<br />Villeneuve Desgoffe und Taxis.'
				},
				{
					id: 493,
					start: 2133.715,
					end: 2136.969,
					text: 'Sabía que había algo raro.<br />Nunca supimos la causa de la muerte.'
				},
				{ id: 494, start: 2137.052, end: 2140.397, text: 'Fue asesinada y creen que yo lo hice.' },
				{ id: 495, start: 2141.973, end: 2143.065, text: '¡Oiga!' },
				{ id: 496, start: 2145.852, end: 2147.195, text: '¡Deténgase!' },
				{
					id: 497,
					start: 2151.816,
					end: 2156.663,
					text: '<b>PARTE 3: CONTROL FRONTERIZO 19<br />CAMPO DE INTERNAMIENTO</b>'
				},
				{ id: 498, start: 2178.426, end: 2180.269, text: '<b>UNA SEMANA DESPUÉS</b>' },
				{ id: 499, start: 2180.387, end: 2182.355, text: '<b>EN ESPERA DEL JUICIO</b>' },
				{ id: 500, start: 2197.112, end: 2198.455, text: '¿Qué sucedió?' },
				{
					id: 501,
					start: 2198.947,
					end: 2201.951,
					text: 'Lo que sucedió, querido Zero,<br />es que le di una golpiza...'
				},
				{
					id: 502,
					start: 2202.117,
					end: 2204.791,
					text: '...a un enano llorón<br />llamado Pinky Bandinski...'
				},
				{ id: 503, start: 2204.911, end: 2207.084, text: '...que osó cuestionar mi virilidad...' },
				{
					id: 504,
					start: 2207.205,
					end: 2211.255,
					text: '...porque de las novelas rosas<br />hemos aprendido que en un lugar así...'
				},
				{ id: 505, start: 2211.376, end: 2213.094, text: '...nunca debes ser un gallina.' },
				{
					id: 506,
					start: 2213.211,
					end: 2216.806,
					text: 'Debes darte tu lugar desde el primer día,<br />ganarte su respeto.'
				},
				{
					id: 507,
					start: 2217.465,
					end: 2220.309,
					text: 'Debiste ver cómo estaba<br />la cara de él esta mañana.'
				},
				{ id: 508, start: 2223.471, end: 2225.394, text: 'De hecho, nos hicimos buenos amigos.' },
				{ id: 509, start: 2225.473, end: 2227.146, text: 'Ya lo conocerás, espero.' },
				{ id: 510, start: 2227.976, end: 2230.149, text: 'Bien, ¿hablaste con Kovacs?' },
				{ id: 511, start: 2230.311, end: 2231.779, text: 'Lo vi anoche en secreto.' },
				{
					id: 512,
					start: 2231.896,
					end: 2234.49,
					text: 'Me hizo jurar sobre la Biblia<br />que no le diría a nadie.'
				},
				{
					id: 513,
					start: 2234.607,
					end: 2236.78,
					text: '- Usted también debe hacerlo.<br />- Luego.'
				},
				{
					id: 514,
					start: 2236.901,
					end: 2239.154,
					text: '- Sospecha que es inocente.<br />- Por supuesto.'
				},
				{ id: 515, start: 2239.654, end: 2240.997, text: '¿De qué se me acusa?' },
				{
					id: 516,
					start: 2242.657,
					end: 2245.877,
					text: 'A altas horas de la madrugada<br />del 19 de octubre...'
				},
				{
					id: 517,
					start: 2245.994,
					end: 2249.043,
					text: '...un individuo bien conocido en la casa,<br />Monsieur Gustave H...'
				},
				{
					id: 518,
					start: 2249.164,
					end: 2252.464,
					text: '...llegó a la residencia de los<br />Desgoffe und Taxis en Lutz...'
				},
				{
					id: 519,
					start: 2252.542,
					end: 2254.84,
					text: '...y entró por el callejón de servicio...'
				},
				{ id: 520, start: 2254.961, end: 2256.554, text: '...sin alertar de su presencia...' },
				{
					id: 521,
					start: 2256.671,
					end: 2260.175,
					text: '...y llegó, por escaleras posteriores<br />y pasajes de servicio...'
				},
				{
					id: 522,
					start: 2260.341,
					end: 2263.811,
					text: '...hasta los aposentos privados<br />de Madame D.'
				},
				{
					id: 523,
					start: 2263.887,
					end: 2268.518,
					text: 'No hay evidencia que indique si esta visita<br />fue acordada con ella o no.'
				},
				{ id: 524, start: 2268.641, end: 2270.689, text: 'A la mañana siguiente...' },
				{
					id: 525,
					start: 2270.81,
					end: 2273.529,
					text: '...Madame D fue hallada muerta<br />por envenenamiento con estricnina.'
				},
				{
					id: 526,
					start: 2273.646,
					end: 2275.819,
					text: 'A M. Gustave no se le vio<br />de nuevo en la casa...'
				},
				{
					id: 527,
					start: 2275.899,
					end: 2279.199,
					text: '...hasta, por supuesto, 24 horas después.'
				},
				{
					id: 528,
					start: 2279.36,
					end: 2284.241,
					text: 'La identidad de quienes le acusan<br />queda asentada en esta declaración.'
				},
				{
					id: 529,
					start: 2284.365,
					end: 2287.835,
					text: 'Incluye, básicamente,<br />a todos los parientes lejanos...'
				},
				{
					id: 530,
					start: 2287.911,
					end: 2293.008,
					text: '...pero el testigo clave que ostensiblemente<br />vio los presuntos hechos...'
				},
				{ id: 531, start: 2293.082, end: 2295.505, text: '...al parecer huyó de la jurisdicción.' },
				{
					id: 532,
					start: 2295.585,
					end: 2300.216,
					text: 'Actualmente se desconoce su paradero,<br />pero le buscan las autoridades pertinentes.'
				},
				{ id: 533, start: 2301.007, end: 2302.179, text: '¿Quién es él?' },
				{ id: 534, start: 2306.554, end: 2308.773, text: '- ¿Serge?<br />- Eso me temo.' },
				{ id: 535, start: 2308.89, end: 2310.267, text: 'Ese desgraciado.' },
				{ id: 536, start: 2311.267, end: 2313.611, text: 'No, no me lo creo.<br />Lo obligaron.' },
				{ id: 537, start: 2313.728, end: 2315.605, text: 'Me arrojaron a un nido de víboras.' },
				{ id: 538, start: 2316.022, end: 2317.194, text: '¿Tiene una coartada?' },
				{
					id: 539,
					start: 2317.273,
					end: 2319.867,
					text: 'Por supuesto, pero está casada<br />con el duque de Westfalia.'
				},
				{
					id: 540,
					start: 2319.943,
					end: 2322.287,
					text: 'No puedo mezclar su nombre<br />en este asunto.'
				},
				{
					id: 541,
					start: 2322.403,
					end: 2326.124,
					text: '- Su vida corre peligro.<br />- Lo sé, pero la muy desgraciada huyó.'
				},
				{
					id: 542,
					start: 2326.241,
					end: 2330.212,
					text: 'Está en el Queen Nasstasja<br />en camino a Tanganica.'
				},
				{ id: 543, start: 2332.622, end: 2334.09, text: 'No se dé por vencido.' },
				{
					id: 544,
					start: 2339.712,
					end: 2341.931,
					text: '<i>Los detalles de la conspiración...</i>'
				},
				{ id: 545, start: 2342.715, end: 2344.809, text: '<i>...ahora del dominio público...</i>' },
				{
					id: 546,
					start: 2344.926,
					end: 2348.271,
					text: '<i>...eran para nosotros, en aquel momento,<br />imposibles de entender.</i>'
				},
				{ id: 547, start: 2365.28, end: 2366.247, text: '<b>INVESTIGADOR PRIVADO</b>' },
				{ id: 548, start: 2366.322, end: 2367.414, text: 'Busco a Serge X...' },
				{
					id: 549,
					start: 2367.49,
					end: 2370.46,
					text: '...un joven al servicio de mis patrones...'
				},
				{
					id: 550,
					start: 2370.618,
					end: 2373.963,
					text: '...la familia Desgoffe und Taxis<br />de Schloss Lutz.'
				},
				{
					id: 551,
					start: 2375.248,
					end: 2377.125,
					text: '- ¿Sí, señor?<br />- ¿Usted es su hermana?'
				},
				{
					id: 552,
					start: 2377.917,
					end: 2379.76,
					text: '- Sí, señor.<br />- ¿Lo ha visto últimamente?'
				},
				{ id: 553, start: 2380.67, end: 2383.014, text: '- No, señor.<br />- ¿No, señor?' },
				{ id: 554, start: 2383.965, end: 2385.137, text: 'No, señor.' },
				{
					id: 555,
					start: 2388.303,
					end: 2391.147,
					text: 'Debo hallarlo de inmediato<br />por su propia seguridad...'
				},
				{ id: 556, start: 2391.264, end: 2392.982, text: '...y la de todos los demás.' },
				{ id: 557, start: 2393.099, end: 2394.271, text: 'Si llegara a venir...' },
				{
					id: 558,
					start: 2395.977,
					end: 2398.321,
					text: '- ¿Sí, señor?<br />- Dígale que Jopling dice:'
				},
				{ id: 559, start: 2398.521, end: 2400.023, text: '"Vuelve a casa".' },
				{ id: 560, start: 2403.526, end: 2405.494, text: '<i>Pero una cosa era segura:</i>' },
				{
					id: 561,
					start: 2408.031,
					end: 2411.205,
					text: '<i>Los Desgoffe und Taxis<br />eran una familia muy poderosa...</i>'
				},
				{
					id: 562,
					start: 2415.622,
					end: 2418.341,
					text: '<i>...y el tiempo no estaba de nuestro lado.</i>'
				},
				{
					id: 563,
					start: 2425.84,
					end: 2428.844,
					text: 'Una carta de Monsieur Gustave.<br />Zero.'
				},
				{ id: 564, start: 2429.677, end: 2431.35, text: '- ¿Quiere que yo...?<br />- Léela.' },
				{ id: 565, start: 2437.393, end: 2439.646, text: '"Mis queridos y leales colegas".' },
				{
					id: 566,
					start: 2439.729,
					end: 2444.826,
					text: 'Les extraño profundamente al escribir<br />desde mi lamentable y absurda reclusión.'
				},
				{
					id: 567,
					start: 2445.026,
					end: 2447.404,
					text: 'Hasta que camine de nuevo<br />entre ustedes en libertad...'
				},
				{
					id: 568,
					start: 2447.528,
					end: 2450.031,
					text: '...el Gran Budapest se queda<br />en sus manos...'
				},
				{
					id: 569,
					start: 2450.198,
					end: 2452.542,
					text: '...al igual que su impecable reputación.'
				},
				{
					id: 570,
					start: 2452.659,
					end: 2454.707,
					text: 'Manténganla inmaculada y glorifíquenla.'
				},
				{
					id: 571,
					start: 2454.827,
					end: 2457.171,
					text: 'Sean muy cuidadosos con los detalles...'
				},
				{
					id: 572,
					start: 2457.246,
					end: 2461.046,
					text: '...como si yo los vigilara como un halcón<br />con un látigo en las garras...'
				},
				{ id: 573, start: 2461.209, end: 2463.177, text: '...porque eso hago.' },
				{
					id: 574,
					start: 2463.252,
					end: 2466.426,
					text: 'Si descubriera alguna falta<br />durante mi ausencia...'
				},
				{
					id: 575,
					start: 2466.547,
					end: 2470.177,
					text: '...la justicia pronta y despiadada<br />descenderá sobre ustedes.'
				},
				{
					id: 576,
					start: 2470.259,
					end: 2474.389,
					text: 'Un recinto grandioso y noble<br />se ha puesto bajo su protección.'
				},
				{
					id: 577,
					start: 2474.514,
					end: 2476.562,
					text: 'Avísenle a Zero si ven algo sospechoso.'
				},
				{ id: 578, start: 2477.016, end: 2479.565, text: '"Su devoto Monsieur Gustave".' },
				{
					id: 579,
					start: 2479.686,
					end: 2483.611,
					text: 'Le sigue un poema, pero será mejor<br />empezar con la sopa: Son 46 estrofas.'
				},
				{
					id: 580,
					start: 2484.399,
					end: 2488.62,
					text: '"Ceniza húmeda y negra empapa<br />la inmundicia del nido de una rata...'
				},
				{
					id: 581,
					start: 2488.736,
					end: 2492.786,
					text: '...y se mezcla con el sofocante olor a<br />madera podrida mientras el canto..."'
				},
				{ id: 582, start: 2493.116, end: 2495.21, text: 'Jamás confié en ese mayordomo.' },
				{
					id: 583,
					start: 2495.284,
					end: 2498.538,
					text: '<i>- Es demasiado honesto.<br />- ¿Demasiado honesto?</i>'
				},
				{
					id: 584,
					start: 2499.247,
					end: 2503.593,
					text: '<i>Bien, sea como fuere,<br />encuéntralo, y que sea rápido.</i>'
				},
				{
					id: 585,
					start: 2519.809,
					end: 2522.562,
					text: '¿Me permiten ofrecerles, reos,<br />un plato de potaje?'
				},
				{ id: 586, start: 2524.772, end: 2526.149, text: '¿No? ¿Nadie?' },
				{
					id: 587,
					start: 2526.566,
					end: 2529.069,
					text: '¿Tú, el de la cicatriz enorme en la cara?'
				},
				{
					id: 588,
					start: 2537.785,
					end: 2542.461,
					text: 'Pruébalo, esta mañana está tibio<br />y reconfortante. Le falta una pizca de sal.'
				},
				{ id: 589, start: 2551.132, end: 2552.258, text: 'Buen día.' },
				{
					id: 590,
					start: 2557.805,
					end: 2559.807,
					text: '¿Potaje, caballeros?<br />¿Alguien quiere?'
				},
				{ id: 591, start: 2563.644, end: 2564.987, text: 'Como gusten.' },
				{ id: 592, start: 2570.943, end: 2572.616, text: 'Arriba. Apresúrense.' },
				{ id: 593, start: 2573.988, end: 2575.365, text: 'Buenos días, Pinky.' },
				{
					id: 594,
					start: 2581.12,
					end: 2583.373,
					text: "- ¿De Mendl's de nuevo?<br />- Precisamente."
				},
				{ id: 595, start: 2583.706, end: 2585.379, text: '¿Quién tiene la navaja para degollar?' },
				{
					id: 596,
					start: 2591.464,
					end: 2594.638,
					text: "- Extraordinario.<br />- Mendl's son los mejores."
				},
				{
					id: 597,
					start: 2594.717,
					end: 2596.811,
					text: '- Bien. A trabajar.<br />- Monsieur Gustave.'
				},
				{ id: 598, start: 2600.181, end: 2601.398, text: '¿Sí?' },
				{ id: 599, start: 2605.812, end: 2607.86, text: 'Los muchachos y yo lo discutimos.' },
				{
					id: 600,
					start: 2608.314,
					end: 2610.567,
					text: 'Pensamos que usted<br />es un hombre hecho y derecho.'
				},
				{
					id: 601,
					start: 2611.067,
					end: 2613.57,
					text: 'Jamás se me había acusado<br />de eso, pero...'
				},
				{
					id: 602,
					start: 2613.694,
					end: 2616.698,
					text: '- ...agradezco la opinión.<br />- Ahora es uno de nosotros.'
				},
				{ id: 603, start: 2617.865, end: 2619.663, text: 'Qué amable eres al decir eso.' },
				{ id: 604, start: 2620.034, end: 2621.536, text: 'Gracias, querido Pinky.' },
				{ id: 605, start: 2621.702, end: 2623.5, text: 'Gracias, Gunther.<br />Gracias, Wolf.' },
				{ id: 606, start: 2624.038, end: 2625.21, text: '¿Algo más?' },
				{ id: 607, start: 2627.542, end: 2628.759, text: 'Díselo, Ludwig.' },
				{
					id: 608,
					start: 2630.67,
					end: 2633.765,
					text: 'Control Fronterizo 19<br />no es una prisión cualquiera.'
				},
				{
					id: 609,
					start: 2634.048,
					end: 2637.518,
					text: 'Tiene barras de acero<br />en cada puerta, ducto y ventana.'
				},
				{
					id: 610,
					start: 2637.76,
					end: 2641.06,
					text: 'Hay 72 guardias en el piso<br />y 16 más en las torres.'
				},
				{
					id: 611,
					start: 2641.222,
					end: 2645.398,
					text: 'Hay una caída de 100 m que llega<br />a un foso lleno de cocodrilos.'
				},
				{
					id: 612,
					start: 2645.56,
					end: 2647.938,
					text: 'Pero, como todos, tiene un punto débil...'
				},
				{
					id: 613,
					start: 2648.062,
					end: 2652.238,
					text: '...que en este caso se trata<br />de un sistema de cloacas...'
				},
				{
					id: 614,
					start: 2652.358,
					end: 2656.454,
					text: '...que data de la época de la construcción<br />original de piedra, en la Edad Media.'
				},
				{
					id: 615,
					start: 2657.071,
					end: 2660.12,
					text: 'Nadie dice que sea<br />un paseo por el campo...'
				},
				{
					id: 616,
					start: 2660.241,
					end: 2662.209,
					text: '...con una mujer hermosa<br />y un perrito blanco...'
				},
				{
					id: 617,
					start: 2662.285,
					end: 2665.459,
					text: '...pero tiene lo que uno llamaría<br />"vulnerabilidad"...'
				},
				{ id: 618, start: 2666.122, end: 2668.09, text: '...y eso es lo que nos interesa.' },
				{ id: 619, start: 2669.542, end: 2670.714, text: 'Eche un vistazo.' },
				{ id: 620, start: 2672.92, end: 2674.263, text: '¿Quién dibujó esto?' },
				{ id: 621, start: 2674.589, end: 2676.808, text: '¿Cómo que quién? Yo.' },
				{
					id: 622,
					start: 2676.924,
					end: 2679.302,
					text: 'Es muy bueno.<br />Tienes muy buena mano, Ludwig.'
				},
				{ id: 623, start: 2679.427, end: 2680.974, text: 'Eres un artista prometedor.' },
				{
					id: 624,
					start: 2681.22,
					end: 2684.565,
					text: 'Pregunta: ¿cómo pretendes<br />penetrar este nivel rudimentario?'
				},
				{
					id: 625,
					start: 2684.64,
					end: 2687.985,
					text: 'Son 65 cm de mampostería<br />de granito reforzada, ¿no?'
				},
				{
					id: 626,
					start: 2688.102,
					end: 2692.107,
					text: 'Cavar con la navaja para degollar tomaría<br />de tres a seis meses de esfuerzo continuo...'
				},
				{
					id: 627,
					start: 2692.231,
					end: 2695.326,
					text: '...y antes varios habremos<br />sido ejecutados violentamente.'
				},
				{ id: 628, start: 2695.443, end: 2697.662, text: 'Le dio al clavo, Sr. Gustave.' },
				{
					id: 629,
					start: 2697.945,
					end: 2700.744,
					text: 'Tenemos documentos falsos,<br />ropa de calle usada...'
				},
				{
					id: 630,
					start: 2700.823,
					end: 2703.326,
					text: '...una escalera hecha<br />con palos y ropa de cama...'
				},
				{
					id: 631,
					start: 2703.451,
					end: 2705.374,
					text: '...pero necesitamos<br />herramientas para cavar...'
				},
				{
					id: 632,
					start: 2705.453,
					end: 2708.627,
					text: '...difíciles de conseguir en esta pocilga.'
				},
				{ id: 633, start: 2723.095, end: 2724.688, text: '<i>En este punto de la historia...</i>' },
				{
					id: 634,
					start: 2724.805,
					end: 2728.48,
					text: '<i>...el anciano guardó silencio e<br />hizo a un lado su costillar de cordero.</i>'
				},
				{
					id: 635,
					start: 2728.643,
					end: 2731.317,
					text: '<i>Sus ojos quedaron<br />inexpresivos como rocas.</i>'
				},
				{
					id: 636,
					start: 2731.479,
					end: 2733.481,
					text: '<i>Era evidente que estaba afligido.</i>'
				},
				{ id: 637, start: 2733.94, end: 2735.408, text: '¿Se siente mal, Sr. Moustafa?' },
				{ id: 638, start: 2735.483, end: 2736.609, text: '<i>Al fin pregunté.</i>' },
				{ id: 639, start: 2736.692, end: 2737.944, text: 'Cielo santo, no.' },
				{ id: 640, start: 2738.027, end: 2739.028, text: '<i>Dijo.</i>' },
				{ id: 641, start: 2739.111, end: 2741.66, text: 'Es solo que no sé cómo proseguir.' },
				{ id: 642, start: 2742.531, end: 2743.999, text: '<i>Estaba llorando.</i>' },
				{
					id: 643,
					start: 2744.951,
					end: 2747.67,
					text: 'Verá, jamás hablo sobre Agatha porque...'
				},
				{ id: 644, start: 2748.162, end: 2750.335, text: '...con tan solo pensar en su nombre...' },
				{
					id: 645,
					start: 2750.456,
					end: 2753.175,
					text: '...me resulta imposible<br />controlar mis emociones.'
				},
				{
					id: 646,
					start: 2756.212,
					end: 2758.681,
					text: 'Bueno, supongo que<br />no queda más remedio.'
				},
				{ id: 647, start: 2759.799, end: 2761.801, text: 'Verá, ella nos salvó.' },
				{
					id: 648,
					start: 2762.51,
					end: 2764.558,
					text: '<i>En nuestro tercer encuentro formal...</i>'
				},
				{
					id: 649,
					start: 2764.679,
					end: 2766.101,
					text: '<i>...le pedí matrimonio y ella accedió.</i>'
				},
				{ id: 650, start: 2766.18, end: 2767.557, text: '<b>UN MES ANTES</b>' },
				{ id: 651, start: 2767.682, end: 2768.979, text: '- ¿Te casas conmigo?<br />- Sí.' },
				{
					id: 652,
					start: 2771.31,
					end: 2774.234,
					text: '<i>No poseíamos ni 50 klubecks<br />entre los dos.</i>'
				},
				{
					id: 653,
					start: 2774.48,
					end: 2777.654,
					text: '<i>Nadie lo sabía, pero<br />¿a quién le habría importado?</i>'
				},
				{
					id: 654,
					start: 2777.817,
					end: 2780.696,
					text: '<i>Ambos estábamos<br />completamente solos en el mundo...</i>'
				},
				{
					id: 655,
					start: 2781.696,
					end: 2783.994,
					text: '<i>...y estábamos<br />profundamente enamorados.</i>'
				},
				{ id: 656, start: 2792.581, end: 2794.709, text: '- Toma.<br />- Gracias.' },
				{ id: 657, start: 2794.875, end: 2796.548, text: '- Es un libro.<br />- Eso veo.' },
				{ id: 658, start: 2796.711, end: 2798.213, text: '<i>Poesía Romántica, Volumen Uno.</i>' },
				{
					id: 659,
					start: 2798.337,
					end: 2801.09,
					text: 'Monsieur Gustave lo recomendó.<br />Yo también tengo una copia.'
				},
				{
					id: 660,
					start: 2801.215,
					end: 2804.89,
					text: '- Arruiné la sorpresa.<br />- Lo abriré de todas formas.'
				},
				{ id: 661, start: 2808.347, end: 2809.724, text: 'Lee la dedicatoria.' },
				{
					id: 662,
					start: 2811.35,
					end: 2814.945,
					text: '"Para mi amada, querida,<br />apreciada Agatha, a quien adoro.'
				},
				{ id: 663, start: 2815.062, end: 2817.19, text: 'Con respeto, adoración, admiración...' },
				{
					id: 664,
					start: 2817.273,
					end: 2821.403,
					text: '...besos, gratitud, mis mejores deseos<br />y amor. De Z. Para A."'
				},
				{
					id: 665,
					start: 2828.909,
					end: 2832.584,
					text: '<i>Monsieur Gustave insistió en un<br />interrogatorio inmediato y exhaustivo...</i>'
				},
				{ id: 666, start: 2833.205, end: 2834.957, text: 'Es encantadora.<br />Tan encantadora.' },
				{
					id: 667,
					start: 2835.541,
					end: 2838.42,
					text: '<i>...durante el cual le dio a Agatha<br />un dije de porcelana...</i>'
				},
				{
					id: 668,
					start: 2838.586,
					end: 2841.26,
					text: '<i>y cinco docenas de tulipanes<br />envueltos individualmente...</i>'
				},
				{
					id: 669,
					start: 2841.422,
					end: 2843.595,
					text: '<i>...en una caja del tamaño<br />de un ataúd para niño.</i>'
				},
				{ id: 670, start: 2843.758, end: 2846.602, text: '- Eso no está bien.<br />- ¿Disculpa?' },
				{
					id: 671,
					start: 2846.719,
					end: 2850.269,
					text: '- ¿Por qué está enfurruñado?<br />- Es mi novia. No puede comprarle cosas.'
				},
				{
					id: 672,
					start: 2850.431,
					end: 2853.731,
					text: 'Solo entrevisto en tu nombre<br />a este epítome de la hermosura.'
				},
				{
					id: 673,
					start: 2853.809,
					end: 2856.278,
					text: 'Jamás sientas celos, Zero,<br />ni un instante.'
				},
				{ id: 674, start: 2856.437, end: 2857.814, text: '¿Coquetea contigo?' },
				{ id: 675, start: 2859.106, end: 2862.451, text: '- Sí.<br />- Apruebo esta unión.' },
				{ id: 676, start: 2862.61, end: 2865.159, text: 'Agatha, hermosa, vuelve a tu amado.' },
				{
					id: 677,
					start: 2865.279,
					end: 2868.499,
					text: '<i>- Pronto nos enteramos.<br />- Bendiciones para ambos.</i>'
				},
				{
					id: 678,
					start: 2868.616,
					end: 2873.122,
					text: '<i>Agatha no solo era muy talentosa<br />con la espátula y la crema pastelera.</i>'
				},
				{ id: 679, start: 2873.454, end: 2875.172, text: '- Mendl.<br />- Hazlo.' },
				{ id: 680, start: 2876.332, end: 2878.801, text: '<i>También era muy valiente.</i>' },
				{ id: 681, start: 2882.838, end: 2885.011, text: '<i>Creo que era así de nacimiento.</i>' },
				{ id: 682, start: 2904.318, end: 2905.865, text: 'Algo falta.' },
				{
					id: 683,
					start: 2906.654,
					end: 2911.16,
					text: 'Un documento crucial, extraviado<br />o posiblemente destruido.'
				},
				{
					id: 684,
					start: 2911.325,
					end: 2913.999,
					text: 'No sé qué contiene,<br />no sé qué representa...'
				},
				{ id: 685, start: 2914.12, end: 2915.463, text: '...no sé qué es...' },
				{
					id: 686,
					start: 2915.538,
					end: 2918.838,
					text: '...pero hay rastros y sombras<br />de este por doquier.'
				},
				{ id: 687, start: 2918.958, end: 2920.631, text: 'No quiero alarmarte...' },
				{
					id: 688,
					start: 2920.709,
					end: 2925.966,
					text: '...y no creo que cambie la decisión final<br />del magistrado respecto a tu herencia...'
				},
				{
					id: 689,
					start: 2926.048,
					end: 2929.894,
					text: '...pero, en especial dadas<br />las circunstancias de su muerte...'
				},
				{
					id: 690,
					start: 2930.01,
					end: 2934.356,
					text: '...y la desaparición del testigo clave<br />de su asesinato, Serge X...'
				},
				{
					id: 691,
					start: 2934.515,
					end: 2938.816,
					text: '...sugiero que llevemos el caso de<br />inmediato al inspector municipal...'
				},
				{
					id: 692,
					start: 2938.894,
					end: 2943.491,
					text: '...para que no quepa la duda<br />sobre tu posesión en el futuro.'
				},
				{ id: 693, start: 2943.566, end: 2945.364, text: '- ¿De acuerdo?<br />- No de acuerdo.' },
				{ id: 694, start: 2947.027, end: 2949.2, text: '- ¿No de acuerdo?<br />- No de acuerdo.' },
				{ id: 695, start: 2951.699, end: 2953.747, text: '¿Puedo preguntarte algo, Vilmos?' },
				{
					id: 696,
					start: 2954.16,
					end: 2956.254,
					text: '- ¿Sí, Dmitri?<br />- ¿Para quién trabajas?'
				},
				{
					id: 697,
					start: 2957.329,
					end: 2959.548,
					text: '- ¿Disculpa?<br />- ¿Para quién trabajas?'
				},
				{ id: 698, start: 2960.374, end: 2962.092, text: 'Creí que eras nuestro abogado.' },
				{
					id: 699,
					start: 2962.877,
					end: 2965.847,
					text: 'Pues, de hecho,<br />soy el ejecutor de los bienes.'
				},
				{
					id: 700,
					start: 2965.921,
					end: 2970.051,
					text: 'En esta situación en particular<br />represento a la difunta.'
				},
				{ id: 701, start: 2970.134, end: 2971.181, text: 'Ah, ¿sí?' },
				{
					id: 702,
					start: 2971.26,
					end: 2974.059,
					text: 'Sí. Mis honorarios fueron<br />incluidos en el...'
				},
				{ id: 703, start: 2974.221, end: 2977.065, text: 'Termina pronto y no causes problemas.' },
				{ id: 704, start: 2978.058, end: 2979.105, text: '¿De acuerdo?' },
				{
					id: 705,
					start: 2980.895,
					end: 2985.241,
					text: 'Soy abogado.<br />Debo proceder según la ley.'
				},
				{ id: 706, start: 2986.358, end: 2987.53, text: 'No de acuerdo.' },
				{ id: 707, start: 2994.241, end: 2995.458, text: 'Esto va mal, hermanas.' },
				{
					id: 708,
					start: 2999.58,
					end: 3001.799,
					text: '¿Acaba de lanzar<br />a mi gato por la ventana?'
				},
				{ id: 709, start: 3003, end: 3004.798, text: 'No lo creo.' },
				{ id: 710, start: 3004.877, end: 3005.878, text: '- No. ¿Lo hizo?<br />- ¿Jopling?' },
				{ id: 711, start: 3032.821, end: 3034.073, text: 'Bien.' },
				{ id: 712, start: 3045.459, end: 3047.632, text: 'Hay algo que no te he dicho, Agatha.' },
				{ id: 713, start: 3048.462, end: 3050.26, text: '- Sí.<br />- Robamos una pintura.' },
				{
					id: 714,
					start: 3050.339,
					end: 3052.683,
					text: 'Muy valiosa,<br />quizá cinco millones de klubecks.'
				},
				{
					id: 715,
					start: 3052.8,
					end: 3056.27,
					text: 'No sé si ya notaron su desaparición,<br />pero si algo nos sucede...'
				},
				{ id: 716, start: 3056.345, end: 3057.972, text: '¿Robas arte?' },
				{
					id: 717,
					start: 3058.847,
					end: 3062.021,
					text: 'Un retrato. Debemos hacer<br />un plan para tu supervivencia.'
				},
				{
					id: 718,
					start: 3062.142,
					end: 3065.487,
					text: 'Oculta esto. Está en clave<br />y necesitarás una lupa...'
				},
				{
					id: 719,
					start: 3065.604,
					end: 3067.823,
					text: '...pero dice dónde hallar<br />el "Niño con manzana".'
				},
				{
					id: 720,
					start: 3067.982,
					end: 3070.03,
					text: 'No aceptes menos de<br />la mitad de su precio...'
				},
				{
					id: 721,
					start: 3070.15,
					end: 3073.12,
					text: '- Zero, soy pastelera.<br />- Eres chef repostera.'
				},
				{
					id: 722,
					start: 3073.195,
					end: 3076.95,
					text: 'No soy traficante, si así se llaman.<br />No comercio con bienes robados.'
				},
				{ id: 723, start: 3077.95, end: 3079.952, text: 'Me expliqué mal.<br />Él lo heredó.' },
				{ id: 724, start: 3089.211, end: 3090.383, text: 'Ya duérmete.' },
				{ id: 725, start: 3091.88, end: 3093.177, text: 'Sí, Herr Mendl.' },
				{ id: 726, start: 3096.51, end: 3097.807, text: '- Oculta esto.<br />- No.' },
				{ id: 727, start: 3098.47, end: 3100.017, text: 'Bien, pero tómalo.' },
				{
					id: 728,
					start: 3130.085,
					end: 3132.053,
					text: '<b>Guardarropa<br />CONTENIDO: Gato persa (DIFUNTO)</b>'
				},
				{ id: 729, start: 3173.796, end: 3175.764, text: '<b>PRÓXIMA PARADA<br />KUNSTMUSEUM</b>' },
				{
					id: 730,
					start: 3196.402,
					end: 3200.953,
					text: '<b>EL MUSEO CIERRA<br />EN 15 MINUTOS</b>'
				},
				{
					id: 731,
					start: 3211.166,
					end: 3214.466,
					text: '<b>EL MUSEO CIERRA<br />EN 14 MINUTOS</b>'
				},
				{ id: 732, start: 3242.656, end: 3243.828, text: '<b>NO PASAR</b>' },
				{ id: 733, start: 3261.341, end: 3262.809, text: '<b>SALIDA</b>' },
				{
					id: 734,
					start: 3306.345,
					end: 3309.064,
					text: '<i>A la mañana siguiente,<br />Herr Becker recibió...</i>'
				},
				{
					id: 735,
					start: 3309.181,
					end: 3312.902,
					text: '<i>...un peculiar aviso de último momento<br />de la oficina del subdirector Kovacs...</i>'
				},
				{
					id: 736,
					start: 3313.018,
					end: 3315.396,
					text: '<i>...que posponía la cita<br />que tenían programada...</i>'
				},
				{ id: 737, start: 3315.896, end: 3317.569, text: '<i>...a perpetuidad.</i>' },
				{
					id: 738,
					start: 3318.44,
					end: 3321.569,
					text: '<b>CONTROL FRONTERIZO 19<br />ALMACÉN DE SUMINISTROS</b>'
				},
				{ id: 739, start: 3321.777, end: 3325.702, text: '<b>TRES DÍAS DESPUÉS</b>' },
				{ id: 740, start: 3347.386, end: 3348.387, text: 'Larguémonos.' },
				{ id: 741, start: 3373.12, end: 3374.622, text: '<b>COCINA</b>' },
				{
					id: 742,
					start: 3419.374,
					end: 3421.968,
					text: '- ¿Cómo llegaron allá afuera?<br />- Cállate.'
				},
				{ id: 743, start: 3422.336, end: 3424.805, text: 'Están tratando de escapar.' },
				{ id: 744, start: 3424.88, end: 3426.678, text: '¿Qué te pasa, maldito soplón?' },
				{ id: 745, start: 3427.007, end: 3428.85, text: '¡Guardia! ¡Guardia!' },
				{
					id: 746,
					start: 3436.016,
					end: 3439.691,
					text: 'Eres tú. Gracias.<br />Gracias, buen hombre.'
				},
				{ id: 747, start: 3445.692, end: 3447.694, text: '<b>DORMITORIO DE LOS GUARDIAS</b>' },
				{ id: 748, start: 3469.758, end: 3470.759, text: 'Listo.' },
				{ id: 749, start: 3545.459, end: 3547.803, text: 'Supongo que es un empate.' },
				{ id: 750, start: 3557.22, end: 3558.312, text: 'Buenas noches.' },
				{
					id: 751,
					start: 3567.439,
					end: 3571.489,
					text: 'Permítanme presentarles.<br />Pinky, Wolf, Ludwig: Él es el divino Zero.'
				},
				{ id: 752, start: 3571.61, end: 3573.487, text: 'Gunther murió en las catacumbas.' },
				{
					id: 753,
					start: 3573.653,
					end: 3576.497,
					text: 'Amigos, no sé si volveremos<br />a vernos, pero sí...'
				},
				{ id: 754, start: 3576.615, end: 3577.616, text: '¡Momento!' },
				{ id: 755, start: 3580.994, end: 3582.496, text: 'No hay tiempo de charlar.' },
				{ id: 756, start: 3582.996, end: 3584.998, text: 'Cuídese, Sr. Gustave.' },
				{ id: 757, start: 3585.582, end: 3586.834, text: 'Buena suerte, niño.' },
				{
					id: 758,
					start: 3591.338,
					end: 3594.467,
					text: '- ¿Cómo llegamos al refugio?<br />- No encontré uno.'
				},
				{
					id: 759,
					start: 3594.591,
					end: 3597.811,
					text: '¿No lo conseguiste? ¿En serio?<br />¿Estamos completamente solos?'
				},
				{
					id: 760,
					start: 3597.928,
					end: 3600.681,
					text: 'Eso me temo.<br />Sí lo busqué, pero...'
				},
				{
					id: 761,
					start: 3601.181,
					end: 3604.185,
					text: 'Entiendo. Mucho riesgo.<br />Habrá que improvisar.'
				},
				{ id: 762, start: 3604.309, end: 3606.027, text: 'Pongámonos los disfraces.' },
				{
					id: 763,
					start: 3606.686,
					end: 3609.03,
					text: '- Los traemos puestos.<br />- Claro que no.'
				},
				{
					id: 764,
					start: 3609.189,
					end: 3611.692,
					text: 'Acordamos usar barbas y narices falsos.'
				},
				{
					id: 765,
					start: 3611.858,
					end: 3614.987,
					text: '- ¿No trajiste nada?<br />- Creí que se estaba dejando la barba...'
				},
				{
					id: 766,
					start: 3615.112,
					end: 3617.365,
					text: 'Se verían muy poco realistas,<br />¿no lo cree?'
				},
				{
					id: 767,
					start: 3617.489,
					end: 3620.038,
					text: 'Si se hace bien,<br />son muy convincentes.'
				},
				{
					id: 768,
					start: 3620.158,
					end: 3622.126,
					text: 'Pero entiendo lo que dices.<br />No importa.'
				},
				{
					id: 769,
					start: 3622.202,
					end: 3624.705,
					text: "Dame un poco de<br />L'air de Panache, por favor."
				},
				{
					id: 770,
					start: 3626.164,
					end: 3629.509,
					text: "<i>- ¿No puedo ni un poquito?<br />- Olvidé su L'air de Panache.</i>"
				},
				{
					id: 771,
					start: 3629.876,
					end: 3632.47,
					text: "¿En serio? ¿Olvidaste mi L'air de Panache?"
				},
				{ id: 772, start: 3632.712, end: 3635.636, text: 'No puedo creerlo.<br />¿Cómo pudiste?' },
				{
					id: 773,
					start: 3635.715,
					end: 3639.345,
					text: 'Estuve en la cárcel, Zero.<br />¿Entiendes lo humillante que es?'
				},
				{ id: 774, start: 3639.469, end: 3640.721, text: 'Huelo mal.' },
				{ id: 775, start: 3642.889, end: 3644.516, text: 'Maravilloso.' },
				{
					id: 776,
					start: 3645.183,
					end: 3648.813,
					text: 'Supongo que es de esperarse en...<br />¿De dónde dices que vienes?'
				},
				{ id: 777, start: 3648.895, end: 3650.897, text: '- De Aq Salim al-Jabat.<br />- Exacto.' },
				{
					id: 778,
					start: 3651.064,
					end: 3654.91,
					text: 'Es de esperarse en Aq Salim al-Jabat,<br />donde las posesiones más preciadas...'
				},
				{
					id: 779,
					start: 3655.026,
					end: 3657.245,
					text: '...son tapetes sucios<br />y una cabra hambrienta...'
				},
				{
					id: 780,
					start: 3657.404,
					end: 3660.908,
					text: '...duermes tras una carpa y comes<br />dátiles silvestres y escarabajos...'
				},
				{ id: 781, start: 3661.032, end: 3662.909, text: '...pero no es lo que yo te enseñé.' },
				{
					id: 782,
					start: 3663.702,
					end: 3667.081,
					text: '¿Qué te hizo dejarla tierra<br />a la que obviamente perteneces...'
				},
				{
					id: 783,
					start: 3667.247,
					end: 3670.342,
					text: '...y viajar a gran distancia<br />para ser un inmigrante pobre...'
				},
				{
					id: 784,
					start: 3670.417,
					end: 3675.264,
					text: '...en una sociedad refinada y culta<br />que podría habérselas arreglado sin ti?'
				},
				{ id: 785, start: 3676.256, end: 3677.348, text: 'La guerra.' },
				{ id: 786, start: 3678.216, end: 3679.388, text: '¿Cómo dices?' },
				{ id: 787, start: 3679.885, end: 3681.933, text: 'Verá, mi padre fue asesinado...' },
				{
					id: 788,
					start: 3682.053,
					end: 3685.182,
					text: '...y el resto de mi familia fue fusilada.'
				},
				{
					id: 789,
					start: 3685.265,
					end: 3689.27,
					text: 'Nuestra aldea fue convertida en cenizas<br />y los sobrevivientes tuvieron que huir.'
				},
				{ id: 790, start: 3689.936, end: 3691.779, text: 'Me fui a causa de la guerra.' },
				{
					id: 791,
					start: 3692.731,
					end: 3696.531,
					text: 'Ya veo. ¿Entonces más bien<br />eres un refugiado?'
				},
				{ id: 792, start: 3697.569, end: 3698.695, text: 'En verdad.' },
				{
					id: 793,
					start: 3698.778,
					end: 3702.749,
					text: 'Bien, supongo que debo retractarme<br />de todo lo que acabo de decir.'
				},
				{
					id: 794,
					start: 3703.867,
					end: 3707.121,
					text: 'Soy un maldito idiota.<br />Un tonto patético.'
				},
				{ id: 795, start: 3707.245, end: 3709.464, text: 'Un maldito egoísta malnacido.' },
				{
					id: 796,
					start: 3709.623,
					end: 3712.752,
					text: 'Esto es vergonzoso y no está<br />a la altura del Gran Budapest.'
				},
				{ id: 797, start: 3714.211, end: 3716.464, text: 'Pido disculpas en nombre del hotel.' },
				{
					id: 798,
					start: 3716.588,
					end: 3718.966,
					text: 'No es culpa suya.<br />Se alteró porque olvidé su loción.'
				},
				{
					id: 799,
					start: 3719.132,
					end: 3722.636,
					text: 'No me justifiques.<br />Te debo la vida.'
				},
				{
					id: 800,
					start: 3723.136,
					end: 3727.141,
					text: 'Eres mi querido amigo y protegido<br />y estoy muy orgulloso de ti.'
				},
				{ id: 801, start: 3727.265, end: 3728.642, text: 'Debes saberlo.' },
				{ id: 802, start: 3729.809, end: 3731.607, text: 'Lo siento mucho, Zero.' },
				{ id: 803, start: 3733.48, end: 3734.606, text: 'Somos hermanos.' },
				{ id: 804, start: 3743.49, end: 3745.458, text: '¿Cómo está nuestra querida Agatha?' },
				{
					id: 805,
					start: 3748.078,
					end: 3751.799,
					text: '"Era la alborada cuando vi<br />su rostro en el páramo...'
				},
				{
					id: 806,
					start: 3751.915,
					end: 3754.668,
					text: '...y así fue que regresé,<br />día a día, embelesado...'
				},
				{
					id: 807,
					start: 3754.793,
					end: 3757.512,
					text: '...aunque el ácido avinagró<br />mi corazón, nunca..."'
				},
				{
					id: 808,
					start: 3757.671,
					end: 3760.174,
					text: 'Muy bien. Te interrumpo<br />porque sonó la alarma...'
				},
				{
					id: 809,
					start: 3760.298,
					end: 3763.142,
					text: '...pero recuerda dónde te quedaste,<br />para terminar después.'
				},
				{
					id: 810,
					start: 3781.611,
					end: 3784.205,
					text: 'Quiero barricadas en todos<br />los cruces a 50 km.'
				},
				{
					id: 811,
					start: 3784.364,
					end: 3787.493,
					text: 'Quiero bloqueos de trenes<br />en cada estación a 100 km.'
				},
				{
					id: 812,
					start: 3787.617,
					end: 3790.496,
					text: 'Quiero cincuenta hombres y<br />diez sabuesos en cinco minutos.'
				},
				{
					id: 813,
					start: 3790.62,
					end: 3794.17,
					text: 'Los buscaremos en cada panadería,<br />cafetería, cervecería...'
				},
				{
					id: 814,
					start: 3794.291,
					end: 3797.886,
					text: '...y en especial en cada gran hotel<br />desde Áugenzburg hasta Zilchbrück.'
				},
				{
					id: 815,
					start: 3798.003,
					end: 3800.051,
					text: 'Son criminales profesionales<br />y peligrosos...'
				},
				{ id: 816, start: 3800.171, end: 3802.014, text: 'Bueno, al menos tres de ellos.' },
				{ id: 817, start: 3802.382, end: 3803.508, text: '¿Usted quién es?' },
				{
					id: 818,
					start: 3805.844,
					end: 3808.688,
					text: 'No se permite personal civil<br />en esta área.'
				},
				{
					id: 819,
					start: 3808.805,
					end: 3811.9,
					text: '- Es una investigación militar.<br />- Es el Sr. Jopling, señor.'
				},
				{
					id: 820,
					start: 3812.017,
					end: 3814.145,
					text: 'La madre de su patrón<br />es una de las víctimas...'
				},
				{ id: 821, start: 3814.227, end: 3815.353, text: 'Cállate.' },
				{
					id: 822,
					start: 3817.564,
					end: 3819.737,
					text: '¿Trabaja para la familia<br />Desgoffe und Taxis?'
				},
				{
					id: 823,
					start: 3819.983,
					end: 3823.533,
					text: '¿Sabe que el subdirector Vilmos Kovacs<br />fue asesinado el 23 de octubre?'
				},
				{ id: 824, start: 3824.029, end: 3826.657, text: 'Supe que desapareció.' },
				{
					id: 825,
					start: 3826.74,
					end: 3831.246,
					text: 'Su cadáver fue hallado anoche<br />en un sarcófago en el Kunstmuseum.'
				},
				{ id: 826, start: 3831.369, end: 3833.246, text: '<i>Le faltaban cuatro dedos.</i>' },
				{ id: 827, start: 3834.08, end: 3836.833, text: '- ¿Qué sabe al respecto?<br />- Nada.' },
				{ id: 828, start: 3838.543, end: 3840.545, text: 'Acompañe al Sr. Jopling afuera.' },
				{ id: 829, start: 3850.93, end: 3852.102, text: "Mendl's." },
				{
					id: 830,
					start: 3857.687,
					end: 3861.692,
					text: 'Comuníqueme con el Palacio Excelsior<br />en Baden-Jürgen, por cobrar.'
				},
				{ id: 831, start: 3861.775, end: 3863.698, text: 'No hay a dónde más acudir.' },
				{ id: 832, start: 3863.777, end: 3865.279, text: 'Espero, gracias.' },
				{
					id: 833,
					start: 3865.403,
					end: 3868.407,
					text: 'Es nuestra única esperanza.<br />No debería ni mencionar su existencia.'
				},
				{
					id: 834,
					start: 3868.531,
					end: 3871.876,
					text: 'Jamás debes mencionárselo a nadie.<br />¿Lo juras?'
				},
				{
					id: 835,
					start: 3871.951,
					end: 3874.079,
					text: '- Claro. ¿Qué es?<br />- No puedo decírtelo.'
				},
				{
					id: 836,
					start: 3876.915,
					end: 3879.964,
					text: '¿Cómo se consiguen entradas<br />de primera fila para un estreno...'
				},
				{
					id: 837,
					start: 3880.126,
					end: 3882.595,
					text: '...en la Ópera Toscana<br />con un día de antelación?'
				},
				{
					id: 838,
					start: 3882.712,
					end: 3886.967,
					text: '¿O una visita privada a la colección<br />de tapices de la Galería Royal Saxon?'
				},
				{
					id: 839,
					start: 3887.133,
					end: 3891.309,
					text: '¿Cómo se reserva una mesa<br />en el Chez Dominique en jueves?'
				},
				{
					id: 840,
					start: 3891.763,
					end: 3893.811,
					text: 'Ivan, querido, habla Gustave.<br />Hola.'
				},
				{ id: 841, start: 3893.932, end: 3895.934, text: 'Lo estaba, hasta hace 5 minutos.' },
				{
					id: 842,
					start: 3896.059,
					end: 3899.154,
					text: 'Decidimos salir apresuradamente,<br />¿me explico?'
				},
				{ id: 843, start: 3899.479, end: 3901.277, text: 'A través de la cloaca.' },
				{
					id: 844,
					start: 3901.606,
					end: 3904.985,
					text: 'Exacto. Lamento molestarte,<br />pero estamos en un aprieto.'
				},
				{ id: 845, start: 3905.11, end: 3906.657, text: 'Esta es una petición oficial.' },
				{
					id: 846,
					start: 3906.986,
					end: 3909.99,
					text: 'Solicito formalmente<br />los servicios especiales de...'
				},
				{
					id: 847,
					start: 3910.156,
					end: 3915.162,
					text: '<b>PARTE 4: LA SOCIEDAD DE<br />LAS LLAVES CRUZADAS.</b>'
				},
				{ id: 848, start: 3915.286, end: 3916.503, text: '<i>Te llamaré, Gustave.</i>' },
				{ id: 849, start: 3916.83, end: 3918.673, text: 'Sí. Sigue alerta.' },
				{
					id: 850,
					start: 3918.998,
					end: 3921.751,
					text: 'Discúlpeme, por favor.<br />¿Prefiere ir caminando?'
				},
				{ id: 851, start: 3922.335, end: 3924.463, text: 'Estamos aquí.<br />Es muy sencillo.' },
				{
					id: 852,
					start: 3924.587,
					end: 3926.635,
					text: 'De frente por la carretera<br />y a la izquierda.'
				},
				{ id: 853, start: 3926.756, end: 3928.508, text: 'Jojo, acompaña al caballero afuera.' },
				{
					id: 854,
					start: 3931.928,
					end: 3934.181,
					text: 'Con Monsieur Georges<br />del Cháteau Luxe.'
				},
				{ id: 855, start: 3935.473, end: 3939.194, text: '<i>Feliz cumpleaños a ti.</i>' },
				{
					id: 856,
					start: 3939.686,
					end: 3942.189,
					text: '<i>- Encárgate.<br />- Fe/¡z cumpleaños, querido...</i>'
				},
				{ id: 857, start: 3942.313, end: 3943.36, text: 'Hola, ¿Ivan?' },
				{ id: 858, start: 3945.442, end: 3946.614, text: 'Entendido.' },
				{
					id: 859,
					start: 3947.61,
					end: 3950.363,
					text: 'Con Monsieur Dino en el<br />Palazzo Principessa, por favor.'
				},
				{ id: 860, start: 3952.198, end: 3954.542, text: '¡Más alto, maldita sea, más alto!' },
				{ id: 861, start: 3956.369, end: 3957.461, text: 'Encárgate.' },
				{
					id: 862,
					start: 3958.204,
					end: 3959.877,
					text: '<i>- Monsieur Georges.<br />- Más alto.</i>'
				},
				{ id: 863, start: 3960.373, end: 3962.375, text: 'Ya veo.<br />De inmediato.' },
				{
					id: 864,
					start: 3964.127,
					end: 3966.38,
					text: 'Con Monsieur Robin<br />del Hótel Cóte du Cap.'
				},
				{ id: 865, start: 3967.881, end: 3969.383, text: '...y dos y tres.' },
				{
					id: 866,
					start: 3970.884,
					end: 3973.979,
					text: 'Monsieur Robin.<br />Llamada de Monsieur Dino.'
				},
				{ id: 867, start: 3974.22, end: 3975.392, text: 'Encárgate.' },
				{
					id: 868,
					start: 3977.39,
					end: 3980.064,
					text: '<i>- Uno, dos, tres.<br />- Sí, Dino.</i>'
				},
				{ id: 869, start: 3980.81, end: 3982.232, text: 'Sí, Dino.' },
				{ id: 870, start: 3982.854, end: 3984.071, text: 'Bien, Dino.' },
				{
					id: 871,
					start: 3985.899,
					end: 3988.243,
					text: 'Con Monsieur Martin<br />del Ritz Imperial, por favor.'
				},
				{ id: 872, start: 3989.819, end: 3991.071, text: 'Le sobra sal.' },
				{ id: 873, start: 3991.821, end: 3993.198, text: 'Le falta pimienta.' },
				{ id: 874, start: 3995.158, end: 3996.159, text: 'Encárgate.' },
				{
					id: 875,
					start: 3999.037,
					end: 4001.256,
					text: '<i>- ¿Robin? Martin.<br />- Le sobra sal.</i>'
				},
				{ id: 876, start: 4001.498, end: 4002.545, text: 'Sí me enteré.' },
				{
					id: 877,
					start: 4004.584,
					end: 4007.929,
					text: 'Quizá.<br />Déjame hacer unas llamadas.'
				},
				{
					id: 878,
					start: 4012.759,
					end: 4015.512,
					text: 'Serge X: Desaparecido.<br />Kovacs: También.'
				},
				{
					id: 879,
					start: 4015.595,
					end: 4018.439,
					text: 'Madame D: Muerta.<br />"Niño con manzana": Robado, por nosotros.'
				},
				{
					id: 880,
					start: 4018.598,
					end: 4021.272,
					text: 'Dmitri y Jopling: Salvajes<br />despiadados y crueles.'
				},
				{ id: 881, start: 4021.434, end: 4024.278, text: 'Gustave H: Prófugo.<br />¿Qué más?' },
				{
					id: 882,
					start: 4024.562,
					end: 4027.532,
					text: '- Zero: Confundido.<br />- Zero: Confundido, sí.'
				},
				{ id: 883, start: 4027.607, end: 4029.609, text: 'La trama se enreda, como dicen.' },
				{
					id: 884,
					start: 4029.776,
					end: 4032.78,
					text: '¿Porqué?<br />¿Es una metáfora de costura?'
				},
				{ id: 885, start: 4032.904, end: 4033.996, text: 'No lo sé.' },
				{ id: 886, start: 4039.702, end: 4040.919, text: 'Suban.' },
				{ id: 887, start: 4043.581, end: 4044.958, text: 'Hallamos al mayordomo.' },
				{
					id: 888,
					start: 4045.124,
					end: 4048.219,
					text: 'Se oculta en las remotas laderas<br />del pico de Gabelmeister.'
				},
				{
					id: 889,
					start: 4048.294,
					end: 4052.094,
					text: 'Lo convencimos de verlos mañana al<br />mediodía en el observatorio en la cima.'
				},
				{
					id: 890,
					start: 4052.215,
					end: 4054.468,
					text: 'No digan nada.<br />Él les explicará todo.'
				},
				{
					id: 891,
					start: 4054.592,
					end: 4056.594,
					text: 'Su tren parte en<br />cuatro minutos y medio.'
				},
				{ id: 892, start: 4056.719, end: 4057.971, text: 'Tomen sus boletos.' },
				{
					id: 893,
					start: 4058.388,
					end: 4060.641,
					text: '- ¿Tercera clase?<br />- Estaba sobrevendido...'
				},
				{
					id: 894,
					start: 4060.932,
					end: 4064.812,
					text: '...pero el conductor fue sumiller<br />en el antiguo Versalles.'
				},
				{ id: 895, start: 4064.936, end: 4065.983, text: 'Movió influencias.' },
				{
					id: 896,
					start: 4066.145,
					end: 4068.273,
					text: 'Necesitarán estas<br />para el carro comedor.'
				},
				{ id: 897, start: 4070.9, end: 4072.243, text: 'Una última cosa.' },
				{ id: 898, start: 4074.153, end: 4075.78, text: "<i>L'air de Panache.</i>" },
				{ id: 899, start: 4079.826, end: 4081.419, text: 'Solo tenían el de media onza.' },
				{ id: 900, start: 4085.999, end: 4087.967, text: 'Hay que darle algo como un gesto.' },
				{
					id: 901,
					start: 4088.084,
					end: 4090.178,
					text: '- ¿Cuánto dinero tienes?<br />- 42 klubecks y...'
				},
				{ id: 902, start: 4090.336, end: 4092.338, text: 'Dame 25. Sí.' },
				{ id: 903, start: 4096.009, end: 4098.683, text: '- Dios te bendiga.<br />- Por favor.' },
				{ id: 904, start: 4115.82, end: 4117.538, text: '- Debo reconocérselo.<br />- Cielos...' },
				{
					id: 905,
					start: 4117.697,
					end: 4120.997,
					text: 'Eso no me lo esperaba.<br />Bien, ¿qué quiere hacer ahora?'
				},
				{
					id: 906,
					start: 4121.326,
					end: 4124.045,
					text: '<i>Había de nuevo con la hermana<br />de los pies chuecos...</i>'
				},
				{ id: 907, start: 4124.287, end: 4127.04, text: '<i>...y esta vez: Sé persuasivo.</i>' },
				{ id: 908, start: 4134.297, end: 4137.141, text: 'Maldito hijo de perra.' },
				{ id: 909, start: 4160.323, end: 4161.916, text: '¡Maldita sea!' },
				{ id: 910, start: 4166.996, end: 4168.998, text: '¿Qué demonios pasó aquí?' },
				{
					id: 911,
					start: 4169.749,
					end: 4171.843,
					text: '¿ "Niño con manzana"?<br />¿No lo ocultaste tú?'
				},
				{
					id: 912,
					start: 4171.918,
					end: 4174.262,
					text: '- ¿Lo notas hasta ahora?<br />- Creí que lo valuaban.'
				},
				{ id: 913, start: 4174.42, end: 4177.094, text: '- ¿Es una broma?<br />- Excusez-moi.' },
				{
					id: 914,
					start: 4178.424,
					end: 4181.098,
					text: 'Me parece que se la<br />llevó Monsieur Gustave.'
				},
				{ id: 915, start: 4189.102, end: 4190.445, text: 'No estoy molesto con Serge.' },
				{
					id: 916,
					start: 4190.561,
					end: 4193.189,
					text: 'No se le puede culpar<br />por carecer de moral.'
				},
				{ id: 917, start: 4193.272, end: 4195.366, text: 'Es un pequeño cobarde asustado.' },
				{
					id: 918,
					start: 4195.441,
					end: 4197.569,
					text: '- No es su culpa, ¿verdad?<br />- No lo sé. Depende.'
				},
				{
					id: 919,
					start: 4197.694,
					end: 4200.948,
					text: 'Puedes decir eso de lo que sea.<br />Claro que depende.'
				},
				{
					id: 920,
					start: 4201.072,
					end: 4205.077,
					text: '- Claro que depende.<br />- Sí, tienes razón. Depende.'
				},
				{
					id: 921,
					start: 4205.201,
					end: 4208.375,
					text: 'Eso no significa que no vaya a<br />ahorcar a esa pequeña rata.'
				},
				{
					id: 922,
					start: 4210.748,
					end: 4214.298,
					text: 'Por cierto, ¿puedo oficiar?<br />¿La ceremonia?'
				},
				{ id: 923, start: 4215.128, end: 4216.471, text: 'Con gusto.' },
				{
					id: 924,
					start: 4216.587,
					end: 4219.215,
					text: 'Debo decir que la chica<br />me parece encantadora.'
				},
				{
					id: 925,
					start: 4219.298,
					end: 4223.144,
					text: 'Plana como tabla, con un lunar en<br />forma de México que cubre su cara...'
				},
				{
					id: 926,
					start: 4223.261,
					end: 4226.811,
					text: '...sudando durante horas en la cocina<br />mientras Mendl, ese genio...'
				},
				{
					id: 927,
					start: 4226.931,
					end: 4229.229,
					text: '...se cierne sobre ella<br />como un gorila enorme.'
				},
				{ id: 928, start: 4229.308, end: 4231.106, text: 'Y sin embargo, sin duda...' },
				{
					id: 929,
					start: 4231.227,
					end: 4234.447,
					text: '...siempre e invariablemente,<br />es extremadamente encantadora.'
				},
				{ id: 930, start: 4234.564, end: 4235.656, text: '¿Porqué?' },
				{ id: 931, start: 4236.566, end: 4238.284, text: 'Por su pureza.' },
				{
					id: 932,
					start: 4240.82,
					end: 4243.118,
					text: 'Ella también lo admira, Monsieur Gustave.'
				},
				{ id: 933, start: 4243.322, end: 4245.825, text: '- ¿En serio?<br />- Mucho.' },
				{
					id: 934,
					start: 4246.325,
					end: 4249.67,
					text: 'Es una buena señal.<br />Significa que lo entiende.'
				},
				{ id: 935, start: 4250.496, end: 4251.918, text: 'Eso es importante.' },
				{ id: 936, start: 4254.459, end: 4255.836, text: 'No coquetee con ella.' },
				{
					id: 937,
					start: 4296.709,
					end: 4299.553,
					text: '<b>CABEZA DE MUJER<br />HALLADA EN CESTO DE LAVANDERÍA</b>'
				},
				{
					id: 938,
					start: 4302.548,
					end: 4306.018,
					text: 'La chica recibió un<br />radiotelegrama a las 4 a.m.'
				},
				{
					id: 939,
					start: 4306.135,
					end: 4308.854,
					text: 'El sobre fue hallado cerca de<br />su cuerpo, pero no su contenido.'
				},
				{
					id: 940,
					start: 4309.639,
					end: 4312.483,
					text: 'La oficina de telégrafos conserva<br />una copia durante 24 horas.'
				},
				{ id: 941, start: 4312.558, end: 4315.402, text: 'Lo transcribí.<br />Dice lo siguiente:' },
				{ id: 942, start: 4316.145, end: 4317.567, text: '"Empaca tus cosas, punto".' },
				{ id: 943, start: 4317.73, end: 4319.653, text: '"Prepárate para partir, punto".' },
				{
					id: 944,
					start: 4319.732,
					end: 4322.235,
					text: '"Escondite cerca<br />del pico de Gabelmeister, punto".'
				},
				{
					id: 945,
					start: 4322.36,
					end: 4324.909,
					text: '"Destruye este mensaje,<br />con amor, punto final".'
				},
				{ id: 946, start: 4326.155, end: 4327.498, text: '¿Dónde está el cesto?' },
				{
					id: 947,
					start: 4340.628,
					end: 4344.258,
					text: 'LAS REMOTAS LADERAS<br />CERCA DEL PICO DE GABELMEISTER'
				},
				{ id: 948, start: 4352.932, end: 4354.605, text: '¿A dónde va, señor?' },
				{ id: 949, start: 4358.771, end: 4361.274, text: '¿A esquiar? ¿Trineo? ¿Escalar?' },
				{ id: 950, start: 4370.741, end: 4371.958, text: 'Tres klubecks.' },
				{
					id: 951,
					start: 4382.712,
					end: 4384.965,
					text: '<i>Por radiotelégrafo, le escribí a Agatha...</i>'
				},
				{
					id: 952,
					start: 4385.131,
					end: 4387.884,
					text: '<i>...con instrucciones de ir<br />a nuestro escondite acordado:</i>'
				},
				{
					id: 953,
					start: 4387.967,
					end: 4390.436,
					text: '<i>Una caravana gitana<br />en el camino de Nebeisbad...</i>'
				},
				{
					id: 954,
					start: 4390.511,
					end: 4391.637,
					text: '<i>...mientras Monsieur Gustave y yo...</i>'
				},
				{
					id: 955,
					start: 4391.721,
					end: 4394.144,
					text: '<i>...continuamos hacía los Alpes<br />de Zubrowka...</i>'
				},
				{
					id: 956,
					start: 4394.307,
					end: 4398.153,
					text: '<i>para nuestro encuentro a gran<br />altura con el mayordomo Serge X.</i>'
				},
				{
					id: 957,
					start: 4399.979,
					end: 4402.482,
					text: '<i>Como precaución,<br />nos apeamos discretamente...</i>'
				},
				{
					id: 958,
					start: 4402.607,
					end: 4405.076,
					text: '<i>...en el patio de carga<br />justo afuera de la estación.</i>'
				},
				{ id: 959, start: 4412.241, end: 4413.834, text: "<i>L'air de Panache.</i>" },
				{
					id: 960,
					start: 4416.245,
					end: 4420.5,
					text: '<b>MEDIODÍA<br />EL OBSERVATORIO EN LA CIMA</b>'
				},
				{
					id: 961,
					start: 4424.837,
					end: 4427.306,
					text: 'Vaya vista.<br />Hay que reconocérselos.'
				},
				{ id: 962, start: 4427.423, end: 4428.64, text: 'Concuerdo.' },
				{
					id: 963,
					start: 4440.478,
					end: 4443.197,
					text: '"A menudo se observa:<br />Ni un solo copo de nieve...'
				},
				{
					id: 964,
					start: 4444.231,
					end: 4447.03,
					text: '- ...a ningún otro es igual en su forma..."<br />- Alguien viene.'
				},
				{
					id: 965,
					start: 4450.196,
					end: 4453.496,
					text: '¿Monsieur Gustave, del<br />Gran Budapest en Nebelsbad?'
				},
				{ id: 966, start: 4454.492, end: 4456.335, text: 'Suban en el siguiente teleférico.' },
				{ id: 967, start: 4459.121, end: 4461.544, text: '<b>OBSERVATORIO EN LA MONTAÑA</b>' },
				{
					id: 968,
					start: 4495.741,
					end: 4499.245,
					text: '¿Monsieur Gustave, del<br />Gran Budapest en Nebelsbad?'
				},
				{ id: 969, start: 4500.579, end: 4501.58, text: 'Cambie lugar conmigo.' },
				{
					id: 970,
					start: 4513.759,
					end: 4516.854,
					text: '<b>NUESTRO SANTO PADRE<br />DE SUDETEN WALTZ</b>'
				},
				{
					id: 971,
					start: 4531.027,
					end: 4533.951,
					text: '¿Monsieur Gustave, del<br />Gran Budapest en Nebelsbad?'
				},
				{ id: 972, start: 4535.448, end: 4536.95, text: 'Pónganse estos y canten.' },
				{
					id: 973,
					start: 4564.894,
					end: 4567.443,
					text: '- ¿Monsieur Gustave, del...?<br />- ¡Sí, maldita sea!'
				},
				{ id: 974, start: 4567.563, end: 4568.655, text: 'Confiésese.' },
				{ id: 975, start: 4569.732, end: 4570.733, text: '¡Soy inocente!' },
				{ id: 976, start: 4571.776, end: 4572.777, text: 'No, no.' },
				{
					id: 977,
					start: 4581.994,
					end: 4585.123,
					text: 'Perdóneme, Monsieur Gustave.<br />Jamás quise traicionarlo.'
				},
				{
					id: 978,
					start: 4585.247,
					end: 4588.091,
					text: 'Me amenazaron de muerte<br />y asesinaron a mi única familia.'
				},
				{ id: 979, start: 4588.167, end: 4589.794, text: 'No. ¿A quién mataron ahora?' },
				{
					id: 980,
					start: 4589.919,
					end: 4592.297,
					text: '- A mi querida hermana.<br />- ¿La de los pies chuecos?'
				},
				{ id: 981, start: 4592.421, end: 4594.014, text: '- Sí.<br />- ¡Esos desgraciados!' },
				{
					id: 982,
					start: 4594.173,
					end: 4597.643,
					text: '- Intenté advertírselo...<br />- Lo sé, querido. Dejemos eso atrás.'
				},
				{
					id: 983,
					start: 4597.76,
					end: 4600.809,
					text: 'Lamento ponerte en aprietos,<br />pero debes limpiar mi nombre.'
				},
				{
					id: 984,
					start: 4600.93,
					end: 4602.648,
					text: '- Sé que estás de luto...<br />- Hay más.'
				},
				{
					id: 985,
					start: 4603.432,
					end: 4605.355,
					text: '- De la historia.<br />- Entiendo. Prosigue.'
				},
				{
					id: 986,
					start: 4605.518,
					end: 4608.192,
					text: 'Fui testigo oficial<br />en presencia de Madame D...'
				},
				{
					id: 987,
					start: 4608.312,
					end: 4609.529,
					text: '...de la creación de<br />un segundo testamento...'
				},
				{
					id: 988,
					start: 4609.647,
					end: 4612.651,
					text: '...a ejecutarse solo en caso<br />de fallecer por asesinato.'
				},
				{ id: 989, start: 4612.775, end: 4614.368, text: '- ¿Otro testamento?<br />- Sí.' },
				{ id: 990, start: 4614.485, end: 4616.112, text: '- ¿Por si la asesinaban?<br />- Sí.' },
				{ id: 991, start: 4616.695, end: 4617.696, text: 'Pero lo destruyeron.' },
				{ id: 992, start: 4617.863, end: 4619.365, text: '- Ay, no.<br />- Sin embargo...' },
				{ id: 993, start: 4620.116, end: 4621.117, text: 'Hice una copia.' },
				{
					id: 994,
					start: 4621.659,
					end: 4623.127,
					text: '¿Una segunda copia<br />del segundo testamento?'
				},
				{ id: 995, start: 4623.202, end: 4624.249, text: 'Así es.' },
				{
					id: 996,
					start: 4628.04,
					end: 4630.463,
					text: '¿Qué dice? ¿Dónde está?<br />¿De qué se trata?'
				},
				{
					id: 997,
					start: 4630.543,
					end: 4633.137,
					text: '¡No nos dejes en suspenso!<br />¡Ha sido una pesadilla!'
				},
				{ id: 998, start: 4633.212, end: 4635.34, text: '¡Solo dinos qué diablos sucede!' },
				{ id: 999, start: 4637.341, end: 4638.433, text: '¿Serge?' },
				{ id: 1000, start: 4638.676, end: 4639.802, text: '¿Serge?' },
				{ id: 1001, start: 4639.885, end: 4640.886, text: '¡Serge!' },
				{
					id: 1002,
					start: 4644.89,
					end: 4647.063,
					text: '¡Maldita sea!<br />¡Estrangularon al pobre idiota!'
				},
				{ id: 1003, start: 4674.837, end: 4676.054, text: '¡Vamos! ¡Rápido!' },
				{
					id: 1004,
					start: 4683.762,
					end: 4686.106,
					text: '- ¿Qué hacemos si lo atrapamos?<br />- No lo sé.'
				},
				{
					id: 1005,
					start: 4686.223,
					end: 4688.772,
					text: 'Es un psicópata homicida.<br />Detente.'
				},
				{
					id: 1006,
					start: 4688.893,
					end: 4691.112,
					text: 'No puedo.<br />Apenas puedo controlarlo.'
				},
				{ id: 1007, start: 4699.737, end: 4701.956, text: '<b>JUEGOS DE INVIERNO</b>' },
				{ id: 1008, start: 4721.759, end: 4724.262, text: '<b>SALIDA</b>' },
				{ id: 1009, start: 4732.144, end: 4734.238, text: '<b>META</b>' },
				{
					id: 1010,
					start: 4758.921,
					end: 4761.925,
					text: '¡Gusano patético y asqueroso!<br />¡Te odio!'
				},
				{
					id: 1011,
					start: 4775.312,
					end: 4779.533,
					text: "\"'Si por ventura este fuese mi fin: ¡adiós!'<br />Gritó el gaitero herido..."
				},
				{
					id: 1012,
					start: 4780.526,
					end: 4783.621,
					text: "...los mosquetes chasqueaban,<br />los guardias gritaban '¡Hurra!'..."
				},
				{ id: 1013, start: 4783.696, end: 4784.993, text: '...y las murallas caían...' },
				{
					id: 1014,
					start: 4786.198,
					end: 4789.498,
					text: '"\'Creo que es mi último aliento,<br />me temo\', dijo él..."'
				},
				{ id: 1015, start: 4790.202, end: 4791.954, text: '¡Demonios! ¡Lo hiciste!' },
				{ id: 1016, start: 4792.454, end: 4794.047, text: '¡Bien hecho, Zero!' },
				{
					id: 1017,
					start: 4805.342,
					end: 4807.845,
					text: '¡Gustave H!<br />¡Está prófugo de la justicia!'
				},
				{
					id: 1018,
					start: 4807.97,
					end: 4811.895,
					text: 'Entreguese sin oponer resistencia y<br />personalmente le garantizo un trato justo.'
				},
				{ id: 1019, start: 4812.016, end: 4813.518, text: '¡No intente escapar!' },
				{ id: 1020, start: 4813.892, end: 4815.189, text: '- ¿Qué opina?<br />- No lo sé.' },
				{
					id: 1021,
					start: 4815.311,
					end: 4817.985,
					text: 'Prefiero saltar de este acantilado<br />que volver a prisión.'
				},
				{
					id: 1022,
					start: 4818.856,
					end: 4822.36,
					text: 'Robamos la moto, vamos por Agatha,<br />tomamos "Niño con manzana"...'
				},
				{
					id: 1023,
					start: 4822.484,
					end: 4826.079,
					text: '- ...y partimos a la Riviera Maltesa.<br />- ¡Muy bien! Eres extraordinario, Zero.'
				},
				{ id: 1024, start: 4826.196, end: 4827.163, text: 'Gracias.' },
				{
					id: 1025,
					start: 4827.239,
					end: 4829.913,
					text: 'Un momento de silencio<br />en memoria del devoto siervo...'
				},
				{
					id: 1026,
					start: 4830.075,
					end: 4832.248,
					text: '...asesinado en cumplimiento de su deber.'
				},
				{ id: 1027, start: 4835.372, end: 4836.498, text: 'Adiós, Serge.' },
				{ id: 1028, start: 4838.751, end: 4839.923, text: 'Bien, vamos.' },
				{
					id: 1029,
					start: 4847.968,
					end: 4852.69,
					text: '<b>PARTE 5: LA SEGUNDA COPIA<br />DEL SEGUNDO TESTAMENTO</b>'
				},
				{
					id: 1030,
					start: 4853.807,
					end: 4855.775,
					text: '<i>La guerra comenzó a medianoche.</i>'
				},
				{
					id: 1031,
					start: 4855.976,
					end: 4858.479,
					text: '<i>Pffeifelstad cayó para el almuerzo<br />bajo un bombardeo...</i>'
				},
				{
					id: 1032,
					start: 4858.604,
					end: 4861.949,
					text: '<i>...y diez batallones aparecieron<br />por la frontera oeste.</i>'
				},
				{
					id: 1033,
					start: 4862.066,
					end: 4864.034,
					text: '<i>Los altos mandos<br />avanzaron hacia Nebelsbad.</i>'
				},
				{ id: 1034, start: 4871.867, end: 4874.461, text: '<b>24 HORAS DESPUÉS</b>' },
				{
					id: 1035,
					start: 4876.497,
					end: 4879.626,
					text: 'Cortesía de Herr Mendl<br />para el personal ejecutivo.'
				},
				{
					id: 1036,
					start: 4882.92,
					end: 4886.265,
					text: 'El general Stieglitz solicita<br />una sala con vista al jardín.'
				},
				{ id: 1037, start: 4886.382, end: 4888.225, text: 'Dale la suite Duque Leopoldo.' },
				{
					id: 1038,
					start: 4888.342,
					end: 4891.721,
					text: 'Cable del secretario Woroniecki.<br />Llegará un día antes.'
				},
				{ id: 1039, start: 4891.845, end: 4893.973, text: 'Habitaciones 401 -2-3.' },
				{
					id: 1040,
					start: 4894.098,
					end: 4897.568,
					text: 'Mueve a Logística a una<br />habitación sencilla en el tercer piso.'
				},
				{ id: 1041, start: 4897.684, end: 4899.231, text: 'Necesitarán más espacio.' },
				{ id: 1042, start: 4909.488, end: 4910.705, text: '<b>SOLO PERSONAL</b>' },
				{
					id: 1043,
					start: 4922.709,
					end: 4927.055,
					text: 'Ha comenzado el principio del fin<br />del fin del principio.'
				},
				{
					id: 1044,
					start: 4927.381,
					end: 4930.726,
					text: 'Un final triste, desafinado,<br />en un piano maltrecho de cantina...'
				},
				{
					id: 1045,
					start: 4930.843,
					end: 4933.221,
					text: '...en las afueras de un<br />pueblo fantasma abandonado.'
				},
				{
					id: 1046,
					start: 4933.345,
					end: 4935.518,
					text: 'Prefiero no ser testigo de tal blasfemia.'
				},
				{ id: 1047, start: 4935.597, end: 4936.723, text: 'Yo también.' },
				{
					id: 1048,
					start: 4936.807,
					end: 4939.23,
					text: 'El Gran Budapest<br />se ha convertido en cuartel.'
				},
				{
					id: 1049,
					start: 4939.351,
					end: 4941.979,
					text: 'Jamás en mi vida<br />volveré a cruzar ese umbral.'
				},
				{ id: 1050, start: 4942.104, end: 4943.777, text: '- Ni yo.<br />- Jamás volveré a...' },
				{ id: 1051, start: 4943.897, end: 4946.366, text: 'Es posible que entremos ahora mismo.' },
				{ id: 1052, start: 4948.61, end: 4949.953, text: 'Dmitri.' },
				{ id: 1053, start: 4953.115, end: 4954.116, text: '¡Agatha!' },
				{
					id: 1054,
					start: 4964.835,
					end: 4967.634,
					text: 'Buenas noches, Sr. Desgoffe und Taxis.<br />Soy Monsieur Chuck.'
				},
				{
					id: 1055,
					start: 4967.754,
					end: 4971.008,
					text: 'Le asignamos a usted y sus hermanas<br />la suite Rey Ferdinando.'
				},
				{
					id: 1056,
					start: 4971.133,
					end: 4974.182,
					text: '- Buenas noches. El general...<br />- ¿Quién es ella?'
				},
				{
					id: 1057,
					start: 4974.303,
					end: 4977.352,
					text: '- ¿Disculpe?<br />- Creo que ella tiene mi retrato.'
				},
				{ id: 1058, start: 4977.431, end: 4978.523, text: 'Con permiso.' },
				{ id: 1059, start: 4995.574, end: 4997.076, text: '- Seis.<br />- Espere.' },
				{ id: 1060, start: 5000.787, end: 5001.788, text: 'Seis.' },
				{ id: 1061, start: 5005.125, end: 5006.798, text: 'Cortesía de Herr Mendl.' },
				{ id: 1062, start: 5019.806, end: 5021.854, text: '<b>ASCENSOR DE SERVICIO</b>' },
				{ id: 1063, start: 5022.893, end: 5024.065, text: 'Disculpa.' },
				{
					id: 1064,
					start: 5024.52,
					end: 5027.569,
					text: '¿Viste a una repostera con un paquete<br />en el último minuto y medio?'
				},
				{
					id: 1065,
					start: 5027.689,
					end: 5030.363,
					text: 'Sí. Subió al ascensor con<br />el Sr. Desgoffe und Taxis.'
				},
				{ id: 1066, start: 5030.484, end: 5031.736, text: 'Gracias.' },
				{ id: 1067, start: 5032.528, end: 5034.155, text: 'Disculpa, ¿quién eres?' },
				{ id: 1068, start: 5034.404, end: 5036.498, text: 'Otto, señor.<br />El nuevo botones.' },
				{
					id: 1069,
					start: 5036.615,
					end: 5040.21,
					text: 'No te entrenaron bien.<br />Un botones no da esa información.'
				},
				{ id: 1070, start: 5040.327, end: 5042.125, text: 'Eres un muro de piedra, ¿entendido?' },
				{ id: 1071, start: 5059.012, end: 5060.389, text: 'Lindo cuadro.' },
				{ id: 1072, start: 5061.64, end: 5062.687, text: 'Sexto piso.' },
				{ id: 1073, start: 5106.31, end: 5108.028, text: '¿Dónde está "Niño con manzana"?' },
				{ id: 1074, start: 5109.021, end: 5111.023, text: '¡No es asunto tuyo!' },
				{
					id: 1075,
					start: 5111.898,
					end: 5115.072,
					text: 'Voy a acabar contigo, marica,<br />de una vez por todas.'
				},
				{ id: 1076, start: 5125.537, end: 5126.709, text: '¡Suelte su arma!' },
				{ id: 1077, start: 5148.852, end: 5150.854, text: '¡Alto al fuego! ¡Alto al fuego!' },
				{ id: 1078, start: 5150.979, end: 5152.026, text: '¡Basta!' },
				{ id: 1079, start: 5152.522, end: 5153.944, text: '¿Quién le dispara a quién?' },
				{
					id: 1080,
					start: 5154.316,
					end: 5157.115,
					text: 'Es Gustave H, asesino<br />y ladrón de arte prófugo.'
				},
				{ id: 1081, start: 5157.235, end: 5158.487, text: 'Lo tengo acorralado.' },
				{ id: 1082, start: 5158.612, end: 5160.159, text: '¡Es Dmitri Desgoffe und Taxis!' },
				{
					id: 1083,
					start: 5160.28,
					end: 5161.998,
					text: '¡Responsable de la muerte<br />de Kovacs...'
				},
				{
					id: 1084,
					start: 5162.074,
					end: 5164.577,
					text: '...Serge X y su hermana,<br />y de su propia madre!'
				},
				{
					id: 1085,
					start: 5166.62,
					end: 5168.748,
					text: '¡Nadie se mueva!<br />¡Todos quedan arrestados!'
				},
				{ id: 1086, start: 5170.207, end: 5171.8, text: '¿Quién está en la ventana?' },
				{ id: 1087, start: 5172.668, end: 5173.715, text: '¡Agatha!' },
				{ id: 1088, start: 5177.297, end: 5178.389, text: '¡No disparen!' },
				{ id: 1089, start: 5180.926, end: 5182.018, text: '310 bis.' },
				{ id: 1090, start: 5182.135, end: 5183.432, text: '¡Sujétate! ¡Allá voy!' },
				{ id: 1091, start: 5193.563, end: 5194.735, text: '<b>NO MOLESTAR</b>' },
				{ id: 1092, start: 5208.495, end: 5210.088, text: 'Hay algo detrás de la pin...' },
				{ id: 1093, start: 5216.169, end: 5217.261, text: '<i>¡Agatha!</i>' },
				{ id: 1094, start: 5217.337, end: 5218.589, text: '¡Agatha!' },
				{ id: 1095, start: 5219.381, end: 5220.803, text: '- ¿Estás bien?<br />- Eso creo.' },
				{ id: 1096, start: 5223.009, end: 5224.682, text: 'Hay algo detrás de la pintura.' },
				{ id: 1097, start: 5228.724, end: 5229.771, text: '<b>CONFIDENCIAL</b>' },
				{
					id: 1098,
					start: 5229.891,
					end: 5233.145,
					text: '<b>ABRIR SOLO SI MUERO ASESINADA<br />Madame C. V. D. U. T.</b>'
				},
				{
					id: 1099,
					start: 5238.316,
					end: 5241.115,
					text: '<i>Le legó todo a Monsieur Gustave,<br />por supuesto.</i>'
				},
				{
					id: 1100,
					start: 5243.363,
					end: 5245.536,
					text: '<i>La mansión, conocida como Schloss Lutz...</i>'
				},
				{
					id: 1101,
					start: 5246.908,
					end: 5249.912,
					text: '<i>...las fábricas: De armas,<br />medicamentos y textiles...</i>'
				},
				{ id: 1102, start: 5250.287, end: 5251.88, text: '<b>JURADO</b>' },
				{
					id: 1103,
					start: 5252.914,
					end: 5254.757,
					text: '<i>...un importante sindicato de diarios...</i>'
				},
				{ id: 1104, start: 5254.875, end: 5256.377, text: '<b>LIBRE DE TODOS LOS CARGOS</b>' },
				{
					id: 1105,
					start: 5256.46,
					end: 5257.882,
					text: '<i>...y, quizás ya lo habrá deducido...</i>'
				},
				{ id: 1106, start: 5258.003, end: 5259.55, text: '<i>...esta institución:</i>' },
				{
					id: 1107,
					start: 5259.629,
					end: 5261.051,
					text: '<b>DESAPARECE HIJO<br />DE CONDESA ASESINADA</b>'
				},
				{ id: 1108, start: 5261.423, end: 5263.346, text: '<i>El Gran Hotel Budapest.</i>' },
				{ id: 1109, start: 5264.217, end: 5266.094, text: '<i>Me designó como su sucesor...</i>' },
				{
					id: 1110,
					start: 5266.219,
					end: 5269.268,
					text: '<i>...y al continuaría guerra<br />serví a mi país adoptivo...</i>'
				},
				{
					id: 1111,
					start: 5269.389,
					end: 5272.734,
					text: '<i>...desde el escritorio que aún<br />se encuentra en la habitación contigua.</i>'
				},
				{ id: 1112, start: 5273.852, end: 5275.9, text: '<i>Él era igual a sus discípulas:</i>' },
				{
					id: 1113,
					start: 5276.104,
					end: 5279.779,
					text: '<i>Inseguro, vanidoso, superficial,<br />rubio, absorbente.</i>'
				},
				{ id: 1114, start: 5280.525, end: 5282.823, text: '<i>Al final, incluso era rico.</i>' },
				{
					id: 1115,
					start: 5284.029,
					end: 5287.249,
					text: '<i>No consiguió, sin embargo, llegar a viejo.</i>'
				},
				{
					id: 1116,
					start: 5291.953,
					end: 5294.081,
					text: 'Queridos amigos,<br />estamos aquí reunidos...'
				},
				{ id: 1117, start: 5294.206, end: 5295.924, text: '<i>Y tampoco mi querida Agatha.</i>' },
				{
					id: 1118,
					start: 5296.041,
					end: 5298.76,
					text: '<i>Ella y nuestro pequeño hijo<br />morirían dos años después...</i>'
				},
				{
					id: 1119,
					start: 5298.877,
					end: 5301.721,
					text: '<i>...de infuenza prusiana.<br />Una enfermedad absurda.</i>'
				},
				{
					id: 1120,
					start: 5301.838,
					end: 5307.095,
					text: '<i>Hoy se cura en una semana, pero en<br />esa época mató a muchos millones.</i>'
				},
				{
					id: 1121,
					start: 5310.055,
					end: 5312.308,
					text: '<i>En el vigésimo primer día<br />de la ocupación...</i>'
				},
				{
					id: 1122,
					start: 5312.432,
					end: 5316.357,
					text: '<i>...la mañana que el estado independiente<br />de Zubrowka dejó de existir...</i>'
				},
				{
					id: 1123,
					start: 5316.478,
					end: 5318.651,
					text: '<i>...viajamos con Monsieur Gustave a Lutz.</i>'
				},
				{
					id: 1124,
					start: 5318.772,
					end: 5321.025,
					text: 'En respuesta a tu pregunta, por cierto:'
				},
				{ id: 1125, start: 5321.608, end: 5322.86, text: 'Por supuesto.' },
				{
					id: 1126,
					start: 5324.152,
					end: 5327.747,
					text: 'Zero me preguntó sobre mis orígenes<br />humildes en el negocio hotelero.'
				},
				{ id: 1127, start: 5327.864, end: 5329.491, text: 'Por un tiempo se me consideró...' },
				{
					id: 1128,
					start: 5329.574,
					end: 5332.703,
					text: '...el mejor botones<br />que el Gran Budapest hubiera tenido.'
				},
				{ id: 1129, start: 5332.828, end: 5334.546, text: 'Creo que puedo decirlo.' },
				{ id: 1130, start: 5334.663, end: 5336.916, text: 'Este al fin me superó.' },
				{
					id: 1131,
					start: 5337.04,
					end: 5339.714,
					text: 'Aunque, debo decir,<br />tuvo un maestro excepcional.'
				},
				{ id: 1132, start: 5339.835, end: 5340.882, text: 'En verdad.' },
				{
					id: 1133,
					start: 5346.299,
					end: 5349.428,
					text: '"¿De dónde salieron<br />estos hermanos celestiales...'
				},
				{ id: 1134, start: 5349.553, end: 5350.805, text: '...unidos, por un instante...' },
				{
					id: 1135,
					start: 5350.887,
					end: 5354.357,
					text: '...al cruzar la estratósfera<br />de nuestra ventana estrellada?"'
				},
				{ id: 1136, start: 5355.225, end: 5358.229, text: '"Uno del Este y el otro del Oeste".' },
				{ id: 1137, start: 5358.603, end: 5360.15, text: 'Muy bien.' },
				{ id: 1138, start: 5360.647, end: 5362.399, text: 'No coquetee con ella.' },
				{
					id: 1139,
					start: 5364.693,
					end: 5367.196,
					text: '¿Por qué volvemos a detenernos<br />en el campo de cebada?'
				},
				{ id: 1140, start: 5371.074, end: 5372.997, text: '17 de noviembre.' },
				{ id: 1141, start: 5373.118, end: 5375.212, text: 'Comienzo del Bombardeo de Lutz.' },
				{
					id: 1142,
					start: 5375.912,
					end: 5378.711,
					text: 'Esos uniformes negros<br />me parecen muy apagados.'
				},
				{
					id: 1143,
					start: 5383.003,
					end: 5385.802,
					text: 'Hola, amigos.<br />Estábamos hablando de ustedes.'
				},
				{
					id: 1144,
					start: 5386.172,
					end: 5390.222,
					text: '- Documentos, por favor.<br />- Con gusto... como siempre.'
				},
				{
					id: 1145,
					start: 5394.514,
					end: 5396.107,
					text: 'Usted es el primero<br />del escuadrón de la muerte...'
				},
				{ id: 1146, start: 5396.182, end: 5398.605, text: '...a quien nos presentan formalmente.' },
				{ id: 1147, start: 5398.727, end: 5400.104, text: '¿Cómo le va?' },
				{ id: 1148, start: 5402.314, end: 5404.112, text: 'Más de lo mismo, ¿no es cierto?' },
				{
					id: 1149,
					start: 5408.403,
					end: 5411.907,
					text: 'Es una visa migratoria<br />con permiso de trabajo, querido.'
				},
				{ id: 1150, start: 5412.032, end: 5413.158, text: 'Lea esto.' },
				{ id: 1151, start: 5414.951, end: 5417.454, text: '<b>PERMISO ESPECIAL DE TRÁNSITO</b>' },
				{ id: 1152, start: 5422.417, end: 5425.341, text: '- Venga afuera.<br />- Quédate ahí.' },
				{
					id: 1153,
					start: 5427.505,
					end: 5429.883,
					text: 'Le juro que si le pone un dedo encima...'
				},
				{
					id: 1154,
					start: 5430.008,
					end: 5433.353,
					text: '...veré que lo den de baja,<br />lo encierren en la empalizada...'
				},
				{ id: 1155, start: 5433.47, end: 5435.723, text: '...y lo ahorquen para el atardecer.' },
				{
					id: 1156,
					start: 5436.514,
					end: 5439.609,
					text: '<i>Aún hay vagos destellos de civilidad...</i>'
				},
				{
					id: 1157,
					start: 5439.726,
					end: 5443.276,
					text: '<i>...en este matadero salvaje<br />que alguna vez fue la humanidad.</i>'
				},
				{ id: 1158, start: 5446.149, end: 5449.574, text: '¡Malditos fascistas asquerosos!' },
				{ id: 1159, start: 5450.862, end: 5452.705, text: '<i>Él era uno de ellos.</i>' },
				{ id: 1160, start: 5453.949, end: 5455.576, text: '<i>¿Qué más queda por decir?</i>' },
				{ id: 1161, start: 5463.583, end: 5465.051, text: '¿Qué sucedió al final?' },
				{ id: 1162, start: 5466.294, end: 5467.967, text: 'Al final le dispararon.' },
				{ id: 1163, start: 5470.006, end: 5471.849, text: 'Yo lo heredé todo.' },
				{
					id: 1164,
					start: 5480.767,
					end: 5484.271,
					text: '<i>Tras la cena, fuimos por las llaves<br />de nuestras habitaciones...</i>'
				},
				{
					id: 1165,
					start: 5484.396,
					end: 5486.615,
					text: '<i>...pero Monsieur Jean había<br />abandonado su puesto.</i>'
				},
				{ id: 1166, start: 5486.731, end: 5488.904, text: 'Supongo que se olvidó de nosotros.' },
				{
					id: 1167,
					start: 5489.025,
					end: 5492.7,
					text: '<i>En los últimos años, propiedades<br />como el Gran Budapest...</i>'
				},
				{
					id: 1168,
					start: 5492.821,
					end: 5496.667,
					text: '<i>...con pocas excepciones,<br />se habían convertido en propiedad común.</i>'
				},
				{
					id: 1169,
					start: 5497.075,
					end: 5500.955,
					text: '<i>Aunque jamás se dio a conocer<br />su negociación con el nuevo gobierno...</i>'
				},
				{
					id: 1170,
					start: 5501.079,
					end: 5502.877,
					text: '<i>...el resultado fue un secreto a voces:</i>'
				},
				{
					id: 1171,
					start: 5503.498,
					end: 5506.718,
					text: '<i>Zero Moustafa había<br />cambiado una gran fortuna...</i>'
				},
				{
					id: 1172,
					start: 5506.835,
					end: 5511.09,
					text: '<i>...por un hotel costoso, poco rentable<br />y condenado al fracaso.</i>'
				},
				{ id: 1173, start: 5511.798, end: 5512.97, text: '<i>¿Por qué?</i>' },
				{
					id: 1174,
					start: 5513.174,
					end: 5515.222,
					text: '<i>¿Era por un asunto sentimental?</i>'
				},
				{
					id: 1175,
					start: 5516.052,
					end: 5519.056,
					text: '<i>Fue bastante aventurado<br />y un poco atípíco de mi parte...</i>'
				},
				{
					id: 1176,
					start: 5519.305,
					end: 5521.148,
					text: '<i>...pero sentí la necesidad de saberlo...</i>'
				},
				{ id: 1177, start: 5521.516, end: 5523.484, text: '<i>...por mi salud, supongo.</i>' },
				{
					id: 1178,
					start: 5525.979,
					end: 5528.528,
					text: 'Disculpe que pregunte.<br />Espero no importunarle.'
				},
				{ id: 1179, start: 5528.648, end: 5529.991, text: 'No, claro que no.' },
				{
					id: 1180,
					start: 5531.443,
					end: 5534.663,
					text: '¿Es su única conexión<br />con ese mundo que ha desaparecido...'
				},
				{ id: 1181, start: 5534.779, end: 5536.702, text: '...el mundo de él, por así decirlo?' },
				{ id: 1182, start: 5536.99, end: 5538.412, text: '¿El mundo de él?' },
				{ id: 1183, start: 5538.908, end: 5541.161, text: 'No, no lo creo.' },
				{ id: 1184, start: 5542.078, end: 5544.422, text: 'Verá, compartíamos una vocación.' },
				{ id: 1185, start: 5544.539, end: 5546.382, text: 'No habría sido necesario.' },
				{ id: 1186, start: 5546.791, end: 5547.838, text: 'No.' },
				{ id: 1187, start: 5548.668, end: 5551.046, text: 'Conservo el hotel por Agatha.' },
				{ id: 1188, start: 5552.422, end: 5554.015, text: 'Aquí fuimos felices.' },
				{ id: 1189, start: 5554.674, end: 5556.301, text: 'Por un breve tiempo.' },
				{
					id: 1190,
					start: 5561.347,
					end: 5563.77,
					text: 'Para serle franco,<br />creo que su mundo había desaparecido...'
				},
				{ id: 1191, start: 5563.85, end: 5565.944, text: '...mucho antes de que él llegara.' },
				{ id: 1192, start: 5566.061, end: 5567.654, text: 'Pero le diré:' },
				{
					id: 1193,
					start: 5567.771,
					end: 5571.617,
					text: 'Ciertamente sostuvo la ilusión<br />con una gracia sorprendente.'
				},
				{
					id: 1194,
					start: 5572.734,
					end: 5575.237,
					text: '- ¿Va a subir?<br />- No, me sentará aquí un rato.'
				},
				{ id: 1195, start: 5575.737, end: 5576.909, text: 'Buenas noches.' },
				{
					id: 1196,
					start: 5582.619,
					end: 5586.169,
					text: '<i>La siguiente semana me embarqué<br />a Sudamérica en busca de una cura...</i>'
				},
				{
					id: 1197,
					start: 5586.289,
					end: 5589.133,
					text: '<i>...y comencé un viaje largo<br />y errante por el extranjero.</i>'
				},
				{
					id: 1198,
					start: 5589.25,
					end: 5591.503,
					text: '<i>No regresé a Europa en muchos años.</i>'
				},
				{
					id: 1199,
					start: 5596.966,
					end: 5599.81,
					text: '<i>Era un edificio en ruinas encantador.</i>'
				},
				{
					id: 1200,
					start: 5604.641,
					end: 5607.36,
					text: '<i>Pero jamás logre verlo de nuevo.</i>'
				},
				{
					id: 1201,
					start: 5620.615,
					end: 5624.29,
					text: '<b>Inspirada en los escritos de<br />STEFAN ZWEIG.</b>'
				},
				{
					id: 1202,
					start: 5625.578,
					end: 5628.878,
					text: '<b>Nacimiento: Viena, 1881<br />Muerte: Petrópolis, 1942</b>'
				}
			]
		}
	]

	// TODO:
	// Pantalla de carga
	// Subtitulos con posiciones
	// Mostrar tiempo (quiza frame) al hacer hover en el timeline
	// Devolver al ultimo 'currentTime' si el usuario salio
	// Cambiar subtitulos correctamente y audio de idioma
	// Mostrar cambios en grande (al retrodecer, adelantar)

	return (
		<Player
			videos={movie}
			subtitles={subtitles}
			name="The Grand Budapest Hotel"
			year="2014"
			history={history}
		/>
	)

	return <Panel />
}

export default Play
