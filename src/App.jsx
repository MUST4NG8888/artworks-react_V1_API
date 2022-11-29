import { useEffect, useState } from "react";
import "./App.css";
import getData from "./utility/getData";
import Gallery from "./components/Gallery.jsx";

function App() {
  
  const result = [
		{
			"id": "57726e92edc2cb3880b76e06",
			"title": "Portrait of Picasso",
			"url": null,
			"artistUrl": "amedeo-modigliani",
			"artistName": "Amedeo Modigliani",
			"artistId": "57726d7dedc2cb3880b47cd4",
			"completitionYear": 1915,
			"width": 457,
			"image": "https://uploads4.wikiart.org/images/amedeo-modigliani/portrait-of-picasso-1915.jpg!Large.jpg",
			"height": 600
		},
		{
			"id": "57726e92edc2cb3880b76e1a",
			"title": "Portrait of Picasso",
			"url": null,
			"artistUrl": "amedeo-modigliani",
			"artistName": "Amedeo Modigliani",
			"artistId": "57726d7dedc2cb3880b47cd4",
			"completitionYear": 1915,
			"width": 357,
			"image": "https://uploads6.wikiart.org/images/amedeo-modigliani/portrait-of-picasso-1915-1.jpg!Large.jpg",
			"height": 600
		},
		{
			"id": "57727183edc2cb3880c1b682",
			"title": "Portrait of Pablo Picasso",
			"url": null,
			"artistUrl": "juan-gris",
			"artistName": "Juan Gris",
			"artistId": "57726d82edc2cb3880b48710",
			"completitionYear": 1912,
			"width": 494,
			"image": "https://uploads2.wikiart.org/images/juan-gris/portrait-of-pablo-picasso-1912.jpg!Large.jpg",
			"height": 600
		},
		{
			"id": "577273a2edc2cb3880c93181",
			"title": "Portrait of Picasso",
			"url": null,
			"artistUrl": "salvador-dali",
			"artistName": "Salvador Dali",
			"artistId": "57726d84edc2cb3880b48b8d",
			"completitionYear": 1947,
			"width": 484,
			"image": "https://uploads4.wikiart.org/images/salvador-dali/portrait-of-picasso.jpg!Large.jpg",
			"height": 600
		},
		{
			"id": "577273f8edc2cb3880ca555f",
			"title": "\"Tricorne\" (study)",
			"url": null,
			"artistUrl": "pablo-picasso",
			"artistName": "Pablo Picasso",
			"artistId": "57726d84edc2cb3880b48c4d",
			"completitionYear": 1919,
			"width": 582,
			"image": "https://uploads4.wikiart.org/images/pablo-picasso/tricorne-study-1919.jpg!Large.jpg",
			"height": 600
		},
		{
			"id": "577273f8edc2cb3880ca5571",
			"title": "A bank of canal",
			"url": null,
			"artistUrl": "pablo-picasso",
			"artistName": "Pablo Picasso",
			"artistId": "57726d84edc2cb3880b48c4d",
			"completitionYear": 1905,
			"width": 648,
			"image": "https://uploads4.wikiart.org/images/pablo-picasso/a-bank-of-canal-1905.jpg",
			"height": 476
		},
		{
			"id": "577273f8edc2cb3880ca5581",
			"title": "A blue acrobat",
			"url": null,
			"artistUrl": "pablo-picasso",
			"artistName": "Pablo Picasso",
			"artistId": "57726d84edc2cb3880b48c4d",
			"completitionYear": 1929,
			"width": 480,
			"image": "https://uploads4.wikiart.org/images/pablo-picasso/a-blue-acrobat-1929.jpg!Large.jpg",
			"height": 600
		},
		{
			"id": "577273f8edc2cb3880ca5591",
			"title": "A blue house",
			"url": null,
			"artistUrl": "pablo-picasso",
			"artistName": "Pablo Picasso",
			"artistId": "57726d84edc2cb3880b48c4d",
			"completitionYear": 1902,
			"width": 472,
			"image": "https://uploads6.wikiart.org/images/pablo-picasso/a-blue-house.jpg!Large.jpg",
			"height": 600
		},
		{
			"id": "577273f8edc2cb3880ca55a1",
			"title": "A blue room (A tub)",
			"url": null,
			"artistUrl": "pablo-picasso",
			"artistName": "Pablo Picasso",
			"artistId": "57726d84edc2cb3880b48c4d",
			"completitionYear": 1901,
			"width": 726,
			"image": "https://uploads7.wikiart.org/images/pablo-picasso/a-blue-room-a-tub-1901.jpg!Large.jpg",
			"height": 600
		},
		{
			"id": "577273f8edc2cb3880ca55b1",
			"title": "A blue vase",
			"url": null,
			"artistUrl": "pablo-picasso",
			"artistName": "Pablo Picasso",
			"artistId": "57726d84edc2cb3880b48c4d",
			"completitionYear": 1903,
			"width": 249,
			"image": "https://uploads1.wikiart.org/images/pablo-picasso/a-blue-vase-1903.jpg!Large.jpg",
			"height": 600
		},
		{
			"id": "577273f8edc2cb3880ca55c1",
			"title": "A boat on the canal",
			"url": null,
			"artistUrl": "pablo-picasso",
			"artistName": "Pablo Picasso",
			"artistId": "57726d84edc2cb3880b48c4d",
			"completitionYear": 1905,
			"width": 660,
			"image": "https://uploads8.wikiart.org/images/pablo-picasso/a-boat-on-the-canal-1905.jpg",
			"height": 440
		},
		{
			"id": "577273f8edc2cb3880ca55d1",
			"title": "A boy with pipe",
			"url": null,
			"artistUrl": "pablo-picasso",
			"artistName": "Pablo Picasso",
			"artistId": "57726d84edc2cb3880b48c4d",
			"completitionYear": 1905,
			"width": 480,
			"image": "https://uploads5.wikiart.org/images/pablo-picasso/a-boy-with-pipe-1905.jpg!Large.jpg",
			"height": 600
		},
		{
			"id": "577273f8edc2cb3880ca55e1",
			"title": "A bullfight",
			"url": null,
			"artistUrl": "pablo-picasso",
			"artistName": "Pablo Picasso",
			"artistId": "57726d84edc2cb3880b48c4d",
			"completitionYear": 1934,
			"width": 750,
			"image": "https://uploads1.wikiart.org/images/pablo-picasso/a-bullfight-1934.jpg!Large.jpg",
			"height": 562
		},
		{
			"id": "577273f8edc2cb3880ca55f1",
			"title": "A bullfight",
			"url": null,
			"artistUrl": "pablo-picasso",
			"artistName": "Pablo Picasso",
			"artistId": "57726d84edc2cb3880b48c4d",
			"completitionYear": 1934,
			"width": 703,
			"image": "https://uploads3.wikiart.org/images/pablo-picasso/a-bullfight-1934-1.jpg!Large.jpg",
			"height": 600
		},
		{
			"id": "577273f8edc2cb3880ca5601",
			"title": "A child with pigeons",
			"url": null,
			"artistUrl": "pablo-picasso",
			"artistName": "Pablo Picasso",
			"artistId": "57726d84edc2cb3880b48c4d",
			"completitionYear": 1943,
			"width": 478,
			"image": "https://uploads1.wikiart.org/images/pablo-picasso/a-child-with-pigeons-1943.jpg!Large.jpg",
			"height": 600
		},
		{
			"id": "577273f8edc2cb3880ca5611",
			"title": "A dream",
			"url": null,
			"artistUrl": "pablo-picasso",
			"artistName": "Pablo Picasso",
			"artistId": "57726d84edc2cb3880b48c4d",
			"completitionYear": 1932,
			"width": 445,
			"image": "https://uploads6.wikiart.org/images/pablo-picasso/a-dream-1932.jpg!Large.jpg",
			"height": 600
		},
		{
			"id": "577273f8edc2cb3880ca5621",
			"title": "A driade (Nude in the forest)",
			"url": null,
			"artistUrl": "pablo-picasso",
			"artistName": "Pablo Picasso",
			"artistId": "57726d84edc2cb3880b48c4d",
			"completitionYear": 1908,
			"width": 338,
			"image": "https://uploads8.wikiart.org/images/pablo-picasso/a-driade-nude-in-the-forest-1908.jpg!Large.jpg",
			"height": 600
		},
		{
			"id": "577273f8edc2cb3880ca5631",
			"title": "A girl from Avignon",
			"url": null,
			"artistUrl": "pablo-picasso",
			"artistName": "Pablo Picasso",
			"artistId": "57726d84edc2cb3880b48c4d",
			"completitionYear": 1907,
			"width": 462,
			"image": "https://uploads0.wikiart.org/images/pablo-picasso/a-girl-from-avignon-1907.jpg!Large.jpg",
			"height": 600
		},
		{
			"id": "577273f8edc2cb3880ca5641",
			"title": "A glass",
			"url": null,
			"artistUrl": "pablo-picasso",
			"artistName": "Pablo Picasso",
			"artistId": "57726d84edc2cb3880b48c4d",
			"completitionYear": 1911,
			"width": 308,
			"image": "https://uploads6.wikiart.org/images/pablo-picasso/a-glass-1911.jpg!Large.jpg",
			"height": 600
		},
		{
			"id": "577273f9edc2cb3880ca5651",
			"title": "A glass of absinthe",
			"url": null,
			"artistUrl": "pablo-picasso",
			"artistName": "Pablo Picasso",
			"artistId": "57726d84edc2cb3880b48c4d",
			"completitionYear": 1914,
			"width": 394,
			"image": "https://uploads0.wikiart.org/images/pablo-picasso/a-glass-of-absinthe-1914.jpg!Large.jpg",
			"height": 600
		},
		{
			"id": "577273f9edc2cb3880ca5661",
			"title": "A hat with flowers",
			"url": null,
			"artistUrl": "pablo-picasso",
			"artistName": "Pablo Picasso",
			"artistId": "57726d84edc2cb3880b48c4d",
			"completitionYear": 1940,
			"width": 484,
			"image": "https://uploads8.wikiart.org/images/pablo-picasso/a-hat-with-flowers-1940.jpg!Large.jpg",
			"height": 600
		},
		{
			"id": "577273f9edc2cb3880ca5671",
			"title": "A horsewoman",
			"url": null,
			"artistUrl": "pablo-picasso",
			"artistName": "Pablo Picasso",
			"artistId": "57726d84edc2cb3880b48c4d",
			"completitionYear": 1905,
			"width": 750,
			"image": "https://uploads2.wikiart.org/images/pablo-picasso/a-horsewoman-1905.jpg!Large.jpg",
			"height": 553
		},
		{
			"id": "577273f9edc2cb3880ca5681",
			"title": "A lamp",
			"url": null,
			"artistUrl": "pablo-picasso",
			"artistName": "Pablo Picasso",
			"artistId": "57726d84edc2cb3880b48c4d",
			"completitionYear": 1931,
			"width": 483,
			"image": "https://uploads5.wikiart.org/images/pablo-picasso/a-lamp-1931.jpg!Large.jpg",
			"height": 600
		},
		{
			"id": "577273f9edc2cb3880ca5691",
			"title": "A muse",
			"url": null,
			"artistUrl": "pablo-picasso",
			"artistName": "Pablo Picasso",
			"artistId": "57726d84edc2cb3880b48c4d",
			"completitionYear": 1935,
			"width": 748,
			"image": "https://uploads5.wikiart.org/images/pablo-picasso/a-muse-1935.jpg!Large.jpg",
			"height": 600
		},
		{
			"id": "577273f9edc2cb3880ca56a1",
			"title": "A parody of Manet's Olympia with Junyer and Picasso",
			"url": null,
			"artistUrl": "pablo-picasso",
			"artistName": "Pablo Picasso",
			"artistId": "57726d84edc2cb3880b48c4d",
			"completitionYear": 1902,
			"width": 750,
			"image": "https://uploads0.wikiart.org/images/pablo-picasso/a-parody-of-manet-s-olympia-with-junyer-and-picasso.jpg!Large.jpg",
			"height": 518
		},
		{
			"id": "577273f9edc2cb3880ca56b1",
			"title": "A reclining female nude",
			"url": null,
			"artistUrl": "pablo-picasso",
			"artistName": "Pablo Picasso",
			"artistId": "57726d84edc2cb3880b48c4d",
			"completitionYear": 1936,
			"width": 750,
			"image": "https://uploads4.wikiart.org/images/pablo-picasso/a-reclining-female-nude-1936.jpg!Large.jpg",
			"height": 600
		},
		{
			"id": "577273f9edc2cb3880ca56c1",
			"title": "A red skirt",
			"url": null,
			"artistUrl": "pablo-picasso",
			"artistName": "Pablo Picasso",
			"artistId": "57726d84edc2cb3880b48c4d",
			"completitionYear": 1901,
			"width": 500,
			"image": "https://uploads1.wikiart.org/images/pablo-picasso/a-red-skirt-1901.jpg!Large.jpg",
			"height": 600
		},
		{
			"id": "577273f9edc2cb3880ca56d1",
			"title": "A rooster",
			"url": null,
			"artistUrl": "pablo-picasso",
			"artistName": "Pablo Picasso",
			"artistId": "57726d84edc2cb3880b48c4d",
			"completitionYear": 1938,
			"width": 493,
			"image": "https://uploads8.wikiart.org/images/pablo-picasso/a-rooster-1938.jpg!Large.jpg",
			"height": 600
		},
		{
			"id": "577273f9edc2cb3880ca56e1",
			"title": "A rooster",
			"url": null,
			"artistUrl": "pablo-picasso",
			"artistName": "Pablo Picasso",
			"artistId": "57726d84edc2cb3880b48c4d",
			"completitionYear": 1938,
			"width": 427,
			"image": "https://uploads1.wikiart.org/images/pablo-picasso/a-rooster-1938-1.jpg!Large.jpg",
			"height": 600
		},
		{
			"id": "577273f9edc2cb3880ca56f1",
			"title": "The Frugal Repast",
			"url": null,
			"artistUrl": "pablo-picasso",
			"artistName": "Pablo Picasso",
			"artistId": "57726d84edc2cb3880b48c4d",
			"completitionYear": 1904,
			"width": 488,
			"image": "https://uploads3.wikiart.org/images/pablo-picasso/a-simple-meal-1904.jpg!Large.jpg",
			"height": 600
		},
		{
			"id": "577273f9edc2cb3880ca5701",
			"title": "A simple meal",
			"url": null,
			"artistUrl": "pablo-picasso",
			"artistName": "Pablo Picasso",
			"artistId": "57726d84edc2cb3880b48c4d",
			"completitionYear": 1904,
			"width": 750,
			"image": "https://uploads5.wikiart.org/images/pablo-picasso/a-simple-meal-1904-1.jpg!Large.jpg",
			"height": 561
		},
		{
			"id": "577273f9edc2cb3880ca5711",
			"title": "A spanish couple in front of inn",
			"url": null,
			"artistUrl": "pablo-picasso",
			"artistName": "Pablo Picasso",
			"artistId": "57726d84edc2cb3880b48c4d",
			"completitionYear": 1900,
			"width": 745,
			"image": "https://uploads4.wikiart.org/images/pablo-picasso/a-spanish-couple-in-front-of-inn-1900.jpg!Large.jpg",
			"height": 600
		},
		{
			"id": "577273f9edc2cb3880ca5721",
			"title": "Abduction (Nessus and Deianeira)",
			"url": null,
			"artistUrl": "pablo-picasso",
			"artistName": "Pablo Picasso",
			"artistId": "57726d84edc2cb3880b48c4d",
			"completitionYear": 1920,
			"width": 750,
			"image": "https://uploads2.wikiart.org/images/pablo-picasso/abduction-nessus-and-deianeira-1920.jpg!Large.jpg",
			"height": 535
		},
		{
			"id": "577273f9edc2cb3880ca5731",
			"title": "Abduction (Nessus and Deianeira)",
			"url": null,
			"artistUrl": "pablo-picasso",
			"artistName": "Pablo Picasso",
			"artistId": "57726d84edc2cb3880b48c4d",
			"completitionYear": 1920,
			"width": 750,
			"image": "https://uploads4.wikiart.org/images/pablo-picasso/abduction-nessus-and-deianeira-1920-1.jpg!Large.jpg",
			"height": 573
		},
		{
			"id": "577273f9edc2cb3880ca5741",
			"title": "Academical study",
			"url": null,
			"artistUrl": "pablo-picasso",
			"artistName": "Pablo Picasso",
			"artistId": "57726d84edc2cb3880b48c4d",
			"completitionYear": 1895,
			"width": 438,
			"image": "https://uploads1.wikiart.org/images/pablo-picasso/academical-study.jpg!Large.jpg",
			"height": 600
		},
		{
			"id": "577273f9edc2cb3880ca5751",
			"title": "Acrobat",
			"url": null,
			"artistUrl": "pablo-picasso",
			"artistName": "Pablo Picasso",
			"artistId": "57726d84edc2cb3880b48c4d",
			"completitionYear": 1922,
			"width": 426,
			"image": "https://uploads6.wikiart.org/images/pablo-picasso/acrobat-1922.jpg!Large.jpg",
			"height": 600
		},
		{
			"id": "577273f9edc2cb3880ca5761",
			"title": "Acrobat",
			"url": null,
			"artistUrl": "pablo-picasso",
			"artistName": "Pablo Picasso",
			"artistId": "57726d84edc2cb3880b48c4d",
			"completitionYear": 1930,
			"width": 477,
			"image": "https://uploads6.wikiart.org/images/pablo-picasso/acrobat-1930.jpg!Large.jpg",
			"height": 600
		},
		{
			"id": "577273f9edc2cb3880ca5771",
			"title": "Acrobat and young harlequin",
			"url": null,
			"artistUrl": "pablo-picasso",
			"artistName": "Pablo Picasso",
			"artistId": "57726d84edc2cb3880b48c4d",
			"completitionYear": 1905,
			"width": 334,
			"image": "https://uploads8.wikiart.org/images/pablo-picasso/acrobat-and-young-harlequin-1905.jpg!Large.jpg",
			"height": 600
		},
		{
			"id": "577273f9edc2cb3880ca5781",
			"title": "Advertisement for 'Lecitina Agell'",
			"url": null,
			"artistUrl": "pablo-picasso",
			"artistName": "Pablo Picasso",
			"artistId": "57726d84edc2cb3880b48c4d",
			"completitionYear": 1902,
			"width": 391,
			"image": "https://uploads3.wikiart.org/images/pablo-picasso/advertisement-for-lecitina-agell-1902.jpg",
			"height": 243
		},
		{
			"id": "577273f9edc2cb3880ca5791",
			"title": "Advertisement for tavern \"Four cats\"",
			"url": null,
			"artistUrl": "pablo-picasso",
			"artistName": "Pablo Picasso",
			"artistId": "57726d84edc2cb3880b48c4d",
			"completitionYear": 1897,
			"width": 750,
			"image": "https://uploads6.wikiart.org/images/pablo-picasso/advertisement-for-tavern-four-cats-1897.jpg!Large.jpg",
			"height": 495
		},
		{
			"id": "577273f9edc2cb3880ca57a1",
			"title": "Algerian women",
			"url": null,
			"artistUrl": "pablo-picasso",
			"artistName": "Pablo Picasso",
			"artistId": "57726d84edc2cb3880b48c4d",
			"completitionYear": 1955,
			"width": 362,
			"image": "https://uploads3.wikiart.org/images/pablo-picasso/algerian-women-1955.jpg",
			"height": 544
		},
		{
			"id": "577273faedc2cb3880ca57b1",
			"title": "Algerian women (Delacroix)",
			"url": null,
			"artistUrl": "pablo-picasso",
			"artistName": "Pablo Picasso",
			"artistId": "57726d84edc2cb3880b48c4d",
			"completitionYear": 1955,
			"width": 750,
			"image": "https://uploads5.wikiart.org/images/pablo-picasso/algerian-women-delacroix-1955.jpg!Large.jpg",
			"height": 584
		},
		{
			"id": "577273faedc2cb3880ca57c1",
			"title": "Alicante, view of boats",
			"url": null,
			"artistUrl": "pablo-picasso",
			"artistName": "Pablo Picasso",
			"artistId": "57726d84edc2cb3880b48c4d",
			"completitionYear": 1895,
			"width": 750,
			"image": "https://uploads7.wikiart.org/images/pablo-picasso/alicante-view-of-boats.jpg!Large.jpg",
			"height": 472
		},
		{
			"id": "577273faedc2cb3880ca57d1",
			"title": "An actor",
			"url": null,
			"artistUrl": "pablo-picasso",
			"artistName": "Pablo Picasso",
			"artistId": "57726d84edc2cb3880b48c4d",
			"completitionYear": 1904,
			"width": 346,
			"image": "https://uploads7.wikiart.org/images/pablo-picasso/an-actor-1904.jpg!Large.jpg",
			"height": 600
		},
		{
			"id": "577273faedc2cb3880ca57e1",
			"title": "An artist",
			"url": null,
			"artistUrl": "pablo-picasso",
			"artistName": "Pablo Picasso",
			"artistId": "57726d84edc2cb3880b48c4d",
			"completitionYear": 1963,
			"width": 440,
			"image": "https://uploads8.wikiart.org/images/pablo-picasso/an-artist-1963.jpg!Large.jpg",
			"height": 600
		},
		{
			"id": "577273faedc2cb3880ca57f1",
			"title": "An artist",
			"url": null,
			"artistUrl": "pablo-picasso",
			"artistName": "Pablo Picasso",
			"artistId": "57726d84edc2cb3880b48c4d",
			"completitionYear": 1967,
			"width": 467,
			"image": "https://uploads8.wikiart.org/images/pablo-picasso/an-artist-1967.jpg!Large.jpg",
			"height": 600
		},
		{
			"id": "577273faedc2cb3880ca5801",
			"title": "Angel Fernandez de Soto and his Friend",
			"url": null,
			"artistUrl": "pablo-picasso",
			"artistName": "Pablo Picasso",
			"artistId": "57726d84edc2cb3880b48c4d",
			"completitionYear": 1903,
			"width": 377,
			"image": "https://uploads1.wikiart.org/images/pablo-picasso/angel-fernandez-de-soto-and-his-friend-1903.jpg!Large.jpg",
			"height": 600
		},
		{
			"id": "577273faedc2cb3880ca5811",
			"title": "Angel Fernandez de Soto with woman",
			"url": null,
			"artistUrl": "pablo-picasso",
			"artistName": "Pablo Picasso",
			"artistId": "57726d84edc2cb3880b48c4d",
			"completitionYear": 1903,
			"width": 432,
			"image": "https://uploads1.wikiart.org/images/pablo-picasso/angel-fernandez-de-soto-with-woman.jpg!Large.jpg",
			"height": 600
		},
		{
			"id": "577273faedc2cb3880ca5821",
			"title": "Antes",
			"url": null,
			"artistUrl": "pablo-picasso",
			"artistName": "Pablo Picasso",
			"artistId": "57726d84edc2cb3880b48c4d",
			"completitionYear": 1906,
			"width": 340,
			"image": "https://uploads8.wikiart.org/images/pablo-picasso/antes.jpg!Large.jpg",
			"height": 600
		},
		{
			"id": "577273faedc2cb3880ca5831",
			"title": "Apple",
			"url": null,
			"artistUrl": "pablo-picasso",
			"artistName": "Pablo Picasso",
			"artistId": "57726d84edc2cb3880b48c4d",
			"completitionYear": 1914,
			"width": 518,
			"image": "https://uploads3.wikiart.org/images/pablo-picasso/apple-1914.jpg",
			"height": 380
		},
		{
			"id": "577273faedc2cb3880ca5841",
			"title": "Armchair 'California'",
			"url": null,
			"artistUrl": "pablo-picasso",
			"artistName": "Pablo Picasso",
			"artistId": "57726d84edc2cb3880b48c4d",
			"completitionYear": 1956,
			"width": 750,
			"image": "https://uploads0.wikiart.org/images/pablo-picasso/armchair-california-1956.jpg!Large.jpg",
			"height": 569
		},
		{
			"id": "577273faedc2cb3880ca5851",
			"title": "Artist and his model",
			"url": null,
			"artistUrl": "pablo-picasso",
			"artistName": "Pablo Picasso",
			"artistId": "57726d84edc2cb3880b48c4d",
			"completitionYear": 1926,
			"width": 750,
			"image": "https://uploads1.wikiart.org/images/pablo-picasso/artist-and-his-model-1926.jpg!Large.jpg",
			"height": 506
		},
		{
			"id": "577273faedc2cb3880ca5861",
			"title": "Artist's mother",
			"url": null,
			"artistUrl": "pablo-picasso",
			"artistName": "Pablo Picasso",
			"artistId": "57726d84edc2cb3880b48c4d",
			"completitionYear": 1896,
			"width": 395,
			"image": "https://uploads5.wikiart.org/images/pablo-picasso/artist-s-mother-1896.jpg!Large.jpg",
			"height": 600
		},
		{
			"id": "577273faedc2cb3880ca5871",
			"title": "Artist's son",
			"url": null,
			"artistUrl": "pablo-picasso",
			"artistName": "Pablo Picasso",
			"artistId": "57726d84edc2cb3880b48c4d",
			"completitionYear": 1925,
			"width": 408,
			"image": "https://uploads2.wikiart.org/images/pablo-picasso/artist-s-son-1925.jpg!Large.jpg",
			"height": 600
		},
		{
			"id": "577273faedc2cb3880ca5881",
			"title": "Artist's studio",
			"url": null,
			"artistUrl": "pablo-picasso",
			"artistName": "Pablo Picasso",
			"artistId": "57726d84edc2cb3880b48c4d",
			"completitionYear": 1916,
			"width": 439,
			"image": "https://uploads5.wikiart.org/images/pablo-picasso/artist-s-studio-1916.jpg!Large.jpg",
			"height": 600
		},
		{
			"id": "577273faedc2cb3880ca5891",
			"title": "Artist's studio on street La Boetie",
			"url": null,
			"artistUrl": "pablo-picasso",
			"artistName": "Pablo Picasso",
			"artistId": "57726d84edc2cb3880b48c4d",
			"completitionYear": 1920,
			"width": 459,
			"image": "https://uploads7.wikiart.org/images/pablo-picasso/artist-s-studio-on-street-la-boetie-1920.jpg!Large.jpg",
			"height": 600
		},
		{
			"id": "577273faedc2cb3880ca58a1",
			"title": "Ascet",
			"url": null,
			"artistUrl": "pablo-picasso",
			"artistName": "Pablo Picasso",
			"artistId": "57726d84edc2cb3880b48c4d",
			"completitionYear": 1903,
			"width": 401,
			"image": "https://uploads4.wikiart.org/images/pablo-picasso/ascet-1903.jpg!Large.jpg",
			"height": 600
		},
		{
			"id": "577273faedc2cb3880ca58b1",
			"title": "At \"Lapin Agile\" (Harlequin with Glass)",
			"url": null,
			"artistUrl": "pablo-picasso",
			"artistName": "Pablo Picasso",
			"artistId": "57726d84edc2cb3880b48c4d",
			"completitionYear": 1905,
			"width": 595,
			"image": "https://uploads7.wikiart.org/images/pablo-picasso/at-lapin-agile-harlequin-with-glass-1905.jpg!Large.jpg",
			"height": 600
		},
		{
			"id": "577273faedc2cb3880ca58c1",
			"title": "Au bon marche",
			"url": null,
			"artistUrl": "pablo-picasso",
			"artistName": "Pablo Picasso",
			"artistId": "57726d84edc2cb3880b48c4d",
			"completitionYear": 1913,
			"width": 750,
			"image": "https://uploads3.wikiart.org/images/pablo-picasso/au-bon-marche-1913.jpg!Large.jpg",
			"height": 495
		},
		{
			"id": "577273faedc2cb3880ca58d1",
			"title": "Bacchic scene with minotaur",
			"url": null,
			"artistUrl": "pablo-picasso",
			"artistName": "Pablo Picasso",
			"artistId": "57726d84edc2cb3880b48c4d",
			"completitionYear": 1933,
			"width": 436,
			"image": "https://uploads7.wikiart.org/images/pablo-picasso/bacchic-scene-with-minotaur-1933.jpg",
			"height": 367
		}
  ]

  
  const [data, setData] = useState(null);



  useEffect(() => {
    const init = async () => {
      // setData(await getData());
      setData(result)
    };
    init();
  }, []);

  return <>{data && <Gallery data={data} />}</>;
}

export default App;
