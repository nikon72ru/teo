$(document).ready(function(){$(".js-input").on("focus focusout",function(a){a.preventDefault(),$(a.target).parent().toggleClass("is_focused"),"focusout"==a.type&&$(a.target).val($.trim($(a.target).val()))}),$(".js-input").on("change keyup",function(a){a.preventDefault(),""===$.trim($(a.target).val())||$(a.target).hasClass("is_filled")?$(a.target).parent().removeClass("is_filled"):$(a.target).parent().addClass("is_filled"),$(this).parent().removeClass("error")}),$(".js-phone").on("focusout",function(a){a.preventDefault();var e=$(this).val().replace(/[^0-9]/gi,"");7==e.substr(0,1)&&(e="+7"+e.substr(1,e.length-1)),$(this).val(e)});var a=$("#svg1"),e=$("#svg2"),t=$(".header__content"),x=0,n=3;e.find("polygon").click(function(){t.eq(n).toggleClass("active"),n=$(this).index()-1,t.eq(n).toggleClass("active")}).mouseover(function(){x=$(this).index()-1,a.find("polygon").eq(x).toggleClass("active")}).mouseleave(function(){x=$(this).index()-1,a.find("polygon").eq(x).toggleClass("active")});var s=$("#svg_on_mappage");s.find("polygon").mouseover(function(){x=$(this).index()-1,s.find("polygon").eq(x).toggleClass("active")}).mouseleave(function(){x=$(this).index()-1,s.find("polygon").eq(x).toggleClass("active")}).click(function(){x=$(this).index()-1,window.location.replace(s.find("polygon").eq(x).attr("data-link"))}),$("#submit_form").click(function(a){a.preventDefault();var e=$("#callback_source").attr("data-source"),t=$("#name"),x=$("#phone"),n=$("#company"),s=$("#mail"),i=new RegExp(/\d{11}/),o=new RegExp(/.+/),l=new RegExp(/^(?!(?:(?:\x22?\x5C[\x00-\x7E]\x22?)|(?:\x22?[^\x5C\x22]\x22?)){255,})(?!(?:(?:\x22?\x5C[\x00-\x7E]\x22?)|(?:\x22?[^\x5C\x22]\x22?)){65,}@)(?:(?:[\x21\x23-\x27\x2A\x2B\x2D\x2F-\x39\x3D\x3F\x5E-\x7E]+)|(?:\x22(?:[\x01-\x08\x0B\x0C\x0E-\x1F\x21\x23-\x5B\x5D-\x7F]|(?:\x5C[\x00-\x7F]))*\x22))(?:\.(?:(?:[\x21\x23-\x27\x2A\x2B\x2D\x2F-\x39\x3D\x3F\x5E-\x7E]+)|(?:\x22(?:[\x01-\x08\x0B\x0C\x0E-\x1F\x21\x23-\x5B\x5D-\x7F]|(?:\x5C[\x00-\x7F]))*\x22)))*@(?:(?:(?!.*[^.]{64,})(?:(?:(?:xn--)?[a-z0-9]+(?:-[a-z0-9]+)*\.){1,126}){1,}(?:(?:[a-z][a-z0-9]*)|(?:(?:xn--)[a-z0-9]+))(?:-[a-z0-9]+)*)|(?:\[(?:(?:IPv6:(?:(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){7})|(?:(?!(?:.*[a-f0-9][:\]]){7,})(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,5})?::(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,5})?)))|(?:(?:IPv6:(?:(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){5}:)|(?:(?!(?:.*[a-f0-9]:){5,})(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,3})?::(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,3}:)?)))?(?:(?:25[0-5])|(?:2[0-4][0-9])|(?:1[0-9]{2})|(?:[1-9]?[0-9]))(?:\.(?:(?:25[0-5])|(?:2[0-4][0-9])|(?:1[0-9]{2})|(?:[1-9]?[0-9]))){3}))\]))$/),r=!1;if(o.test(t.val())||(t.parent().addClass("error"),r=!0),i.test(x.val())||(x.parent().addClass("error"),r=!0),l.test(s.val())||(s.parent().addClass("error"),r=!0),r)return!1;var f={name:t.val(),phone:x.val(),company:n.val(),email:s.val()};null!=e&&(f.from=e),t.val(""),x.val(""),n.val(""),s.val(""),$.ajax({url:"/teo/ajax-handler/",type:"POST",data:{data:f},success:function(a){UIkit.offcanvas.hide([force=!1]),UIkit.notify({message:"success"==a?"Ваше сообщение успешно отправлено":"Ошибка отправки сообщения",status:a,timeout:3e3,pos:"bottom-center"})},error:function(a){UIkit.notify({message:"Ошибка отправки сообщения",status:"warning",timeout:3e3,pos:"bottom-center"})}})}),$(".proposal_request").click(function(){$("#callback_source").attr("data-source",$(this).attr("data-source"))}),$("#submit_form2").click(function(a){a.preventDefault();var e=$("#name9"),t=$("#text9"),x=$("#mail9"),n=new RegExp(/.+/),s=new RegExp(/^(?!(?:(?:\x22?\x5C[\x00-\x7E]\x22?)|(?:\x22?[^\x5C\x22]\x22?)){255,})(?!(?:(?:\x22?\x5C[\x00-\x7E]\x22?)|(?:\x22?[^\x5C\x22]\x22?)){65,}@)(?:(?:[\x21\x23-\x27\x2A\x2B\x2D\x2F-\x39\x3D\x3F\x5E-\x7E]+)|(?:\x22(?:[\x01-\x08\x0B\x0C\x0E-\x1F\x21\x23-\x5B\x5D-\x7F]|(?:\x5C[\x00-\x7F]))*\x22))(?:\.(?:(?:[\x21\x23-\x27\x2A\x2B\x2D\x2F-\x39\x3D\x3F\x5E-\x7E]+)|(?:\x22(?:[\x01-\x08\x0B\x0C\x0E-\x1F\x21\x23-\x5B\x5D-\x7F]|(?:\x5C[\x00-\x7F]))*\x22)))*@(?:(?:(?!.*[^.]{64,})(?:(?:(?:xn--)?[a-z0-9]+(?:-[a-z0-9]+)*\.){1,126}){1,}(?:(?:[a-z][a-z0-9]*)|(?:(?:xn--)[a-z0-9]+))(?:-[a-z0-9]+)*)|(?:\[(?:(?:IPv6:(?:(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){7})|(?:(?!(?:.*[a-f0-9][:\]]){7,})(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,5})?::(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,5})?)))|(?:(?:IPv6:(?:(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){5}:)|(?:(?!(?:.*[a-f0-9]:){5,})(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,3})?::(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,3}:)?)))?(?:(?:25[0-5])|(?:2[0-4][0-9])|(?:1[0-9]{2})|(?:[1-9]?[0-9]))(?:\.(?:(?:25[0-5])|(?:2[0-4][0-9])|(?:1[0-9]{2})|(?:[1-9]?[0-9]))){3}))\]))$/),i=!1;if(n.test(e.val())||(e.parent().addClass("error"),i=!0),n.test(t.val())||(t.parent().addClass("error"),i=!0),s.test(x.val())||(x.parent().addClass("error"),i=!0),i)return!1;var o={name:e.val(),email:x.val(),quest:t.val()};e.val(""),t.val(""),x.val(""),$.ajax({url:"/teo/ajax-handler/",type:"POST",data:{data:o},success:function(a){UIkit.offcanvas.hide([force=!1]),UIkit.notify({message:"success"==a?"Ваше сообщение успешно отправлено":"Ошибка отправки сообщения",status:a,timeout:3e3,pos:"bottom-center"})},error:function(a){UIkit.notify({message:"Ошибка отправки сообщения",status:"warning",timeout:3e3,pos:"bottom-center"})}})}),$(".inputfile_button").click(function(){$(this).closest(".feedback_form_inputfile_block").find(".inputfile_input").trigger("click")}),$(".inputfile_input").change(function(){var a=$(this).val(),e=a;new RegExp("[^*](.txt|.jpg|.png|.zip|.rar|.doc|.docx|.xls|.xlsx|.pdf)","i").test(a)?5242880<this.files[0].size?(e='<span class="red">Размер файла превышает 5 Мб</span>',$(this).val("")):(val_mas=a.split("\\"),e=val_mas[val_mas.length-1]):(e='<span class="red">Неверное расширение файла</span>',$(this).val(""));$(this).closest(".feedback_form_inputfile_block").find(".inputfile_caption").html(e).attr("title",a)}),$(".feedback_radio_input").change(function(){var a=$(this).val();$(".feedback_container").not("#feedback_"+a).slideUp(300),$("#feedback_"+a).slideDown(300)})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbXBsYXRlLmpzIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInJlYWR5Iiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJwYXJlbnQiLCJ0b2dnbGVDbGFzcyIsInR5cGUiLCJ2YWwiLCJ0cmltIiwiaGFzQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwidGhpcyIsInJlcGxhY2UiLCJzdWJzdHIiLCJsZW5ndGgiLCJzdmcxIiwic3ZnMiIsImNvbnRlbnRzIiwiaSIsImoiLCJmaW5kIiwiY2xpY2siLCJlcSIsImluZGV4IiwibW91c2VvdmVyIiwibW91c2VsZWF2ZSIsInN2Z19vbl9wYWdlIiwid2luZG93IiwibG9jYXRpb24iLCJhdHRyIiwiZnJvbSIsIm5hbWUiLCJwaG9uZSIsImNvbXBhbnkiLCJlbWFpbCIsInJlZ2V4X3Bob25lIiwiUmVnRXhwIiwicmVnZXhfbmFtZSIsInJlZ2V4X2VtYWlsIiwiaGFzRXJyIiwidGVzdCIsImRhdGEiLCJ1bmRlZmluZWQiLCJhamF4IiwidXJsIiwic3VjY2VzcyIsInJlc3VsdCIsIlVJa2l0Iiwib2ZmY2FudmFzIiwiaGlkZSIsImZvcmNlIiwibm90aWZ5IiwibWVzc2FnZSIsInN0YXR1cyIsInRpbWVvdXQiLCJwb3MiLCJlcnJvciIsInF1ZXN0IiwiY2xvc2VzdCIsInRyaWdnZXIiLCJjaGFuZ2UiLCJodG1sIiwiZmlsZXMiLCJzaXplIiwidmFsX21hcyIsInNwbGl0IiwiYmxvY2tpZCIsIm5vdCIsInNsaWRlVXAiLCJzbGlkZURvd24iXSwibWFwcGluZ3MiOiJBQUFBQSxFQUFFQyxVQUFVQyxNQUFNLFdBQ2hCRixFQUFFLGFBQWFHLEdBQUcsaUJBQWtCLFNBQVNDLEdBQ3ZDQSxFQUFFQyxpQkFDRkwsRUFBRUksRUFBRUUsUUFBUUMsU0FBU0MsWUFBWSxjQUNwQixZQUFWSixFQUFFSyxNQUNEVCxFQUFFSSxFQUFFRSxRQUFRSSxJQUFJVixFQUFFVyxLQUFLWCxFQUFFSSxFQUFFRSxR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S0FBTSxDQUFDQSxLQUFNQSxHQUNiSSxRQUFTLFNBQVVDLEdBQ2ZDLE1BQU1DLFVBQVVDLEtBQUssQ0FBQ0MsT0FBUSxJQUM5QkgsTUFBTUksT0FBTyxDQUNUQyxRQUFvQixXQUFWTixFQUF1QixvQ0FBc0MsNEJBQ3ZFTyxPQUFRUCxFQUNSUSxRQUFTLElBQ1RDLElBQUssbUJBR2JDLE1BQU8sU0FBVVYsR0FDYkMsTUFBTUksT0FBTyxDQUNUQyxRQUFTLDRCQUNUQyxPQUFRLFVBQ1JDLFFBQVMsSUFDVEMsSUFBSyx1QkFVckIzRCxFQUFFLHFCQUFxQnlCLE1BQU0sV0FDWnpCLEVBQUVlLE1BQU0rQyxRQUFRLGtDQUFrQ3RDLEtBQUssb0JBQzdEdUMsUUFBUSxXQUduQi9ELEVBQUUsb0JBQW9CZ0UsT0FBTyxXQUN6QixJQUFJdEQsRUFBTVYsRUFBRWUsTUFBTUwsTUFFZHVELEVBQU92RCxFQUNGLElBQUk4QixPQUFPLDREQUF1RSxLQUNsRkksS0FBS2xDLEdBS0MsUUFEQUssS0FBS21ELE1BQU0sR0FBR0MsTUFFckJGLEVBQU8sdURBQ1BqRSxFQUFFZSxNQUFNTCxJQUFJLE1BRVowRCxRQUFVMUQsRUFBSTJELE1BQU0sTUFDcEJKLEVBQU9HLFFBQVFBLFFBQVFsRCxPQUFTLEtBVHBDK0MsRUFBTyxxREFDUGpFLEVBQUVlLE1BQU1MLElBQUksS0FhaEJWLEVBQUVlLE1BQU0rQyxRQUFRLGtDQUFrQ3RDLEtBQUssc0JBQXNCeUMsS0FBS0EsR0FBTWhDLEtBQUssUUFBU3ZCLEtBRzFHVixFQUFFLHlCQUF5QmdFLE9BQU8sV0FDOUIsSUFBSU0sRUFBVXRFLEVBQUVlLE1BQU1MLE1BQ3RCVixFQUFFLHVCQUF1QnVFLElBQUksYUFBZUQsR0FBU0UsUUFBUSxLQUM3RHhFLEVBQUUsYUFBZXNFLEdBQVNHLFVBQVUiLCJmaWxlIjoidGVtcGxhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgJCgnLmpzLWlucHV0Jykub24oJ2ZvY3VzIGZvY3Vzb3V0JywgZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICQoZS50YXJnZXQpLnBhcmVudCgpLnRvZ2dsZUNsYXNzKCdpc19mb2N1c2VkJyk7XG4gICAgICAgIGlmKGUudHlwZSA9PSAnZm9jdXNvdXQnKSB7XG4gICAgICAgICAgICAkKGUudGFyZ2V0KS52YWwoJC50cmltKCQoZS50YXJnZXQpLnZhbCgpKSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAkKCcuanMtaW5wdXQnKS5vbignY2hhbmdlIGtleXVwJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmKCQudHJpbSgkKGUudGFyZ2V0KS52YWwoKSkgIT09ICcnICYmICEkKGUudGFyZ2V0KS5oYXNDbGFzcygnaXNfZmlsbGVkJykpIHtcbiAgICAgICAgICAgICQoZS50YXJnZXQpLnBhcmVudCgpLmFkZENsYXNzKCdpc19maWxsZWQnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoZS50YXJnZXQpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdpc19maWxsZWQnKTtcbiAgICAgICAgfVxuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnJlbW92ZUNsYXNzKFwiZXJyb3JcIik7XG4gICAgfSk7XG4gICAgJCgnLmpzLXBob25lJykub24oJ2ZvY3Vzb3V0JywgZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHZhciB2YWwgPSAkKHRoaXMpLnZhbCgpLnJlcGxhY2UoL1teMC05XS9naSwnJyk7XG4gICAgICAgIGlmKHZhbC5zdWJzdHIoMCwgMSkgPT0gNykge1xuICAgICAgICAgICAgdmFsID0gJys3JyArIHZhbC5zdWJzdHIoMSwgdmFsLmxlbmd0aCAtIDEpO1xuICAgICAgICB9XG4gICAgICAgICQodGhpcykudmFsKHZhbCk7XG4gICAgfSk7XG5cbiAgICB2YXIgc3ZnMSA9ICQoJyNzdmcxJyk7XG4gICAgdmFyIHN2ZzIgPSAkKCcjc3ZnMicpO1xuICAgIHZhciBjb250ZW50cyA9ICQoJy5oZWFkZXJfX2NvbnRlbnQnKTtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGogPSAzO1xuICAgIHN2ZzIuZmluZCgncG9seWdvbicpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgY29udGVudHMuZXEoaikudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgaiA9ICQodGhpcykuaW5kZXgoKS0xO1xuICAgICAgY29udGVudHMuZXEoaikudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIH0pXG4gICAgLm1vdXNlb3ZlcihmdW5jdGlvbigpIHtcbiAgICAgIGkgPSAkKHRoaXMpLmluZGV4KCktMTtcbiAgICAgIHN2ZzEuZmluZCgncG9seWdvbicpLmVxKGkpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgICB9KVxuICAgIC5tb3VzZWxlYXZlKGZ1bmN0aW9uKCkge1xuICAgICAgaSA9ICQodGhpcykuaW5kZXgoKS0xO1xuICAgICAgc3ZnMS5maW5kKCdwb2x5Z29uJykuZXEoaSkudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIH0pO1xuXG4gICAgdmFyIHN2Z19vbl9wYWdlID0gJChcIiNzdmdfb25fbWFwcGFnZVwiKTtcbiAgICBzdmdfb25fcGFnZS5maW5kKCdwb2x5Z29uJylcbiAgICAgICAgLm1vdXNlb3ZlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgIGkgPSAkKHRoaXMpLmluZGV4KCktMTtcbiAgICAgICAgc3ZnX29uX3BhZ2UuZmluZCgncG9seWdvbicpLmVxKGkpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgfSlcbiAgICAgICAgLm1vdXNlbGVhdmUoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpID0gJCh0aGlzKS5pbmRleCgpLTE7XG4gICAgICAgICAgICBzdmdfb25fcGFnZS5maW5kKCdwb2x5Z29uJykuZXEoaSkudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICB9KVxuICAgICAgICAuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaSA9ICQodGhpcykuaW5kZXgoKS0xO1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2Uoc3ZnX29uX3BhZ2UuZmluZCgncG9seWdvbicpLmVxKGkpLmF0dHIoXCJkYXRhLWxpbmtcIikpO1xuICAgICAgICB9KTtcblxuICAgICQoXCIjc3VibWl0X2Zvcm1cIikuY2xpY2soZnVuY3Rpb24gKGUpIHtcblxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHZhciBmcm9tID0gJChcIiNjYWxsYmFja19zb3VyY2VcIikuYXR0cihcImRhdGEtc291cmNlXCIpO1xuICAgICAgICB2YXIgbmFtZSA9ICQoXCIjbmFtZVwiKTtcbiAgICAgICAgdmFyIHBob25lID0gJChcIiNwaG9uZVwiKTtcbiAgICAgICAgdmFyIGNvbXBhbnkgPSAkKFwiI2NvbXBhbnlcIik7XG4gICAgICAgIHZhciBlbWFpbCA9ICQoXCIjbWFpbFwiKTtcblxuICAgICAgICB2YXIgcmVnZXhfcGhvbmUgPSBuZXcgUmVnRXhwKC9cXGR7MTF9Lyk7XG4gICAgICAgIHZhciByZWdleF9uYW1lID0gbmV3IFJlZ0V4cCgvLisvKTtcbiAgICAgICAgdmFyIHJlZ2V4X2VtYWlsID0gbmV3IFJlZ0V4cCgvXig/ISg/Oig/OlxceDIyP1xceDVDW1xceDAwLVxceDdFXVxceDIyPyl8KD86XFx4MjI/W15cXHg1Q1xceDIyXVxceDIyPykpezI1NSx9KSg/ISg/Oig/OlxceDIyP1xceDVDW1xceDAwLVxceDdFXVxceDIyPyl8KD86XFx4MjI/W15cXHg1Q1xceDIyXVxceDIyPykpezY1LH1AKSg/Oig/OltcXHgyMVxceDIzLVxceDI3XFx4MkFcXHgyQlxceDJEXFx4MkYtXFx4MzlcXHgzRFxceDNGXFx4NUUtXFx4N0VdKyl8KD86XFx4MjIoPzpbXFx4MDEtXFx4MDhcXHgwQlxceDBDXFx4MEUtXFx4MUZcXHgyMVxceDIzLVxceDVCXFx4NUQtXFx4N0ZdfCg/OlxceDVDW1xceDAwLVxceDdGXSkpKlxceDIyKSkoPzpcXC4oPzooPzpbXFx4MjFcXHgyMy1cXHgyN1xceDJBXFx4MkJcXHgyRFxceDJGLVxceDM5XFx4M0RcXHgzRlxceDVFLVxceDdFXSspfCg/OlxceDIyKD86W1xceDAxLVxceDA4XFx4MEJcXHgwQ1xceDBFLVxceDFGXFx4MjFcXHgyMy1cXHg1QlxceDVELVxceDdGXXwoPzpcXHg1Q1tcXHgwMC1cXHg3Rl0pKSpcXHgyMikpKSpAKD86KD86KD8hLipbXi5dezY0LH0pKD86KD86KD86eG4tLSk/W2EtejAtOV0rKD86LVthLXowLTldKykqXFwuKXsxLDEyNn0pezEsfSg/Oig/OlthLXpdW2EtejAtOV0qKXwoPzooPzp4bi0tKVthLXowLTldKykpKD86LVthLXowLTldKykqKXwoPzpcXFsoPzooPzpJUHY2Oig/Oig/OlthLWYwLTldezEsNH0oPzo6W2EtZjAtOV17MSw0fSl7N30pfCg/Oig/ISg/Oi4qW2EtZjAtOV1bOlxcXV0pezcsfSkoPzpbYS1mMC05XXsxLDR9KD86OlthLWYwLTldezEsNH0pezAsNX0pPzo6KD86W2EtZjAtOV17MSw0fSg/OjpbYS1mMC05XXsxLDR9KXswLDV9KT8pKSl8KD86KD86SVB2NjooPzooPzpbYS1mMC05XXsxLDR9KD86OlthLWYwLTldezEsNH0pezV9Oil8KD86KD8hKD86LipbYS1mMC05XTopezUsfSkoPzpbYS1mMC05XXsxLDR9KD86OlthLWYwLTldezEsNH0pezAsM30pPzo6KD86W2EtZjAtOV17MSw0fSg/OjpbYS1mMC05XXsxLDR9KXswLDN9Oik/KSkpPyg/Oig/OjI1WzAtNV0pfCg/OjJbMC00XVswLTldKXwoPzoxWzAtOV17Mn0pfCg/OlsxLTldP1swLTldKSkoPzpcXC4oPzooPzoyNVswLTVdKXwoPzoyWzAtNF1bMC05XSl8KD86MVswLTldezJ9KXwoPzpbMS05XT9bMC05XSkpKXszfSkpXFxdKSkkLyk7XG5cbiAgICAgICAgdmFyIGhhc0VyciA9IGZhbHNlO1xuXG4gICAgICAgIGlmICghcmVnZXhfbmFtZS50ZXN0KG5hbWUudmFsKCkpKSB7XG4gICAgICAgICAgICBuYW1lLnBhcmVudCgpLmFkZENsYXNzKFwiZXJyb3JcIik7XG4gICAgICAgICAgICBoYXNFcnIgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghcmVnZXhfcGhvbmUudGVzdChwaG9uZS52YWwoKSkpIHtcbiAgICAgICAgICAgIHBob25lLnBhcmVudCgpLmFkZENsYXNzKFwiZXJyb3JcIik7XG4gICAgICAgICAgICBoYXNFcnIgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghcmVnZXhfZW1haWwudGVzdChlbWFpbC52YWwoKSkpIHtcbiAgICAgICAgICAgIGVtYWlsLnBhcmVudCgpLmFkZENsYXNzKFwiZXJyb3JcIik7XG4gICAgICAgICAgICBoYXNFcnIgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChoYXNFcnIpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBkYXRhID0ge1xuICAgICAgICAgICAgbmFtZTogbmFtZS52YWwoKSxcbiAgICAgICAgICAgIHBob25lOiBwaG9uZS52YWwoKSxcbiAgICAgICAgICAgIGNvbXBhbnk6IGNvbXBhbnkudmFsKCksXG4gICAgICAgICAgICBlbWFpbDogZW1haWwudmFsKClcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoZnJvbSAhPSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgZGF0YS5mcm9tID0gZnJvbTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5hbWUudmFsKFwiXCIpO1xuICAgICAgICBwaG9uZS52YWwoXCJcIik7XG4gICAgICAgIGNvbXBhbnkudmFsKFwiXCIpO1xuICAgICAgICBlbWFpbC52YWwoXCJcIik7XG5cbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogXCIvdGVvL2FqYXgtaGFuZGxlci9cIixcbiAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgICAgIGRhdGE6IHtkYXRhOiBkYXRhfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBVSWtpdC5vZmZjYW52YXMuaGlkZShbZm9yY2UgPSBmYWxzZV0pO1xuICAgICAgICAgICAgICAgIFVJa2l0Lm5vdGlmeSh7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IChyZXN1bHQgPT0gXCJzdWNjZXNzXCIpID8gJ9CS0LDRiNC1INGB0L7QvtCx0YnQtdC90LjQtSDRg9GB0L/QtdGI0L3QviDQvtGC0L/RgNCw0LLQu9C10L3QvicgOiAn0J7RiNC40LHQutCwINC+0YLQv9GA0LDQstC60Lgg0YHQvtC+0LHRidC10L3QuNGPJyxcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiByZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgIHRpbWVvdXQ6IDMwMDAsXG4gICAgICAgICAgICAgICAgICAgIHBvczogJ2JvdHRvbS1jZW50ZXInXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBVSWtpdC5ub3RpZnkoe1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAn0J7RiNC40LHQutCwINC+0YLQv9GA0LDQstC60Lgg0YHQvtC+0LHRidC10L3QuNGPJyxcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAnd2FybmluZycsXG4gICAgICAgICAgICAgICAgICAgIHRpbWVvdXQ6IDMwMDAsXG4gICAgICAgICAgICAgICAgICAgIHBvczogJ2JvdHRvbS1jZW50ZXInXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cbiAgICB9KTtcblxuICAgICQoXCIucHJvcG9zYWxfcmVxdWVzdFwiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoXCIjY2FsbGJhY2tfc291cmNlXCIpLmF0dHIoXCJkYXRhLXNvdXJjZVwiLCAkKHRoaXMpLmF0dHIoXCJkYXRhLXNvdXJjZVwiKSk7XG4gICAgfSk7XG5cbiAgICAkKFwiI3N1Ym1pdF9mb3JtMlwiKS5jbGljayhmdW5jdGlvbiAoZSkge1xuXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdmFyIG5hbWUgPSAkKFwiI25hbWU5XCIpO1xuICAgICAgICB2YXIgcXVlc3QgPSAkKFwiI3RleHQ5XCIpO1xuICAgICAgICB2YXIgZW1haWwgPSAkKFwiI21haWw5XCIpO1xuXG4gICAgICAgIHZhciByZWdleF9uYW1lID0gbmV3IFJlZ0V4cCgvLisvKTtcbiAgICAgICAgdmFyIHJlZ2V4X2VtYWlsID0gbmV3IFJlZ0V4cCgvXig/ISg/Oig/OlxceDIyP1xceDVDW1xceDAwLVxceDdFXVxceDIyPyl8KD86XFx4MjI/W15cXHg1Q1xceDIyXVxceDIyPykpezI1NSx9KSg/ISg/Oig/OlxceDIyP1xceDVDW1xceDAwLVxceDdFXVxceDIyPyl8KD86XFx4MjI/W15cXHg1Q1xceDIyXVxceDIyPykpezY1LH1AKSg/Oig/OltcXHgyMVxceDIzLVxceDI3XFx4MkFcXHgyQlxceDJEXFx4MkYtXFx4MzlcXHgzRFxceDNGXFx4NUUtXFx4N0VdKyl8KD86XFx4MjIoPzpbXFx4MDEtXFx4MDhcXHgwQlxceDBDXFx4MEUtXFx4MUZcXHgyMVxceDIzLVxceDVCXFx4NUQtXFx4N0ZdfCg/OlxceDVDW1xceDAwLVxceDdGXSkpKlxceDIyKSkoPzpcXC4oPzooPzpbXFx4MjFcXHgyMy1cXHgyN1xceDJBXFx4MkJcXHgyRFxceDJGLVxceDM5XFx4M0RcXHgzRlxceDVFLVxceDdFXSspfCg/OlxceDIyKD86W1xceDAxLVxceDA4XFx4MEJcXHgwQ1xceDBFLVxceDFGXFx4MjFcXHgyMy1cXHg1QlxceDVELVxceDdGXXwoPzpcXHg1Q1tcXHgwMC1cXHg3Rl0pKSpcXHgyMikpKSpAKD86KD86KD8hLipbXi5dezY0LH0pKD86KD86KD86eG4tLSk/W2EtejAtOV0rKD86LVthLXowLTldKykqXFwuKXsxLDEyNn0pezEsfSg/Oig/OlthLXpdW2EtejAtOV0qKXwoPzooPzp4bi0tKVthLXowLTldKykpKD86LVthLXowLTldKykqKXwoPzpcXFsoPzooPzpJUHY2Oig/Oig/OlthLWYwLTldezEsNH0oPzo6W2EtZjAtOV17MSw0fSl7N30pfCg/Oig/ISg/Oi4qW2EtZjAtOV1bOlxcXV0pezcsfSkoPzpbYS1mMC05XXsxLDR9KD86OlthLWYwLTldezEsNH0pezAsNX0pPzo6KD86W2EtZjAtOV17MSw0fSg/OjpbYS1mMC05XXsxLDR9KXswLDV9KT8pKSl8KD86KD86SVB2NjooPzooPzpbYS1mMC05XXsxLDR9KD86OlthLWYwLTldezEsNH0pezV9Oil8KD86KD8hKD86LipbYS1mMC05XTopezUsfSkoPzpbYS1mMC05XXsxLDR9KD86OlthLWYwLTldezEsNH0pezAsM30pPzo6KD86W2EtZjAtOV17MSw0fSg/OjpbYS1mMC05XXsxLDR9KXswLDN9Oik/KSkpPyg/Oig/OjI1WzAtNV0pfCg/OjJbMC00XVswLTldKXwoPzoxWzAtOV17Mn0pfCg/OlsxLTldP1swLTldKSkoPzpcXC4oPzooPzoyNVswLTVdKXwoPzoyWzAtNF1bMC05XSl8KD86MVswLTldezJ9KXwoPzpbMS05XT9bMC05XSkpKXszfSkpXFxdKSkkLyk7XG5cbiAgICAgICAgdmFyIGhhc0VyciA9IGZhbHNlO1xuXG4gICAgICAgIGlmICghcmVnZXhfbmFtZS50ZXN0KG5hbWUudmFsKCkpKSB7XG4gICAgICAgICAgICBuYW1lLnBhcmVudCgpLmFkZENsYXNzKFwiZXJyb3JcIik7XG4gICAgICAgICAgICBoYXNFcnIgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghcmVnZXhfbmFtZS50ZXN0KHF1ZXN0LnZhbCgpKSkge1xuICAgICAgICAgICAgcXVlc3QucGFyZW50KCkuYWRkQ2xhc3MoXCJlcnJvclwiKTtcbiAgICAgICAgICAgIGhhc0VyciA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFyZWdleF9lbWFpbC50ZXN0KGVtYWlsLnZhbCgpKSkge1xuICAgICAgICAgICAgZW1haWwucGFyZW50KCkuYWRkQ2xhc3MoXCJlcnJvclwiKTtcbiAgICAgICAgICAgIGhhc0VyciA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhhc0Vycikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGRhdGEgPSB7XG4gICAgICAgICAgICBuYW1lOiBuYW1lLnZhbCgpLFxuICAgICAgICAgICAgZW1haWw6IGVtYWlsLnZhbCgpLFxuICAgICAgICAgICAgcXVlc3Q6IHF1ZXN0LnZhbCgpXG4gICAgICAgIH07XG5cblxuICAgICAgICBuYW1lLnZhbChcIlwiKTtcbiAgICAgICAgcXVlc3QudmFsKFwiXCIpO1xuICAgICAgICBlbWFpbC52YWwoXCJcIik7XG5cbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogXCIvdGVvL2FqYXgtaGFuZGxlci9cIixcbiAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgICAgIGRhdGE6IHtkYXRhOiBkYXRhfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBVSWtpdC5vZmZjYW52YXMuaGlkZShbZm9yY2UgPSBmYWxzZV0pO1xuICAgICAgICAgICAgICAgIFVJa2l0Lm5vdGlmeSh7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IChyZXN1bHQgPT0gXCJzdWNjZXNzXCIpID8gJ9CS0LDRiNC1INGB0L7QvtCx0YnQtdC90LjQtSDRg9GB0L/QtdGI0L3QviDQvtGC0L/RgNCw0LLQu9C10L3QvicgOiAn0J7RiNC40LHQutCwINC+0YLQv9GA0LDQstC60Lgg0YHQvtC+0LHRidC10L3QuNGPJyxcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiByZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgIHRpbWVvdXQ6IDMwMDAsXG4gICAgICAgICAgICAgICAgICAgIHBvczogJ2JvdHRvbS1jZW50ZXInXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBVSWtpdC5ub3RpZnkoe1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAn0J7RiNC40LHQutCwINC+0YLQv9GA0LDQstC60Lgg0YHQvtC+0LHRidC10L3QuNGPJyxcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAnd2FybmluZycsXG4gICAgICAgICAgICAgICAgICAgIHRpbWVvdXQ6IDMwMDAsXG4gICAgICAgICAgICAgICAgICAgIHBvczogJ2JvdHRvbS1jZW50ZXInXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cbiAgICB9KTtcblxuXG5cbiAgICAkKFwiLmlucHV0ZmlsZV9idXR0b25cIikuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIGJ1dHRvbiA9ICQodGhpcykuY2xvc2VzdChcIi5mZWVkYmFja19mb3JtX2lucHV0ZmlsZV9ibG9ja1wiKS5maW5kKFwiLmlucHV0ZmlsZV9pbnB1dFwiKTtcbiAgICAgICAgYnV0dG9uLnRyaWdnZXIoXCJjbGlja1wiKTtcbiAgICB9KTtcblxuICAgICQoXCIuaW5wdXRmaWxlX2lucHV0XCIpLmNoYW5nZShmdW5jdGlvbigpe1xuICAgICAgICB2YXIgdmFsID0gJCh0aGlzKS52YWwoKTtcblxuICAgICAgICB2YXIgaHRtbCA9IHZhbDtcbiAgICAgICAgdmFyIHJlZz0gbmV3IFJlZ0V4cChcIlteKl0oXFwudHh0fFxcLmpwZ3xcXC5wbmd8XFwuemlwfFxcLnJhcnxcXC5kb2N8XFwuZG9jeHxcXC54bHN8XFwueGxzeHxcXC5wZGYpXCIsICdpJyk7XG4gICAgICAgIGlmICghcmVnLnRlc3QodmFsKSkge1xuICAgICAgICAgICAgaHRtbCA9IFwiPHNwYW4gY2xhc3M9XFxcInJlZFxcXCI+0J3QtdCy0LXRgNC90L7QtSDRgNCw0YHRiNC40YDQtdC90LjQtSDRhNCw0LnQu9CwPC9zcGFuPlwiO1xuICAgICAgICAgICAgJCh0aGlzKS52YWwoXCJcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgc2l6ZSA9IHRoaXMuZmlsZXNbMF0uc2l6ZTtcbiAgICAgICAgICAgIGlmIChzaXplID4gNSAqIDEwMjQgKiAxMDI0KXtcbiAgICAgICAgICAgICAgICBodG1sID0gXCI8c3BhbiBjbGFzcz1cXFwicmVkXFxcIj7QoNCw0LfQvNC10YAg0YTQsNC50LvQsCDQv9GA0LXQstGL0YjQsNC10YIgNSDQnNCxPC9zcGFuPlwiO1xuICAgICAgICAgICAgICAgICQodGhpcykudmFsKFwiXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YWxfbWFzID0gdmFsLnNwbGl0KFwiXFxcXFwiKTtcbiAgICAgICAgICAgICAgICBodG1sID0gdmFsX21hc1t2YWxfbWFzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoXCIuZmVlZGJhY2tfZm9ybV9pbnB1dGZpbGVfYmxvY2tcIikuZmluZChcIi5pbnB1dGZpbGVfY2FwdGlvblwiKS5odG1sKGh0bWwpLmF0dHIoXCJ0aXRsZVwiLCB2YWwpO1xuICAgIH0pO1xuXG4gICAgJChcIi5mZWVkYmFja19yYWRpb19pbnB1dFwiKS5jaGFuZ2UoZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIGJsb2NraWQgPSAkKHRoaXMpLnZhbCgpO1xuICAgICAgICAkKFwiLmZlZWRiYWNrX2NvbnRhaW5lclwiKS5ub3QoXCIjZmVlZGJhY2tfXCIgKyBibG9ja2lkKS5zbGlkZVVwKDMwMCk7XG4gICAgICAgICQoXCIjZmVlZGJhY2tfXCIgKyBibG9ja2lkKS5zbGlkZURvd24oMzAwKTtcbiAgICB9KVxufSk7Il19
