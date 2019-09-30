var select_player = document.getElementById("select_player");
var select_job = document.getElementById("select_job");
var comment = document.getElementById("comment");
var comment2 = document.getElementById("comment2");
var hand1 = document.getElementById("hand1");
var hand2 = document.getElementById("hand2");
var hand = document.getElementById("hand");
var summon = document.getElementById("summon");
var trash = document.getElementById("trash");
var put_douke = document.getElementById("put_douke");
var next = document.getElementById("next");


//デッキのカードをシャッフルする処理
function shuffle(array) {
    var n = array.length, t, i;

    while (n) {
        i = Math.floor(Math.random() * n--);
        t = array[n];
        array[n] = array[i];
        array[i] = t;
    }

    return array;
}

//デッキからカードを引く動作
function draw_card(x) {
    player_hand[x-1].unshift(deckcard[0]);
    deckcard.shift();
}
//１枚目を捨てる動作
function discard_first_card(x) {
    boticard.unshift(player_hand[x-1][0]);
    player_hand[x-1].shift();
}
//２枚目を捨てる動作
function discard_second_card(x) {
    boticard.unshift(player_hand[x-1][1]);
    player_hand[x-1].pop();
}
//手札を交換する動作
function change_card(x, y) {
    player_hand[x-1].push(player_hand[y-1][0]);
    player_hand[y-1].shift();
    player_hand[y-1].unshift(player_hand[x-1][0]);
    player_hand[x-1].shift();
}
//写真ボタンを只の写真にする処理（手札を捨てる処理を１ターン目の時に使う）
function change_image() {
    var x = player_id;
    switch (player_hand[x - 1][0][1]) {
        case '兵士':
            hand1.innerHTML = "<img src='img/heisi.jpg' title='兵士' width='140%'>";
            break;
        case '道化':
            hand1.innerHTML = "<img src='img/douke.jpg' title='道化' width='140%'>";
            break;
        case '騎士':
            hand1.innerHTML = "<img src='img/kisi.jpg' title='騎士' width='140%'>";
            break;
        case '僧侶':
            hand1.innerHTML = "<img src='img/souryo.jpg' title='僧侶' width='140%'>";
            break;
        case '魔術師':
            hand1.innerHTML = "<img src='img/mazyutusi.jpg' title='魔術師' width='140%'>";
            break;
        case '将軍':
            hand1.innerHTML = "<img src='img/syougun.jpg' title='将軍' width='140%'>";
            break;
        case '大臣':
            hand1.innerHTML = "<img src='img/daizin.jpg' title='大臣' width='140%'>";
            break;
        case '姫':
            hand1.innerHTML = "<img src='img/hime.jpg' title='姫' width='140%'>";
            break;
    }
    if (turn > playernumber) {
        switch (player_hand[x - 1][1][1]) {
            case '兵士':
                hand2.innerHTML = "<img src='img/heisi.jpg' title='兵士' width='140%'>";
                break;
            case '道化':
                hand2.innerHTML = "<img src='img/douke.jpg' title='道化' width='140%'>";
                break;
            case '騎士':
                hand2.innerHTML = "<img src='img/kisi.jpg' title='騎士' width='140%'>";
                break;
            case '僧侶':
                hand2.innerHTML = "<img src='img/souryo.jpg' title='僧侶' width='140%'>";
                break;
            case '魔術師':
                hand2.innerHTML = "<img src='img/mazyutusi.jpg' title='魔術師' width='140%'>";
                break;
            case '将軍':
                hand2.innerHTML = "<img src='img/syougun.jpg' title='将軍' width='140%'>";
                break;
            case '大臣':
                hand2.innerHTML = "<img src='img/daizin.jpg' title='大臣' width='140%'>";
                break;
            case '姫':
                hand2.innerHTML = "<img src='img/hime.jpg' title='姫' width='140%'>";
                break;
        }
    }
}

//プレイヤーの選んだ手札を捨てる処理(ここで写真ボタンを只の写真にする)
function discard_mycard(x, submit_card_number) {
    hand1.innerHTML = "";
    hand2.innerHTML = "";
    if (submit_card_number == 1) {
        discard_first_card(x);
    }
    else if (submit_card_number == 2) {
        discard_second_card(x);
    }
    output_hand(player_hand[player_id - 1][0][1]);
}
//カードを出現させる処理
function output_hand1(job) {
    switch (job) {
        case '兵士':
            hand1.innerHTML = "<input type='image' src='img/heisi.jpg' title='兵士' width='140%' onClick='discard_mycard(player_id, 1);heisi()'>";
            break;
        case '道化':
            hand1.innerHTML = "<input type='image' src='img/douke.jpg' title='道化' width='140%' onClick='discard_mycard(player_id, 1);douke()'>";
            break;
        case '騎士':
            hand1.innerHTML = "<input type='image' src='img/kisi.jpg' title='騎士' width='140%' onClick='discard_mycard(player_id, 1);kisi()'>";
            break;
        case '僧侶':
            hand1.innerHTML = "<input type='image' src='img/souryo.jpg' title='僧侶' width='140%' onClick='discard_mycard(player_id, 1);souryo()'>";
            break;
        case '魔術師':
            hand1.innerHTML = "<input type='image' src='img/mazyutusi.jpg' title='魔術師' width='140%' onClick='discard_mycard(player_id, 1);mazyutusi()'>";
            break;
        case '将軍':
            hand1.innerHTML = "<input type='image' src='img/syougun.jpg' title='将軍' width='140%' onClick='discard_mycard(player_id, 1);syougun()'>";
            break;
        case '大臣':
            hand1.innerHTML = "<input type='image' src='img/daizin.jpg' title='大臣' width='140%' onClick='discard_mycard(player_id, 1);daizin(1)'>";
            break;
        case '姫':
            hand1.innerHTML = "<input type='image' src='img/hime.jpg' title='姫' width='140%' onClick='discard_mycard(player_id, 1);hime(1)'>";
            break;
    }
}
function output_hand2(job) {
    switch (job) {
        case '兵士':
            hand2.innerHTML = "<input type='image' src='img/heisi.jpg' title='兵士' width='140%' onClick='discard_mycard(player_id, 2);heisi()'>";
            break;
        case '道化':
            hand2.innerHTML = "<input type='image' src='img/douke.jpg' title='道化' width='140%' onClick='discard_mycard(player_id, 2);douke()'>";
            break;
        case '騎士':
            hand2.innerHTML = "<input type='image' src='img/kisi.jpg' title='騎士' width='140%' onClick='discard_mycard(player_id, 2);kisi()'>";
            break;
        case '僧侶':
            hand2.innerHTML = "<input type='image' src='img/souryo.jpg' title='僧侶' width='140%' onClick='discard_mycard(player_id, 2);souryo()'>";
            break;
        case '魔術師':
            hand2.innerHTML = "<input type='image' src='img/mazyutusi.jpg' title='魔術師' width='140%' onClick='discard_mycard(player_id, 2);mazyutusi()'>";
            break;
        case '将軍':
            hand2.innerHTML = "<input type='image' src='img/syougun.jpg' title='将軍' width='140%' onClick='discard_mycard(player_id, 2);syougun()'>";
            break;
        case '大臣':
            hand2.innerHTML = "<input type='image' src='img/daizin.jpg' title='大臣' width='140%' onClick='discard_mycard(player_id, 2);daizin(1)'>";
            break;
        case '姫':
            hand2.innerHTML = "<input type='image' src='img/hime.jpg' title='姫' width='140%' onClick='discard_mycard(player_id, 2);hime(1)'>";
            break;
    }
}
function output_hand(job) {
    switch (job) {
        case '兵士':
            hand.innerHTML = "<img src='img/heisi.jpg' title='兵士' width='140%'>";
            break;
        case '道化':
            hand.innerHTML = "<img src='img/douke.jpg' title='道化' width='140%'>";
            break;
        case '騎士':
            hand.innerHTML = "<img src='img/kisi.jpg' title='騎士' width='140%'>";
            break;
        case '僧侶':
            hand.innerHTML = "<img src='img/souryo.jpg' title='僧侶' width='140%'>";
            break;
        case '魔術師':
            hand.innerHTML = "<img src='img/mazyutusi.jpg' title='魔術師' width='140%'>";
            break;
        case '将軍':
            hand.innerHTML = "<img src='img/syougun.jpg' title='将軍' width='140%'>";
            break;
        case '大臣':
            hand.innerHTML = "<img src='img/daizin.jpg' title='大臣' width='140%'>";
            break;
        case '姫':
            hand.innerHTML = "<img src='img/hime.jpg' title='姫' width='140%'>";
            break;
    }
}
function output_summon(job) {
    switch (job) {
        case '兵士':
            summon.innerHTML = "<img src='img/heisi.jpg' title='兵士' width='140%'>";
            break;
        case '道化':
            summon.innerHTML = "<img src='img/douke.jpg' title='道化' width='140%'>";
            break;
        case '騎士':
            summon.innerHTML = "<img src='img/kisi.jpg' title='騎士' width='140%'>";
            break;
        case '僧侶':
            summon.innerHTML = "<img src='img/souryo.jpg' title='僧侶' width='140%'>";
            break;
        case '魔術師':
            summon.innerHTML = "<img src='img/mazyutusi.jpg' title='魔術師' width='140%'>";
            break;
        case '将軍':
            summon.innerHTML = "<img src='img/syougun.jpg' title='将軍' width='140%'>";
            break;
        case '大臣':
            summon.innerHTML = "<img src='img/daizin.jpg' title='大臣' width='140%'>";
            break;
        case '姫':
            summon.innerHTML = "<img src='img/hime.jpg' title='姫' width='140%'>";
            break;
    }
}
function output_trash(job) {
    switch (job) {
        case '兵士':
            trash.innerHTML = "<img src='img/heisi.jpg' title='兵士' width='140%'>";
            break;
        case '道化':
            trash.innerHTML = "<img src='img/douke.jpg' title='道化' width='140%'>";
            break;
        case '騎士':
            trash.innerHTML = "<img src='img/kisi.jpg' title='騎士' width='140%'>";
            break;
        case '僧侶':
            trash.innerHTML = "<img src='img/souryo.jpg' title='僧侶' width='140%'>";
            break;
        case '魔術師':
            trash.innerHTML = "<img src='img/mazyutusi.jpg' title='魔術師' width='140%'>";
            break;
        case '将軍':
            trash.innerHTML = "<img src='img/syougun.jpg' title='将軍' width='140%'>";
            break;
        case '大臣':
            trash.innerHTML = "<img src='img/daizin.jpg' title='大臣' width='140%'>";
            break;
        case '姫':
            trash.innerHTML = "<img src='img/hime.jpg' title='姫' width='140%'>";
            break;
    }
}
function output_douke(job) {
    switch (job) {
        case '兵士':
            put_douke.innerHTML = "<img src='img/heisi.jpg' title='兵士' width='140%'>";
            break;
        case '道化':
            put_douke.innerHTML = "<img src='img/douke.jpg' title='道化' width='140%'>";
            break;
        case '騎士':
            put_douke.innerHTML = "<img src='img/kisi.jpg' title='騎士' width='140%'>";
            break;
        case '僧侶':
            put_douke.innerHTML = "<img src='img/souryo.jpg' title='僧侶' width='140%'>";
            break;
        case '魔術師':
            put_douke.innerHTML = "<img src='img/mazyutusi.jpg' title='魔術師' width='140%'>";
            break;
        case '将軍':
            put_douke.innerHTML = "<img src='img/syougun.jpg' title='将軍' width='140%'>";
            break;
        case '大臣':
            put_douke.innerHTML = "<img src='img/daizin.jpg' title='大臣' width='140%'>";
            break;
        case '姫':
            put_douke.innerHTML = "<img src='img/hime.jpg' title='姫' width='140%'>";
            break;
    }
}

//一ターンの処理をここでする
function turn_processing(x) {
    if (player_hand[x - 1].length == 0 && turn > 4) {
        stage = 0;
    }
    if (souryo_effect[x - 1] == 1) {
        souryo_effect[x - 1] = 0;
    }
    switch (stage) {
        case 0:
            comment.innerHTML = "<font size='7' color='#ffffff'>あなたは脱落しました。次の人に交代してください。</font>";
            next.innerHTML = "<input type='button' value='次のプレイヤーへ' onclick='next_player()' style='width:200px;height:100px;font-size:20px;'>";
            stage += 1;
            alert("player1:" + player_life[0] + "\n"
                + "player2:" + player_life[1] + "\n"
                + "player3:" + player_life[2] + "\n"
                + "player4:" + player_life[3] + "\n");
            player_only_one();
            deck_empty();
            break;
        case 1:
            next.innerHTML = "<input type='button' value='ドロー' onclick='turn_processing(player_id)' style='width:200px;height:100px;font-size:50px;'>";
            comment.innerHTML = "<font size='7' color='#ffffff'>プレイヤー" + x + "の番です。</font>";
            draw_card(x);
            target_job = 0;
            target_player = 0;
            using_job = 0;
            job_stage = 0;
            stage += 1;
            player_only_one();
            deck_empty();
            break;
        case 2:
            alert("player1:" + player_life[0] + "\n"
                + "player2:" + player_life[1] + "\n"
                + "player3:" + player_life[2] + "\n"
                + "player4:" + player_life[3] + "\n");
            next.innerHTML = "";
            if (turn <= playernumber) {
                output_hand(player_hand[x - 1][0][1]);
                comment.innerHTML = "<font size='7' color='#ffffff'>自分のカードを確認してください。</font>";
                stage += 1;
                next.innerHTML = "<input type='button' value='次のプレイヤーへ' onclick='next_player()' style='width:200px;height:100px;font-size:20px;'>";
            }
            else if (turn > playernumber) {
                comment.innerHTML = "<font size='7' color='#ffffff'>出すカードを選択してください。</font>";
                output_hand1(player_hand[x - 1][0][1]);
                output_hand2(player_hand[x - 1][1][1]);
                daizin(0);
                stage += 1;
            }
            break;
    }
}

//墓地の配列を数えてその回数分をalert文で表示する
function check_boti() {
    var bl = boticard.length;
    var heisi_num = 0;
    var douke_num = 0;
    var kisi_num = 0;
    var souryo_num = 0;
    var mazyutusi_num = 0;
    var syougun_num = 0;
    var daizin_num = 0;
    var hime_num = 0;
    for (var i = 0; i < bl; i++) {
        if (boticard[i][1] == '兵士') {
            heisi_num += 1;
        }
        else if (boticard[i][1] == '道化') {
            douke_num += 1;
        }
        else if (boticard[i][1] == '騎士') {
            kisi_num += 1;
        }
        else if (boticard[i][1] == '僧侶') {
            souryo_num += 1;
        }
        else if (boticard[i][1] == '魔術師') {
            mazyutusi_num += 1;
        }
        else if (boticard[i][1] == '将軍') {
            syougun_num += 1;
        }
        else if (boticard[i][1] == '大臣') {
            daizin_num += 1;
        }
        else if (boticard[i][1] == '姫') {
            hime_num += 1;
        }
    }
    alert("兵士:" + heisi_num + "\n"
        + "道化:" + douke_num + "\n"
        + "騎士:" + kisi_num + "\n"
        + "僧侶:" + souryo_num + "\n"
        + "魔術師:" + mazyutusi_num + "\n"
        + "将軍:" + syougun_num + "\n"
        + "大臣:" + daizin_num + "\n"
        + "姫:" + hime_num + "\n");
}

//次のプレイヤーに回す（turn_processingで回す）
function next_player() {
    if (player_id >= playernumber) {
        player_id = 0;
    }
    hand1.innerHTML = "";
    hand2.innerHTML = "";
    hand.innerHTML = "";
    summon.innerHTML = "";
    trash.innerHTML = "";
    put_douke.innerHTML = "";
    comment2.innerHTML = "";
    player_id += 1;
    turn += 1;
    //段階（stage）で１ターンの動きを処理する
    stage = 1;
    turn_processing(player_id);
    summon_turn = 0;
}

//ここからは各職業毎の処理を書いていく

//プレイヤー選択ボタンを配置
function select_player_button() {
    var pl_id = 0;
    switch (using_job) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 6:
            pl_id = player_id;
            break;
        case 5:
            pl_id = 5; //魔術師の時は自動的にpl_idの条件を突破する。これにより自分の番号のボタンが出現する様になった。
            break;
    }
    select_player.innerHTML = "";
    var target_num = 0;//これが0ならボタンは設置されない
    if (pl_id != 1 && souryo_effect[0] == 0 && player_life[0] == "生存") {
        select_player.innerHTML += "<input type='button' id='player1' value='プレイヤー1' onClick='return_player(1)' style='width:200px;height:100px;font-size:25px;'>" + "\n";
        target_num += 1;
    }
    if (pl_id != 2 && souryo_effect[1] == 0 && player_life[1] == "生存") {
        select_player.innerHTML += "<input type='button' id='player2' value='プレイヤー2' onClick='return_player(2)' style='width:200px;height:100px;font-size:25px;'>" + "\n";
        target_num += 1;
    }
    if (pl_id != 3 && souryo_effect[2] == 0 && player_life[2] == "生存") {
        select_player.innerHTML += "<input type='button' id='player3' value='プレイヤー3' onClick='return_player(3)' style='width:200px;height:100px;font-size:25px;'>" + "\n";
        target_num += 1;
    }
    if (pl_id != 4 && souryo_effect[3] == 0 && player_life[3] == "生存") {
        select_player.innerHTML += "<input type='button' id='player4' value='プレイヤー4' onClick='return_player(4)' style='width:200px;height:100px;font-size:25px;'>" + "\n";
        target_num += 1;
    }
    return target_num;
}



//職業選択ボタンを配置
function select_job_button() {
    select_player.innerHTML = '';
    select_job.innerHTML = "<input type='button' id='douke' value='道化' onClick='return_job(2)'style='width:100px;height:70px;font-size:40px;'>" + "\n"
        + "<input type='button' id='kisi' value='騎士' onClick='return_job(3)'style='width:100px;height:70px;font-size:40px;'>" + "\n"
        + "<input type='button' id='souryo' value='僧侶' onClick='return_job(4)'style='width:100px;height:70px;font-size:40px;'>" + "\n"
        + "<input type='button' id='mazyutusi' value='魔術師' onClick='return_job(5)'style='width:140px;height:70px;font-size:40px;'>" + "\n"
        + "<input type='button' id='syougun' value='将軍' onClick='return_job(6)'style='width:100px;height:70px;font-size:40px;'>" + "\n"
        + "<input type='button' id='daizin' value='大臣' onClick='return_job(7)'style='width:100px;height:70px;font-size:40px;'>" + "\n"
        + "<input type='button' id='hime' value='姫' onClick='return_job(8)'style='width:100px;height:70px;font-size:40px;'>";
}
//ボタンで選択したプレイヤーを返す関数
function return_player(x) {
    target_player = x;
    job_stage = 1;
    switch (using_job) {
        case 1:
            heisi();
            break;
        case 2:
            douke();
            break;
        case 3:
            kisi();
            break;
        case 4:
            souryo();
            break;
        case 5:
            mazyutusi();
            break;
        case 6:
            syougun();
            break;
        case 7:
            daizin();
            break;
        case 8:
            hime();
            break;
    }
}
//ボタンで選択した職業（強さ）を返す関数
function return_job(x) {
    target_job = x;
    job_stage = 2;
    select_job.innerHTML = "";
    switch (using_job) {
        case 1:
            heisi();
            break;
        case 2:
            douke();
            break;
        case 3:
            kisi();
            break;
        case 4:
            souryo();
            break;
        case 5:
            mazyutusi();
            break;
        case 6:
            syougun();
            break;
        case 7:
            daizin();
            break;
        case 8:
            hime();
            break;
    }
}

//兵士
function heisi() {
    using_job = 1;
    output_summon("兵士");
    comment.innerHTML = "<font size='7' color='#ffffff'>選択したプレイヤーの職業の予想が的中していたら相手を脱落させることが出来ます。</font>";
    if (select_player_button() != 0) {
        switch (job_stage) {
            case 1:
                select_job_button();
                break;
            case 2:
                select_player.innerHTML = "";
                next.innerHTML = "<input type='button' value='次のプレイヤーへ' onclick='next_player()' style='width:200px;height:100px;font-size:20px;'>";
                if (target_job == player_hand[target_player - 1][0][2]) {
                    comment.innerHTML = "<font size='7' color='#ffffff'>選択したプレイヤーの職業が当たりました。</font>";
                    comment2.innerHTML = "<font size='7' color='#ffffff'>プレイヤー" + target_player + "は脱落です。</font>";
                    output_trash(player_hand[target_player - 1][0][1]);
                    discard_first_card(target_player);
                    player_life[target_player - 1] = "脱落"; 
                }
                else {
                    comment.innerHTML = "<font size='7' color='#ffffff'>選択したプレイヤーの職業が違っていました。</font>";
                }
                break;
        }
    }
    else {
        comment.innerHTML = "<font size='7' color='#ffffff'>このターンに出来る事はありません。次のプレイヤーに交代します。</font>";
        next_player();
    }
}
//道化
function douke() {
    using_job = 2;
    output_summon("道化");
    comment.innerHTML = "<font size='7' color='#ffffff'>手札を見るプレイヤーを選択してください。</font>";
    if (select_player_button() != 0) {
        switch (job_stage) {
            case 1:
                if (target_player != 0) {
                    var enemy_job = player_hand[target_player - 1][0][1];
                    comment.innerHTML = "<font size='7' color='#ffffff'>選択したプレイヤーの職業は" + enemy_job + "です。</font>";
                    output_douke(enemy_job);
                    next.innerHTML = "<input type='button' value='次のプレイヤーへ' onclick='next_player()' style='width:200px;height:100px;font-size:20px;'>";
                }
                select_player.innerHTML = "";
                break;
        }
    }
    else {
        comment.innerHTML = "<font size='7' color='#ffffff'>このターンに出来る事はありません。次のプレイヤーに交代してください。</font>";
        next_player();
    }
}
//騎士
//プレイヤーを指定し、相手の強さと自分の強さを変数に入れて比較し、勝ち（2）、負け（0）、引き分け（1）をそれぞれ数値として返す
function kisi() {
    using_job = 3;
    output_summon("騎士");
    comment.innerHTML = "<font size='7' color='#ffffff'>強さを比較するプレイヤーを選択してください。</font>";
    if (select_player_button() != 0) {
        switch (job_stage) {
            case 1:
                next.innerHTML = "<input type='button' value='次のプレイヤーへ' onclick='next_player()' style='width:200px;height:100px;font-size:20px;'>";
                var enemy_strength = player_hand[target_player - 1][0][2];
                var my_strength = player_hand[player_id - 1][0][2];
                if (my_strength > enemy_strength) {//自分が勝ち
                    discard_first_card(target_player);
                    player_life[target_player - 1] = "脱落";
                    output_trash(boticard[0][1]);
                    comment.innerHTML = "<font size='7' color='#ffffff'>あなたのカードが勝ちました。</font>";
                    comment2.innerHTML = "<font size='7' color='#ffffff'>プレイヤー" + target_player + "は脱落です。</font>";
                }
                else if (my_strength == enemy_strength) {//引き分け
                    comment.innerHTML = "<font size='7' color='#ffffff'>結果は引き分けでした。</font>";
                }
                else if (my_strength < enemy_strength) {
                    z = 0; //自分が負け
                    discard_first_card(player_id);
                    player_life[player_id - 1] = "脱落";
                    output_trash(boticard[0][1]);
                    hand.innerHTML = "";
                    comment.innerHTML = "<font size='7' color='#ffffff'>プレイヤー" + target_player + "が勝ちました。</font>";
                    comment2.innerHTML = "<font size='7' color='#ffffff'>あなたは脱落です。</font>";
                }
                select_player.innerHTML = "";
                break;
        }
    }
    else {
        comment.innerHTML = "<font size='7' color='#ffffff'>このターンに出来る事はありません。次のプレイヤーに交代してください。</font>";
        next_player();
    }
}
//僧侶
//自分の手札を捨てた後、souryo_effectを1にすることで指定対象にならないようにする
function souryo() {
    comment.innerHTML = "<font size='7' color='#ffffff'>あなたは1ターンの間、他プレイヤーからの干渉を受け付けなくなりました。</font>";
    using_job = 4;
    output_summon("僧侶");
    souryo_effect[player_id - 1] = 1;
    next.innerHTML = "<input type='button' value='次のプレイヤーへ' onclick='next_player()' style='width:200px;height:100px;font-size:20px;'>";
}

//魔術師
//自分の手札を捨てて、yで指定したプレイヤーのカードを捨てた後にデッキからカードを一枚引く
function mazyutusi() {
    using_job = 5;
    output_summon("魔術師");
    comment.innerHTML = "<font size='7' color='#ffffff'>手札を交換させたいプレイヤーを選択してください。</font>";
    if (select_player_button() != 0) {
        switch (job_stage) {
            case 1:
                next.innerHTML = "<input type='button' value='次のプレイヤーへ' onclick='next_player()' style='width:200px;height:100px;font-size:20px;'>";
                if (target_player != 0) {
                    discard_first_card(target_player);//対象のプレイヤーのカードを捨てる
                    hime(0);
                    if (job_stage == 1) {
                        player_hand[target_player - 1].unshift(deckcard[0]);//デッキからカードを一枚引く
                        deckcard.shift();
                        comment.innerHTML = "<font size='7' color='#ffffff'>選択したプレイヤーのカードを交換しました。</font>";
                        output_trash(boticard[0][1]);
                        if (target_player == player_id) {
                            output_hand(player_hand[target_player - 1][0][1]);
                        }
                    }
                }
                select_player.innerHTML = "";

                break;
        }
    }
    else {
        comment.innerHTML = "<font size='7' color='#ffffff'>このターンに出来る事はありません。次のプレイヤーに交代してください。</font>";
        next_player();
    }
}
//将軍
//自分の手札を捨てた後に、指定したプレイヤーのカードと自分のカードを交換する
function syougun() {
    using_job = 6;
    output_summon("将軍");
    comment.innerHTML = "<font size='7' color='#ffffff'>手札を交換したいプレイヤーを選択してください。</font>";
    if (select_player_button() != 0) {
        switch (job_stage) {
            case 1:
                next.innerHTML = "<input type='button' value='次のプレイヤーへ' onclick='next_player()' style='width:200px;height:100px;font-size:20px;'>";
                var enemy_job = player_hand[target_player - 1][0][1];
                comment.innerHTML = "<font size='7' color='#ffffff'>選択したプレイヤーとカードを交換しました。</font>";
                output_hand(enemy_job);
                select_player.innerHTML = "";
                change_card(player_id, target_player);
                break;
        }
    }
    else {
        comment.innerHTML = "<font size='7' color='#ffffff'>このターンに出来る事はありません。次のプレイヤーに交代してください。</font>";
        next_player();
    }
}
//大臣
//ターン開始時に発動し自分の番号を引数にして手札をチェックして12以上なら脱落させる
function daizin(x) {
    summon_turn = x;
    if (boticard[0][1] == "大臣" && summon_turn == 1) {
        output_summon("大臣");
        next.innerHTML = "<input type='button' value='次のプレイヤーへ' onclick='next_player()' style='width:200px;height:100px;font-size:20px;'>";
        comment.innerHTML = "<font size='7' color='#ffffff'>大臣のカードを召喚しました。</font>";
        comment2.innerHTML = "<font size='7' color='#ffffff'>特に効果は無いので次のプレイヤーに交代してください。</font>";
    }
    else if (player_hand[player_id - 1][0][1] == "大臣" || player_hand[player_id - 1][1][1] == "大臣") {
        if (turn >= 5) {
            var addition = player_hand[player_id - 1][0][2] + player_hand[player_id - 1][1][2];
            if (addition >= 12) {
                hand1.innerHTML = "";
                hand2.innerHTML = "";
                comment.innerHTML = "<font size='7' color='#ffffff'>手札のカードの強さが12以上です。</font>";
                comment2.innerHTML = "<font size='7' color='#ffffff'>大臣の効果によりあなたは脱落しました。</font>";
                discard_first_card(player_id);
                discard_first_card(player_id);
                player_life[player_id - 1] = "脱落";
                output_trash("大臣");
            }
            else if (addition < 12) {
                comment.innerHTML = "<font size='7' color='#ffffff'>手札のカードの強さが12以下です。</font>";
                comment2.innerHTML = "<font size='7' color='#ffffff'>大臣の効果は発動しませんでした。</font>";
            }
            next.innerHTML = "<input type='button' value='次のプレイヤーへ' onclick='next_player()' style='width:200px;height:100px;font-size:20px;'>";
        }
    }
}
//姫
//他の職業の中に組み込み、指定したプレイヤーの手札が姫なら姫ジャッジを1にして画像等の処理を行う
function hime(x) {
    output_trash("姫")
    if (boticard[0][1] == "姫") {
        if (x == 1) {
            discard_first_card(player_id);
            comment.innerHTML = "<font size='7' color='#ffffff'>姫のカードが捨てられました。</font>";
            comment2.innerHTML = "<font size='7' color='#ffffff'> あなたは脱落です。</font>";
            player_life[player_id - 1] = "脱落";
            next.innerHTML = "<input type='button' value='次のプレイヤーへ' onclick='next_player()' style='width:200px;height:100px;font-size:20px;'>";
        }
        else if (x == 0) {
            comment.innerHTML = "<font size='7' color='#ffffff'>姫のカードが捨てられました。</font>";
            comment2.innerHTML = "<font size='7' color='#ffffff'> プレイヤー" + target_player + "の脱落です。</font>";
            player_life[target_player - 1] = "脱落";
            if (target_player == player_id) {
                hand.innerHTML = "";
            }
            next.innerHTML = "<input type='button' value='次のプレイヤーへ' onclick='next_player()' style='width:200px;height:100px;font-size:20px;'>";
        }
        job_stage += 1;
    }
}

//プレイヤーが一人になった時の処理
function player_only_one() {
    var only_one = 0;
    var only_one_player = 0;
    for (var i = 0; i <= playernumber; i++) {
        if (player_life[i] == "生存") {
            only_one += 1;
            only_one_player = i + 1;
        }
    }
    if (only_one == 1) {
        comment2.innerHTML = "<font size='7' color='#ffffff'> 優勝したのはプレイヤー" + only_one_player + "です。</font>";
        comment.innerHTML = "<font size='7' color='#ffffff'> プレイヤーの人数が1人になったのでゲームを終了します。</font>";
        //ここでnextボタンを最初からにするボタンに変える
        next.innerHTML = "<input type='button' value='最初から' onclick='change_page()' style='width:200px;height:100px;font-size:20px;'>";
    }
}

//ページ遷移用の関数
function change_page() {
    location.href = "game_start.html";
}
//デッキが空になったときの処理をする
function deck_empty() {
    if (deckcard.length == 0) {
        deck_empty_stage += 1;
        switch (deck_empty_stage) {
            case 1:
                comment.innerHTML = "<font size='7' color='#ffffff'>山札が空になりました。</font>";
                comment2.innerHTML = "<font size='7' color='#ffffff'>生存中の人で最大の数字の職業を持っている人の勝ちです。</font>";
                next.innerHTML = "<input type='button' value='次へ' onclick='deck_empty()' style='width:200px;height:100px;font-size:20px;'>";
                for (var i = 0; i < 4; i++) {
                    if (player_life[i] == "生存" && player_hand[i][0][2] > winner_strongth) {
                        var k = i + 1
                        winner = "プレイヤー" + k;
                        winner_strongth = player_hand[i][0][2];
                    }
                    else if (player_life[i] == "生存" && player_hand[i][0][2] == winner_strongth) {
                        var k = i + 1;
                        winner = winner + k;
                    }
                }
                break;
            case 2:
                comment.innerHTML = "<font size='7' color='#ffffff'>今回勝利したのは</font>";
                comment2.innerHTML = "<font size='7' color='#ffffff'>" + winner + "です。</font>";
                //ここでnextボタンを最初からにするボタンに変える
                next.innerHTML = "<input type='button' value='最初から' onclick='change_page()' style='width:200px;height:100px;font-size:20px;'>";
        }
        
    }
}


//スタート画面の操作をここから書いていく
//ボタンで上下する操作
var pl_ga = document.getElementById("pl_ga");
var ex_jo = document.getElementById("ex_jo");
var ex_ga = document.getElementById("ex_ga");

function button_up() {
    if (enter_num != 1) {
        enter_num -= 1;
    }
    if (enter_num == 1) {
        pl_ga.innerHTML = "<img src='img/bar.png' title='bar' width='50%'>";
        ex_jo.innerHTML = "";
        ex_ga.innerHTML = "";
    }
    else if (enter_num == 2) {
        ex_jo.innerHTML = "<img src='img/bar.png' title='bar' width='50%'>";
        pl_ga.innerHTML = "";
        ex_ga.innerHTML = "";
    }
}
function button_down() {
    if (enter_num != 3) {
        enter_num += 1;
    }
    if (enter_num == 2) {
        ex_jo.innerHTML = "<img src='img/bar.png' title='bar' width='50%'>";
        pl_ga.innerHTML = "";
        ex_ga.innerHTML = "";
    }
    else if (enter_num == 3) {
        ex_ga.innerHTML = "<img src='img/bar.png' title='bar' width='50%'>";
        pl_ga.innerHTML = "";
        ex_jo.innerHTML = "";
    }
}
//決定ボタンの操作
function button_enter() {
    if (enter_num == 1) {
        location.href = "game.html";
    }
    else if (enter_num == 2) {
        alert("兵士 : 兵士以外の職業を指定し、当たったら相手を脱落させる\n"
            + "道化 : 相手の手札を見ることができる\n"
            + "騎士 : 手札の強さを比較して、負けたほうが脱落する\n"
            + "僧侶 : 一ターンの間、相手からの干渉を受けない\n"
            + "魔術師 : プレイヤーの手札をデッキと入れ替える\n"
            + "将軍 : プレイヤー同士の手札を入れ替える\n"
            + "大臣 : 手札の強さの合計が12以上なら所持プレイヤーは脱落する\n"
            + "姫 : 場に出したら即座に脱落する\n");
    }
    else if (enter_num == 3) {
        alert("毎ターン２枚の手札の中から１枚を選んで場に出します\n"
            + "出したカードによって効果が違うので、それぞれの効果を活かしてゲームを進めます\n"
            + "最後の一人になるか、デッキが無くなった時点で一番強いカードを持っていたプレイヤーの勝ちです");
    }
}