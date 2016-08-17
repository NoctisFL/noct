//=============================================================================
// MOG_BattleCry.js
//=============================================================================

/*:
 * @plugindesc (v1.4k) 전투에 쓰이는 음성을 추가시켜줍니다.
 * @author Moghunter, NoctisFL
 *
 * @param 크기
 * @desc 음성의 크기를 조정합니다.(초기값 90, 0~100)
 * @default 90
 * @param 음정
 * @desc 음성의 높낮이를 조정합니다.(초기값 100, 50~150)
 * @default 100
 * @param 팬
 * @desc 음성이 들릴 방향을 조정합니다.(초기값 0, -100~100)
 * @default 0
 * 
 * @help  
 * =============================================================================
 * +++ MOG - Battle Cry (v1.4k) +++
 * By Moghunter
 * Modify and Localize to NoctisFL
 * 제작자 블로그: https://atelierrgss.wordpress.com/
 * 번역 및 개조자 블로그: http://noctisfl96.tistory.com/
 * =============================================================================
 * 전투에 쓰이는 음성을 추가시켜줍니다.
 * 직접 플러그인을 편집하는 데 필요한 것들을 설정해야만 하오니,
 * 플러그인 내 스크립트의 편집은 79줄부터 해주시기 바랍니다.
 * =============================================================================
 * 패치노트
 * =============================================================================
 * (v1.4k) 음정과 팬 패러미터가 추가되었고, 주석이 한글화되었습니다.
 * (v1.4) - 메뉴에서의 음향 연주를 보정합니다.
 *        - 변환 효과 중에 적의 ID가 갱신되지 않는 것이 수정되었습니다.
 * (v1.3) MOG Battle Result 플러그인과 호환됩니다.
 * (v1.2) MOG Battle Transition 플러그인과 호환됩니다.
 * (v1.1) 동작시 캐릭터가 이동하지 않는 버그가 수정되었습니다.
 */
//===========================================================================
// ** 플러그인 패러미터
//===========================================================================

    // 이 부분은 절대 수정시키지 마십시오.
    // 멋대로 수정했다간 너의 게임이 펑! 하고 터질겁니다.---------------------
　　var Imported = Imported || {};
　　Imported.NoctisFL_BattleVoice = true;
　　var Moghunter = Moghunter || {}; 	
	Moghunter.parameters = PluginManager.parameters('NoctisFL_BattleVoice');
	Moghunter.v_volume = Number(Moghunter.parameters['Volume'] || 100);
    //아군 전용 패러미터
	Moghunter.v_actor_start = [];
	Moghunter.v_actor_turn = [];
	Moghunter.v_actor_default_action = [];
	Moghunter.v_actor_skill = [];
	Moghunter.v_actor_item = [];
	Moghunter.v_actor_damage = [];
	Moghunter.v_actor_evaded = [];
	Moghunter.v_actor_dead = [];
    Moghunter.v_actor_recover = [];
	Moghunter.v_actor_counter = [];
	Moghunter.v_actor_reflection = [];
	Moghunter.v_actor_victory = [];
	Moghunter.v_actor_levelup = [];
	Moghunter.v_actor_escape = [];
	//적군 전용 패러미터
	Moghunter.v_enemy_default_action = [];
	Moghunter.v_enemy_damage = [];
	Moghunter.v_enemy_evaded = [];
	Moghunter.v_enemy_counter = [];
	Moghunter.v_enemy_reflection = [];	
	Moghunter.v_enemy_dead = [];
    Moghunter.v_enemy_recover = [];
	Moghunter.v_enemy_skill = [];
    // 충분히 주의 줬습니다.-------------------------------------------------
	
	
	
	
	// 설정 ------------------------------------------------------------------
	// 일반적인 구성의 예시로, 구성 모드는 모든 작업에 대해서 동일합니다.
	// Moghunter.v_atcor_start[x] = [y,y,y,y...];
	//
	// x - 액터 번호
	// y - 파일 이름. 파일 경로는 기본적으로 '게임폴더/audio/se'안의 소리 파일입니다.
	// 파일 이름은 이렇게 적어놓으십시오. => "소리 파일"
	// -----------------------------------------------------------------------
	
	// -----------------------------------------------------------------------
	// 액터 - 전투 시작
	// -----------------------------------------------------------------------
	Moghunter.v_actor_start[1] = [];
	Moghunter.v_actor_start[2] = [];
	// -----------------------------------------------------------------------
	// 액터 - 전투 턴 개시
	// -----------------------------------------------------------------------
	Moghunter.v_actor_turn[1] = [];
	Moghunter.v_actor_turn[2] = [];
	// -----------------------------------------------------------------------
	// 액터 - 기본 액션(따로 번호가 설정되지 않은 스킬/및 아이템)
	// -----------------------------------------------------------------------
	Moghunter.v_actor_default_action[1] = [];
	Moghunter.v_actor_default_action[2] = [];
	// -----------------------------------------------------------------------
	// 액터 - 스킬
	// -----------------------------------------------------------------------	
	// Moghunter.v_actor_skill[x] = {y:[z,z,z,z,...] };
	// 
	// x - 액터 번호
	// y - 스킬 번호
	// z - 파일 이름. 파일 경로는 기본적으로 '게임폴더/audio/se'안의 소리 파일입니다.
	// -----------------------------------------------------------------------
	Moghunter.v_actor_skill[1] = {
		 1:[], //평타
	     2:[] //방어
	};
	Moghunter.v_actor_skill[2] = {
		 1:[],
	     2:[]
	};
	Moghunter.v_actor_skill[3] = {
		 1:[],
	     2:[]
	};
	Moghunter.v_actor_skill[4] = {
		 1:[],
	     2:[]
	};
	// -----------------------------------------------------------------------
	// 액터 - 아이템 사용
	// 참고로 여기서의 y값은 스킬 번호가 아니라
	// 아이템 번호를 받습니다.
	// -----------------------------------------------------------------------
	Moghunter.v_actor_skill[1] = {
		 1:[], //포션
	     3:[] //풀 포션
	};
	Moghunter.v_actor_skill[2] = {1:[]};
	// -----------------------------------------------------------------------
	// 액터 - 피해 받음
	// -----------------------------------------------------------------------
	Moghunter.v_actor_damage[1] = [];
	Moghunter.v_actor_damage[2] = [];
	// -----------------------------------------------------------------------
	// 액터 - 회피 & 피격무시
	// -----------------------------------------------------------------------
	Moghunter.v_actor_evaded[1] = [];
	Moghunter.v_actor_evaded[2] = [];
	// -----------------------------------------------------------------------
	// 액터 - 반격
	// -----------------------------------------------------------------------
	Moghunter.v_actor_evaded[1] = [];
	Moghunter.v_actor_evaded[2] = [];
	// -----------------------------------------------------------------------
	// 액터 - 마법반사
	// -----------------------------------------------------------------------
	Moghunter.v_actor_reflection[1] = [];
	Moghunter.v_actor_reflection[2] = [];
	// -----------------------------------------------------------------------
	// 액터 - 회복
	// -----------------------------------------------------------------------
	Moghunter.v_actor_recover[1] = [];
	Moghunter.v_actor_recover[2] = [];
    // -----------------------------------------------------------------------
	// 액터 - 전투불능
	// -----------------------------------------------------------------------
	Moghunter.v_actor_dead[1] = [];
	Moghunter.v_actor_dead[2] = [];
	// -----------------------------------------------------------------------
	// 액터 - 도주
	// -----------------------------------------------------------------------
	Moghunter.v_actor_escape[1] = [];
	Moghunter.v_actor_escape[2] = [];
	// -----------------------------------------------------------------------
	// 액터 - 승리
	// -----------------------------------------------------------------------
	Moghunter.v_actor_victory[1] = [];
	Moghunter.v_actor_victory[2] = [];
	// -----------------------------------------------------------------------
	// 액터 - 레벨 업
	// -----------------------------------------------------------------------		
	Moghunter.v_actor_levelup[1] = [];
	Moghunter.v_actor_levelup[2] = [];
	
	// -----------------------------------------------------------------------
	// 적 - 기본 액션(따로 번호가 설정되지 않은 액션)
	// 여기서 x값은 액터의 번호가 아닌 적의 번호를 받게 됩니다.
	// -----------------------------------------------------------------------		
	Moghunter.v_enemy_default_action[1] = [];
	Moghunter.v_enemy_default_action[2] = [];
	// -----------------------------------------------------------------------
	
	// -----------------------------------------------------------------------
	// 적 - 스킬
	// -----------------------------------------------------------------------	
    Moghunter.v_enemy_skill[1] = {
		 1:[],
	     2:[]
	};
	Moghunter.v_enemy_skill[2] = {1:[]};	
	// -----------------------------------------------------------------------
	// 적 - 피해
	// -----------------------------------------------------------------------		
	Moghunter.v_enemy_damage[1] = [];
	Moghunter.v_enemy_damage[2] = [];
	// -----------------------------------------------------------------------
	// 적 - 피격무시
	// -----------------------------------------------------------------------		
	Moghunter.v_enemy_evaded[1] = [];	
	Moghunter.v_enemy_evaded[2] = [];
	// -----------------------------------------------------------------------
	// 적 - 반격
	// -----------------------------------------------------------------------		
	Moghunter.v_enemy_counter[1] = [];
	Moghunter.v_enemy_counter[2] = [];
	// -----------------------------------------------------------------------
	// 적 - 마법반사
	// -----------------------------------------------------------------------		
	Moghunter.v_enemy_reflection[1] = [];
	Moghunter.v_enemy_reflection[2] = [];
	// -----------------------------------------------------------------------
	// 적 - 회복
	// -----------------------------------------------------------------------		
	Moghunter.v_enemy_recover[1] = [];
	Moghunter.v_enemy_recover[2] = [];
	// -----------------------------------------------------------------------
	// 적 - 처치
	// -----------------------------------------------------------------------		
	Moghunter.v_enemy_dead[1] = [];
	Moghunter.v_enemy_dead[2] = [];

//=============================================================================
// ** 음향 관리자(Sound Manager)
//=============================================================================	

//==============================
// * 음성 선택
//==============================
SoundManager.selectVoice = function(voices){ 
   if (!voices) {return};
   if (voices.length === 0) {return};
   var voiceIndex = Math.randomInt(voices.length);
   var fileName = voices[voiceIndex];
   this.playVoice(fileName);
};

//==============================
// * 음성 재생
//==============================
SoundManager.playVoice = function(fileName){
   var se = {};
   se.name = fileName;
   se.volume = Moghunter.v_volume;
   se.pitch = Moghunter.v_pitch;
   se.pan = Moghunter.v_pan;
   AudioManager.playSe(se);
};   
  
//=============================================================================
// ** 전투 관리자(Battle Manager)
//=============================================================================	

//================================
// ** 무작위 액터
//================================
BattleManager.randomActor = function() {
    var actorIndex = Math.randomInt($gameParty.aliveMembers().length);
    return $gameParty.aliveMembers()[actorIndex];
};

//==================================
// ** 전투 개시
//==================================
var _alias_mog_bmngr_startBattle = BattleManager.startBattle;
BattleManager.startBattle = function() {
     _alias_mog_bmngr_startBattle.call(this);
	 if (!Imported.MOG_BattleTransitions || 
	      (Imported.MOG_BattleTransitions && $gameSystem._treType[1] === -1)) {
	     var actor = this.randomActor();
        if (actor) {SoundManager.selectVoice(actor._v_start)};
     };
};

//==================================
// ** 승리 과정의 처리
//==================================
var _alias_mog_bcry_processVictory = BattleManager.processVictory;
BattleManager.processVictory = function() {
	 var actor = this.randomActor();
     if (actor) {SoundManager.selectVoice(actor._v_victory)};	
     _alias_mog_bcry_processVictory.call(this);	 
};

//==================================
// ** 도주 과정의 처리
//==================================
var _alias_mog_bcry_processEscape = BattleManager.processEscape;
BattleManager.processEscape = function() {
	 var actor = this.randomActor();
     if (actor) {SoundManager.selectVoice(actor._v_escape)};		
	 _alias_mog_bcry_processEscape.call(this);	 
};

//=============================================================================
// ** 배틀러 항목(Game Battler)
//=============================================================================

//==============================
// * 멤버 단위
//==============================
var _alias_mog_batcry_gbattler_initMembers = Game_Battler.prototype.initMembers;
Game_Battler.prototype.initMembers = function() {
    _alias_mog_batcry_gbattler_initMembers.call(this);
    this.battleCrySetup();
};

//==============================
// * 전투 음성 설정
//==============================
Game_Battler.prototype.battleCrySetup = function() {
	this._v_start = [];
	this._v_turn = [];
	this._v_default_action = [];
	this._v_damage = [];
	this._v_evaded = [];
	this._v_counter = [];
	this._v_reflection = [];
	this._v_dead = [];
	this._v_recover = [];
	this._v_escape = [];
	this._v_victory = [];
	this._v_levelup = [];
};

//==============================
// * 아군에 의한 전투 음성 설정
//==============================
Game_Battler.prototype.battleCrySetupActor = function() {
	if (Moghunter.v_actor_start[this._actorId]) {this._v_start = Moghunter.v_actor_start[this._actorId]}; 
	if (Moghunter.v_actor_turn[this._actorId]) {this._v_turn = Moghunter.v_actor_turn[this._actorId]};
	if (Moghunter.v_actor_default_action[this._actorId]) {
		this._v_default_action = Moghunter.v_actor_default_action[this._actorId]};
	if (Moghunter.v_actor_damage[this._actorId]) {this._v_damage = Moghunter.v_actor_damage[this._actorId]};
	if (Moghunter.v_actor_evaded[this._actorId]) {this._v_evaded = Moghunter.v_actor_evaded[this._actorId]};
	if (Moghunter.v_actor_counter[this._actorId]) {this._v_counter = Moghunter.v_actor_counter[this._actorId]};
	if (Moghunter.v_actor_reflection[this._actorId]) {this._v_reflection = Moghunter.v_actor_reflection[this._actorId]};
	if (Moghunter.v_actor_dead[this._actorId]) {this._v_dead = Moghunter.v_actor_dead[this._actorId]};
	if (Moghunter.v_actor_recover[this._actorId]) {this._v_recover = Moghunter.v_actor_recover[this._actorId]};
	if (Moghunter.v_actor_escape[this._actorId]) {this._v_escape = Moghunter.v_actor_escape[this._actorId]};
	if (Moghunter.v_actor_victory[this._actorId]) {this._v_victory = Moghunter.v_actor_victory[this._actorId]};
	if (Moghunter.v_actor_levelup[this._actorId]) {this._v_levelup = Moghunter.v_actor_levelup[this._actorId]};
};

//==============================
// * 적에 의한 전투 음성 설정
//==============================
Game_Battler.prototype.battleCrySetupEnemy = function() {
	if (Moghunter.v_enemy_default_action[this._enemyId]) {
		this._v_default_action = Moghunter.v_enemy_default_action[this._enemyId]};
	if (Moghunter.v_enemy_damage[this._enemyId]) {this._v_damage = Moghunter.v_enemy_damage[this._enemyId]};
	if (Moghunter.v_enemy_evaded[this._enemyId]) {this._v_evaded = Moghunter.v_enemy_evaded[this._enemyId]};
	if (Moghunter.v_enemy_counter[this._enemyId]) {this._v_counter = Moghunter.v_enemy_counter[this._enemyId]};
	if (Moghunter.v_enemy_reflection[this._enemyId]) {this._v_reflection = Moghunter.v_enemy_reflection[this._enemyId]};
	if (Moghunter.v_enemy_dead[this._enemyId]) {this._v_dead = Moghunter.v_enemy_dead[this._enemyId]};
	if (Moghunter.v_enemy_recover[this._enemyId]) {this._v_recover = Moghunter.v_enemy_recover[this._enemyId]};
};

//===============================
// ** 동작 실행
//===============================
var _alias_mog_bcry_performActionStart = Game_Battler.prototype.performActionStart;
Game_Battler.prototype.performActionStart = function(action) {
   if (action) {this.playVoiceAction(action)};
   _alias_mog_bcry_performActionStart.call(this, action);
};

//===============================
// ** 동작 음성을 재생하기
//===============================
Game_Battler.prototype.playVoiceAction = function(action) {
     var actionID = action.item().id
	 if (this.isActor()) {
		 if (action.isSkill() && Moghunter.v_actor_skill[this._actorId] && 
		     Moghunter.v_actor_skill[this._actorId][actionID]) {
    		 SoundManager.selectVoice(Moghunter.v_actor_skill[this._actorId][actionID]);
			 return;
		 } else if (action.isItem() && Moghunter.v_actor_item[this._actorId] &&
		     Moghunter.v_actor_item[this._actorId][actionID]) {
			 SoundManager.selectVoice(Moghunter.v_actor_item[this._actorId][actionID]); 
			 return;
		 };
	 } else if (this.isEnemy()) {
		 if (Moghunter.v_enemy_skill[this._enemyId] && Moghunter.v_enemy_skill[this._enemyId][actionID]) {
    		 SoundManager.selectVoice(Moghunter.v_enemy_skill[this._enemyId][actionID]);
			 return;
		 };		 
	 };
	  SoundManager.selectVoice(this._v_default_action);
};

//==============================
// ** 반격 실행
//==============================
var _mog_btcry_gbat_performCounter = Game_Battler.prototype.performCounter;
Game_Battler.prototype.performCounter = function() {
    _mog_btcry_gbat_performCounter.call(this);
    SoundManager.selectVoice(this._v_counter);	
};


//==============================
// ** 마법반사 실행
//==============================
var _mog_btcry_gbat_performReflection = Game_Battler.prototype.performReflection;
Game_Battler.prototype.performReflection = function() {
	_mog_btcry_gbat_performReflection.call(this);
    SoundManager.selectVoice(this._v_reflection);
};

//=============================================================================
// ** 액터 항목(Game Actor)
//=============================================================================	

//==============================
// * 설정
//==============================
var _mog_bcry_gact_setup = Game_Actor.prototype.setup;
Game_Actor.prototype.setup = function(actorId) {
	_mog_bcry_gact_setup.call(this,actorId);
	this.battleCrySetupActor();
};

//=============================================================================
// ** 적 항목(Game Enemy)
//=============================================================================	

//==============================
// * 설정
//==============================
var _mog_bcry_gemy_setup = Game_Enemy.prototype.setup; 
Game_Enemy.prototype.setup = function(enemyId, x, y) {
	_mog_bcry_gemy_setup.call(this,enemyId, x, y);
	this.battleCrySetupEnemy();
};

//===============================
// ** 변형
//===============================
var _mog_battlecry_genemy_transform = Game_Enemy.prototype.transform;
Game_Enemy.prototype.transform = function(enemyId) {
	_mog_battlecry_genemy_transform.call(this,enemyId);
	this.battleCrySetupEnemy();
};

//=============================================================================
// ** 전투 장면(Scene Battle)
//=============================================================================	

//==============================
// * 음성을 선택
//==============================
var _alias_mog_bcry_scbat_start = Scene_Battle.prototype.start;
Scene_Battle.prototype.start = function() {
	_alias_mog_bcry_scbat_start.call(this);
	this._actorvoice = null;  
};

//==============================
// * 전투 과정을 갱신
//==============================
var _alias_mog_bcry_updateBattleProcess = Scene_Battle.prototype.updateBattleProcess;
Scene_Battle.prototype.updateBattleProcess = function() {
	if (this._actorvoice != BattleManager.actor()) {this.playActorTurn()};
	_alias_mog_bcry_updateBattleProcess.call(this);	
};

//==============================
// * 액터 차례에 실행
//==============================
Scene_Battle.prototype.playActorTurn = function() {
	 this._actorvoice = BattleManager.actor();	 
     if (this._actorvoice) {
		if (this._actorvoice._v_turn && this._actorvoice._v_turn.length > 0) {
		     AudioManager.stopSe(); 
		     SoundManager.selectVoice(this._actorvoice._v_turn)
		};
     };
};

//=============================================================================
// ** 동작 항목(Game Action)
//=============================================================================

//==============================
// * 승인
//==============================
var _alias_mog_bcry_gaction_apply = Game_Action.prototype.apply;
Game_Action.prototype.apply = function(target) {
	 var old_hp = target.hp
	 _alias_mog_bcry_gaction_apply.call(this,target);
	 if ($gameParty.inBattle()) {
        if (old_hp != target.hp || this.item().damage.type === 3) {this.playVoiceHP(old_hp,target.hp,target)};
	    if (target.result().missed || target.result().evaded) {SoundManager.selectVoice(target._v_evaded)};
	 };
};

//==============================
// * 피해 종류에 따른 음성 실행
//==============================
Game_Action.prototype.playVoiceHP = function(old_hp,now_hp,target) {
   if (target.isDead()) {
       SoundManager.selectVoice(target._v_dead);
   } else if (old_hp < now_hp || this.item().damage.type === 3) {
	   SoundManager.selectVoice(target._v_recover);
   } else if (old_hp > now_hp) {
       SoundManager.selectVoice(target._v_damage);
   };
};

//==============================
// * 아이템 효과로 인한 피해 종류에 따른 음성 실행
//==============================
var _alias_mog_btcry_gact_itemEffectRecoverHp = Game_Action.prototype.itemEffectRecoverHp;
Game_Action.prototype.itemEffectRecoverHp = function(target, effect) {
	var old_hp = target.hp;
	_alias_mog_btcry_gact_itemEffectRecoverHp.call(this,target, effect)
	if (old_hp <= target.hp) {SoundManager.selectVoice(target._v_recover)};
};
