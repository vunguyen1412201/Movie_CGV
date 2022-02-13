const apiConfig ={
  baseUrl: 'https://api.themoviedb.org/3/',
  apiKey: 'b4274b0e023dc26e1324c7c29a192219',
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;