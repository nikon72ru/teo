$(document).ready(function(){$(".js-input").on("focus focusout",function(e){e.preventDefault(),$(e.target).parent().toggleClass("is_focused"),"focusout"==e.type&&$(e.target).val($.trim($(e.target).val()))}),$(".js-input").on("change keyup",function(e){e.preventDefault(),""===$.trim($(e.target).val())||$(e.target).hasClass("is_filled")?$(e.target).parent().removeClass("is_filled"):$(e.target).parent().addClass("is_filled"),$(this).parent().removeClass("error")}),$(".js-phone").on("focusout",function(e){e.preventDefault();var t=$(this).val().replace(/[^0-9]/gi,"");7==t.substr(0,1)&&(t="+7"+t.substr(1,t.length-1)),$(this).val(t)});var e=$("#svg1"),t=$("#svg2"),a=$(".header__content"),n=0,i=3;t.find("polygon").click(function(){a.eq(i).toggleClass("active"),i=$(this).index()-1,a.eq(i).toggleClass("active")}).mouseover(function(){n=$(this).index()-1,e.find("polygon").eq(n).toggleClass("active")}).mouseleave(function(){n=$(this).index()-1,e.find("polygon").eq(n).toggleClass("active")});var s=$("#svg_on_mappage");s.find("polygon").mouseover(function(){n=$(this).index()-1,s.find("polygon").eq(n).toggleClass("active")}).mouseleave(function(){n=$(this).index()-1,s.find("polygon").eq(n).toggleClass("active")}).click(function(){n=$(this).index()-1,window.location.replace(s.find("polygon").eq(n).attr("data-link"))}),$("#submit_form").click(function(e){e.preventDefault();var t=$("#callback_source").attr("data-source"),a=$("#name"),n=$("#phone"),i=$("#company"),s=$("#mail"),o=new RegExp(/\d{11}/),x=new RegExp(/.+/),r=new RegExp(/^(?!(?:(?:\x22?\x5C[\x00-\x7E]\x22?)|(?:\x22?[^\x5C\x22]\x22?)){255,})(?!(?:(?:\x22?\x5C[\x00-\x7E]\x22?)|(?:\x22?[^\x5C\x22]\x22?)){65,}@)(?:(?:[\x21\x23-\x27\x2A\x2B\x2D\x2F-\x39\x3D\x3F\x5E-\x7E]+)|(?:\x22(?:[\x01-\x08\x0B\x0C\x0E-\x1F\x21\x23-\x5B\x5D-\x7F]|(?:\x5C[\x00-\x7F]))*\x22))(?:\.(?:(?:[\x21\x23-\x27\x2A\x2B\x2D\x2F-\x39\x3D\x3F\x5E-\x7E]+)|(?:\x22(?:[\x01-\x08\x0B\x0C\x0E-\x1F\x21\x23-\x5B\x5D-\x7F]|(?:\x5C[\x00-\x7F]))*\x22)))*@(?:(?:(?!.*[^.]{64,})(?:(?:(?:xn--)?[a-z0-9]+(?:-[a-z0-9]+)*\.){1,126}){1,}(?:(?:[a-z][a-z0-9]*)|(?:(?:xn--)[a-z0-9]+))(?:-[a-z0-9]+)*)|(?:\[(?:(?:IPv6:(?:(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){7})|(?:(?!(?:.*[a-f0-9][:\]]){7,})(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,5})?::(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,5})?)))|(?:(?:IPv6:(?:(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){5}:)|(?:(?!(?:.*[a-f0-9]:){5,})(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,3})?::(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,3}:)?)))?(?:(?:25[0-5])|(?:2[0-4][0-9])|(?:1[0-9]{2})|(?:[1-9]?[0-9]))(?:\.(?:(?:25[0-5])|(?:2[0-4][0-9])|(?:1[0-9]{2})|(?:[1-9]?[0-9]))){3}))\]))$/),l=!1;if(x.test(a.val())||(a.parent().addClass("error"),l=!0),o.test(n.val())||(n.parent().addClass("error"),l=!0),r.test(s.val())||(s.parent().addClass("error"),l=!0),l)return!1;var c={name:a.val(),phone:n.val(),company:i.val(),email:s.val()};null!=t&&(c.from=t),a.val(""),n.val(""),i.val(""),s.val(""),$.ajax({url:"/ajax-handler/",type:"POST",data:{data:c},success:function(e){UIkit.offcanvas.hide([force=!1]),UIkit.notify({message:"success"==e?"Ваше сообщение успешно отправлено":"Ошибка отправки сообщения",status:e,timeout:3e3,pos:"bottom-center"})},error:function(e){UIkit.notify({message:"Ошибка отправки сообщения",status:"warning",timeout:3e3,pos:"bottom-center"})}})}),$(".proposal_request").click(function(){$("#callback_source").attr("data-source",$(this).attr("data-source"))}),$("#submit_form2").click(function(e){e.preventDefault();var t=$("#name9"),a=$("#text9"),n=$("#mail9"),i=new RegExp(/.+/),s=new RegExp(/^(?!(?:(?:\x22?\x5C[\x00-\x7E]\x22?)|(?:\x22?[^\x5C\x22]\x22?)){255,})(?!(?:(?:\x22?\x5C[\x00-\x7E]\x22?)|(?:\x22?[^\x5C\x22]\x22?)){65,}@)(?:(?:[\x21\x23-\x27\x2A\x2B\x2D\x2F-\x39\x3D\x3F\x5E-\x7E]+)|(?:\x22(?:[\x01-\x08\x0B\x0C\x0E-\x1F\x21\x23-\x5B\x5D-\x7F]|(?:\x5C[\x00-\x7F]))*\x22))(?:\.(?:(?:[\x21\x23-\x27\x2A\x2B\x2D\x2F-\x39\x3D\x3F\x5E-\x7E]+)|(?:\x22(?:[\x01-\x08\x0B\x0C\x0E-\x1F\x21\x23-\x5B\x5D-\x7F]|(?:\x5C[\x00-\x7F]))*\x22)))*@(?:(?:(?!.*[^.]{64,})(?:(?:(?:xn--)?[a-z0-9]+(?:-[a-z0-9]+)*\.){1,126}){1,}(?:(?:[a-z][a-z0-9]*)|(?:(?:xn--)[a-z0-9]+))(?:-[a-z0-9]+)*)|(?:\[(?:(?:IPv6:(?:(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){7})|(?:(?!(?:.*[a-f0-9][:\]]){7,})(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,5})?::(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,5})?)))|(?:(?:IPv6:(?:(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){5}:)|(?:(?!(?:.*[a-f0-9]:){5,})(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,3})?::(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,3}:)?)))?(?:(?:25[0-5])|(?:2[0-4][0-9])|(?:1[0-9]{2})|(?:[1-9]?[0-9]))(?:\.(?:(?:25[0-5])|(?:2[0-4][0-9])|(?:1[0-9]{2})|(?:[1-9]?[0-9]))){3}))\]))$/),o=!1;if(i.test(t.val())||(t.parent().addClass("error"),o=!0),i.test(a.val())||(a.parent().addClass("error"),o=!0),s.test(n.val())||(n.parent().addClass("error"),o=!0),o)return!1;var x={name:t.val(),email:n.val(),quest:a.val()};t.val(""),a.val(""),n.val(""),$.ajax({url:"/ajax-handler/",type:"POST",data:{data:x},success:function(e){UIkit.offcanvas.hide([force=!1]),UIkit.notify({message:"success"==e?"Ваше сообщение успешно отправлено":"Ошибка отправки сообщения",status:e,timeout:3e3,pos:"bottom-center"})},error:function(e){UIkit.notify({message:"Ошибка отправки сообщения",status:"warning",timeout:3e3,pos:"bottom-center"})}})}),$(".inputfile_button").click(function(){$(this).closest(".feedback_form_inputfile_block").find(".inputfile_input").trigger("click")}),$(".inputfile_input").change(function(){var e=$(this).val(),t=e;new RegExp("[^*](.txt|.jpg|.png|.zip|.rar|.doc|.docx|.xls|.xlsx|.pdf)","i").test(e)?5242880<this.files[0].size?(t='<span class="red">Размер файла превышает 5 Мб</span>',$(this).val("")):(val_mas=e.split("\\"),t=val_mas[val_mas.length-1]):(t='<span class="red">Неверное расширение файла</span>',$(this).val(""));$(this).closest(".feedback_form_inputfile_block").find(".inputfile_caption").html(t).attr("title",e)}),$(".feedback_radio_input").change(function(){var e=$(this).val();$(".feedback_container").not("#feedback_"+e).slideUp(300),$("#feedback_"+e).slideDown(300)}),$(".canSpeak").mouseenter(function(){"true"==sessionStorage.getItem("isInvalid")&&function e(t){speechSynthesis.speaking?(speechSynthesis.cancel(),null!==o&&clearTimeout(o),o=setTimeout(function(){e(t)},250)):speechSynthesis.speak(t)}(new SpeechSynthesisUtterance($(this)[0].innerText))});var o=null;var x=$(".menu__phone-container__icon");function r(){var e=$("#grid-group");960<=window.innerWidth?e.height(window.innerHeight-170):e.height("initial")}$(".invalid").click(function(){"true"==sessionStorage.getItem("isInvalid")?($(this).css("fill","black"),x.css("box-shadow","none"),sessionStorage.setItem("isInvalid",!1)):($(this).css("fill","#e9ac45"),$(this).find(".menu__phone-container__icon")&&x.css("box-shadow","white 0px 0px 5px 2px"),sessionStorage.setItem("isInvalid",!0))}),"true"==sessionStorage.getItem("isInvalid")&&($(".invalid").css("fill","#e9ac45"),x.css("box-shadow","white 0px 0px 5px 2px")),r(),$(window).resize(function(){r()}),$(".ecotek_inputtext.custom_form").change(function(){var e=$(this),t=e.val();e.parent().find(".custom_form_span_thema").text(t)}),$(".to_validate").inputmask(),$(".to_validate").on("change keyup",function(e){$(this).parent().removeClass("form__element error")}),$(".ecotek_button3").click(function(e){e.preventDefault();var t=$(this).parent().parent().parent(),a=!1;t.find(".rules_checkbox").is(":checked")||(a=!0,alert("Вы должны согласиться с политикой обработки данных!")),t.find(".to_validate").each(function(e,t){!$(t).inputmask("isComplete")&&".*"!=$(t).data("inputmask-regex")&&0<$(t).parent().parent().find(".notnull_icon").length&&(a=!0,$(t).parent().addClass("form__element error"))});var i=new FormData;if(i.append("full",!0),i.append("id",(new Date).getTime()),!a){t.find(".feedback_form_item").each(function(e,t){try{var a=$(t).find(".feedback_form_caption")[0].childNodes[0].data,n=$(t).find(".ecotek_inputtext")[0];i.append(a.trim(),$(n).val())}catch(e){}});try{i.append("file",t.find("#dopfile").prop("files")[0])}catch(e){}$.ajax({url:"/ajax-handler/",type:"POST",data:i,processData:!1,contentType:!1,success:function(e){UIkit.notify({message:"success"==e?"Ваше сообщение успешно отправлено, номер обращения: "+i.get("id")+"\nНомер обращения так же продублирован на вашу почту":"Ошибка отправки сообщения",status:e,timeout:6e3,pos:"bottom-center"}),"success"==e&&$(".ecotek_inputtext").val("")},error:function(e){UIkit.notify({message:"Ошибка отправки сообщения",status:"warning",timeout:3e3,pos:"bottom-center"})}})}})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbXBsYXRlLmpzIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInJlYWR5Iiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJwYXJlbnQiLCJ0b2dnbGVDbGFzcyIsInR5cGUiLCJ2YWwiLCJ0cmltIiwiaGFzQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwidGhpcyIsInJlcGxhY2UiLCJzdWJzdHIiLCJsZW5ndGgiLCJzdmcxIiwic3ZnMiIsImNvbnRlbnRzIiwiaSIsImoiLCJmaW5kIiwiY2xpY2siLCJlcSIsImluZGV4IiwibW91c2VvdmVyIiwibW91c2VsZWF2ZSIsInN2Z19vbl9wYWdlIiwid2luZG93IiwibG9jYXRpb24iLCJhdHRyIiwiZnJvbSIsIm5hbWUiLCJwaG9uZSIsImNvbXBhbnkiLCJlbWFpbCIsInJlZ2V4X3Bob25lIiwiUmVnRXhwIiwicmVnZXhfbmFtZSIsInJlZ2V4X2VtYWlsIiwiaGFzRXJyIiwidGVzdCIsImRhdGEiLCJ1bmRlZmluZWQiLCJhamF4IiwidXJsIiwic3VjY2VzcyIsInJlc3VsdCIsIlVJa2l0Iiwib2ZmY2FudmFzIiwiaGlkZSIsImZvcmNlIiwibm90aWZ5IiwibWVzc2FnZSIsInN0YXR1cyIsInRpbWVvdXQiLCJwb3MiLCJlcnJvciIsInF1ZXN0IiwiY2xvc2VzdCIsInRyaWdnZXIiLCJjaGFuZ2UiLCJodG1sIiwiZmlsZXMiLCJzaXplIiwidmFsX21hcyIsInNwbGl0IiwiYmxvY2tpZCIsIm5vdCIsInNsaWRlVXAiLCJzbGlkZURvd24iLCJtb3VzZWVudGVyIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwic2F5IiwidGV4dCIsInNwZWVjaFN5bnRoZXNpcyIsInNwZWFraW5nIiwiY2FuY2VsIiwic2F5VGltZW91dCIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJzcGVhayIsIlNwZWVjaFN5bnRoZXNpc1V0dGVyYW5jZSIsImlubmVyVGV4dCIsImljb25faW52YWxpZCIsImNoYW5nZUhlaWdodE1haW5CbG9jayIsImdyb3VwIiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwiY3NzIiwic2V0SXRlbSIsInJlc2l6ZSIsInNlbGVjdCIsInRpdGxlIiwiaW5wdXRtYXNrIiwiY3VycmVudF9mb3JtIiwiaXMiLCJhbGVydCIsImVhY2giLCJudW0iLCJlbCIsInJlc3VsdHMiLCJGb3JtRGF0YSIsImFwcGVuZCIsIkRhdGUiLCJnZXRUaW1lIiwiY2hpbGROb2RlcyIsImNvbnRlbnRfbm9kZSIsImV4IiwicHJvcCIsInByb2Nlc3NEYXRhIiwiY29udGVudFR5cGUiLCJnZXQiXSwibWFwcGluZ3MiOiJBQUFBQSxFQUFFQyxVQUFVQyxNQUFNLFdBc0JoQkYsRUFBRSxhQUFhRyxHQUFHLGlCQUFrQixTQUFTQyxHQUN2Q0EsRUFBRUMsaUJBQ0ZMLEVBQUVJLEVBQUVFLFFBQVFDLFNBQVNDLFlBQVksY0FDcEIsWUFBVkosRUFBRUssTUFDRFQsRUFBRUksRUFBRUUsUUFBUUksSUFBSVYsRUFBRVcsS0FBS1gsRUFBRUksRUFBRUUsUUFBUUksVUFHM0NWLEVBQUUsYUFBYUcsR0FBRyxlQUFnQixTQUFTQyxHQUN2Q0EsRUFBRUMsaUJBQytCLEtBQTlCTCxFQUFFVyxLQUFLWCxFQUFFSSxFQUFFRSxRQUFRSSxRQUFrQlYsRUFBRUksRUFBRUUsUUFBUU0sU0FBUyxhQUd6RFosRUFBRUksRUFBRUUsUUFBUUMsU0FBU00sWUFBWSxhQUZqQ2IsRUFBRUksRUFBRUUsUUFBUUMsU0FBU08sU0FBUyxhQUlsQ2QsRUFBRWUsTUFBTVIsU0FBU00sWUFBWSxXQUVqQ2IsRUFBRSxhQUFhRyxHQUFHLFdBQVksU0FBU0MsR0FDbkNBLEVBQUVDLGlCQUNGLElBQUlLLEVBQU1WLEVBQUVlLE1BQU1MLE1BQU1NLFFBQVEsV0FBVyxJQUNwQixHQUFwQk4sRUFBSU8sT0FBTyxFQUFHLEtBQ2JQLEVBQU0sS0FBT0EsRUFBSU8sT0FBTyxFQUFHUCxFQUFJUSxPQUFTLElBRTVDbEIsRUFBRWUsTUFBTUws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LFNBQVVDLEVBQUtDLEdBQ3pELElBQ0ksSUFBSVAsRUFBUWxHLEVBQUV5RyxHQUFJakYsS0FBSywwQkFBMEIsR0FBR3VGLFdBQVcsR0FBR2xFLEtBQzlEbUUsRUFBZWhILEVBQUV5RyxHQUFJakYsS0FBSyxxQkFBcUIsR0FDbkRrRixFQUFRRSxPQUFPVixFQUFNdkYsT0FBT1gsRUFBRWdILEdBQWN0RyxPQUM5QyxNQUFPdUcsT0FLYixJQUNJUCxFQUFRRSxPQUFPLE9BQVFSLEVBQWE1RSxLQUFLLFlBQVkwRixLQUFLLFNBQVMsSUFDckUsTUFBT0QsSUFHVGpILEVBQUUrQyxLQUFLLENBQ0hDLElBQUssaUJBQ0x2QyxLQUFNLE9BQ05vQyxLQUFNNkQsRUFDTlMsYUFBYSxFQUNiQyxhQUFhLEVBQ2JuRSxRQUFTLFNBQVVDLEdBQ2ZDLE1BQU1JLE9BQU8sQ0FDVEMsUUFBb0IsV0FBVk4sRUFBdUIsdURBQXlEd0QsRUFBUVcsSUFBSSxNQUFRLHVEQUEwRCw0QkFDeEs1RCxPQUFRUCxFQUNSUSxRQUFTLElBQ1RDLElBQUssa0JBRUssV0FBVlQsR0FDQWxELEVBQUUscUJBQXFCVSxJQUFJLEtBR25Da0QsTUFBTyxTQUFVVixHQUNiQyxNQUFNSSxPQUFPLENBQ1RDLFFBQVMsNEJBQ1RDLE9BQVEsVUFDUkMsUUFBUyxJQUNUQyxJQUFLIiwiZmlsZSI6InRlbXBsYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIExhbmd1YWdlIHNlbGVjdCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAgIHZhciBtb2RhbCA9IFVJa2l0Lm1vZGFsKFwiI2xhbmctbW9kYWxcIik7XG4gICAgICAgIHZhciBsYW5nID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnbGFuZ3VhZ2UnKTtcbiAgICAgICAgaWYgKGxhbmcgPT0gbnVsbCB8fCBsYW5nID09IFwibnVsbFwiKSB7XG4gICAgICAgICAgICBtb2RhbC5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBpZiAoIXdpbmRvdy5sb2NhdGlvbi5ocmVmLm1hdGNoKGxhbmcpKXtcbiAgICAgICAgICAgIC8vICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGxhbmc7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgIH1cbiAgICAgICAgJChcIi5sYW5nLXZhclwiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwibGFuZ3VhZ2VcIiwgJCh0aGlzKS5kYXRhKFwibGFuZ1wiKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoXCIuY2l0eV9saW5rXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIG1vZGFsLnNob3coKTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEVuZCBsYW5ndWFnZSBzZWxlY3QgLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG4gICQoJy5qcy1pbnB1dCcpLm9uKCdmb2N1cyBmb2N1c291dCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAkKGUudGFyZ2V0KS5wYXJlbnQoKS50b2dnbGVDbGFzcygnaXNfZm9jdXNlZCcpO1xuICAgICAgICBpZihlLnR5cGUgPT0gJ2ZvY3Vzb3V0Jykge1xuICAgICAgICAgICAgJChlLnRhcmdldCkudmFsKCQudHJpbSgkKGUudGFyZ2V0KS52YWwoKSkpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgJCgnLmpzLWlucHV0Jykub24oJ2NoYW5nZSBrZXl1cCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZigkLnRyaW0oJChlLnRhcmdldCkudmFsKCkpICE9PSAnJyAmJiAhJChlLnRhcmdldCkuaGFzQ2xhc3MoJ2lzX2ZpbGxlZCcpKSB7XG4gICAgICAgICAgICAkKGUudGFyZ2V0KS5wYXJlbnQoKS5hZGRDbGFzcygnaXNfZmlsbGVkJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKGUudGFyZ2V0KS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnaXNfZmlsbGVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5yZW1vdmVDbGFzcyhcImVycm9yXCIpO1xuICAgIH0pO1xuICAgICQoJy5qcy1waG9uZScpLm9uKCdmb2N1c291dCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB2YXIgdmFsID0gJCh0aGlzKS52YWwoKS5yZXBsYWNlKC9bXjAtOV0vZ2ksJycpO1xuICAgICAgICBpZih2YWwuc3Vic3RyKDAsIDEpID09IDcpIHtcbiAgICAgICAgICAgIHZhbCA9ICcrNycgKyB2YWwuc3Vic3RyKDEsIHZhbC5sZW5ndGggLSAxKTtcbiAgICAgICAgfVxuICAgICAgICAkKHRoaXMpLnZhbCh2YWwpO1xuICAgIH0pO1xuXG4gICAgdmFyIHN2ZzEgPSAkKCcjc3ZnMScpO1xuICAgIHZhciBzdmcyID0gJCgnI3N2ZzInKTtcbiAgICB2YXIgY29udGVudHMgPSAkKCcuaGVhZGVyX19jb250ZW50Jyk7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBqID0gMztcbiAgICBzdmcyLmZpbmQoJ3BvbHlnb24nKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgIGNvbnRlbnRzLmVxKGopLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgIGogPSAkKHRoaXMpLmluZGV4KCktMTtcbiAgICAgIGNvbnRlbnRzLmVxKGopLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgICB9KVxuICAgIC5tb3VzZW92ZXIoZnVuY3Rpb24oKSB7XG4gICAgICBpID0gJCh0aGlzKS5pbmRleCgpLTE7XG4gICAgICBzdmcxLmZpbmQoJ3BvbHlnb24nKS5lcShpKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICAgfSlcbiAgICAubW91c2VsZWF2ZShmdW5jdGlvbigpIHtcbiAgICAgIGkgPSAkKHRoaXMpLmluZGV4KCktMTtcbiAgICAgIHN2ZzEuZmluZCgncG9seWdvbicpLmVxKGkpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgICB9KTtcblxuICAgIHZhciBzdmdfb25fcGFnZSA9ICQoXCIjc3ZnX29uX21hcHBhZ2VcIik7XG4gICAgc3ZnX29uX3BhZ2UuZmluZCgncG9seWdvbicpXG4gICAgICAgIC5tb3VzZW92ZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICBpID0gJCh0aGlzKS5pbmRleCgpLTE7XG4gICAgICAgIHN2Z19vbl9wYWdlLmZpbmQoJ3BvbHlnb24nKS5lcShpKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5tb3VzZWxlYXZlKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaSA9ICQodGhpcykuaW5kZXgoKS0xO1xuICAgICAgICAgICAgc3ZnX29uX3BhZ2UuZmluZCgncG9seWdvbicpLmVxKGkpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGkgPSAkKHRoaXMpLmluZGV4KCktMTtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKHN2Z19vbl9wYWdlLmZpbmQoJ3BvbHlnb24nKS5lcShpKS5hdHRyKFwiZGF0YS1saW5rXCIpKTtcbiAgICAgICAgfSk7XG5cbiAgICAkKFwiI3N1Ym1pdF9mb3JtXCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG5cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB2YXIgZnJvbSA9ICQoXCIjY2FsbGJhY2tfc291cmNlXCIpLmF0dHIoXCJkYXRhLXNvdXJjZVwiKTtcbiAgICAgICAgdmFyIG5hbWUgPSAkKFwiI25hbWVcIik7XG4gICAgICAgIHZhciBwaG9uZSA9ICQoXCIjcGhvbmVcIik7XG4gICAgICAgIHZhciBjb21wYW55ID0gJChcIiNjb21wYW55XCIpO1xuICAgICAgICB2YXIgZW1haWwgPSAkKFwiI21haWxcIik7XG5cbiAgICAgICAgdmFyIHJlZ2V4X3Bob25lID0gbmV3IFJlZ0V4cCgvXFxkezExfS8pO1xuICAgICAgICB2YXIgcmVnZXhfbmFtZSA9IG5ldyBSZWdFeHAoLy4rLyk7XG4gICAgICAgIHZhciByZWdleF9lbWFpbCA9IG5ldyBSZWdFeHAoL14oPyEoPzooPzpcXHgyMj9cXHg1Q1tcXHgwMC1cXHg3RV1cXHgyMj8pfCg/OlxceDIyP1teXFx4NUNcXHgyMl1cXHgyMj8pKXsyNTUsfSkoPyEoPzooPzpcXHgyMj9cXHg1Q1tcXHgwMC1cXHg3RV1cXHgyMj8pfCg/OlxceDIyP1teXFx4NUNcXHgyMl1cXHgyMj8pKXs2NSx9QCkoPzooPzpbXFx4MjFcXHgyMy1cXHgyN1xceDJBXFx4MkJcXHgyRFxceDJGLVxceDM5XFx4M0RcXHgzRlxceDVFLVxceDdFXSspfCg/OlxceDIyKD86W1xceDAxLVxceDA4XFx4MEJcXHgwQ1xceDBFLVxceDFGXFx4MjFcXHgyMy1cXHg1QlxceDVELVxceDdGXXwoPzpcXHg1Q1tcXHgwMC1cXHg3Rl0pKSpcXHgyMikpKD86XFwuKD86KD86W1xceDIxXFx4MjMtXFx4MjdcXHgyQVxceDJCXFx4MkRcXHgyRi1cXHgzOVxceDNEXFx4M0ZcXHg1RS1cXHg3RV0rKXwoPzpcXHgyMig/OltcXHgwMS1cXHgwOFxceDBCXFx4MENcXHgwRS1cXHgxRlxceDIxXFx4MjMtXFx4NUJcXHg1RC1cXHg3Rl18KD86XFx4NUNbXFx4MDAtXFx4N0ZdKSkqXFx4MjIpKSkqQCg/Oig/Oig/IS4qW14uXXs2NCx9KSg/Oig/Oig/OnhuLS0pP1thLXowLTldKyg/Oi1bYS16MC05XSspKlxcLil7MSwxMjZ9KXsxLH0oPzooPzpbYS16XVthLXowLTldKil8KD86KD86eG4tLSlbYS16MC05XSspKSg/Oi1bYS16MC05XSspKil8KD86XFxbKD86KD86SVB2NjooPzooPzpbYS1mMC05XXsxLDR9KD86OlthLWYwLTldezEsNH0pezd9KXwoPzooPyEoPzouKlthLWYwLTldWzpcXF1dKXs3LH0pKD86W2EtZjAtOV17MSw0fSg/OjpbYS1mMC05XXsxLDR9KXswLDV9KT86Oig/OlthLWYwLTldezEsNH0oPzo6W2EtZjAtOV17MSw0fSl7MCw1fSk/KSkpfCg/Oig/OklQdjY6KD86KD86W2EtZjAtOV17MSw0fSg/OjpbYS1mMC05XXsxLDR9KXs1fTopfCg/Oig/ISg/Oi4qW2EtZjAtOV06KXs1LH0pKD86W2EtZjAtOV17MSw0fSg/OjpbYS1mMC05XXsxLDR9KXswLDN9KT86Oig/OlthLWYwLTldezEsNH0oPzo6W2EtZjAtOV17MSw0fSl7MCwzfTopPykpKT8oPzooPzoyNVswLTVdKXwoPzoyWzAtNF1bMC05XSl8KD86MVswLTldezJ9KXwoPzpbMS05XT9bMC05XSkpKD86XFwuKD86KD86MjVbMC01XSl8KD86MlswLTRdWzAtOV0pfCg/OjFbMC05XXsyfSl8KD86WzEtOV0/WzAtOV0pKSl7M30pKVxcXSkpJC8pO1xuXG4gICAgICAgIHZhciBoYXNFcnIgPSBmYWxzZTtcblxuICAgICAgICBpZiAoIXJlZ2V4X25hbWUudGVzdChuYW1lLnZhbCgpKSkge1xuICAgICAgICAgICAgbmFtZS5wYXJlbnQoKS5hZGRDbGFzcyhcImVycm9yXCIpO1xuICAgICAgICAgICAgaGFzRXJyID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXJlZ2V4X3Bob25lLnRlc3QocGhvbmUudmFsKCkpKSB7XG4gICAgICAgICAgICBwaG9uZS5wYXJlbnQoKS5hZGRDbGFzcyhcImVycm9yXCIpO1xuICAgICAgICAgICAgaGFzRXJyID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXJlZ2V4X2VtYWlsLnRlc3QoZW1haWwudmFsKCkpKSB7XG4gICAgICAgICAgICBlbWFpbC5wYXJlbnQoKS5hZGRDbGFzcyhcImVycm9yXCIpO1xuICAgICAgICAgICAgaGFzRXJyID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaGFzRXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZGF0YSA9IHtcbiAgICAgICAgICAgIG5hbWU6IG5hbWUudmFsKCksXG4gICAgICAgICAgICBwaG9uZTogcGhvbmUudmFsKCksXG4gICAgICAgICAgICBjb21wYW55OiBjb21wYW55LnZhbCgpLFxuICAgICAgICAgICAgZW1haWw6IGVtYWlsLnZhbCgpXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGZyb20gIT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIGRhdGEuZnJvbSA9IGZyb207XG4gICAgICAgIH1cblxuICAgICAgICBuYW1lLnZhbChcIlwiKTtcbiAgICAgICAgcGhvbmUudmFsKFwiXCIpO1xuICAgICAgICBjb21wYW55LnZhbChcIlwiKTtcbiAgICAgICAgZW1haWwudmFsKFwiXCIpO1xuXG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6IFwiL2FqYXgtaGFuZGxlci9cIixcbiAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgICAgIGRhdGE6IHtkYXRhOiBkYXRhfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBVSWtpdC5vZmZjYW52YXMuaGlkZShbZm9yY2UgPSBmYWxzZV0pO1xuICAgICAgICAgICAgICAgIFVJa2l0Lm5vdGlmeSh7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IChyZXN1bHQgPT0gXCJzdWNjZXNzXCIpID8gJ9CS0LDRiNC1INGB0L7QvtCx0YnQtdC90LjQtSDRg9GB0L/QtdGI0L3QviDQvtGC0L/RgNCw0LLQu9C10L3QvicgOiAn0J7RiNC40LHQutCwINC+0YLQv9GA0LDQstC60Lgg0YHQvtC+0LHRidC10L3QuNGPJyxcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiByZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgIHRpbWVvdXQ6IDMwMDAsXG4gICAgICAgICAgICAgICAgICAgIHBvczogJ2JvdHRvbS1jZW50ZXInXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBVSWtpdC5ub3RpZnkoe1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAn0J7RiNC40LHQutCwINC+0YLQv9GA0LDQstC60Lgg0YHQvtC+0LHRidC10L3QuNGPJyxcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAnd2FybmluZycsXG4gICAgICAgICAgICAgICAgICAgIHRpbWVvdXQ6IDMwMDAsXG4gICAgICAgICAgICAgICAgICAgIHBvczogJ2JvdHRvbS1jZW50ZXInXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cbiAgICB9KTtcblxuICAgICQoXCIucHJvcG9zYWxfcmVxdWVzdFwiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoXCIjY2FsbGJhY2tfc291cmNlXCIpLmF0dHIoXCJkYXRhLXNvdXJjZVwiLCAkKHRoaXMpLmF0dHIoXCJkYXRhLXNvdXJjZVwiKSk7XG4gICAgfSk7XG5cbiAgICAkKFwiI3N1Ym1pdF9mb3JtMlwiKS5jbGljayhmdW5jdGlvbiAoZSkge1xuXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdmFyIG5hbWUgPSAkKFwiI25hbWU5XCIpO1xuICAgICAgICB2YXIgcXVlc3QgPSAkKFwiI3RleHQ5XCIpO1xuICAgICAgICB2YXIgZW1haWwgPSAkKFwiI21haWw5XCIpO1xuXG4gICAgICAgIHZhciByZWdleF9uYW1lID0gbmV3IFJlZ0V4cCgvLisvKTtcbiAgICAgICAgdmFyIHJlZ2V4X2VtYWlsID0gbmV3IFJlZ0V4cCgvXig/ISg/Oig/OlxceDIyP1xceDVDW1xceDAwLVxceDdFXVxceDIyPyl8KD86XFx4MjI/W15cXHg1Q1xceDIyXVxceDIyPykpezI1NSx9KSg/ISg/Oig/OlxceDIyP1xceDVDW1xceDAwLVxceDdFXVxceDIyPyl8KD86XFx4MjI/W15cXHg1Q1xceDIyXVxceDIyPykpezY1LH1AKSg/Oig/OltcXHgyMVxceDIzLVxceDI3XFx4MkFcXHgyQlxceDJEXFx4MkYtXFx4MzlcXHgzRFxceDNGXFx4NUUtXFx4N0VdKyl8KD86XFx4MjIoPzpbXFx4MDEtXFx4MDhcXHgwQlxceDBDXFx4MEUtXFx4MUZcXHgyMVxceDIzLVxceDVCXFx4NUQtXFx4N0ZdfCg/OlxceDVDW1xceDAwLVxceDdGXSkpKlxceDIyKSkoPzpcXC4oPzooPzpbXFx4MjFcXHgyMy1cXHgyN1xceDJBXFx4MkJcXHgyRFxceDJGLVxceDM5XFx4M0RcXHgzRlxceDVFLVxceDdFXSspfCg/OlxceDIyKD86W1xceDAxLVxceDA4XFx4MEJcXHgwQ1xceDBFLVxceDFGXFx4MjFcXHgyMy1cXHg1QlxceDVELVxceDdGXXwoPzpcXHg1Q1tcXHgwMC1cXHg3Rl0pKSpcXHgyMikpKSpAKD86KD86KD8hLipbXi5dezY0LH0pKD86KD86KD86eG4tLSk/W2EtejAtOV0rKD86LVthLXowLTldKykqXFwuKXsxLDEyNn0pezEsfSg/Oig/OlthLXpdW2EtejAtOV0qKXwoPzooPzp4bi0tKVthLXowLTldKykpKD86LVthLXowLTldKykqKXwoPzpcXFsoPzooPzpJUHY2Oig/Oig/OlthLWYwLTldezEsNH0oPzo6W2EtZjAtOV17MSw0fSl7N30pfCg/Oig/ISg/Oi4qW2EtZjAtOV1bOlxcXV0pezcsfSkoPzpbYS1mMC05XXsxLDR9KD86OlthLWYwLTldezEsNH0pezAsNX0pPzo6KD86W2EtZjAtOV17MSw0fSg/OjpbYS1mMC05XXsxLDR9KXswLDV9KT8pKSl8KD86KD86SVB2NjooPzooPzpbYS1mMC05XXsxLDR9KD86OlthLWYwLTldezEsNH0pezV9Oil8KD86KD8hKD86LipbYS1mMC05XTopezUsfSkoPzpbYS1mMC05XXsxLDR9KD86OlthLWYwLTldezEsNH0pezAsM30pPzo6KD86W2EtZjAtOV17MSw0fSg/OjpbYS1mMC05XXsxLDR9KXswLDN9Oik/KSkpPyg/Oig/OjI1WzAtNV0pfCg/OjJbMC00XVswLTldKXwoPzoxWzAtOV17Mn0pfCg/OlsxLTldP1swLTldKSkoPzpcXC4oPzooPzoyNVswLTVdKXwoPzoyWzAtNF1bMC05XSl8KD86MVswLTldezJ9KXwoPzpbMS05XT9bMC05XSkpKXszfSkpXFxdKSkkLyk7XG5cbiAgICAgICAgdmFyIGhhc0VyciA9IGZhbHNlO1xuXG4gICAgICAgIGlmICghcmVnZXhfbmFtZS50ZXN0KG5hbWUudmFsKCkpKSB7XG4gICAgICAgICAgICBuYW1lLnBhcmVudCgpLmFkZENsYXNzKFwiZXJyb3JcIik7XG4gICAgICAgICAgICBoYXNFcnIgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghcmVnZXhfbmFtZS50ZXN0KHF1ZXN0LnZhbCgpKSkge1xuICAgICAgICAgICAgcXVlc3QucGFyZW50KCkuYWRkQ2xhc3MoXCJlcnJvclwiKTtcbiAgICAgICAgICAgIGhhc0VyciA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFyZWdleF9lbWFpbC50ZXN0KGVtYWlsLnZhbCgpKSkge1xuICAgICAgICAgICAgZW1haWwucGFyZW50KCkuYWRkQ2xhc3MoXCJlcnJvclwiKTtcbiAgICAgICAgICAgIGhhc0VyciA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhhc0Vycikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGRhdGEgPSB7XG4gICAgICAgICAgICBuYW1lOiBuYW1lLnZhbCgpLFxuICAgICAgICAgICAgZW1haWw6IGVtYWlsLnZhbCgpLFxuICAgICAgICAgICAgcXVlc3Q6IHF1ZXN0LnZhbCgpXG4gICAgICAgIH07XG5cblxuICAgICAgICBuYW1lLnZhbChcIlwiKTtcbiAgICAgICAgcXVlc3QudmFsKFwiXCIpO1xuICAgICAgICBlbWFpbC52YWwoXCJcIik7XG5cbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogXCIvYWpheC1oYW5kbGVyL1wiLFxuICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgICAgICAgZGF0YToge2RhdGE6IGRhdGF9LFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIFVJa2l0Lm9mZmNhbnZhcy5oaWRlKFtmb3JjZSA9IGZhbHNlXSk7XG4gICAgICAgICAgICAgICAgVUlraXQubm90aWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogKHJlc3VsdCA9PSBcInN1Y2Nlc3NcIikgPyAn0JLQsNGI0LUg0YHQvtC+0LHRidC10L3QuNC1INGD0YHQv9C10YjQvdC+INC+0YLQv9GA0LDQstC70LXQvdC+JyA6ICfQntGI0LjQsdC60LAg0L7RgtC/0YDQsNCy0LrQuCDRgdC+0L7QsdGJ0LXQvdC40Y8nLFxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IHJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgdGltZW91dDogMzAwMCxcbiAgICAgICAgICAgICAgICAgICAgcG9zOiAnYm90dG9tLWNlbnRlcidcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIFVJa2l0Lm5vdGlmeSh7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfQntGI0LjQsdC60LAg0L7RgtC/0YDQsNCy0LrQuCDRgdC+0L7QsdGJ0LXQvdC40Y8nLFxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6ICd3YXJuaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgdGltZW91dDogMzAwMCxcbiAgICAgICAgICAgICAgICAgICAgcG9zOiAnYm90dG9tLWNlbnRlcidcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuICAgIH0pO1xuXG5cblxuICAgICQoXCIuaW5wdXRmaWxlX2J1dHRvblwiKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICB2YXIgYnV0dG9uID0gJCh0aGlzKS5jbG9zZXN0KFwiLmZlZWRiYWNrX2Zvcm1faW5wdXRmaWxlX2Jsb2NrXCIpLmZpbmQoXCIuaW5wdXRmaWxlX2lucHV0XCIpO1xuICAgICAgICBidXR0b24udHJpZ2dlcihcImNsaWNrXCIpO1xuICAgIH0pO1xuXG4gICAgJChcIi5pbnB1dGZpbGVfaW5wdXRcIikuY2hhbmdlKGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciB2YWwgPSAkKHRoaXMpLnZhbCgpO1xuXG4gICAgICAgIHZhciBodG1sID0gdmFsO1xuICAgICAgICB2YXIgcmVnPSBuZXcgUmVnRXhwKFwiW14qXShcXC50eHR8XFwuanBnfFxcLnBuZ3xcXC56aXB8XFwucmFyfFxcLmRvY3xcXC5kb2N4fFxcLnhsc3xcXC54bHN4fFxcLnBkZilcIiwgJ2knKTtcbiAgICAgICAgaWYgKCFyZWcudGVzdCh2YWwpKSB7XG4gICAgICAgICAgICBodG1sID0gXCI8c3BhbiBjbGFzcz1cXFwicmVkXFxcIj7QndC10LLQtdGA0L3QvtC1INGA0LDRgdGI0LjRgNC10L3QuNC1INGE0LDQudC70LA8L3NwYW4+XCI7XG4gICAgICAgICAgICAkKHRoaXMpLnZhbChcIlwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBzaXplID0gdGhpcy5maWxlc1swXS5zaXplO1xuICAgICAgICAgICAgaWYgKHNpemUgPiA1ICogMTAyNCAqIDEwMjQpe1xuICAgICAgICAgICAgICAgIGh0bWwgPSBcIjxzcGFuIGNsYXNzPVxcXCJyZWRcXFwiPtCg0LDQt9C80LXRgCDRhNCw0LnQu9CwINC/0YDQtdCy0YvRiNCw0LXRgiA1INCc0LE8L3NwYW4+XCI7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS52YWwoXCJcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhbF9tYXMgPSB2YWwuc3BsaXQoXCJcXFxcXCIpO1xuICAgICAgICAgICAgICAgIGh0bWwgPSB2YWxfbWFzW3ZhbF9tYXMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgICQodGhpcykuY2xvc2VzdChcIi5mZWVkYmFja19mb3JtX2lucHV0ZmlsZV9ibG9ja1wiKS5maW5kKFwiLmlucHV0ZmlsZV9jYXB0aW9uXCIpLmh0bWwoaHRtbCkuYXR0cihcInRpdGxlXCIsIHZhbCk7XG4gICAgfSk7XG5cbiAgICAkKFwiLmZlZWRiYWNrX3JhZGlvX2lucHV0XCIpLmNoYW5nZShmdW5jdGlvbigpe1xuICAgICAgICB2YXIgYmxvY2tpZCA9ICQodGhpcykudmFsKCk7XG4gICAgICAgICQoXCIuZmVlZGJhY2tfY29udGFpbmVyXCIpLm5vdChcIiNmZWVkYmFja19cIiArIGJsb2NraWQpLnNsaWRlVXAoMzAwKTtcbiAgICAgICAgJChcIiNmZWVkYmFja19cIiArIGJsb2NraWQpLnNsaWRlRG93bigzMDApO1xuICAgIH0pO1xuICAgICQoXCIuY2FuU3BlYWtcIikubW91c2VlbnRlcihmdW5jdGlvbigpe1xuICAgICAgICBpZiAoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnaXNJbnZhbGlkJykgPT0gXCJ0cnVlXCIpIHtcbiAgICAgICAgICAgIHZhciBtc2cgPSBuZXcgU3BlZWNoU3ludGhlc2lzVXR0ZXJhbmNlKCQodGhpcylbMF0uaW5uZXJUZXh0KTtcbiAgICAgICAgICAgIHNheShtc2cpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgc2F5VGltZW91dCA9IG51bGw7XG5cbiAgICBmdW5jdGlvbiBzYXkodGV4dCkge1xuICAgICAgICBpZiAoc3BlZWNoU3ludGhlc2lzLnNwZWFraW5nKSB7XG4gICAgICAgICAgICAvLyBTcGVlY2hTeW4gaXMgY3VycmVudGx5IHNwZWFraW5nLCBjYW5jZWwgdGhlIGN1cnJlbnQgdXR0ZXJhbmNlKHMpXG4gICAgICAgICAgICBzcGVlY2hTeW50aGVzaXMuY2FuY2VsKCk7XG5cbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCBjcmVhdGUgbW9yZSB0aGFuIG9uZSB0aW1lb3V0Li4uXG4gICAgICAgICAgICBpZiAoc2F5VGltZW91dCAhPT0gbnVsbClcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoc2F5VGltZW91dCk7XG5cbiAgICAgICAgICAgIHNheVRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgc2F5KHRleHQpOyB9LCAyNTApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gR29vZCB0byBnb1xuICAgICAgICAgICAgc3BlZWNoU3ludGhlc2lzLnNwZWFrKHRleHQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGljb25faW52YWxpZCA9ICQoJy5tZW51X19waG9uZS1jb250YWluZXJfX2ljb24nKTtcblxuICAgICQoXCIuaW52YWxpZFwiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdpc0ludmFsaWQnKSA9PSBcInRydWVcIil7XG4gICAgICAgICAgICAkKHRoaXMpLmNzcyhcImZpbGxcIixcImJsYWNrXCIpO1xuICAgICAgICAgICAgaWNvbl9pbnZhbGlkLmNzcyhcImJveC1zaGFkb3dcIiwgXCJub25lXCIpO1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnaXNJbnZhbGlkJywgZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCh0aGlzKS5jc3MoXCJmaWxsXCIsIFwiI2U5YWM0NVwiKTtcblxuICAgICAgICAgICAgaWYgKCQodGhpcykuZmluZCgnLm1lbnVfX3Bob25lLWNvbnRhaW5lcl9faWNvbicpKSB7XG4gICAgICAgICAgICAgICAgaWNvbl9pbnZhbGlkLmNzcyhcImJveC1zaGFkb3dcIiwgXCJ3aGl0ZSAwcHggMHB4IDVweCAycHhcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2lzSW52YWxpZCcsIHRydWUpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgaWYgKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2lzSW52YWxpZCcpID09IFwidHJ1ZVwiKXtcbiAgICAgICAgJChcIi5pbnZhbGlkXCIpLmNzcyhcImZpbGxcIixcIiNlOWFjNDVcIik7XG4gICAgICAgIGljb25faW52YWxpZC5jc3MoXCJib3gtc2hhZG93XCIsIFwid2hpdGUgMHB4IDBweCA1cHggMnB4XCIpO1xuICAgIH1cblxuICAgIGNoYW5nZUhlaWdodE1haW5CbG9jaygpO1xuXG4gICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNoYW5nZUhlaWdodE1haW5CbG9jaygpXG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBjaGFuZ2VIZWlnaHRNYWluQmxvY2soKSB7XG4gICAgICAgIHZhciBncm91cCA9ICQoJyNncmlkLWdyb3VwJyk7XG5cbiAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID49IDk2MClcbiAgICAgICAgICAgIGdyb3VwLmhlaWdodCh3aW5kb3cuaW5uZXJIZWlnaHQgLSAxNzApO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICBncm91cC5oZWlnaHQoJ2luaXRpYWwnKVxuICAgIH1cblxuICAgICQoJy5lY290ZWtfaW5wdXR0ZXh0LmN1c3RvbV9mb3JtJykuY2hhbmdlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHNlbGVjdCA9ICQodGhpcyk7XG4gICAgICAgIHZhciB0aXRsZSA9IHNlbGVjdC52YWwoKTtcblxuICAgICAgICBzZWxlY3QucGFyZW50KCkuZmluZCgnLmN1c3RvbV9mb3JtX3NwYW5fdGhlbWEnKS50ZXh0KHRpdGxlKTtcbiAgICB9KTtcblxuICAgICQoXCIudG9fdmFsaWRhdGVcIikuaW5wdXRtYXNrKCk7XG4gICAgJChcIi50b192YWxpZGF0ZVwiKS5vbignY2hhbmdlIGtleXVwJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5yZW1vdmVDbGFzcyhcImZvcm1fX2VsZW1lbnQgZXJyb3JcIik7XG4gICAgfSk7XG5cblxuXG5cbiAgICAkKFwiLmVjb3Rla19idXR0b24zXCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICB2YXIgY3VycmVudF9mb3JtID0gJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKTtcbiAgICAgICAgdmFyIGhhc0VyciA9IGZhbHNlO1xuICAgICAgICBpZiAoIWN1cnJlbnRfZm9ybS5maW5kKFwiLnJ1bGVzX2NoZWNrYm94XCIpLmlzKCc6Y2hlY2tlZCcpKXtcbiAgICAgICAgICAgIGhhc0VyciA9IHRydWU7XG4gICAgICAgICAgICBhbGVydChcItCS0Ysg0LTQvtC70LbQvdGLINGB0L7Qs9C70LDRgdC40YLRjNGB0Y8g0YEg0L/QvtC70LjRgtC40LrQvtC5INC+0LHRgNCw0LHQvtGC0LrQuCDQtNCw0L3QvdGL0YUhXCIpO1xuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnRfZm9ybS5maW5kKFwiLnRvX3ZhbGlkYXRlXCIpLmVhY2goZnVuY3Rpb24gKG51bSwgZWwpIHtcbiAgICAgICAgICAgIGlmICghJChlbCkuaW5wdXRtYXNrKFwiaXNDb21wbGV0ZVwiKSAmJiAoJChlbCkuZGF0YShcImlucHV0bWFzay1yZWdleFwiKSAhPSBcIi4qXCIpICYmICQoZWwpLnBhcmVudCgpLnBhcmVudCgpLmZpbmQoXCIubm90bnVsbF9pY29uXCIpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBoYXNFcnIgPSB0cnVlO1xuICAgICAgICAgICAgICAgICQoZWwpLnBhcmVudCgpLmFkZENsYXNzKFwiZm9ybV9fZWxlbWVudCBlcnJvclwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHZhciByZXN1bHRzID0gbmV3IEZvcm1EYXRhO1xuICAgICAgICByZXN1bHRzLmFwcGVuZChcImZ1bGxcIiwgdHJ1ZSk7XG4gICAgICAgIHJlc3VsdHMuYXBwZW5kKFwiaWRcIiwgbmV3IERhdGUoKS5nZXRUaW1lKCkpO1xuICAgICAgICBpZiAoIWhhc0Vycikge1xuICAgICAgICAgICAgY3VycmVudF9mb3JtLmZpbmQoXCIuZmVlZGJhY2tfZm9ybV9pdGVtXCIpLmVhY2goZnVuY3Rpb24gKG51bSwgZWwpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGl0bGUgPSAkKGVsKS5maW5kKFwiLmZlZWRiYWNrX2Zvcm1fY2FwdGlvblwiKVswXS5jaGlsZE5vZGVzWzBdLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb250ZW50X25vZGUgPSAkKGVsKS5maW5kKFwiLmVjb3Rla19pbnB1dHRleHRcIilbMF07XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHMuYXBwZW5kKHRpdGxlLnRyaW0oKSwkKGNvbnRlbnRfbm9kZSkudmFsKCkpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGV4KSB7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXN1bHRzLmFwcGVuZCgnZmlsZScsIGN1cnJlbnRfZm9ybS5maW5kKFwiI2RvcGZpbGVcIikucHJvcCgnZmlsZXMnKVswXSk7XG4gICAgICAgICAgICB9IGNhdGNoIChleCl7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgdXJsOiBcIi9hamF4LWhhbmRsZXIvXCIsXG4gICAgICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGRhdGE6IHJlc3VsdHMsXG4gICAgICAgICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIFVJa2l0Lm5vdGlmeSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAocmVzdWx0ID09IFwic3VjY2Vzc1wiKSA/ICfQktCw0YjQtSDRgdC+0L7QsdGJ0LXQvdC40LUg0YPRgdC/0LXRiNC90L4g0L7RgtC/0YDQsNCy0LvQtdC90L4sINC90L7QvNC10YAg0L7QsdGA0LDRidC10L3QuNGPOiAnICsgcmVzdWx0cy5nZXQoXCJpZFwiKSArIFwiXFxu0J3QvtC80LXRgCDQvtCx0YDQsNGJ0LXQvdC40Y8g0YLQsNC6INC20LUg0L/RgNC+0LTRg9Cx0LvQuNGA0L7QstCw0L0g0L3QsCDQstCw0YjRgyDQv9C+0YfRgtGDXCIgIDogJ9Ce0YjQuNCx0LrQsCDQvtGC0L/RgNCw0LLQutC4INGB0L7QvtCx0YnQtdC90LjRjycsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IHJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVvdXQ6IDYwMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3M6ICdib3R0b20tY2VudGVyJ1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCA9PSBcInN1Y2Nlc3NcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgJChcIi5lY290ZWtfaW5wdXR0ZXh0XCIpLnZhbChcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgVUlraXQubm90aWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfQntGI0LjQsdC60LAg0L7RgtC/0YDQsNCy0LrQuCDRgdC+0L7QsdGJ0LXQvdC40Y8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAnd2FybmluZycsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiAzMDAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zOiAnYm90dG9tLWNlbnRlcidcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuXG5cblxufSk7Il19
