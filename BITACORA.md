✨📝🏃‍♀️ PASO A PASO RESOLUCIÓN PRUEBA

1. Leer todo el documento para entender el problema a solucionar.

2. Clonar el repositorio dado en: https://bitbucket.org/ecomsur-tech-tests/front-end-tech-test/src/master/, a mi repositorio local.

3. Abrir el editor de código VSCode, abrir la terminal y correr en la carpeta root del proyecto el comando:
```
npm install
```
4. Despues ingresar a la carpeta front y digitar el mismo comando en la terminal.

5. Una vez hecho esto regresar a la carpeta root para comprobar que el repositorio este corriendo bien, digitando en terminal el comando:
```
npm run dev
```
6. Se abre en el navegador el proyecto en el http://localhost:3000/.

7. Crear el archivo "BITACORA.md" para documentar el proceso.

8. Crear la carpeta "Components" para, que en esta carpeta se almacenen los componentes de la aplicación.

9. Dentro de la carpeta "Components", crear el primer componente de la aplicación "ProductListPage.jsx".

10. Esquematizar los componentes que posiblemente tendra la aplicación.

11. En el archivo "ProductListPage.jsx", crear una funcion para llara los datos de la url/api, y guardar estos datos es el useState([]), para poder utilizarlos podteriormente para llamar cada dato del api.

12. Utilizar useEffect pasandole la funcion anteriormente descrita para evitar los datos colatereales, que se repita el array ua y otra vez.

13. Pintar en pantalla, las imagenes, el nombre del producto y el precio, estos datos que estan almacenados en el useEffect "apiRes". Realizar un map para llamar cada uno de los items de la data.

14. Subir adelantos a mi repositorio de github.

15. Comprobar si el repositorio tiene algun remoto anclado
```
git remote -v
```

16. Eliminar remoto asociado por que es del archivo original
```
git remote rm origin
```

17. Asociar nuevo remoto de mi repositorio en github
```
git remote add origin url-rep-github
```

18. Cambiar el nombre de la rama y asociarla al main (master = main).
```
git branch -M main
```

19. 
