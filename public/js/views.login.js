var express = require('express');
var router = express.Router();
var request = require('request');


$(document).ready(function() {

  $('#username').trigger('click');
  $('#username').focus();

  $('#username').blur(function() {
    var v = $(this).val();
    if (v) {
      var idx = v.indexOf('\\');
      if (idx > -1) {
        alert('Domain name not required', 2000, 'toast-blue');
        $(this).val(v.substr(idx + 1));
      }
    }
  });

  $('#loginForm').on('submit', function(e) {
    e.preventDefault();
    var uname = $('#username').val();
    var pwd = $('#password').val();

    /*$.post('http://localhost:8000/api/auth/login', {username: uname, password: pwd}, function(res) {

      if (res.status === 'OK') {
     //   sessionStorage.setItem('user_key', res.secret);
        window.location = '/';
      } else {
          console.log('error');
        /*$('#loginError').text(res.message);
        $('#pass').val('');
      }

    });*/

    request.post('http://localhost:8000/api/auth/login', {form:{username: uname, password: pwd}});  

  });
});