### 2. https://github.com/atherdon/markdown-to-email

я работаю над email newsletter - это один из дополнительных источников дохода компании. не много, но курочка по зернышку. отсылаем примерно 2 раза в неделю. и тк сервис который мы используем - он не идеальный - пришлось делать свою тулзу которая помогает из markdown переводить контент в html template который хорошо отображается в почтовиках.



после этого мы будем разбивать проект на куски и переносить темлпейт на реакт версию - чтобы нам же было просто. 

пример письма которое генерируется(вчера отослали): https://www.noonifications.tech/w/f01Li4pkuUgga7MajWexIg
пример папки с кодом для одной рассылки: https://github.com/atherdon/newsletters/tree/master/archive/Thematic/2021/Februrary/progressed/webiny3

Сейчас у нас есть 3 основные ветки.
- **master branch** with latest stuff(v0.9): https://github.com/atherdon/markdown-to-email

- **react branch** (v2.0): https://github.com/atherdon/markdown-to-email/tree/react-components-stage-zero

- **version with a working generator** that I'm using 2-3 times per week: https://github.com/atherdon/markdown-to-email/tree/plain-working-version


**проблема**

Мы сделали генерацию empty-content(середины письма, в которой у нас текст и картинки) а вот полную генерацию "забыли" доделать. это простой plain js сейчас. там вообще ничего сложного. нужно просто сесть, разобраться, сделать базовую версию - потом я протестирую как работает для разных кейсов и все.

получатеся что пока у меня нету полностью работающего генератора - нам приходится для каждого письма ручками копипастить верстку в середину. это и глупо и тратит время. особенно бывает такой клиент, который хочет чтото изменить внутри и приходится по нескольку раз переделывать. а генератор бы просто автоматически делал новый render и все.

У нас получилось добится хороших результатов в генерации HTML тегов, которые отвечают за wrapping нашего контента. Тоесть текст newsletter - генерируется нормально. Мемы и другие картинки работают и т.д.

Вы можете сравнить content.md(этот файл хранит в себе контент в markdown format): [https://github.com/atherdon/newsletters/blob/master/archive/Thematic/2021/January/flatfile8/content.md](https://github.com/atherdon/newsletters/blob/master/archive/Thematic/2021/January/flatfile8/content.md) 

C empty.html(содержимое которого было сгенерировано с помощью генератора): [https://github.com/atherdon/newsletters/blob/master/archive/Thematic/2021/January/flatfile8/empty.html](https://github.com/atherdon/newsletters/blob/master/archive/Thematic/2021/January/flatfile8/empty.html) 

В файле empty.html нет ни <head> ни <body>. также нету хеадера и футера, в которых у нас выводится спонсорские блоки.
Нашей задачей будет добить генерацию до состояния, когда контент из [content.md](http://content.md) будет сразу генерировать нам файл [https://github.com/atherdon/newsletters/blob/master/archive/Thematic/2021/January/flatfile8/template.html](https://github.com/atherdon/newsletters/blob/master/archive/Thematic/2021/January/flatfile8/template.html)

у нас есть нормальный test coverage - мы постарались проверить кучу cases - которые я смог словить, когда мы делали реальные newsletters с разным контентом для наших клиентов.

для генерации верстки для контента я использую `yarn parse`

для тестирования полного генератора я использую `yarn parse:full`
