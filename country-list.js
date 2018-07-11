const countries = new Map(
  [
    ['Algeria', 'Africa'],
    ['Angolia', 'Africa'],
    ['Benin', 'Africa'],
    ['Botswana', 'Africa'],
    ['Burkina', 'Africa'],
    ['Burundi', 'Africa'],
    ['Cameroon', 'Africa'],
    ['Central African Republic', 'Africa'],
    ['Chad', 'Africa'],
    ['Chana', 'Africa'],
    ['Comoros Island', 'Africa'],
    ['Congo', 'Africa'],
    ['Congo (Zaire)', 'Africa'],
    ['Cote D\'Ivoire', 'Africa'],
    ['Djibouti', 'Africa'],
    ['Egypt', 'Africa'],
    ['Equatorial Guinea', 'Africa'],
    ['Eritrea', 'Africa'],
    ['Ethiopia', 'Africa'],
    ['Gabon', 'Africa'],
    ['Guinea', 'Africa'],
    ['Guinea Bissau', 'Africa'],
    ['Kenya', 'Africa'],
    ['Lesotho', 'Africa'],
    ['Liberia', 'Africa'],
    ['Libya', 'Africa'],
    ['Madagascar', 'Africa'],
    ['Malawi', 'Africa'],
    ['Mali', 'Africa'],
    ['Mauritania', 'Africa'],
    ['Mauritius', 'Africa'],
    ['Morocco', 'Africa'],
    ['Mozambique', 'Africa'],
    ['Namibia', 'Africa'],
    ['Niger', 'Africa'],
    ['Nigeria', 'Africa'],
    ['Rwanda', 'Africa'],
    ['Sao Tomi and Principe', 'Africa'],
    ['Senegal', 'Africa'],
    ['Seychelles', 'Africa'],
    ['Sierra Leone', 'Africa'],
    ['Somalia', 'Africa'],
    ['Republic of South Africa', 'Africa'],
    ['South Africa', 'Africa'],
    ['Sudan', 'Africa'],
    ['Swaziland', 'Africa'],
    ['Tanzania', 'Africa'],
    ['Tunisia', 'Africa'],
    ['Togo', 'Africa'],
    ['Uganda', 'Africa'],
    ['Zambia', 'Africa'],
    ['Zimbabwe', 'Africa'],
    ['Afghanistan', 'Asia'],
    ['Armenia', 'Asia'],
    ['Azerbaijan', 'Asia'],
    ['Bahrain', 'Asia'],
    ['Bangladesh', 'Asia'],
    ['Bhutan', 'Asia'],
    ['Brunei', 'Asia'],
    ['Cambodia', 'Asia'],
    ['China', 'Asia'],
    ['Cyprus', 'Asia'],
    ['Georgia', 'Asia'],
    ['Iran', 'Asia'],
    ['Iraq', 'Asia'],
    ['India', 'Asia'],
    ['Indonesia', 'Asia'],
    ['Israel and Gaza', 'Asia'],
    ['Japan', 'Asia'],
    ['Jordan', 'Asia'],
    ['Kazakstan', 'Asia'],
    ['Kuwait', 'Asia'],
    ['Kyrgzstan', 'Asia'],
    ['Laos', 'Asia'],
    ['Lebanon', 'Asia'],
    ['Malaysia', 'Asia'],
    ['Mongolia', 'Asia'],
    ['Myanmar (Burma)', 'Asia'],
    ['Nepal', 'Asia'],
    ['North Korea', 'Asia'],
    ['Oman', 'Asia'],
    ['Pakistan', 'Asia'],
    ['Palau', 'Asia'],
    ['Phillipines', 'Asia'],
    ['Quatar', 'Asia'],
    ['Republic of Korea', 'Asia'],
    ['Russia', 'Asia'],
    ['Saudi Arabia', 'Asia'],
    ['South Korea', 'Asia'],
    ['Sri Lanka', 'Asia'],
    ['Syria', 'Asia'],
    ['Taiwan', 'Asia'],
    ['Tajikstan', 'Asia'],
    ['Thailand', 'Asia'],
    ['Turkmenistan', 'Asia'],
    ['United Arab Emirates', 'Asia'],
    ['Uzbekistan', 'Asia'],
    ['Vietnam', 'Asia'],
    ['Yemen', 'Asia'],
    ['Australia', 'Oceania'],
    ['Fiji', 'Oceania'],
    ['France (Islands only)', 'Oceania'],
    ['Kiribati', 'Oceania'],
    ['Marshall Islands', 'Oceania'],
    ['Micronesia', 'Oceania'],
    ['F.S.O', 'Oceania'],
    ['Nauru', 'Oceania'],
    ['New Zealand', 'Oceania'],
    ['Papua New Guinea', 'Oceania'],
    ['Solomon Islands', 'Oceania'],
    ['Tonga', 'Oceania'],
    ['Tuvalu', 'Oceania'],
    ['United Kingdom (Islands only)', 'Oceania'],
    ['Vanuatu', 'Oceania'],
    ['Western Samoa', 'Oceania'],
    ['Albania', 'Europe'],
    ['Andorra', 'Europe'],
    ['Austria', 'Europe'],
    ['Belarus', 'Europe'],
    ['Belgium', 'Europe'],
    ['Bosnia-Herzegovina', 'Europe'],
    ['Bulgaria', 'Europe'],
    ['Cape Verde', 'Europe'],
    ['Croatia', 'Europe'],
    ['Czech Republic', 'Europe'],
    ['Denmark and Greenland', 'Europe'],
    ['Estonia', 'Europe'],
    ['Finland', 'Europe'],
    ['France', 'Europe'],
    ['Germany', 'Europe'],
    ['Greece', 'Europe'],
    ['Hungary', 'Europe'],
    ['Iceland', 'Europe'],
    ['Republic of Ireland', 'Europe'],
    ['Italy', 'Europe'],
    ['Latvia', 'Europe'],
    ['Liechtenstein', 'Europe'],
    ['Lithuania', 'Europe'],
    ['Luxembourg', 'Europe'],
    ['Macedonia', 'Europe'],
    ['Malta', 'Europe'],
    ['Moldova', 'Europe'],
    ['Netherlands', 'Europe'],
    ['Norway', 'Europe'],
    ['Poland', 'Europe'],
    ['Portugal', 'Europe'],
    ['Romania', 'Europe'],
    ['Slovakia', 'Europe'],
    ['Slovenia', 'Europe'],
    ['Spain', 'Europe'],
    ['Sweden', 'Europe'],
    ['Switzerland', 'Europe'],
    ['Turkey', 'Asia'],
    ['Ukraine', 'Europe'],
    ['United Kingdom', 'Europe'],
    ['Yugoslavia', 'Europe'],
    ['Barbados', 'North America'],
    ['Bahamas', 'North America'],
    ['Belize', 'North America'],
    ['Canada', 'North America'],
    ['Costa Rica', 'North America'],
    ['Cuba', 'North America'],
    ['Dominica', 'North America'],
    ['Dominican Republic', 'North America'],
    ['El Salvador', 'North America'],
    ['Greenland (Denmark)', 'North America'],
    ['Grenada', 'North America'],
    ['Guatemala', 'North America'],
    ['Haiti', 'North America'],
    ['Honduras', 'North America'],
    ['Jamaica', 'North America'],
    ['Mexico', 'North America'],
    ['Netherlands (Islands only)', 'North America'],
    ['Pacific Islands Inc. Hawaii', 'North America'],
    ['Panama', 'North America'],
    ['St Kitts-Nevis', 'North America'],
    ['St Lucia', 'North America'],
    ['St Vincent and the Grenadines', 'North America'],
    ['Trinidad and Tobago', 'North America'],
    ['United States Of America', 'North America'],
    ['USA', 'North America'],
    ['Argentina', 'South America'],
    ['Bolivia', 'South America'],
    ['Brazil', 'South America'],
    ['Chile', 'South America'],
    ['Colombia', 'South America'],
    ['Ecuador', 'South America'],
    ['French Guiana', 'South America'],
    ['Guyana', 'South America'],
    ['Nicaragua', 'South America'],
    ['Paraguay', 'South America'],
    ['Peru', 'South America'],
    ['Suriname', 'South America'],
    ['Uruguay', 'South America'],
    ['Venezuela', 'South America'],
  ],
);

module.exports = countries;
