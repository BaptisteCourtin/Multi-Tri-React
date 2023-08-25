const TableauAlbums = [
  {
    pochette:
      "https://i.discogs.com/FVvE92Cw8Ga-X4Ot83CTP9km6xbV4GGJ_l2mnwURKM8/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIxNzg4/OTA4LTE2NDI1MjAw/NjUtNzI0MS5qcGVn.jpeg",
    titre: "world of walker",
    artiste: "Alan Walker",
    date: "11/2021",
    genre: "electro",
  },
  {
    pochette:
      "https://static.fnac-static.com/multimedia/Images/FR/NR/b8/4a/aa/11160248/1507-1/tsp20210609113141/Different-World.jpg",
    titre: "different world",
    artiste: "Alan Walker",
    date: "12/2018",
    genre: "electro",
  },
  {
    pochette:
      "https://cdns-images.dzcdn.net/images/cover/c232e485ad6f3f27588914e77008d98a/500x500.jpg",
    titre: "parallax",
    artiste: "TheFatRat",
    date: "09/2021",
    genre: "electro",
  },
  {
    pochette: "https://covers2.hosting-media.net/jpg343/u0602557310085.jpg",
    titre: "jackpot",
    artiste: "TheFatRat",
    date: "11/2016",
    genre: "electro",
  },
  {
    pochette:
      "https://www.lucky-records.com/Files/132380/Img/06/imaginedragoncd3-z.jpg",
    titre: "evolve",
    artiste: "Imagine Dragons",
    date: "06/2017",
    genre: "pop rock",
  },
  {
    pochette:
      "https://e-cdn-images.dzcdn.net/images/cover/901b5bb7135a07e6ee624ec2863254fa/264x264-000000-80-0-0.jpg",
    titre: "night visions",
    artiste: "Imagine Dragons",
    date: "09/2012",
    genre: "pop rock",
  },
  {
    pochette:
      "https://static.fnac-static.com/multimedia/Images/FR/NR/40/20/a1/10559552/1507-1/tsp20181008124201/Origins.jpg",
    titre: "origins",
    artiste: "Imagine Dragons",
    date: "11/2018",
    genre: "pop rock",
  },
  {
    pochette:
      "https://static.qobuz.com/images/covers/jc/j4/wfr3lj3e5j4jc_600.jpg",
    titre: "el ultimo tour del mundo",
    artiste: "Bad Bunny",
    date: "11/2020",
    genre: "reggeaton",
  },
  {
    pochette:
      "https://i.discogs.com/gFcHS8atEcnGxlZ1ximsACpHNVUICivTIJDE1fOVJ6k/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE0ODYw/ODk3LTE1ODMzNzE5/OTEtOTM1My5qcGVn.jpeg",
    titre: "yhlqmdlg",
    artiste: "Bad Bunny",
    date: "02/2020",
    genre: "reggeaton",
  },
  {
    pochette:
      "https://i.discogs.com/gNW-xdSjlHjNCemR_gczF1HsspgGVsdBRHe4bfGsZ6g/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE0MTgw/ODMwLTE1Njk4ODY5/NjktNDg3NC5qcGVn.jpeg",
    titre: "x 100pre",
    artiste: "Bad Bunny",
    date: "12/2018",
    genre: "reggeaton",
  },
  {
    pochette:
      "https://static.fnac-static.com/multimedia/Images/FR/NR/6b/8e/dd/14519915/1540-1/tsp20220628153540/Un-Verano-Sin-Ti.jpg",
    titre: "un verano sin ti",
    artiste: "Bad Bunny",
    date: "05/2022",
    genre: "reggeaton",
  },
  {
    pochette:
      "https://static.fnac-static.com/multimedia/Images/FR/NR/92/40/b6/11944082/1507-1/tsp20200323170132/Nouvel-album.jpg",
    titre: "colores",
    artiste: "J Balvin",
    date: "03/2020",
    genre: "reggeaton",
  },
  {
    pochette: "https://m.media-amazon.com/images/I/81k-ZuPiioL._SS500_.jpg",
    titre: "energia lado b",
    artiste: "J Balvin",
    date: "06/2016",
    genre: "reggeaton",
  },
  {
    pochette: "https://m.media-amazon.com/images/I/71u5qaVO+AL._SL1500_.jpg",
    titre: "oasis",
    artiste: "J Balvin & Bad Bunny",
    date: "06/2019",
    genre: "reggeaton",
  },
  {
    pochette:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/J._Balvin_Vibras.svg/800px-J._Balvin_Vibras.svg.png",
    titre: "vibras",
    artiste: "J Balvin",
    date: "05/2018",
    genre: "reggeaton",
  },
  {
    pochette:
      "https://i.discogs.com/TI_7s4WP8dBt7B5WCOWNXRFkECCPplrgFGIsjiD9rl4/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE2Mjg0/MTcyLTE2MDY1NzA3/OTQtMTkwOC5qcGVn.jpeg",
    titre: "kingdom in blue",
    artiste: "Kupla",
    date: "01/2020",
    genre: "lofi",
  },
  {
    pochette:
      "https://i.discogs.com/p2KsYlgTMZchrseyr1eNTt5aQjvt98eIzr-1ibQ1HJ0/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE1OTA4/MDU0LTE2Mjc3MTc3/NzQtMzA2Mi5qcGVn.jpeg",
    titre: "life form",
    artiste: "Kupla",
    date: "07/2020",
    genre: "lofi",
  },
  {
    pochette:
      "https://is5-ssl.mzstatic.com/image/thumb/Music114/v4/6d/d6/ca/6dd6cafc-bad9-fdb3-8f58-65324bfb2930/cover.jpg/600x600bf-60.jpg",
    titre: "melody mountain",
    artiste: "Kupla",
    date: "04/2021",
    genre: "lofi",
  },
  {
    pochette:
      "https://i.scdn.co/image/ab67616d0000b27364fffb19cb8ad004da99dc7d",
    titre: "feelin better",
    artiste: "Pandrezz",
    date: "09/2021",
    genre: "lofi",
  },
  {
    pochette: "https://i1.sndcdn.com/artworks-000422818068-hodj4u-t500x500.jpg",
    titre: "hometown",
    artiste: "Pandrezz & Nymano",
    date: "09/2021",
    genre: "lofi",
  },
  {
    pochette:
      "https://e-cdn-images.dzcdn.net/images/cover/aef355da09528fdb45ca9954fc7260b1/264x264-000000-80-0-0.jpg",
    titre: "mithril",
    artiste: "Pandrezz",
    date: "08/2018",
    genre: "lofi",
  },
  {
    pochette:
      "https://i.scdn.co/image/ab67616d0000b273678a64aa6d061d9bdb38bf59",
    titre: "zzccmxtp",
    artiste: "Pandrezz & Kronomuzik & Ronare",
    date: "06/2022",
    genre: "rap",
  },
  // ---
  {
    pochette:
      "https://e-cdn-images.dzcdn.net/images/cover/e49d2d3cbfec11122129a5a2f03b5a01/264x264-000000-80-0-0.jpg",
    titre: "exotigaz",
    artiste: "A.CHAL",
    date: "12/2018",
    genre: "rap",
  },
  {
    pochette:
      "https://e-cdn-images.dzcdn.net/images/cover/fef4ff195f9a0966324056ed20c87823/264x264-000000-80-0-0.jpg",
    titre: "don dada mixtape vol 1",
    artiste: "Alpha Wann",
    date: "12/2020",
    genre: "rap",
  },
  {
    pochette:
      "https://e-cdn-images.dzcdn.net/images/cover/aa0f2a3f522ea12e55b2c277abc787a1/264x264-000000-80-0-0.jpg",
    titre: "double hélice 2",
    artiste: "Caballero & JeanJass",
    date: "05/2017",
    genre: "rap",
  },
  {
    pochette:
      "https://e-cdn-images.dzcdn.net/images/cover/a9b62c8f77bb3c29a3ee25bb21d803af/264x264-000000-80-0-0.jpg",
    titre: "double hélice 3",
    artiste: "Caballero & JeanJass",
    date: "06/2018",
    genre: "rap",
  },
  {
    pochette:
      "https://e-cdn-images.dzcdn.net/images/cover/1a0562f75c4ea8a18718faebba0c9d2b/264x264-000000-80-0-0.jpg",
    titre: "high & fines herbes",
    artiste: "Caballero & JeanJass",
    date: "04/2020",
    genre: "rap",
  },
  {
    pochette:
      "https://e-cdn-images.dzcdn.net/images/cover/c1cceacc1a9c8330ecd3486f162552e1/264x264-000000-80-0-0.jpg",
    titre: "osito",
    artiste: "Caballero",
    date: "04/2022",
    genre: "rap",
  },
  // ---
  {
    pochette:
      "https://e-cdn-images.dzcdn.net/images/cover/1fa8c498782fad62c62fd92d80d4633c/264x264-000000-80-0-0.jpg",
    titre: "<|°_°|>",
    artiste: "Caravan Palace",
    date: "10/2015",
    genre: "electro swing",
  },
  {
    pochette:
      "https://e-cdn-images.dzcdn.net/images/cover/a98136b2f462f776889d86be045dc847/264x264-000000-80-0-0.jpg",
    titre: "chronologie",
    artiste: "Caravan Palace",
    date: "08/2019",
    genre: "electro swing",
  },
  // ---
  {
    pochette:
      "https://e-cdn-images.dzcdn.net/images/cover/ef9df6b09499789f71bf2c0734cba6b3/264x264-000000-80-0-0.jpg",
    titre: "kmt",
    artiste: "Gazo",
    date: "07/2022",
    genre: "rap",
  },
  {
    pochette:
      "https://e-cdn-images.dzcdn.net/images/cover/d2cba0d91b2c02b7bd364186c4e64cf0/264x264-000000-80-0-0.jpg",
    titre: "1994",
    artiste: "Hamza",
    date: "10/2017",
    genre: "rap",
  },
  {
    pochette:
      "https://e-cdn-images.dzcdn.net/images/cover/d8862cadf3922c62379a8dbe1273465c/264x264-000000-80-0-0.jpg",
    titre: "140 bpm 2",
    artiste: "Hamza",
    date: "02/2021",
    genre: "rap",
  },
  {
    pochette:
      "https://e-cdn-images.dzcdn.net/images/cover/dae82fdd9fc3e2b814214a882fc0ebe5/264x264-000000-80-0-0.jpg",
    titre: "santa sauce 2",
    artiste: "Hamza",
    date: "12/2019",
    genre: "rap",
  },
  {
    pochette:
      "https://e-cdn-images.dzcdn.net/images/cover/886b92072daf24d2e70b47b14e99b01c/264x264-000000-80-0-0.jpg",
    titre: "140 bpm",
    artiste: "Hamza",
    date: "05/2020",
    genre: "rap",
  },
  {
    pochette:
      "https://e-cdn-images.dzcdn.net/images/cover/0101ecd931548845632aa5f6da728588/264x264-000000-80-0-0.jpg",
    titre: "paradise",
    artiste: "Hamza",
    date: "03/2019",
    genre: "rap",
  },
  // ---
  {
    pochette:
      "https://e-cdn-images.dzcdn.net/images/cover/6986cd7fa20ca76fe5871a9d0ee8b821/264x264-000000-80-0-0.jpg",
    titre: "horizon vertical",
    artiste: "Heuss L'enfoiré & Vald",
    date: "12/2020",
    genre: "rap",
  },
  {
    pochette:
      "https://e-cdn-images.dzcdn.net/images/cover/f968eb506868df5736521217bb87ccc7/264x264-000000-80-0-0.jpg",
    titre: "l'étrange histoire de mr.anderson",
    artiste: "Laylow",
    date: "07/2021",
    genre: "rap",
  },
  {
    pochette:
      "https://e-cdn-images.dzcdn.net/images/cover/6cebb13caf6dae96d49f35d856a34226/264x264-000000-80-0-0.jpg",
    titre: "trinity",
    artiste: "Laylow",
    date: "02/2020",
    genre: "rap",
  },
  {
    pochette:
      "https://e-cdn-images.dzcdn.net/images/cover/3722b6f876813ecf4bdf75443bf02da1/264x264-000000-80-0-0.jpg",
    titre: "dans la légende",
    artiste: "PNL",
    date: "09/2016",
    genre: "rap",
  },
  // ---
  {
    pochette:
      "https://e-cdn-images.dzcdn.net/images/cover/544d04807869e82b2ecc943d006cf25c/264x264-000000-80-0-0.jpg",
    titre: "where u are",
    artiste: "Throttle",
    date: "10/2019",
    genre: "electro",
  },
  {
    pochette:
      "https://e-cdn-images.dzcdn.net/images/cover/52dddb5f55ea1ea2e93866ed16a704f0/264x264-000000-80-0-0.jpg",
    titre: "scaled and icy",
    artiste: "Twenty One Pilots",
    date: "05/2021",
    genre: "pop",
  },
  // ---
  {
    pochette:
      "https://e-cdn-images.dzcdn.net/images/cover/3455d2d7101ec09f01103c2e4104a81c/264x264-000000-80-0-0.jpg",
    titre: "xeu",
    artiste: "Vald",
    date: "02/2018",
    genre: "rap",
  },
  {
    pochette:
      "https://e-cdn-images.dzcdn.net/images/cover/4b7d9121e8684cf68e01769fa81b2e39/264x264-000000-80-0-0.jpg",
    titre: "ce monde est cruel",
    artiste: "Vald",
    date: "10/2019",
    genre: "rap",
  },
  {
    pochette:
      "https://e-cdn-images.dzcdn.net/images/cover/c0755944d17141e4c66ad00a9d1a15a8/264x264-000000-80-0-0.jpg",
    titre: "v",
    artiste: "Vald",
    date: "02/2022",
    genre: "rap",
  },
  {
    pochette:
      "https://e-cdn-images.dzcdn.net/images/cover/ca24f06bf5082111f76d1318ba32736e/264x264-000000-80-0-0.jpg",
    titre: "akimbo",
    artiste: "Ziak",
    date: "11/2021",
    genre: "rap",
  },
];

export default TableauAlbums;
