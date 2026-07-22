react-project/public/index.html

<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->

    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css"
    />
    <link
      href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      rel="stylesheet"
      integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
      crossorigin="anonymous"
    />
    <title>Task List</title>

  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->

    <script
      src="https://code.jquery.com/jquery-3.2.1.js"
      integrity="sha256-DZAnKJ/6XZ9si04Hgrsxu/8s717jcIzLy3oi35EouyE="
      crossorigin="anonymous"
    ></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js"></script>

  </body>
</html>

react-project/src/App.js
import "./App.css";

function App() {
return (

<div className="container">
<div className="row">
<div className="col s12">
<div id="main" className="card">
<div className="card-content">
<span className="card-title">Task List</span>
<form id="task-form" action="">
<div className="row">
<div className="input-field col s12">
<input type="text" name="task" id="task" />
<label htmlFor="task">New Task</label>
</div>
</div>
<input type="submit" value="Add Task" className="btn" />
{/_ <!-- <button type="submit" value="Add Task" className="btn"> --> _/}
</form>
</div>
<div className="card-action">
<h5 id="task-title">Tasks</h5>
<div className="input-field col s12">
<input type="text" name="filter" id="filter" />
<label htmlFor="filter">Filter Task</label>
</div>
<ul className="collection">
{/_ <!-- <li className="collection-item">
                  List Item
                  <a href="#" className="delete-item secondary-content">
                    <i className="fa fa-remove"></i>
                  </a>
                </li> --> _/}
</ul>
<a className="clear-tasks btn black">Clear Tasks</a>
</div>
</div>
</div>
</div>
</div>
);
}

export default App;
