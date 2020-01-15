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
      {value: 'VB.NET', years: '約3.5年', frontFlg: true},
      {value: 'Java', years: '約半年', frontFlg: true},
      {value: 'C#', years: '約半年', frontFlg: true},
      {value: 'VB6', years: '約半年', frontFlg: true},
      {value: 'VBA', years: '約半年', frontFlg: true},
      {value: 'ASP.NET', years: '約半年', frontFlg: true},
      {value: 'HTML', years: '約半年', frontFlg: true},
      {value: 'CSS', years: '約半年', frontFlg: true}
    ],
    otherSkills: [
      {value: 'SQL Server 2012', years: '約3.5年', frontFlg: true},
      {value: 'Management Studio', years: '約3.5年', frontFlg: true},
      {value: 'Visual Studio 2008', years: '約3.5年', frontFlg: true},
      {value: 'Visual Studio 2010', years: '約半年', frontFlg: true},
      {value: 'Eclipce', years: '約半年', frontFlg: true},
      {value: 'SVN', years: '約3.5年', frontFlg: true},
      {value: 'CVS', years: '約半年', frontFlg: true},
      {value: 'Redmine', years: '約3.5年', frontFlg: true}
    ],
    photos: [
      {path: "./images/slide1.jpg", value: "スライド1"},
      {path: "./images/slide2.jpg", value: "スライド2"},
      {path: "./images/slide3.jpg", value: "スライド3"},
      {path: "./images/slide4.jpg", value: "スライド4"}
    ]
  },
  components: {
    'carousel': VueCarousel.Carousel,
    'slide': VueCarousel.Slide
  }
});
