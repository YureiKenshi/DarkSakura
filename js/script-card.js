 // Наруто
 const naruto = document.querySelectorAll('.naruto-card');

 naruto.forEach(function(div) {
   let isDragging = false;
   let startX, startY;

   div.addEventListener('mousedown', function(e) {
     startX = e.clientX;
     startY = e.clientY;
     isDragging = false;

     document.addEventListener('mousemove', onMouseMove);
     document.addEventListener('mouseup', onMouseUp);
   });

   function onMouseMove(e) {
     if (Math.abs(e.clientX - startX) > 5 || Math.abs(e.clientY - startY) > 5) {
       isDragging = true;
     }
   }

   function onMouseUp(e) {
     document.removeEventListener('mousemove', onMouseMove);
     document.removeEventListener('mouseup', onMouseUp);

     if (!isDragging) {
       window.location.href = '../html/anime-html/naruto.html'; 
     }
   }
 });
  // Атака титанов
  const atackOnTitan = document.querySelectorAll('.atack-on-titan-card');

  atackOnTitan.forEach(function(div) {
    let isDragging = false;
    let startX, startY;
 
    div.addEventListener('mousedown', function(e) {
      startX = e.clientX;
      startY = e.clientY;
      isDragging = false;
 
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    });
 
    function onMouseMove(e) {
      if (Math.abs(e.clientX - startX) > 5 || Math.abs(e.clientY - startY) > 5) {
        isDragging = true;
      }
    }
 
    function onMouseUp(e) {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
 
      if (!isDragging) {
        window.location.href = '../html/anime-html/atack-on-titan.html'; 
      }
    }
  });
   // Повелитель
 const overlord = document.querySelectorAll('.overlord-card');

 overlord.forEach(function(div) {
   let isDragging = false;
   let startX, startY;

   div.addEventListener('mousedown', function(e) {
     startX = e.clientX;
     startY = e.clientY;
     isDragging = false;

     document.addEventListener('mousemove', onMouseMove);
     document.addEventListener('mouseup', onMouseUp);
   });

   function onMouseMove(e) {
     if (Math.abs(e.clientX - startX) > 5 || Math.abs(e.clientY - startY) > 5) {
       isDragging = true;
     }
   }

   function onMouseUp(e) {
     document.removeEventListener('mousemove', onMouseMove);
     document.removeEventListener('mouseup', onMouseUp);

     if (!isDragging) {
       window.location.href = '../html/anime-html/overlord.html'; 
     }
   }
 });
  // Клинок рассекающий демонов
  const theBladeThatCutTheDemons = document.querySelectorAll('.the-blade-that-cut-the-demons-card');

  theBladeThatCutTheDemons.forEach(function(div) {
    let isDragging = false;
    let startX, startY;
 
    div.addEventListener('mousedown', function(e) {
      startX = e.clientX;
      startY = e.clientY;
      isDragging = false;
 
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    });
 
    function onMouseMove(e) {
      if (Math.abs(e.clientX - startX) > 5 || Math.abs(e.clientY - startY) > 5) {
        isDragging = true;
      }
    }
 
    function onMouseUp(e) {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
 
      if (!isDragging) {
        window.location.href = '../html/anime-html/the-blade-that-cut-the-demons.html'; 
      }
    }
  });
   // Человек бензопила
 const chainsawMan = document.querySelectorAll('.chainsaw-man-card');

 chainsawMan.forEach(function(div) {
   let isDragging = false;
   let startX, startY;

   div.addEventListener('mousedown', function(e) {
     startX = e.clientX;
     startY = e.clientY;
     isDragging = false;

     document.addEventListener('mousemove', onMouseMove);
     document.addEventListener('mouseup', onMouseUp);
   });

   function onMouseMove(e) {
     if (Math.abs(e.clientX - startX) > 5 || Math.abs(e.clientY - startY) > 5) {
       isDragging = true;
     }
   }

   function onMouseUp(e) {
     document.removeEventListener('mousemove', onMouseMove);
     document.removeEventListener('mouseup', onMouseUp);

     if (!isDragging) {
       window.location.href = '../html/anime-html/chainsaw-man.html'; 
     }
   }
 });
  // Хоримия
  const horimiya = document.querySelectorAll('.horimiya-card');

  horimiya.forEach(function(div) {
    let isDragging = false;
    let startX, startY;
 
    div.addEventListener('mousedown', function(e) {
      startX = e.clientX;
      startY = e.clientY;
      isDragging = false;
 
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    });
 
    function onMouseMove(e) {
      if (Math.abs(e.clientX - startX) > 5 || Math.abs(e.clientY - startY) > 5) {
        isDragging = true;
      }
    }
 
    function onMouseUp(e) {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
 
      if (!isDragging) {
        window.location.href = '../html/anime-html/horimiya.html'; 
      }
    }
  });
  // Восхождение в тени
  const theEminenceInShadow = document.querySelectorAll('.the-eminence-in-shadow-card');

  theEminenceInShadow.forEach(function(div) {
    let isDragging = false;
    let startX, startY;
 
    div.addEventListener('mousedown', function(e) {
      startX = e.clientX;
      startY = e.clientY;
      isDragging = false;
 
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    });
 
    function onMouseMove(e) {
      if (Math.abs(e.clientX - startX) > 5 || Math.abs(e.clientY - startY) > 5) {
        isDragging = true;
      }
    }
 
    function onMouseUp(e) {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
 
      if (!isDragging) {
        window.location.href = '../html/anime-html/the-eminence-in-shadow-card.html'; 
      }
    }
  });
  // Ангел по соседству
  const theAngelNextDoorSpoilsMeRotten = document.querySelectorAll('.the-angel-next-door-spoils-me-rotten-card');

  theAngelNextDoorSpoilsMeRotten.forEach(function(div) {
    let isDragging = false;
    let startX, startY;
 
    div.addEventListener('mousedown', function(e) {
      startX = e.clientX;
      startY = e.clientY;
      isDragging = false;
 
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    });
 
    function onMouseMove(e) {
      if (Math.abs(e.clientX - startX) > 5 || Math.abs(e.clientY - startY) > 5) {
        isDragging = true;
      }
    }
 
    function onMouseUp(e) {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
 
      if (!isDragging) {
        window.location.href = '../html/anime-html/the-angel-next-door-spoils-me-rotten.html'; 
      }
    }
  });
  // Восхождение героя щита
  const theRisingOfTheShieldHero = document.querySelectorAll('.the-rising-of-the-shield-hero-card');

  theRisingOfTheShieldHero.forEach(function(div) {
    let isDragging = false;
    let startX, startY;
 
    div.addEventListener('mousedown', function(e) {
      startX = e.clientX;
      startY = e.clientY;
      isDragging = false;
 
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    });
 
    function onMouseMove(e) {
      if (Math.abs(e.clientX - startX) > 5 || Math.abs(e.clientY - startY) > 5) {
        isDragging = true;
      }
    }
 
    function onMouseUp(e) {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
 
      if (!isDragging) {
        window.location.href = '../html/anime-html/the-rising-of-the-shield-hero.html'; 
      }
    }
  });
  
  // О моем перерождении в слизь
  const thatTimeIGotReincarnatedAtASlime = document.querySelectorAll('.that-time-i-got-reincarnated-at-a-slime-card');

  thatTimeIGotReincarnatedAtASlime.forEach(function(div) {
    let isDragging = false;
    let startX, startY;
 
    div.addEventListener('mousedown', function(e) {
      startX = e.clientX;
      startY = e.clientY;
      isDragging = false;
 
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    });
 
    function onMouseMove(e) {
      if (Math.abs(e.clientX - startX) > 5 || Math.abs(e.clientY - startY) > 5) {
        isDragging = true;
      }
    }
 
    function onMouseUp(e) {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
 
      if (!isDragging) {
        window.location.href = '../html/anime-html/that-time-i-got-reincarnated-at-a-slime.html'; 
      }
    }
  });
  // Ванпанчмен
  const onePunchMan = document.querySelectorAll('.one-punch-man-card');

  onePunchMan.forEach(function(div) {
    let isDragging = false;
    let startX, startY;
 
    div.addEventListener('mousedown', function(e) {
      startX = e.clientX;
      startY = e.clientY;
      isDragging = false;
 
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    });
 
    function onMouseMove(e) {
      if (Math.abs(e.clientX - startX) > 5 || Math.abs(e.clientY - startY) > 5) {
        isDragging = true;
      }
    }
 
    function onMouseUp(e) {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
 
      if (!isDragging) {
        window.location.href = '../html/anime-html/one-punch-man.html'; 
      }
    }
  });
  // Кагуя: в любви как на войне
  const kagyaSamaLoveIsWar = document.querySelectorAll('.kagya-sama-love-is-war-card');

  kagyaSamaLoveIsWar.forEach(function(div) {
    let isDragging = false;
    let startX, startY;
 
    div.addEventListener('mousedown', function(e) {
      startX = e.clientX;
      startY = e.clientY;
      isDragging = false;
 
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    });
 
    function onMouseMove(e) {
      if (Math.abs(e.clientX - startX) > 5 || Math.abs(e.clientY - startY) > 5) {
        isDragging = true;
      }
    }
 
    function onMouseUp(e) {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
 
      if (!isDragging) {
        window.location.href = '../html/anime-html/kagya-sama-love-is-war.html'; 
      }
    }
  });