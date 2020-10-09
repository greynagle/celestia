export default function eot(date) {
	const pi = 3.14159265359
	
	const w = 2*pi/365.24 //radians
	const days = 100 //replace with proper date value
	const a = w*(days + 10)
	const b = a + .0334*Math.sin(w*(days-2))
	const c = (a-Math.atan(Math.tan(b)/Math.cos(0.40910518)))/pi

	return 720 * (c-Math.round(c))
}