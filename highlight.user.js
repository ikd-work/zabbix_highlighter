// ==UserScript==
// @name        TemplateHighlight
// @description Zabbix Template Configure page HighLight tool.
// @include     http://*/zabbix/*
// @include     https://*/zabbix/*
// ==/UserScript==


// HighLight Template Page for Zabbix version 2

var elements2_0 = document.getElementsByClassName("objectlist");

if( elements2_0 && elements2_0.length != 0){
  if( child = elements2_0.item(0).childNodes ){
    if( child2 = child.item(0).childNodes ){
      var text = child2.item(1).text ;
    }
  }
  if ( text ){
    if( text == "Template list" || text == "テンプレートリスト" ){
      var parent = elements2_0.item(0).parentNode;
      parent.style.background = "#ffb6c1";
      var area = document.getElementsByClassName("ui-tabs-panel");
      if( area && area.length != 0){
        area.item(0).style.background = "#ffb6c1";
      }
    }
  }else{
  }
}


// HightLight Template Page for Zabbix version 1.8

// ObjectList Highlight

var elements1_8 = document.getElementsByClassName("infobox");

if( elements1_8 && elements1_8.length != 0 ){
  var text = elements1_8.item(0).getElementsByTagName("strong").item(0).textContent;
  if( text ){
    if( text == "Templates list" || text == "テンプレート一覧" ){
      elements1_8.item(0).style.background = "#ffb6c1";
    }
  }
}

// Item register page background highlight

var key_field = document.getElementById("key")

if( key_field ){
  if( key_field.getAttribute("readonly") == "readonly" ){
    if( document.getElementsByClassName("formlist").length != 0){
      document.getElementsByClassName("formlist").item(0).style.background = "#ffb6c1";
    }else if( document.getElementsByClassName("formtable").length != 0){
      document.getElementsByClassName("formtable").item(0).parentNode.style.background = "#ffb6c1";
    }
  }
}

// Trigger register page background highlight

var name_field = document.getElementById("description")

if( name_field ){
  if( name_field.getAttribute("readonly") == "readonly" ){
    if( document.getElementsByClassName("formlist").length != 0){
      document.getElementsByClassName("formlist").item(0).style.background = "#ffb6c1";
    }else if( document.getElementsByClassName("formtable").length != 0){
      document.getElementsByClassName("formtable").item(0).parentNode.style.background = "#ffb6c1";
    }
  }
}


// Graph register page background highlight

var name_field = document.getElementById("name")

if( name_field ){
  if( name_field.getAttribute("disabled") == "disabled" ){
    if( document.getElementsByClassName("formlist").length != 0){
      document.getElementsByClassName("formlist").item(0).style.background = "#ffb6c1";
    }
  }
}

// Template register page background highlight

var temp_reg_header = document.getElementsByClassName("header_l");

if( temp_reg_header && temp_reg_header.length != 0 ){
  if( temp_reg_header.item(1) ){
    var text = temp_reg_header.item(1).textContent;
  
    if( text ){
      if( text.match(/テンプレート|Template/) != null ){
        var area = document.getElementsByName("tpl_for");
        if( area.length != 0 ){
          area.item(0).style.background = "#ffb6c1";
        }
      }
    }
  }
}

var history = document.getElementsByClassName("history");

if( history.length != 0 ){
  var last_history = history.item(history.length - 1);
  var next_history = history.item(history.length - 2);
  
  if( (last_history.textContent.match(/Configuration|設定/) != null || last_history.textContent.match(/Applications|アプリケーション/) != null) && next_history.textContent.match(/Templates|テンプレート/) != null ){
    
    var formtable = document.getElementsByClassName("formtable");
    if( formtable.length != 0){
      formtable.item(0).parentNode.style.background = "#ffb6c1";
    }
  }
}


