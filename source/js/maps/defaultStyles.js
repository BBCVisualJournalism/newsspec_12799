define({
	streetLevel: {
		styles: [
			{
				'featureType': 'administrative',
				'elementType': 'geometry',
				'stylers': [{ 'color': '#fdeac4' },
					{ 'visibility': 'simplified' }]
			},{
			  'featureType': 'administrative.country',
			  'elementType': 'geometry.stroke',
			  'stylers': [
			    { 'visibility': 'on' },
			    { 'color': '#666666' },
			    { 'weight': 1.5 }
			  ]
			},
			{
				'featureType': 'landscape.natural',
				'stylers': [
					{ 'color': '#FCEAC4' }
				]
			},
			{
				'featureType': 'landscape.man_made',
				'stylers': [
					{ 'color': '#e6d2aa' }
				]
			},
			{
				'featureType': 'water',
				'stylers': [
					{ 'color': '#BCCBDC' }
				]
			},
			{
				'featureType': 'poi',
				'stylers': [
					{ 'color': '#B6C970' },
					{ 'visibility': 'on' }
				]
			},
			{
				'featureType': 'poi.park',
				'stylers': [
					{ 'color': '#B6C970' },
					{ 'visibility': 'on' }
				]
			},
			{
				'featureType': 'road.highway',
				'stylers': [
					{ 'color': '#7788BB' },
					{ 'weight': 0.4 },
					{'visibility': 'on'}
				]
			},
			{
				'featureType': 'road.arterial',
				'stylers': [
					{ 'color': '#BB7777' },
					{ 'weight': 0.4 },
					{'visibility': 'on'}
				]
			},
			{
				'featureType': 'road.local',
				'stylers': [
					{ 'color': '#bb7777' },
					{ 'weight': 0.2 },
					{'visibility': 'on'}
				]
			},
			{
				'featureType': 'transit',
				  'stylers': [
				    { 'visibility': 'on' }
				]
			},
			{
				'featureType': 'transit.line',
				  'stylers': [
				  	{ 'color': '#bbbbbb' },
				    { 'weight': 0.4 }
				]
			},
			{
				'featureType': 'poi.business',
				'stylers': [
					{ 'color': '#e6d2aa' },
					{ 'visibility': 'on' }
				]
			},
			{
				'featureType': 'poi.medical',
				'stylers': [
					{ 'color': '#e6d2aa' },
					{ 'visibility': 'on' }
				]
			},
			{
				'featureType': 'poi.government',
				'stylers': [
					{ 'color': '#b7b7b7' },
					{ 'visibility': 'on' }
				]
			},
			{
				'featureType': 'poi.school',
				'stylers': [
					{ 'color': '#e6d2aa' },
					{ 'visibility': 'on' }
				]
			},
			{
				'featureType': 'poi.attraction',
				'elementType': 'geometry',
				'stylers': [
					{ 'color': '#e6d2aa' },
					{ 'visibility': 'on' }
				]
			},
			{
				'featureType': 'poi.sports_complex',
				'stylers': [
					{ 'color': '#e6d2aa' },
					{ 'visibility': 'on' }
				]
			},
			{
				'featureType': 'road',
				'elementType': 'labels',
				'stylers': [
					{ 'visibility': 'off' }
				]
			},
			{
				'featureType': 'poi',
				'elementType': 'labels',
				'stylers': [
					{ 'visibility': 'off' }
				]
			},{
			  'featureType': 'administrative.country',
			  'elementType': 'geometry.stroke',
			  'stylers': [
			    { 'visibility': 'on' },
			    { 'color': '#787878' },
			    { 'weight': 1.5 }
			  ]
			},
			{
				'elementType': 'labels',
				'stylers': [
					{ 'color': '#808080' },
					{ 'visibility': 'off' }
				]
			}

		],
		title: 'Street level'
	},
	townLevel: {
		styles: [
			{
				'featureType': 'administrative',
				'elementType': 'geometry',
				'stylers': [
					{ 'color': '#fdeac4' },
					{ 'visibility': 'simplified' }
				]
			},
			{
				'featureType': 'landscape.natural',
				'stylers': [
					{ 'color': '#FCEAC4' }
				]
			},
			{
				'featureType': 'water',
				'stylers': [
					{ 'color': '#BCCBDC' }
				]
			},
			{
				'featureType': 'poi.park',
				'stylers': [
					{ 'color': '#B6C970' }
				]
			},
			{
				'featureType': 'road.highway',
				'stylers': [
					{ 'color': '#7788BB' },
					{ 'weight': 0.3 }
				]
			},
			{
				'featureType': 'road.arterial',
				'stylers': [
					{ 'color': '#BB7777' },
					{ 'weight': 0.2 }
				]
			},
			{
				'featureType': 'road.local',
				'stylers': [
					{ 'color': '#bb7777' },
					{ 'weight': 0.1 }
				]
			},
			{
				'featureType': 'transit.line',
				'stylers': [
				    { 'color': '#404040' },
				    { 'weight': 0.4 },
				    { 'visibility': 'off' }
				]
			},
			{
				'featureType': 'landscape.man_made',
				'stylers': [
					{ 'color': '#e6d2aa' }
				]
			},
			{
				'featureType': 'poi.business',
				'stylers': [
					{ 'color': '#e6d2aa' }
				]
			},
			{
				'featureType': 'poi.medical',
				'stylers': [
					{ 'color': '#e6d2aa' }
				]
			},
			{
				'featureType': 'poi.government',
				'stylers': [
					{ 'color': '#b7b7b7' }
				]
			},
			{
				'featureType': 'poi.school',
				'stylers': [
					{ 'color': '#e6d2aa' }
				]
			},
			{
				'featureType': 'poi.attraction',
				'elementType': 'geometry',
				'stylers': [
					{ 'color': '#e6d2aa' }
				]
			},
			{
				'featureType': 'poi.sports_complex',
				'stylers': [
					{ 'color': '#e6d2aa' }
				]
			},
			{
				'elementType': 'labels',
				'stylers': [
					{ 'color': '#808080' },
					{ 'visibility': 'off' }
				]
			}
		],
		title: 'Town level'
	},
	countryLevel: {
		styles: [
			{
			  'elementType': 'labels',
			  'stylers': [
			    { 'visibility': 'off' }
			  ]
			},{
			  'featureType': 'water',
			  'stylers': [
			    { 'visibility': 'on' },
			    { 'color': '#bbccdd' }
			  ]
			},{
			  'featureType': 'transit',
			  'stylers': [
			    { 'visibility': 'off' }
			  ]
			},{
			  'featureType': 'road',
			  'stylers': [
			    { 'visibility': 'off' }
			  ]
			},{
			  'featureType': 'poi',
			  'stylers': [
			    { 'visibility': 'off' }
			  ]
			},{
			  'featureType': 'landscape',
			  'stylers': [
			    { 'visibility': 'on' },
			    { 'color': '#e8e8e8' }
			  ]
			},{
			  'elementType': 'labels',
			  'stylers': [
			    { 'visibility': 'off' }
			  ]
			},{
			  'featureType': 'administrative',
			  'elementType': 'geometry',
			  'stylers': [
			    { 'visibility': 'off' }
			  ]
			},{
			  'featureType': 'administrative.country',
			  'elementType': 'geometry.stroke',
			  'stylers': [
			    { 'visibility': 'on' },
			    { 'color': '#b0b0b0' },
			    { 'weight': 1.5 }
			  ]
			},{
			  'featureType': 'administrative.province',
			  'stylers': [
			    { 'visibility': 'off' }
			  ]
			},			{
			  'featureType': 'administrative.locality',
			  'stylers': [
			    { 'visibility': 'off' }
			  ]
			},{
			  'featureType': 'administrative.neighborhood',
			  'stylers': [
			    { 'visibility': 'off' }
			  ]
			},{
			  'featureType': 'administrative.land_parcel',
			  'stylers': [
			    { 'visibility': 'off' }
			  ]
			},{
			  'elementType': 'labels',
			  'stylers': [
			    { 'visibility': 'off' }
			  ]
			}
		],
		title: 'Country level'
	},
	locatorNoBorders: {
		styles: [
			{
				'featureType': 'water',
				'stylers': [
					{ 'visibility': 'on' },
					{ 'color': '#9eb1c4' }
				]
			},{
				'featureType': 'transit',
				'stylers': [
					{ 'visibility': 'off' }
				]
			},{
				'featureType': 'road',
				'stylers': [
					{ 'visibility': 'off' }
				]
			},{
				'featureType': 'poi',
				'stylers': [
					{ 'visibility': 'off' }
				]
			},{
				'featureType': 'landscape',
				'stylers': [
					{ 'visibility': 'on' },
					{ 'color': '#f3f3f3' }
				]
			},{
			  'featureType': 'administrative',
			  'elementType': 'geometry',
			  'stylers': [
			    { 'visibility': 'off' }
			  ]
			},{
				'featureType': 'administrative.country',
				'elementType': 'geometry.stroke',
				'stylers': [
					{ 'visibility': 'on' },
					{ 'color': '#f3f3f3' },
					{ 'weight': 1.5 }
				]
			},{
				'featureType': 'administrative.province',
				'stylers': [
					{ 'visibility': 'off' }
				]
			},{
				'featureType': 'administrative.neighborhood',
				'stylers': [
					{ 'visibility': 'off' }
				]
			},{
				'featureType': 'administrative.land_parcel',
				'stylers': [
					{ 'visibility': 'off' }
				]
			},{
				'featureType': 'administrative',
				'elementType': 'geometry.fill',
				'stylers': [
					{ visibility: 'off' }
				]
			},{
				'elementType': 'labels',
				'stylers': [
					{ 'visibility': 'off' }
				]
			}
		],
		title: 'Locator'
	},
	newMapStyle: {
		styles: [
			{
			'featureType': 'landscape',
			'elementType': 'geometry.fill',
			'stylers': [
			  { 'visibility': 'on' },
			  { 'color': '#efeae2' }
			  // { 'color': '#f0ece6' }
			  // { 'color': '#cecece' }
			]
			},{
			'featureType': 'poi',
			'stylers': [
			  { 'visibility': 'off' }
			]
			},{
			'featureType': 'road',
			'stylers': [
			  { 'color': '#ffffff' },
			  { 'visibility': 'on' }
			]
			},{
			'featureType': 'road',
			'elementType': 'labels',
			'stylers': [
			  { 'visibility': 'off' }
			]
			},{
			'featureType': 'water',
			'stylers': [
			  { 'color': '#cfe1e4' }
			  // { 'color': '#e0eaec' }
			]
			},{
			'featureType': 'road',
			'stylers': [
			  { 'visibility': 'simplified' }
			]
			},{
			'featureType': 'transit',
			'stylers': [
			  { 'visibility': 'off' }
			]
			},{
			'featureType': 'road',
			'elementType': 'geometry.stroke',
			'stylers': [
			  { 'weight': 0.3 }
			]
			},{
			'featureType': 'road.arterial',
			'elementType': 'geometry.stroke',
			'stylers': [
			  { 'weight': 0.1 }
			]
			},{
			'featureType': 'road.local',
			'elementType': 'geometry.stroke',
			'stylers': [
			  { 'weight': 0.1 }
			]
			},{
			'featureType': 'landscape.natural',
			'elementType': 'geometry.fill',
			'stylers': [
			  { 'visibility': 'on' },
			  { 'color': '#f2f2f3' }
			]
			},{
			'featureType': 'poi',
			'elementType': 'labels',
			'stylers': [
			  { 'visibility': 'off' }
			]
			},{
			'featureType': 'poi.park',
			'stylers': [
			  { 'visibility': 'on' },
			  { 'color': '#cee2c6' }
			]
			},{
			'featureType': 'poi.school',
			'stylers': [
			  { 'color': '#d3d3d3' }
			]
			},{
			'featureType': 'poi',
			'elementType': 'labels',
			'stylers': [
			  { 'visibility': 'off' }
			]
			},{
			  'featureType': 'administrative',
			  'elementType': 'geometry',
			  'stylers': [
			    { 'visibility': 'off' }
			  ]
			},{
			  'featureType': 'administrative.country',
			  'elementType': 'geometry.stroke',
			  'stylers': [
			    { 'visibility': 'on' },
			    { 'color': '#b2b2b2' },
			    { 'weight': 0.5 }
			  ]
			},{
			  'featureType': 'administrative.province',
			  'stylers': [
			    { 'visibility': 'off' }
			  ]
			},			{
			  'featureType': 'administrative.locality',
			  'stylers': [
			    { 'visibility': 'off' }
			  ]
			},{
			  'featureType': 'administrative.neighborhood',
			  'stylers': [
			    { 'visibility': 'off' }
			  ]
			},{
			  'featureType': 'administrative.land_parcel',
			  'stylers': [
			    { 'visibility': 'off' }
			  ]
			},
			{
				'elementType': 'labels',
				'stylers': [
					{ 'color': '#808080' },
					{ 'visibility': 'off' }
				]
				// 'bbcNoToggle': true
			}
		],
		title: 'New style'
	},
	bespokeClean: {
		styles: [
				  {
				    'featureType': 'water',
				    'stylers': [
				      { 'hue': '#00fff7' },
				      { 'saturation': -74 },
				      { 'lightness': -6 }
				    ]
				  },{
				    'featureType': 'landscape',
				    'elementType': 'geometry',
				    'stylers': [
				      { 'visibility': 'on' },
				      { 'color': '#ffffff' }
				    ]
				  },{
				    'featureType': 'poi.park',
				    'stylers': [
				      { 'visibility': 'off' }
				    ]
				  },{
				    'featureType': 'administrative.province',
				    'elementType': 'geometry.stroke',
				    'stylers': [
				      { 'visibility': 'off' }
				    ]
				  },{
				    'featureType': 'administrative',
				    'elementType': 'labels',
				    'stylers': [
				      { 'visibility': 'off' }
				    ]
				  },{
				    'featureType': 'road',
				    'elementType': 'labels',
				    'stylers': [
				      { 'visibility': 'off' }
				    ]
				  },{
				    'featureType': 'road.local',
				    'elementType': 'geometry',
				    'stylers': [
				      { 'visibility': 'on' },
				      { 'color': '#808080' },
				      { 'weight': 0.2 },
				      { 'lightness': 72 }
				    ]
				  },{
				    'featureType': 'road.arterial',
				    'elementType': 'geometry',
				    'stylers': [
				      { 'visibility': 'on' },
				      { 'color': '#808080' },
				      { 'weight': 0.2 },
				      { 'lightness': 72 }
				    ]
				  },{
				    'featureType': 'road.highway',
				    'elementType': 'geometry',
				    'stylers': [
				      { 'visibility': 'on' },
				      { 'color': '#808080' },
				      { 'weight': 0.2 },
				      { 'lightness': 72 }
				    ]
				  },{
				    'featureType': 'landscape',
				    'elementType': 'labels',
				    'stylers': [
				      { 'visibility': 'off' }
				    ]
				  },{
				    'featureType': 'water',
				    'elementType': 'labels',
				    'stylers': [
				      { 'visibility': 'off' }
				    ]
				  },{
				    'featureType': 'transit.line',
				    'stylers': [
				      { 'visibility': 'off' }
				    ]
				  },{
				    'featureType': 'administrative.country',
				    'elementType': 'geometry.stroke',
				    'stylers': [
				      { 'visibility': 'on' },
				      { 'color': '#000000' },
				      { 'weight': 0.4 }
				    ]
				  }
				],
		title: 'Bespoke clean'
	}
});
