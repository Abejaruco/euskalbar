﻿// Developers: Juanan Pereira, Asier Sarasua Garmendia 2006
//             Julen Ruiz Aizpuru, Asier Sarasua Garmendia 2007
// This is Free Software (GPL License)
// juanan@diariolinux.com
// asarasua@vitoria-gasteiz.org
// julenx@gmail.com

    // *************************************
    //  Hiztegien bilaketak
    // *************************************


    // Euskaltermen bilaketak egiteko
    function goEuskalBarEuskalterm(source, term, sub) {
      strRes = document.getElementById('leuskal');
      const h = strRes.getString("hizk");
      // interfazearen hizkuntza zehaztu
      if (h.match('euskara')) {
        hiztegiarenhizkuntza = 'eu';
      } else if (h.match('english')) {
        hiztegiarenhizkuntza = 'en';
      } else {
        hiztegiarenhizkuntza = 'es';
      }
      // bilaketaren hizkuntza zehaztu
      if (source == 'es') {
        idioma = 'G';
      } else if (source == 'en') {
        idioma = 'I';
      } else {
        idioma = 'E';
      }
      var url = 'http://www1.euskadi.net/euskalterm/cgibila7.exe';
      var params = [];
      params.push(new QueryParameter('hizkun1', idioma));
      params.push(new QueryParameter('hitz1', escape(term)));
      params.push(new QueryParameter('gaiak', sub));
      params.push(new QueryParameter('hizkuntza', hiztegiarenhizkuntza));
      var zein = 'euskalterm';
      openURL(url, zein, 'GET', params);
      //Estatistika lokalak idatzi
      writeStats(0);
    }


    // Aukeratutako testua itzultzen du opentrad erabiliz edo xuxenweb kontsultatzen du
    function goEuskalBarSelection(term, action) {
      var params = [];
      switch (action) {
        case 'opentrad' :
          var url = 'http://www.interneteuskadi.org/euskalbar/opentrad.php';
          params.push(new QueryParameter('testukutxa', escape(term))); 
          var zein = 'opentrad';
          //Estatistika lokalak idatzi
          writeStats(14);
        break;
        case 'xuxenweb' :
          var url = 'http://www.xuxen.com/socketBezero.php';
          params.push(new QueryParameter('idatzArea', term)); 
          var zein = 'xuxen';
          //Estatistika lokalak idatzi
          writeStats(13);
        break;
      }
      openURL(url, zein, 'GET', params);
    }


    // Bilaketak 3000 hiztegian
    function goEuskalBarAsk(source, term) {
      var params = [];
      if (source == 'es') {
        source = 'CAS';
        idioma = 'Castellano';
      } else {
        source = 'EUS';
        idioma = 'Euskera';
      }
      var url = 'http://www1.euskadi.net/cgi-bin_m33/DicioIe.exe';
      params.push(new QueryParameter('Diccionario', source));
      params.push(new QueryParameter('Idioma', source))
      params.push(new QueryParameter('Txt_'+idioma, escape(term)));
      var zein = 'cgi-bin_m33';
      openURL(url, zein, 'GET', params);
      //Estatistika lokalak idatzi
      writeStats(1);
    }


    // Elhuyar hiztegiko bilaketak
    function goEuskalBarElhuyar(source, term) {
      var params = [];
      // Hitzen arteko zuriuneen ordez beheko barrak idazten ditu, Elhuyarrentzako
      term = term.replace(/ /g, "_");
      var url = 'http://www.interneteuskadi.org/euskalbar/frames.php';
      params.push(new QueryParameter('term', escape(term)));
      params.push(new QueryParameter('source', source));
      var zein = 'interneteuskadi';
      openURL(url, zein, 'GET', params);
      //Estatistika lokalak idatzi
      writeStats(2);
    }


    // Morrisen bilaketak egiteko
    function goEuskalBarMorris(source, term) {
      if (source == 'en') {
        var hizk = 'txtIngles';
      } else {
        var hizk = 'txtEuskera';
      }
      var url = 'http://www1.euskadi.net/morris/resultado.asp';
      var params = [];
      params.push(new QueryParameter(hizk, escape(term)));
      var zein = 'morris';
      openURL(url, zein, 'POST', params);
      //Estatistika lokalak idatzi
      writeStats(3);
    }


    // eu.open-tran.eu itzulpen datu-basean bilaketak
    function goEuskalBarOpentran(term) {
      var url = 'http://eu.open-tran.eu/suggest/'+escape(term);
      var zein = 'open-tran';
      openURL(url, zein, null, null);
      //Estatistika lokalak idatzi
      writeStats(4);
    }


    // Euskaltzaindiaren hiztegi batuan bilaketa burutzen du
    function goEuskalBarEuskaltzaindia(term) {
      var params = [];
      var url = 'http://www.euskaltzaindia.net/hiztegibatua/bilatu.asp';
      params.push(new QueryParameter('sarrera', escape(term)));
      var zein = 'hiztegibatua';
      openURL(url, zein, 'GET', params);
      //Estatistika lokalak idatzi
      writeStats(5);
    }


    // ItzuL posta-zerrendan bilaketak
    function goEuskalBarItzuL(term) {
      var params = [];
      var url = 'http://search.gmane.org/search.php';
      params.push(new QueryParameter('group', 'gmane.culture.language.basque.itzul'));
      params.push(new QueryParameter('query', encodeURI(term)));
      var zein = 'gmane.culture.language.basque.itzul';
      openURL(url, zein, 'GET', params);
      //Estatistika lokalak idatzi
      writeStats(8);
    }


    // Harluxet hiztegi entziklopedikoa
    function goEuskalBarHarluxet(term) {
      var params = [];
      var url = 'http://www1.euskadi.net/harluxet/emaitza.asp';
      params.push(new QueryParameter('sarrera', escape(term)));
      var zein = 'harluxet';
      openURL(url, zein, 'GET', params);
      //Estatistika lokalak idatzi
      writeStats(9);
    }


    // Mokoroan bilaketak
    function goEuskalBarMokoroa(source, term) {
      var params = [];
      var zein = 'mokoroa';
      var url = 'http://www.hiru.com/hiztegiak/mokoroa/';
      if (source == 'es') {
        params.push(new QueryParameter('gazt', escape(term)));
        params.push(new QueryParameter('bidali', 'Bilatu'));
      } else {
        params.push(new QueryParameter('eusk', escape(term)));
        params.push(new QueryParameter('bidali', 'Bilatu'));
      }
      openURL(url, zein, 'GET', params);
      //Estatistika lokalak idatzi
      writeStats(10);
    }

    // Intzaren bilaketak
    function goEuskalBarIntza(source, term) {
      var params = [];
      var zein = 'intza';
      var url = 'http://intza.armiarma.com/cgi-bin/bilatu2.pl'; 
      if (source == 'es') {
        params.push(new QueryParameter('hitza1', escape(term)));
        params.push(new QueryParameter('eremu3', '1'));
        params.push(new QueryParameter('eremu1', 'eeki'));
      } else {
        params.push(new QueryParameter('eremu1', 'giltzarriak'));
        params.push(new QueryParameter('hitza1', escape(term)));
        params.push(new QueryParameter('eremu3','1'));
      }
      openURL(url, zein, 'GET', params);
      //Estatistika lokalak idatzi, hau aldatu egin behar da
      writeStats(11);
    }

    // ZT Corpusa
    function goEuskalBarZTCorpusa(term) {
      var params = [];
      var url = 'http://www.ztcorpusa.net/cgi-bin/kontsulta.py';
      params.push(new QueryParameter('testu-hitza1', escape(term)));
      var zein = 'ztcorpusa';
      openURL(url, zein, 'GET', params);
      //Estatistika lokalak idatzi
      writeStats(12);
    }


    // Eurovoc Tesaurusa
    function goEuskalBarEurovoc(term) {
      var params = [];
      strRes = document.getElementById('leuskal');
      const h = strRes.getString("hizk");
      if (h.match('euskara')) {
        hizk = 'EU';
      } else {
        hizk = 'CA';
      }
      var url = 'http://www.bizkaia.net/kultura/eurovoc/busqueda.asp';
      params.push(new QueryParameter('txtBuscar', 'S'));
      params.push(new QueryParameter('query', term));
      params.push(new QueryParameter('idioma', hizk));
      var zein = 'eurovoc';
      openURL(url, zein, 'POST', params);
      //Estatistika lokalak idatzi
      writeStats(13);
    }

    // Opentrad
    function goEuskalBarOpentrad(source, term) {
      var params = [];
      var url = 'http://www.opentrad.org/demo/libs/nabigatzailea.php';
      params.push(new QueryParameter('language', 'eu'));
      params.push(new QueryParameter('inurl', escape(window.content.document.location.href)));
      params.push(new QueryParameter('norantza', 'es-eu'));
      var zein = 'opentrad';
      openURL(url, zein, 'GET', params);
      //Estatistika lokalak idatzi
      writeStats(15);
    }


    // XUXENweb
    function goEuskalBarXUXENweb(term) {
      var params = [];
      var url = 'http://www.xuxen.com/socketBezero.php';
      params.push(new QueryParameter('idatzArea', term));
      var zein = 'xuxen';
      openURL(url, zein, 'GET', params);
      //Estatistika lokalak idatzi
      writeStats(14);
    }


    // Zenbait hiztegi atzitzen ditu
    function goEuskalBarOthers(zein) {
      switch (zein) {
        case 'SAunamendi':
          var url = 'http://www.euskomedia.org/euskomedia/SAunamendi?idi=eu&op=1';
        break;
        case 'kapsula':
          var url = 'http://tresnak.kapsula.com/cgi-bin-jo/HTMODFOR?ActionField=getmodel&$BaseNumber=02&$Modelo=01&CmdGetModel=KAPSULA.HTMLMOD.JOMODBIL';
        break;
        case 'oeegunea':
          var url = 'http://www.oeegunea.org/default.cfm?atala=hiztegia';
        break;
      }
      openURL(url, zein, null, null);
    }


    // Adorez sinonimoen hiztegia
    function goEuskalBarAdorez(term) {
      var params = [];
      strRes = document.getElementById('leuskal');
      const h = strRes.getString("hizk");
      var url = 'http://www1.euskadi.net/cgi-bin_m32/sinonimoak.exe';
      if (h.match('euskara')) {
        params.push(new QueryParameter('Palabra', 'Introducida'));
        params.push(new QueryParameter('Idioma', 'EUS'));
        params.push(new QueryParameter('txtpalabra', escape(term)));
      } else {
        params.push(new QueryParameter('Palabra', 'Introducida'));
        params.push(new QueryParameter('Idioma', 'CAS'));
        params.push(new QueryParameter('txtpalabra', escape(term)));
      }
      var zein = 'adorez';
      openURL(url, zein, 'GET', params);
      //Estatistika lokalak idatzi
      writeStats(7);
    }


    // UZEIren sinonimoen hiztegia
    function goEuskalBarUZEI(term) {
      var params = [];
      var url = 'http://www.uzei.com/estatico/sinonimos.asp';
      params.push(new QueryParameter('sarrera', escape(term)));
      params.push(new QueryParameter('eragiketa', 'bilatu'));
      var zein = 'uzei';
      openURL(url, zein, 'GET', params);
      //Estatistika lokalak idatzi
      writeStats(6);
    }


    // Aukeratutako testua itzultzen du
    function selectionText () {
      var focusedWindow = document.commandDispatcher.focusedWindow;
      var winWrapper = new XPCNativeWrapper(focusedWindow, 'getSelection()');
      return winWrapper.getSelection();
    }


    // Testu kutxan sartzen den katea zenbakia dela balidatzen du
    function numField(event){
      if (event.which >= 48 && event.which <= 57 ||
          (event.which==46 && this.input.value.search('\\.')== -1)  ||
          8 == event.which || 13 == event.which || 0 == event.which) {
        return;
      } else {
        event.preventDefault();
        return;
      }
    }