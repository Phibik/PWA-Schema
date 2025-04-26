# Com Desactivar Cache per Fer `liveserver`
Per anar desenvolupant i veure els cambis en directe, s'ha de treure el cache.

### Primer en el `manifest.json` descomentar el següent comentari:
```
//ARCHIVOS = [];
```



### Si ja s'ha fet `liveserver` amb el cache, en el navegador realitzar:

`F12` --> `Application` (si no surt clickar `>>`) --> `Cache storage` --> `click dret` --> `delete`

---

# Com Afegir Més Arxius
De nou, en el `manifest.json`, en la variable `ARCHIVOS`, posar nous arxius en l'array.
```
var ARCHIVOS = [
  './',
  './index.html',
  './css/style.css',
  './js/app.js',
  './js/pwa.js',
  './manifest.json',
  './images/logo.png'
];
```
