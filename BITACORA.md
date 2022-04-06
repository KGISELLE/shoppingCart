# ✨📝🏃‍♀️ PASO A PASO RESOLUCIÓN PRUEBA

### Dia 1: Planeación, llamado api y primer componente "ProductListPage".
### Dia 2: Componente "ProductDisplayPage".
### Dia 3: Componentes "CartPage" y "MiniCart" y deploy.
<hr>

## MVP

Se requiere implementar un carrito de compras simple que traiga toda la info del API local, éste debe contar con las siguientes secciones:

[✔] Una lista de ítems mostrando el catálogo de productos. (Product List Page).

[✔] Página de producto mostrando detalle de producto. (Product Display Page).

[] Un carrito de compras que tenga todos los ítems que serán comprados por el usuario. (Cart Page).

[] Espacio donde se muestre la sincronización de los ítems añadidos al carrito. (Mini cart). 

## Restricciones
[] No utilizar "CSS frameworks" como Bootstrap, MUI, Semantic UI, etc.

[] Si no utilizas el API local tu prueba será descartada.

## Rules
[] Cada ítem del catálogo debe tener un action button con el texto Add item to cart.

[] Si no hay stock el action button debe deshabilitarse.

[] Cada ítem en el carro debe tener un action button para remover el ítem del carro.

[] Los items en el carrito se deben de agrupar mostrando cantidad de cada producto añadido.

[] Recuerda la filosofía "Mobile-First Responsive Design".
<hr>

## Dia 1:
1. Leer todo el documento para entender el problema a solucionar.

2. Planeación ejecución prueba tecnica para 3 dias.

3. Clonar el repositorio dado: https://bitbucket.org/ecomsur-tech-tests/front-end-tech-test/src/master/, a mi repositorio local.

4. Abrir el editor de código VSCode, abrir la terminal y correr en la carpeta root del proyecto el comando:
    ```
    npm install
    ```
5. Despues ingresar a la carpeta front y digitar el mismo comando en la terminal.

6. Una vez hecho esto regresar a la carpeta root para comprobar que el repositorio este corriendo bien, digitando en terminal el comando:
    ```
    npm run dev
    ```
7. Se abre en el navegador el proyecto en el http://localhost:3000/.

8. Crear el archivo "BITACORA.md" para documentar el proceso.

9. Crear la carpeta "Components" para, que en esta carpeta se almacenen los componentes de la aplicación.

10. Dentro de la carpeta "Components", crear el primer componente de la aplicación "ProductListPage.jsx".

11. Esquematizar los componentes que posiblemente tendra la aplicación.

    [Esquema Inicial de Componentes](https://i.imgur.com/a/2iuxvKN.jpg)

12. En el archivo "ProductListPage.jsx", crear una funcion para llara los datos de la url/api, y guardar estos datos es el useState([]), para poder utilizarlos podteriormente para llamar cada dato del api.

13. Utilizar useEffect pasandole la funcion anteriormente descrita para evitar los datos colatereales, que se repita el array ua y otra vez.

14. Pintar en pantalla, las imagenes, el nombre del producto y el precio, estos datos que estan almacenados en el useEffect "apiRes". Realizar un map para llamar cada uno de los items de la data.

15. Subir adelantos a mi repositorio de github.

16. Comprobar si el repositorio tiene algun remoto anclado
    ```
    git remote -v
    ```

17. Eliminar remoto asociado por que es del archivo original
    ```
    git remote rm origin
    ```

18. Asociar nuevo remoto de mi repositorio en github
    ```
    git remote add origin url-rep-github
    ```

19. Cambiar el nombre de la rama y asociarla al main (master = main).
    ```
    git branch -M main
    ```

20. Realizar el git add .  de los archivos modificados y creados hasta el momento.

21. Realizar git commit de estos archivos.

22. Subir este commit al mi repositorio remoto de github
    ```
    git push -u origin main
    ```
23. Crear carpeta CSS para almacenar los archivos CSS de cada componente.

24. Subir la imagen del diagrama del componente a imgur.com y despues traerla al repositorio para visualizar.

25. Agregar estilos CSS a vista "ProductListPage".

26. Completar vista mobile first de "ProductListPage".

<br>

<--------------NOTAS---------------->
- Agregar react dom (error al intentar realizar router)
- Agregar links para pasar a vista de mas detalles. (error al intentar realizar router)

<hr>

## Dia 2:

1. Completar vista "ProductListPage" responsive.

2. Crear el componente "ModalPDP" para mostrar los detalles del producto "ProductDisplayPage", como una ventana modal.

3. Crear estilos iniciales del modal.

4. Realizar cambios de estado y onclick para abrir y cerrar el modal.

5. Agregar contenido dinámico para que al dar click en el nombre de un producto se abra el modal y muestre los detalles de este producto.

6. Dar estilos mobile first para el modal.

7. Dar estilos responsive para el modal.