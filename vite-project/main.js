
function openApp(appName) {
    if (appName === 'contacts') {
        window.open('https://contacts.google.com/', '_blank');}
    else if (appName === 'phone') {
    window.open('https://voice.google.com/', '_blank');
    }
    else if (appName === 'app1') {
        window.open('https://www.instagram.com', '_blank');
    } else if (appName === 'app2') {
        window.open('https://www.facebook.com', '_blank');
    }
    else if (appName === 'app3') {
        window.open('https://google.com', '_blank');
    }
    else if (appName === 'app4') {
        window.open('https://calendar.google.com/', '_blank');
    }
    else if (appName === 'app5') {
        window.open('https://music.youtube.com//', '_blank');
    }
    else {
        alert('Opening ' + appName + ' program...');
    }
}

    function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var timeString = hours.toString().padStart(2, '0') + ':' +
    minutes.toString().padStart(2, '0') + ':' +
    seconds.toString().padStart(2, '0');
    document.getElementById('clock').textContent = timeString;
}
    function applyCustomStyles() {
        var customStyles = `
          
  .main {
    margin-top: 150px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .phone {
    width: 600px; /* Изменено значение ширины */
    height: 300px; /* Изменено значение высоты */
    border: 1px solid black;
    border-radius: 10px;
    margin: 50px auto;
    padding: 20px;
    position: relative;
    background-image: url('background.jpg');
    background-size: cover;
    transform: rotate(-360deg); /* Добавлено вращение на -90 градусов */
    transform-origin: center; /* Добавлено задание точки вращения в центре */
  }

  .app-icon {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: inline-block;
    margin: 10px;
    text-align: center;
    line-height: 60px;
    cursor: pointer;
  }

  .dock {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 10px 0;
    background-color: rgba(255, 255, 255, 0.7);
    display: flex;
    justify-content: center;
  }

  .dock-icon {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: inline-block;
    text-align: center;
    line-height: 40px;
    cursor: pointer;
  }

  .clock {
    position: absolute;
    top: 20px;
    left: 20px;
    font-size: 24px;
    color: white;
  }
  `;

        var styleElement = document.createElement('style');
        styleElement.textContent = customStyles;

        document.head.appendChild(styleElement);
    }

    function applyCustomStyles2() {
        var customStyles = `
          

.main {
  margin-top: 40px;

}

.phone {
  width: 300px;
  height: 600px;
  border: 1px solid black;
  border-radius: 10px;
  margin: 50px auto;
  padding: 20px;
  position: relative;
  background-image: url('background.jpg');
  background-size: cover;
}

.app-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: inline-block;
  margin: 10px;
  text-align: center;
  line-height: 60px;
  cursor: pointer;
}

.dock {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px 0;
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: center;
}

.dock-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: inline-block;
  text-align: center;
  line-height: 40px;
  cursor: pointer;
}

.clock {
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 24px;
  color: white;
}

  `;

        var styleElement = document.createElement('style');
        styleElement.textContent = customStyles;

        document.head.appendChild(styleElement);
    }
    setInterval(updateClock, 1000);