var storyContent = ﻿{"inkVersion":18,"root":[[{"->":"intro"},["done",{"#f":7,"#n":"g-0"}],null],"done",{"intro":[["ev",{"VAR?":"justStarted"},"!","/ev",[{"->":".^.b","c":true},{"b":["\n",{"#":"CLEAR"},{"->":".^.^.^.5"},null]}],"nop","\n","ev",0,"/ev",{"temp=":"justStarted","re":true},"ev",0,"/ev",{"temp=":"journalsOnFloor","re":true},"ev",0,"/ev",{"temp=":"journalsInHands","re":true},"ev",0,"/ev",{"temp=":"journalsMade","re":true},"^Проведя очередные семь часов и пятьдесят пять минут на нелюбимой работе, я с досадой вспоминаю, что сегодня меня попросили заняться распечатками. До конца рабочего дня осталось пять минут. Все оборудование здесь старое и наполовину неисправное. И, как назло, у меня всего две руки… Но, может быть, стоит хотя бы начать что-то делать?","\n","ev","str","^Начать что-то делать","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["^ ",{"->":"start"},"\n",{"#f":7}]}],{"#f":3}],"timeLeft":["ev",300,10,{"^->":"intro"},"turns",1,"-","*","-","/ev","~ret",{"#f":3}],"padMe":[{"temp=":"n"},"ev",{"VAR?":"n"},9,">","/ev",[{"->":".^.b","c":true},{"b":["\n","ev",{"VAR?":"n"},"/ev","~ret",{"->":"padMe.8"},null]}],[{"->":".^.b"},{"b":["\n","ev","str","^0","/str",{"VAR?":"n"},"+","/ev","~ret",{"->":"padMe.8"},null]}],"nop","\n",{"#f":3}],"lateClear":[{"#":"CLEAR"},"ev",0,"/ev",{"temp=":"doClear","re":true},{"#f":3}],"timeLeftPretty":["ev",{"f()":"timeLeft"},60,"/",{"f()":"padMe"},"str","^:","/str","+",{"f()":"timeLeft"},60,"%",{"f()":"padMe"},"+","/ev","~ret",{"#f":3}],"timeIsUpMaybeClear":[{"temp=":"c"},"ev",{"VAR?":"c"},"/ev",[{"->":".^.b","c":true},{"b":["\n",{"#":"CLEAR"},{"->":".^.^.^.5"},null]}],"nop","\n","ev",1,"/ev",{"temp=":"doClear","re":true},"ev",{"f()":"timeLeft"},0,"<=","/ev","~ret",{"#f":3}],"timeIsUp":["ev",1,{"f()":"timeIsUpMaybeClear"},"/ev","~ret",{"#f":3}],"start":[["ev",{"VAR?":"doClear"},{"f()":"timeIsUpMaybeClear"},"/ev",[{"->":".^.b","c":true},{"b":["^ ",{"->":"ending5"},{"->":".^.^.^.5"},null]}],"nop","^","\n","^<i>Часы на столе показывают время - осталось ","ev",{"f()":"timeLeftPretty"},"out","/ev","^ до конца рабочего дня.</i>","\n","ev","str","^Компьютер","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^ЗАПИСКА","/str",{"CNT?":"ending4"},"!","/ev",{"*":".^.c-1","flg":5},"ev","str","^Встать из-за стола","/str","/ev",{"*":".^.c-2","flg":4},"ev","str","^Кататься на стуле","/str","/ev",{"*":".^.c-3","flg":4},{"c-0":["^ ",{"->":"computer"},"\n",{"#f":7}],"c-1":["\n","ev",{"f()":"lateClear"},"pop","/ev","\n","^здесь написано:","\n","^СРОЧНО изготовить ","ev",5,"out","/ev","^ журналов!!!","\n","^- И.о. директора","\n",{"->":"start"},{"#f":7}],"c-2":["^ ",{"->":"typography"},"\n",{"#f":7}],"c-3":["\n","ev",{"f()":"lateClear"},"pop","/ev","\n","^Йуху!","\n",{"->":"start"},{"#f":7}]}],{"#f":3}],"computer":[["ev",{"VAR?":"doClear"},{"f()":"timeIsUpMaybeClear"},"/ev",[{"->":".^.b","c":true},{"b":["^ ",{"->":"ending5"},{"->":".^.^.^.5"},null]}],"nop","^","\n","^На весь экран открыт текстовый редактор.","\n","ev","str","^Печатать журнал","/str",{"VAR?":"journalsOnFloor"},5,"<","/ev",{"*":".^.c-0","flg":5},"ev","str","^Отвести взгляд","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["\n",{"->":"print_journal"},{"#f":7}],"c-1":["\n",{"->":"start"},{"#f":7}]}],{"#f":3}],"print_journal":["ev",{"VAR?":"journalsOnFloor"},1,"+",{"temp=":"journalsOnFloor","re":true},"/ev","ev",{"f()":"timeIsUp"},"/ev",[{"->":".^.b","c":true},{"b":["^ ",{"->":"ending5"},{"->":".^.^.^.10"},null]}],"nop","^","\n","ev",{"f()":"lateClear"},"pop","/ev","\n","^<i>* зашумел принтер *</i>","\n",{"->":"computer"},{"#f":3}],"typography":[["ev",{"f()":"timeIsUp"},"/ev",[{"->":".^.b","c":true},{"b":["^ ",{"->":"ending5"},{"->":".^.^.^.4"},null]}],"nop","^","\n","^<i>Часы над дверью показывают время - осталось ","ev",{"f()":"timeLeftPretty"},"out","/ev","^ до конца рабочего дня.</i>","\n","ev","str","^Сесть за компьютерный стол","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Подойти к принтеру","/str",{"VAR?":"journalsOnFloor"},0,"==","/ev",{"*":".^.c-1","flg":5},"ev","str","^Подойти к принтеру","/str",{"VAR?":"journalsOnFloor"},0,">","/ev",{"*":".^.c-2","flg":5},"ev","str","^Подойти к сшивателю","/str","/ev",{"*":".^.c-3","flg":4},"ev","str","^Подойти к копиру","/str","/ev",{"*":".^.c-4","flg":4},"ev","str","^Выйти из типографии","/str","/ev",{"*":".^.c-5","flg":20},{"c-0":["^ ",{"->":"start"},"\n",{"#f":7}],"c-1":["^ ",{"->":"printer"},"\n",{"#f":7}],"c-2":["^ ",{"->":"printer_pages"},"\n",{"#f":7}],"c-3":["^ ",{"->":"stapler"},"\n",{"#f":7}],"c-4":["^ ",{"->":"copier"},"\n",{"#f":7}],"c-5":["^ ",{"->":"ending7"},"\n",{"#f":7}]}],{"#f":3}],"copier":[["ev",{"f()":"timeIsUp"},"/ev",[{"->":".^.b","c":true},{"b":["^ ",{"->":"ending5"},{"->":".^.^.^.4"},null]}],"nop","^","\n","<>","^Около копира.","\n","ev","str","^Отксерить руку","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Отксерить лицо","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^Отксерить жопу","/str","/ev",{"*":".^.c-2","flg":4},"ev","str","^Отойти","/str","/ev",{"*":".^.c-3","flg":4},{"c-0":["^ ",{"->":"copier"},"\n",{"#f":7}],"c-1":["^ ",{"->":"ending9"},"\n",{"#f":7}],"c-2":["^ ",{"->":"copier"},"\n",{"#f":7}],"c-3":["^ ",{"->":"typography"},"\n",{"#f":7}]}],{"#f":3}],"stapler":[["ev",{"f()":"timeIsUp"},"/ev",[{"->":".^.b","c":true},{"b":["^ ",{"->":"ending5"},{"->":".^.^.^.4"},null]}],"nop","^","\n","<>","^Около сшивателя.","\n","ev",{"VAR?":"journalsMade"},0,">",{"VAR?":"journalsMade"},5,1,"-","<","&&",{"CNT?":"ending4"},"!","&&","/ev",[{"->":".^.b","c":true},{"b":["\n","^Осталось изготовить ","ev",5,{"VAR?":"journalsMade"},"-","out","/ev","^ журнала","\n",{"->":".^.^.^.25"},null]}],"nop","\n","ev",{"VAR?":"journalsMade"},5,1,"-","==",{"CNT?":"ending4"},"!","&&","/ev",[{"->":".^.b","c":true},{"b":["\n","^Осталось изготовить 1 журнал","\n",{"->":".^.^.^.38"},null]}],"nop","\n","ev","str","^Сшить журнал","/str",{"VAR?":"journalsInHands"},0,">","/ev",{"*":".^.c-0","flg":5},"ev","str","^Отойти","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["\n","ev",{"VAR?":"journalsInHands"},1,"-",{"temp=":"journalsInHands","re":true},"/ev","ev",{"VAR?":"journalsMade"},1,"+",{"temp=":"journalsMade","re":true},"/ev","ev",{"VAR?":"journalsMade"},5,">=",{"CNT?":"ending4"},"!","&&","/ev",[{"->":".^.b","c":true},{"b":["\n",{"->":"ending4"},{"->":".^.^.^.23"},null]}],[{"->":".^.b"},{"b":["\n",{"->":"stapler"},{"->":".^.^.^.23"},null]}],"nop","\n",{"#f":7}],"c-1":["^ ",{"->":"typography"},"\n",{"#f":7}]}],{"#f":3}],"printer_pages":[["ev",{"f()":"timeIsUp"},"/ev",[{"->":".^.b","c":true},{"b":["^ ",{"->":"ending5"},{"->":".^.^.^.4"},null]}],"nop","^","\n","<>","^Около принтера. Рядом на полу валяются напечатанные листы журнала.","\n","ev","str","^Поднять листы журнала","/str",{"VAR?":"journalsOnFloor"},0,">","/ev",{"*":".^.c-0","flg":5},"ev","str","^Отойти","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["^ ","\n","ev",{"VAR?":"journalsOnFloor"},1,"-",{"temp=":"journalsOnFloor","re":true},"/ev","ev",{"VAR?":"journalsInHands"},1,"+",{"temp=":"journalsInHands","re":true},"/ev","ev",{"VAR?":"journalsOnFloor"},0,"==","/ev",[{"->":".^.b","c":true},{"b":["\n",{"->":"printer"},{"->":".^.^.^.21"},null]}],[{"->":".^.b"},{"b":["\n",{"->":".^.^.^.^.^"},{"->":".^.^.^.21"},null]}],"nop","\n",{"#f":7}],"c-1":["^ ",{"->":"typography"},"\n",{"#f":7}]}],{"#f":3}],"printer":[["ev",{"f()":"timeIsUp"},"/ev",[{"->":".^.b","c":true},{"b":["^ ",{"->":"ending5"},{"->":".^.^.^.4"},null]}],"nop","^","\n","<>","^Около принтера.","\n","ev","str","^Отойти","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["^ ",{"->":"typography"},"\n",{"#f":7}]}],{"#f":3}],"ending1":[["^ГГ выходит за дверь, а снаружи это не здание, а коробкакубик, и пока ГГ стоит к этому спиной, оно растворяется в воздухе через прикольную анимацию как я умею. Цвет: 9 Название: ",{"#":"5 The Escape ЭТО ХОРОШАЯ КОНЦОВКА"},"\n","ev","str","^вставить новый лист","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["^ ",{"->":"intro"},"\n",{"#f":7}]}],{"#f":3}],"ending2":[["^ГГ выходит за дверь, идет немного слева направо, пока не встречается с другим персонажем. Он поднимает руку в приветственном жесте и улыбается. ГГ улыбается и машет ему в ответ. Цвет: 1 Название: ",{"#":"1 Reunion ЭТО ХОРОШАЯ КОНЦОВКА"},"\n","ev","str","^вставить новый лист","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["^ ",{"->":"intro"},"\n",{"#f":7}]}],{"#f":3}],"ending3":[["^ГГ открывает дверь типографии и видит, что вокруг нее пустота. Она падает из дверного проема вниз головой. Цвет: 8 Название: ",{"#":"2 The Fall ЭТО СТРАННАЯ КОНЦОВКА"},"\n","ev","str","^вставить новый лист","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["^ ",{"->":"intro"},"\n",{"#f":7}]}],{"#f":3}],"ending4":[["^ГГ просто выходит из типографии, запирает ее на ключ и уходит из кадра. Цвет: 6 Название: ",{"#":"10 Closure ЭТО НОРМ КОНЦОВКА"},"\n","ev","str","^вставить новый лист","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["^ ",{"->":"intro"},"\n",{"#f":7}]}],{"#f":3}],"ending5":[["^ГГ поправляет очки. Ну и все. Цвет: 0 Название: ",{"#":"0 Inaction ЭТО НОРМ КОНЦОВКА"},"\n","ev","str","^вставить новый лист","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["^ ",{"->":"intro"},"\n",{"#f":7}]}],{"#f":3}],"ending6":[["^ГГ стоит посреди типографии, достает пончик из кармана, откусывает от него кусочек. Далее вид из космоса - планета взрывается. Цвет: 2 Название: ",{"#":"9 The End ЭТО СТРАННАЯ КОНЦОВКА"},"\n","ev","str","^вставить новый лист","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["^ ",{"->":"intro"},"\n",{"#f":7}]}],{"#f":3}],"ending7":[["^ГГ выглядывает из двери и видит пять человек в коридоре. Они смотрят прямо на нее, у них цветы вместо голов, а посередине каждого цветка глаз. Они поочереди моргают, ГГ захлопывает дверь, прячась обратно в типографию. Цвет: 4 Название: ",{"#":"8 Memories ЭТО СТРАННАЯ КОНЦОВКА"},"\n","ev","str","^вставить новый лист","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["^ ",{"->":"intro"},"\n",{"#f":7}]}],{"#f":3}],"ending8":[["^ГГ садится на пол в типографии, прислонившись спиной к двери и обняв колени. В скором времени все покрывается черной жижей, идущей откуда-то из-за кадра. Цвет: 7 Название: ",{"#":"6 Numbness ЭТО ПЛОХАЯ КОНЦОВКА"},"\n","ev","str","^вставить новый лист","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["^ ",{"->":"intro"},"\n",{"#f":7}]}],{"#f":3}],"ending9":[["^ГГ подходит к ксероксу и кладет туда голову. Идет сканирование, ее голова взрывается. Вылезает листок со смайликом, тело ГГ берет его в руки и пытается нацепить на лицо, но так как лица нет, листок просто падает на землю. Цвет: 11 Название: ",{"#":"3 Sadness ЭТО ПЛОХАЯ КОНЦОВКА"},"\n","ev","str","^вставить новый лист","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["^ ",{"->":"intro"},"\n",{"#f":7}]}],{"#f":3}],"ending10":[["^В дверь типографии стучатся. ГГ открывает ее, а у двери коробка. ГГ открывает ее, а внутри горшок с растением. ГГ вытаскивает его из коробки и уходит из кадра, оставляя типографию открытой. Мы видим, что в дверном проеме темно, но потом открывается куча глаз, которые смотрят вслед ГГ. Цвет: 10 Название: ",{"#":"11 Anxiety ЭТО НОРМ КОНЦОВКА"},"\n","ev","str","^вставить новый лист","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["^ ",{"->":"intro"},"\n",{"#f":7}]}],{"#f":3}],"ending11":[["^ГГ открывает дверь, а за дверью огромный глаз. ГГ тыкает пальцем в глаз, и глаз закрывается. Из него льётся жижа, которая потом заполняет весь экран. Цвет: 5 Название: ",{"#":"12 Blindness ЭТО СТРАННАЯ КОНЦОВКА"},"\n","ev","str","^вставить новый лист","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["^ ",{"->":"intro"},"\n",{"#f":7}]}],{"#f":3}],"ending12":[["^ГГ просто стоит, а потом в ее груди вырастает огромная дыра. ГГ сначала трогает края, а потом засовывает туда руку и достает оттуда будильник. На будильнике без одной минуты 12, а секундная стрелка движется. Далее несколько крупных планов с лицом ГГ и секундной стрелкой. Когда минутная стрелка начинает движение к 12ти, экран резко становится черным. Цвет: 3 Название: ",{"#":"7 Emptiness ЭТО ПЛОХАЯ КОНЦОВКА"},"\n","ev","str","^вставить новый лист","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["^ ",{"->":"intro"},"\n",{"#f":7}]}],{"#f":3}],"ending13":[["^ГГ снимает очки, а потом начинает неистово потеть и плакать, пока совсем не растекается. Цвет: 12  Название: ",{"#":"4 Awareness ЭТО ПЛОХАЯ КОНЦОВКА"},"\n","ev","str","^вставить новый лист","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["^ ",{"->":"intro"},"\n",{"#f":7}]}],{"#f":3}],"global decl":["ev",0,{"VAR=":"journalsOnFloor"},0,{"VAR=":"journalsInHands"},0,{"VAR=":"journalsMade"},1,{"VAR=":"doClear"},1,{"VAR=":"justStarted"},"/ev","end",null],"#f":3}],"listDefs":{}};