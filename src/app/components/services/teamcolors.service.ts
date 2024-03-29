import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TeamcolorsService {
  constructor() {}

  customColors = [
    { name: 'perez', value: '#0000ff' },
    { name: 'alonso', value: '#1da8ba' },
    { name: 'ocon', value: '#1da8ba' },
    { name: 'max_verstappen', value: '#0000ff' },
    { name: 'hamilton', value: '#000000' },
    { name: 'bottas', value: '#000000' },
    { name: 'sainz', value: '#ff0000' },
    { name: 'norris', value: '#ff9800' },
    { name: 'gasly', value: '#ffffff' },
    { name: 'tsunoda', value: '#ffffff' },
    { name: 'leclerc', value: '#ff0000' },
    { name: 'ricciardo', value: '#ff9800' },
    { name: 'vettel', value: '#009688' },
    { name: 'stroll', value: '#009688' },
    { name: 'rusell', value: '#00bcd4' },
    { name: 'latifi', value: '#00bcd4' },
    { name: 'mick_schumacher', value: '#c0b7b7' },
    { name: 'mazepin', value: '#c0b7b7' },
    { name: 'raikkonen', value: '#eabcbc' },
    { name: 'giovinazzi', value: '#eabcbc' },
  ];

  colors: any = {
    '1996': [
      { name: 'villeneuve', value: '#235bc1' },
      { name: 'damon_hill', value: '#235bc1' },
      { name: 'irvine', value: '#bf1414' },
      { name: 'michael_schumacher', value: '#bf1414' },
      { name: 'hakkinen', value: '#e4dbca' },
      { name: 'alesi', value: '#6f9dce' },
      { name: 'berger', value: '#6f9dce' },
      { name: 'barrichello', value: '#a78d68' },
      { name: 'frentzen', value: '#80cdff' },
      { name: 'salo', value: '#FFFFFF' },
      { name: 'panis', value: '#0000FF' },
      { name: 'verstappen', value: '#ab1418' },
      { name: 'coulthard', value: '#e4dbca' },
      { name: 'herbert', value: '#80cdff' },
      { name: 'katayama', value: '#FFFFFF' },
      { name: 'fisichella', value: '#0a1212' },
      { name: 'lavaggi', value: '#0a1212' },
      { name: 'marques', value: '#0a1212' },
      { name: 'lamy', value: '#0a1212' },
      { name: 'rosset', value: '#ab1418' },
      { name: 'brundle', value: '#a78d68' },
      { name: 'diniz', value: '#0000FF' },
      { name: 'badoer', value: '#fceec0' },
      { name: 'montermini', value: '#fceec0' },
    ],
    '1997': [
      { name: 'villeneuve', value: '#00175d' },
      { name: 'frentzen', value: '#00175d' },
      { name: 'michael_schumacher', value: '#bf1414' },
      { name: 'coulthard', value: '#a3a4a6' },
      { name: 'irvine', value: '#bf1414' },
      { name: 'hakkinen', value: '#a3a4a6' },
      { name: 'herbert', value: '#001f7e' },
      { name: 'alesi', value: '#008dec' },
      { name: 'panis', value: '#306fe6' },
      { name: 'berger', value: '#008dec' },
      { name: 'barrichello', value: '#FFFFFF' },
      { name: 'ralf_schumacher', value: '#fee310' },
      { name: 'larini', value: '#001f7e' },
      { name: 'fisichella', value: '#fee310' },
      { name: 'katayama', value: '#fdfdff' },
      { name: 'nakano', value: '#306fe6' },
      { name: 'trulli', value: '#fdfdff' },
      { name: 'salo', value: '#cdd6cc' },
      { name: 'magnussen', value: '#FFFFFF' },
      { name: 'damon_hill', value: '#FFFFFF' },
      { name: 'verstappen', value: '#cdd6cc' },
      { name: 'diniz', value: '#FFFFFF' },
      { name: 'sospiri', value: '#ec7b15' },
      { name: 'rosset', value: '#ec7b15' },
    ],
    '1998': [
      { name: 'hakkinen', value: '#dbd5d0' },
      { name: 'coulthard', value: '#dbd5d0' },
      { name: 'michael_schumacher', value: '#bf1414' },
      { name: 'villeneuve', value: '#890000' },
      { name: 'herbert', value: '#1c0da6' },
      { name: 'frentzen', value: '#890000' },
      { name: 'fisichella', value: '#86d9ef' },
      { name: 'irvine', value: '#bf1414' },
      { name: 'ralf_schumacher', value: '#fffc09' },
      { name: 'damon_hill', value: '#fffc09' },
      { name: 'wurz', value: '#86d9ef' },
      { name: 'alesi', value: '#1c0da6' },
      { name: 'takagi', value: '#a7a994' },
      { name: 'barrichello', value: '#ebe7e9' },
      { name: 'trulli', value: '#1a217b' },
      { name: 'salo', value: '#0f110c' },
      { name: 'tuero', value: '#3a4551' },
      { name: 'magnussen', value: '#ebe7e9' },
      { name: 'rosset', value: '#a7a994' },
      { name: 'diniz', value: '#0f110c' },
      { name: 'panis', value: '#1a217b' },
      { name: 'nakano', value: '#3a4551' },
    ],
    '1999': [
      { name: 'hakkinen', value: '#33314d' },
      { name: 'coulthard', value: '#33314d' },
      { name: 'michael_schumacher', value: '#bf1414' },
      { name: 'barrichello', value: '#e6d8e1' },
      { name: 'frentzen', value: '#dcbe07' },
      { name: 'irvine', value: '#bf1414' },
      { name: 'fisichella', value: '#0067a9' },
      { name: 'ralf_schumacher', value: '#942e32' },
      { name: 'damon_hill', value: '#dcbe07' },
      { name: 'wurz', value: '#0067a9' },
      { name: 'villeneuve', value: '#920202' },
      { name: 'trulli', value: '#0b1845' },
      { name: 'herbert', value: '#e6d8e1' },
      { name: 'diniz', value: '#000933' },
      { name: 'zanardi', value: '#942e32' },
      { name: 'alesi', value: '#000933' },
      { name: 'takagi', value: '#b7522d' },
      { name: 'rosa', value: '#b7522d' },
      { name: 'zonta', value: '#920202' },
      { name: 'panis', value: '#0b1845' },
      { name: 'badoer', value: '#bfbeb5' },
      { name: 'gene', value: '#bfbeb5' },
    ],
    '2000': [
      { name: 'hakkinen', value: '#f5f2f2' },
      { name: 'coulthard', value: '#f5f2f2' },
      { name: 'michael_schumacher', value: '#bf1414' },
      { name: 'barrichello', value: '#bf1414' },
      { name: 'frentzen', value: '#eeb92e' },
      { name: 'trulli', value: '#eeb92e' },
      { name: 'irvine', value: '#28805d' },
      { name: 'villeneuve', value: '#d8d5d0' },
      { name: 'fisichella', value: '#5ab6e4' },
      { name: 'salo', value: '#002f89' },
      { name: 'ralf_schumacher', value: '#070706' },
      { name: 'rosa', value: '#ffac27' },
      { name: 'verstappen', value: '#ffac27' },
      { name: 'wurz', value: '#5ab6e4' },
      { name: 'heidfeld', value: '#16296a' },
      { name: 'zonta', value: '#d8d5d0' },
      { name: 'alesi', value: '#16296a' },
      { name: 'gene', value: '#f4f598' },
      { name: 'diniz', value: '#002f89' },
      { name: 'herbert', value: '#28805d' },
      { name: 'button', value: '#070706' },
      { name: 'mazzacane', value: '#f4f598' },
    ],
    '2001': [
      { name: 'michael_schumacher', value: '#bf1414' },
      { name: 'barrichello', value: '#bf1414' },
      { name: 'hakkinen', value: '#f5f2f2' },
      { name: 'frentzen', value: '#dbc004' },
      { name: 'ralf_schumacher', value: '#4b618f' },
      { name: 'coulthard', value: '#f5f2f2' },
      { name: 'trulli', value: '#dbc004' },
      { name: 'villeneuve', value: '#fdffff' },
      { name: 'panis', value: '#fdffff' },
      { name: 'heidfeld', value: '#01428f' },
      { name: 'montoya', value: '#4b618f' },
      { name: 'irvine', value: '#567d7d' },
      { name: 'raikkonen', value: '#01428f' },
      { name: 'alesi', value: '#293d8d' },
      { name: 'verstappen', value: '#ee8b3b' },
      { name: 'button', value: '#00bbdf' },
      { name: 'fisichella', value: '#00bbdf' },
      { name: 'bernoldi', value: '#ee8b3b' },
      { name: 'alonso', value: '#020000' },
      { name: 'mazzacane', value: '#020000' },
      { name: 'burti', value: '#567d7d' },
      { name: 'rosa', value: '#567d7d' },
      { name: 'marques', value: '#020000' },
    ],
    '2002': [
      { name: 'barrichello', value: '#bf1414' },
      { name: 'michael_schumacher', value: '#bf1414' },
      { name: 'ralf_schumacher', value: '#FFFFFF' },
      { name: 'coulthard', value: '#a5adbc' },
      { name: 'raikkonen', value: '#a5adbc' },
      { name: 'montoya', value: '#FFFFFF' },
      { name: 'trulli', value: '#5babf8' },
      { name: 'fisichella', value: '#f7bb27' },
      { name: 'massa', value: '#23305b' },
      { name: 'heidfeld', value: '#23305b' },
      { name: 'button', value: '#5babf8' },
      { name: 'panis', value: '#FFFFFF' },
      { name: 'villeneuve', value: '#FFFFFF' },
      { name: 'salo', value: '#891213' },
      { name: 'frentzen', value: '#df7c0e' },
      { name: 'mcnish', value: '#891213' },
      { name: 'bernoldi', value: '#df7c0e' },
      { name: 'webber', value: '#2f1a29' },
      { name: 'irvine', value: '#389567' },
      { name: 'rosa', value: '#389567' },
      { name: 'yoong', value: '#2f1a29' },
      { name: 'sato', value: '#f7bb27' },
    ],
    '2003': [
      { name: 'michael_schumacher', value: '#bf1414' },
      { name: 'barrichello', value: '#bf1414' },
      { name: 'montoya', value: '#FFFFFF' },
      { name: 'frentzen', value: '#090761' },
      { name: 'panis', value: '#fffbfd' },
      { name: 'villeneuve', value: '#8b0001' },
      { name: 'heidfeld', value: '#090761' },
      { name: 'button', value: '#8b0001' },
      { name: 'ralf_schumacher', value: '#FFFFFF' },
      { name: 'alonso', value: '#348bca' },
      { name: 'coulthard', value: '#a5adbc' },
      { name: 'trulli', value: '#348bca' },
      { name: 'fisichella', value: '#eece36' },
      { name: 'webber', value: '#225b3b' },
      { name: 'raikkonen', value: '#a5adbc' },
      { name: 'matta', value: '#fffbfd' },
      { name: 'firman', value: '#eece36' },
      { name: 'pizzonia', value: '#225b3b' },
      { name: 'wilson', value: '#000000' },
      { name: 'verstappen', value: '#000000' },
    ],
    '2004': [
      { name: 'michael_schumacher', value: '#bf1414' },
      { name: 'barrichello', value: '#bf1414' },
      { name: 'montoya', value: '#FFFFFF' },
      { name: 'button', value: '#8b0001' },
      { name: 'alonso', value: '#348bca' },
      { name: 'webber', value: '#225b3b' },
      { name: 'sato', value: '#8b0001' },
      { name: 'ralf_schumacher', value: '#FFFFFF' },
      { name: 'trulli', value: '#348bca' },
      { name: 'raikkonen', value: '#a5adbc' },
      { name: 'massa', value: '#090761' },
      { name: 'coulthard', value: '#a5adbc' },
      { name: 'matta', value: '#fffbfd' },
      { name: 'fisichella', value: '#090761' },
      { name: 'heidfeld', value: '#eece36' },
      { name: 'pantano', value: '#eece36' },
      { name: 'baumgartner', value: '#003213' },
      { name: 'panis', value: '#fffbfd' },
      { name: 'klien', value: '#225b3b' },
      { name: 'bruni', value: '#003213' },
    ],
    '2005': [
      { name: 'fisichella', value: '#348bca' },
      { name: 'trulli', value: '#fffbfd' },
      { name: 'webber', value: '#f0f7fa' },
      { name: 'villeneuve', value: '#090761' },
      { name: 'coulthard', value: '#203053' },
      { name: 'klien', value: '#203053' },
      { name: 'heidfeld', value: '#f0f7fa' },
      { name: 'button', value: '#8b0001' },
      { name: 'montoya', value: '#a5adbc' },
      { name: 'raikkonen', value: '#a5adbc' },
      { name: 'barrichello', value: '#bf1414' },
      { name: 'karthikeyan', value: '#eece36' },
      { name: 'alonso', value: '#348bca' },
      { name: 'monteiro', value: '#eece36' },
      { name: 'ralf_schumacher', value: '#fffbfd' },
      { name: 'friesacher', value: '#0b533e' },
      { name: 'albers', value: '#0b533e' },
      { name: 'massa', value: '#090761' },
      { name: 'michael_schumacher', value: '#bf1414' },
      { name: 'sato', value: '#8b0001' },
    ],
    '2006': [
      { name: 'michael_schumacher', value: '#bf1414' },
      { name: 'massa', value: '#bf1414' },
      { name: 'button', value: '#8b0001' },
      { name: 'alonso', value: '#348bca' },
      { name: 'montoya', value: '#898585' },
      { name: 'barrichello', value: '#8b0001' },
      { name: 'webber', value: '#222570' },
      { name: 'klien', value: '#203053' },
      { name: 'fisichella', value: '#348bca' },
      { name: 'heidfeld', value: '#0449a6' },
      { name: 'villeneuve', value: '#0449a6' },
      { name: 'kubica', value: '#0449a6' },
      { name: 'rosberg', value: '#222570' },
      { name: 'coulthard', value: '#203053' },
      { name: 'trulli', value: '#fffbfd' },
      { name: 'liuzzi', value: '#3a5994' },
      { name: 'speed', value: '#3a5994' },
      { name: 'ralf_schumacher', value: '#fffbfd' },
      { name: 'albers', value: '#bdbdc8' },
      { name: 'monteiro', value: '#bdbdc8' },
      { name: 'sato', value: '#bb5562' },
      { name: 'montagny', value: '#bb5562' },
      { name: 'yamamoto', value: '#bb5562' },
      { name: 'ide', value: '#bb5562' },
      { name: 'raikkonen', value: '#898585' },
      { name: 'rosa', value: '#898585' },
    ],
    '2007': [
      { name: 'raikkonen', value: '#bf1414' },
      { name: 'alonso', value: '#898585' },
      { name: 'heidfeld', value: '#0449a6' },
      { name: 'hamilton', value: '#898585' },
      { name: 'kubica', value: '#0449a6' },
      { name: 'fisichella', value: '#e7c15a' },
      { name: 'webber', value: '#203053' },
      { name: 'trulli', value: '#fffbfd' },
      { name: 'ralf_schumacher', value: '#fffbfd' },
      { name: 'sato', value: '#bb5562' },
      { name: 'davidson', value: '#bb5562' },
      { name: 'rosberg', value: '#222570' },
      { name: 'kovalainen', value: '#e7c15a' },
      { name: 'button', value: '#a6eeff' },
      { name: 'wurz', value: '#222570' },
      { name: 'barrichello', value: '#a6eeff' },
      { name: 'speed', value: '#273751' },
      { name: 'coulthard', value: '#203053' },
      { name: 'liuzzi', value: '#273751' },
      { name: 'vettel', value: '#273751' },
      { name: 'sutil', value: '#c96b3e' },
      { name: 'albers', value: '#c96b3e' },
      { name: 'massa', value: '#bf1414' },
    ],
    '2008': [
      { name: 'hamilton', value: '#898585' },
      { name: 'kubica', value: '#0449a6' },
      { name: 'kovalainen', value: '#898585' },
      { name: 'massa', value: '#bf1414' },
      { name: 'heidfeld', value: '#0449a6' },
      { name: 'trulli', value: '#fffbfd' },
      { name: 'rosberg', value: '#141d21' },
      { name: 'coulthard', value: '#011c31' },
      { name: 'vettel', value: '#001b50' },
      { name: 'barrichello', value: '#1e8557' },
      { name: 'alonso', value: '#e7c15a' },
      { name: 'button', value: '#1e8557' },
      { name: 'nakajima', value: '#141d21' },
      { name: 'webber', value: '#011c31' },
      { name: 'raikkonen', value: '#bf1414' },
      { name: 'fisichella', value: '#c96b3e' },
      { name: 'bourdais', value: '#001b50' },
      { name: 'glock', value: '#fffbfd' },
      { name: 'sato', value: '#bb5562' },
      { name: 'piquet_jr', value: '#e7c15a' },
      { name: 'davidson', value: '#bb5562' },
      { name: 'sutil', value: '#c96b3e' },
    ],
    '2009': [
      { name: 'button', value: '#e6ff4d' },
      { name: 'barrichello', value: '#e6ff4d' },
      { name: 'vettel', value: '#011c31' },
      { name: 'kubica', value: '#0449a6' },
      { name: 'rosberg', value: '#505da7' },
      { name: 'badoer', value: '#bf1414' },
      { name: 'fisichella', value: '#bf1414' },
      { name: 'massa', value: '#bf1414' },
      { name: 'raikkonen', value: '#bf1414' },
      { name: 'webber', value: '#011c31' },
      { name: 'heidfeld', value: '#0449a6' },
      { name: 'alonso', value: '#e7c15a' },
      { name: 'nakajima', value: '#505da7' },
      { name: 'kovalainen', value: '#898585' },
      { name: 'buemi', value: '#001b50' },
      { name: 'piquet_jr', value: '#e7c15a' },
      { name: 'grosjean', value: '#e7c15a' },
      { name: 'fisichella', value: '#c96b3e' },
      { name: 'sutil', value: '#c96b3e' },
      { name: 'bourdais', value: '#001b50' },
      { name: 'hamilton', value: '#898585' },
      { name: 'glock', value: '#fffbfd' },
      { name: 'trulli', value: '#fffbfd' },
    ],
    '2010': [
      { name: 'vettel', value: '#011c31' },
      { name: 'massa', value: '#bf1414' },
      { name: 'alonso', value: '#bf1414' },
      { name: 'hamilton', value: '#898585' },
      { name: 'rosberg', value: '#c6c6c6' },
      { name: 'webber', value: '#011c31' },
      { name: 'michael_schumacher', value: '#c6c6c6' },
      { name: 'button', value: '#898585' },
      { name: 'kubica', value: '#e2a500' },
      { name: 'sutil', value: '#c96b3e' },
      { name: 'barrichello', value: '#505da7' },
      { name: 'liuzzi', value: '#c96b3e' },
      { name: 'hulkenberg', value: '#505da7' },
      { name: 'rosa', value: '#FFFFFF' },
      { name: 'buemi', value: '#001b50' },
      { name: 'kobayashi', value: '#FFFFFF' },
      { name: 'petrov', value: '#e2a500' },
      { name: 'alguersuari', value: '#001b50' },
      { name: 'glock', value: '#e34e21' },
      { name: 'trulli', value: '#1d5a5d' },
      { name: 'kovalainen', value: '#1d5a5d' },
      { name: 'grassi', value: '#e34e21' },
      { name: 'bruno_senna', value: '#1b1b1b' },
      { name: 'chandhok', value: '#1b1b1b' },
    ],
    '2011': [
      { name: 'liuzzi', value: '#f4dee1' },
      { name: 'vettel', value: '#011c31' },
      { name: 'hamilton', value: '#898585' },
      { name: 'webber', value: '#011c31' },
      { name: 'button', value: '#898585' },
      { name: 'alonso', value: '#bf1414' },
      { name: 'petrov', value: '#1b1c1e' },
      { name: 'rosberg', value: '#c6c6c6' },
      { name: 'massa', value: '#bf1414' },
      { name: 'kobayashi', value: '#ecf0f2' },
      { name: 'buemi', value: '#001b50' },
      { name: 'michael_schumacher', value: '#c6c6c6' },
      { name: 'alguersuari', value: '#001b50' },
      { name: 'perez', value: '#ecf0f2' },
      { name: 'resta', value: '#c96b3e' },
      { name: 'maldonado', value: '#FFFFFF' },
      { name: 'sutil', value: '#c96b3e' },
      { name: 'barrichello', value: '#FFFFFF' },
      { name: 'heidfeld', value: '#1b1c1e' },
      { name: 'kovalainen', value: '#6b8584' },
      { name: 'trulli', value: '#6b8584' },
      { name: 'bruno_senna', value: '#1b1c1e' },
      { name: 'glock', value: '#e34e21' },
      { name: 'ambrosio', value: '#e34e21' },
      { name: 'karthikeyan', value: '#f4dee1' },
    ],
    '2012': [
      { name: 'rosa', value: '#9c803e' },
      { name: 'hamilton', value: '#898585' },
      { name: 'button', value: '#898585' },
      { name: 'grosjean', value: '#6b8584' },
      { name: 'michael_schumacher', value: '#c6c6c6' },
      { name: 'webber', value: '#011c31' },
      { name: 'vettel', value: '#011c31' },
      { name: 'rosberg', value: '#c6c6c6' },
      { name: 'maldonado', value: '#000000' },
      { name: 'hulkenberg', value: '#c96b3e' },
      { name: 'ricciardo', value: '#001b50' },
      { name: 'vergne', value: '#001b50' },
      { name: 'alonso', value: '#bf1414' },
      { name: 'kobayashi', value: '#FFFFFF' },
      { name: 'bruno_senna', value: '#000000' },
      { name: 'resta', value: '#c96b3e' },
      { name: 'massa', value: '#bf1414' },
      { name: 'raikkonen', value: '#6b8584' },
      { name: 'kovalainen', value: '#e6ce73' },
      { name: 'petrov', value: '#e6ce73' },
      { name: 'glock', value: '#f24c3d' },
      { name: 'pic', value: '#f24c3d' },
      { name: 'perez', value: '#FFFFFF' },
      { name: 'karthikeyan', value: '#9c803e' },
    ],
    '2013': [ 
      {name: 'vettel', value: '#011c31'},
      {name: 'webber', value: '#011c31'},
      {name: 'hamilton', value: '#c6c6c6'},
      {name: 'massa', value: '#bf1414'},
      {name: 'alonso', value: '#bf1414'},
      {name: 'rosberg', value: '#c6c6c6'},
      {name: 'raikkonen', value: '#e6ce73'},
      {name: 'grosjean', value: '#e6ce73'},
      {name: 'resta', value: '#c96b3e'},
      {name: 'button', value: '#898585'},
      {name: 'hulkenberg', value: '#2f2d31'},
      {name: 'sutil', value: '#c96b3e'},
      {name: 'vergne', value: '#001b50'},
      {name: 'ricciardo', value: '#001b50'},
      {name: 'perez', value: '#898585'},
      {name: 'bottas', value: '#536385'},
      {name: 'maldonado', value: '#536385'},
      {name: 'gutierrez', value: '#2f2d31'},
      {name: 'jules_bianchi', value: '#f24c3d'},
      {name: 'chilton', value: '#f24c3d'},
      {name: 'garde', value: '#5fa46b'},
      {name: 'pic', value: '#5fa46b'}
    ],
    '2014': [
      {name: 'hamilton', value: '#c6c6c6'},
      {name: 'ricciardo', value: '#011c31'},
      {name: 'rosberg', value: '#c6c6c6'},
      {name: 'kevin_magnussen', value: '#3f464d'},
      {name: 'alonso', value: '#bf1414'},
      {name: 'vergne', value: '#001b50'},
      {name: 'hulkenberg', value: '#c96b3e'},
      {name: 'kvyat', value: '#001b50'},
      {name: 'massa', value: '#fefefe'},
      {name: 'button', value: '#3f464d'},
      {name: 'raikkonen', value: '#bf1414'},
      {name: 'vettel', value: '#011c31'},
      {name: 'sutil', value: '#2f2d31'},
      {name: 'kobayashi', value: '#14af57'},
      {name: 'bottas', value: '#fefefe'},
      {name: 'perez', value: '#c96b3e'},
      {name: 'chilton', value: '#f24c3d'},
      {name: 'jules_bianchi', value: '#f24c3d'},
      {name: 'ericsson', value: '#14af57'},
      {name: 'gutierrez', value: '#2f2d31'},
      {name: 'maldonado', value: '#e6ce73'},
      {name: 'grosjean', value: '#e6ce73'}
    ],
    '2015': [ 
      {name: 'hamilton', value: '#c6c6c6'},
      {name: 'vettel', value: '#bf1414'},
      {name: 'rosberg', value: '#c6c6c6'},
      {name: 'ricciardo', value: '#011c31'},
      {name: 'kvyat', value: '#011c31'},
      {name: 'max_verstappen', value: '#001b50'},
      {name: 'massa', value: '#fefefe'},
      {name: 'bottas', value: '#fefefe'},
      {name: 'ericsson', value: '#416ccf'},
      {name: 'grosjean', value: '#e6ce73'},
      {name: 'raikkonen', value: '#bf1414'},
      {name: 'maldonado', value: '#e6ce73'},
      {name: 'hulkenberg', value: '#c96b3e'},
      {name: 'perez', value: '#c96b3e'},
      {name: 'sainz', value: '#001b50'},
      {name: 'nasr', value: '#416ccf'},
      {name: 'button', value: '#3f464d'},
      {name: 'alonso', value: '#3f464d'},
      {name: 'merhi', value: '#f24c3d'},
      {name: 'stevens', value: '#f24c3d'},
    ],
    '2016': [ 
    {name: 'hamilton', value: '#c6c6c6'},
    {name: 'rosberg', value: '#c6c6c6'},
    {name: 'vettel', value: '#bf1414'},
    {name: 'raikkonen', value: '#bf1414'},
    {name: 'ricciardo', value: '#011c31'},
    {name: 'bottas', value: '#fefefe'},
    {name: 'massa', value: '#fefefe'},
    {name: 'hulkenberg', value: '#c96b3e'},
    {name: 'grosjean', value: '#fffcfd'},
    {name: 'max_verstappen', value: '#011c31'},
    {name: 'sainz', value: '#001b50'},
    {name: 'alonso', value: '#3f464d'},
    {name: 'vandoorne', value: '#3f464d'},
    {name: 'gutierrez', value: '#fffcfd'},
    {name: 'button', value: '#3f464d'},
    {name: 'kvyat', value: '#001b50'},
    {name: 'wehrlein', value: '#f24c3d'},
    {name: 'ericsson', value: '#1657b4'},
    {name: 'perez', value: '#c96b3e'},
    {name: 'jolyon_palmer', value: '#f9cf6b'},
    {name: 'haryanto', value: '#f24c3d'},
    {name: 'nasr', value: '#1657b4'},
    {name: 'kevin_magnussen', value: '#f9cf6b'},
    {name: 'ocon', value: '#f24c3d'}
    ],
    '2017': [ 
      {name: 'hamilton', value: '#c6c6c6'},
      {name: 'vettel', value: '#bf1414'},
      {name: 'bottas', value: '#c6c6c6'},
      {name: 'raikkonen', value: '#bf1414'},
      {name: 'max_verstappen', value: '#011c31'},
      {name: 'grosjean', value: '#fffcfd'},
      {name: 'massa', value: '#fefefe'},
      {name: 'sainz', value: '#001b50'}, 
      {name: 'kvyat', value: '#001b50'},
      {name: 'perez', value: '#f9c3d3'},
      {name: 'hulkenberg', value: '#f9cf6b'},
      {name: 'alonso', value: '#ff9965'},
      {name: 'ocon', value: '#f9c3d3'},
      {name: 'ericsson', value: '#1b57c0'},
      {name: 'wehrlein', value: '#1b57c0'},
      {name: 'kevin_magnussen', value: '#fffcfd'},
      {name: 'vandoorne', value: '#ff9965'},
      {name: 'jolyon_palmer', value: '#f9cf6b'},
      {name: 'stroll', value: '#fefefe'},
      {name: 'ricciardo', value: '#011c31'}
    ],
    '2018': [
      {name: 'vettel', value: '#bf1414'},
      {name: 'raikkonen', value: '#bf1414'},
      {name: 'bottas', value: '#c6c6c6'},
      {name: 'ricciardo', value: '#011c31'},
      {name: 'gasly', value: '#001b50'},
      {name: 'kevin_magnussen', value: '#fffcfd'},
      {name: 'hulkenberg', value: '#f9cf6b'},
      {name: 'ocon', value: '#f9c3d3'},
      {name: 'hamilton', value: '#c6c6c6'},
      {name: 'sainz', value: '#f9cf6b'},
      {name: 'brendon_hartley', value: '#001b50'},
      {name: 'perez', value: '#f9c3d3'},
      {name: 'alonso', value: '#ff9965'},
      {name: 'vandoorne', value: '#ff9965'},
      {name: 'max_verstappen', value: '#011c31'},
      {name: 'grosjean', value: '#fffcfd'},
      {name: 'ericsson', value: '#9b1b38'},
      {name: 'sirotkin', value: '#fefefe'}, 
      {name: 'leclerc', value: '#9b1b38'},
      {name: 'stroll', value: '#fefefe'} 
    ],
    '2019': [  
      {name: 'hamilton', value: '#c6c6c6'},
      {name: 'bottas', value: '#c6c6c6'},
      {name: 'vettel', value: '#bf1414'},
      {name: 'max_verstappen', value: '#011c31'},
      {name: 'leclerc', value: '#bf1414'},
      {name: 'grosjean', value: '#fffcfd'},
      {name: 'kevin_magnussen', value: '#fffcfd'},
      {name: 'norris', value: '#fba92b'},
      {name: 'raikkonen', value: '#9b1b38'},
      {name: 'perez', value: '#f9c3d3'},
      {name: 'hulkenberg', value: '#fcf76f'},
      {name: 'ricciardo', value: '#fcf76f'},
      {name: 'albon', value: '#001b50'},
      {name: 'giovinazzi', value: '#9b1b38'},
      {name: 'kvyat', value: '#001b50'},
      {name: 'stroll', value: '#f9c3d3'},
      {name: 'gasly', value: '#011c31'},
      {name: 'sainz', value: '#fba92b'},
      {name: 'russell', value: '#fefefe'},
      {name: 'kubica', value: '#fefefe'}
    ],
    '2020': [
      {name: 'bottas', value: '#1f2124'},
      {name: 'max_verstappen', value: '#011c31'},
      {name: 'norris', value: '#fba92b'},
      {name: 'albon', value: '#011c31'},
      {name: 'hamilton', value: '#1f2124'},
      {name: 'perez', value: '#f9c3d3'},
      {name: 'leclerc', value: '#bf1414'},
      {name: 'sainz', value: '#fba92b'},
      {name: 'stroll', value: '#f9c3d3'},
      {name: 'ricciardo', value: '#fcf76f'},
      {name: 'vettel', value: '#bf1414'},
      {name: 'gasly', value: '#2b4562'},
      {name: 'kvyat', value: '#2b4562'},
      {name: 'ocon', value: '#fcf76f'},
      {name: 'grosjean', value: '#fffcfd'},
      {name: 'kevin_magnussen', value: '#fffcfd'},
      {name: 'russell', value: '#fefefe'},
      {name: 'giovinazzi', value: '#9b1b38'},
      {name: 'raikkonen', value: '#9b1b38'},
      {name: 'latifi', value: '#fefefe'}
    ],
    '2021': [ 
      {name: 'max_verstappen', value: '#011c31'},
      {name: 'hamilton', value: '#1f2124'},
      {name: 'bottas', value: '#1f2124'}, 
      {name: 'leclerc', value: '#bf1414'},
      {name: 'gasly', value: '#2b4562'},
      {name: 'ricciardo', value: '#fba92b'},
      {name: 'norris', value: '#fba92b'},
      {name: 'sainz', value: '#bf1414'},
      {name: 'alonso', value: '#024683'},
      {name: 'stroll', value: '#09887b'},
      {name: 'giovinazzi', value: '#9b1b38'},
      {name: 'tsunoda', value: '#2b4562'},
      {name: 'raikkonen', value: '#9b1b38'},
      {name: 'russell', value: '#fefefe'},
      {name: 'ocon', value: '#024683'},
      {name: 'latifi', value: '#fefefe'},
      {name: 'mick_schumacher', value: '#fffcfd'},
      {name: 'mazepin', value: '#fffcfd'},
      {name: 'vettel', value: '#09887b'},
      {name: 'perez', value: '#011c31'}
    ],
    '2022': [ 
      {name: 'max_verstappen', value: '#011c31'},
      {name: 'hamilton', value: '#c6c6c6'},
      {name: 'bottas', value: '#9b1b38'}, 
      {name: 'leclerc', value: '#bf1414'},
      {name: 'gasly', value: '#2b4562'},
      {name: 'ricciardo', value: '#fba92b'},
      {name: 'norris', value: '#fba92b'},
      {name: 'sainz', value: '#bf1414'},
      {name: 'alonso', value: '#024683'},
      {name: 'stroll', value: '#09887b'},
      {name: 'zhou', value: '#9b1b38'},
      {name: 'tsunoda', value: '#2b4562'},
      {name: 'albon', value: '#fefefe'},
      {name: 'russell', value: '#c6c6c6'},
      {name: 'ocon', value: '#024683'},
      {name: 'latifi', value: '#fefefe'},
      {name: 'mick_schumacher', value: '#fffcfd'},
      {name: 'kevin_magnussen', value: '#fffcfd'},
      {name: 'vettel', value: '#09887b'},
      {name: 'perez', value: '#011c31'}
    ],
    '2023': [
      {name: 'hamilton', value: '#00d2be'},
      {name: 'russell', value: '#00d2be'},
      {name: 'perez', value: '#011c31'},
      {name: 'max_verstappen', value: '#011c31'},
      {name: 'leclerc', value: '#dc0000'}, 
      {name: 'sainz', value: '#dc0000'}, 
      {name: 'nyck_de_vries', value: '#2b4562'}, 
      {name: 'ricciardo', value: '#2b4562'}, 
      {name: 'norris', value: '#ff8700'}, 
      {name: 'piastri', value: '#ff8700'}, 
      {name: 'alonso', value: '#006f62'}, 
      {name: 'stroll', value: '#006f62'}, 
      {name: 'bottas', value: '#900000'}, 
      {name: 'zhou', value: '#900000'}, 
      {name: 'magnussen', value: '#ffffff'},
      {name: 'hulkenberg', value: '#ffffff'},
      {name: 'albon', value: '#005aff'}, 
      {name: 'sargeant', value: '#005aff'}, 
      {name: 'tsunoda', value: '#2b4562'}, 
      {name: 'de_vries', value: '#2b4562'}, 
      {name: 'gasly', value: '#0090ff'},
      {name: 'ocon', value: '#0090ff'}, 
    ]
  };
  
  getTeamColors(year) {
    return this.colors[year];
  }
}
