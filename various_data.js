//デッキのデータ
var deckcard = [
    
    [8, '騎士', 3],
    [9, '騎士', 3],
    [10, '僧侶', 4],
    [11, '僧侶', 4],
    [12, '魔術師', 5],
    [13, '魔術師', 5],
    [14, '将軍', 6],
    [15, '大臣', 7],
    [16, '姫', 8],
];

//プレイヤーの人数
var playernumber = 4;
//プレイヤーのid
player_id = 1;
//ターンを導入
var turn = 1;
//処理の進み具合を表す
var stage = 1;
//ターゲットプレイヤー（ボタンで返された値を格納）
var target_player = 0;
//ターゲットジョブ（ボタンで返された値、今回は職業の強さを格納）
var target_job = 0;
//現在使用しているカードの職業（強さの値を格納）
var using_job = 0;
//職業の効果の進み具合
var job_stage = 0;
//大臣と姫では墓地を参照するので召喚したターンを記録する必要あり
var summon_turn = 0;
//デッキがからになったときの処理の段階を示す
var deck_empty_stage = 0;
//勝者の番号を記憶する
var winner　= 0;
//勝者の持つカードの強さを示す
var winner_strongth = 0;
//配列でプレイヤーの手札を表現
var player_hand = [];
//配列で墓地のカードを表現
var boticard = [];
//配列でプレイヤーのライフを表現
var player_life = [];
//配列でプレイヤーの僧侶効果を表現（初期状態としては 0 となるが、僧侶を使った後は 1 となる）
var souryo_effect = [];

//ここで具体的に手札、ライフ、僧侶効果を配列にする（手札以外は配列の最後が無駄になる）
for (var i = 1; i <= playernumber; i++) {
    player_hand.unshift([]);
    player_life.unshift("生存");
    souryo_effect.unshift(0);
}
//タイトル画面での選択時の番号
var enter_num = 1;