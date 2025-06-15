# Convertidor DOCX Frontend

Este proyecto permite leer y extraer el contenido de archivos DOCX directamente en el navegador, sin backend, usando JavaScript y librerías como JSZip y docxtemplater. El contenido extraído se muestra como texto plano o con estilos básicos, y puede ser exportado a PDF.

---

## Características actuales

- Subida y lectura de archivos DOCX en el navegador.
- Extracción y visualización del texto contenido en el DOCX.
- Interfaz sencilla con Bootstrap para subir archivos.
- Exportación del texto extraído a PDF.

---

## Próximas mejoras planeadas

1. **Detección y conservación de estilos básicos:**  
   Mostrar negritas, cursivas y subrayados en el texto extraído respetando el formato original.

2. **Visualización en formato HTML con estilos:**  
   En lugar de mostrar solo texto plano, renderizar el contenido con etiquetas HTML para reflejar los estilos.

3. **Edición en pantalla:**  
   Permitir que el usuario edite el texto extraído directamente antes de exportarlo o guardarlo.

4. **Mejor exportación a PDF:**  
   Mejorar la generación de PDF para que conserve los estilos aplicados en la visualización HTML.

5. **Soporte para formatos DOCX más complejos:**  
   Añadir soporte para listas, tablas simples y otros elementos comunes de documentos DOCX.

6. **UI mejorada:**  
   Implementar barra de progreso durante la carga y extracción, mensajes dinámicos y una interfaz más amigable con Bootstrap.

---

## Tecnologías utilizadas

- JavaScript (ES6+)
- [JSZip](https://stuk.github.io/jszip/)
- [docxtemplater](https://docxtemplater.com/)
- Bootstrap 5
- html2pdf.js para exportar a PDF

---

## Cómo usar

1. Abrir `index.html` en el navegador.
2. Seleccionar un archivo DOCX usando el formulario.
3. Ver el contenido extraído en el área de visualización.
4. Exportar a PDF si se desea.

---

## Estructura del proyecto

leerDocsXTMLZIP-frontend/
│
├── index.html # Página principal con interfaz
├── js/
│ ├── main.js # Código principal JS para extraer y mostrar contenido
│ └── unzip-docx.js # Lógica para manejar el DOCX como ZIP y extraer contenido
├── css/
│ └── styles.css # Estilos personalizados
├── libs/
│ ├── JSZip.min.js # Librería para descomprimir DOCX
│ └── docxtemplater.js # Librería para manipular DOCX
├── assets/
│ └── muestra.docx # Archivo de prueba
└── README.md # Documentación del proyecto


---

## Contribuciones

Si tienes ideas o mejoras, ¡estaré encantada de recibir pull requests o sugerencias!

---

## Autor

Nina Kilosanidze  
Desarrolladora web orientada a ciberseguridad y apasionada por la programación.

