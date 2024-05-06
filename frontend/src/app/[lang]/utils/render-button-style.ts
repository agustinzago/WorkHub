export function renderButtonStyle(type: string) {
	switch (type) {
		case "primary":
			return "bg-transparent hover:bg-red-500 text-black-700 font-semibold hover:text-white py-8 px-3 border border-red-500 hover:border-transparent rounded";
		case "secondary":
			return "bg-transparent hover:bg-red-500 text-black-700 font-semibold hover:text-white py-8 px-3 border border-red-500 hover:border-transparent rounded";
		default:
			return "px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark-text-black-900";
	}
}
