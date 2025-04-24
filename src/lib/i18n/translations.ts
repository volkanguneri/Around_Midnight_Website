export type Lang = 'fr' | 'en';

export const translations = {
	fr: {
		// Footer
		footer: {
			photography: 'Photographie par Camille Le Guelec',
			development: 'Développement web par Volkan Guneri'
		},
		// Header
		menu: {
			trio: 'Le Trio',
			musicians: 'Les Musiciens',
			gallery: 'Galerie',
			videos: 'Vidéos',
			contact: 'Contact'
		},
		// Banner
		banner: {
			title: 'Around Midnight',
			subtitle: 'Blues & Jazz pour danser',
			cta: 'Découvrir'
		},
		// Trio section
		trio: {
			title: 'Le Trio',
			description: [
				"Envie d'une soirée où la musique vous fait vibrer autant que la danse ? Around Midnight est le trio idéal pour donner vie à vos événements blues. Avec un répertoire éclectique mêlant Amy Winehouse, David Bowie, Ella Fitzgerald et bien d'autres, le groupe tisse un univers à la fois envoûtant et énergique.",
				"La voix intense et expressive de Juliette Chevalier, portée par le jeu virtuose d'Arnaud Lacarte à la guitare et les Hugues Lasserre à la contrebasse, crée une ambiance irrésistible. Entre joie, intensité et émotion, laissez-vous emporter par la profondeur d'une musique vivante, faite pour être partagée pleinement."
			]
		},
		// Musicians section
		musicians: {
			title: 'Les Musiciens',
			juliette: {
				name: 'Juliette Chevalier',
				instrument: 'Chant',
				bio: "Évoluant dans le monde artistique depuis l'enfance, je débute tout naturellement la musique à l'âge de 7 ans au conservatoire de Rennes où j'obtiens mon diplôme de guitare classique. En parallèle de ces études de guitare je commence le chant et intègre rapidement plusieurs formations dans différents styles : Pop, rock, chanson française puis jazz et bossa nova. En 2023, j'obtiens mon diplôme de Jazz vocal (DEM) au conservatoire de Rennes.\n\nJe fais partie actuellement de plusieurs ensembles, Quartet vocal Sweet Poppins, The Strawberry Fields (tribute de The Beatles). Riche de tous ces apprentissages, je cherche pendant plusieurs années des musiciens avec qui créer un projet qui me ressemble, ou ma voix pourra être écoutée et appréciée. C'est à l'été 2025 que je rencontre Arnaud Lacarte avec qui le rêve deviendra réalité."
			},
			arnaud: {
				name: 'Arnaud Lacarte',
				instrument: 'Guitare',
				bio: "C'est à l'été 1996, à l'âge de 13 ans, qu'Arnaud découvre la guitare. Très vite, il intègre une école de musique pour en maîtriser les fondements. Fasciné par les harmonies jazz, il poursuit son apprentissage dans une école spécialisée, puis au Conservatoire de Nantes, affinant peu à peu son style et son langage musical.\n\nDepuis plus de vingt ans, Arnaud se produit sur scène aux côtés de nombreux groupes, explorant divers styles musicaux. Il partage notamment la scène avec le contrebassiste Hugues Lassere au sein du trio manouche Opus Swing.\n\nL'été 2025 marque sa rencontre avec Juliette Chevalier, avec qui il fonde le trio Around Midnight, mêlant élégance, sensibilité et passion pour les musiques aux teintes feutrées."
			},
			hugues: {
				name: 'Hugues Lassere',
				instrument: 'Contrebasse',
				bio: "Né à Vannes en Bretagne en 1984, Hugues Lassere grandit au sein d'une famille de musiciens. Il débute son apprentissage musical dès l'âge de 8 ans en étudiant la guitare et le piano classique. À 15 ans, il commence à se produire avec des groupes locaux et fait la découverte du jazz et de la basse électrique. Cependant, c'est la contrebasse qui capte particulièrement son attention et qu'il choisit d'approfondir.\n\nSon parcours musical le conduit au Conservatoire Royal de Bruxelles, puis au CRR de Saint-Maur-des-Fossés, où il se consacre à l'étude de la contrebasse classique pendant 7 ans. Après cette période, Hugues décide de revenir dans sa région d'origine, la Bretagne, où il collabore avec de nombreux musiciens et ensembles. Il organise également la jam session du dimanche au Penny Lane à Rennes."
			}
		},
		// Gallery
		gallery: {
			title: 'Galerie',
			description: 'Découvrez nos moments sur scène'
		},
		// Videos
		videos: {
			title: 'Vidéos',
			description: 'Regardez nos performances'
		},
		// Contact
		contact: {
			title: 'Contact',
			description: 'Contactez-nous pour vos événements',
			form: {
				name: 'Nom',
				email: 'Email',
				message: 'Message',
				send: 'Envoyer'
			}
		}
	},
	en: {
		// Footer
		footer: {
			photography: 'Photography by Camille Le Guelec',
			development: 'Web Development by Volkan Guneri'
		},
		// Header
		menu: {
			trio: 'The Trio',
			musicians: 'Musicians',
			gallery: 'Gallery',
			videos: 'Videos',
			contact: 'Contact'
		},
		// Banner
		banner: {
			title: 'Around Midnight',
			subtitle: 'Blues & Jazz to dance',
			cta: 'Discover'
		},
		// Trio section
		trio: {
			title: 'The Trio',
			description: [
				'Looking for an evening where music makes you vibrate as much as dancing? Around Midnight is the ideal trio to bring your blues events to life. With an eclectic repertoire blending Amy Winehouse, David Bowie, Ella Fitzgerald and many others, the group weaves a universe that is both enchanting and energetic.',
				"The intense and expressive voice of Juliette Chevalier, carried by Arnaud Lacarte's virtuoso guitar playing and Hugues Lasserre's double bass, creates an irresistible atmosphere. Between joy, intensity and emotion, let yourself be carried away by the depth of living music, made to be fully shared."
			]
		},
		// Musicians section
		musicians: {
			title: 'The Musicians',
			juliette: {
				name: 'Juliette Chevalier',
				instrument: 'Vocals',
				bio: 'Growing up in the artistic world since childhood, I naturally began music at the age of 7 at the Rennes Conservatory where I obtained my classical guitar diploma. Alongside my guitar studies, I started singing and quickly joined several bands in different styles: Pop, rock, French songs, then jazz and bossa nova. In 2023, I obtained my Jazz Vocal diploma (DEM) at the Rennes Conservatory.\n\nI am currently part of several ensembles, including the Sweet Poppins Vocal Quartet and The Strawberry Fields (Beatles tribute). Enriched by all these learning experiences, I spent several years looking for musicians with whom I could create a project that reflects who I am, where my voice could be heard and appreciated. It was in the summer of 2025 that I met Arnaud Lacarte, with whom the dream would become reality.'
			},
			arnaud: {
				name: 'Arnaud Lacarte',
				instrument: 'Guitar',
				bio: 'It was in the summer of 1996, at the age of 13, that Arnaud discovered the guitar. He quickly joined a music school to master its fundamentals. Fascinated by jazz harmonies, he continued his learning at a specialized school, then at the Nantes Conservatory, gradually refining his style and musical language.\n\nFor more than twenty years, Arnaud has performed on stage alongside numerous bands, exploring various musical styles. He notably shares the stage with double bassist Hugues Lassere in the gypsy jazz trio Opus Swing.\n\nThe summer of 2025 marks his encounter with Juliette Chevalier, with whom he founded the Around Midnight trio, blending elegance, sensitivity, and passion for music with muted tones.'
			},
			hugues: {
				name: 'Hugues Lassere',
				instrument: 'Double bass',
				bio: 'Born in Vannes, Brittany in 1984, Hugues Lassere grew up in a family of musicians. He began his musical journey at the age of 8, studying classical guitar and piano. At 15, he started performing with local bands and discovered jazz and electric bass. However, it was the double bass that particularly captured his attention and became his chosen focus.\n\nHis musical path led him to the Royal Conservatory of Brussels, then to the CRR of Saint-Maur-des-Fossés, where he devoted himself to studying classical double bass for 7 years. After this period, Hugues decided to return to his native region, Brittany, where he collaborates with numerous musicians and ensembles. He also organizes the Sunday jam session at Penny Lane in Rennes.'
			}
		},
		// Gallery
		gallery: {
			title: 'Gallery',
			description: 'Discover our stage moments'
		},
		// Videos
		videos: {
			title: 'Videos',
			description: 'Watch our performances'
		},
		// Contact
		contact: {
			title: 'Contact',
			description: 'Contact us for your events',
			form: {
				name: 'Name',
				email: 'Email',
				message: 'Message',
				send: 'Send'
			}
		}
	}
};
