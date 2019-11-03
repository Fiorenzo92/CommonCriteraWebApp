<!DOCTYPE html>

<html lang="en" ng-app="crudApp">
    <head>
        <title>${title}</title>
        <link rel="shortcut icon" href="Images/favicon1.ico">
        <link href="css/bootstrap.css" rel="stylesheet"/>
        <link href="css/app.css" rel="stylesheet"/>
    </head>
    <body>


<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
       <a class="navbar-brand" style="color: #ff0000"><strong>Common Criteria Web Application<strong></a>
    </div>
    <ul class="nav navbar-nav">
      <li><a ui-sref="home" ui-sref-active="active" >Home</a></li>
     <li><a ui-sref="keycc" ui-sref-active="active" >Key CC Concepts & Definitions</a></li>
     <li><a ui-sref="Contactus" >Contact us</a></li>
    </ul>
  </div>
</nav>



<div class="container-fluid text-center">
  <div class="row content">
    <div class="col-sm-3 sidenav">
    <div class="generic-container"
        <div class="panel panel-default">
      <h3><span style="color: #ff0000;"><strong>&nbsp;Security Target </strong></span></h3>
<table class="table table-hover">
<tbody>
<tr>
<td>1</td>
<td>SECURITY TARGET INTRODUCTION</td>
</tr>
<tr>
<td>2</td>
<td> CONFORMANCE CLAIMS</td>
</tr>
 <tr>
<td>3</td>
<td>SECURITY PROBLEM DEFINITION</td>
</tr>
 <tr>
<td>4</td>
<td>SECURITY OBJECTIVES</td>
</tr>
 <tr>
<td>5</td>
<td>EXTENDED COMPONENTS DEFINITION</td>
</tr>
 <tr>
<td><strong style="color: #51b42b">6 </strong></td>
<td >
<strong style="color: #51b42b"> SECURITY REQUIREMENTS </strong>
<br/>
<p><a ui-sref="edit">EDIT</a></p>
<p><a ui-sref="show" >SHOW</a></p>
</td>
</tr>
<tr>
<td>7</td>
<td>TOE SUMMARY SPECIFICATION</td>
</tr>
</tbody>
</table>
  </div>
 </div>
     <div class="col-sm-9 text-left">
        <div ui-view></div>
        <script src="js/lib/angular.min.js" ></script>
        <script src="js/lib/angular-ui-router.min.js" ></script>
        <script src="js/lib/localforage.min.js" ></script>
        <script src="js/lib/ngStorage.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.22/pdfmake.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui/0.4.0/angular-ui.min.js"></script>
        <script src="js/app/app.js"></script>
        <script src="js/app/Service/UserService.js"></script>
        <script src="js/app/Controller/UserController.js"></script>
    </div>
  </div>
</div>








    </body>
</html>