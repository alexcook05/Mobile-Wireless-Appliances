import Country from "../models/countries";
import Hotel from "../models/hotels";

// Create array of country classes with data
export const COUNTRIES = [
  new Country("c1", "Italy", "#5bae61"), 
  new Country("c2", "Greece", "#5eb5fd"), 
  new Country ("c3", "Canada", "#c12727"), 
  new Country("c4", "Spain", "#e19f43"), 
  new Country("c5", "Sweden", "#eb93ff"), 
  new Country("c6", "Iceland", "#36f1bc"), 
  new Country("c7", "Netherlands", "#1e1eff"), 
  new Country("c8", "Japan", "#ffffff"), 
  new Country("c9", "France", "#be1919"), 
  new Country("c10", "Switzerland", "#673ab7"), 
];

// Create array of hotel classes with data
export const HOTELS = [
  new Hotel(
    "h1",
    "c1",
    "Rome Cavalieri, A Waldorf Astoria Hotel",
    400,
    1963,
    4.6,
    "https://lh3.googleusercontent.com/p/AF1QipMaSE5IQBJuseqS030-ss29Vk5chpULq3hezFiU=s680-w680-h510-rw"
  ),
  new Hotel(
    "h2",
    "c1",
    "Hotel Pitti Palace al Ponte Vecchio",
    170,
    1975,
    4.6,
    "https://lh3.googleusercontent.com/proxy/gU1VOlV6dLK1zLZGM3KC29Gzxe5mqPCOuNdR92ocwS7s66I1D1lG0ee2Ly4TjEUeinUseM_ZJ7Kw1SsPcdWhi9mIayIsefxPGpDw0TiA3EU8NzB6z4sM9looT6WYhTzAvKSWpi45IHP4hApMwW8gk8fsK-M1zbU=s680-w680-h510-rw"
  ),
  new Hotel(
    "h3",
    "c2",
    "King George, a Luxury Collection Hotel",
    490,
    1930,
    4.7,
    "https://lh3.googleusercontent.com/p/AF1QipO9n-RvRZyrOn410q31ZdcCHdRpK32vRlOfNLd6=s680-w680-h510-rw"
  ),
  new Hotel(
    "h4",
    "c2",
    "Four Seasons Astir Palace Hotel Athens",
    690,
    1960,
    4.8,
    "https://lh3.googleusercontent.com/p/AF1QipMNgLIeQOV0rpvMbucsWtVGRMQS6NXkOFz7lzzt=s680-w680-h510-rw"
  ),
  new Hotel(
    "h5",
    "c3",
    "Pan Pacific Vancouver",
    200,
    1986,
    4.4,
    "https://lh3.googleusercontent.com/p/AF1QipMRA5hAF2IsqCWQhyt3IFLak6kZmQXjiOmkBO-L=s680-w680-h510-rw"
  ),
  new Hotel(
    "h6",
    "c3",
    "Fairmont Le Château Frontenac",
    230,
    1893,
    4.7,
    "https://lh3.googleusercontent.com/p/AF1QipO4CrGfVnD_rJMvxs2vPVnUD6uM_CAhK3iHcWJd=s680-w680-h510-rw"
  ),
  new Hotel(
    "h7",
    "c4",
    "Marbella Club Hotel",
    1000,
    1954,
    4.7,
    "https://lh3.googleusercontent.com/proxy/qdDFjLX__OIlnRtBwjXFR-ZkXPagNvuHidX1qBpgVZWjKF1y5ZGCv3PnngsdRb2c3vmsU83iVSwiWsIHrP1wOCC2hoV4uHL9TjBO6T5dAiSLIxyJqBK6EC0GQ6qe34t768WNeoHg9z-gdJ15PerwzBnWAIQxnp4=s680-w680-h510-rw"
  ),
  new Hotel(
    "h8",
    "c4",
    "Mandarin Oriental Ritz",
    750,
    1910,
    4.7,
    "https://lh3.googleusercontent.com/p/AF1QipMwnL9A8KAj75ZSPrhQjp7uUQUwU9vTx7dDfLJQ=s680-w680-h510-rw"
  ),
  new Hotel(
    "h9",
    "c5",
    "Grand Hôtel",
    325,
    1874,
    4.6,
    "https://lh3.googleusercontent.com/p/AF1QipONSjMvi1C0cO5c9uMDmMnsRNYbtkS8iQEw08cF=s680-w680-h510-rw"
  ),
  new Hotel(
    "h10",
    "c5",
    "Nobis Hotel Stockholm",
    225,
    2010,
    4.4,
    "https://lh3.googleusercontent.com/gps-cs-s/AHVAweo4U7YN03u8e1YaaB3_IOpnTyYsWZg6ArVoVxx9zqTJl0Ol2c-C4rpiwMc2LIKyLzSpJMwUpu9Mb0VHTRFe4Yr3_ppPK5IHC-tYg6ozjcd6Q504_fypfS_kSUIdQPI9_hhybANVKw=s680-w680-h510-rw"
  ),
  new Hotel(
    "h11",
    "c6",
    "The Retreat at Blue Lagoon Iceland",
    1800,
    2018,
    4.6,
    "https://images.adsttc.com/media/images/62d9/3860/a533/f01b/c45f/be2b/large_jpg/the-retreat-at-blue-lagoon-iceland-basalt-architects_2.jpg?1658403038"
  ),
  new Hotel(
    "h12",
    "c6",
    "The Reykjavik EDITION",
    440,
    2021,
    4.5,
    "https://lh3.googleusercontent.com/p/AF1QipObpEMrEev3MUeFkgVkeHxGBAhJo010av2ERPOe=s680-w680-h510-rw"
  ),
  new Hotel(
    "h13",
    "c7",
    "Sofitel Legend The Grand Amsterdam",
    600,
    1992,
    4.7,
    "https://lh3.googleusercontent.com/p/AF1QipOYeS6hvQdtXJ1Ndw8Ztb9A0JsH6Tm5rLxSNeaW=s680-w680-h510-rw"
  ),
  new Hotel(
    "h14",
    "c7",
    "Hotel TwentySeven",
    1100,
    2017,
    4.7,
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/559981856.jpg?k=1e617d763e03970fd4042b5b526ef1dfb3bdb3940a1cbbe2cc965218e8a21114&o="
  ),
  new Hotel(
    "h15",
    "c8",
    "Six Senses Kyoto",
    750,
    2024,
    4.6,
    "https://lh3.googleusercontent.com/p/AF1QipO0psY0AG-y_Dmkr14JDnS_EeMxb5JbFIyHf99l=s680-w680-h510-rw"
  ),
  new Hotel(
    "h16",
    "c8",
    "Aman Tokyo",
    2000,
    2014,
    4.4,
    "https://foresttravel.com/wp-content/uploads/2024/08/aman_tokyo_japan_-_fb_the_cafe_by_aman_forest_exterior.jpg"
  ),
  new Hotel(
    "h17",
    "c9",
    "Hôtel Martinez",
    1400,
    1929,
    4.5,
    "https://lh3.googleusercontent.com/p/AF1QipMvvkylOVAB6opzllNoSMn_SWIcbFdDmQ451TNT=s680-w680-h510-rw"
  ),
  new Hotel(
    "h18",
    "c9",
    "Le Negresco",
    640,
    1913,
    4.6,
    "https://lh3.googleusercontent.com/p/AF1QipNY96fw3dtE8MSvBvrlZq7oe1eqTGGo3h408roK=s680-w680-h510-rw"
  ),
  new Hotel(
    "h19",
    "c10",
    "Park Hotel Vitznau",
    1700,
    1903,
    4.5,
    "https://lh3.googleusercontent.com/p/AF1QipOasDTAILsW99ocEYh1PltGWgMDOXIBvIkmq1SR=s680-w680-h510-rw"
  ),
  new Hotel(
    "h20",
    "c10",
    "Badrutt's Palace Hotel St. Moritz",
    1000,
    1896,
    4.7,
    "https://lh3.googleusercontent.com/p/AF1QipPAlawjirb2NK7MLOvPbkufL9dFQ4I4kvM5hZ2_=s680-w680-h510-rw"
  ),
];
