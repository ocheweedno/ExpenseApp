const d = new Date();
const monthList =
	"январь,февраль,март.апрель,май,июнь,июль,август,сентябрь,октябрь,ноябрь,декабрь".split(
		","
	);
export const curMonth = monthList[d.getMonth() - 1];
export const toDay = new Date().toISOString().slice(0, 10);
export const yesterDay = toDay.slice(8, 10) - 1;
