const d = new Date();
const monthList =
	"январь,февраль,март,апрель,май,июнь,июль,август,сентябрь,октябрь,ноябрь,декабрь".split(
		","
	);
const monthListGrad =
	"января,февраля,марта,апреля,мая,июня,июля,августа,сентября,октября,ноября,декабря".split(
		","
	);
export const curMonth = monthList[d.getMonth()];
export const curMonthGrad = monthListGrad[d.getMonth()];
export const toDay = new Date().toISOString().slice(0, 10);
export const yesterDay = toDay.slice(8, 10) - 1;
