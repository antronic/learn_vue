new Vue({
  el: '#app',
  data: {
    message: "CS Database's Project!",
    subtitle: "We don't talk anymore."
  }
})

Vue.component('info-comp', {
  props: ['info'],
  template: '<li>{{info.text}}</li>'
})

new Vue({
  el: '#card',
  data: {
    title: "System Procedure",
    isLoading: false,
    button: {
      pma: "phpMyAdmin"
    },
    infos: [
      {text: "Use SFTP instead of FTP service."},
      {text: "Do not shell into system without permission."},
      {text: "Do not try to edit, remove, read, or execute files that provide by staff."}
    ]
  },
  methods: {
    showLoad: function(){
      this.isLoading = true
    },
    goToPMA: function(){
      this.showLoad()
      setTimeout(()=>{
        window.location.href = window.location.hostname+'/pma'
      }, 2000)
    }
  }
})
