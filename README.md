# videitos

Una interfaz CLI para ver los datos de una dirección de Youtube, sus principales estadísticas o descargar un vídeo.

## Conceptos básicos

La interfaz maneja cierto vocabulario, que de primas a primeras es díficil de comprender por sí solo.  

### Comandos y argumentos

Un comando es una instrucción que indica alguna propiedad o actividad específica, la descripción o detalle de éste se llama argumento. A continuación se presenta un ejemplo.

```
videitos instrucción --comando argumento --comando2 argumento2
```

### URL

Si normalmente no te desarrollas en el campo de la computación de seguro el término te parecerá nuevo. No hace referencia a la Universidad Rafael Landívar :unamused: URL es la sigla del inglés «Uniform Resource Locator» o Localizador de Recursos Uniforme. Fueron usadas por primera vez por Tim Berners-Lee en 1991, y éstas apuntan a un elemento alojado en una red, en nuestro caso internet. Por ejemplo: http://jotadetechnologies.pe.hu/
 
### Formato

Un formato es una manera en la que se presenta o se guarda algo. En tu computador hay distintos formatos, .png para vídeos, .mp4 para vídeos o .txt para archivos de texto.  

 
## Comandos de la aplicación

La aplicación posee comandos que realizan las instrucciones deseadas, así como argumentos para personalizar el resultado.

### Resumen de datos de un vídeo

Para obtener el resumen o datos primordiales de un vídeo como: su título, duración, descripción, fecha en la que fue compartido, entre otras. Usa la siguiente instrucción con sus respectivos comandos y argumentos.

```
	videitos data <opciones>
```
Las opciones que pueden usarse en esta instrucción son:

```
    --url, <https://...> 
```
Para evitar errores en la muestra recomendamos usar URL planas como https://www.youtube.com/watch?v=LHjbRMIIhuM

### Estadísticas de un vídeo

Para obtener estadísticas básicas de un vídeo como: número de «Me gusta», «No me gusta», vistas, etiquetas, categorías, etc. Usa la siguiente instrucción:

```
	videitos stats <opciones>
```
Los comandos que pueden usarse en esta instrucción son:

```
    --url, <https://...> 
```
Para evitar errores en la muestra recomendamos usar URL planas como https://www.youtube.com/watch?v=LHjbRMIIhuM

### Descargar un vídeo

Para descargar un vídeo utiliza la siguiente instrucción:

```
	videitos stats <opciones>
```
Las opciones que pueden usarse en éste comando son:

```
    --url, <https://...>
	--name, <nombreDelArchivo> 
	--format, <.format> 
```
Para evitar errores en la muestra recomendamos usar URL planas como https://www.youtube.com/watch?v=LHjbRMIIhuM. El nombre del archivo --name y formato --format son comandos opcionales. Por defecto descargará el archivo así: videitoDescargado.mp4 


