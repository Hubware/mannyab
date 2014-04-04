<h1>Pruebas de concepto::mannyab</h1>

En esta prueba de conceptos se estan utilizando cosas como 

<ul>
  <li>
    <a href="https://www.codebox.io/">codebox.io</a> es un Cloud IDE
    ¿Quieres utilizarlo? <a href="https://www.codebox.io/?affiliate=530ac1a71efea40200000358">Te dejo mi referencia</a> :) te lo agradecere mucho. 
  </li>
  <li>
    <a href="https://www.heroku.com/">Heroku</a> Cloud Application Platform es un PaaS (Plataforma como servicio)
  </li>
  <li>
    Y como veran en el codigo estoy usando <a href="http://nodejs.org/">Nodejs</a>
  </li>
</ul>
 
<h2>Por que codebox?</h2>
<p>
  Bueno tengo corriendo windows en la maquina del trabajo asi que code box trabaja sobre un hambiente linux (ubuntu) y lo mejor es en linea asi que desde el browser tengo linea de comandos y todo el poder de la misma sin sobrecargar mi maquina host con una maquina virtual, por otro lado una VM no era una opcion dado que win8 es medio malo para eso. Con lo cual este cloud IDE me biene de perlas. 
</p>
<p>
  Tambien te permite loggin con la cuenta de github lo cual lo veo bien.
</p>
<p>
  Otra de las caracteristicas de este cloud IDE es que ya tiene cargado por defecto nodejs y <a href="https://www.npmjs.org/">npm</a> el manejador de paquetes de node, asi que ya no tengo que configurar el hambiente de desarrollo, despues investigare como poder cargar una DB, si no la ligare a una en otro server :).
</p>

<p> 
  Para mas cosas de codebox visita la pagina y hay que ponerse a codificar :)
</p>

<h2>Por que heroku?</h2>
<p>
  Bueno como ya les puse es una plataforma de ejecucion como servicio y como todo servicio que se quiere posicionar te da una version gratuita. 
</p>
<p>
  Asi que por que no sacarle un poco de provecho y aprender un poco de este tipo de tecnologias :). 
  Por otro lado eso de configurar servidores no se me da mucho y pues este ya esta configurado para que con git realices el deploy de la aplicacion. Y con solo un comando la envias al servidor. Despues de eso heroku hace su magia.
</p>
<p>
  Por ahora tengo un dyno y es donde tengo ejecutando la app de node.
</p>
<br>
<h3>Sugerencias con Heroku</h3>
<p>
  En heroku se pueden crear apps las cuales las liga a un repositorio propio de heroku al parecer los unicos repos autorizados para poder realizar un deploy a la plataforma (talvez se pueda utilizar github o bitbucket en la premium o de paga). Cada instancia de tu aplicacion corre bajo un dyno. Entre mas dynos mas usuarios podra soportar tu app. Asi que solo podras ejecutar un dyno (una aplicacion) ya que despues de ese te empiezan a cobrar.
</p>
<p>
  En la parte de la configuracion de la app esta un apartado que te indica si deseas ligar la app de heroku aun repositorio de github y te pedira el username/repo con eso te generara las ligas para que puedas llevar el track de tu app. Pero no es magico se tendra que configurar tu repo local para que puedas ver estos cambios en github.
<p>
<p>
  Yo te recomiendo que todos los cambios los realices en el repo de github, tus pruebas las realices en codebox y una vez probado el codigo puedas hacer el deploy a heroku.
</p>
