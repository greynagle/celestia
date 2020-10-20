import dateDif from "./datedif";

export default function moontime(date) {
	const daysSinceNew = dateDif("2020-10-16", date);

    const phase = (daysSinceNew % 29.530587981) / 29.530587981;

    // currently localized to Boston
	const riseRaw = ((daysSinceNew*53.712)+421)%1440
	const riseH = Math.trunc(riseRaw/60)
	const riseM = Math.round(((riseRaw/60)-riseH)*60)
	const moonrise = `${riseH}:${riseM}`

	// currently localized to Boston
	const setRaw = ((daysSinceNew*53.712)+1147)%1440
	const setH = Math.trunc(setRaw/60)
	const setM = Math.round(((setRaw/60)-setH)*60)
	const moonset = `${setH}:${setM}`

	// currently localized to Boston
	const transitRaw = (riseRaw + setRaw)/2
	const transitH = Math.trunc(transitRaw/60)
	const transitM = Math.round(((transitRaw/60)-transitH)*60)
	const transit = `${transitH}:${transitM}`

	return {phase, moonrise, transit, moonset}
}
