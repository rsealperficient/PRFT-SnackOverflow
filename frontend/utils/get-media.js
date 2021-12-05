import {API_URL} from "@/config/index";
export function getMedia(url) {
	if (url == null) {
		return null;
	}

	if (url.startsWith("http") || url.startsWith("//")) {
		return url;
	}

	return `${API_URL}${url}`;
}
