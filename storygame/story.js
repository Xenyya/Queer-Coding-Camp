var storyContent = ﻿{"inkVersion":20,"root":[["^You have ten seconds before the apocalypse happens. But you see a few people who are dying even faster. Do you want to give them a few more seconds to live, by saving them?","\n","ev","str","^No.","/str","/ev",{"*":"0.c-0","flg":20},"ev","str","^Yes.","/str","/ev",{"*":"0.c-1","flg":20},{"c-0":["^ I guess you're a really, really bad person. ","end","\n",{"->":"0.g-0"},{"#f":5}],"c-1":["^ You have a heart full of love, don't you? ","\n",{"->":"YES"},{"->":"0.g-0"},{"#f":5}],"g-0":["done",{"#f":5}]}],"done",{"YES":[["^Sadly, you won't be able to safe all of them, so you'll have to make some choices:","\n","ev","str","^Save Donald Trump.","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Save your mother.","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["^ Who safes this dude over their own mother? But I'm not the one to judge, I guess you have your reasons. Nevertheless, I'm no so sure if I can trust you any more..","end","\n",{"#f":5}],"c-1":["^ Parents are special people. We don't always like them, but when it comes down to it we still love them. ",{"->":"A"},"\n",{"#f":5}]}],{"#f":1}],"A":[["^Is there still time left to safe more people? Who will you save next?","\n","ev","str","^Elon Musk.","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Your father.","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["^ Your choice is very questionable. I hope you have good reasons for it.. ","end","\n",{"#f":5}],"c-1":["^ Still on the \"parents are special people\" line? I like you. ","\n",{"->":"B"},{"#f":5}]}],{"#f":1}],"B":[["^Time is running. You have to chose:","\n","ev","str","^Person you don't know number 1","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Person you don't know number 2","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["^ Nothing to judge here I quess. ","\n",{"->":"C"},{"#f":5}],"c-1":["^ That was a 50/50, wasn't it?","\n",{"->":"C"},{"#f":5}]}],{"#f":1}],"C":[["^Let's save some more people, or did we already run out of time?","\n","^Anyways, I'm sorry for the next one:","\n","ev","str","^Your soulmate.","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Yourself.","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["^ This is love. ","end","\n",{"#f":5}],"c-1":["^ Oh... ","end","\n",{"#f":5}]}],{"#f":1}],"ItEnded":[["^The world ended.","\n","^It took you down with it.","\n","^Choices where made.","\n","^Where they the right ones?","\n","ev","str","^Play Again","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["^ ",{"#":"RELOAD"},"end","\n",{"#f":5}]}],{"#f":1}],"#f":1}],"listDefs":{}};