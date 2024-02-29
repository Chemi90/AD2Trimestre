document.addEventListener("DOMContentLoaded", () => {
  // Asumiendo que tienes un array de objetos con las preguntas, opciones y la respuesta correcta
  // Similar al proporcionado en el código de referencia
  const quizData = [
    {
      question:
        "1. ¿Qué característica principal ofrece ObjectDB a los desarrolladores?",
      a: "Soporte para SQL nativo",
      b: "Interfaz JPA para programación",
      c: "Capacidad para almacenar datos no estructurados",
      d: "Integración directa con Apache Hadoop",
      correct: "b",
      explanation:
        "ObjectDB ofrece JPA como interfaz para el programador, lo que facilita el acceso y manipulación de las bases de datos orientadas a objetos.",
    },
    {
      question:
        "2. ¿Cuál es la función principal de JPA en el desarrollo de aplicaciones?",
      a: "Facilitar la conexión directa con bases de datos no SQL",
      b: "Proveer un marco de trabajo para el manejo de transacciones financieras",
      c: "Ofrecer una API para mapear objetos Java a tablas de bases de datos",
      d: "Establecer protocolos de seguridad para el acceso a bases de datos",
      correct: "c",
      explanation:
        "JPA (Java Persistence API) facilita la conexión entre objetos Java y bases de datos, a través del mapeo objeto-relacional.",
    },
    {
      question:
        "3. En el contexto de ObjectDB, ¿qué representa una entidad JPA?",
      a: "Un script SQL para la creación de tablas",
      b: "Una clase Java que se mapea a una tabla de base de datos",
      c: "Una interfaz para la implementación de lógica de negocios",
      d: "Un procedimiento almacenado en la base de datos",
      correct: "b",
      explanation:
        "Una entidad JPA en ObjectDB es una clase Java anotada con @Entity, que se mapea directamente a una tabla en la base de datos.",
    },
    {
      question: "4. ¿Qué permite la API de Persistence en JPA?",
      a: "Realizar consultas directas a bases de datos SQL",
      b: "Gestionar la persistencia de entidades en la base de datos",
      c: "Implementar lógica de negocios en aplicaciones Java",
      d: "Configurar conexiones de red y protocolos de seguridad",
      correct: "b",
      explanation:
        "La API de Persistence en JPA gestiona la persistencia de entidades, facilitando el acceso y manipulación de datos en la base de datos.",
    },
    {
      question:
        "5. ¿Cuál de las siguientes es una característica clave de las API REST implementadas con Spring Boot?",
      a: "Soporte exclusivo para XML",
      b: "Comunicación basada en procedimientos remotos",
      c: "Uso de HTTP para operaciones CRUD",
      d: "Requiere configuración manual detallada para cada servicio",
      correct: "c",
      explanation:
        "Las API REST con Spring Boot utilizan el protocolo HTTP para realizar operaciones CRUD (Crear, Leer, Actualizar, Borrar) sobre los recursos.",
    },
    {
      question:
        "6. ¿Cómo se define una entidad POJO en el contexto de JPA y ObjectDB?",
      a: "Como una interfaz de servicio web",
      b: "Como un objeto serializable Java que representa una tabla de base de datos",
      c: "Como un procedimiento almacenado en la base de datos",
      d: "Como una consulta SQL personalizada para operaciones complejas",
      correct: "b",
      explanation:
        "Una entidad POJO en JPA y ObjectDB es un objeto serializable Java, anotado con @Entity, que representa una tabla de base de datos.",
    },
    {
      question:
        "7. ¿Qué ventaja ofrece ObjectDB para la creación y ejecución de consultas?",
      a: "Soporte para la ejecución de consultas SQL nativas complejas",
      b: "Capacidad para ejecutar consultas directamente en el servidor web",
      c: "Uso de JPQL para la realización de consultas en la base de datos",
      d: "Integración automática con APIs de terceros para consultas de datos",
      correct: "c",
      explanation:
        "ObjectDB permite el uso de JPQL (Java Persistence Query Language) para realizar consultas, lo cual facilita la manipulación de los datos almacenados.",
    },
    {
      question: "8. ¿Qué es ObjectDB?",
      a: "Una interfaz de programación de aplicaciones (API) para Java",
      b: "Un framework para desarrollo web",
      c: "Una base de datos orientada a objetos",
      d: "Un sistema de gestión de bases de datos relacional",
      correct: "c",
      explanation:
        "ObjectDB es una base de datos orientada a objetos que ofrece JPA como interfaz para el programador.",
    },
    {
      question: "9. ¿Qué ofrece JPA para el manejo de bases de datos?",
      a: "Un protocolo para transferencia de datos",
      b: "Una interfaz para la manipulación de bases de datos orientadas a objetos",
      c: "Un lenguaje de programación específico para bases de datos",
      d: "Un sistema de gestión de bases de datos",
      correct: "b",
      explanation:
        "JPA ofrece una interfaz para el programador, facilitando la manipulación de bases de datos orientadas a objetos.",
    },
    {
      question:
        "10. ¿Cuál es una característica clave de las API REST utilizadas con Spring Boot?",
      a: "Permitir la manipulación directa de la memoria del servidor",
      b: "Facilitar la creación de aplicaciones multiplataforma",
      c: "Comunicación entre cliente y servidor mediante HTTP",
      d: "Utilizar exclusivamente XML para el intercambio de datos",
      correct: "c",
      explanation:
        "Las API REST utilizadas con Spring Boot facilitan la comunicación entre cliente y servidor mediante el protocolo HTTP.",
    },
    {
      question:
        "11. ¿Cuál es un beneficio principal de usar ObjectDB en proyectos Java?",
      a: "Mejora el rendimiento de aplicaciones web escalables",
      b: "Ofrece compatibilidad con lenguajes de programación no Java",
      c: "Permite una integración directa con APIs REST",
      d: "Facilita el desarrollo rápido con objetos Java",
      correct: "d",
      explanation:
        "ObjectDB facilita el desarrollo rápido al permitir trabajar directamente con objetos Java, mejorando la eficiencia en el manejo de datos.",
    },
    {
      question:
        "12. ¿Qué representa JPA en el contexto de desarrollo de aplicaciones?",
      a: "Java Persistence API",
      b: "Java Protocol Application",
      c: "Just PHP Application",
      d: "JavaScript Processing API",
      correct: "a",
      explanation:
        "JPA representa Java Persistence API, una especificación de Java para el acceso a bases de datos en aplicaciones.",
    },
    {
      question:
        "13. ¿Qué característica hace a las API REST con Spring Boot adecuadas para el desarrollo de microservicios?",
      a: "Compatibilidad con el protocolo SOAP",
      b: "Soporte para la comunicación síncrona",
      c: "Facilidad de integración y despliegue continuo",
      d: "Uso de JDBC para la conexión a bases de datos",
      correct: "c",
      explanation:
        "Las API REST con Spring Boot son adecuadas para el desarrollo de microservicios debido a su facilidad de integración y despliegue continuo.",
    },
    {
      question:
        "14. ¿Cuál es una ventaja de utilizar ObjectDB para el manejo de datos en aplicaciones Java?",
      a: "Elimina la necesidad de usar SQL",
      b: "Soporte para consultas en MongoDB",
      c: "Integración nativa con lenguajes de programación C#",
      d: "Capacidad para manejar grandes volúmenes de transacciones SQL",
      correct: "a",
      explanation:
        "Una ventaja de utilizar ObjectDB es que elimina la necesidad de usar SQL, permitiendo un trabajo más directo con objetos Java.",
    },
    {
      question:
        "15. ¿Cuál es la principal ventaja de usar @RestController en Spring Boot?",
      a: "Devolver vistas renderizadas para aplicaciones MVC",
      b: "Permitir la gestión de transacciones SQL",
      c: "Devolver contenido en formato JSON para ser consumido por otras aplicaciones",
      d: "Configurar automáticamente las bases de datos SQL",
      correct: "c",
      explanation:
        "El uso de @RestController en Spring Boot es clave para desarrollar servicios RESTful, ya que permite devolver contenido en formato JSON directamente.",
    },
    {
      question:
        "16. ¿Cómo se define una clase POJO que será una entidad en JPA?",
      a: "Mediante la anotación @Service",
      b: "Con la anotación @Entity y siguiendo las convenciones de JavaBeans",
      c: "Utilizando exclusivamente interfaces",
      d: "A través de la implementación de la interfaz Serializable solamente",
      correct: "b",
      explanation:
        "Una clase POJO se convierte en una entidad JPA al usar la anotación @Entity y siguiendo las convenciones de JavaBeans, como tener un constructor sin argumentos y propiedades privadas con getters y setters.",
    },

    {
      question: "17. ¿Qué permite la anotación @RequestMapping en Spring Boot?",
      a: "La creación de consultas JPA personalizadas",
      b: "La inyección de dependencias de objetos en el contexto de Spring",
      c: "Indicar la ruta URL a la que un controlador o método responderá",
      d: "Configurar las propiedades de conexión a la base de datos",
      correct: "c",
      explanation:
        "La anotación @RequestMapping se utiliza para mapear solicitudes web a métodos de controladores específicos en Spring Boot, indicando la ruta URL específica a atender.",
    },
    {
      question:
        "18. ¿Qué característica distingue a ObjectDB de otros gestores de bases de datos?",
      a: "Soporte nativo para consultas SQL",
      b: "Ser una base de datos orientada a objetos que ofrece JPA como interfaz",
      c: "Utilización de XML para la configuración de entidades",
      d: "Requiere configuración manual para la persistencia de datos",
      correct: "b",
      explanation:
        "ObjectDB se distingue por ser una base de datos orientada a objetos y por ofrecer JPA como interfaz para el programador, facilitando la integración con aplicaciones Java.",
    },
    {
      question: "19. ¿Cuál es la función de la anotación @Entity en JPA?",
      a: "Marcar una interfaz como repositorio",
      b: "Definir una clase como una entidad de base de datos",
      c: "Especificar una consulta personalizada",
      d: "Configurar la conexión a la base de datos",
      correct: "b",
      explanation:
        "La anotación @Entity se utiliza en JPA para indicar que una clase es una entidad de base de datos, lo cual es fundamental para el mapeo objeto-relacional.",
    },
    {
      question: "20. ¿Cómo se puede ampliar un repositorio JPA en Spring Boot?",
      a: "Añadiendo métodos personalizados al repositorio",
      b: "Mediante la configuración de application.properties",
      c: "Usando la anotación @Service",
      d: "Implementando la interfaz CommandLineRunner",
      correct: "a",
      explanation:
        "Se puede ampliar un repositorio JPA en Spring Boot añadiendo métodos personalizados en la interfaz del repositorio, permitiendo operaciones específicas más allá de las CRUD básicas.",
    },
    {
      question:
        "21. ¿Qué estrategia se utiliza para el manejo de errores cuando el controlador no encuentra el modelo en Spring Boot?",
      a: "Redirección a una página de error específica",
      b: "Generación automática de un reporte de errores",
      c: "Lanzamiento de una excepción específica del dominio",
      d: "Configuración de propiedades en application.properties",
      correct: "c",
      explanation:
        "Cuando un controlador no encuentra el modelo en Spring Boot, se recomienda lanzar una excepción específica del dominio para manejar adecuadamenteel error. Esto proporciona un manejo de errores claro y permite respuestas adecuadas al cliente.",
    },
    {
        question: "22. ¿Qué anotación se utiliza en Spring Boot para indicar que una clase es un controlador de vistas MVC?",
        a: "@Service",
        b: "@Controller",
        c: "@Entity",
        d: "@RestController",
        correct: "b",
        explanation: "@Controller se utiliza en Spring Boot para indicar que una clase actuará como un controlador de vistas MVC, manejando peticiones web y devolviendo vistas."
    },
    {
        question: "23. ¿Cuál es la principal función de los repositorios en Spring Boot?",
        a: "Configurar las propiedades de conexión a la base de datos",
        b: "Proveer un mecanismo para la autenticación de usuarios",
        c: "Realizar operaciones de consulta y gestión sobre modelos de datos",
        d: "Controlar la versión del código fuente",
        correct: "c",
        explanation: "Los repositorios en Spring Boot facilitan realizar operaciones de consulta y gestión sobre modelos de datos, abstrayendo el acceso a la base de datos."
    },
    {
        question: "24. ¿Qué permite la anotación @Autowired en Spring Boot?",
        a: "Conectar automáticamente una base de datos",
        b: "Inyectar dependencias de manera automática en los componentes de Spring",
        c: "Mapear una entidad a una tabla de base de datos",
        d: "Definir un punto de inicio para la ejecución de la aplicación",
        correct: "b",
        explanation: "@Autowired permite la inyección automática de dependencias en Spring Boot, simplificando la configuración y uso de componentes y servicios."
    },
    {
        question: "25. ¿Qué mecanismo utiliza Spring Boot para simplificar la configuración inicial de proyectos?",
        a: "XML Configuration",
        b: "Annotation-based Configuration",
        c: "Starters",
        d: "Manual Bean Registration",
        correct: "c",
        explanation: "Spring Boot utiliza 'Starters' para simplificar la configuración inicial de proyectos, proporcionando un conjunto predefinido de dependencias y configuración automática."
    },
    {
        question: "26. ¿Cómo se marcan los métodos en un controlador de Spring Boot para que respondan a peticiones GET?",
        a: "@PostMapping",
        b: "@GetMapping",
        c: "@RequestMapping",
        d: "@PutMapping",
        correct: "b",
        explanation: "@GetMapping es una anotación en Spring Boot que se utiliza para marcar métodos en un controlador para que respondan específicamente a peticiones HTTP GET."
    },
    {
        question: "27. ¿Qué caracteriza a la anotación @PathVariable en Spring Boot?",
        a: "Define parámetros que se pasan en el cuerpo de la petición",
        b: "Especifica valores de configuración en application.properties",
        c: "Extrae valores de la URL de la petición",
        d: "Indica que un parámetro de método debe ser vinculado a un atributo de sesión",
        correct: "c",
        explanation: "@PathVariable se utiliza para extraer valores de la URL de la petición, permitiendo que los controladores manejen dinámicamente las peticiones basadas en la URL."
    },
    {
        question: "28. ¿Cuál es el propósito de usar @RequestBody en un controlador REST de Spring Boot?",
        a: "Definir el tipo de contenido que el controlador puede consumir",
        b: "Especificar que un parámetro de método debe ser vinculado a un atributo de sesión",
        c: "Indicar que un parámetro de método debe ser vinculado al cuerpo de la petición HTTP",
        d: "Validar los datos de entrada de la petición antes de procesarla",
        correct: "c",
        explanation: "@RequestBody se utiliza para indicar que un parámetro de método debe ser vinculado al cuerpo de la petición HTTP, típicamente usado para obtener datos JSON o XML."
    },
    {
        question: "29. ¿Qué ofrece JpaRepository adicionalmente a las operaciones CRUD básicas?",
        a: "Paginación y ordenamiento",
        b: "Operaciones de persistencia con el estándar JPA",
        c: "Métodos para autenticación de usuarios",
        d: "Configuración de seguridad basada en roles",
        correct: "b",
        explanation: "JpaRepository extiende PagingAndSortingRepository y CrudRepository, ofreciendo operaciones de persistencia con el estándar JPA, como por ejemplo, integración con Hibernate."
    },
    {
        question: "30. ¿Qué mecanismo utiliza Spring Boot para simplificar la creación de aplicaciones web?",
        a: "Contenedor de aplicaciones integrado",
        b: "Inversión de control manual",
        c: "Configuración basada en archivos XML",
        d: "Despliegue manual en servidores web",
        correct: "a",
        explanation: "Spring Boot incluye un contenedor de aplicaciones integrado que permite compilar aplicaciones web como archivos .jar ejecutables, simplificando el proceso de desarrollo y despliegue."
    },
    {
        question: "31. ¿Qué característica importante tienen las clases marcadas con @Entity en JPA?",
        a: "Son serializables automáticamente",
        b: "Están configuradas para inyección de dependencias",
        c: "Se mapean a tablas de una base de datos",
        d: "Pueden ser utilizadas como controladores MVC",
        correct: "c",
        explanation: "Las clases marcadas con @Entity en JPA están diseñadas para mapearse a tablas de una base de datos, permitiendo la persistencia de datos de manera organizada."
    },
    {
        question: "32. ¿Cómo se implementa la inyección de dependencias en Spring Boot?",
        a: "Mediante el uso de archivos de configuración XML",
        b: "Utilizando la anotación @Autowired",
        c: "A través de la implementación de interfaces específicas",
        d: "Con la declaración de beans en archivos .properties",
        correct: "b",
        explanation: "Spring Boot utiliza la anotación @Autowired para realizar la inyección de dependencias de manera automática, facilitando la gestión y configuración de los componentes de la aplicación."
    },
    {
        question: "33. En Spring Boot, ¿qué anotación se utiliza para marcar un método que debe responder a peticiones HTTP GET?",
        a: "@PostMapping",
        b: "@DeleteMapping",
        c: "@RequestMapping",
        d: "@GetMapping",
        correct: "d",
        explanation: "@GetMapping es una anotación específica que se utiliza para indicar que un método en un controlador debe manejar las peticiones HTTP GET."
    },
    {
        question: "34. ¿Qué representa la anotación @PathVariable en Spring Boot?",
        a: "Una variable de entorno",
        b: "Un parámetro de URL",
        c: "Un parámetro de formulario",
        d: "Un valor de propiedad de configuración",
        correct: "b",
        explanation: "@PathVariable se utiliza para extraer valores de la URL de la petición, permitiendo que los métodos en los controladores manejen dinámicamente las peticiones basadas en la URL."
    },
    {
        question: "35. ¿Cuál es el propósito de la anotación @RequestBody en Spring Boot?",
        a: "Enviar datos formateados como XML",
        b: "Vincular el cuerpo de la petición HTTP a un parámetro de método",
        c: "Especificar el contenido que puede aceptar el método",
        d: "Autenticar usuarios basados en el cuerpo de la petición",
        correct: "b",
        explanation: "@RequestBody se utiliza para vincular el cuerpo de la petición HTTP a un parámetro de método, permitiendo el manejo fácil de datos enviados, por ejemplo, en formato JSON."
    },
    {
        question: "36. ¿Qué método se utiliza para crear un nuevo recurso utilizando una API REST con Spring Boot?",
        a: "GET",
        b: "POST",
        c: "DELETE",
        d: "PUT",
        correct: "b",
        explanation: "El método HTTP POST se utiliza para crear un nuevo recurso en el servidor, lo cual es una práctica común en el desarrollo de APIs REST con Spring Boot."
    },
    {
        question: "37. ¿Cuál es la finalidad de la anotación @Entity en JPA?",
        a: "Marcar una clase como un servicio",
        b: "Definir una clase como un controlador",
        c: "Indicar que una clase es una entidad de base de datos",
        d: "Especificar una operación de CRUD",
        correct: "c",
        explanation: "La anotación @Entity se utiliza en JPA para indicar que una clase es una entidad de base de datos, lo que significa que sus instancias deben persistirse en la base de datos."
    },
    {
        question: "38. ¿Qué caracteriza a una base de datos orientada a objetos como ObjectDB?",
        a: "Uso exclusivo de SQL para consultas",
        b: "Almacenamiento de datos en tablas",
        c: "Representación de información mediante objetos",
        d: "Incapacidad para almacenar datos complejos",
        correct: "c",
        explanation: "ObjectDB, siendo una base de datos orientada a objetos, se caracteriza por representar y almacenar información mediante objetos, lo que facilita el desarrollo al trabajar con lenguajes de programación orientados a objetos."
    },
    {
        question: "39. ¿Cómo se puede personalizar el comportamiento de una operación CRUD en un repositorio JPA?",
        a: "Anotando la clase con @Service",
        b: "Extendiendo la interfaz CrudRepository",
        c: "Implementando manualmente el método en la clase",
        d: "Añadiendo una definición de método personalizada en la interfaz del repositorio",
        correct: "d",
        explanation: "Se puede personalizar el comportamiento de una operación CRUD en un repositorio JPA añadiendo una definición de método personalizada en la interfaz del repositorio, lo que permite realizar operaciones más específicas sobre la base de datos."
    },
    {
        question: "40. En Spring Boot, ¿qué anotación se utiliza para inyectar automáticamente una dependencia?",
        a: "@Inject",
        b: "@Autowired",
        c: "@Resource",
        d: "@Provide",
        correct: "b",
        explanation: "La anotación @Autowired se utiliza en Spring Boot para inyectar automáticamente las dependencias necesarias en los componentes de la aplicación, simplificando la gestión de dependencias."
    },
    {
        question: "41. ¿Cuál es la ventaja principal de utilizar Spring Boot para el desarrollo de aplicaciones?",
        a: "Eliminación completa del código Java",
        b: "Soporte exclusivo para bases de datos NoSQL",
        c: "Configuración y despliegue simplificados",
        d: "Uso obligatorio de XML para configuración",
        correct: "c",
        explanation: "Spring Boot proporciona una ventaja principal de configuración y despliegue simplificados para el desarrollo de aplicaciones, gracias a su enfoque de convención sobre configuración y los starters que automatizan muchas de las tareas de configuración."
    },
    {
        question: "42. ¿Qué facilita la anotación @PathVariable en Spring Boot?",
        a: "Vinculación de un parámetro de método a un atributo de sesión",
        b: "Inyección de un bean de Spring en el controlador",
        c: "Extracción de valores de la URL de la petición",
        d: "Definición de un parámetro de consulta en la URL",
        correct: "c",
        explanation: "La anotación @PathVariable facilita la extracción de valores de la URL de la petición, permitiendo que los controladores manejen dinámicamente las peticiones basadas en la URL."
    },
    {
        question: "43. ¿Qué anotación se utiliza en Spring Boot para exponer un servicio REST?",
        a: "@Service",
        b: "@Entity",
        c: "@RestController",
        d: "@Component",
        correct: "c",
        explanation: "@RestController combina @Controller y @ResponseBody, dos anotaciones que resultan en servicios web listos para usarse en Spring Boot."
    },
    {
        question: "44. ¿Cómo se define una propiedad en una clase de entidad JPA que se mapea a una columna de base de datos?",
        a: "@Entity",
        b: "@Column",
        c: "@Table",
        d: "@PersistenceContext",
        correct: "b",
        explanation: "@Column se utiliza para especificar la columna de una base de datos a la que se mapea un campo o propiedad de una entidad JPA."
    },
    {
        question: "45. ¿Qué interfaz de repositorio proporciona Spring Data JPA para la paginación y clasificación?",
        a: "CrudRepository",
        b: "JpaRepository",
        c: "PagingAndSortingRepository",
        d: "SimpleJpaRepository",
        correct: "c",
        explanation: "PagingAndSortingRepository extiende CrudRepository, agregando métodos para la paginación y la clasificación de los datos."
    },
    {
        question: "46. ¿En Spring Boot, qué anotación se usa para inyectar dependencias sin necesidad de proveer una implementación concreta?",
        a: "@Inject",
        b: "@Autowired",
        c: "@Resource",
        d: "@DependsOn",
        correct: "b",
        explanation: "@Autowired permite la inyección de dependencias automáticamente, eligiendo la implementación adecuada sin necesidad del desarrollador."
    },
    {
        question: "47. ¿Cuál es la ventaja de usar la anotación @Entity en JPA?",
        a: "Automatiza la inyección de dependencias",
        b: "Define una clase como una entidad de base de datos",
        c: "Crea automáticamente tablas de base de datos",
        d: "Configura la seguridad de la aplicación",
        correct: "b",
        explanation: "@Entity indica que una clase es una entidad JPA, que se debe persistir en la base de datos."
    },
    {
        question: "48. ¿Qué representa la anotación @GeneratedValue en JPA?",
        a: "Especifica un valor por defecto para un campo",
        b: "Indica que un valor se genera automáticamente",
        c: "Define una clave primaria compuesta",
        d: "Configura una relación de base de datos",
        correct: "b",
        explanation: "@GeneratedValue se utiliza para configurar la estrategia de generación de los valores de las claves primarias."
    },
    {
        question: "49. En Spring Boot, ¿qué anotación permite mapear una solicitud HTTP POST a un método específico en un controlador?",
        a: "@GetMapping",
        b: "@PostMapping",
        c: "@PutMapping",
        d: "@RequestMapping",
        correct: "b",
        explanation: "@PostMapping es una anotación compuesta que actúa como un atajo para @RequestMapping(method = RequestMethod.POST)."
    },
    {
        question: "50. ¿Cuál es el propósito de la anotación @Id en JPA?",
        a: "Indicar que el campo es parte de una clave foránea",
        b: "Marcar un campo como la clave primaria de la entidad",
        c: "Generar automáticamente valores para el campo",
        d: "Asociar una entidad con su tabla de base de datos",
        correct: "b",
        explanation: "@Id se utiliza para denotar el campo que actúa como la clave primaria de una entidad en JPA."
    }    
  ];

  const quizForm = document.getElementById("quiz-form");
  const resultDiv = document.getElementById("result");

  function loadQuiz() {
    const quizQuestions = quizData
      .map((q, index) => {
        return `
            <div class="question" id="question-${index}">${q.question}</div>
            <ul class="options">
                <li><input type="radio" name="question${index}" value="a"> ${q.a}</li>
                <li><input type="radio" name="question${index}" value="b"> ${q.b}</li>
                <li><input type="radio" name="question${index}" value="c"> ${q.c}</li>
                <li><input type="radio" name="question${index}" value="d"> ${q.d}</li>
            </ul>
        `;
      })
      .join("");
    quizForm.innerHTML = quizQuestions;
  }

  function submitQuiz() {
    const answers = quizData.map((_, index) => {
      return document.querySelector(`input[name="question${index}"]:checked`)
        ?.value;
    });

    let score = 0;
    let resultsHTML = "";

    answers.forEach((answer, index) => {
      const questionElement = document.getElementById(`question-${index}`);
      if (answer === quizData[index].correct) {
        score++;
        resultsHTML += `<p><a href="#question-${index}"><b>Pregunta ${
          index + 1
        }: correcta.</b></a> ${quizData[index].explanation}</p>`;
        questionElement.classList.remove("incorrect");
      } else {
        resultsHTML += `<p><a href="#question-${index}" class="incorrect"><b>Pregunta ${
          index + 1
        }: INCORRECTA.</b></a> La respuesta correcta era '${
          quizData[index].correct
        }'. ${quizData[index].explanation}</p>`;
        questionElement.classList.add("incorrect");
      }
    });

    const finalScore = (score / quizData.length) * 10;
    resultsHTML =
      `<h2>Tu puntuación es: ${finalScore.toFixed(2)} / 10</h2>` + resultsHTML;

    resultDiv.innerHTML = resultsHTML;
  }

  window.submitQuiz = submitQuiz; // Hacer la función accesible globalmente
  loadQuiz();
});
