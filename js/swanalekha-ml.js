/*
 * Copyright (c) 2018 Santhosh Thottingal <santhosh.thottingal@gmail.com>
 * Released under the terms of the MIT license.
 */
/*jshint browser:true */
var rules = {
	a: 'അ',
	a2: 'ആ',
	a3: 'എ',
	aa: 'ആ',
	A2: 'ആ',
	A3: 'എ',
	i: 'ഇ',
	i2: 'ഈ',
	i3: 'ഐ',
	ii: 'ഈ',
	I: 'ഈ',
	I2: 'ഐ',
	ee: 'ഈ',
	ee2: 'ഏ',
	u: 'ഉ',
	u2: 'ഊ',
	u3: 'യു',
	uu: 'ഊ',
	oo: 'ഊ',
	U: 'ഊ',
	RR: 'ഋ',
	rr: 'ഋ',
	e: 'എ',
	e2: 'ഇ',
	E: 'ഏ',
	E2: 'ഇ',
	ae: 'ഏ',
	ai: 'ഐ',
	ei: 'ഐ',
	o: 'ഒ',
	O: 'ഓ',
	au: 'ഔ',
	ou: 'ഔ',
	aH: 'അഃ',
	'~': '\u200C',
	'_': '\u200C',
	'^': '്',
	'@': '@',
	'@a': '@a',
	'@0': '൦',
	'@1': '൧',
	'@2': '൨',
	'@3': '൩',
	'@4': '൪',
	'@5': '൫',
	'@6': '൬',
	'@7': '൭',
	'@8': '൮',
	'@9': '൯',
	'@aa': 'ാ',
	'@A': 'ാ',
	'@i': 'ി',
	'@ii': 'ീ',
	'@I': 'ീ',
	'@ee': 'ീ',
	'@u': 'ു',
	'@uu': 'ൂ',
	'@U': 'ൂ',
	'@oo': 'ൂ',
	'@R': 'ൃ',
	'@e': 'െ',
	'@E': 'േ',
	'@ae': 'േ',
	'@o': 'ൊ',
	'@O': 'ോ',
	'@ai': 'ൈ',
	'@ei': 'ൈ',
	'@ou': 'ൌ',
	'@ou2': 'ൗ',
	'@au': 'ൌ',
	'@au2': 'ൗ',
	k: 'ക്',
	k2: 'കു്',
	k3: 'ക്\u200D',
	k4: 'ക്ക്',
	k5: 'ക്കു്',
	k6: 'കെ',
	'k~': 'ക്\u200D',
	'k_': 'ക്\u200D',
	'c~': 'ക്\u200D',
	'c_': 'ക്\u200D',
	c: 'ക്',
	c2: 'കു്',
	ck: 'ക്ക്',
	ka: 'ക',
	ca: 'ക',
	ca2: 'കാ',
	ca3: 'കേ',
	ka2: 'ഗ',
	ka3: 'ഖ',
	ka4: 'ഘ',
	kaa: 'കാ',
	kaa2: 'ഗാ',
	caa: 'കാ',
	kA: 'കാ',
	cA: 'കാ',
	ki: 'കി',
	ki2: 'ഗി',
	ki3: 'ഖി',
	ki4: 'ഘി',
	ki5: 'കൈ',
	ci: 'കി',
	ci2: 'സി',
	ci3: 'സൈ',
	kii: 'കീ',
	kee: 'കീ',
	cee: 'കീ',
	kI: 'കീ',
	cI: 'കീ',
	ku: 'കു',
	ku2: 'കൂ',
	cu: 'കു',
	kuu: 'കൂ',
	cuu: 'കൂ',
	coo: 'കൂ',
	koo: 'കൂ',
	koo2: 'കോ',
	kU: 'കൂ',
	cU: 'കൂ',
	kR: 'കൃ',
	cR: 'കൃ',
	ke: 'കെ',
	ce: 'കെ',
	ce2: 'സ്',
	kE: 'കേ',
	cE: 'കേ',
	kae: 'കേ',
	cae: 'കേ',
	kai: 'കൈ',
	cai: 'കൈ',
	kai2: 'കയ്',
	kei: 'കൈ',
	cei: 'കൈ',
	kei2: 'കെയ്',
	ko: 'കൊ',
	co: 'കൊ',
	kO: 'കോ',
	cO: 'കോ',
	kau: 'കൌ',
	cau: 'കൌ',
	kou: 'കൌ',
	cou: 'കൌ',
	kaM: 'കം',
	kaH: 'കഃ',
	kh: 'ഖ്',
	kh2: 'ഖു്',
	kh3: 'ഘ്',
	kh4: 'ഘു്',
	kha: 'ഖ',
	kha2: 'ക്ക',
	kha3: 'ഘ',
	khaa: 'ഖാ',
	khA: 'ഖാ',
	khi: 'ഖി',
	khi2: 'ക്കി',
	khii: 'ഖീ',
	khee: 'ഖീ',
	khI: 'ഖീ',
	khu: 'ഖു',
	khu2: 'ഘു',
	khuu: 'ഖൂ',
	khoo: 'ഖൂ',
	khU: 'ഖൂ',
	khR: 'ഖൃ',
	khe: 'ഖെ',
	khE: 'ഖേ',
	khae: 'ഖേ',
	khai: 'ഖൈ',
	khei: 'ഖൈ',
	kho: 'ഖൊ',
	khO: 'ഖോ',
	khau: 'ഖൌ',
	khou: 'ഖൌ',
	khaM: 'ഖം',
	khaH: 'ഖഃ',
	K: 'ഖ്',
	K2: 'ഖു്',
	K3: 'കെ',
	Ka: 'ഖ',
	Ka2: 'ക',
	Ka3: 'ക്ക',
	Kaa: 'ഖാ',
	KA: 'ഖാ',
	Ki: 'ഖി',
	Ki2: 'കി',
	Kii: 'ഖീ',
	Kee: 'ഖീ',
	Kee2: 'കീ',
	KI: 'ഖ',
	Ku: 'ഖു',
	Ku2: 'കു',
	Kuu: 'ഖൂ',
	Kuu3: 'കൂ',
	Koo: 'ഖൂ',
	Koo2: 'കൂ',
	Koo3: 'കോ',
	KU: 'ഖൂ',
	KR: 'ഖൃ',
	Ke: 'ഖെ',
	Ke2: 'കെ',
	KE: 'ഖേ',
	Kae: 'ഖേ',
	Kai: 'ഖൈ',
	Kei: 'ഖൈ',
	Ko: 'ഖൊ',
	Ko2: 'കൊ',
	Ko3: 'കോ',
	KO: 'ഖോ',
	Kau: 'ഖൌ',
	Kou: 'ഖൌ',
	KaM: 'ഖം',
	KaH: 'ഖഃ',
	g: 'ഗ്',
	g2: 'ഗു്',
	g3: 'ജി',
	ga: 'ഗ',
	ga2: 'ജ',
	ga3: 'ക',
	ga4: 'ഖ',
	gaa: 'ഗാ',
	gA: 'ഗാ',
	gi: 'ഗി',
	gi2: 'കി',
	gi3: 'ജി',
	gii: 'ഗീ',
	gee: 'ഗീ',
	gI: 'ഗീ',
	gu: 'ഗു',
	guu: 'ഗൂ',
	goo: 'ഗൂ',
	goo2: 'ഗോ',
	gU: 'ഗൂ',
	gR: 'ഗൃ',
	ge: 'ഗെ',
	gE: 'ഗേ',
	gae: 'ഗേ',
	gai: 'ഗൈ',
	gei: 'ഗൈ',
	go: 'ഗൊ',
	go2: 'ഗോ',
	gO: 'ഗോ',
	gau: 'ഗൌ',
	gou: 'ഗൌ',
	gaM: 'ഗം',
	gaH: 'ഗഃ',
	gh: 'ഘ്',
	gh2: 'ഘു്',
	gha: 'ഘ',
	gha2: 'ഖ',
	ghaa: 'ഘാ',
	ghA: 'ഘാ',
	ghi: 'ഘി',
	ghii: 'ഘീ',
	ghee: 'ഘീ',
	ghI: 'ഘീ',
	ghu: 'ഘു',
	ghuu: 'ഘൂ',
	ghoo: 'ഘൂ',
	ghU: 'ഘൂ',
	ghR: 'ഘൃ',
	ghe: 'ഘെ',
	ghE: 'ഘേ',
	ghae: 'ഘേ',
	ghai: 'ഘൈ',
	ghei: 'ഘൈ',
	gho: 'ഘൊ',
	ghO: 'ഘോ',
	ghau: 'ഘൌ',
	ghou: 'ഘൌ',
	ghaM: 'ഘം',
	ghaH: 'ഘഃ',
	G: 'ഘ്',
	G2: 'ഘു്',
	G3: 'ജി',
	G4: 'ഗ്ഗി',
	Ga: 'ഘ',
	Ga2: 'ഗ',
	Ga3: 'ഗ്ഗ',
	Ga4: 'ജ',
	Gaa: 'ഘാ',
	Gaa2: 'ഗ്ഗാ',
	GA: 'ഘാ',
	GA2: 'ഗ്ഗാ',
	Gi: 'ഘി',
	Gi2: 'ഗ്ഗി',
	Gii: 'ഘീ',
	Gii2: 'ഗ്ഗീ',
	Gee: 'ഘീ',
	Gee2: 'ഗ്ഗീ',
	GI: 'ഘീ',
	GI2: 'ഗ്ഗീ',
	GI3: 'ഗ്ഗി',
	Gu: 'ഘു',
	Gu2: 'ഗു',
	Gu3: 'ഗ്ഗു',
	Guu: 'ഘൂ',
	Guu2: 'ഗ്ഗൂ',
	Goo: 'ഘൂ',
	Goo2: 'ഗ്ഗൂ',
	GU: 'ഘൂ',
	GU2: 'ഗ്ഗൂ',
	GR: 'ഘൃ',
	GR2: 'ഗ്ഗൃ',
	Ge: 'ഘെ',
	Ge2: 'ഗെ',
	Ge3: 'ഗ്ഗെ',
	Ge4: 'ജെ',
	GE: 'ഘേ',
	GE2: 'ഗ്ഗേ',
	Gae: 'ഘേ',
	Gae2: 'ഗ്ഗേ',
	Gai: 'ഘൈ',
	Gai2: 'ഗയ്',
	Gai3: 'ഗെയ്',
	Gai4: 'ഗ്ഗൈ',
	Gei5: 'ഘൈ',
	Gei6: 'ഗ്ഗൈ',
	Go: 'ഘൊ',
	Go2: 'ഗോ',
	Go3: 'ഗൊ',
	Go4: 'ഗ്ഗൊ',
	GOO: 'ഘോ',
	GOO2: 'ഗ്ഗോ',
	GO: 'ഘോ',
	Gau: 'ഘൌ',
	Gou: 'ഘൌ',
	GaM: 'ഘം',
	GaH: 'ഘഃ',
	ng: 'ങ്ങ്',
	ng2: 'ങ്ങു്',
	ng3: 'ങ്',
	ng4: 'ങു്',
	Nga: 'ങ',
	Nga2: 'ങ്ങ',
	Ngaa: 'ങാ',
	NgA: 'ങാ',
	Ngi: 'ങി',
	Ngii: 'ങീ',
	Ngee: 'ങീ',
	Ngu: 'ങു',
	Nguu: 'ങൂ',
	Ngoo: 'ങൂ',
	NgR: 'ങൃ',
	Nge: 'ങെ',
	NgE: 'ങേ',
	Ngai: 'ങൈ',
	Ngei: 'ങൈ',
	Ngo: 'ങൊ',
	NgO: 'ങോ',
	Ngau: 'ങൌ',
	Ngou: 'ങൌ',
	NgaH: 'ങഃ',
	nga: 'ങ്ങ',
	nga2: 'ങ',
	ngaa: 'ങ്ങാ',
	ngaa2: 'ങാ',
	ngA: 'ങ്ങാ',
	ngA2: 'ങാ',
	ngi: 'ങ്ങി',
	ngi2: 'ങി',
	ngii: 'ങ്ങീ',
	ngii2: 'ങീ',
	ngee: 'ങ്ങീ',
	ngee2: 'ങീ',
	ngI: 'ങ്ങീ',
	ngI2: 'ങീ',
	ngu: 'ങ്ങു',
	ngu2: 'ങു',
	nguu: 'ങ്ങൂ',
	nguu2: 'ങൂ',
	ngoo: 'ങ്ങൂ',
	ngoo2: 'ങൂ',
	ngU: 'ങൂ',
	ngU2: 'ങ്ങൂ',
	ngR: 'ങ്ങൃ',
	ngR2: 'ങൃ',
	nge: 'ങ്ങെ',
	nge2: 'ങെ',
	ngE: 'ങ്ങേ',
	ngae: 'ങ്ങേ',
	ngE2: 'ങേ',
	ngae2: 'ങേ',
	ngai: 'ങ്ങൈ',
	ngai2: 'ങൈ',
	nge3: 'ങ്ങൈ',
	ngei: 'ങൈ',
	ngo: 'ങ്ങൊ',
	ngo2: 'ങൊ',
	ngO: 'ങ്ങോ',
	ngO2: 'ങോ',
	ngau: 'ങ്ങൌ',
	ngou: 'ങൌ',
	ngou2: 'ങൌ',
	ngaM: 'ങ്ങം',
	ngaM2: 'ങം',
	c3: 'സി',
	C: 'സി',
	ch: 'ച്',
	ch2: 'ചു്',
	ch3: 'ച്ച്',
	ch4: 'ച്ചു്',
	ch5: 'ക്ക്',
	ch6: 'ക്കു്',
	cha: 'ച',
	cha2: 'ച്ച',
	cha3: 'ച്ഛ',
	chaa: 'ചാ',
	chA: 'ചാ',
	chi: 'ചി',
	chi2: 'ച്ചി',
	chi3: 'ചൈ',
	chii: 'ചീ',
	chee: 'ചീ',
	chee2: 'ച്ചീ',
	chI: 'ചീ',
	chu: 'ചു',
	chu2: 'ച്യു',
	chuu: 'ചൂ',
	chuu2: 'ച്ചൂ',
	choo: 'ചൂ',
	choo2: 'ച്ചൂ',
	choo3: 'ചോ',
	chU: 'ചൂ',
	chR: 'ചൃ',
	che: 'ചെ',
	che2: 'ച്ചെ',
	chE: 'ചേ',
	chae: 'ചേ',
	chai: 'ചൈ',
	chai2: 'ചായ്',
	chei: 'ചൈ',
	cho: 'ചൊ',
	cho2: 'ചോ',
	chO: 'ചോ',
	chau: 'ചൌ',
	chou: 'ചൌ',
	chaM: 'ചം',
	chaH: 'ചഃ',
	Ch: 'ഛ്',
	Cha: 'ഛ',
	Cha2: 'ച',
	Cha3: 'ച്ച',
	Chaa: 'ഛാ',
	ChA: 'ഛാ',
	Chi: 'ഛി',
	Chi2: 'ചി',
	Chii: 'ഛീ',
	Chee: 'ഛീ',
	ChI: 'ഛീ',
	Chu: 'ഛു',
	Chu2: 'ചു',
	Chuu: 'ഛൂ',
	Choo: 'ഛൂ',
	ChU: 'ഛൂ',
	ChR: 'ഛൃ',
	Che: 'ഛെ',
	ChE: 'ഛേ',
	Chae: 'ഛേ',
	Chai: 'ഛൈ',
	Chei: 'ഛൈ',
	Cho: 'ഛൊ',
	ChO: 'ഛോ',
	Chau: 'ഛൌ',
	Chou: 'ഛൌ',
	ChaM: 'ഛം',
	ChaH: 'ഛഃ',
	chh: 'ഛ്',
	chha: 'ഛ',
	chha2: 'ച്ച',
	chhaa: 'ഛാ',
	chhA: 'ഛാ',
	chhi: 'ഛി',
	chhii: 'ഛീ',
	chhee: 'ഛീ',
	chhI: 'ഛീ',
	chhu: 'ഛു',
	chhuu: 'ഛൂ',
	chhoo: 'ഛൂ',
	chhU: 'ഛൂ',
	chhR: 'ഛൃ',
	chhe: 'ഛെ',
	chhE: 'ഛേ',
	chhae: 'ഛേ',
	chhai: 'ഛൈ',
	chhei: 'ഛൈ',
	chho: 'ഛൊ',
	chhO: 'ഛോ',
	chhau: 'ഛൌ',
	chhou: 'ഛൌ',
	chhaM: 'ഛം',
	chhaH: 'ഛഃ',
	j: 'ജ്',
	j2: 'ജു്',
	j3: 'ജെ',
	ja: 'ജ',
	ja2: 'ജെ',
	jaa: 'ജാ',
	jA: 'ജാ',
	ji: 'ജി',
	ji2: 'ജൈ',
	jii: 'ജീ',
	jee: 'ജീ',
	jI: 'ജീ',
	ju: 'ജു',
	juu: 'ജൂ',
	joo: 'ജൂ',
	jU: 'ജൂ',
	jR: 'ജൃ',
	je: 'ജെ',
	je2: 'ജീ',
	jE: 'ജേ',
	jae: 'ജേ',
	jai: 'ജൈ',
	jai2: 'ജയ്',
	jei: 'ജൈ',
	jo: 'ജൊ',
	jO: 'ജോ',
	jau: 'ജൌ',
	jou: 'ജൌ',
	jaM: 'ജം',
	jaH: 'ജഃ',
	jh: 'ഝ്',
	jha: 'ഝ',
	jhaa: 'ഝാ',
	jhA: 'ഝാ',
	jhi: 'ഝി',
	jhii: 'ഝീ',
	jhee: 'ഝീ',
	jhI: 'ഝീ',
	jhu: 'ഝു',
	jhuu: 'ഝൂ',
	jhoo: 'ഝൂ',
	jhU: 'ഝൂ',
	jhR: 'ഝൃ',
	jhe: 'ഝെ',
	jhE: 'ഝേ',
	jhae: 'ഝേ',
	jhai: 'ഝൈ',
	jhei: 'ഝൈ',
	jho: 'ഝൊ',
	jhoo2: 'ഝോ',
	jhO: 'ഝോ',
	jhau: 'ഝൌ',
	jhou: 'ഝൌ',
	jhaM: 'ഝം',
	jhaH: 'ഝഃ',
	J: 'ഝ്',
	J2: 'ജെ',
	Ja: 'ഝ',
	Ja2: 'ജ',
	Ja3: 'ജെ',
	Jaa: 'ഝാ',
	JA: 'ഝാ',
	Ji: 'ഝി',
	Ji2: 'ജി',
	Ji3: 'ജൈ',
	Jii: 'ഝീ',
	Jee: 'ഝീ',
	Jee2: 'ജീ',
	JI: 'ഝീ',
	Ju: 'ഝു',
	Ju2: 'ജു',
	Juu: 'ഝൂ',
	Juu2: 'ജൂ',
	Joo: 'ഝൂ',
	Joo2: 'ജൂ',
	JU: 'ഝൂ',
	JU2: 'ജെ.യു.',
	JR: 'ഝൃ',
	JR2: 'ജെ.ആര്‍',
	Je: 'ഝെ',
	JE: 'ഝേ',
	Jae: 'ഝേ',
	Jai: 'ഝൈ',
	Jai2: 'ജയ്',
	Jei: 'ഝൈ',
	Jo: 'ഝൊ',
	Jo2: 'ജോ',
	Jo3: 'ജൊ',
	Joo3: 'ഝോ',
	JO: 'ഝോ',
	Jau: 'ഝൌ',
	Jou: 'ഝൌ',
	JaM: 'ഝം',
	JaH: 'ഝഃ',
	nj: 'ഞ്',
	nj2: 'ഞ്ഞ്',
	nj3: 'ഞ്ഞു്',
	nja: 'ഞ',
	nja2: 'ഞ്ച',
	nja3: 'ഞ്ഞ',
	njaa: 'ഞാ',
	njaa2: 'ഞ്ചാ',
	njA: 'ഞാ',
	nji: 'ഞി',
	nji2: 'ഞ്ഞി',
	nji3: 'ഞ്ചി',
	njii: 'ഞീ',
	njee: 'ഞീ',
	njee2: 'ഞ്ചീ',
	njI: 'ഞീ',
	nju: 'ഞു',
	nju2: 'ഞ്ഞു',
	nju3: 'ഞ്ചു',
	njuu: 'ഞൂ',
	njuu2: 'ഞ്ഞൂ',
	njuu3: 'ഞ്ചൂ',
	njoo: 'ഞൂ',
	njoo4: 'ഞ്ഞൂ',
	njU: 'ഞൂ',
	njR: 'ഞൃ',
	nje: 'ഞെ',
	nje2: 'ഞ്ഞെ',
	nje3: 'ഞ്ചെ',
	njE: 'ഞേ',
	njE2: 'ഞ്ഞേ',
	njae: 'ഞേ',
	njae2: 'ഞ്ഞേ',
	njai: 'ഞൈ',
	njai2: 'ഞ്ഞൈ',
	njei: 'ഞ്ചൈ',
	njei2: 'ഞൈ',
	njei3: 'ഞ്ഞൈ',
	njo: 'ഞൊ',
	njo2: 'ഞ്ഞോ',
	njo3: 'ഞ്ചൊ',
	njO: 'ഞോ',
	njO2: 'ഞ്ഞോ',
	njO3: 'ഞ്ചോ',
	njau: 'ഞൌ',
	njau3: 'ഞ്ഞൌ',
	njou: 'ഞൌ',
	njaM: 'ഞം',
	njaH: 'ഞഃ',
	t: 'ട്',
	t2: 'ടു്',
	t3: 'ട്ട്',
	t4: 'റ്റ്',
	t5: 'ത്',
	t6: 'ടി',
	ta: 'ട',
	ta2: 'റ്റ',
	ta3: 'ത',
	ta4: 'ഠ',
	taa: 'ടാ',
	taa2: 'റ്റാ',
	taa3: 'താ',
	taa4: 'ഠാ',
	taa5: 'ട്ടാ',
	tA: 'ടാ',
	tA2: 'താ',
	tA3: 'റ്റാ',
	tA4: 'ഠാ',
	tA5: 'ട്ടാ',
	ti: 'ടി',
	ti2: 'തി',
	ti3: 'ട്ടി',
	ti4: 'റ്റി',
	ti5: 'ഠി',
	ti6: 'ടൈ',
	ti7: 'തൈ',
	tii: 'ടീ',
	tee: 'ടീ',
	tee2: 'തീ',
	tee3: 'റ്റീ',
	tea: 'ടീ',
	tea2: 'റ്റീ',
	tea3: 'തീ',
	tI: 'ടീ',
	tI2: 'റ്റീ',
	tu: 'ടു',
	tu2: 'തു',
	tu3: 'റ്റു',
	tu4: 'ട്ടു',
	tuu: 'ടൂ',
	tuu2: 'തൂ',
	tuu3: 'റ്റൂ',
	too: 'ടൂ',
	too2: 'റ്റൂ',
	too3: 'തൂ',
	tU: 'ടൂ',
	tU2: 'റ്റൂ',
	tR: 'ടൃ',
	te: 'ടെ',
	te2: 'തെ',
	te3: 'റ്റെ',
	te4: 'ഠെ',
	tE: 'ടേ',
	tE2: 'തേ',
	tae: 'ടേ',
	tai: 'ടൈ',
	tai2: 'ടായ്',
	tei: 'ടൈ',
	tei2: 'ടെയ്',
	to: 'ടൊ',
	to2: 'ടു',
	to3: 'റ്റു',
	tO: 'ടോ',
	tau: 'ടൌ',
	tou: 'ടൌ',
	taM: 'ടം',
	taM2: 'തം',
	taH: 'ടഃ',
	taH2: 'തഃ',
	T: 'ഠ്',
	T2: 'ട്ടു്',
	Ta: 'ഠ',
	Ta2: 'ട',
	Ta3: 'ത',
	Taa: 'ഠാ',
	TA: 'ഠാ',
	Ti: 'ഠി',
	Ti2: 'ടി',
	Ti3: 'തി',
	Ti4: 'തൈ',
	Tii: 'ഠീ',
	Tee: 'ഠീ',
	TI: 'ഠീ',
	Tu: 'ഠു',
	Tu2: 'ടു',
	Tu3: 'തു',
	Tuu: 'ഠൂ',
	Too: 'ഠൂ',
	Too2: 'ടൂ',
	Too3: 'തൂ',
	TU: 'ഠൂ',
	TR: 'ഠൃ',
	Te: 'ഠെ',
	Te2: 'ടെ',
	Te3: 'തെ',
	TE: 'ഠേ',
	TE2: 'ടേ',
	Tae: 'ഠേ',
	Tai: 'ഠൈ',
	Tei: 'ഠൈ',
	To: 'ഠൊ',
	To2: 'ടു',
	To3: 'തൊ',
	TO: 'ഠോ',
	TO2: 'തോ',
	Tau: 'ഠൌ',
	Tou: 'ഠൌ',
	TaM: 'ഠം',
	TaH: 'ഠഃ',
	D: 'ഡ്',
	D2: 'ഡു്',
	D3: 'ദ്',
	D4: 'ഡി',
	Da: 'ഡ',
	Da2: 'ദ',
	Da3: 'ഢ',
	Da4: 'ഠ',
	Daa: 'ഡാ',
	Daa2: 'ദാ',
	DA: 'ഡാ',
	DA3: 'ദാ',
	Di: 'ഡി',
	Dii: 'ഡീ',
	Dee: 'ഡീ',
	DI: 'ഡീ',
	Du: 'ഡു',
	Du2: 'ദു',
	Du3: 'ദുഃ',
	Duu: 'ഡൂ',
	Doo: 'ഡൂ',
	DU: 'ഡൂ',
	DR: 'ഡൃ',
	De: 'ഡെ',
	De2: 'ടെ',
	DE: 'ഡേ',
	Dae: 'ഡേ',
	Dai: 'ഡൈ',
	Dei: 'ഡൈ',
	Do: 'ഡൊ',
	Do2: 'ദൊ',
	DO: 'ഡോ',
	Dau: 'ഡൌ',
	Dou: 'ഡൌ',
	DaM: 'ഡം',
	DaH: 'ഡഃ',
	Dh: 'ഢ്',
	Dha: 'ഢ',
	Dhaa: 'ഢാ',
	DhA: 'ഢാ',
	Dhi: 'ഢി',
	Dhii: 'ഢീ',
	Dhee: 'ഢീ',
	DhI: 'ഢീ',
	Dhu: 'ഢു',
	Dhuu: 'ഢൂ',
	Dhoo: 'ഢൂ',
	DhU: 'ഢൂ',
	DhR: 'ഢൃ',
	Dhe: 'ഢെ',
	DhE: 'ഢേ',
	Dhae: 'ഢേ',
	Dhai: 'ഢൈ',
	Dhei: 'ഢൈ',
	Dho: 'ഢൊ',
	DhO: 'ഢോ',
	Dhau: 'ഢൌ',
	Dhau2: 'ഢൌ',
	Dhou: 'ഢൌ',
	DhaM: 'ഢം',
	DhaH: 'ഢഃ',
	N: 'ണ്',
	N2: 'ൺ',
	N3: 'ണു്',
	N4: 'ൻ',
	N5: 'ണ്ണ്',
	N6: 'ണ്ണു്',
	N7: 'എൻ',
	'N_': 'ൺ',
	'N~': 'ൺ',
	Na: 'ണ',
	Na2: 'ന',
	Na3: 'നാ',
	Na4: 'ണ്ണ',
	Naa: 'ണാ',
	Naa2: 'നാ',
	NA: 'ണാ',
	Ni: 'ണി',
	Ni2: 'ണ്ണി',
	Nii: 'ണീ',
	Nee: 'ണീ',
	Nee2: 'നീ',
	NI: 'ണീ',
	Nu: 'ണു',
	Nuu: 'ണൂ',
	Nuu2: 'നൂ',
	Noo: 'ണൂ',
	Noo2: 'നൂ',
	NU: 'ണൂ',
	NR: 'ണൃ',
	Ne: 'ണെ',
	NE: 'ണേ',
	NE2: 'നീ',
	NE3: 'ണേ',
	Nae: 'ണേ',
	Nai: 'ണൈ',
	Nei: 'ണൈ',
	No: 'ണൊ',
	No2: 'നോ',
	NO: 'ണോ',
	NO2: 'നോ',
	Nau: 'ണൌ',
	Nou: 'ണൌ',
	NaM: 'ണം',
	NaH: 'ണഃ',
	th: 'ത്',
	th2: 'തു്',
	th3: 'ത്ത്',
	th4: 'ത്തു്',
	tha: 'ത',
	tha2: 'ധ',
	tha3: 'ഥ',
	tha4: 'ത്ത',
	tha5: 'ദ്ധ',
	thaa: 'താ',
	thaa2: 'ഥാ',
	thaa3: 'ധാ',
	thaa4: 'ത്താ',
	thA: 'താ',
	thA2: 'ഥാ',
	thA3: 'ധാ',
	thA4: 'ത്താ',
	thi: 'തി',
	thi2: 'ത്തി',
	thi3: 'ഥി',
	thi4: 'ധി',
	thi5: 'ത്ഥി',
	thi6: 'ദ്ധി',
	thi7: 'തൈ',
	thii: 'തീ',
	thii2: 'ത്തീ',
	thii3: 'ഥീ',
	thii4: 'ധീ',
	thee: 'തീ',
	thee2: 'ഥീ',
	thI: 'തീ',
	thu: 'തു',
	thu2: 'ത്തു',
	thuu: 'തൂ',
	thuu2: 'ഥൂ',
	thoo: 'തൂ',
	thoo2: 'ഥൂ',
	thoo3: 'തോ',
	thU: 'തൂ',
	thR: 'തൃ',
	the: 'തെ',
	thE: 'തേ',
	thae: 'തേ',
	thee3: 'തേ',
	thai: 'തൈ',
	thei: 'തൈ',
	thei2: 'തെയ്',
	tho: 'തൊ',
	tho2: 'തോ',
	tho3: 'ത്തൊ',
	thO: 'തോ',
	thO2: 'ത്തോ',
	thau: 'തൌ',
	thou: 'തൌ',
	thaM: 'തം',
	thaM2: 'ത്തം',
	thaH: 'തഃ',
	Th: 'ഥ്',
	Th2: 'ഥു്',
	Tha: 'ഥ',
	Tha2: 'ത',
	Thaa: 'ഥാ',
	Thaa2: 'താ',
	ThA: 'ഥാ',
	Thi: 'ഥി',
	Thi2: 'തി',
	Thi3: 'ത്ഥി',
	Thii: 'ഥീ',
	Thee: 'ഥീ',
	Thee2: 'തീ',
	ThI: 'ഥീ',
	Thu: 'ഥു',
	Thu2: 'തു',
	Thuu: 'ഥൂ',
	Thuu2: 'തൂ',
	Thoo: 'ഥൂ',
	Thoo2: 'തൂ',
	ThU: 'ഥൂ',
	ThU2: 'തൂ',
	ThR: 'ഥൃ',
	ThR2: 'തൃ',
	The: 'ഥെ',
	The2: 'ദി',
	The3: 'തെ',
	ThE: 'ഥേ',
	Thae: 'ഥേ',
	Thai: 'ഥൈ',
	Thai2: 'തൈ',
	Thei: 'ഥൈ',
	Thei2: 'തെയ്',
	Tho: 'ഥൊ',
	ThO: 'ഥോ',
	Thau: 'ഥൌ',
	Thou: 'ഥൌ',
	ThaM: 'ഥം',
	ThaH: 'ഥഃ',
	TH: 'ഥ്',
	TH2: 'ഥു്',
	THa: 'ഥ',
	THa2: 'ത',
	THaa: 'ഥാ',
	THaa2: 'താ',
	THA: 'ഥാ',
	THi: 'ഥി',
	THi2: 'തി',
	THi3: 'ത്ഥി',
	THii: 'ഥീ',
	THee: 'ഥീ',
	THee2: 'തീ',
	THI: 'ഥീ',
	THu: 'ഥു',
	THu2: 'തു',
	THuu: 'ഥൂ',
	THuu2: 'തൂ',
	THoo: 'ഥൂ',
	THoo2: 'തൂ',
	THU: 'ഥൂ',
	THU2: 'തൂ',
	THR: 'ഥൃ',
	THR2: 'തൃ',
	THe: 'ഥെ',
	THe2: 'ദി',
	THe3: 'തെ',
	THE: 'ഥേ',
	THae: 'ഥേ',
	THai: 'ഥൈ',
	THai2: 'തൈ',
	THei: 'ഥൈ',
	THei3: 'തെയ്',
	THo: 'ഥൊ',
	THO: 'ഥോ',
	THau: 'ഥൌ',
	THou: 'ഥൌ',
	THaM: 'ഥം',
	THaH: 'ഥഃ',
	tH: 'ഥ്',
	tH2: 'ഥു്',
	tHa: 'ഠ',
	tHa2: 'ത',
	tHaa: 'ഠാ',
	tHaa2: 'താ',
	tHA: 'ഠാ',
	tHi: 'ഠി',
	tHi2: 'തി',
	tHi3: 'ത്ഠി',
	tHii: 'ഠീ',
	tHee: 'ഠീ',
	tHee2: 'തീ',
	tHI: 'ഠീ',
	tHu: 'ഥു',
	tHu2: 'തു',
	tHuu: 'ഥൂ',
	tHuu2: 'തൂ',
	tHoo: 'ഥൂ',
	tHoo2: 'തൂ',
	tHU: 'ഥൂ',
	tHU2: 'തൂ',
	tHR: 'ഥൃ',
	tHR2: 'തൃ',
	tHe: 'ഠെ',
	tHe2: 'ദി',
	tHe3: 'തെ',
	tHE: 'ഠേ',
	tHae: 'ഠേ',
	tHai: 'ഠൈ',
	tHai2: 'തൈ',
	tHei: 'ഠൈ',
	tHei2: 'തെയ്',
	tHo: 'ഠൊ',
	tHO: 'ഠോ',
	tHau: 'ഠൌ',
	tHou: 'ഠൌ',
	tHaM: 'ഠം',
	tHaH: 'ഠഃ',
	d: 'ദ്',
	d2: 'ദു്',
	d3: 'ട്',
	d4: 'ടു്',
	d5: 'ഡി',
	d6: 'ദ്ദ്',
	da: 'ദ',
	da2: 'ട',
	da3: 'ഡ',
	daa: 'ദാ',
	daa2: 'ടാ',
	dA: 'ദാ',
	dA2: 'ടാ',
	di: 'ദി',
	di2: 'ടി',
	di3: 'ധി',
	di4: 'ഥി',
	di5: 'ഡൈ',
	dii: 'ദീ',
	dii2: 'ടീ',
	dee: 'ദീ',
	dee2: 'ടീ',
	dI: 'ദീ',
	dI2: 'ടീ',
	du: 'ദു',
	du2: 'ടു',
	du3: 'ദുഃ',
	du4: 'തു',
	duu: 'ദൂ',
	doo: 'ദൂ',
	dU: 'ദൂ',
	dR: 'ദൃ',
	de: 'ദെ',
	de2: 'ടെ',
	de3: 'തെ',
	dE: 'ദേ',
	dE2: 'തേ',
	dae: 'ദേ',
	dai: 'ദൈ',
	dai2: 'ഡായ്',
	dei: 'ദൈ',
	dei3: 'ഡേയ്',
	'do': 'ദൊ',
	dO: 'ദോ',
	dau: 'ദൌ',
	dou: 'ദൌ',
	daM: 'ദം',
	daH: 'ദഃ',
	dh: 'ധ്',
	dh2: 'ധു്',
	dha: 'ധ',
	dhaa: 'ധാ',
	dhA: 'ധാ',
	dhi: 'ധി',
	dhii: 'ധീ',
	dhee: 'ധീ',
	dhI: 'ധീ',
	dhu: 'ധു',
	dhuu: 'ധൂ',
	dhoo: 'ധൂ',
	dhU: 'ധൂ',
	dhR: 'ധൃ',
	dhe: 'ധെ',
	dhE: 'ധേ',
	dhae: 'ധേ',
	dhai: 'ധൈ',
	dhei: 'ധൈ',
	dho: 'ധൊ',
	dhO: 'ധോ',
	dhau: 'ധൌ',
	dhou: 'ധൌ',
	dhaM: 'ധം',
	dhaH: 'ധഃ',
	n: 'ന്',
	n2: 'ൻ',
	n3: 'നു്',
	n4: 'ൺ',
	n5: 'ണ്',
	n6: 'ന്ന്',
	n7: 'എൻ',
	'n_': 'ൻ',
	'n~': 'ൻ',
	na: 'ന',
	na2: 'ണ',
	naa: 'നാ',
	naa2: 'ണാ',
	nA: 'നാ',
	ni: 'നി',
	ni2: 'ണി',
	ni3: 'നൈ',
	nii: 'നീ',
	nii2: 'ണീ',
	nee: 'നീ',
	nee2: 'നേ',
	nI: 'നീ',
	nI2: 'ണീ',
	nu: 'നു',
	nu2: 'ണു',
	nu3: 'ണ്',
	nuu: 'നൂ',
	nuu2: 'ണൂ',
	noo: 'നൂ',
	noo2: 'ണൂ',
	nU: 'നൂ',
	nU2: 'ണൂ',
	nR: 'നൃ',
	ne: 'നെ',
	ne2: 'ണെ',
	ne3: 'ന്‍',
	ne4: 'ണ്‍',
	nE: 'നേ',
	nae: 'നേ',
	nai: 'നൈ',
	nai2: 'നായ്',
	nei: 'നെയ്',
	nei2: 'നൈ',
	no: 'നൊ',
	no2: 'ണൊ',
	no3: 'നോ',
	nO: 'നോ',
	nau: 'നൌ',
	nou: 'നൌ',
	naM: 'നം',
	naH: 'നഃ',
	p: 'പ്',
	p2: 'പു്',
	p3: 'പ്പ്',
	p4: 'പ്പു്',
	p5: 'പി',
	pa: 'പ',
	Pa2: 'പ',
	paa: 'പാ',
	pA: 'പാ',
	pi: 'പി',
	pi2: 'പൈ',
	pi3: 'പ്പി',
	Pi: 'പി',
	Pi2: 'പൈ',
	pii: 'പീ',
	pee: 'പീ',
	Pee: 'പീ',
	pee2: 'പേ',
	pI: 'പീ',
	pu: 'പു',
	Pu: 'പു',
	puu: 'പൂ',
	poo: 'പൂ',
	poo2: 'പോ',
	Poo: 'പൂ',
	pU: 'പൂ',
	pR: 'പൃ',
	pe: 'പെ',
	pe2: 'പി',
	pE: 'പേ',
	pae: 'പേ',
	pai: 'പൈ',
	pai2: 'പയ്',
	pai3: 'പായ്',
	pei: 'പെയ്',
	pei2: 'പൈ',
	po: 'പൊ',
	pO: 'പോ',
	pau: 'പൌ',
	pou: 'പൌ',
	paM: 'പം',
	paH: 'പഃ',
	P: 'പ്',
	P2: 'പ്പ്',
	P3: 'പ്പു്',
	P4: 'പി',
	Pa: 'പ',
	Paa: 'പാ',
	PA: 'പാ',
	Pi2: 'പി',
	Pi3: 'പ്പി',
	Pi4: 'പി',
	Pi5: 'പൈ',
	Pii: 'പീ',
	Pee2: 'പീ',
	Pee3: 'പേ',
	PI: 'പീ',
	Pu2: 'പു',
	Puu: 'പൂ',
	Poo2: 'പൂ',
	Poo3: 'പോ',
	PU: 'പൂ',
	PR: 'പൃ',
	Pe: 'പെ',
	Pe2: 'പി',
	PE: 'പേ',
	Pae: 'പേ',
	Pai: 'പൈ',
	Pai2: 'പയ്',
	Pai3: 'പായ്',
	Pei: 'പെയ്',
	Pei2: 'പൈ',
	Po: 'പൊ',
	PO: 'പോ',
	Pau: 'പൌ',
	Pou: 'പൌ',
	PaM: 'പം',
	PaH: 'പഃ',
	f: 'ഫ്',
	f2: 'എഫ്',
	fa: 'ഫ',
	faa: 'ഫാ',
	fA: 'ഫാ',
	fi: 'ഫി',
	fii: 'ഫീ',
	fee: 'ഫീ',
	fI: 'ഫീ',
	fu: 'ഫു',
	fuu: 'ഫൂ',
	foo: 'ഫൂ',
	fU: 'ഫൂ',
	fR: 'ഫൃ',
	fe: 'ഫെ',
	fE: 'ഫേ',
	fai: 'ഫൈ',
	fei: 'ഫൈ',
	fo: 'ഫൊ',
	fO: 'ഫോ',
	fau: 'ഫൌ',
	fou: 'ഫൌ',
	faM: 'ഫം',
	faH: 'ഫഃ',
	F: 'ഫ്',
	F2: 'എഫ്',
	Fa: 'ഫ',
	Faa: 'ഫാ',
	FA: 'ഫാ',
	Fi: 'ഫി',
	Fii: 'ഫീ',
	Fee: 'ഫീ',
	FI: 'ഫീ',
	Fu: 'ഫു',
	Fuu: 'ഫൂ',
	Foo: 'ഫൂ',
	FU: 'ഫൂ',
	FR: 'ഫൃ',
	Fe: 'ഫെ',
	FE: 'ഫേ',
	Fai: 'ഫൈ',
	Fei: 'ഫൈ',
	Fo: 'ഫൊ',
	FO: 'ഫോ',
	Fau: 'ഫൌ',
	Fou: 'ഫൌ',
	FaM: 'ഫം',
	FaH: 'ഫഃ',
	ph: 'ഫ്',
	ph2: 'പി.എച്.',
	pha: 'ഫ',
	phaa: 'ഫാ',
	phA: 'ഫാ',
	phi: 'ഫി',
	phii: 'ഫീ',
	phee: 'ഫീ',
	phI: 'ഫീ',
	phu: 'ഫു',
	phuu: 'ഫൂ',
	phoo: 'ഫൂ',
	phU: 'ഫൂ',
	phR: 'ഫൃ',
	phe: 'ഫെ',
	phE: 'ഫേ',
	phai: 'ഫൈ',
	phei: 'ഫൈ',
	pho: 'ഫൊ',
	pho2: 'ഫോ',
	phO: 'ഫോ',
	phau: 'ഫൌ',
	phou: 'ഫൌ',
	phaM: 'ഫം',
	phaH: 'ഫഃ',
	b: 'ബ്',
	b2: 'ബ്ബ്',
	b3: 'ബി',
	ba: 'ബ',
	baa: 'ബാ',
	bA: 'ബാ',
	bi: 'ബി',
	bi2: 'ബൈ',
	bii: 'ബീ',
	bee: 'ബീ',
	bI: 'ബീ',
	bu: 'ബു',
	buu: 'ബൂ',
	boo: 'ബൂ',
	boo2: 'ബോ',
	bU: 'ബൂ',
	bR: 'ബൃ',
	be: 'ബെ',
	bE: 'ബേ',
	bae: 'ബേ',
	bai: 'ബൈ',
	bai2: 'ബായ്',
	bei: 'ബൈ',
	bo: 'ബൊ',
	bO: 'ബോ',
	bau: 'ബൌ',
	bau3: 'ഭൌ',
	bou: 'ബൌ',
	baM: 'ബം',
	baH: 'ബഃ',
	bh: 'ഭ്',
	bha: 'ഭ',
	bhaa: 'ഭാ',
	bhA: 'ഭാ',
	bhi: 'ഭി',
	bhii: 'ഭീ',
	bhee: 'ഭീ',
	bhI: 'ഭീ',
	bhu: 'ഭു',
	bhuu: 'ഭൂ',
	bhoo: 'ഭൂ',
	bhU: 'ഭൂ',
	bhR: 'ഭൃ',
	bhe: 'ഭെ',
	bhE: 'ഭേ',
	bhae: 'ഭേ',
	bhai: 'ഭൈ',
	bhai2: 'ഭായ്',
	bhei: 'ഭൈ',
	bho: 'ഭൊ',
	bhO: 'ഭോ',
	bhau: 'ഭൌ',
	bhou: 'ഭൌ',
	bhaM: 'ഭം',
	bhaH: 'ഭഃ',
	B: 'ഭ്',
	B2: 'ബ്',
	B3: 'ബി',
	Ba: 'ഭ',
	Ba2: 'ബ',
	Ba3: 'ബാ',
	Baa: 'ഭാ',
	Baa2: 'ബാ',
	BA: 'ഭാ',
	BA2: 'ബി.എ.',
	Bi: 'ഭി',
	Bi2: 'ബൈ',
	Bii: 'ഭീ',
	Bee: 'ഭീ',
	BI: 'ഭീ',
	Bu: 'ഭു',
	Bu2: 'ബു',
	Buu: 'ഭൂ',
	Boo: 'ഭൂ',
	BU: 'ഭൂ',
	BR: 'ഭൃ',
	Be: 'ഭെ',
	BE: 'ഭേ',
	Bai: 'ഭൈ',
	Bei: 'ഭൈ',
	Bo: 'ഭൊ',
	Bo2: 'ബോ',
	BO: 'ഭോ',
	Bau: 'ഭൌ',
	Bou: 'ഭൌ',
	BaM: 'ഭം',
	BaH: 'ഭഃ',
	m: 'മ്',
	m2: 'ം',
	'm ': 'ം ',
	'm 2': 'മ്',
	m3: 'എം',
	m_: 'ം',
	'm~': 'ം',
	ma: 'മ',
	ma2: 'മ്മ',
	maa: 'മാ',
	mA: 'മാ',
	mi: 'മി',
	mii: 'മീ',
	mee: 'മീ',
	mI: 'മീ',
	mu: 'മു',
	muu: 'മൂ',
	moo: 'മൂ',
	moo2: 'മോ',
	mU: 'മൂ',
	mR: 'മൃ',
	me: 'മെ',
	mE: 'മേ',
	mae: 'മേ',
	mai: 'മൈ',
	mai2: 'മയ്',
	mei: 'മെയ്',
	mei2: 'മൈ',
	mo: 'മൊ',
	mo2: 'മോ',
	mO: 'മോ',
	mau: 'മൌ',
	mou: 'മൌ',
	maM: 'മം',
	maH: 'മഃ',
	M: 'മ്',
	M2: 'ം',
	M3: 'എം',
	M_: 'ം',
	'M~': 'ം',
	Ma: 'മ',
	Ma2: 'മ്മ',
	Maa: 'മാ',
	MA: 'മാ',
	Mi: 'മി',
	Mii: 'മീ',
	Mee: 'മീ',
	MI: 'മീ',
	Mu: 'മു',
	Muu: 'മൂ',
	Moo: 'മൂ',
	Moo2: 'മോ',
	MU: 'മൂ',
	MR: 'മൃ',
	Me: 'മെ',
	ME: 'മേ',
	Mae: 'മേ',
	Mai: 'മൈ',
	Mai2: 'മയ്',
	Mei: 'മെയ്',
	Mei2: 'മൈ',
	Mo: 'മൊ',
	Mo2: 'മോ',
	MO: 'മോ',
	Mau: 'മൌ',
	Mou: 'മൌ',
	MaM: 'മം',
	MaH: 'മഃ',
	y: 'യ്',
	y2: 'യു്',
	y3: 'യ്യ്',
	y4: 'യ്യു്',
	y5: 'വൈ',
	ya: 'യ',
	yaa: 'യാ',
	yA: 'യാ',
	yi: 'യി',
	yii: 'യീ',
	yee: 'യീ',
	yI: 'യീ',
	yu: 'യു',
	yuu: 'യൂ',
	yoo: 'യൂ',
	yU: 'യൂ',
	yR: 'യൃ',
	ye: 'യെ',
	ye2: 'യേ',
	yE: 'യേ',
	yae: 'യേ',
	yai: 'യൈ',
	yei: 'യൈ',
	yo: 'യൊ',
	yO: 'യോ',
	yau: 'യൌ',
	you: 'യൌ',
	you2: 'യൂ',
	yaM: 'യം',
	yaH: 'യഃ',
	Ya: 'യ',
	Yaa: 'യാ',
	YA: 'യാ',
	Yi: 'യി',
	Yii: 'യീ',
	Yee: 'യീ',
	YI: 'യീ',
	Yu: 'യു',
	Yuu: 'യൂ',
	Yoo: 'യൂ',
	YU: 'യൂ',
	YR: 'യൃ',
	Ye: 'യെ',
	Ye2: 'യേ',
	YE: 'യേ',
	Yai: 'യൈ',
	Yei: 'യൈ',
	Yo: 'യൊ',
	Yo2: 'യോ',
	YO: 'യോ',
	Yau: 'യൌ',
	yaM2: 'യം',
	r: 'ര്',
	r2: 'ർ',
	r3: 'രു്',
	r4: 'ആർ',
	r_: 'ർ',
	'r~': 'ർ',
	ra: 'ര',
	ra2: 'റ',
	raa: 'രാ',
	raa2: 'റാ',
	rA: 'രാ',
	ri: 'രി',
	ri2: 'റി',
	ri3: 'രൈ',
	ri4: 'റൈ',
	rii: 'രീ',
	ree: 'രീ',
	rI: 'രീ',
	ru: 'രു',
	ru2: 'റു',
	ruu: 'രൂ',
	roo: 'രൂ',
	rU: 'രൂ',
	rR: 'രൃ',
	re: 'രെ',
	rE: 'രേ',
	rae: 'രേ',
	rai: 'രൈ',
	rai2: 'രായ്',
	rei: 'രൈ',
	rei2: 'രെയ്',
	ro: 'രൊ',
	ro2: 'രോ',
	rO: 'രോ',
	rau: 'രൌ',
	rou: 'രൌ',
	raM: 'രം',
	raH: 'രഃ',
	R: 'റ്',
	R2: 'റ്\u200D',
	R3: 'റു്',
	R4: 'ആർ',
	'R~': 'ർ',
	R_: 'ർ',
	Ra: 'റ',
	Ra2: 'ര',
	Ra3: 'രാ',
	Raa: 'റാ',
	RA: 'റാ',
	Ri: 'റി',
	Ri2: 'രി',
	Rii: 'റീ',
	Ree: 'റീ',
	Ree2: 'രീ',
	RI: 'റീ',
	Ru: 'റു',
	Ru2: 'രു',
	Ruu: 'റൂ',
	Ruu2: 'രൂ',
	Roo: 'റൂ',
	Roo2: 'രൂ',
	RU: 'റൂ',
	Re: 'റെ',
	RE: 'റേ',
	Rae: 'റേ',
	Rai: 'റൈ',
	Rai2: 'റായ്',
	Rei: 'റൈ',
	Rei2: 'റെയ്',
	Ro: 'റൊ',
	RO: 'റോ',
	Rau: 'റൌ',
	Rou: 'റൌ',
	RaM: 'റം',
	RaH: 'റഃ',
	l: 'ല്',
	l2: 'ൽ',
	l3: 'ൾ',
	l4: 'ലു്',
	l5: 'എൽ',
	'l~': 'ൽ',
	'l_': 'ൽ',
	la: 'ല',
	la2: 'ള',
	laa: 'ലാ',
	laa2: 'ളാ',
	lA: 'ലാ',
	li: 'ലി',
	li2: 'ളി',
	li3: 'ലൈ',
	li4: 'ളൈ',
	lii: 'ലീ',
	lee: 'ലീ',
	lee2: 'ളീ',
	lI: 'ലീ',
	lu: 'ലു',
	lu2: 'ളു',
	luu: 'ലൂ',
	loo: 'ലൂ',
	loo2: 'ലോ',
	lU: 'ലൂ',
	lR: 'ലൃ',
	le: 'ലെ',
	le2: 'ളെ',
	lE: 'ലേ',
	lae: 'ലേ',
	lai: 'ലൈ',
	lei: 'ലൈ',
	lo: 'ലൊ',
	lo2: 'ലോ',
	lO: 'ലോ',
	lau: 'ലൌ',
	lou: 'ലൌ',
	laM: 'ലം',
	laH: 'ലഃ',
	L: 'ള്',
	L2: 'ൾ',
	L3: 'ളു്',
	L4: 'എൽ',
	L5: 'ള്ള്',
	L_: 'ൾ',
	'L~': 'ൾ',
	La: 'ള',
	La2: 'ല',
	Laa: 'ളാ',
	Laa2: 'ലാ',
	LA: 'ളാ',
	Li: 'ളി',
	Li2: 'ലി',
	Lii: 'ളീ',
	Lee: 'ളീ',
	Lee2: 'ലീ',
	LI: 'ളീ',
	Lu: 'ളു',
	Lu2: 'ലു',
	Luu: 'ളൂ',
	Luu2: 'ളൂ',
	LU: 'ളൂ',
	Loo: 'ളൂ',
	Loo2: 'ലൂ',
	LR: 'ളൃ',
	Le: 'ളെ',
	Le2: 'ലെ',
	LE: 'ളേ',
	LE2: 'ലേ',
	Lae: 'ളേ',
	Lae2: 'ലേ',
	Lai: 'ളൈ',
	Lei2: 'ളൈ',
	Lo: 'ളൊ',
	Lo2: 'ലോ',
	Lo3: 'ലൊ',
	LO: 'ളോ',
	Lau: 'ളൌ',
	Lau3: 'ളൌ',
	Lou: 'ളൌ',
	LaM: 'ളം',
	LaH: 'ളഃ',
	v: 'വ്',
	v2: 'വു്',
	v3: 'വ്വ്',
	v4: 'വ്വു്',
	v5: 'വി',
	V: 'വി',
	va: 'വ',
	va2: 'വാ',
	Va: 'വ',
	Va2: 'വ്വ',
	Va3: 'വാ',
	vaa: 'വാ',
	Vaa2: 'വാ',
	vA: 'വാ',
	vi: 'വി',
	Vi: 'വി',
	vii: 'വീ',
	vee: 'വീ',
	vee2: 'വേ',
	vI: 'വീ',
	vu: 'വു',
	vuu: 'വൂ',
	voo: 'വൂ',
	vU: 'വൂ',
	vR: 'വൃ',
	ve: 'വെ',
	vE: 'വേ',
	vae: 'വേ',
	vai: 'വൈ',
	vai2: 'വയ്',
	vei: 'വൈയ്',
	vei2: 'വൈ',
	vo: 'വൊ',
	vo2: 'വോ',
	vO: 'വോ',
	vau: 'വൌ',
	vou: 'വൌ',
	vaM: 'വം',
	vaH: 'വഃ',
	w: 'വ്',
	w2: 'വ്വ്',
	w3: 'ഡബ്ല്യൂ',
	wa: 'വ',
	waa: 'വാ',
	wA: 'വാ',
	wi: 'വി',
	wii: 'വീ',
	wee: 'വീ',
	wI: 'വീ',
	wu: 'വു',
	wuu: 'വൂ',
	woo: 'വൂ',
	wU: 'വൂ',
	wR: 'വൃ',
	we: 'വെ',
	wE: 'വേ',
	wae: 'വേ',
	wai: 'വൈ',
	wei: 'വൈ',
	wo: 'വൊ',
	wO: 'വോ',
	wau: 'വൌ',
	wou: 'വൌ',
	waM: 'വം',
	waH: 'വഃ',
	W: 'വ്',
	W2: 'വ്വ്',
	W3: 'ഡബ്ല്യൂ',
	Wa: 'വ',
	Waa: 'വാ',
	WA: 'വാ',
	Wi: 'വി',
	Wii: 'വീ',
	Wee: 'വീ',
	WI: 'വീ',
	Wu: 'വു',
	Wuu: 'വൂ',
	Woo: 'വൂ',
	WU: 'വൂ',
	WR: 'വൃ',
	We: 'വെ',
	WE: 'വേ',
	Wae: 'വേ',
	Wai: 'വൈ',
	Wei: 'വൈ',
	Wo: 'വൊ',
	WO: 'വോ',
	Wau: 'വൌ',
	Wou: 'വൌ',
	WaM: 'വം',
	WaH: 'വഃ',
	s: 'സ്',
	s2: 'ശ്',
	s3: 'സ്സ്',
	s4: 'സു്',
	s5: 'സ്സു്',
	s6: 'എസ്',
	sa: 'സ',
	sa2: 'ശ',
	saa: 'സാ',
	saa2: 'ശാ',
	sA: 'സാ',
	si: 'സി',
	si2: 'ശി',
	sii: 'സീ',
	see: 'സീ',
	see2: 'ശീ',
	sI: 'സീ',
	su: 'സു',
	su2: 'ശു',
	suu: 'സൂ',
	suu2: 'ശൂ',
	soo: 'സൂ',
	soo2: 'ശൂ',
	sU: 'സൂ',
	sR: 'സൃ',
	se: 'സെ',
	se2: 'സി',
	sE: 'സേ',
	sae: 'സേ',
	sai: 'സൈ',
	sai2: 'സായ്',
	sei: 'സൈ',
	so: 'സൊ',
	so2: 'ശൊ',
	so3: 'സോ',
	sO: 'സോ',
	sau: 'സൌ',
	sou: 'സൌ',
	saM: 'സം',
	saH: 'സഃ',
	S: 'ശ്',
	S2: 'സ്',
	S3: 'ശ്ശ്',
	S4: 'ശ്ശു്',
	S5: 'എസ്',
	Sa: 'ശ',
	Sa2: 'സ',
	Saa: 'ശാ',
	Saa2: 'സാ',
	SA: 'ശാ',
	SA2: 'സാ',
	Si: 'ശി',
	Si2: 'സി',
	Sii: 'ശീ',
	See: 'ശീ',
	See2: 'സീ',
	SI: 'ശീ',
	Su: 'ശു',
	Su2: 'സു',
	Suu: 'ശൂ',
	Soo: 'ശൂ',
	Soo2: 'സൂ',
	SU: 'ശൂ',
	SR: 'ശൃ',
	Se: 'ശെ',
	Se2: 'സെ',
	Se3: 'സി',
	SE: 'ശേ',
	Sae: 'ശേ',
	Sai: 'ശൈ',
	Sai2: 'സൈ',
	Sai3: 'സായ്',
	Sei: 'ശൈ',
	Sei2: 'സീ',
	So: 'ശൊ',
	So2: 'സൊ',
	So3: 'സോ',
	SO: 'ശോ',
	Sau: 'ശൌ',
	Sou: 'ശൌ',
	Sou2: 'സൌ',
	SaM: 'ശം',
	SaH: 'ശഃ',
	SaH2: 'ഷാ',
	Z: 'ശ്',
	Z2: 'സ്',
	Z3: 'ഇസഡ്',
	z: 'ശ്',
	z2: 'സ്',
	z3: 'ശു്',
	z4: 'ഇസഡ്',
	za: 'ശ',
	za2: 'സ',
	zaa: 'ശാ',
	zaa2: 'സാ',
	zA: 'ശാ',
	zi: 'ശി',
	zi2: 'സി',
	zii: 'ശീ',
	zee: 'ശീ',
	zee2: 'സീ',
	zI: 'ശീ',
	zu: 'ശു',
	zu2: 'സു',
	zuu: 'ശൂ',
	zoo: 'ശൂ',
	zoo2: 'സൂ',
	zU: 'ശൂ',
	zR: 'ശൃ',
	ze: 'ശെ',
	zE: 'ശേ',
	zai: 'ശൈ',
	zei: 'ശൈ',
	zo: 'ശൊ',
	zO: 'ശോ',
	zau: 'ശൌ',
	zou: 'ശൌ',
	zaM: 'ശം',
	zaH: 'ശഃ',
	sh: 'ഷ്',
	sh2: 'ഷു്',
	sha: 'ഷ',
	shaa: 'ഷാ',
	shA: 'ഷാ',
	shi: 'ഷി',
	shii: 'ഷീ',
	shee: 'ഷീ',
	shee2: 'ഷേ',
	shI: 'ഷീ',
	shu: 'ഷു',
	shuu: 'ഷൂ',
	shoo: 'ഷൂ',
	shU: 'ഷൂ',
	shR: 'ഷൃ',
	she: 'ഷെ',
	she2: 'ഷി',
	shE: 'ഷേ',
	shae: 'ഷേ',
	shai: 'ഷൈ',
	shei: 'ഷൈ',
	sho: 'ഷൊ',
	sho2: 'ഷോ',
	shO: 'ഷോ',
	shau: 'ഷൌ',
	shou: 'ഷൌ',
	shaM: 'ഷം',
	shaH: 'ഷഃ',
	Sh: 'ഴ്',
	Sh2: 'ഷ്',
	Sh3: 'ഴു്',
	Sha: 'ഴ',
	Sha2: 'ഷ',
	Sha3: 'ഷാ',
	Shaa: 'ഴാ',
	ShA: 'ഴാ',
	Shi: 'ഴി',
	Shii: 'ഴീ',
	Shee: 'ഴീ',
	ShI: 'ഴീ',
	Shu: 'ഴു',
	Shu2: 'ഷു',
	Shuu: 'ഴൂ',
	Shoo: 'ഴൂ',
	Shoo2: 'ഷൂ',
	ShU: 'ഴൂ',
	ShR: 'ഴൃ',
	ShE: 'ഴേ',
	Shae: 'ഴേ',
	Shai: 'ഴൈ',
	Shei: 'ഴൈ',
	Sho: 'ഴൊ',
	ShO: 'ഴോ',
	Shau: 'ഴൌ',
	Shou: 'ഴൌ',
	ShaM: 'ഴം',
	ShaH: 'ഴഃ',
	zh: 'ഴ്',
	zh2: 'ഴു്',
	zha: 'ഴ',
	zhaa: 'ഴാ',
	zhA: 'ഴാ',
	zhi: 'ഴി',
	zhii: 'ഴീ',
	zhee: 'ഴീ',
	zhI: 'ഴീ',
	zhu: 'ഴു',
	zhuu: 'ഴൂ',
	zhoo: 'ഴൂ',
	zhU: 'ഴൂ',
	zhR: 'ഴൃ',
	zhe: 'ഴെ',
	zhE: 'ഴേ',
	zhae: 'ഴേ',
	zhai: 'ഴൈ',
	zhei: 'ഴൈ',
	zho: 'ഴൊ',
	zhO: 'ഴോ',
	zhau: 'ഴൌ',
	zhou: 'ഴൌ',
	zhaM: 'ഴം',
	zhaH: 'ഴഃ',
	h: 'ഹ്',
	h2: 'എച്',
	h3: 'എച്ച്',
	H: 'എച്ച്',
	ha: 'ഹ',
	ha2: 'ഹാ',
	haa: 'ഹാ',
	hA: 'ഹാ',
	hi: 'ഹി',
	hi2: 'ഹായ്',
	hii: 'ഹീ',
	hee: 'ഹീ',
	hI: 'ഹീ',
	hu: 'ഹു',
	huu: 'ഹൂ',
	hoo: 'ഹൂ',
	hU: 'ഹൂ',
	hR: 'ഹൃ',
	he: 'ഹെ',
	he2: 'ഹി',
	hE: 'ഹേ',
	hai: 'ഹൈ',
	hai2: 'ഹായ്',
	hei: 'ഹൈ',
	hei2: 'ഹേയ്',
	ho: 'ഹൊ',
	ho2: 'ഹോ',
	hO: 'ഹോ',
	hau: 'ഹൌ',
	hou: 'ഹൌ',
	haM: 'ഹം',
	haH: 'ഹഃ',
	x: 'ക്ഷ്',
	x2: 'ക്സ്',
	x3: 'എക്സ്',
	xa: 'ക്ഷ',
	xa2: 'ക്സ',
	xa3: 'ക്സെ',
	xaa: 'ക്ഷാ',
	xA: 'ക്ഷാ',
	xi: 'ക്ഷി',
	xi2: 'ക്സി',
	xii: 'ക്ഷീ',
	xee: 'ക്ഷീ',
	xI: 'ക്ഷീ',
	xu: 'ക്ഷു',
	xu2: 'ക്സു',
	xuu: 'ക്ഷൂ',
	xoo: 'ക്ഷൂ',
	xU: 'ക്ഷൂ',
	xR: 'ക്ഷൃ',
	xe: 'ക്ഷെ',
	xe2: 'ക്ഷേ',
	xe3: 'ക്സെ',
	xe4: 'ക്സി',
	xe5: 'ക്ഷി',
	xE: 'ക്ഷേ',
	xai: 'ക്ഷൈ',
	xei: 'ക്ഷൈ',
	xo: 'ക്ഷൊ',
	xO: 'ക്ഷോ',
	xau: 'ക്ഷൌ',
	xou: 'ക്ഷൌ',
	xaM: 'ക്ഷം',
	xaH: 'ക്ഷഃ',
	T3: 'ടി',
	T4: 'റ്റി',
	TT: 'റ്റ്',
	TT2: 'റ്റു്',
	TTa: 'റ്റ',
	TTa2: 'ട്ട',
	TTaa: 'റ്റാ',
	TTA: 'റ്റാ',
	TTi: 'റ്റി',
	TTii: 'റ്റീ',
	TTee: 'റ്റീ',
	TTI: 'റ്റീ',
	TTI2: 'ടി.ടി.ഐ.',
	TTu: 'റ്റു',
	TTuu: 'റ്റൂ',
	TToo: 'റ്റൂ',
	TTU: 'റ്റൂ',
	TTR: 'റ്റൃ',
	TTR2: 'ടി.ടി.ആർ',
	TTe: 'റ്റെ',
	TTE: 'റ്റേ',
	TTai: 'റ്റൈ',
	TTei: 'റ്റൈ',
	TTo: 'റ്റൊ',
	TTO: 'റ്റോ',
	TTau: 'റ്റൌ',
	TTou: 'റ്റൌ',
	TTaM: 'റ്റം',
	TTah: 'റ്റഃ',
	nk: 'ങ്ക്',
	nk2: 'ങ്കു്',
	nka: 'ങ്ക',
	nkaa: 'ങ്കാ',
	nkA: 'ങ്കാ',
	nki: 'ങ്കി',
	nkii: 'ങ്കീ',
	nkee: 'ങ്കീ',
	nkI: 'ങ്കീ',
	nku: 'ങ്കു',
	nkuu: 'ങ്കൂ',
	nkoo: 'ങ്കൂ',
	nkU: 'ങ്കൂ',
	nkR: 'ങ്കൃ',
	nke: 'ങ്കെ',
	nkE: 'ങ്കേ',
	nkai: 'ങ്കൈ',
	nkai2: 'ങ്കായ്',
	nkei: 'ങ്കൈ',
	nko: 'ങ്കൊ',
	nko2: 'ങ്കോ',
	nkO: 'ങ്കോ',
	nkau: 'ങ്കൌ',
	nkou: 'ങ്കൌ',
	nkaM: 'ങ്കം',
	nkaH: 'ങ്കഃ',
	nc: 'ങ്ക്',
	nch: 'ഞ്ച്',
	ncha: 'ഞ്ച',
	ncha2: 'ഞ്ചാ',
	nchaa: 'ഞ്ചാ',
	nchA: 'ഞ്ചാ',
	nchi: 'ഞ്ചി',
	nchii: 'ഞ്ചീ',
	nchee: 'ഞ്ചീ',
	nchI: 'ഞ്ചീ',
	nchu: 'ഞ്ചു',
	nchuu: 'ഞ്ചൂ',
	nchoo: 'ഞ്ചൂ',
	nchU: 'ഞ്ചൂ',
	nchR: 'ഞ്ചൃ',
	nche: 'ഞ്ചെ',
	nche2: 'ഞ്ചി',
	nchE: 'ഞ്ചേ',
	nchai: 'ഞ്ചൈ',
	nchei: 'ഞ്ചൈ',
	ncho: 'ഞ്ചൊ',
	nchO: 'ഞ്ചോ',
	nchau: 'ഞ്ചൌ',
	nchou: 'ഞ്ചൌ',
	nchaM: 'ഞ്ചം',
	nchaH: 'ഞ്ചഃ',
	nth: 'ന്ത്',
	nth2: 'ന്തു്',
	ntha: 'ന്ത',
	ntha2: 'ന്ദ',
	nthaa: 'ന്താ',
	nthA: 'ന്താ',
	nthi: 'ന്തി',
	nthi2: 'ന്ദി',
	nthii: 'ന്തീ',
	nthee: 'ന്തീ',
	nthee2: 'ന്ദീ',
	nthI: 'ന്തീ',
	nthu: 'ന്തു',
	nthuu: 'ന്തൂ',
	nthoo: 'ന്തൂ',
	nthU: 'ന്തൂ',
	nthR: 'ന്തൃ',
	nthe: 'ന്തെ',
	nthE: 'ന്തേ',
	nthE2: 'ന്ദേ',
	nthai: 'ന്തൈ',
	nthei: 'ന്തൈ',
	ntho: 'ന്തൊ',
	nthO: 'ന്തോ',
	nthau: 'ന്തൌ',
	nthou: 'ന്തൌ',
	nthaM: 'ന്തം',
	nthaH: 'ന്തഃ',
	nt: 'ന്റ്',
	nt2: 'ന്റു്',
	nta: 'ന്റ',
	nta2: 'ണ്ട',
	ntaa: 'ന്റാ',
	ntA: 'ന്റാ',
	nti: 'ന്റി',
	nti2: 'ണ്ടി',
	ntii: 'ന്റീ',
	ntee: 'ന്റീ',
	ntI: 'ന്റീ',
	ntu: 'ന്റു',
	ntuu: 'ന്റൂ',
	ntoo: 'ന്റൂ',
	ntU: 'ന്റൂ',
	ntR: 'ന്റൃ',
	nte: 'ന്റെ',
	ntE: 'ന്റേ',
	ntae: 'ന്റേ',
	ntai: 'ന്റൈ',
	ntei: 'ന്റൈ',
	nto: 'ന്റൊ',
	ntO: 'ന്റോ',
	ntau: 'ന്റൌ',
	ntou: 'ന്റൌ',
	ntaM: 'ന്റം',
	ntaH: 'ന്റഃ',
	q: 'ക്യു',
	Q: 'ക്യൂ',
	Y: 'വൈ',
	X: 'എക്സ്'
};

/**
 * Bind swanalekha to the input field
 */
function swanalekha(widget, options) {
	var pattern, patternStart, tabCount;

	widget.enabled = options && options.enabled || false;

	if (widget.enabled) {
		widget.className = widget.className + ' swanalekha';
	}

	function isToggleEvent(event) {
		var keyCode;

		keyCode = event.keyCode || event.which;
		return (keyCode === 77 && event.ctrlKey);
	}

	function listen() {
		widget.onkeydown = function (event) {
			if (isToggleEvent(event)) {
				widget.enabled = !widget.enabled;
				if (widget.enabled) {
					widget.className = widget.className + ' swanalekha';
				} else {
					widget.className = widget.className.replace('swanalekha', '');
					return;
				}
			} else {
				var keyCode = event.keyCode || event.which;
				if (keyCode === 9) { // backspace
					keyPressHandler(event);
				}
			}
		};

		function keyPressHandler(event) {
			if (widget.enabled) {
				return transliterate(event);
			} else {
				return true;
			}
		}
		widget.onkeypress = keyPressHandler;
	}

	function isExplorer() {
		return (document.selection && document.selection.createRange().isEqual);
	}

	function transliterate(event) {
		var stepback, pos, char, range, cursorLoc, scrollTop, kCode = event.keyCode || event.which;

		if (kCode == 8) { //backspace
			pattern = pattern.replace(/aAeEiIoOuU0-9/g, '');
			tabCount = 1;
			return;
		}
		if (event.ctrlKey || event.altKey || event.metaKey) {
			return true;
		}
		char = String.fromCharCode(kCode);
		pos = widget.selectionStart;
		if (kCode === 9) { /*Tab key*/
			tabCount++;
			if (pattern !== null || pattern !== '') {
				if (tabCount === 2) {
					pattern = pattern + tabCount;
				} else {
					if (rules[pattern.substring(0, pattern.length - 1) + tabCount]) {
						pattern = pattern.substring(0, pattern.length - 1) + tabCount;
					} else {
						tabCount = 1;
						pattern = pattern.substring(0, pattern.length - 1);
					}
				}
			}
		} else {
			pattern = pattern + char;
		}
		if (pattern.length > 5) {
			pattern = '';
			tabCount = 1;
		}
		if (tabCount >= 2) {
			event.preventDefault();
		}
		var mal = rules[pattern];
		if (!mal) {
			pattern = char;
			tabCount = 1;
			patternStart = widget.selectionStart;
			mal = rules[pattern];
		}
		if (mal) {
			if (isExplorer()) {
				range = document.selection.createRange();
				stepback = range - patternStart;
				range.moveStart('character', -stepback);
				range.text = mal;
				range.collapse(false);
				range.select();
				return false;
			} else {
				scrollTop = widget.scrollTop;
				cursorLoc = widget.selectionStart;
				stepback = cursorLoc - patternStart;
				widget.value = widget.value.substr(0, patternStart) + mal + widget.value.substr(widget.selectionEnd, widget.value.length);
				widget.scrollTop = scrollTop;
				widget.selectionStart = cursorLoc + mal.length - stepback;
				widget.selectionEnd = cursorLoc + mal.length - stepback;
				return false;
			}
		}
		if (kCode === 9) {
			return false;
		}
		return true;
	}

	listen();
}
