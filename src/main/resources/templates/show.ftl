<div class="generic-container"
    <div class="panel panel-default">

<div id="exportthis">

<h3><strong> 6 SECURITY REQUIREMENTS </strong><br/></h3>
<p>Section 6 provides security functional and assurance requirements that must be satisfied by a compliant TOE. These requirements consist of functional components from Part 2 of the CC, extended requirements, and an Evaluation Assurance Level (EAL) that contains assurance components from Part 3 of the CC.</p>
<br /><h3><strong>6.1 CONVENTIONS</strong></h3><br />
<p>The CC permits four types of operations to be performed on functional requirements: selection, assignment, refinement, and iteration. These operations, when performed on requirements that derive from CC Part 2 are identified in this ST in the following manner:&nbsp;Selection: Indicated by surrounding brackets, e.g., [selected item].</p>
<ul>
<li>&nbsp;Assignment: Indicated by surrounding brackets and italics, e.g., [assigned item].</li>
<li>&nbsp;Refinement: Refined components are identified by using bold for additional information, or strikeout for deleted text.</li>
<li>&nbsp;Iteration: Indicated by assigning a number in parenthesis to the end of the functional component identifier as well as by modifying the functional component title to distinguish between iterations, e.g., &lsquo;FDP_ACC.1(1), Subset access control (administrators)&rsquo; and &lsquo;FDP_ACC.1(2) Subset access control (devices)&rsquo;.</li>
</ul>
<br /><h3><strong>6.2 TOE SECURITY FUNCTIONAL REQUIREMENTS</strong></h3><br /><p>The security functional requirements for this ST consist of the following components from Part 2 of the CC and extended components defined in Section 5, summarized in Table 10 - Summary of Security Functional Requirements.</p>


  <table class="table">
              <thead>
                       <tr>

              		   <th>ID</th>
              		   <th>NAME</th>

              		    <th width="100"></th>
              		   <th width="100"></th>
                       </tr>
              		   </thead>
              		   <tbody>
                       <tr ng-repeat="u in ctrl.getListFco()">

                       <td>{{u.id}}</td>
                       <td>{{u.name}}</td>

              		  </tr>
              </tbody>
       </table>
 <p style="text-align: center;"><strong>Table 10 &ndash; Summary of Security Functional Requirements</strong></p>
</div>


<div ng-repeat="u in ctrl.getListFco()">
<h3><strong>6.{{$index + 1}}   {{u.id | limitTo: 3}}</strong></h3>
<ol>
  <h3><strong>  {{u.id}} {{u.name}}</strong></h3>

<p> Hierarchical to:

<span ng-repeat="w in ctrl.gethierarchicalshow() " ng-if="u.id == w.idf ">

 {{w.fcomponent }}


</p>


<p> Dependencies:
<span ng-repeat="f in ctrl.getListDependence()" ng-if="u.id == f.idf ">

 {{f.fcomponent }}

</span>


</p>
</ol>

</div>


<br/>
<button type="button" ng-click="ctrl.downloadpdf()" class="btn btn-success custom-width">Download</button>
</div>
</div>