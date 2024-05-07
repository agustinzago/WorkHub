export function renderButtonStyle(type: string) {
	switch (type) {
		case "primary":
			return "px-6 py-5 text-lg font-semibold rounded dark:bg-red-400 text-white text-center hover:bg-red-600";
		case "secondary":
			return "px-6 py-5 text-lg font-semibold rounded dark:bg-red-200 text-white text-center hover:bg-red-400";
		default:
			return "px-8 py-3 text-lg font-semibold rounded dark:bg-red-400 dark-text-black-900";
	}
}
