const API_DOMAIN = "https://gnews.io/api/v4/top-headlines?country=";
const API_SEARCH_DOMAIN = "https://gnews.io/api/v4/search?q=";
const API_KEY = "1532b8aa28372d6eaa0ee8112080d259";

export const endpointPath = (country, category) =>
  `${API_DOMAIN}${country}&lang=en&category=${category}&apikey=${API_KEY}`;

export const endpointSearch = (searchQuery) =>
  `${API_SEARCH_DOMAIN}${searchQuery}&lang=en&apikey=${API_KEY}`;