let app = new Vue({
  el: '#app',
  data: {
    links: [
      //value:表記 link:リンク先
      {value: 'Top', link: '#home'},
      {value: 'About', link: '#about'},
      {value: 'Skill', link: '#skill'},
      {value: 'Contact', link: '#contact'},
      {value: 'Photo', link: '#photo'}
    ],
    languages: [
      {value: 'VB.NET'},
      {value: 'Java'},
      {value: 'C#'},
      {value: 'VB6'},
      {value: 'VBA'},
      {value: 'ASP.NET'},
      {value: 'HTML'},
      {value: 'CSS'}
    ],
    otherSkills: [
      {value: 'SQL Server 2012'},
      {value: 'Management Studio'},
      {value: 'Visual Studio 2008'},
      {value: 'Visual Studio 2010'},
      {value: 'Eclipce'},
      {value: 'SVN'},
      {value: 'CVS'},
      {value: 'Redmine'}
    ]
  }
});
