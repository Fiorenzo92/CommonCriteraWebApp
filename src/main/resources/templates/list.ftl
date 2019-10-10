<div class="generic-container"
    <div class="panel panel-default">


      <!-- Colonna con immagine -->
    	 <div class="col-lg-6">
         	<img src="Images/img1.png" class="img-fluid" alt="picture1">
         <p>I&nbsp;<strong>Common Criteria for Information Technology Security Evaluation</strong>&nbsp;
         (indicato come&nbsp;<strong>Common Criteria</strong>&nbsp;or&nbsp;<strong>CC</strong>) &egrave;
          uno standard internazionale (ISO / IEC 15408) per la certificazione di sicurezza informatica. <p>


          <p>&Egrave;attualmente nella versione 3.1 revisione 5.</p>

          <h3>Search Requirements</h3>
                      <select name="users" ng-model="Name">
                      <option ng-repeat="u in ctrl.getAllUsers()" value="{{u.id}}"">{{u.name}}</option>
                      </select>
                         <br />
                         <br />
                 <input type="button" ng-disabled="!Name || Name.length == 0" class="btn btn-success custom-width" value="Search" ng-click="ctrl.searchRequirements(Name)" />
                         <br />
                         <br />
                        <br />
            <h3>View favorites</h3>

            <input type="button" class="btn btn-success custom-width" value="Favorites" ng-click="ctrl.setListFclass()"/>

       </div>


       <!-- Default panel contents -->
        <div class="panel-heading"><span class="lead">LIST OF FCLASS</span></div>
		<div class="panel-body">
			<div class="table-responsive">
		        <table class="table table-hover">
		            <thead>
		            <tr>
		                <th>ID</th>
		                <th>NAME</th>
		                <th width="100"></th>
		                <th width="100"></th>
		            </tr>
		            </thead>
		            <tbody>
		            <tr ng-repeat="u in ctrl.getAllUsers()">
		                <td>{{u.id}}</td>
		                <td>{{u.name}}</td>
		                <td> <button type="button" ng-click="ctrl.selectUser(u.id)" class="btn btn-success custom-width">Browse</button></td>
		                <td><button type="button" ng-click="ctrl.add(u)" class="btn btn-danger custom-width">Add</button></td>
		            </tr>
		            </tbody>
		        </table>
			</div>

		</div>

    </div>
</div>





