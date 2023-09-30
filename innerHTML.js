/*
const data = {
	"sources": [
		{
			"id": 1,
			"name": "meduza"
		},
		{
			"id": 6,
			"name": "3dnews"
		},
		{
			"id": 7,
			"name": "nytimes"
		},
		{
			"id": 8,
			"name": "forbes"
		},
		{
			"id": 9,
			"name": "igromania"
		},
		{
			"id": 10,
			"name": "buro237"
		},
		{
			"id": 11,
			"name": "rusvesna"
		},
		{
			"id": 12,
			"name": "7ya"
		},
		{
			"id": 14,
			"name": "aif"
		},
		{
			"id": 15,
			"name": "gazetaru"
		},
		{
			"id": 16,
			"name": "atabegov"
		}
	],
	"categories": [
		{
			"id": 1,
			"name": "tech"
		},
		{
			"id": 2,
			"name": "sport"
		},
		{
			"id": 3,
			"name": "fashion"
		},
		{
			"id": 4,
			"name": "politics"
		},
		{
			"id": 5,
			"name": "other"
		},
		{
			"id": 6,
			"name": "atabegov"
		}
	],
	"items": [
		{
			"id": 416554,
			"lang": "ru",
			"date": "Mon Sep 25 2023 18:09:39 GMT+0300 (Moscow Standard Time)",
			"title": "Кадыров подтвердил, что его сын избил обвиняемого в поджоге Корана Журавеля",
			"description": "Глава Чечни признался, что гордится поступком Адама Кадырова.",
			"image": "",
			"source_id": 14,
			"category_id": 5
		},
		{
			"id": 416551,
			"lang": "ru",
			"date": "Mon Sep 25 2023 18:09:15 GMT+0300 (Moscow Standard Time)",
			"title": "Учитель экономики: почему Евгений Ясин вызывал симпатию в людях разных взглядов",
			"description": "25 сентября в возрасте 89 лет умер Евгений Ясин. О том, каким был один из авторов экономических реформ 1990-х и основатель Высшей школы экономики, рассказывает политолог Андрей Колесников",
			"image": "",
			"source_id": 8,
			"category_id": 5
		},
		{
			"id": 416559,
			"lang": "ru",
			"date": "Mon Sep 25 2023 18:01:15 GMT+0300 (Moscow Standard Time)",
			"title": "Макгрегор: ВС РФ уничтожат аэродромы на Западной Украине вместе с Су-24",
			"description": "Они находятся рядом со Львовом.",
			"image": "https://aif-s3.aif.ru/images/034/078/0e670e2a245f1192aaf9775db5a4b6a0.jpg",
			"source_id": 14,
			"category_id": 4
		},
		{
			"id": 416589,
			"lang": "ru",
			"date": "Mon Sep 25 2023 17:59:10 GMT+0300 (Moscow Standard Time)",
			"title": "В Финляндии поменяется процедура предоставления убежища",
			"description": "Финляндия готовится изменить процедуру предоставления убежища, отказывая соискателям прямо на границе, сообщила на пресс-брифинге в понедельник представитель министерства внутренних дел Риитта Копонен, пишет РИА Новости.\n ...",
			"image": "https://img.gazeta.ru/files3/121/15549121/2022-09-23T161858Z_1193383311_RC23NW9T292O_RTRMADP_3_UKRAINE-CRISIS-FINLAND-BORDER-pic905-895x505-29502.jpg",
			"source_id": 15,
			"category_id": 4
		},
		{
			"id": 416556,
			"lang": "ru",
			"date": "Mon Sep 25 2023 17:57:00 GMT+0300 (Moscow Standard Time)",
			"title": "Пиковый онлайн Payday 3 на всех платформах превысил 218 тысяч игроков",
			"description": "",
			"image": "https://newcdn.igromania.ru/articles/pics/tmp/images/2023/9/25/360b6cb6-3b0e-47af-b15a-5c1f93b488bf.jpg",
			"source_id": 9,
			"category_id": 1
		},
		{
			"id": 416596,
			"lang": "ru",
			"date": "Mon Sep 25 2023 17:56:06 GMT+0300 (Moscow Standard Time)",
			"title": "Эксперт объяснил, почему чествование нациста в Канаде выгодно России",
			"description": "Чествование в парламенте Канады престарелого бойца дивизии СС \"Галичина\" Ярослава Хунки может стать основой для информационной компании России. Такое мнение в интервью газете \"Взгляд\" озвучил заведующий центром ИАМП ...",
			"image": "https://img.gazeta.ru/files3/672/17120672/zel-pic905-895x505-49107.jpg",
			"source_id": 15,
			"category_id": 4
		},
		{
			"id": 416604,
			"lang": "ru",
			"date": "Mon Sep 25 2023 17:54:30 GMT+0300 (Moscow Standard Time)",
			"title": "В Монголии благодарят Россию за нераспространение на нее топливных ограничений",
			"description": "Председатель Великого государственного хурала Монголии Гомбожавын Занданшатар поблагодарил российские власти за то, что топливные ограничения, введенные ранее правительством РФ, не распространятся на республику. Его слова передает РИА ...",
			"image": "https://img.gazeta.ru/files3/445/13362445/Depositphotos_251106860_l-2015-pic905-895x505-93512.jpg",
			"source_id": 15,
			"category_id": 4
		},
		{
			"id": 416555,
			"lang": "ru",
			"date": "Mon Sep 25 2023 17:52:39 GMT+0300 (Moscow Standard Time)",
			"title": "«Родченко. Личное»: 5 причин не пропустить новую выставку в центре «Зотов»",
			"description": "В «Зотове» открылась выставка «Родченко. Личное» как отправная точка цикла, исследующего способы восприятия художниками повседневной жизни и личного пространства. Первый в списке — новатор фотографии, живописи, предметного и графического дизайна Александр Родченко. В...",
			"image": "https://www.buro247.ru/images/11200630_3.gif",
			"source_id": 10,
			"category_id": 3
		},
		{
			"id": 416611,
			"lang": "ru",
			"date": "Mon Sep 25 2023 17:51:18 GMT+0300 (Moscow Standard Time)",
			"title": "США профинансируют модернизацию обороны Польши",
			"description": "Соединенные Штаты выдадут Польше заем в размере $2 млрд на модернизацию обороны, сообщает РИА Новости, ссылаясь на Госдеп.\n\n\"США с гордостью сообщают о подписании договоренности о прямом займе для Польши в размере $2 млрд на поддержку ...",
			"image": "https://img.gazeta.ru/files3/11/12983011/91-pic905-895x505-66988.jpg",
			"source_id": 15,
			"category_id": 4
		},
		{
			"id": 416569,
			"lang": "ru",
			"date": "Mon Sep 25 2023 17:49:44 GMT+0300 (Moscow Standard Time)",
			"title": "Московские центральные диаметры планируют продлить за пределы Подмосковья",
			"description": "Об этом сообщил исполняющий обязанности заместителя мэра Москвы Максим Ликсутов.",
			"image": "https://aif-s3.aif.ru/images/034/078/80d8dff4eee36ba5be097c41f9eb8f17.JPG",
			"source_id": 14,
			"category_id": 4
		},
		{
			"id": 416712,
			"lang": "ru",
			"date": "Mon Sep 25 2023 17:45:40 GMT+0300 (Moscow Standard Time)",
			"title": "Астрономы обнаружили почти \"бесплотную\" экзопланету",
			"description": "Американские астрономы из Гарвардского университета с помощью космического телескопа TESS обнаружили новую экзопланету TOI-1420 b, вращающуюся вокруг далекой звезды TOI-1420.  Открытое небесное тело отличается чрезвычайно низкой ...",
			"image": "https://img.gazeta.ru/files3/327/16366327/photo_2023-03-09-00.03-pic905-895x505-34862.jpg",
			"source_id": 15,
			"category_id": 1
		},
		{
			"id": 416713,
			"lang": "ru",
			"date": "Mon Sep 25 2023 17:44:44 GMT+0300 (Moscow Standard Time)",
			"title": "Женщины переносят аномальную жару тяжелее, чем мужчины",
			"description": "Ученые из Амстердамского свободного университета в Нидерландах проанализировали последствия аномальной высокой температуры во Франции летом 2003 года. Выяснилось, что вероятность летального исхода, связанного с жарой, у женщин намного ...",
			"image": "https://img.gazeta.ru/files3/197/12440197/RTS2JGNJ-pic905-895x505-25000.jpg",
			"source_id": 15,
			"category_id": 1
		},
		{
			"id": 416691,
			"lang": "ru",
			"date": "Mon Sep 25 2023 17:44:12 GMT+0300 (Moscow Standard Time)",
			"title": "У британца нашли опухоль, когда он вышел подменить коллегу на работе в больнице",
			"description": "Житель Великобритании заявил, что его жизнь была спасена благодаря дополнительной смене на работе. Его слова цитирует New York Post.\n\n50-летний Майкл Лок вышел на работу в больнице в свой выходной, чтобы подменить коллегу. Прямо на работе ...",
			"image": "http://img.gazeta.ru/files3/333/17641333/NYPICHPDPICT000043931300-pic905-895x505-30860.jpg",
			"source_id": 15,
			"category_id": 3
		},
		{
			"id": 416575,
			"lang": "ru",
			"date": "Mon Sep 25 2023 17:43:17 GMT+0300 (Moscow Standard Time)",
			"title": "Развожаев разъяснил алгоритм работы оповещения при воздушной атаке",
			"description": "Жителям Севастополя дается от 30 до 50 минут, чтобы уйти в безопасное место.",
			"image": "https://aif-s3.aif.ru/images/034/078/249e5d2ab6a143eac53f9cd1900bfd59.JPG",
			"source_id": 14,
			"category_id": 4
		},
		{
			"id": 416650,
			"lang": "ru",
			"date": "Mon Sep 25 2023 17:43:02 GMT+0300 (Moscow Standard Time)",
			"title": "В Минэкономразвития назвали главный риск для экономики России",
			"description": "Глава Министерства экономического развития России Максим Решетников, выступая в ходе правительственного часа в Совете Федерации, заявил, что главный внешний риск для экономики РФ заключается в замедлении мировой экономики, внутренний - в ...",
			"image": "https://img.gazeta.ru/files3/146/12921146/RIAN_6007315.HR-pic905-895x505-63060.jpg",
			"source_id": 15,
			"category_id": 4
		},
		{
			"id": 416557,
			"lang": "ru",
			"date": "Mon Sep 25 2023 17:41:42 GMT+0300 (Moscow Standard Time)",
			"title": "Джордж Клуни опроверг информацию о продаже виллы на озере Комо за $107 млн",
			"description": "Ранее в сентябре издание Page Six сообщило со ссылкой на источники, что актер Джордж Клуни намерен продать свою виллу на озере Комо в Италии за $107 млн. Сделка могла стать рекордной для региона. 24 сентября представители актера связались с медиа и опровергли информацию о продаже",
			"image": "",
			"source_id": 8,
			"category_id": 5
		},
		{
			"id": 416567,
			"lang": "ru",
			"date": "Mon Sep 25 2023 17:40:28 GMT+0300 (Moscow Standard Time)",
			"title": "«VK Музыка» запустила раздел с аудиокнигами",
			"description": "«VK Музыка» запустила раздел с аудиокнигами. В каталоге можно найти мировые бестселлеры, произведения классической и детской литературы, фантастику, современную прозу, аудиокниги жанров нон-фикшн и new adult. Новый раздел уже доступен в приложении сервиса. «VK Музыка»...",
			"image": "https://www.buro247.ru/images/drozdova2/87788778878778.png",
			"source_id": 10,
			"category_id": 3
		},
		{
			"id": 416571,
			"lang": "ru",
			"date": "Mon Sep 25 2023 17:39:43 GMT+0300 (Moscow Standard Time)",
			"title": "На Premier вышла вторая серия документалки о новом российском кинематографе",
			"description": "В онлайн-кинотеатре Premier вышел второй эпизод документального фильма продюсера и кинокритика Никиты Карцева «Кино 3.0». Многосерийный проект исследует российский кинематограф с 1992 года до наших дней. Вторая серия рассказывает о нулевых. Именно в это десятилетие...",
			"image": "https://www.buro247.ru/images/katyakray/65477437567485.png",
			"source_id": 10,
			"category_id": 3
		},
		{
			"id": 416568,
			"lang": "ru",
			"date": "Mon Sep 25 2023 17:39:11 GMT+0300 (Moscow Standard Time)",
			"title": "Devolver Digital отказалась от невыгодных сделок с подписками Sony и Microsoft",
			"description": "",
			"image": "https://newcdn.igromania.ru/articles/pics/tmp/images/2023/9/25/087b6e7d-e291-4ebd-b215-977a766cffb4.jpg",
			"source_id": 9,
			"category_id": 1
		},
		{
			"id": 416582,
			"lang": "ru",
			"date": "Mon Sep 25 2023 17:39:10 GMT+0300 (Moscow Standard Time)",
			"title": "Суд по иску администрации Анапы к приемной семье Милохина перенесли",
			"description": "Один из участников спора не смог присутствовать на заседании.",
			"image": "https://aif-s3.aif.ru/images/034/078/072f910e9594a75a321205d5240258d2.png",
			"source_id": 14,
			"category_id": 4
		}
	]
};
*/

let data = null;

const renderNews = (category) => {
	fetch('https://frontend.karpovcourses.net/api/v2/ru/news/' + category)
	.then(response => response.json())
	.then((responseData) => {
		data = responseData;

		const mainNews = data.items.slice(0, 6);
		const smallNews = data.items.slice(0, 15);

		const mainNewsContainer = document.querySelector('.articles__big-col');
		const smallNewsContainer = document.querySelector('.articles__small-col');

		const escapeString = (string) => {
			const tagsToReplace = {
				'&': '&amp;',
				'<': '&lt;',
				'>': '&gt;'
			};

			return string.replace(/[&<>]/g, function (tag) {
				return tagsToReplace[tag] || tag;
			});
		}



		mainNews.forEach((item) => {
			const category = data.categories.find((categoryItem) => categoryItem.id === item.category_id).name;
			const source = data.sources.find((sourceItem) => sourceItem.id === item.source_id).name;

			const template = document.createElement('template');
			template.innerHTML = `
				<article class="main-article">
					<div class="main-article__img">
						<img src="${item.image}" alt="изображение новости">
					</div>
					<div class="main-article__content">
						<h4 class="main-article__category">${escapeString(category)}</h4>
						<h2 class="main-article__title line-limit">${escapeString(item.title)}</h2>
						<p class="main-article__text line-limit">${escapeString(item.description)}</p>
						<span class="main-article__src">${escapeString(source)}</span>
					</div>
				</article>
			`;

			mainNewsContainer.appendChild(template.content);
		})

		smallNews.forEach((item) => {
			const date = new Date(item.date).toLocaleDateString('ru-RU', {month: 'long', day: 'numeric'});
			const source = data.sources.find((sourceItem) => sourceItem.id === item.source_id).name;

			const template = document.createElement('template');
			template.innerHTML = `
				<article class="small-article">
					<h2 class="small-article__title line-limit">${escapeString(item.title)}</h2>
					<div class="small-article__caption">
						<p class="small-article__date">${date}</p>
						<span class="small-article__src">${escapeString(source)}</span>
					</div>
				</article>
			`;

			smallNewsContainer.appendChild(template.content);
		})

	})
}

renderNews(2);